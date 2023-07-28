import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        <Link href="/signup">
          <li className="underline cursor-pointer p-[1em]"> Create Account Page </li>          
        </Link>
        <Link href="/signin">
          <li className="underline cursor-pointer p-[1em]"> Login Page </li>          
        </Link>
      </ul>
    </>
  );
};

export default LandingPage;
