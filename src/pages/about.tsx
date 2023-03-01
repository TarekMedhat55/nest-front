import Layout from "@/Component/Layout";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { provides } from "../data";

type ProvideTypes = {
  id: number;
  title: string;
  dec: string;
  img: string;
};
const About = () => {
  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;

    return <div className={className} onClick={onClick} />;
  };
  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return <div className={className} onClick={onClick} />;
  };
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Layout title="About Us - Nest">
      <div className="about-info">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="about-info-img">
                <Image
                  src="/images/about-1.png"
                  alt="about us"
                  width={609}
                  height={694}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-info-content">
                <h1>Welcome to Nest</h1>
                <p className="first-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate id est laborum.
                </p>
                <p className="second-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate id est laborum.
                </p>
                <div className="about-info-slider">
                  <Slider {...settings}>
                    <div className="about-slider-img">
                      <Image
                        src="/images/about-2.png"
                        alt="about"
                        width={179}
                        height={219}
                      />
                    </div>
                    <div className="about-slider-img">
                      <Image
                        src="/images/about-3.png"
                        alt="about"
                        width={179}
                        height={219}
                      />
                    </div>
                    <div className="about-slider-img">
                      <Image
                        src="/images/about-4.png"
                        alt="about"
                        width={179}
                        height={219}
                      />
                    </div>
                    <div className="about-slider-img">
                      <Image
                        src="/images/about-3.png"
                        alt="about"
                        width={179}
                        height={219}
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="we-provide text-center">
        <div className="container">
          <div className="provide-title">
            <h3>what we provide</h3>
            <div className="provide-wave">
              <Image
                src="/images/wave.png"
                alt="provide-title"
                width={150}
                height={15}
              />
            </div>
          </div>
          <div className="provide-content">
            <div className="row">
              {provides.map((provide: ProvideTypes) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={provide.id}>
                    <div className="provide-item">
                      <div className="provide-img">
                        <Image
                          src={provide.img}
                          alt={provide.title}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="provide-details">
                        <h5>{provide.title}</h5>
                        <p>{provide.dec}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
