import React from "react";


export default function Articles() {
  const data = [
    {
      judul: "How To Plan Your Frist Trip Japan - 2026 Edition",
      des: "",
      gambar: "https://www.japan-guide.com/news/thumb/255/2601_planning_s.jpg",
      genres: "Travel Guides",
      color: "red",
    },
    {
      judul: "Experiencing Hiroshima like a local",
      des: "Everyday discoveries in the capital of the Setouchi Region ",
      gambar:"https://www.japan-guide.com/news/thumb/255/251112_boatrace_t2.jpg",
      genres: "Sponsored Story",
      color: "blue",
    },
    {
      judul: "Travel during New Year",
      des: "",
      gambar:"https://www.japan-guide.com/news/thumb/255/1812_newyear_s.jpg",
      genres: "Travel News",
      color: "purple",
    },
  ];
  return (
    <>
      <div className="articles">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <div className="isi-3">
              <div className="kiri-art">
                <img src={item.gambar} alt="" />
              </div>
              <div className="kanan-art">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="box-kecil" style={{
                    display: "flex",
                    backgroundColor: item.color,
                    width: "5px",
                    height: "10px",
                    borderRadius: "0px 10px 10px 0",
                    marginRight: "8px"
                  }}></div>
                  <label htmlFor="">{item.genres}</label>
                </div>
                <h3>{item.judul}</h3>
                <p>{item.des}</p>
              </div>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
       <button className="etc"> Discovers More Articles </button>
    </>
  );
}
