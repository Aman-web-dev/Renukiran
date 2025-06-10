import React from 'react'

const ArticleModal = ({ currentArticle }) => {
  return (
    // <div className="absolute top-0 h-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500">
    //   {currentArticle}
    // </div>
    //
    <dialog id="my_modal_5" className="modal min-w-fit modal-bottom sm:modal-middle">
      <div className="modal-box bg-white">
        {/* <h3 className="font-bold text-lg">Hello!</h3> */}
        <img src={currentArticle} alt="" />
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ArticleModal