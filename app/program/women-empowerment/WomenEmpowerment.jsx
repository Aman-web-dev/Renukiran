import React from 'react'

const WomenEmpowerment = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="w-full h-[90vh] relative">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FEFFQ1574.webp?alt=media&token=dbc0431d-d563-4cd5-82f1-38bef5583425"
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
            Women Empowerment
          </h1>
        </div>
      </div>
      <div className="px-12 my-6">
        <h3 className="text-4xl header-text-400 text-black">Women Empowerment:</h3>
        <div className="lg:space-y-4 md:space-y-2">
        <p className="sub-text-400">
          Empowering women through skill development and economic opportunities is vital for
advancing gender equality and transforming the socio-economic landscape. At
Renukiran, we are dedicated to promoting women’s empowerment through our
comprehensive Women Empowerment and Tailoring Skills Projects.
        </p>
        <p className="sub-text-400">These initiatives
aim to equip underprivileged women with tailoring skills, boost their self-confidence, and
provide sustainable livelihood opportunities. By integrating skill training, empowerment
workshops, and market linkages, the project strives to enhance women’s socio-economic
status and enable them to lead independent lives. Despite notable progress in various
areas, many women, particularly in marginalized communities, continue to face barriers
to economic independence and empowerment.</p>
</div>
      </div>
    </div>
  )
}

export default WomenEmpowerment