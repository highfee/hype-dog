"use client";

import { useState, useEffect } from "react";
import Header from "./Header";

const Main = ({ page }: { page: any }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="fixed inset-0 bg-[#091401] flex flex-col justify-center items-center gap-3">
          <video
            src="/hd-log.MOV"
            autoPlay
            loop
            className="max-w-[80%]  rounded-lg"
          ></video>
        </div>
      ) : (
        <>
          <Header />
          {page}
        </>
      )}
    </div>
  );
};

export default Main;
