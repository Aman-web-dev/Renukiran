import React from 'react'

const HealthCare = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="w-full h-[90vh] relative">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FHCBL8132.JPG?alt=media&token=3d5c8c3c-3d22-4812-9f6c-ed4a18d43f25"
          }
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{
            background:
              "linear-gradient(to right, rgba(133, 230, 74, 0.9), rgba(29, 78, 216, 0.8))",
          }}
        >
          <h1 className="text-white lg:text-6xl text-4xl uppercase header-text-400">
            NUTRITIVE FOOD, HEALTH & HYGIENE
          </h1>
        </div>
      </div>
      <div className="px-12 my-6">
        <h3 className="text-4xl header-text-400 text-black">Health and nutritive food:</h3>
        <div className="lg:space-y-4 md:space-y-2">
        <p className="sub-text-400">
          Childhood undernutrition is a critical issue affecting millions of underprivileged children
in both urban and rural areas, crossing national and international boundaries. The lack of
access to nutritious food not only threatens their health but also impedes their cognitive
development, educational performance, and future opportunities. This complex problem
manifests as undernutrition, leading to stunted growth and underweight children. Urban
areas face challenges such as limited access to affordable, nutritious food, while rural
areas contend with food insecurity and a lack of healthcare services.
        </p>
        <p className="sub-text-400">We are making a significant impact in addressing food insecurity among underprivileged
children in both urban and rural settings. By providing access to nutritious meals, along
with education and sustainable practices, our goal is to break the cycle of malnutrition
and empower children to lead healthier, more successful lives. Our project&#39;s core belief is
that adequate nutrition is a fundamental human right and essential for a child&#39;s growth
and development.</p>
</div>
      </div>
    </div>
  )
}

export default HealthCare