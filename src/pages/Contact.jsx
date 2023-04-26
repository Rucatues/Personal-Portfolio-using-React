import React from 'react'

const Contact = () => {
    return (
        <div>
            <form class="form-row">
                <div className="form-group col-md-3">
                    <label htmlFor="exampleFormControlTextarea1">Name</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                </div>
            </form>
            <input class="btn btn-primary" type="submit" value="Submit"></input>

        </div>
    )
}

export default Contact