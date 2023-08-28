import React, { useEffect, useRef, useState } from "react";
import "./Email.css";
import { useGetContactsQuery } from "../../Api/api";
import emailjs from "@emailjs/browser";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Email = (e) => {
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const [slertText, setAlertText] = useState()
  const [alertType, setAlertType] = useState()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result, 'here is console of emial js');
          if (result.status === 200) {
            setAlertType('success')
            setAlertText('Your message has been sent successfully')
            setOpen(true);
            e.target.reset();
          } else {
            setAlertType('error')
            setAlertText('Message could not be sent due to network issue')
            setOpen(true);
            e.target.reset();
          }
        },
        (error) => {
          e.target.reset();
          setAlertType('error')
          console.log(error.text);
          setAlertText('Message could not be sent due to network issue')
          setOpen(true);
        }
      );
  };
  const { data: contacts, isFetching } = useGetContactsQuery();

  const [contactsDetails, setContactDetails] = useState(contacts);
  // const img_300 = "http://127.0.0.1:8000";
  useEffect(() => {
    setContactDetails(contacts);
  }, [contactsDetails, contacts]);
  if (isFetching) return "loading";

  const contactData = [
    {
      id: 'alsdkfj3234',
      icon: 'bx bx-phone',
      contact_name: 'Phone Number',
      contact_info: '+923244381861'
    },
    {
      id: '23423fsdgf',
      icon: 'bx bx-envelope',
      contact_name: 'Email ID',
      contact_info: 'faizqadri234@gmail.com'
    },
    {
      id: '23423asdkfjlfsdgf',
      icon: 'fa fa-map-marker',
      contact_name: 'Location',
      contact_info: 'Baghbanpura, Lahore'
    },
  ]

  return (
    <div className="reachme-container" id="contact">
      <div className="reachme-title2">
        <h2>I Want To Hear From You</h2>

        <h3>Contact Me</h3>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="reachme-title">
            <div className="row">
              {contactData &&
                contactData.map((details) => (
                  <div className="contact-info  " key={details.id}>
                    <div className="contact-details">
                      <i className={details.icon}></i>
                      <div className="contact-mi">
                        <h4 className="icon-name">{details.contact_name}:</h4>
                        <p className="d-name">{details.contact_info}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
            {slertText}
          </Alert>
        </Snackbar>
        <div className="col-md-6 email-me container">
          <form
            action=""
            className="contact-form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="row">
              <div className="col-md-12 mb-3 hire-me-title"></div>
              <div className="col-md-6 ">
                <input
                  required
                  type="text"
                  name="user_name"
                  id=""
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="col-md-6 ">
                <input
                  required
                  type="email"
                  name="user_email"
                  id=""
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-md-12">
                <input
                  required
                  type="text"
                  name="subject"
                  id=""
                  placeholder="Enter Subject"
                />
              </div>
              <div className="col-md-12 mb-2">
                <textarea
                  required
                  name="message"
                  id=""
                  cols="60"
                  rows="8"
                  placeholder="Your Message"
                ></textarea>
                <button className="hire-btn" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
