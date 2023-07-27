import { useState } from "react";
import Image from "next/image";

const Authentication = () => {
  return (
    <>
      <div className="w-full h-full flexss overflow-auto">
        <div className="w-[40%] h-full bg-primary1 py-[4em] px-[5em] text-primary2">
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

        <div className="w-[60%] h-full bg-white"></div>
      </div>
    </>
  );
};

export default Authentication;
