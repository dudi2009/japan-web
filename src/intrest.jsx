export default function Intrest() {
  const data = [
    {
      nama: "Food",
      gambar:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      nama: "Language",
      gambar:
        "https://images.unsplash.com/photo-1505940545481-2cac7ae15782?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      nama: "Culture",
      gambar:
        "https://images.unsplash.com/photo-1608451993851-f5364e09027f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      nama: "Anime",
      gambar:
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      nama: "Beautiful Places",
      gambar:
        "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      nama: "Cars",
      gambar:
        "https://images.unsplash.com/photo-1681820819635-7912e0c94cde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <div className="box-warp">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.gambar} alt="Gambar"/>
            <h1>{item.nama}</h1>
          </div>
        ))}
      </div>
      <button className="etc">See all Intresest > </button>
    </>
  );
}
