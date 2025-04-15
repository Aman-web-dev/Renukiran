'use client'

import React, { useEffect } from 'react';

const RazorpayButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute("data-payment_button_id", "pl_QJHlGMsTFtCXxA");

    const form = document.createElement("form");
    form.appendChild(script);

    document.getElementById("razorpay-btn-container").appendChild(form);
    document.querySelector("[data-payment_button_id='pl_QJHlGMsTFtCXxA']").setAttribute("class", "h-40 bg-blue-900");

  }, []);

  return <div className='bg-blue-700 h-28' id="razorpay-btn-container"></div>;
};

export default RazorpayButton;
