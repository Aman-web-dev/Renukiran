import React from 'react';
import Helpcards from '../../components/helpcards';

function Help() {
  const backgroundStyle = {
    
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)),url('https://images.pexels.com/photos/6416199/pexels-photo-6416199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    
    backgroundAttachment: 'fixed', 
  };

  

  return (
    <div style={backgroundStyle} className='h-auto flex flex-col items-center justify-center'>
      <p className='text-6xl font-bold text-center my-2 text-white'>Donate Us</p>
      <p className='text-3xl font-bold text-center my-2 text-white'>Your help Would Be appericiated</p>
      <p className='text-1xl font-bold text-center my-2 text-white'>Donation In Renukiran is Not Like other NGO donations We Don't Ask for Money We Ask For a Small Educational, Food or Cloth Donation.</p>


      <div className='flex flex-wrap w-[90vw] m-auto xl:gap-5 gap-3 my-4  items-center justify-center'>
      
      <Helpcards title={"Food"} desc={"Provide one-time food to a needy"} price={"$600"} />
      <Helpcards title={"Food"} desc={"Provide one-time food to a needy"} price={"$600"} />
      <Helpcards title={"Food"} desc={"Provide one-time food to a needy"} price={"$600"} />
      <Helpcards title={"Food"} desc={"Provide one-time food to a needy"} price={"$600"} />
      <Helpcards title={"Food"} desc={"Provide one-time food to a needy"} price={"$600"} />
      <Helpcards title={"Food"} desc={"Provide one-time food to a needy"} price={"$600"} />
      
      </div>
    </div>
  );
}

export default Help;
