import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
    const [state, handleSubmit] = useForm("mnqwgokq");
    if (state.succeeded) {
        return <p className='form-submitted'>Form Submitted, Thank you! I'll be in touch soon.</p>;
    }
    return (

        <div className="contact">
            <div className="contact-header">
                <h1>let's chat</h1>
            </div>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        Email Address *
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="name">
                        Name *
                    </label>
                    <input
                        id="name"
                        type="name"
                        name="name"
                    />
                    <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors}
                    />
                    <label htmlFor="message">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Contact;