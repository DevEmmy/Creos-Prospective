import { useState, useRef, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { EyeOutline, EyeOffOutline, ArrowRightOutline } from "heroicons-react";
import Link from "next/link";
import Image from "next/image";

const SignUp = () => {
  const EMAIL_REGEX = /^(\w+)([\.\-]?\w+)*\@(\w+)([\.\-]?\w+)*(\.[a-z|A-Z]+)$/;  
  const fName = useRef(null);
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [emailError, setEmailError] = useState(false);  
  const [exceedChar, setExceedChar] = useState(false);
  const [passError, setPassError] = useState(false);
  const [hide, setHide] = useState(true);
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    productKey: "",    
    password: "",
    country: "",
  });

  // useEffect(() => {
  //   fName.current.focus();
  // }, []);

  useEffect(() => {
    if (
      userDetails["fullName"].trim().length > 0 &&
      !emailError &&
      userDetails["productKey"].trim().length > 0 &&      
      !passError &&
      userDetails["password"].length >= 8
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
    
    if (
      (userDetails["password"].length >= 8 &&
        /[!@#$%^&*]/.test(userDetails["password"])) ||
      userDetails["password"].length === 0
    ) {
      setPassError(false);
    } else if (
      (userDetails["password"].length !== 0 &&
        userDetails["password"].length < 8) ||
      !/[!@#$%^&*]/.test(userDetails["password"])
    ) {
      setPassError(true);
    }
  }, [changing]);

  const acceptNumbersOnly = (name, value, max) => {
    var numeric = /^[0-9|+()]+$/;

    if ((numeric.test(value) && value.length <= max) || value.length === 0) {
      setUserDetails({ ...userDetails, [name]: value });
      setChanging(!changing);
      setExceedChar("");
    } else if (value.length > max) {
      setExceedChar(name);
    }
  };

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
    if (name === "fullName") {
      acceptLettersOnly(name, value, 50);
    } else {
      setUserDetails({ ...userDetails, [name]: value });
      setChanging(!changing);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      setUserDetails({
        fullName: "",
        email: "",
        productKey: "",        
        password: "",
        country: "",
      });

      // ENDPOINT FOR SUBMITTING USER DETAILS
    }
  };
  return (
    <>
      <div className="h-full w-full flexss flex-wrap">
        <div className="w-[45%] h-full bg-primary1 pt-[3em] sm:py-[2em] pb-[8em] px-[5em] text-primary2 sm:px-[1.5em] md1:w-full">
          <div className="cflexss gap-[1.5em]">
            <Link href="/" className="w-[15em] sm:w-[12em]">
              <Image src="logo.svg" width={100} height={100} alt="CSkidz" />
            </Link>
            <div>
              <h1 className="text-[2.3rem] sm:text-[1.8rem] font-[800]">
                Welcome to CuriousKidz!
              </h1>
              <p className="text-sm sm:text-[1rem] font-[400] pt-[0.5em] leading-[1.7em]">
                By creating an account, you gain access to a diverse range of
                engaging courses, interactive lessons, and hands-on projects
                designed to inspire young minds. Let's nurture curiosity and
                ignite a passion for learning together!
              </p>
            </div>
            <div className="cflexss gap-[1.3em] pt-[7em] sm:pt-[2em] text-sm sm:text-[1rem] font[600] leading-[1.7em]">
              <div className="w-[7em] sm:w-[8em]">
                <Image src="Review.svg" width={100} height={100} alt="review" />
              </div>
              <p>
                "My daughter's experience with CuriousKidz has been nothing
                short of amazing! She used to find science and math daunting,
                but with the interactive lessons and engaging projects, she's
                now excelling in these subjects.
              </p>
              <p>
                The program not only boosted her academic performance but also
                instilled confidence in her abilities. Thank you, CuriousKidz,
                for unlocking her potential!"
              </p>
              <div className="flexsm gap-[0.5em] w-full">
                <div className="w-[3em]">
                  <Image
                    src="estbg.svg"
                    width={100}
                    height={100}
                    alt="profile"
                  />
                </div>
                <p className="font-[800]">Esther Howard</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[55%] h-full bg-white py-[3em] sm:py-[2em] pl-[6em] pr-[7em] sm:px-[1.5em] md1:w-full">
          <div className="cflexss w-full gap-[0.7em]">
            <h1 className="text-[1.7rem] font-[700] sm:font-[800] text-primary3">
              Create an Account
            </h1>
            <p className="text-sm sm:text-[1.1rem] font-400 text-[#52525B] leading-[1.5em]">
              Join the CuriousKidz community and embark on an exciting journey
              of discovery and learning! Sign up today to unlock a world of
              educational adventures for your child.
            </p>
            <form className="cflexss gap-[1em] w-full">
              <div className="sect">
                <p>Full name</p>
                <div className="inputCont">
                  <input
                    className="input"
                    type="text"
                    name="fullName"
                    placeholder="E.g First Name Last Name Other Name"
                    value={userDetails["fullName"]}
                    ref={fName}
                    onChange={handleChange}
                  />
                </div>
                {exceedChar === "fullName" && (
                  <p className="err">*can't exceed 50 characters</p>
                )}
              </div>

              <div className="sect">
                <p>Email address</p>
                <div className="inputCont">
                  <input
                    className="input"
                    type="text"
                    name="email"
                    placeholder="E.g annette.black@example.com"
                    value={userDetails["email"]}
                    onChange={handleChange}
                  />
                </div>
                {emailError && (
                  <p className="err">* Fill in a valid email address</p>
                )}
              </div>

              <div className="sect">
                <p>Product Key</p>
                <div className="inputCont">
                  <input
                    className="input"
                    type="text"
                    name="productKey"
                    placeholder="Product Key"
                    value={userDetails["productKey"]}
                    onChange={handleChange}
                  />
                </div>
                {exceedChar === "school" && (
                  <p className="err">* Can't exceed 50 characters</p>
                )}
              </div>            
              <div className="sect">
                <p>Password</p>
                <div className="inputCont">
                  <input
                    className="input"
                    type={hide ? "password" : "text"}
                    name="password"
                    placeholder="Password"
                    value={userDetails["password"]}
                    onChange={handleChange}
                  />
                  {hide ? (
                    <EyeOutline
                      className="w-5 h-5 text-gray-500 cursor-pointer"
                      onClick={() => {
                        setHide(!hide);
                      }}
                    />
                  ) : (
                    <EyeOffOutline
                      className="w-5 h-5 text-gray-500 cursor-pointer"
                      onClick={() => {
                        setHide(!hide);
                      }}
                    />
                  )}
                </div>
                {passError && (
                  <p className="text-primary1 text-[0.7rem] sm:text-[0.9rem] font-[400] flex flex-wrap w-[30em] sm:w-full">
                    * Password should be at least 8 characters long and must
                    contain at least one character
                  </p>
                )}
              </div>

              {!valid && (
                <div className="err">
                  <p>*All fields are required.</p>
                </div>
              )}

              <div className="flexbm text-[0.8rem] sm:text-[1rem]">
                <div className="flexmm gap-[0.5em]">
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>
              </div>

              <button
                type="submit"
                className="flexmm gap-[0.5em] rounded-[2em] bg-primary1 w-[90%] px-[2.5em] py-[1em] text-white text-[0.8em] sm:text-[1rem] font-[600] sm:font-[400]"
                onClick={handleSubmit}
              >
                <p>Create account</p>
                <ArrowRightOutline size="12px" />
              </button>
            </form>
            <div className="text-[0.7rem] sm:text-[0.9rem] font-[400]">
              <p>
                Already have an account?{" "}
                <Link href="/signin">
                  <span className="text-primary1 font-[700] cursor-pointer">
                    Log In
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
