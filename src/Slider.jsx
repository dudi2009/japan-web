export default function Slider() {
  const data = [
    {
      img: "https://w.wallhaven.cc/full/o3/wallhaven-o3v8pm.png",
      title: "Tokyo",
      des: "As Japan’s bustling capital, Tokyo is a high-energy metropolis where neon-lit skyscrapers stand alongside ancient temples. It serves as the nation's political and economic heart, offering a limitless array of shopping, dining, and pop-culture experiences. Visitors can explore the world-famous Tsukiji Market for fresh seafood or find serenity "
    },
    {
      img: "https://w.wallhaven.cc/full/wy/wallhaven-wy2yjq.jpg",
      title: "Shibuya",
      des: "Shibuya is the epicenter of Japan’s cutting-edge fashion and youth trends. It is home to the iconic Shibuya Scramble Crossing, the world's busiest pedestrian intersection, and the beloved Hachiko Statue. Beyond the bright screens of the main streets, the district offers a mix of modern landmarks like Shibuya Sky and nostalgic, hidden izakaya alleys like Nonbei Yokocho. "
    },
    {
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kyoto",
      des:"For a glimpse into traditional Japan, Kyoto is unparalleled. With over 1,200 years of history, it boasts thousands of temples and shrines, including the golden Kinkaku-ji and the endless red gates of Fushimi Inari Taisha. The preserved streets of Gion remain the best place to spot geiko and maiko, while the bamboo groves of Arashiyama offer breathtaking natural beauty"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1733353232022-f55baef22c5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Osaka",
      des:"as the Kitchen of the World, its soul lies in the Dotonbori district, where giant mechanical signs overlook street food stalls serving takoyaki and okonomiyaki. Beyond its culinary delights, the city is a hub for entertainment, housing the historic Osaka Castle and the world-renowned Universal Studios Studios Studios Studioskyoto Japan. "
    },
  ];

  return (
    <>
      <div className="isi-2">
        {data.map((item, index) => (
          <div className="container-warper" key={index}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.des}</p>
          </div>
        ))}
      </div>
    </>
  );
}
