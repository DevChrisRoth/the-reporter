import React from "react";

export const UeberMich = () => {
  return (
    <div className="bg-white px-8 py-6 rounded-lg ml-2 w-64 h-fit">
      <h1 className="uppercase text-xl font-bold underline text-left">
        Über mich
      </h1>
      <div className="flex justify-center items-center pt-6 pb-2">
        <img
          src={"/profile-pic.png"}
          alt="avatar"
          className="rounded-full border border-gray-300"
          width={75}
          height={75}
        />
      </div>
      <h1 className="text-lg font-bold text-left tracking-normal">
        Christoph Rothmann
      </h1>
      <p>Softwareentwickler</p>
      <p className="text-center italic">
        "Knowledge isn't power, unitl it's applied"
      </p>
    </div>
  );
};
