const Education = () => {
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
            Quality Education For All
          </h1>
        </div>
      </div>
      <div className="px-12 my-6">
        <h3 className="text-4xl header-text-400 text-black">Quality Education:</h3>
        <div className="lg:space-y-4 md:space-y-2">
        <p className="sub-text-400">
          Education holds the key to breaking the cycle of poverty and creating pathways to a
brighter future. Yet, millions of underprivileged children in India, particularly those
studying in poorly equipped government schools, face significant challenges that hinder
their educational growth and limit their opportunities in life.
        </p>
        <p className="sub-text-400">At Renukiran, we are
committed to ensuring that children living in slums across India gain access to quality
education that empowers them academically, socially, and economically. Our ultimate
goal is to break the cycle of poverty and provide these bright young minds with a
promising future.</p>
<p className="sub-text-400">We pursue this mission through various engagement models, tailored to
the specific interventions required at any given time.</p>
</div>
      </div>
    </div>
  );
};

export default Education;
