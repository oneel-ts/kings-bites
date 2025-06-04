'use client';

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact-default.module.css';
import {
    FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
    FaClock, FaInstagram, FaFacebookF, FaTwitter,
    FaCheck, FaTimes, FaChevronDown, FaGlobe
} from 'react-icons/fa';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [feedback, setFeedback] = useState<{ type: 'error' | 'success'; message: string } | null>(null);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const SERVICE_ID = 'service_n7xfeyo';
    const TEMPLATE_ID = 'template_n63ne7p';
    const PUBLIC_KEY = 'nwhgJcBAbX1LKVeI4';

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });

    const [formValidity, setFormValidity] = useState({
        user_name: false,
        user_email: false,
        message: false
    });

    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, []);

    useEffect(() => {
        const allFieldsFilled = Object.values(formData).every(value => value.length > 0);
        const allFieldsValid = Object.values(formValidity).every(valid => valid);

        setIsButtonEnabled(allFieldsFilled && allFieldsValid);
    }, [formData, formValidity]);

    const validateField = (fieldName: string, value: string) => {
        let isValid = value.length > 0;

        if (fieldName === 'user_email') {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            isValid = emailRegex.test(value);
        }

        setFormValidity(prev => ({
            ...prev,
            [fieldName]: isValid
        }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        validateField(name, value);
    };

    const resetForm = () => {
        setFormData({
            user_name: "",
            user_email: "",
            message: ""
        });

        setFormValidity({
            user_name: false,
            user_email: false,
            message: false
        });

        if (formRef.current) {
            formRef.current.reset();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isButtonEnabled) {
            setIsSending(true);
            setFeedback(null);

            try {
                const templateParams = {
                    from_name: formData.user_name,
                    time: new Date().toLocaleString(),
                    email: formData.user_email,
                    message: formData.message,
                };

                const response = await emailjs.send(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    templateParams,
                    PUBLIC_KEY
                );

                console.log('Email enviado com sucesso!', response);

                setFeedback({
                    type: 'success',
                    message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
                });

                setTimeout(() => {
                    resetForm();
                }, 3000);

            } catch (error) {
                console.error('Erro ao enviar e-mail:', error);

                setFeedback({
                    type: 'error',
                    message: 'Não foi possível enviar sua mensagem. Por favor, tente novamente mais tarde.'
                });
            } finally {
                setIsSending(false);
            }
        }
    };

    const toggleFaq = (index: number) => {
        if (activeFaq === index) {
            setActiveFaq(null);
        } else {
            setActiveFaq(index);
        }
    };

    const faqItems = [
        {
            question: "Qual é o horário de funcionamento do King Bites?",
            answer: "Estamos abertos de segunda a sábado, das 11h às 22h, e aos domingos das 12h às 20h."
        },
        {
            question: "Vocês oferecem opções vegetarianas?",
            answer: "Sim! Temos várias opções vegetarianas no nosso cardápio, incluindo lanches à base de plantas e salgadinhos de queijo."
        },
        {
            question: "Posso fazer pedidos para eventos?",
            answer: "Absolutamente! Oferecemos serviços de catering para eventos de todos os tamanhos. Entre em contato conosco com pelo menos 48 horas de antecedência para discutirmos as opções."
        },
        {
            question: "Vocês fazem entregas?",
            answer: "Sim, realizamos entregas através do DoorDash e também oferecemos a opção de retirada no local."
        },
        {
            question: "Os ingredientes são importados do Brasil?",
            answer: "Utilizamos uma combinação de ingredientes importados do Brasil e ingredientes locais de alta qualidade para criar a autêntica experiência brasileira."
        },
        {
            question: "Qual é o lanche mais popular?",
            answer: "Nosso X-Tudo Burger é o favorito dos clientes! É um hambúrguer completo com ingredientes autênticos brasileiros."
        }
    ];

    return (
        <section className={styles.contactSection}>
            <div className={styles.gridLines}></div>

            <div className={styles.contactContainer}>
                <div className={styles.contactHeader}>
                    <h2 className={styles.contactTitle}>FALE CONOSCO</h2>
                    <p className={styles.contactSubtitle}>
                        Tem alguma dúvida ou sugestão? Envie uma mensagem e retornaremos o mais breve possível!
                    </p>
                </div>

                <div className={styles.contactInfoPanel}>
                    <h3 className={styles.infoTitle}>Informações de Contato</h3>

                    <div className={styles.contactInfoList}>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIconBox}>
                                <FaMapMarkerAlt className={styles.infoIcon} />
                            </div>
                            <div className={styles.infoContent}>
                                <span className={styles.infoLabel}>Endereço</span>
                                <p className={styles.infoValue}>123 Main Street, Orlando, FL</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIconBox}>
                                <FaPhoneAlt className={styles.infoIcon} />
                            </div>
                            <div className={styles.infoContent}>
                                <span className={styles.infoLabel}>Telefone</span>
                                <p className={styles.infoValue}>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIconBox}>
                                <FaEnvelope className={styles.infoIcon} />
                            </div>
                            <div className={styles.infoContent}>
                                <span className={styles.infoLabel}>E-mail</span>
                                <p className={styles.infoValue}>contato@kingbites.com</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIconBox}>
                                <FaClock className={styles.infoIcon} />
                            </div>
                            <div className={styles.infoContent}>
                                <span className={styles.infoLabel}>Horário de Funcionamento</span>
                                <p className={styles.infoValue}>
                                    Seg-Sáb: 11h às 22h<br />
                                    Dom: 12h às 20h
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <h3 className={styles.infoTitle}>Redes Sociais</h3>
                    <div className={styles.socialLinks}>
                        <a href="https://instagram.com/kingbites2023" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaInstagram />
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <FaFacebookF />
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <FaTwitter />
                        </a>
                        <a href="#" className={styles.socialLink}>
                            <FaGlobe />
                        </a>
                    </div>

                    <div className={styles.mapContainer}>
                        <img
                            src="/assets/map-placeholder.jpg"
                            alt="Localização do King Bites"
                            className={styles.map}
                        />
                    </div>
                </div>

                <div className={styles.contactForm}>
                    <h3 className={styles.formTitle}>ENVIE UMA MENSAGEM</h3>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="hidden" name="time" value={new Date().toLocaleString()} />

                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.formLabel}>Seu Nome</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    name="user_name"
                                    type="text"
                                    id="name"
                                    className={styles.formInput}
                                    required
                                    onChange={handleInputChange}
                                    value={formData.user_name}
                                    placeholder="Digite seu nome completo"
                                />
                                <div className={styles.inputFocus}></div>
                                <div className={styles.highlightBox}></div>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>Seu Email</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    name="user_email"
                                    type="email"
                                    id="email"
                                    className={styles.formInput}
                                    required
                                    onChange={handleInputChange}
                                    value={formData.user_email}
                                    placeholder="exemplo@email.com"
                                />
                                <div className={styles.inputFocus}></div>
                                <div className={styles.highlightBox}></div>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.formLabel}>Sua Mensagem</label>
                            <div className={styles.inputWrapper}>
                                <textarea
                                    name="message"
                                    id="message"
                                    className={styles.formTextarea}
                                    required
                                    onChange={handleInputChange}
                                    value={formData.message}
                                    placeholder="Como podemos ajudar? Escreva sua mensagem aqui..."
                                />
                                <div className={styles.inputFocus}></div>
                                <div className={styles.highlightBox}></div>
                            </div>
                        </div>

                        <button type="submit" className={styles.submitButton} disabled={isSending || !isButtonEnabled}>
                            <FaPaperPlane className={styles.buttonIcon} />
                            {isSending ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>
                    </form>

                    {feedback && (
                        <div className={
                            feedback.type === 'success' ? styles.successMessage : styles.errorMessage
                        }>
                            {feedback.type === 'success'
                                ? <FaCheck className={styles.messageIcon} />
                                : <FaTimes className={styles.messageIcon} />
                            }
                            {feedback.message}
                        </div>
                    )}
                </div>

                <div className={styles.faqSection}>
                    <h3 className={styles.faqTitle}>PERGUNTAS FREQUENTES</h3>

                    <div className={styles.faqList}>
                        {faqItems.map((item, index) => (
                            <div key={index} className={styles.faqItem}>
                                <div
                                    className={styles.faqQuestion}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {item.question}
                                    <FaChevronDown className={`${styles.faqIcon} ${activeFaq === index ? styles.faqIconOpen : ''}`} />
                                </div>
                                <div className={`${styles.faqAnswer} ${activeFaq === index ? styles.open : ''}`}>
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}