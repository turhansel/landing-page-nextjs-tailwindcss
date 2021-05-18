import React from "react";

const FeaturesSection = () => {
  return (
    <section className="container">
      <header className="text-center ">
        <h2 className="text-secondary">Features</h2>
        <p className="max-w-xl my-0 mx-auto">
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
      </header>
      <main>
        <div className="row">
          <div className="column flex-2 max-w-2 ">
            <div className="card">
              <div className="card image"></div>
              <div className="card content">
                <div className="card header ">Search Data</div>
                <div className="card body">
                  Don’t worry if your data is very large, the Data Warehoue
                  provides a search engine, which is useful for making it easier
                  to find data effectively saving time.
                </div>
                <div className="card footer">
                  <button
                    type="button"
                    className="button flex items-center space-x-4 "
                  >
                    <span className="text-secondary ">Learn More</span>
                    <i>
                      <img src="images/right-arrow.svg" alt="logo" />
                    </i>
                  </button>
                </div>
              </div>

              <div></div>
            </div>
          </div>
          <div className="column flex-2 max-w-2"></div>
          <div className="column flex-2 max-w-2"></div>
          <div className="column flex-2 max-w-2"></div>
        </div>
      </main>
    </section>
  );
};

export default FeaturesSection;
