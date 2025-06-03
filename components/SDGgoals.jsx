import React from 'react';
import SDGGoals from './SDG-Goals';

function SDGgoals() {
  return (
    <div className=" text-center py-3 md:py-6 flex flex-col items-center">
      <div>
        <h1 className="text-3xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl header-text-400 text-black">
          Sustainable Development Goals
        </h1>
        <p style={{color:"black"}} className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 background-header-text sub-text">
          Empowering Lives at Renukiran Welfare Foundation: Focused on UN's
          Main SDGs - Zero Hunder (SDG2), Health (SDG 3), Education (SDG 4), Gender Equality (SDG
          5), Decent Work and Economic Growth (SDG8) and Climate Action (SDG 13).
        </p>
      </div>
      <SDGGoals/>
    </div>
  );
}

export default SDGgoals;