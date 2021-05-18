import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
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
  );
};

export default Hero;
