import React from 'react'

const Communities = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="w-full h-[90vh] relative">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FPUUV9640.webp?alt=media&token=a908fc0c-3201-4712-94dd-ba66714ba112"
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
            Skilling of communities
          </h1>
        </div>
      </div>
      <div className="px-12 my-6">
        <h3 className="text-4xl header-text-400 text-black">Livelihood:</h3>
        <div className="lg:space-y-4 md:space-y-2">
        <p className="sub-text-400">
          The Renukiran Welfare Foundation is dedicated to providing sustainable livelihood
support to underprivileged communities. Through skill development programs, such as
tailoring, handicrafts, and vocational training, the foundation equips individuals,
especially women, with the tools to achieve economic independence.
        </p>
        <p className="sub-text-400">Additionally, it
fosters entrepreneurship by offering market linkages and financial literacy workshops,
empowering beneficiaries to establish and grow small businesses. Renukiran also
facilitates employment opportunities by partnering with local industries and
organizations.</p>
<p className="sub-text-400">By addressing barriers to economic stability and promoting self-reliance,
the foundation aims to enhance the socio-economic status of marginalized individuals
and break the cycle of poverty.</p>
</div>
      </div>
    </div>
  )
}

export default Communities