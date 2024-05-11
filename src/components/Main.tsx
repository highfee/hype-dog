"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./Header";

const Main = ({ page }: { page: any }) => {
  const video = useRef(null);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState(true);

  const handlePageLoad = () => {
    if (video.current) {
      video.current.play();
      setDisplay(false);
    }

    setTimeout(() => {
      setLoading(false);
      if (video.current) {
        video.current.mute;
      }
    }, 7200);
  };

  return (
    <div>
      {loading && (
        <div className="fixed inset-0 bg-[#091401] flex flex-col justify-center items-center gap-3 z-[2000]">
          <video
            src="/hd-log.MOV"
            // autoPlay
            loop
            className="max-w-[70%]  rounded-lg"
            id="video"
            ref={video}
            poster="/image1-transparent.png"
          ></video>
          {display && (
            <p
              className="py-3 px-8 border-2 rounded-xl text-white text-xl cursor-pointer"
              onClick={handlePageLoad}
            >
              Continue to page
            </p>
          )}
        </div>
      )}

      <>
        <Header />
        {page}
      </>
    </div>
  );
};

export default Main;
