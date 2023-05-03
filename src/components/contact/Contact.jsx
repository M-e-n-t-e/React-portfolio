import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_1ivhylj",
            "template_uj2v9dc",
            form.current,
            "u1tJXMwafbok2JcDy"
        );
        e.target.reset();
    };
    return (
        <div>
            <section id='contact'>
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>

                <div className='container contact__container'>
                    <div className='contact__options'>
                        <article className='contact__option'>
                            <MdOutlineEmail className='contact__option-icon' />
                            <h4>Email</h4>
                            <h5>menteeth7@gmail.com</h5>
                            <a href='mailto:menteeth7@gmail.com'>
                                Send a message
                            </a>
                        </article>
                        <article className='contact__option'>
                            <RiMessengerLine className='contact__option-icon' />
                            <h4>Messenger</h4>
                            <h5>Mente</h5>
                            <a href='https://m.me/kos.et' target='_blank'>
                                Send a message
                            </a>
                        </article>
                        <article className='contact__option'>
                            <BsWhatsapp className='contact__option-icon' />
                            <h4>Whatsapp</h4>
                            <a
                                href='https://api.whatsapp.com/send?phone=+251707073089'
                                target='_blank'
                            >
                                Send a message
                            </a>
                        </article>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type='text'
                            name='name'
                            placeholder='Your Full Name'
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            required
                        />
                        <textarea
                            name='message'
                            rows='7'
                            placeholder='Your Message'
                            required
                        ></textarea>
                        <button type='submit' className='btn btn-primary'>
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
