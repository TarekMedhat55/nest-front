import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="footer-top">
          <div className="footer-content">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="footer-nest">
                  <div className="footer-nest-img">
                    <Image
                      src="images/logo.svg"
                      alt="nest logo"
                      width={200}
                      height={60}
                    />
                  </div>
                  <div className="footer-nest-content">
                    <p>Awesome grocery store website template</p>
                  </div>
                  <div className="footer-nest-details">
                    <ul>
                      <li className="d-flex align-items-center">
                        <Image
                          src="images/icon-location.svg"
                          alt="location"
                          width={20}
                          height={20}
                        />
                        <p>
                          <span className="address">Address</span>: 5171 W
                          Campbell Ave undefined Kent,
                          <br /> Utah 53127 United States
                        </p>
                      </li>
                      <li className="d-flex align-items-center">
                        <Image
                          src="images/icon-contact.svg"
                          alt="support"
                          width={20}
                          height={20}
                        />
                        <p>
                          <span className="address">Call Us</span>: (+91) -
                          540-025-124553
                        </p>
                      </li>
                      <li className="d-flex align-items-center">
                        <Image
                          src="images/icon-email-2.svg"
                          alt="email"
                          width={20}
                          height={20}
                        />
                        <p>
                          <span className="address">Email</span>: sale@Nest.com
                        </p>
                      </li>
                      <li className="d-flex align-items-center">
                        <Image
                          src="images/icon-clock.svg"
                          alt="clock"
                          width={20}
                          height={20}
                        />
                        <p>
                          <span className="address">Hours</span>: 10:00 - 18:00,
                          Mon - Sat
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-2">
                <div className="footer-company">
                  <p>company</p>
                  <ul>
                    <li>about us</li>
                    <li>Delivery Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Contact Us</li>
                    <li>Support Center</li>
                    <li>Careers</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-2">
                <div className="footer-account">
                  <p>account</p>
                  <ul>
                    <li>Sign In</li>
                    <li>View Cart</li>
                    <li>My Wishlist</li>
                    <li>Track My Order</li>
                    <li>Help Ticket</li>
                    <li>Shipping Details</li>
                    <li>Compare products</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-2">
                <div className="footer-account">
                  <p>Corporate</p>
                  <ul>
                    <li>Become a Vendor</li>
                    <li>View Cart</li>
                    <li>Affiliate Program</li>
                    <li>Farm Business</li>
                    <li>Farm Careers</li>
                    <li>Our Suppliers</li>
                    <li>Accessibility</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-2">
                <div className="footer-popular">
                  <p>Popular</p>
                  <ul>
                    <li>Milk & Flavoured Milk</li>
                    <li>Butter and Margarine</li>
                    <li>Eggs Substitutes</li>
                    <li>Marmalades</li>
                    <li>Sour Cream and Dips</li>
                    <li>Tea & Kombucha</li>
                    <li>Cheese</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row d-flex align-items-center justify-content-sm-between">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="copyright">
                <p>
                  © 2022, <span>Nest</span> - React Ecommerce Template
                </p>
                <p>All rights reserved</p>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-4">
              <div className="call-us d-flex align-items-center flex-flex-md-column">
                <div className="call-us-right d-flex align-items-center">
                  <div className="call-us-image">
                    <Image
                      src="images/phone-call.svg"
                      alt="phone"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="call-us-content">
                    <h6>1900 - 6666</h6>
                    <p>Working 8:00 - 22:00</p>
                  </div>
                </div>
                <div className="call-us-left d-flex align-items-center">
                  <div className="call-us-image">
                    <Image
                      src="images/phone-call.svg"
                      alt="phone"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="call-us-content">
                    <h6>1865 - 5555</h6>
                    <p>Working 22:00 - 8:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" d-none d-md-block col-md-6 col-lg-4">
              <div className="follow-us">
                <div className="follow-us-top d-flex align-items-center justify-content-end">
                  <div className="follow-us-content">
                    <p>Follow Us</p>
                  </div>
                  <div className="follow-us-icons d-flex align-items-center">
                    <div className="follow-us-facebook">
                      <Image
                        src="images/icon-facebook-white.svg"
                        alt="facebook"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="follow-us-twitter">
                      <Image
                        src="images/icon-twitter-white.svg"
                        alt="twitter"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="follow-us-instagram">
                      <Image
                        src="images/icon-instagram-white.svg"
                        alt="instagram"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="follow-us-pinterest">
                      <Image
                        src="images/icon-pinterest-white.svg"
                        alt="pinterest"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="follow-us-youtube">
                      <Image
                        src="images/icon-youtube-white.svg"
                        alt="youtube"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
                <p className="d-flex align-items-center justify-content-end follow-us-discount">
                  Up to 15% discount on your first subscribe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
