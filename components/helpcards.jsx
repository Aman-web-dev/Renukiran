import React from 'react'

function helpcards({desc,title,price}) {
  return (
    <div>
      
<div className="max-w-sm bg-notmain border border-main rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
    <a href="#">
        <img className="rounded-t-lg" src="https://img.freepik.com/free-photo/kids-having-fun-as-boy-scouts_23-2149657072.jpg?w=1480&t=st=1695292816~exp=1695293416~hmac=748a0b60020562444edf315137c9b7e581809ff1d91c8840bd31f1694f7cf563" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-white">{desc}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-main rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           {price}
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
    </div>
  )
}

export default helpcards
