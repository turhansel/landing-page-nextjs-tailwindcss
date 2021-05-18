import React from "react";

const PinkSection = () => {
  return (
    <section className="container bg-no-repeat bg-center lg:mb-[149px]">
      <div className="bg-pink-bg bg-center bg-cover bg-no-repeat">
        <div className="row items-center">
          <div className="column ">
            <img
              src="/images/pink-image.svg"
              alt="We are a high-level data storage bank"
            />
          </div>
          <div className="column flex-1 max-w-full">
            <div className="lg:pr-20">
              <h2 className="text-secondary text-4xl font-bold mb-10">
                We are a high-level data storage bank
              </h2>
              <p className="text-lg text-softgray">
                The place to store various data that you can access at any time
                through the internet and where you can carry it. This very
                flexible storage area has a high level of security. To enter
                into your own data you must enter the password that you created
                when you registered in this Data Warehouse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinkSection;
