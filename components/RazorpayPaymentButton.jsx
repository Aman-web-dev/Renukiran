'use client'

import React, { useEffect } from 'react';

const RazorpayPaymentButton = ({PaymentId,cardId}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    console.log(PaymentId)
    script.setAttribute("data-payment_button_id", PaymentId);
    // script.setAttribute("id", "razorpay-donation-btn");


    const form = document.createElement("form");
    form.appendChild(script);
    // document.getElementById(cardId).appendChild(form)
    // document.getElementsByClassName
    
    document.getElementById(cardId).appendChild(form);
  }, []);

  return <div  id={cardId}></div>;
};

export default RazorpayPaymentButton;
