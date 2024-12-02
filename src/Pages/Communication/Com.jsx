import React from "react";
import "./Com.css";

const Com = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8513.661605654408!2d28.88959876442118!3d41.02451368467974!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2svi!4v1730875009999!5m2!1str!2svi"
            width="1684"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="unique"
          ></iframe>
        </div>
      </div>
      <div className="main">
        <div className="contact-bottom">
          <div className="container">
            <div className="contact-titles">
              <h4>İLETİŞİM</h4>
              <h2>İstek ve Önerileriniz İçin Bizimle İletişime Geçin.</h2>
            </div>
            <div className="contact-elements">
              <form className="contact-form">
                <div className="name">
                  <label>
                    İsminiz
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    // value={formData.name}
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div className="email">
                  <label>
                    E-mail Adresiniz
                    <span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div className="topic">
                  <label>
                    Konu
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    // value={formData.subject}
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div className="message">
                  <label>
                    Mesaj
                    <span>*</span>
                  </label>
                  <textarea
                    name="message"
                    // value={formData.message}
                    // onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-sm form-button">
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Com;
