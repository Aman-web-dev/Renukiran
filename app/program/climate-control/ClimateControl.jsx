import React from 'react'

const ClimateControl = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="w-full h-[90vh] relative">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/thumbnails%2FEducation.webp?alt=media&token=5b4740c8-46f2-4984-880e-e594df3bb4c1"
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
            Climate Control
          </h1>
        </div>
      </div>
      <div className="px-12 my-6">
        <h3 className="text-4xl header-text-400 text-black">Climate Control:</h3>
        <div className="lg:space-y-4 md:space-y-2">
        <p className="sub-text-400">
          We Committed We to addressing climate change through sustainable and impactful
initiatives. Its efforts focus on environmental conservation, community engagement, and
raising awareness about the importance of protecting the planet. The foundation actively
organizes tree plantation drives, promoting afforestation and restoring green cover in
urban and rural areas to combat deforestation and reduce carbon emissions.
        </p>
        <p className="sub-text-400">Renukiran also advocates for waste management practices, including reducing, reusing,
and recycling waste, to minimize environmental pollution. Workshops and campaigns are
conducted to educate communities about the importance of sustainable living, water
conservation, and energy efficiency. Additionally, the foundation supports clean energy
initiatives by promoting the use of renewable energy sources, such as solar-powered
solutions, in underprivileged areas.</p>
<p className="sub-text-400">Engaging schools, local organizations, and residents, Renukiran encourages eco-friendly
practices like rainwater harvesting, organic farming, and reducing single-use plastics. By
collaborating with government bodies and environmental organizations, the foundation
amplifies its impact on climate control.</p>
<p className="sub-text-400">Through these initiatives, Renukiran not only contributes to mitigating climate change
but also empowers communities to adopt sustainable practices, ensuring a healthier and
greener future for all. Its work reflects a deep commitment to creating environmental
resilience and inspiring collective action for the planet&#39;s well-being.</p>
</div>
      </div>
    </div>
  )
}

export default ClimateControl