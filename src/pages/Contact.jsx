import React from 'react'

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-container d-flex flex-column align-items-center justify-content-center">
                <form className="form-row">
                    <div className="form-group contact-form">
                        <label htmlFor="exampleFormControlTextarea1">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlTextarea1" />
                        {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} /> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                </form>
                <input className="btn btn-primary" type="submit" value="Submit"></input>
            </div>

        </div>
    )
}

export default Contact