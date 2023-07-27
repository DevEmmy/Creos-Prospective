import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        <Link href="/auth">
          <li style={{ cursor: "pointer" }}> Create Account Page </li>
        </Link>
      </ul>
    </>
  );
};

export default LandingPage;
