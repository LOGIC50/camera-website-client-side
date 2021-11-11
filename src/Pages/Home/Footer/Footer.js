import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
           <div className="footer-container text-light">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div className="col text-center">
        <h3>Tour <span className='text-danger'>Takers</span></h3>
        <p>Tourism Tiger designs travel & tourism websites that are effective from day one, and our ongoing updates ensure they stay effective</p>
        <p> As dedicated tourism specialists, our focus has allowed us to develop the best possible website features for tour and activity businesses</p>
    </div>
    <div className="col link">
        <h3>Usefull Links</h3>
        <br />
        <a href="">About Us</a>
        <br />
        <a href="">Contact Us</a>
        <br />
        <a href="">Manage Order</a>
        <br />
        <a href="">Place Order</a>
        <br />
        <a href="">Add a service</a>
        <br />
    </div>
    <div className="col link">
        <h3>We Accepts</h3>
        <br />
        <a href="">Mobile Banking</a>
        <br />
        <a href="">ATM card</a>
        <br />
        <a href="">Debit card</a>
        <br />
        <a href="">Bank Transfer</a>
        <br />
        <a href="">Hand Cash</a>
    </div>
    <div className="col contact text-center">
        <h3 >Contact Details</h3>
        <br />
        <p>+01521-098777</p>
        <p>+01521-098778</p>
        <br />
        <p>info@example.com</p>
        <p>support@example.com</p>
        <br />
        <p>1440 Santinogor Road</p>
        <p>Dhaka, bangladesh</p>
    </div>
  </div>
</div> 
        </div>
        </div>
    );
};

export default Footer;