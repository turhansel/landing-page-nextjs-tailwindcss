import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="mb-20 mt-16  ">
        <div className="my-0 mx-auto max-w-7xl relative">
          <div className="lg:max-w-2xl absolute top-0 left-0 z-10">
            <h1 className="lg:text-7xl font-semibold mb-14 text-secondary">
              Save your data storage here.
            </h1>
            <p className="lg:max-w-sm text-softgray lg:text-lg font-medium mb-14">
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </p>
            <Link href="#">
              <a className="button bg-[#9C69E2] text-white">Learn More</a>
            </Link>
          </div>
          <div className="text-right md:pt-20">
            <img
              src="/images/hero-image.svg"
              alt="hero-image"
              className="inline-block"
            />
          </div>
        </div>
      </section>
      <section className="container bg-pink-bg bg-no-repeat bg-center">
        <div className="row items-center">
          <div className="column ">
            <img
              src="/images/pink-image.svg"
              alt="We are a high-level data storage bank"
            />
          </div>
          <div className="column flex-1 max-w-full">
            <h2 className="text-secondary text-4xl font-bold mb-10">
              We are a high-level data storage bank
            </h2>
            <p className="text-lg text-softgray">
              The place to store various data that you can access at any time
              through the internet and where you can carry it. This very
              flexible storage area has a high level of security. To enter into
              your own data you must enter the password that you created when
              you registered in this Data Warehouse.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
