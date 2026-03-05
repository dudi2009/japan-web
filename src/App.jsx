import React from "react";
import "./index.css";
import Slider from "./Slider.jsx";
import Map from "./Map.jsx";
import Intrest from "./intrest.jsx";
import Footer from "./Footer.jsx";
import Articles from "./articles.jsx";

export default function () {
  const [dark, setDark] = React.useState(() => {
    const saved = localStorage.getItem("dark-mode");
    return saved === "true";
  });

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
    localStorage.setItem("dark-mode", dark);
  }, [dark]);
  return (
    <>
      <nav>
        <div className="kiri-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#famous">Famous Places</a>
            </li>
            <li>
              <a href="#maps">Maps</a>
            </li>
            <li>
              <a href="#int">Insterest</a>
            </li>
            <li>
              <a href="#articles">Articles</a>
            </li>
          </ul>
        </div>
        <div className="kanan-nav">
          <input type="text" className="search" placeholder="Search" />
          <img
            src="https://i.pinimg.com/1200x/5f/e3/61/5fe3615a6b4129fc904d4423e33cd505.jpg"
            alt=""
            className="profile"
          />
          <button onClick={() => setDark((d) => !d)}>
            <img src="/mode.png" alt="" className="mode" />
          </button>
        </div>
      </nav>
      <div className="isi">
        <div className="background"></div>
        <div className="hero">
          <div className="kiri">
            <img
              src="https://w.wallhaven.cc/full/kn/wallhaven-knmgmn.png"
              alt=""
            />
          </div>
          <div className="kanan">
            <section id="home">
            <h1>Japan</h1>
            </section>
            <p>
              Japan, a mountainous island nation in East Asia known as the "Land
              of the Rising Sun," consists of 6,852 islands, with four main
              islands—Honshu, Hokkaido, Kyushu, and Shikoku—comprising most of
              its land area. As a parliamentary, constitutional monarchy with a
              population of ~123 million, it is a global economic leader
              renowned for blending ancient traditions with high-tech modernity.
            </p>

          </div>
        </div>
      </div>
      <section id="famous">
        <h1 className="popular">
          Popular place On <strong className="jp">Japan</strong>
        </h1>
        <Slider></Slider>
      </section>
      <section id="maps">
        <h1 className="popular">
          <strong className="jp">Japan</strong> Maps
        </h1>
        <Map></Map>
      </section>
      <section id="int">
        <h1 className="popular">
          Find Your Intrest About<strong className="jp"> Japan</strong>
        </h1>
        <Intrest></Intrest>
      </section>
      <section id="articles">
        <h1 className="popular">
          Articles About<strong className="jp"> Japan</strong>
        </h1>
        <Articles></Articles>
      </section>
      <Footer></Footer>
    </>
  );
}
