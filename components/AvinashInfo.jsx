import React from 'react'

const AvinashInfo = () => {
  return (
    <div className="renukiran-bg-green-color sm:flex w-full py-6 md:py-12 block px-7 relative">
      {/* <div className="absolute bottom-0 left-0 md:block lg:max-w-[20rem] md:max-w-[17rem] hidden">
        <img
          src="/assets/images/avinash-info.png"
          alt="Avinash Kumar: Renukiran's founder"
        />
      </div> */}
      <div className="w-[40%] flex-grow pr-20">
        <h1 className="text-3xl font-extrabold text-white">Avinash Kumar</h1>
        <p className="text-gray-200 font-bold">Founder</p>
        <hr className="mb-6" />
      </div>
      <div>
        <h3
          style={{ color: "white", fontSize: "18px" }}
          className="sub-text-400 flex-grow text-start"
        >
          "Renukiran is a Civil Society Organisation that promotes programmes
          through Quality Education, Digital literacy, Medical facilitation
          services, Skill trainings and Women empowerment to underprivileged
          communities, transforming lives with compassion and dedication. These
          impactful initiatives have empowered thousands and fostered a brighter
          future for those in real need across various parts in India."
        </h3>
      </div>
    </div>
  );
}

export default AvinashInfo