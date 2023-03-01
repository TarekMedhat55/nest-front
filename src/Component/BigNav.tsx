import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
const BigNav = () => {
  return (
    <div className="big-nav">
      <div className="top-nav ">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="top-nav-left d-flex">
            <h6>
              <Link href="/about">about us</Link>
            </h6>
            <h6>
              <Link href="/profile">my account</Link>
            </h6>
            <h6>
              <Link href="/wishlist">wishlist</Link>
            </h6>
            <h6>
              <Link href="/orders">orders</Link>
            </h6>
          </div>
          <div className="top-nav-right d-flex">
            <h6>
              Need help? Call Us:
              <span className="phone">+ 1800 900</span>
            </h6>
            <h6>
              <span>english</span>
              <span>
                <IoIosArrowDown />
              </span>
            </h6>
            <h6>
              <span>usd</span>
              <span>
                <IoIosArrowDown />
              </span>
            </h6>
          </div>
        </div>
      </div>
      {/* start middle */}
      <div className="middle-nav ">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="middle-left d-flex align-items-center">
            <div className="logo">
              <Link href="/">
                <Image
                  src="images/logo.svg"
                  alt="nest logo"
                  width={180}
                  height={55}
                />
              </Link>
            </div>
            <div className="search">
              <form className="search-nav">
                <input
                  type="text"
                  name="search"
                  placeholder="Search For items..."
                />
                <BiSearch />
              </form>
            </div>
          </div>
          <div className="middle-right d-flex">
            <div className="middle-items">
              <Link href="/compare">
                <div className="middle-content d-flex ">
                  <Image
                    src="images/icon-compare.svg"
                    alt="compare"
                    width={25}
                    height={25}
                  />
                  <h6 className="align-self-end">compare</h6>
                </div>
                <p className="count">5</p>
              </Link>
            </div>
            <div className="middle-items">
              <Link href="/wishlist">
                <div className="middle-content d-flex ">
                  <Image
                    src="images/icon-heart.svg"
                    alt="compare"
                    width={25}
                    height={25}
                  />
                  <h6 className="align-self-end">wishlist</h6>
                </div>
                <p className="count">5</p>
              </Link>
            </div>
            <div className="middle-items">
              <Link href="/cart">
                <div className="middle-content d-flex ">
                  <Image
                    src="images/icon-cart.svg"
                    alt="compare"
                    width={25}
                    height={25}
                  />
                  <h6 className="align-self-end">cart</h6>
                </div>
                <p className="count">5</p>
              </Link>
            </div>
            <div className="middle-items">
              <div className="middle-content d-flex ">
                <Image
                  src="images/icon-user.svg"
                  alt="compare"
                  width={25}
                  height={25}
                />
                <h6 className="align-self-end">account</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end middle */}
      <div className="bottom-nav">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="bottom-left d-flex align-items-center">
            <div className="categories">
              <div className="menu-button d-flex align-items-center">
                <span>
                  <HiMenuAlt1 />
                </span>
                <h5>Browse All Categories</h5>
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div className="menu-content">
              <ul className="list-unstyled d-flex">
                <li>
                  <Link href="/deals">Deals</Link>
                </li>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="/vendors">Vendors</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom-right d-flex align-items-center">
            <div className="support">
              <Image
                src="images/icon-headphone.svg"
                alt="support center"
                width={36}
                height={38}
              />
            </div>
            <div className="phone">
              <span>
                1900 - 888
                <p>24/7 Support Center</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNav;
