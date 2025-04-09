"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import PaymentButton from "./paymentPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, ChevronLeft, ChevronRight, Zap, Repeat } from "lucide-react";

function page() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const presetAmounts = [500, 1000, 3000, 5000];
  const [donationType, setDonationType] = useState("oneTime");

  // Sample images (using placeholder API)
  const carouselImages = [
    "https://images.unsplash.com/photo-1652858672796-960164bd632b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1569173675610-42c361a86e37?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1475608895924-884f5fcbf109?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(()=>{
console.log(currentSlide)
  },[currentSlide])

  const handleSlideChange = (direction) => {
    if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    } else {
      setCurrentSlide(
        (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
      );
    }
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleDonate = () => {
    const finalAmount = selectedAmount || parseInt(customAmount);
    if (finalAmount) {
      window.open(
        "https://api.razorpay.com/v1/l/subscriptions/sub_PqN13zTz8Q9eHi",
        "_blank"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Background carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={carouselImages[currentSlide]}
              className="object-cover w-full h-full"
              alt={`Slide ${index + 1}`}
            />
            {/* Add a dark overlay to make form more visible */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Carousel navigation */}
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => handleSlideChange("prev")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => handleSlideChange("next")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>

      {/* Donation Form - Now positioned with flex to ensure it's always visible */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-[#0f4196] flex items-center justify-center gap-2">
              <Heart className="text-[#84c521]" />
              Make a Donation
            </CardTitle>
            <CardDescription className="text-center">
              Your support helps us teach a Child for 6 Months.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Donation Type Selector */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={donationType === "oneTime" ? "outline" : "default"}
                className="h-12 text-md flex flex-col items-center justify-center gap-1"
                onClick={() => setDonationType("oneTime")}
              >
                Give Once
              </Button>
              <Button
                variant={donationType === "monthly" ? "outline" : "default"}
                className="h-12 text-md flex flex-col items-center justify-center gap-1"
                onClick={() => setDonationType("monthly")}
              >
                Monthly
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {presetAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount ? "outline" : "default"}
                  className="h-16 text-lg"
                  onClick={() => handleAmountSelect(amount)}
                >
                  ₹{amount.toLocaleString()}
                </Button>
              ))}
            </div>

            <div className="space-y-2">
              <label className="text-sm">Or enter custom amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  ₹
                </span>
                <Input
                  type="text"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="pl-8"
                  placeholder="Enter amount"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full h-12 text-lg bg-[#0f4196] hover:bg-[#0f4196]/90"
              onClick={handleDonate}
              disabled={!selectedAmount && !customAmount}
            >
              Donate ₹{(selectedAmount || customAmount || 0).toLocaleString()}
            </Button>
          </CardFooter>
          <PaymentButton>Pay</PaymentButton>
        </Card>
      </div>
    </div>
  );
}

export default page;