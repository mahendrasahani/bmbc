
import React, { useState } from 'react'
import { message } from "antd";
import axios from 'axios';

const ContactUsForm = () =>
{

    const apiURL = process.env.REACT_APP_API_URL;
    const userId = localStorage.getItem("id");
    const [contactVal, setContactVal] = useState({
        contact: '',
        subject: '',
        message: '',
        userId: userId
    })
    console.log(contactVal)
    const handleInput = async (event) =>
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setContactVal({
            ...contactVal,
            [name]: value,
        });
    };
    const handleSubmit = async (e) =>
    {
        
        e.preventDefault();
        const allFieldsFilled = Object.values(contactVal).every(
            (val) => val !== ""
        );
        if (!allFieldsFilled)
        {
            message.error("Please fill in all the fields.");
            return;
        }
        const reQuestHelp = await axios.post(apiURL + `help/add`, contactVal)
        if (reQuestHelp.data.success === true)
        {
           
            message.success('Query sent successfully!');
            setContactVal({
                contact: '',
                subject: '',
                message: ''
            })
        } else
        {
            message.error('An error occured please try again');
        }  
    }
    return (
        <>
            <div className="ltn__contact-message-area mb-120 mb--100 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__form-box contact-form-box box-shadow white-bg">
                                <h4 className="title-2">Contact Us</h4>
                                <form id="contact-form" onSubmit={handleSubmit} method="post">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" onChange={handleInput} value={contactVal.subject} name="subject" placeholder="Enter subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-item input-item-email ltn__custom-icon">
                                                <input type="email" onChange={handleInput} value={contactVal.contact} name="contact" placeholder="Enter email address" />
                                            </div>
                                        </div>
                             
                                    </div>
                                    <div className="input-item input-item-textarea ltn__custom-icon">
                                        <textarea name="message" placeholder="Enter message" onChange={handleInput} value={contactVal.message} />
                                    </div>
                                   <div className="btn-wrapper mt-0">
                                        <button className="btn theme-btn-1 mt-4 btn-effect-1 text-uppercase" type="submit">Send Message</button>
                                    </div>
                                    <p className="form-messege mb-0 mt-20" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUsForm