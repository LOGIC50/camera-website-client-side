import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer-container text-light">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div className="col text-center">
              <h3>
                LOGIC <span className="text-danger">Camera Store</span>
              </h3>
              <p>
                We are the world’s only full-service destination for photo,
                video and electronics.{" "}
              </p>
              <p>
                {" "}
                We’re more than a camera store—we offer the best selection and
                prices on professional photography
              </p>
            </div>
            <div className="col link">
              <h3>Information</h3>
              <br />
              <a href="">About Us</a>
              <br />
              <a href="">Services</a>
              <br />
              <a href="">Delivary Information</a>
              <br />
              <a href="">Privacy Policy</a>
              <br />
              <a href="">Terms @ Conditions</a>
              <br />
            </div>
            <div className="col link">
              <h3>My Account</h3>
              <br />
              <a href="">Cart</a>
              <br />
              <a href="">Checkout</a>
              <br />
              <a href="">Contact</a>
              <br />
              <a href="">Validation</a>
              <br />
              <a href="">Wishlist</a>
            </div>
            <div className="col contact text-center">
              <h3>Get In Touch</h3>
              <br />
              <p>+01521-098777</p>
              <p>+01521-098778</p>
              <br />
              <p>logiccamera@gmail.com</p>
              <p>support@example.com</p>
              <br />
              <p>1440 Motijhel Road</p>
              <p>Dhaka, bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
