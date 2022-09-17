import React from "react";

const UserFooter = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="myul">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">WTF in News</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Refund & Cancellation</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <ul className="myul">
                <li>
                  <a href="#">Arenas</a>
                </li>
                <li>
                  <a href="#">Studios</a>
                </li>
                <li>
                  <a href="#">Nutrition</a>
                </li>
               
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Contact</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserFooter;
