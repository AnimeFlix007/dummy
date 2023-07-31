import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6" style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>
                        <div className="single-contact">
                            <div className="icon">
                                <i className='bx bx-time'></i>
                            </div>
                            <div className="content">
                                <h3>Opening Hours</h3>
                                <p>Mon - Sat : 10:00 AM - 08:00 PM IST</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6" style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>

                        <div className="single-contact">
                            <div className="icon">
                                <i className='bx bx-location-plus'></i>
                            </div>
                            <div className="content">
                                <h3>Address</h3>
                                <p>Borivali, Mumbai</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 col-sm-12" style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>
                        <div className="single-contact">
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="content">
                                <h3>Phone</h3>
                                <p>+91 9892112515</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;