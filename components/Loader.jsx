import React from 'react';





const Loader = () => {
  const videoStyle = {
    // objectFit: 'contain',
    width: '80%',
    height: '100%',
    margin: "auto",
  };



  return (
    <div className=' flex align-center justify-center sm:h-[50vh] h-[30vh] sm:w-full w-[100vw]' style={{  overflow: 'hidden' }}>
      <video style={videoStyle} className='object-contain sm:object-cover' autoPlay loop muted>
        <source src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/preloader%2Frenu%20kiran.mp4?alt=media&token=abecc53d-a2c9-41b7-9773-aaf1634372f4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};


export default Loader;
