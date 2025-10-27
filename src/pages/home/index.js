import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Project
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <h1
  style={{
    marginTop: "50px", // jarak dari atas
    display: "flex",
    justifyContent: "flex-start", // rata kiri
  }}
>
  <a
    href="/CV_Efendi.pdf"
    download
    className="text_2"
    style={{ textDecoration: "none" }}
  >
    <div
      id="button_p"
      className="ac_btn btn"
      style={{
        background: "linear-gradient(135deg, #0e1010ff 0%, #123e4fff 100%)",
        color: "#fff",
        fontWeight: "600",
        padding: "9px 8px", // ukuran sedikit lebih kecil
        fontSize: "7px",
        borderRadius: "50px",
        boxShadow: "0 0 10px rgba(0, 150, 255, 0.5)",
        transition: "all 0.3s ease",
        display: "inline-flex",
        alignItems: "center",
        gap: "1px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 18px rgba(0, 180, 255, 0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 150, 255, 0.5)";
      }}
    >
      <i className="fa fa-download" style={{ fontSize: "16px" }}></i>
      Download My CV
      <div className="ring one"></div>
      <div className="ring two"></div>
      <div className="ring three"></div>
    </div>
  </a>
</h1>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
