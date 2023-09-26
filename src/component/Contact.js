import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { insertUser } from "../redux/JobSlice";
const Contact = ({title}) => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(()=>{
        document.title = title
    },[])
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            message: message}
        dispatch(insertUser(data));

        setName('')
        setEmail('')
        setMessage('')
    };
    return ( 
        <>
    <main>
        <header className="site-header">
            <div className="section-overlay"></div>

            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-12 col-12 text-center">
                        <h1 className="text-white">Get in touch</h1>

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>

                                <li className="breadcrumb-item active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
                    </div>

                </div>
            </div>
        </header>


        <section className="contact-section section-padding">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-6 col-12 mb-lg-5 mb-3">
                        <iframe className="google-map" src= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4722.136219194832!2d10.772202738834757!3d59.917660271855105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416fa8eba7e84d%3A0xf4e943975503fa30!2sUrtehagen%20(herb%20garden)!5e1!3m2!1sen!2sth!4v1680951932259!5m2!1sen!2sth' width="100%" height="350" style={{ 
                            border:"0px",
                         }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="col-lg-5 col-12 mb-3 mx-auto">
                        <div className="contact-info-wrap">
                            <div className="contact-info d-flex align-items-center mb-3">
                                <i className="custom-icon bi-building"></i>

                                <p className="mb-0">
                                    <span className="contact-info-small-title">Office</span>

                                    Akershusstranda 20, 0150 Oslo, Norway
                                </p>
                            </div>

                            <div className="contact-info d-flex align-items-center">
                                <i className="custom-icon bi-globe"></i>

                                <p className="mb-0">
                                    <span className="contact-info-small-title">Website</span>

                                    <a href="#" className="site-footer-link">
                                        www.jobportal.co
                                    </a>
                                </p>
                            </div>

                            <div className="contact-info d-flex align-items-center">
                                <i className="custom-icon bi-telephone"></i>

                                <p className="mb-0">
                                    <span className="contact-info-small-title">Phone</span>

                                    <a href="tel: 305-240-9671" className="site-footer-link">
                                        305-240-9671
                                    </a>
                                </p>
                            </div>

                            <div className="contact-info d-flex align-items-center">
                                <i className="custom-icon bi-envelope"></i>

                                <p className="mb-0">
                                    <span className="contact-info-small-title">Email</span>

                                    <a href="mailto:info@yourgmail.com" className="site-footer-link">
                                        info@jobportal.co
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-12 mx-auto">
                        <form className="custom-form contact-form" action="#" method="post" onSubmit={handleSubmit} role="form">
                            <h2 className="text-center mb-4">Project in mind? Let’s Talk</h2>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <label for="first-name">Full Name</label>

                                    <input type="text" 
                                    name="full-name" 
                                    id="full-name" 
                                    className="form-control" 
                                    placeholder=" Full Name " 
                                    value={name}
                                    onChange={(e)=> setName(e.target.value)}
                                    required
                                    />
                                </div>

                                <div className="col-lg-6 col-md-6 col-12">
                                    <label for="email">Email Address</label>

                                    <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    pattern="[^ @]*@[^ @]*" 
                                    className="form-control" 
                                    placeholder="Email@gmail.com" 
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}
                                    required/>
                                </div>

                                <div className="col-lg-12 col-12">
                                    <label for="message">Message</label>

                                    <textarea 
                                    name="message" 
                                    rows="6" 
                                    className="form-control" 
                                    id="message" 
                                    value={message}
                                    onChange={(e)=> setMessage(e.target.value)}
                                    placeholder="What can we help you?"></textarea>
                                </div>

                                <div className="col-lg-4 col-md-4 col-6 mx-auto">
                                    <button type="submit" className="form-control">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>

        <section className="cta-section">
            <div className="section-overlay"></div>

            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-10">
                        <h2 className="text-white mb-2">Over 10k opening jobs</h2>

                        <p className="text-white">Gotto Job is a free HTML CSS template for job hunting related websites. This layout is based on the famous Bootstrap 5 CSS framework. Thank you for visiting Tooplate website.</p>
                    </div>

                    <div className="col-lg-4 col-12 ms-auto">
                        <div className="custom-border-btn-wrap d-flex align-items-center mt-lg-4 mt-2">
                            <a href="#" className="custom-btn custom-border-btn btn me-4">Create an account</a>

                            <a href="#" className="custom-link">Post a job</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </main>

        </>
     );
}
 
export default Contact;