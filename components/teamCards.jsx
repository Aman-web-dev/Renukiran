import React from 'react'

function teamCards({name,designation,pic}) {
  return (
    <div>
       <div className="mb-6 lg:mb-0 max-h-[80vh] m-auto">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img src={pic} className="w-full rounded-t-lg" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute text-white dark:text-neutral-700  left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">{name}</h5>
            <p className="mb-4 text-neutral-500 dark:text-neutral-300">{designation}</p>
            <ul className="mx-auto flex list-inside justify-center">
              <a href="#!" className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary dark:text-primary-400"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#!" className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-4 w-4 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#!" className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-primary dark:text-primary-400">
                  <path fill="currentColor"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default teamCards
