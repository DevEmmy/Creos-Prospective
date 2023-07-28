import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const SignUp = () => {
  const EMAIL_REGEX = /^(\w+)([\.\-]?\w+)*\@(\w+)([\.\-]?\w+)*(\.[a-z|A-Z]+)$/;
  const PHONE_REGEX =
    /^([+]?[(]?[0-9]{1,3}?[)]?)?\(?([0-9]{3,4})\)?[\-\.\ ]?([0-9]{3,4})[\-\.\ ]?([0-9]{4})$/;
  const fName = useRef(null);
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [error, setError] = useState(true);
  const [exceedChar, setExceedChar] = useState(false);
  const [numbValid, setNumbValid] = useState(false);
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    school: "",
    phoneNumber: "",
    password: "",
  });

  useEffect(() => {
    fName.current.focus();
  }, []);

  useEffect(() => {
    if (
      userDetails["fullName"].trim().length > 0 &&
      EMAIL_REGEX.test(userDetails["email"]) &&
      userDetails["school"].trim().length > 0 &&
      PHONE_REGEX.test(userDetails["phoneNumber"]) &&
      userDetails["password"].length >= 8 &&
      numbValid
    ) {
      setError(false);
      setValid(true);
    } else {
      setError(true);
      setValid(false);
    }
  }, [changing]);

  const acceptNumbersOnly = (name, value, max) => {
    var numeric = /^[0-9]+$/;

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
    } else if (name === "phoneNumber") {
      acceptNumbersOnly(name, value, 50);
    }
  };

  const handleSubmit = () => {
    if (valid) {
    }
  };
  return (
    <>
      <div className="w-full h-full flexss overflow-auto">
        <div className="w-[45%] h-full bg-primary1 py-[4em] px-[5em] text-primary2">
          <div className="cflexss gap-[1.5em]">
            <div className="w-[15em]">
              <Image src="logo.svg" width={100} height={100} alt="CSkidz" />
            </div>
            <div>
              <h1 className="text-[2.3rem] font-[800]">
                Welcome to CuriousKidz!
              </h1>
              <p className="text-sm font-[400] pt-[0.5em] text-justify">
                By creating an account, you gain access to a diverse range of
                engaging courses, interactive lessons, and hands-on projects
                designed to inspire young minds. Let's nurture curiosity and
                ignite a passion for learning together!
              </p>
            </div>
            <div className="cflexss gap-[1.3em] pt-[7em] text-sm font[400] text-justify">
              <div className="w-[7em]">
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

        <div className="w-[55%] h-full bg-white py-[4em] px-[6em]">
          <div className="cflexss w-full gap-[0.7em]">
            <h1 className="text-[1.7rem] font-[700] text-primary3">
              Create an Account
            </h1>
            <p className="text-sm font-400 text-primary4">
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
                    placeholder="E.g FirstName LastName"
                    value={userDetails["fullName"]}
                    ref={fName}
                    onChange={handleChange}
                  />
                </div>
                {exceedChar === "fullName" && (
                  <p id="err">*can't exceed 50 characters</p>
                )}
              </div>              
              {error && (
                <div className="err">
                  <p>*All fields are required.</p>
                </div>
              )}
            </form>            
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;