import React from "react";
import "./index.css"
import Slider from "./Slider.jsx";
import Map from "./Map.jsx";


export default function (){
  const [dark, setDark] = React.useState(() => {
    const saved = localStorage.getItem('dark-mode');
    return saved === 'true';
  });

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('dark-mode', dark);
  }, [dark]);
  return(
    <>
    <nav>
      <div className="kiri-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contanct</li>
          <li>Dont Know</li>
        </ul>
      </div>
      <div className="kanan-nav">
        <input type="text" className="search" placeholder="Search" />
        <img src="https://i.pinimg.com/1200x/5f/e3/61/5fe3615a6b4129fc904d4423e33cd505.jpg" alt="" className="profile" />
        <button onClick={()=>setDark(d=>!d)}><img src="/mode.png" alt="" className="mode" /></button>
      </div>
    </nav>
      <div className="isi">
        <div className="background"></div>
        <div className="hero">
          <div className="kiri">
         <img src="https://w.wallhaven.cc/full/kn/wallhaven-knmgmn.png" alt="" />
          </div>
          <div className="kanan">
             <h1>Japan</h1>
          <p>Japan, a mountainous island nation in East Asia known as the "Land of the Rising Sun," consists of 6,852 islands, with four main islands—Honshu, Hokkaido, Kyushu, and Shikoku—comprising most of its land area. As a parliamentary, constitutional monarchy with a population of ~123 million, it is a global economic leader renowned for blending ancient traditions with high-tech modernity.</p>
            
          </div>
        </div>
      </div>
      <h1 className="popular">Popular place On  <strong className="jp">Japan</strong></h1>
      <Slider></Slider>
      <h1 className="popular"><strong className="jp">Japan</strong> Maps</h1>
      <Map></Map>
    </>
  );
}