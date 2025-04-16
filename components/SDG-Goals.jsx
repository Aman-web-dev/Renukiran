// import React from 'react'
// import Image from 'next/image'

// const SDGGoals = () => {
//   return (
//     <div>
//         <div>
//             <Image src={'/assets/SDG/sdg-1.png'} width={150} height={150} />
//             <Image src={'/assets/SDG/sdg-2.png'} width={150} height={150} />
//             <Image src={'/assets/SDG/sdg-3.png'} width={150} height={150} />
//         </div>
//     </div>
//   )
// }

// export default SDGGoals

import React from "react";
import Image from "next/image";

const SDGGoals = () => {
  // Array of all 17 SDG goals
  const sdgGoals = Array.from({ length: 17 }, (_, i) => i + 1);

  // Goals that should remain in color (2,3,4,5,8,13)
  const colorGoals = [2, 3, 4, 5, 8, 13];

  return (
    <div className="p-8 rounded-lg max-w-4xl">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {sdgGoals.map((goalNumber) => {
          const isColor = colorGoals.includes(goalNumber);
          return (
            <div
              key={goalNumber}
              className="relative transition-transform duration-300 hover:scale-105"
            >
              <div
                className={`${
                  isColor ? "" : "grayscale-[100%]"
                } rounded-lg overflow-hidden shadow-md`}
              >
                {/* Using placeholder image since we don't have actual SDG images */}
                <Image
                  src={`/assets/SDG/sdg-${goalNumber}.png`}
                  alt={`SDG Goal ${goalNumber}`}
                //   className="w-full h-auto"
                width={120}
                height={120}
                // className="grayscale-[100%]"
                />
              </div>
              {/* <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-2 py-1 text-sm">
                Goal {goalNumber}
              </div> */}
            </div>
          );
        })}
      </div>
      {/* <div className="mt-6 text-center text-sm text-gray-600">
        <p>Goals 2, 3, 4, 5, 8, and 13 are highlighted in color</p>
      </div> */}
    </div>
  );
};

export default SDGGoals;