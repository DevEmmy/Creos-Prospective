import { useState } from "react";
import NavBar from "@/AtomicComponents/NavBar";
import Footer from "@/AtomicComponents/Footer";
import { ArrowRightOutline } from "heroicons-react";
import Button from "@/AtomicComponents/Button";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Price = () => {
  const [enroll, setEnroll] = useState(false);
  const [count, setCount] = useState(50);
  return (
    <>
      <NavBar active={3} background={"primary2"} />
      <div className="cflexss gap-[2em] w-full px-xpadding pt-[5em] pb-[3em] text-[0.9rem] font-[400]">
        <div className="w-full cflexsm gap-[1em] text-center pb-[6em] sm:pb-0">
          <p>Pricing That Supports Learning Adventures</p>
          <h1 className="font-[700] text-[1.5rem] max-w-[25em]">
            Welcome to Curious Kids' Pricing Page! We believe in making quality
            education and engaging content accessible to all young minds.
          </h1>
          <p className="max-w-[45em]">
            Our pricing structure is designed to cater to both individual
            learners and educational institutions, ensuring that the journey of
            curiosity and learning is open to everyone.
          </p>
          <div className="flexss sm1:justify-center gap-[1em] font-[700] text-[0.8rem] flex-wrap sm1:w-full">
            <div
              className="sm:flex flex-grow"
              onClick={() => {
                setEnroll(true);
              }}
            >
              <Button className="border-[0.2em] border-primary1 bg-primary1 text-white flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full sm:w-full">
                <p>Enroll now</p> <ArrowRightOutline size="1em" />
              </Button>
            </div>
            <Link href="/" className="sm:flex flex-grow">
              <Button className="border border-[0.2em] border-primary1 text-primary1 flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full sm:w-full">
                <p>Login as a guest</p>
              </Button>
            </Link>
          </div>
        </div>

        {enroll ? (
          <>
            <div className="w-full cflexmm gap-[2em]">
              <div className="w-[90%] cflexmm">
                <input
                  type="range"
                  className="w-full cursor-pointer"
                  background="#00AC76"
                />
                <p className="pl-[2em] w-full">1 - {count}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flexbm w-full gap-[1em] sm:gap-[2em] text-[0.9rem] font-[400] py-[3em] sm:py-[1em] flex-wrap sm:flex-col-reverse">
              <div className="cflexms gap-[1em] max-w-[35em] h-full h-[40em] sm:h-full">
                <p>For Individual Learners:</p>
                <h1 className="font-[700] text-[1.5rem] text-primary1">
                  Unlock a World of Curiosity for Just ₦1500 per Term!
                </h1>
                <p>
                  Join the Curious Kids' community and embark on an
                  adventure-filled learning experience. For individual learners
                  outside of school settings, our pricing is as affordable as it
                  is enriching.
                </p>
                <p>
                  For just ₦1500 per child per term, your young explorer gains
                  access to captivating educational videos, interactive
                  challenges, and a chance to earn exciting achievements.
                </p>
                <div
                  className="w-full"
                  onClick={() => {
                    setEnroll(true);                    
                  }}
                >
                  <Button
                    className={
                      "flex items-center w-fit gap-1 rounded-full px-[2.5em] py-[1em] text-white bg-primary1 sm:w-full sm:justify-center"
                    }
                  >
                    Enroll now <FaArrowRight />
                  </Button>
                </div>
              </div>
              <div className="max-w-[35em] flexmm">
                <Image src="unlock.svg" width={100} height={100} alt="unlock" />
              </div>
            </div>
            <div className="flexbm w-full gap-[1em] sm:gap-[2em] text-[0.9rem] font-[400] py-[3em] sm:py-[1em] flex-wrap">
              <div className="max-w-[35em] flexmm">
                <Image
                  src="flexible.svg"
                  width={100}
                  height={100}
                  alt="flexible"
                />
              </div>
              <div className="cflexms gap-[1em] max-w-[35em] h-full h-[40em] sm:h-full">
                <p>For Schools and Institutions:</p>
                <h1 className="font-[700] text-[1.5rem] text-primary1">
                  Flexible Pricing According to Student Population
                </h1>
                <p>
                  We believe in supporting schools of all sizes. Our school
                  pricing is designed to accommodate various student
                  populations. For school users, the cost is as low as N1200 per
                  child per term.
                </p>
                <p>
                  Schools can pay according to their specific student population
                  category, ensuring that every student has the opportunity to
                  embark on a journey of exploration and discovery.
                </p>
                <div
                  className="w-full"
                  onClick={() => {
                    setEnroll(true);                    
                  }}
                >
                  <Button
                    className={
                      "flex items-center w-fit gap-1 rounded-full px-[2.5em] py-[1em] text-white bg-primary1 sm:w-full sm:justify-center"
                    }
                  >
                    Enroll now <FaArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Price;
