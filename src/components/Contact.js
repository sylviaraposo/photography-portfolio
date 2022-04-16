function Contact() {
    return (

        <div className="contact">
            <div className="wrapper">
                <h1>Contact</h1>
                <form action="https://formspree.io/f/mvolrdpg"
                    method="POST"
                    className="contact-form">

                    <label for="name" className="sr-only">Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" />

                    <label for="email" className="sr-only">Email address</label>
                    <input type="email" name="email" id="email" placeholder="Email Address" />
                    

                    <label for="message" className="sr-only">Message</label>
                    <textarea name="message" id="message" cols="30" rows="4" placeholder="Message"></textarea>

                    <button>send message</button>
                </form>
            </div>
        </div>
    )

}

export default Contact;