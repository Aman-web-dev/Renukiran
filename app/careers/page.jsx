import React from 'react'

function Page() {
  return (
    <div>
      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>

            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Renukiran Careers</h1>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16  dark:text-gray-400">Cultivating Careers: Where Personal and Professional Flourish</p>



            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                  <p class="font-medium text-lg">Personal Details</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor non quaerat, quod ratione nisi debitis, earum, atque neque dolores possimus libero rerum commodi vero explicabo nihil optio. Iste, doloribus enim omnis facilis reprehenderit consectetur ducimus deserunt quidem facere ipsam a accusantium quibusdam corrupti. Tempora eius velit id sit vero rem quod exercitationem aliquid dolorem vel sed, quibusdam, ad facere dicta aliquam repellendus eum consequuntur officia unde nobis quasi perspiciatis ullam praesentium ut! Temporibus deleniti nam repudiandae, magnam in atque? Minima ab fugiat, sint incidunt perferendis qui officia ea aspernatur sed temporibus quibusdam ratione, accusantium eos sit rerum esse hic mollitia?</p>
                </div>

                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                      <label for="full_name">Full Name</label>
                      <input type="text" name="full_name" id="full_name" placeholder="John Doe" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>
                      <input type="email" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
                    </div>


                    <div class="md:col-span-5">
                      <label for="email">Desired Job Title</label>
                      <input type="text" name="Job-position" id="job-position" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Intern" />
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Cover Letter</label>
                      <textarea id="message" rows="4" maxlength="400" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write why should we should hire you including what makes you an ideal candidate to be in Renukiran Team..."></textarea>
                    </div>



                    <div class="md:col-span-3">
                      <label for="education" class="block mb-2 text-sm font-medium text-gray-400 dark:text-white">Select Highest Education</label>
                      <select id="countries" class="bg-gray-50 \ border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose Your Education</option>
                        <option value="Post Graduate">Post Graduated</option>
                        <option value="Under Graduate">Graduation</option>
                        <option value="Matriculate">Matriculate</option>
                        <option value="10">10</option>
                      </select>
                    </div>



                    <div class="md:col-span-3">
                      <label for="address">Address / Street</label>
                      <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                    </div>



                    <div class="md:col-span-2">
                      <label for="city">City</label>
                      <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                    </div>

                    <div class="md:col-span-2">
                      <label for="city">Phone Number</label>
                      <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                    </div>



                    <div class="md:col-span-2">
                      <label for="country">Country / region</label>
                      <div class="h-10 bg-gray-50 flex border border200 rounded items-center mt-1">
                        <input name="country" id="country" placeholder="Country" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                        <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border200 transition-all text-gray-300 hover:text-blue-600">
                          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button>
                      </div>
                    </div>

                    <div class="md:col-span-2">
                      <label for="state">State / province</label>
                      <div class="h-10 bg-gray-50 flex border border200 rounded items-center mt-1">
                        <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                        <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border200 transition-all text-gray-300 hover:text-blue-600">
                          <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button>
                      </div>
                    </div>

                    <div class="md:col-span-1">
                      <label for="Pin Code">Pin Code</label>
                      <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                    </div>


                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
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
  )
}

export default Page
