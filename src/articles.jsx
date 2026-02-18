import { MdVapingRooms } from "react-icons/md";

export default function Articles(){

    const data = [
    {
        judul:"How To Plan Your Frist Trip Japan - 2026 Edition",
        des:"lorem2 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        gambar:"https://www.japan-guide.com/news/thumb/255/2601_planning_s.jpg",
        genres:"Travel Guides"
    }
    ]
    return(
        <>
        <div className="articles">
          {data.map((item, index) => (
            <>
            <div className="isi-3" key={index}>
                <div className="kiri">
                <img src={item.gambar} alt="" />
                </div>
                <div className="kanan">
                <label htmlFor="">{item.genres}</label>
                <h3>{item.judul}</h3>
                <p>{item.des}</p>
                </div>
            </div>
            <hr/>
            </>
          ))}
        </div>
        </>
    );
}