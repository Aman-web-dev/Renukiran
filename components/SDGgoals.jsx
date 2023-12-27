import React from 'react';
import SDGCards from './SDGCards';


function SDGgoals() {
  return (



<div className='text-center'>

  <div>

    
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Sustainable Development Goals</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Empowering Lives at Renukiran Welfare Foundation: Focused on WHO's Main SDGs - Health (SDG 3), Education (SDG 4), Gender Equality (SDG 5), and Climate Action (SDG 13).</p>


  </div>


    <div className='w-full gap-4 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-col-2 my-4'>


 <SDGCards  bgColor={"bg-[#289438]"} smallTitle={"Good Health and Well-Being"} pictureSRC={"https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/SDGlogos%2FGroup%2013.svg?alt=media&token=e31b0c3d-4443-4ee9-a561-2771b2985f7f"} secondImage={"https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117843.jpg?t=st=1703663670~exp=1703664270~hmac=e2632798da58d32bc651ad328600e787923d652b22a679cb2994ec3ed88e8e19"} SDGNumber={"3"} SDGTitle={"Goal 3"} SDGText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nisi"}/>

 <SDGCards  bgColor={"bg-[#c11728]"} smallTitle={"Good Health and Well-Being"} pictureSRC={"https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/SDGlogos%2FqualityEducation.svg?alt=media&token=044e7a5f-426d-48a3-b37f-3dbfa95cf992"} secondImage={"https://img.freepik.com/free-photo/happy-two-asian-children-using-laptop-elearning-home-remote-school-upcountry_640221-399.jpg?w=900&t=st=1703665146~exp=1703665746~hmac=3a6a76b3ef961b8f5b7622795a293e839630120c4b20ad40f198536475d66394"} SDGNumber={"4"} SDGTitle={"Goal 4"} SDGText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nisi"}/>


 <SDGCards  bgColor={"bg-[#E6331D]"} smallTitle={"Good Health and Well-Being"} pictureSRC={"https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/SDGlogos%2FgenderEquality.svg?alt=media&token=476d6780-bd3d-4313-aefe-d76fe21b104d"} secondImage={"https://img.freepik.com/free-photo/pretty-smiling-asian-girl-carpet-with-black-notebook-sitting-outside_181624-52231.jpg?w=900&t=st=1703666155~exp=1703666755~hmac=ec2da60730113530237e6140325538db81bbe8d6d7e5cd50c697e0121b41a8aa"} SDGNumber={"5"} SDGTitle={"Goal 5"} SDGText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nisi"}/>


 <SDGCards  bgColor={"bg-[#4a7634]"} smallTitle={"Good Health and Well-Being"} pictureSRC={"https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/SDGlogos%2FclimateAction.svg?alt=media&token=98a8d76e-2454-4f70-92bd-90fb0462a409"} secondImage={"https://img.freepik.com/free-photo/close-up-soil-sprout_23-2148905251.jpg?w=360&t=st=1703667798~exp=1703668398~hmac=def1639d37d70de68ef89822862efa0580e97825caaf0f6aa48b399e6255272d"} SDGNumber={"13"} SDGTitle={"Goal 13"} SDGText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nisi"}/>

 </div>
    </div>
  );
}

export default SDGgoals;