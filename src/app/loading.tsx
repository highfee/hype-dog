"use client";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#091401] grid place-items-center">
      <video
        src="/hd-log.MOV"
        autoPlay
        loop
        className="max-w-[50%]  rounded-lg"
      ></video>
    </div>
  );
};

export default Loading;
