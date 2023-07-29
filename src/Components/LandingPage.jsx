import React from "react";
import NavBar from "@/AtomicComponents/NavBar";
import Button from "@/AtomicComponents/Button";
import CheckCircle from "@/AtomicComponents/CheckCircle";
import Image from "next/image";
import { ArrowRightOutline } from "heroicons-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <NavBar active={0} />
      <div className="flexbm px-xpadding bg-primary6 py-[4em] text-[0.9rem]">

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
            <Image src="boyImage.svg" width={100} height={100} alt="boyImage"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
