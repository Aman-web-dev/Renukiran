// import React from 'react';
// import servicesOne from '../public/assets/images/services-1.jpg';
// import servicesTwo from '../public/assets/images/services-2.jpg';
// import Image from 'next/image';

// const WhatWeProvide = () => {
//   return (
//     <section className='md:flex block w-full m-auto gap-20 justify-center py-7 text-black md:space-y-0 space-y-10'>
//       <div className="flex flex-col items-center text-center circle">
//         <div style={{ width: '200px', height: '200px' }}>
//           <Image src={servicesOne} alt="women empowerment" height={200} width={200} className='w-full h-full object-cover rounded-full grayscale-100' />
//         </div>
//         <h2>Child Education</h2>
//       </div>

//       <div className="flex flex-col items-center text-center">
//         <div style={{ width: '200px', height: '200px' }}>
//           <Image src={servicesTwo} alt="women empowerment" height={200} width={200} className='w-full h-full object-cover rounded-full grayscale-100' />
//         </div>
//         <h2>Women Empowerment</h2>
//       </div>

//       <div className="flex flex-col items-center text-center">
//         <div style={{ width: '200px', height: '200px' }}>
//           <Image src={servicesTwo} alt="women empowerment" height={200} width={200} className='w-full h-full object-cover rounded-full grayscale-100' />
//         </div>
//         <h2>Children Education</h2>
//       </div>
//     </section>
//   );
// }

// export default WhatWeProvide;

import React from 'react';
import servicesOne from '../public/assets/images/services-1.jpg';
import servicesTwo from '../public/assets/images/services-2.jpg';
import Image from 'next/image';

const WhatWeProvide = () => {
  return (
    <section className='overflow-hidden md:flex block w-full m-auto gap-20 justify-center py-7 text-black md:space-y-0 space-y-10 mx-12 my-24'>
    
      <div className="item">
        <div className="circle">
          <div style={{ width: '200px', height: '200px' }}>
            <Image loading='lazy' src={servicesOne} alt="women empowerment" height={200} width={200} className='w-full h-full object-cover rounded-full grayscale-100' />
          </div>
        </div>
        <h2>Child Education</h2>
      </div>

      <div className="item">
        <div className="circle">
          <div style={{ width: '200px', height: '200px' }}>
            <Image loading='lazy' src={servicesTwo} alt="women empowerment" height={200} width={200} className='w-full h-full object-cover rounded-full grayscale-100' />
          </div>
        </div>
        <h2>Women Empowerment</h2>
      </div>

      <div className="item">
        <div className="circle">
          <div style={{ width: '200px', height: '200px' }}>
            <Image loading='lazy' src={servicesTwo} alt="women empowerment" height={200} width={200} className='w-full h-full object-cover rounded-full grayscale-100' />
          </div>
        </div>
        <h2>Children Education</h2>
      </div>
    </section>
  );
}

export default WhatWeProvide;

