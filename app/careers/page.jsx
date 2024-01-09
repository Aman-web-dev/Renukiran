'use client'

import React, { useState } from 'react'

function Page() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [jobTitle, setjobTitle] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [education, setEducation] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: ""
  })
  const [buttonState, setButtonState] = useState(false)
  const [buttonText, setButtonText] = useState("Submit")



  const handleFormSubmit = async (e) => {

    setButtonState(true);
    setButtonText("Submitting...")

    e.preventDefault();

    const careerDetails = {fullName:name, email:email, jobTitle:jobTitle, coverLetter:coverLetter, education:education, phone:phoneNumber, address:address };

    console.log(careerDetails)

    const response = await fetch('https://renukiran-server.onrender.com/api/career', {
      method: "POST",
      body: JSON.stringify(careerDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })


    if (!response.ok) {
      const result = await response.json();
      console.log(result)
      setButtonState(false);
      setButtonText("Submit")
    }


    if (response.ok) {
      const result = await response.json();
      console.log("Contact made Successfully")

      setName("")
      setEmail("")
      setjobTitle("")
      setCoverLetter("")
      setEducation("")
      setPhoneNumber("")
      setAddress.city("")
      
      setButtonState(false);
      setButtonText("Submit")
      console.log(result)
    }
  }



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress(prevAddress => ({
      ...prevAddress,
      [name]: value
    }));
  };



  return (

    <form onSubmit={handleFormSubmit} className='linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))'>
      <div>
        <div className="min-h-screen p-6  flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          <div className="container max-w-screen-lg mx-auto">
            <div>

              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">Renukiran Careers</h1>
              <p className="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16  dark:text-gray-400">Cultivating Careers: Where Personal and Professional Flourish</p>



              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-black">
                    <p className="font-medium text-lg text-black">Personal Details</p>
                    <p>Working with Renukiran Welfare Foundation provides a unique opportunity for both career and personal growth. The foundation's commitment to helping millions of people aligns with a noble and impactful mission, offering employees the chance to contribute meaningfully to society. Being a part of such a philanthropic organization not only allows individuals to apply their skills and expertise towards a greater cause but also provides a sense of purpose and fulfillment. The diverse range of projects and initiatives undertaken by Renukiran Welfare Foundation exposes employees to various challenges, fostering continuous learning and professional development. Moreover, the collaborative and compassionate work environment cultivates a strong sense of community and shared values, enhancing not only one's career but also contributing to personal growth by fostering empathy, resilience, and a broader perspective on life. In essence, working with Renukiran Welfare Foundation is a rewarding experience that not only boosts one's career but also nurtures personal growth through meaningful contributions to the well-being of millions.</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label for="full_name">Full Name</label>
                        <input type="text" name="full_name" id="full_name" onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" value={name} />
                      </div>

                      <div className="md:col-span-5">
                        <label for="email">Email Address</label>
                        <input type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@domain.com" />
                      </div>


                      <div className="md:col-span-5">
                        <label for="jobTitle">Desired Job Title</label>
                        <input type="text" name="Job-position" id="job-position" onChange={(e)=>setjobTitle(e.target.value)} className="h-10 text-black border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Intern" value={jobTitle}/>
                      </div>

                      <div className="md:col-span-5">
                        <label for="email">Cover Letter</label>
                        <textarea onChange={(e)=>setCoverLetter(e.target.value)} id="message" rows="4" maxlength="400" className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write why should we should hire you including what makes you an ideal candidate to be in Renukiran Team..." value={coverLetter}></textarea>
                      </div>



                      <div className="md:col-span-3">
                        <label for="education" className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">Select Highest Education</label>
                        <select id="countries" onChange={(e)=>setEducation(e.target.value)} className="bg-gray-50  border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={education}>
                          <option selected>Choose Your Education</option>
                          <option value="Post Graduate">Post Graduated</option>
                          <option value="Under Graduate">Graduation</option>
                          <option value="Matriculate">Matriculate</option>
                          <option value="10">10</option>
                        </select>
                      </div>



                      <div className="md:col-span-3">
                        <label for="address">Address / Street</label>
                        <input type="text" onChange={handleInputChange} name="street" id="address" className="h-10 text-black border mt-1 rounded px-4 w-full bg-gray-50" value={address.street} placeholder="" />
                      </div>



                      <div className="md:col-span-2">
                        <label for="city">City</label>
                        <input type="text" onChange={handleInputChange} name="city" id="city"  className="h-10 text-black border mt-1 rounded px-4 w-full bg-gray-50" value={address.city} placeholder="" />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">Phone Number</label>
                        <input type="" name="Phone Number" id="PhoneNumber" onChange={(e)=>setPhoneNumber(e.target.value)} className="h-10 text-black border mt-1 rounded px-4 w-full bg-gray-50" value={phoneNumber} placeholder="+12-782993" />
                      </div>



                      <div className="md:col-span-2">
                        <label for="country">Country / region</label>
                        <div className="h-10 bg-gray-50 flex border border200 rounded items-center mt-1">
                          <input name="country" id="country" onChange={handleInputChange} placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={address.country} />
                          <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                          <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border200 transition-all text-gray-300 hover:text-blue-600">
                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                          </button>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label for="state">State / province</label>
                        <div className="h-10 bg-gray-50 flex border border200 rounded items-center mt-1">
                          <input name="state" id="state" onChange={handleInputChange} placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={address.state} />
                          <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                          <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border200 transition-all text-gray-300 hover:text-blue-600">
                            <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                          </button>
                        </div>
                      </div>

                      <div className="md:col-span-1">
                        <label for="Pin Code">Pin Code</label>
                        <input type="text" name="pincode" id="zipcode" onChange={handleInputChange} className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value={address.pincode} />
                      </div>


                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={buttonState}>{buttonText}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </form>
  )
}

export default Page
