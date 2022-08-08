import React from 'react';

const Contact = () => {
    return (
        <div className="mt-5">
          <h3 style={{ color: "#A25B0F" }} className="fw-bold">
          Contact US
        </h3>

        <div className="container">
          <div className="row d-flex mt-3">
            <div className="col-12 col-md-6">
            <iframe className='shadow p-3 mb-5 bg-body rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117536.70315368919!2d91.33894976072075!3d22.986219448043688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37536810dae74897%3A0xbb00500c594464ee!2sFeni%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1659942132034!5m2!1sen!2sbd"  width="500" height="400" allowfullscreen="" title='location' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 col-md-6 pt-5">
              <form>
              <div class="mb-3">
                <input
                style={{border:'1px solid #A25B0F'}}
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your Name"
                />
              </div>
              <div class="mb-3">
                <input
                style={{border:'1px solid #A25B0F'}}
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your Email"
                />
              </div>
              <div class="mb-3">
                <textarea
                style={{border:'1px solid #A25B0F'}}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div class="mb-3">
              <button type="button" style={{background:'#A25B0F'}} class="btn h-100 form-control fw-bold text-white ">Submited</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;