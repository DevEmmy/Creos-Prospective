import React, { useState, useEffect } from "react";

const Contact = () => {
  const EMAIL_REGEX = /^(\w+)([\.\-]?\w+)*\@(\w+)([\.\-]?\w+)*(\.[a-z|A-Z]+)$/;
  const [changing, setChanging] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [valid, setValid] = useState(false);
  const [exceedChar, setExceedChar] = useState("");
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (
      userDetails["firstName"].trim().length > 0 &&
      !emailError &&
      userDetails["lastName"].trim().length > 0 &&
      userDetails["mesage"].trim().length > 0
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
    if (
      EMAIL_REGEX.test(userDetails["email"]) ||
      userDetails["email"].trim().length === 0
    ) {
      setEmailError(false);
    } else if (
      !EMAIL_REGEX.test(userDetails["email"]) &&
      userDetails["email"].trim().length > 0
    ) {
      setEmailError(true);
    }
  }, [changing]);

  const acceptLettersOnly = (name, value, max) => {
    var alphabets = /^[A-Z|a-z| |@#$%^&-]+$/;
    if ((alphabets.test(value) && value.length <= max) || value.length === 0) {
      setUserDetails({ ...userDetails, [name]: value });
      setChanging(!changing);
      setExceedChar("");
    } else if (value.length > max) {
      setExceedChar(name);
    }
  };

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    if (name === "firstName" || name === "lastName") {
      acceptLettersOnly(name, value, 50);
    } else if (name === "message") {
      acceptLettersOnly(name, value, 300);
    } else {
      setUserDetails({ ...userDetails, [name]: value });
      setChanging(!changing);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      console.log("submitted");
      console.log(userDetails);
      setUserDetails({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      // ENDPOINT FOR SUBMITTING USER MESSAGE
    }
  };

  return (
    <>
      <div className="flexss px-[6%] py-[4em] bg-primary6 h-full">
        <div className="flex flex-col justify-between items-start h-[100%] w-1/2 py-[4em] text-primary3 text-[0.8rem]">
          <div className="w-full cflexss gap-[1em]">
            <h1 className="font-[700] text-[1.7rem]">Contact Us</h1>
            <p className="w-[90%]">
              We'd love to hear from you! If you have any questions, inquiries,
              or feedback, please fill out the form below, and our team will get
              back to you as soon as possible.
            </p>
          </div>

          <div className="w-full cflexss gap-[2em] pt-[18em]">
            <div className="w-full flexbm flex-wrap">
              <div className="cfledxdmm gap-[0.5em] w-[70%]">
                <p className="font-[700] text-[1rem]">Business Hours:</p>
                <p>Monday to Friday: 9:00 AM - 6:00 PM (WAT)</p>
                <p>Saturday and Sunday: Closed</p>
              </div>

              <div className="cfledxdmm gap-[0.5em] w-[30%]">
                <p className="font-[700] text-[1rem]">Headquaters:</p>
                <p>23 Majekodunmi St,</p>
                <p>Alagbado 102213, Lagos</p>
              </div>
            </div>

            <div className="w-full flexbm flex-wrap">
              <div className="cfledxdmm gap-[0.5em] w-[70%]">
                <p className="font-[700] text-[1rem]">Email:</p>
                <p>support@curiouskidz.com.ng</p>
              </div>

              <div className="cfledxdmm gap-[0.5em] w-[30%]">
                <p className="font-[700] text-[1rem]">Phone:</p>
                <p>+234 805 988 7668</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flexms h-[100%] w-1/2 px-[4%]">
          <div className="cflexss gap-[1em] w-[100%] p-[1.5em] px-[2em] bg-primary2">
            <h1 className="text-primary1 font-[700] text-[1.5rem] w-[60%]">
              Get in touch with us & let's talk
            </h1>
            <p className="text-primary4 font-[400] text-[0.9rem]">
              We’d love to hear from you. Please fill out this form.
            </p>
            <form
              className="cflexss w-full gap-[1em] font-[600] text-[0.8rem]"
              onSubmit={handleSubmit}
            >
              <div className="flexbm flex-wrap  gap-[0.5em] w-full">
                <div className="cflexss gap-[0.5em]">
                  <p>First name</p>
                  <div className="inputCont2">
                    <input
                      className="input"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={userDetails["firstName"]}
                      onChange={handleChange}
                    />
                  </div>
                  {exceedChar === "firstName" && (
                    <p className="err">*can't exceed 50 characters</p>
                  )}
                </div>
                <div className="cflexss gap-[0.5em]">
                  <p>Last name</p>
                  <div className="inputCont2">
                    <input
                      className="input"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={userDetails["lastName"]}
                      onChange={handleChange}
                    />
                  </div>
                  {exceedChar === "lastName" && (
                    <p className="err">*can't exceed 50 characters</p>
                  )}
                </div>
              </div>
              <div className="cflexss gap-[0.5em] w-full">
                <p>Email</p>
                <div className="inputCont2">
                  <input
                    className="input"
                    type="text"
                    name="email"
                    placeholder="you@company.com"
                    value={userDetails["email"]}
                    onChange={handleChange}
                  />
                </div>
                {emailError && (
                  <p className="err">* Fill in a valid email address</p>
                )}
              </div>
              <div className="cflexss gap-[0.5em] w-full">
                <p>Message</p>
                <div className="inputCont2">
                  <textarea
                    className="input h-[10em] resize-none"
                    type="text"
                    name="message"
                    value={userDetails["message"]}
                    onChange={handleChange}
                  />
                </div>
                {exceedChar === "message" && (
                  <p className="err">*can't exceed 150 characters</p>
                )}
              </div>
              <div className="flexsm w-full gap-[1em] text-[0.7rem] text-primary4 font-[400]">                
                  <input type="checkbox" />
                  <p>you agree to our friendly <span>privacy policy</span></p>                
              </div>
              <button
                type="submit"
                className="w-full py-3 px-5 bg-primary1 font-[700] cursor-pointer rounded-xl text-primary2"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
