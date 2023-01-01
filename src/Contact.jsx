import React, { useEffect, useRef, useState } from 'react';
// import Titlesec from '../data/Titlesec';
import validate from './Contact/Validate';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [formValues, setFormValues] = useState({
    name: "",
    mob: "",
    email: "",
    sub: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [dataCorrect, setDataCorrect] = useState(false);
  const form = useRef();

  let name,value;
  const handelChange = (event) => {
      name= event.target.name;
      value= event.target.value;
      setFormValues({ ...formValues, [name]:value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setDataCorrect(true);

    // const { name, mob, email, sub, msg } = formValues;
    // if (( name && mob && email && sub && msg )) {
    //     const res = emailjs.sendForm(
    //       'service_6rls2om',
    //       'template_vws0xri', 
    //       form.current,
    //       'mtxtJDQWj0obDOXLF'
    //       ).then(res => {
    //         console.log("Your mail is sent!");
    //       }).catch(err => console.log(err));
    //         if (res) {
    //             setFormValues({
    //                 name: "",
    //                 mob: "",
    //                 email: "",
    //                 sub: "",
    //                 msg: "",
    //             });
    //             alert("Thank You👍, We'll cantact you soon.");
    //         }
    // } else {
    //     alert("Please, Fill all the data🙏");
    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && dataCorrect) {
      emailjs.sendForm('service_g4kltwd', 'template_r48cqrh', form.current, 'LJN4gBtYfAV-eMu0F')
      .then((res) => {
          alert("Thank You👍, We'll cantact you soon.");
          setFormValues({
            name: "",
            mob: "",
            email: "",
            sub: "",
          });
      }, (error) => {
          console.log(error.text);
      });
    }
  },[formErrors, dataCorrect]);
  
  
  return <div>
      {/* <Titlesec titlesec="Contact Us"/> */}
      <div className="page-content">
      <section className="contact-1" style={{backgroundImage: "url(images/pattern/02.png)"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <div className="section-title mb-2">
                <h6>Get In Touch</h6>
                <h2>Contact Us</h2> 
              </div>
              <div className="contact-main">
                <form ref={form} id="contact-form" className="row" onSubmit={submitForm}>
                  <div className="messge"></div>

                  <div className="form-group col-md-12">
                      <input 
                      name="name" 
                      type="text" 
                      id="ContentPlaceHolder1_txtname" 
                      className="form-control" 
                      autoComplete="off" 
                      value={formValues.name}
                      onChange={handelChange}
                      placeholder="Enter Your Name" />
                      {formErrors.name && <span id="ContentPlaceHolder1_RequiredFieldValidator1" style={{color:"Red", display:"hidden"}}>{formErrors.name}</span>}
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group col-md-12">
                    <input 
                    name="mob" 
                    type="number" 
                    id="ContentPlaceHolder1_txtmob" 
                    className="form-control" 
                    autoComplete="off" 
                    value={formValues.mob}
                    onChange={handelChange}
                    placeholder="Enter Your Mobile Number" />
                    {formErrors.mob && <span id="ContentPlaceHolder1_RequiredFieldValidator1" style={{color:"Red", display:"hidden"}}>{formErrors.mob}</span>}
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group col-md-12">
                    <input 
                    name="email" 
                    type="text" 
                    id="ContentPlaceHolder1_txtemail" 
                    className="form-control" 
                    autoComplete="off" 
                    value={formValues.email}
                    onChange={handelChange}
                    placeholder="Enter Your Email" />
                    {formErrors.email && <span id="ContentPlaceHolder1_RequiredFieldValidator1" style={{color:"Red", display:"hidden"}}>{formErrors.email}</span>}
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group col-md-12">
                  <input 
                  name="sub" 
                  type="date" 
                  id="ContentPlaceHolder1_txtsub" 
                  className="form-control" 
                  autoComplete="off" 
                  value={formValues.sub}
                  onChange={handelChange}
                  placeholder="Enter Your Subject" />
                  {/* <Input type='date'
                    placeholder='Enter BirthDate'
                    value={values.birthdate} onChange={handleChange}
                    name='birthdate'
                    max={current}
                    /> */}
                  {formErrors.sub && <span id="ContentPlaceHolder1_RequiredFieldValidator1" style={{color:"Red", display:"hidden"}}>{formErrors.sub}</span>}
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="col-md-12">
                      <input type="submit" 
                      value="Send Message"
                      className="btn btn-theme btn-radius" 
                      style={{fontSize: "x-large"}} />
                  
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
  </div>;
};

export default Contact;