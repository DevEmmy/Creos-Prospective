import { useState, useRef, useEffect } from "react";
import { EyeOutline, EyeOffOutline, ArrowRightOutline } from "heroicons-react";
import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
  const eMail = useRef(null);
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [hide, setHide] = useState(true);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    eMail.current.focus();
  }, []);

  useEffect(() => {
    if (
      loginDetails["email"].trim().length > 0 &&
      loginDetails["password"].trim().length > 0
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [changing]);

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setLoginDetails({ ...loginDetails, [name]: value });
    setChanging(!changing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      console.log("submitted");
      console.log(loginDetails);
      setLoginDetails({
        email: "",
        password: "",
      });

      // ENDPOINT FOR SUBMITTING LOGIN DETAILS
    }
  };
  return (
    <>
      <div className="w-full h-full flexss overflow-auto">
        <div className="w-[45%] h-full bg-primary1 pt-[4em] pb-[6em] px-[7%] text-primary2">
          <div className="cflexss gap-[1.5em]">
            <Link href="/" className="w-[15em]">
              <Image src="logo.svg" width={100} height={100} alt="CSkidz" />
            </Link>
            <div>
              <h1 className="text-[2.3rem] font-[800]">
                Welcome back to CuriousKidz!
              </h1>
              <p className="text-sm font-[400] pt-[0.5em] text-justify">
                We're thrilled to have you back with CuriousKidz! Rediscover the
                joy of learning with our innovative courses and foster
                creativity, critical thinking, and problem-solving skills. Let's
                make learning an exciting adventure
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

        <div className="w-[55%] h-full bg-white py-[4em] px-[8%]">
          <div className="cflexss w-full gap-[0.7em]">
            <h1 className="text-[1.7rem] font-[700] text-primary3">Sign In</h1>
            <p className="text-sm font-400 text-primary4">
              Sign in to continue your learning journey and explore a world of
              endless possibilities.
            </p>
            <form className="cflexss gap-[1em] w-full" onSubmit={handleSubmit}>
              <div className="sect">
                <p>Email address</p>
                <div className="inputCont">
                  <input
                    className="input"
                    type="text"
                    name="email"
                    placeholder="E.g annette.black@example.com"
                    value={loginDetails["email"]}
                    ref={eMail}
                    onChange={handleChange}
                  />
                </div>
                {emailError && <p className="err">* Fill in a valid email</p>}
              </div>

              <div className="sect">
                <p>Password</p>
                <div className="inputCont">
                  <input
                    className="input"
                    type={hide ? "password" : "text"}
                    name="password"
                    placeholder="Password"
                    value={loginDetails["password"]}
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
              </div>

              {!valid && (
                <div className="err">
                  <p>*All fields are required.</p>
                </div>
              )}

              <div className="flexbm w-[93%] text-[0.8rem]">
                <div className="flexmm gap-[0.5em]">
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>
                <p className="text-primary1 cursor-pointer">Forgot password?</p>
              </div>

              <button
                type="submit"
                className="flexmm gap-[0.5em] rounded-[2em] bg-primary1 px-[2.5em] py-[1em] text-white text-[0.8em] font-[600]"
              >
                <p>Sign In</p>
                <ArrowRightOutline size="12px" />
              </button>
            </form>
            <div className="text-[0.7rem] font-[400]">
              <p>
                Don't have an account?{" "}
                <Link href="/signup">
                  <span className="text-primary1 font-[700] cursor-pointer">
                    Create free account
                  </span>
                </Link>
              </p>
            </div>
            <div className="flexsm flex-wrap gap-[1em] font-[400] text-[0.8rem] text-[#344054] w-[93%]">
              <div className="box">
                <div className="w-[1.5em]">
                  <Image
                    src="google.svg"
                    width={100}
                    height={100}
                    alt="google"
                  />
                </div>
                <p>Sign in with Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
