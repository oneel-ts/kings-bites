'use client';

import {useState, useRef, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact-default.module.css';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [feedback, setFeedback] = useState<{ type: 'error' | 'success'; message: string } | null>(null);

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

                console.log('E-mail enviado com sucesso!', response);
                
                setFeedback({
                    type: 'success',
                    message: 'Mensagem enviada com sucesso!'
                });
                
                // Reiniciar o formulário após envio bem-sucedido
                setTimeout(() => {
                    resetForm();
                }, 3000);
                
            } catch (error) {
                console.error('Erro ao enviar e-mail:', error);
                
                setFeedback({
                    type: 'error',
                    message: `Erro ao enviar o e-mail: ${error}`
                });
            } finally {
                setIsSending(false);
            }
        }
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <h2 className={styles.contactTitle}>Contact Us</h2>
                <p className={styles.contactSubtitle}>
                    Have any questions or suggestions? Send us a message and we will get back to you as soon as
                    possible!
                </p>

                <form ref={formRef} className={styles.contactForm} onSubmit={handleSubmit}>
                    <input type="hidden" name="time" value={new Date().toLocaleString()}/>

                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                        <input 
                            name="user_name" 
                            type="text" 
                            id="name" 
                            className={styles.formInput} 
                            required
                            onChange={handleInputChange}
                            value={formData.user_name}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>Your Email</label>
                        <input 
                            name="user_email" 
                            type="email" 
                            id="email" 
                            className={styles.formInput} 
                            required
                            onChange={handleInputChange}
                            value={formData.user_email}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.formLabel}>Your Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            className={styles.formTextarea} 
                            required
                            onChange={handleInputChange}
                            value={formData.message}
                        />
                    </div>

                    <button type="submit" className={styles.submitButton} disabled={isSending || !isButtonEnabled}>
                        {isSending ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                </form>

                {feedback && (
                    <div
                        className={
                            feedback.type === 'success' ? styles.successMessage : styles.errorMessage
                        }
                    >
                        {feedback.message}
                    </div>
                )}
            </div>
        </section>
    );
}