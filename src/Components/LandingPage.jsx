import React from "react";
import NavBar from "@/AtomicComponents/NavBar";
import Button from "@/AtomicComponents/Button";
import CheckCircle from "@/AtomicComponents/CheckCircle";
import CourseCard from "@/AtomicComponents/CourseCard";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3"
import Image from "next/image";
import { ArrowRightOutline } from "heroicons-react";
import Link from "next/link";
import Footer from "@/AtomicComponents/Footer";

const LandingPage = () => {
  const Courses = [
    {
      image: "film",
      background: "#F5AE1E",
      text: "Film & Animation",
    },
    {
      image: "automotive",
      background: "#8D67CE",
      text: "Autos & Vehicles",
    },
    {
      image: "gaming",
      background: "#FE5972",
      text: "Gaming",
    },
    {
      image: "travel",
      background: "#00AC76",
      text: "Travel & Events",
    },
  ];
  return (
    <>
      <NavBar active={0} />
      <div className="flexbm px-xpadding bg-primary6 py-[4em] text-[0.9rem] flex-wrap">
        <div className="cflexms gap-[1.5em] w-1/2 py-[2em]">
          <h1 className="font-[800] text-[2.2rem]">
            Unlock Your Child's Potential through{" "}
            <span className="text-primary1">Innovative Education</span>
          </h1>
          <p>
            We believe that education should be exciting, engaging, and filled
            with boundless possibilities. We are a leading educational platform
            that sparks curiosity, fosters creativity, and inspires young minds
            to explore the wonders of the world.
          </p>
          <div className="flexss gap-[1em] font-[700] text-[0.8rem]">
            <Link href="/signup">
              <Button className="bg-primary1 text-white flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full">
                <p>Enroll now</p> <ArrowRightOutline size="1em" />
              </Button>
            </Link>
            <Link href="/">
              <Button className="border border-[0.2em] border-primary1 text-primary1 flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full">
                <p>Login as a guest</p>
              </Button>
            </Link>
          </div>
          <div className="flexsm gap-[1em]">
            <div className="flexsm gap-[0.5em]">
              <CheckCircle
                className="flexmm w-[1em] h-[1em] rounded-full bg-primary1 "
                size="0.8em"
              />
              <p>Experienced mentor</p>
            </div>
            <div className="flexsm gap-[0.5em]">
              <CheckCircle
                className="flexmm w-[1em] h-[1em] rounded-full bg-primary1 "
                size="0.8em"
              />
              <p>Quality videos</p>
            </div>
            <div className="flexsm gap-[0.5em]">
              <CheckCircle
                className="flexmm w-[1em] h-[1em] rounded-full bg-primary1 "
                size="0.8em"
              />
              <p>Affordable prices</p>
            </div>
          </div>
        </div>

        <div className="flexes w-1/2">
          <div className="flexmm w-[80%]">
            <Image
              src="/boyImage.svg"
              width={100}
              height={100}
              alt="boyImage"
            />
          </div>
        </div>
      </div>

      <div className="flexbm px-xpadding bg-primary2 py-[5em] text-[0.9rem] flex-wrap">
        <div className="cflexms gap-[1em] w-1/2 pt-[2em]">
          <h1 className="font-[800] text-[1.5rem]">Why Choose CuriousKidz?</h1>
          <div className="flexss gap-[0.5em]">
            <div className="flexmm w-[5em]">
              <Image
                src="innovative.svg"
                width={100}
                height={100}
                alt="innovative"
              />
            </div>
            <p>
              <span className="font-[800]">Innovative Learning: </span>We blend
              education with entertainment, making learning a fun and exciting
              adventure. Through interactive lessons and hands-on experiences,
              we ensure that every child stays engaged and enthusiastic about
              exploring new concepts.
            </p>
          </div>
          <div className="flexss gap-[0.5em]">
            <div className="flexmm w-[5em]">
              <Image src="steam.svg" width={100} height={100} alt="steam" />
            </div>
            <p>
              <span className="font-[800]">STEAM Enthusiasm: </span> Our
              STEAM-focused approach allows children to delve into the worlds of
              Science, Technology, Engineering, Arts, and Mathematics. From
              coding and robotics to art and astronomy, we offer a diverse range
              of disciplines to ignite their interests.
            </p>
          </div>
          <div className="flexss gap-[0.5em]">
            <div className="flexmm w-[5em]">
              <Image
                src="educators.svg"
                width={100}
                height={100}
                alt="educators"
              />
            </div>
            <p>
              <span className="font-[800]">Qualified Educators: </span>Qualified
              Educators: Our team of passionate educators are experts in their
              fields, dedicated to inspiring and mentoring curious young minds.
              With their guidance, your child will reach their full potential
              and develop critical thinking skills.
            </p>
          </div>
          <div className="flexss gap-[1em] font-[700] text-[0.8rem]">
            <Link href="/signup">
              <Button className="bg-primary1 text-white flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full">
                <p>Enroll now</p> <ArrowRightOutline size="1em" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="flexes w-1/2">
          <div className="flexmm w-[82%]">
            <Image
              src="/girlImage.svg"
              width={100}
              height={100}
              alt="girlImage"
            />
          </div>
        </div>
      </div>

      <div className="bg-white cflexss gap-[5em] py-[5em] px-xpadding text-[0.8rem]">
        <h1 className="align-center w-full flexmm font-[800] text-[1.5rem]">
          What We Offer:
        </h1>
        <div className="flexbm flex-wrap">
          <div className="border-r-2 cflexss gap-[1em] w-1/3 px-[2em] ">
            <div className="flexmm text-white bg-primary1 w-[2.5em] h-[2.5em] rounded-[0.5em] font-[800]">
              1
            </div>
            <p className="font-[700]">Curiosity-Driven Programs:</p>
            <p>
              Our programs encourage children to ask questions, think
              critically, and find solutions. We foster a love for learning that
              goes beyond the classroom.
            </p>
          </div>
          <div className="border-r-2 cflexss gap-[1em] w-1/3 px-[2em] ">
            <div className="flexmm text-white bg-primary1 w-[2.5em] h-[2.5em] rounded-[0.5em] font-[800]">
              2
            </div>
            <p className="font-[700]">Hands-On Exploration:</p>
            <p>
              Through interactive projects and experiments, kids gain practical
              experience and see real-world applications of the concepts they
              learn.
            </p>
          </div>
          <div className="cflexss gap-[1em] w-1/3 px-[2em] ">
            <div className="flexmm text-white bg-primary1 w-[2.5em] h-[2.5em] rounded-[0.5em] font-[800]">
              3
            </div>
            <p className="font-[700]">Safe and Engaging Environment:</p>
            <p>
              CuriousKidz provides a secure online platform where children can
              connect with peers, collaborate, and share their discoveries.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white cflexss gap-[5em] py-[5em] px-xpadding text-[0.8rem]">
        <div className="cflexsm gap-[1em] font-[400] text-[0.9rem]">
          <h1 className="align-center w-full flexmm font-[800] text-[1.5rem] text-[#012B1D]">
            Explore Our Programs:
          </h1>
          <p className="w-[70%] text-center">
            Browse through our exciting range of courses designed to cater to
            various age groups and interests. From 3D printing to astronomy,
            there's something for every curious kid!
          </p>
        </div>
        <div className="flexmm w-full gap-[2em] flex-wrap">
          {
            Courses.map((course, i)=>{
              return(
                <>
                  <CourseCard background={course.background} image={course.image} text={course.text} key={i}/>
                </>
              )
            })
          }
          <div className="cflexss gap-[0.5em] text-[1rem] cursor-pointer">
            <div className="bg-primary7 w-[1.5em] h-[1.5em] rounded-full flexmm">
              <ArrowRightOutline size="1em" color="white"/>
            </div>
            <p>See more</p>
          </div>
        </div>
      </div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer />
    </>
  );
};

export default LandingPage;
