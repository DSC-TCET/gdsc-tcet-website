/* eslint-disable */
import React, { useEffect, useState } from "react";
import profilePlaceholder from "../Images/profile-placeholder.gif";

const TeamCard = ({ profile, name, position, quote, socials, color }) => {
  const [img, setImg] = useState(profilePlaceholder);

  useEffect(() => {
    setImg(profile);
  }, []);

  return (
    <div
      className='bg-gray-100 m-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500 overflow-hidden h-max pb-4'
      onClick={() => setExtend(!extend)}
      style={{ maxWidth: "400px" }}
    >
      <div
        id='profile-bg'
        className='relative'
        style={{ backgroundColor: color, height: "155px" }}
      >
        <div
          className={`rounded-full overflow-hidden w-40 h-40 absolute -bottom-1/2 left-1/2 -translate-x-1/2 border-gray-100`}
          style={{
            boxSizing: "content-box",
            borderWidth: 4.5,
          }}
        >
          <img
            src={img || profilePlaceholder}
            alt={name}
            className={`w-full h-full object-cover ${
              name === "Vanshika Patel" ||
              name === "Janhvi Jaiswal" ||
              name === "Shoaib Shaikh"
                ? "object-center"
                : "object-top"
            }`}
          />
        </div>
      </div>
      <div
        id='content'
        className='flex flex-col items-center justify-top mt-24 px-4 w-full '
      >
        <p className='text-xl font-semibold mb-2'>{name}</p>
        <p style={{ color: color }} className='mb-3'>
          {position}
        </p>
        <p className={`text-center w-full mb-4`}>{quote}</p>
        <div
          id='socials'
          className='flex gap-3 border-t-2 pt-3 w-full justify-center'
        >
          {socials.map((item, i) => {
            return (
              <a href={item.link} key={i} target='_blank'>
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
