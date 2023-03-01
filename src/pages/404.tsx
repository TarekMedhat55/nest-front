import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-page-content">
        <div className="error-page-img">
          <Image
            src="/images/page-404.png"
            alt="error page"
            width={300}
            height={114}
          />
        </div>
        <h2>page not found!</h2>
        <p>
          The link you clicked may be broken or the page may have been removed.
          <br />
          visit the <Link href="/">Homepage</Link> or
          <Link href="/contact"> Contact us</Link> about the problem
        </p>
        <Link href="/" className="homepage d-flex align-items-center">
          <span className="homepage-svg">
            <BiHomeAlt />
          </span>
          <span className="homepage-title">Back To Home Page</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
