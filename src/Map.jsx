import { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "/mapdata.js";
    script1.async = true;

    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.src = "/japanmap.js";
      script2.async = true;
      document.body.appendChild(script2);

      // Cleanup for script2
      script2._cleanup = () => document.body.removeChild(script2);
    };

    document.body.appendChild(script1);

    // Cleanup for script1 and script2
    return () => {
      document.body.removeChild(script1);
      if (script1._cleanup) script1._cleanup();
    };
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', margin: '50px 50px 400px 50px' }}>
      <div style={{ flex: '0 0 420px', minWidth: 320, maxWidth: 420, minHeight: 400 }}>
        <div id="map" style={{ width: 400, height: 400, aspectRatio: '1 / 1' }}></div>
      </div>
      <div className="kanan-map">
        <h1 className="jp">Japan</h1>
        <p>Japan is an archipelago consisting of over 6,800 islands, primarily dominated by its four largest landmasses: Honshu, Hokkaido, Kyushu, and Shikoku. The nation’s terrain is famously rugged, with approximately 70% of the land covered by steep mountains and dense forests, which forces the majority of the population into narrow coastal plains. Situated along the Pacific Ring of Fire, the country features a highly volcanic landscape, including the iconic Mount Fuji, and is home to thousands of natural hot springs known as onsen. This unique geography creates a diverse climate ranging from the heavy snowfalls of the northern peaks to the subtropical coral reefs of the southern Ryukyu Islands.</p>
      </div>
    </div>
  );
}