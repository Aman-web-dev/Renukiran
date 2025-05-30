import React from 'react'

const SubscribePopup = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white py-2 px-4">
        <h3 className="header-text text-center text-lg text-black mb-4">
          Join Our Community! Get the latest news on our projects,
          stories, and impact.
        </h3>
        <div>
          <label className="input flex items-center gap-2 my-2 border-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 text-white"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow text-black"
              placeholder="Full Name"
            />
          </label>
          <label className="input flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 text-white"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow text-black"
              placeholder="Email"
            />
          </label>
        </div>
        <div className="modal-action">
          <form method="dialog" className="flex gap-2">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn renukiran-bg-green-color text-white border-0 hover:bg-transparent hover:text-black hover:border-rec hover:border">
              Subscribe
            </button>
            <button className="btn bg-transparent text-black hover:bg-transparent hover:text-white hover:bg-red-600 border">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default SubscribePopup