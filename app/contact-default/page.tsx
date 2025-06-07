'use client';

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact-default.module.css';
import {
    FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
    FaClock, FaInstagram, FaFacebookF, FaTwitter,
    FaCheck, FaTimes, FaChevronDown, FaGlobe
} from 'react-icons/fa';
import { useLanguage } from "@/context";

export default function Contact() {
    const { translations, language } = useLanguage();
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
                    message: translations['mensagem_sucesso']
                });

                setTimeout(() => {
                    resetForm();
                }, 3000);

            } catch (error) {
                console.error('Erro ao enviar e-mail:', error);

                setFeedback({
                    type: 'error',
                    message: translations['mensagem_erro']
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
            question: translations['faq1_pergunta'],
            answer: translations['faq1_resposta']
        },
        {
            question: translations['faq2_pergunta'],
            answer: translations['faq2_resposta']
        },
        {
            question: translations['faq3_pergunta'],
            answer: translations['faq3_resposta']
        },
        {
            question: translations['faq4_pergunta'],
            answer: translations['faq4_resposta']
        },
        {
            question: translations['faq5_pergunta'],
            answer: translations['faq5_resposta']
        },
        {
            question: translations['faq6_pergunta'],
            answer: translations['faq6_resposta']
        }
    ];

    return (
        <section className={styles.contactSection}>
            <div className={styles.gridLines}></div>

            <div className={styles.contactContainer}>
                <div className={styles.contactHeader}>
                    <h2 className={styles.contactTitle}>{translations['fale_conosco']}</h2>
                    <p className={styles.contactSubtitle}>
                        {translations['contato_subtitulo']}
                    </p>
                </div>

                <div className={styles.contactInfoPanel}>
                    <h3 className={styles.infoTitle}>{translations['info_contato']}</h3>

                    <div className={styles.contactInfoList}>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIconBox}>
                                <FaMapMarkerAlt className={styles.infoIcon} />
                            </div>
                            <div className={styles.infoContent}>
                                <span className={styles.infoLabel}>{translations['endereco']}</span>
                                <p className={styles.infoValue}>{translations['endereco_valor']}</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIconBox}>
                                <FaPhoneAlt className={styles.infoIcon} />
                            </div>
                            <div className={styles.infoContent}>
                                <span className={styles.infoLabel}>{translations['telefone']}</span>
                                <p className={styles.infoValue}>{translations['telefone_valor']}</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIconBox}>
                                <FaEnvelope className={styles.infoIcon} />
                            </div>
                            <div className={styles.infoContent}>
                                <span className={styles.infoLabel}>{translations['email']}</span>
                                <p className={styles.infoValue}>{translations['email_valor']}</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIconBox}>
                                <FaClock className={styles.infoIcon} />
                            </div>
                            <div className={styles.infoContent}>
                                <span className={styles.infoLabel}>{translations['horario_funcionamento']}</span>
                                <p className={styles.infoValue}>
                                    {translations['horario_dias_semana']}<br />
                                    {translations['horario_fim_semana']}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <h3 className={styles.infoTitle}>{translations['redes_sociais']}</h3>
                    <div className={styles.socialLinks}>
                        <a href="https://instagram.com/kingbites2023" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <FaInstagram />
                        </a>
                        {/*<a href="#" className={styles.socialLink}>*/}
                        {/*    <FaFacebookF />*/}
                        {/*</a>*/}
                        {/*<a href="#" className={styles.socialLink}>*/}
                        {/*    <FaTwitter />*/}
                        {/*</a>*/}
                        {/*<a href="#" className={styles.socialLink}>*/}
                        {/*    <FaGlobe />*/}
                        {/*</a>*/}
                    </div>

                    <div className={styles.mapContainer}>
                        <img
                            src="/assets/map-placeholder.jpg"
                            alt={translations['localizacao_mapa']}
                            className={styles.map}
                        />
                    </div>
                </div>

                <div className={styles.contactForm}>
                    <h3 className={styles.formTitle}>{translations['envie_mensagem']}</h3>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="hidden" name="time" value={new Date().toLocaleString()} />

                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.formLabel}>{translations['seu_nome']}</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    name="user_name"
                                    type="text"
                                    id="name"
                                    className={styles.formInput}
                                    required
                                    onChange={handleInputChange}
                                    value={formData.user_name}
                                    placeholder={translations['nome_placeholder']}
                                />
                                <div className={styles.inputFocus}></div>
                                <div className={styles.highlightBox}></div>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>{translations['seu_email']}</label>
                            <div className={styles.inputWrapper}>
                                <input
                                    name="user_email"
                                    type="email"
                                    id="email"
                                    className={styles.formInput}
                                    required
                                    onChange={handleInputChange}
                                    value={formData.user_email}
                                    placeholder={translations['email_placeholder']}
                                />
                                <div className={styles.inputFocus}></div>
                                <div className={styles.highlightBox}></div>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.formLabel}>{translations['sua_mensagem']}</label>
                            <div className={styles.inputWrapper}>
                                <textarea
                                    name="message"
                                    id="message"
                                    className={styles.formTextarea}
                                    required
                                    onChange={handleInputChange}
                                    value={formData.message}
                                    placeholder={translations['mensagem_placeholder']}
                                />
                                <div className={styles.inputFocus}></div>
                                <div className={styles.highlightBox}></div>
                            </div>
                        </div>

                        <button type="submit" className={styles.submitButton} disabled={isSending || !isButtonEnabled}>
                            <FaPaperPlane className={styles.buttonIcon} />
                            {isSending ? translations['enviando'] : translations['enviar_mensagem']}
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
                    <h3 className={styles.faqTitle}>{translations['perguntas_frequentes']}</h3>

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