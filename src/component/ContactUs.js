import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import FixedNavbar from "./FixedNavbar";
import Heading from "../component/utils/Heading";
import style from "../styles/contactus.module.css";

const ContactUs = () => {
  return (
    <>
      <FixedNavbar />
      <div className={style.contactus}>
        <div className={style.heroSection}>
          <div className={style.heroText}>
            <h1>Get in touch</h1>
            <p>
              Got questions? Let’s talk. Reach out to us and we’ll be happy to
              answer them!
            </p>
          </div>
          <div className={style.contactImage}>
            <img src="https://www.coffeee.io/contactus.png" alt="" />
          </div>
        </div>

        <div className={style.contactDetails}>
          <div className={style.container}>
            <img src="https://www.coffeee.io/contactusphone.png" alt="" />
            <h3>Email Us</h3>
            <p>
              Write to us at support@coffeee.io and we’ll be sure to get back to
              you as soon as we can.
            </p>
          </div>
          <div className={style.container}>
            <img src="https://www.coffeee.io/contactuschat.png" alt="" />
            <h3>Stay Updated</h3>
            <p>
              Follow us on our social media accounts to stay clued in about new
              updates, features, latest tech news, and much more!
            </p>
            <div className={style.socialIcons}>
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>

        {/* map */}
        <Heading title={"Connect with our Office"} />
        <div className={style.locationMap}>
          <div className={style.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14036.926496660672!2d77.108463!3d28.412267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97ea51e158e399f9!2zMjjCsDI0JzQ0LjIiTiA3N8KwMDYnMzAuNSJF!5e0!3m2!1sen!2sus!4v1675395503342!5m2!1sen!2sus"
              title="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={style.address}>
            <h3>Headquarter</h3>
            <p>
              Gong Labs Private Limited 210, Magnum Towers Sector 58, Off Golf
              Course Extension Road Gurgaon 122011
            </p>
            <p>support@coffeee.io</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
