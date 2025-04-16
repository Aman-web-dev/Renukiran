import React from 'react';
import SDGCards from './SDGCards';
import SDGGoals from './SDG-Goals';

function SDGgoals() {
  return (
    <div className=" text-center py-3 md:py-6 flex flex-col items-center">
      <div>
        <h1 className="text-3xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl header-text-400 text-black">
          Sustainable Development Goals
        </h1>
        <p style={{color:"black"}} className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 background-header-text sub-text">
          Empowering Lives at Renukiran Welfare Foundation: Focused on WHO's
          Main SDGs - Health (SDG 3), Education (SDG 4), Gender Equality (SDG
          5), and Climate Action (SDG 13).
        </p>
      </div>

      {/* <div className="w-full gap-4 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-col-2 my-4">
        <SDGCards
          bgColor={"bg-[#289438]"}
          smallTitle={"Good Health and Well-Being"}
          pictureSRC={
            "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/SDGlogos%2FGroup%2013.svg?alt=media&token=e31b0c3d-4443-4ee9-a561-2771b2985f7f"
          }
          secondImage={
            "https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117843.jpg?t=st=1703663670~exp=1703664270~hmac=e2632798da58d32bc651ad328600e787923d652b22a679cb2994ec3ed88e8e19"
          }
          SDGNumber={"2"}
          SDGTitle={"Goal 2"}
          SDGText={""}
        />

        <SDGCards
          bgColor={"bg-[#289438]"}
          smallTitle={"Good Health and Well-Being"}
          pictureSRC={
            "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/SDGlogos%2FGroup%2013.svg?alt=media&token=e31b0c3d-4443-4ee9-a561-2771b2985f7f"
          }
          secondImage={
            "https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117843.jpg?t=st=1703663670~exp=1703664270~hmac=e2632798da58d32bc651ad328600e787923d652b22a679cb2994ec3ed88e8e19"
          }
          SDGNumber={"3"}
          SDGTitle={"Goal 3"}
          SDGText={""}
        />

        <SDGCards
          bgColor={"bg-[#c11728]"}
          smallTitle={"Good Health and Well-Being"}
          pictureSRC={
            "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/SDGlogos%2FqualityEducation.svg?alt=media&token=044e7a5f-426d-48a3-b37f-3dbfa95cf992"
          }
          secondImage={
            "https://img.freepik.com/free-photo/happy-two-asian-children-using-laptop-elearning-home-remote-school-upcountry_640221-399.jpg?w=900&t=st=1703665146~exp=1703665746~hmac=3a6a76b3ef961b8f5b7622795a293e839630120c4b20ad40f198536475d66394"
          }
          SDGNumber={"4"}
          SDGTitle={"Goal 4"}
          SDGText={""}
        />

        <SDGCards
          bgColor={"bg-[#E6331D]"}
          smallTitle={"Good Health and Well-Being"}
          pictureSRC={
            "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/SDGlogos%2FgenderEquality.svg?alt=media&token=476d6780-bd3d-4313-aefe-d76fe21b104d"
          }
          secondImage={
            "https://img.freepik.com/free-photo/pretty-smiling-asian-girl-carpet-with-black-notebook-sitting-outside_181624-52231.jpg?w=900&t=st=1703666155~exp=1703666755~hmac=ec2da60730113530237e6140325538db81bbe8d6d7e5cd50c697e0121b41a8aa"
          }
          SDGNumber={"5"}
          SDGTitle={"Goal 5"}
          SDGText={""}
        />

        <SDGCards
          bgColor={"bg-[#289438]"}
          smallTitle={"Good Health and Well-Being"}
          pictureSRC={
            "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/SDGlogos%2FGroup%2013.svg?alt=media&token=e31b0c3d-4443-4ee9-a561-2771b2985f7f"
          }
          secondImage={
            "https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117843.jpg?t=st=1703663670~exp=1703664270~hmac=e2632798da58d32bc651ad328600e787923d652b22a679cb2994ec3ed88e8e19"
          }
          SDGNumber={"8"}
          SDGTitle={"Goal 8"}
          SDGText={""}
        />

        <SDGCards
          bgColor={"bg-[#4a7634]"}
          smallTitle={"Good Health and Well-Being"}
          pictureSRC={
            "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/SDGlogos%2FclimateAction.svg?alt=media&token=98a8d76e-2454-4f70-92bd-90fb0462a409"
          }
          secondImage={
            "https://img.freepik.com/free-photo/close-up-soil-sprout_23-2148905251.jpg?w=360&t=st=1703667798~exp=1703668398~hmac=def1639d37d70de68ef89822862efa0580e97825caaf0f6aa48b399e6255272d"
          }
          SDGNumber={"13"}
          SDGTitle={"Goal 13"}
          SDGText={""}
        />
      </div> */}
      <SDGGoals/>
    </div>
  );
}

export default SDGgoals;