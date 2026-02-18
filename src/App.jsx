import React from "react";
import "./index.css"
import Slider from "./Slider.jsx";

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
          <h1>Japan</h1>
          <p>Japan, often referred to as the "Land of the Rising Sun," is an archipelago in East Asia located in the Pacific Ocean. It is comprised of over 14,000 islands, with the four largest being Honshu, Hokkaido, Kyushu, and Shikoku. Approximately 75% of the country's terrain is mountainous and forested, dominated by the dramatic Japanese Alps and the iconic Mount Fuji. Known for its unique blend of ancient traditions and cutting-edge technology, Japan is a global leader in the automotive and electronics industries and is home to the world's fourth-largest economy. Its society places a high value on harmony and discipline, while its culture—ranging from traditional tea ceremonies to modern anime and manga—continues to influence the world. Governed as a unitary parliamentary constitutional monarchy, Japan’s capital, Tokyo, stands as one of the most populous and technologically advanced metropolitan areas globally. </p>
          </div>
          <div className="kanan">
            <img src="https://w.wallhaven.cc/full/kn/wallhaven-knmgmn.png" alt="" />
          </div>
        </div>
      </div>
      <h1 className="popular">Popular place On japan</h1>
      <Slider></Slider>
    </>
  );
}