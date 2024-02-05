import React from "react";

const Banner = () => {
  return (
    <header>
      <div id="banner">
        <div className="wrapper">
          <div className="main-banner">
            <div className="ban-left">
              <h1>
                {"Let's make "}
                <br />
                beautiful flowers a <br />
                part of your life.
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <button>Shop Now</button>
            </div>
            <div className="ban-right">
              <img src="./assets/images/pngwing 10.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
