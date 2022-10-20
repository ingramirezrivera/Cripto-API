import React from "react";
import './ContactStyles.css'
import Img from '../assets/trade.png'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        {/* left */}
        <div className="left">
          <img src={Img} alt='Trade' />
        </div>
        {/* right */}
        <div className="right">
          <h2 className="title">Let's connect</h2>
          <div className="form">
            <form>
              <label>Name</label>
              <input type="text" placeholder="Your name..." required />
              <label>Phone</label>
              <input
                type="number"
                placeholder="Your phone number..."
                required
              />
              <label>Email</label>
              <input type="email" placeholder="Your Email" required />
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
