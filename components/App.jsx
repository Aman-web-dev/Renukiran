"use client"
import React from 'react'
import Carousel from "@/components/Carousel"
import Homeabout from "@/components/Homeabout"
import AvinashInfo from "@/components/AvinashInfo"
import WhatWeProvide from "@/components/WhatWeProvide"
import Campaign from "@/components/Campaign"
import SDGgoals from "@/components/SDGgoals"
import Loader from "@/components/Loader"
import LastSection from "@/components/LastSection"
import CompanysLogo from "@/components/CompanysLogo"
import Reviews from "@/components/Reviews"
import { register } from "swiper/element/bundle";
register();
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState, useEffect } from 'react'

const App = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => document.getElementById("my_modal_5").showModal();
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    onOpenModal()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Modal
        open={open}
        onClose={onCloseModal}
        center
        closeOnEsc
        closeOnOverlayClick
        animationDuration={300}
      >
        <div>
          
        </div>
      </Modal> */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white py-2 px-4">
          <h3 className="header-text text-center text-base uppercase text-black">
            Join Us in Empowering Lives – Subscribe for Updates from Renukiran
            NGO
          </h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn renukiran-bg-green-color text-white border-0 hover:bg-transparent hover:text-black hover:border-[#81C421] hover:border">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <Carousel />
      <Homeabout />
      <AvinashInfo />
      <WhatWeProvide />
      <Campaign />
      <CompanysLogo />
      <SDGgoals />
      <Reviews />
      <Loader />
      <LastSection />
    </main>
  );
}

export default App;