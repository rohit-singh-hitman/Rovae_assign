import React from "react";

const Health = () => {
  return (
    <>
      <div className="container-fluid Health">
        <div className="row">
          <div className="col-md-10 col-10 mx-auto">
            <div className="row">
              <div className="col-md-8 col-10 main_header_right ">
                <div className="row Health_butt">
                  <h1>WE DO WHATEVER IT MAKES TO BRING YOU PEACE OF MIND</h1>

                  <a href="/About">
                    <button>Request an appointment</button>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-10 main_header_left">
                <img src="../images/healthcare 1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Health;
