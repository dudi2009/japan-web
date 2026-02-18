import { useRef, useEffect } from "react";

export default function Slider() {
  const scrollRef = useRef(null);
  const data = [
    {
      img: "https://w.wallhaven.cc/full/o3/wallhaven-o3v8pm.png",
      title: "Tokyo",
      des: "As Japan’s bustling capital, Tokyo is a high-energy metropolis where neon-lit skyscrapers stand alongside ancient temples. It serves as the nation's political and economic heart, offering a limitless array of shopping, dining, and pop-culture experiences. Visitors can explore the world-famous Tsukiji Market for fresh seafood or find serenity ",
    },
    {
      img: "https://w.wallhaven.cc/full/wy/wallhaven-wy2yjq.jpg",
      title: "Shibuya",
      des: "Shibuya is the epicenter of Japan’s cutting-edge fashion and youth trends. It is home to the iconic Shibuya Scramble Crossing, the world's busiest pedestrian intersection, and the beloved Hachiko Statue. Beyond the bright screens of the main streets, the district offers a mix of modern landmarks like Shibuya Sky and nostalgic, hidden izakaya alleys like Nonbei Yokocho. ",
    },
    {
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kyoto",
      des: "For a glimpse into traditional Japan, Kyoto is unparalleled. With over 1,200 years of history, it boasts thousands of temples and shrines, including the golden Kinkaku-ji and the endless red gates of Fushimi Inari Taisha. The preserved streets of Gion remain the best place to spot geiko and maiko, while the bamboo groves of Arashiyama offer breathtaking natural beauty",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1733353232022-f55baef22c5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Osaka",
      des: "as the Kitchen of the World, its soul lies in the Dotonbori district, where giant mechanical signs overlook street food stalls serving takoyaki and okonomiyaki. Beyond its culinary delights, the city is a hub for entertainment, housing the historic Osaka Castle and the world-renowned Universal Studios Studios Studios Studioskyoto Japan. ",
    },
    {
      img: "https://images.unsplash.com/photo-1706516510664-a8d1e7577eeb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kamakura",
      des: "Kamakura is a historic coastal city in Kanagawa Prefecture, often called the Kyoto of the EastThe city holds a pivotal place in Japanese history as the former political center of the country. In 1185, Minamoto no Yoritomo established the Kamakura Shogunate, marking the beginning of Japan’s medieval era and the rise of samurai governance. This  city's landscape today.",
    },
    {
      img: "https://www.his-usa.com/destination-japan/up_img/cke/audio/2025213/03ecfee8f7cb99a728c0ed6379beaa48_1739472455.jpg",
      title: "Neko-jima",
      des: "Known as Japan's Cat Island, Aoshima is a remote sanctuary where feline residents vastly outnumber the small human population. Originally brought to control mice on fishing boats, the cats now roam freely through the quiet village and harbor. This peaceful destination offers a unique experience for animal lovers looking to escape the city's hustle and bustle.",
    },
  ];

  const duplicatedData = [...data, ...data, ...data];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const itemWidth = 350; // Lebar card (300px) + gap (50px)

    // Set posisi awal ke set data kedua (tengah) agar bisa scroll ke dua arah
    el.scrollLeft = itemWidth * data.length;

    // 2. Fungsi Autoplay
    const autoPlay = setInterval(() => {
      el.scrollBy({ left: itemWidth, behavior: "smooth" });
    }, 5000); // Jalan setiap 3 detik

    // 3. Logika Infinite Loop (Reset posisi scroll diam-diam)
    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.offsetWidth;

      if (el.scrollLeft <= 0) {
        el.scrollLeft = itemWidth * data.length;
      } else if (el.scrollLeft >= maxScroll) {
        el.scrollLeft = itemWidth * data.length;
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(autoPlay);
      el.removeEventListener("scroll", handleScroll);
    };
  }, [data.length]);

  return (
    <>
      <div className="isi-2" ref={scrollRef}>
        {duplicatedData.map((item, index) => (
          <div className="container-warper" key={index}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>
              {item.des.length > 260 ? (
                <>
                  {item.des.slice(0, 260)}
                  <span
                    style={{
                      color: "gray",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                  >
                    ... Read More
                  </span>
                </>
              ) : (
                item.des
              )}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
