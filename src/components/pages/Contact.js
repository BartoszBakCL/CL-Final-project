import React, {useState} from 'react';
import { deepOrange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import {send} from "emailjs-com";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Contact = () => {
    const [agree, setAgree] = useState(true)
        const [toSend, setToSend] = useState({
            name: '',
            message: '',
            mail: '',
        });
    const submitFunc = () => {
        // e.preventDefault();
        console.log(toSend.name, toSend.mail, toSend.message, agree);
        agree ? console.log("You've accepted the Terms and Conditions") : alert("Please indicate that you accept the Terms and Conditions")
    }

        const onSubmit = (e) => {
            e.preventDefault();
            send(
                'service_isr2hon',
                'template_vyhg9ep',
                toSend,
                'user_gR64XR3iOKV2vdGDGtqPu'
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Message send :)")
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                    alert(`Error, ${err}`)
                });

        };

        const handleChange = (e) => {
            setToSend({ ...toSend, [e.target.name]: e.target.value });
        };

    const checkboxHandler = (e) => {
        const checked = e.target.checked;
        checked ? setAgree(true) : setAgree(false);
    }
    return (
        <div>
            <section className="get-in-touch">
                <h1 className="title">Get in touch</h1>
                <form className="contact-form row" onSubmit={onSubmit}>
                    <div className="form-field col x-50">
                        <input id="name" name='name' value={toSend.name} onChange={handleChange} className="input-text js-input" type="text" required/>
                        <label className="label" htmlFor="name">Name</label>
                    </div>
                    <div className="form-field col x-50">
                        <input id="email" name='mail' value={toSend.mail} onChange={handleChange} className="input-text js-input" type="email" required/>
                        <label className="label" htmlFor="mail">E-mail</label>
                    </div>
                    <div className="form-field col x-100">
                        <input id="message" name='message' value={toSend.message} onChange={handleChange} className="input-text js-input" type="text" required/>
                        <label className="label" htmlFor="message">Message</label>
                    </div>
                    <div>
                        <Checkbox onClick={e => checkboxHandler(e)} value={agree} className="contact__checkbox" {...label} defaultChecked sx={{color: deepOrange[800],'&.Mui-checked': {color: deepOrange[600],},}}/>
                        <span>I have read and agreed to the terms and conditions.</span>
                    </div>
                    <div className="form-field col x-100 align-center">
                        <input onClick={submitFunc} className="submit-btn" type="submit" value="Submit"/>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;