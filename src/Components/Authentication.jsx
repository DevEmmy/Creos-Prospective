import { useState } from "react";
import Image from "next/image";

const Authentication = () => {
  return (
    <>
      <div className="w-full h-screen flexss">
        <div className="w-[40%] h-full bg-primary1 py-[4em] px-[5em] text-primary2 overflow-auto">
          <div className="cflexss gap-[2em]">
            <div className="w-[15em]">
              <Image src="logo.svg" width={100} height={100} alt="CSkidz" />
            </div>
            <div>
              <h1 className="text-[2.3rem] font-[800]">
                Welcome to CuriousKidz!
              </h1>
              <p className="text-sm font-[400] pt-[0.5em]">
                By creating an account, you gain access to a diverse range of
                engaging courses, interactive lessons, and hands-on projects
                designed to inspire young minds. Let's nurture curiosity and
                ignite a passion for learning together!
              </p>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-full bg-white overflow-auto"></div>
      </div>
    </>
  );
};

export default Authentication;
