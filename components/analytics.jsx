'use client'


import React,{useEffect, useState} from 'react'

function analytics() {

const [pageViews,setPageViews]=useState(0)
const [Visitors,setVisitors]=useState(0)

useEffect(()=>{

    if(sessionStorage.getItem('visit')==null){
        //new Page Visit and view
        UpdateCounter('type=visit-pageview')

 
    }else{
        
        //New Page View only
        'type=pageview'
    }

    sessionStorage.setItem('visit','x');

const UpdateCounter =async(type)=>{

    await fetch("http://localhost:5000/"+type)
    .then(res=>res.json())
    .then(data=>{
        setPageViews(data.pageViews)
        setVisitors(data.Visitors)

     

    })
}
},[])


  return (

    <div>
      
<div className="w-[90vw] my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="sm:hidden">
        <label for="tabs" className="sr-only">Select tab</label>
        <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Statistics</option>
            <option>Services</option>
            <option>FAQ</option>
        </select>
    </div>
    <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
        <li className="w-full">
            <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Statistics</button>
        </li>
      
    </ul>
    <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
        <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">{pageViews}</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Page Views</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">{Visitors}</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Visitors</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Organizations</dd>
                </div>
            </dl>
        </div>
        

    </div>
</div>

    </div>
  )
}

export default analytics
