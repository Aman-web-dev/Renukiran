import React from 'react';
import Helpcards from '../components/helpcards';

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
      <p className='text-6xl font-bold text-center my-2 text-white'>Help Us</p>
      <div className='flex flex-wrap w-[90vw] p-3 m-auto gap-3 p-4'>
      
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
