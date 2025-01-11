import React from 'react'
import ReviewCards from './ReviewCards'

function Reviews() {
  return (
        <div className='flex flex-wrap gap-6 align-center justify-center md:py-12 py-6'>

  <div className='text-center lg:px-40'>          
<h1 className="header-text-400 md:text-4xl lg:text-6xl uppercase text-black">Renukiran's Precious Testimonials</h1>
<p className="lg:text-lg sub-text">Discover the Impact: Testimonials from our Valued Collaborators and Dedicated Volunteers. Unveil the True Potential of Renukiran Welfare Foundation through Their Experiences and Insights gained along our Journey.</p>
</div>
<div className='flex flex-wrap  gap-6 align-center justify-center'>
           <ReviewCards imgURL="https://lh3.googleusercontent.com/a-/ALV-UjVzghuGrYCWGjZ7nd6fvgithePpkTcyyjbKhZDsvTCYU3PO=w66-h66-p-rp-mo-br100" 
           review="I had wonderful experience working with RWF as volunteer. Team is very supportive, special thanks to Avinash sir and Pooja ma'am. Working with RWF is a process of continuous self improvement and learning. The dedication and involvement of RWF to bring peace and smile on faces of underprivileged people, is something worth, everyone needs to implement in their lives."
           ReviewerName="Rishabh Choudhary"
           BorderColor="border-green-600"
           />
            <ReviewCards 
            imgURL="https://lh3.googleusercontent.com/a/ACg8ocK18Ycze2uKEcoBvTD7Kt17niOKZHQNvU0wQyErdKYR=w66-h66-p-rp-mo-br100"
            review="I feel grateful to be a part of Renukiran welfare foundation. They are doing amazing work by uplifting the underprivileged children of the society and empowering women." 
            ReviewerName="Priyanshi Narang"
            BorderColor="border-red-600"
            />



            <ReviewCards
            imgURL="https://lh3.googleusercontent.com/a-/ALV-UjUiYrf-w8dmyGOkVE34ox6wxJfMBV4X3TVH_UJ_gEEMuz4=w66-h66-p-rp-mo-br100"
            review="I'm associated with Renukiran welfare foundation for over one and half month as a HR intern. I'm proud of this foundation they work selflessly for the development of needy people moreover they're providing quality education to underprivileged childrens. They need little support to give their best to this society"
            ReviewerName="Nenavath Ravinder"
            BorderColor="border-blue-600"
            />



             {/* <ReviewCards
            imgURL="https://lh3.googleusercontent.com/a-/ALV-UjWFlrjvPGBTY3YjSfy-WElW9KAPTmZTKo3GdmPJZg2r8pP-=w66-h66-p-rp-mo-br100"
            review="This NGO does excellent work when it comes to taking care of unprivileged children. I'm very impressed by their ethics and morals to help people in need. They have some definite goal reaching priorities and I think they're succeeding in what they do."
            ReviewerName="Varsha"
            BorderColor="border-pink-400"
            />



                  <ReviewCards
            imgURL="https://lh3.googleusercontent.com/a-/ALV-UjVARXjHeqNHzKmAus4O1kXx4K1YL0BGYNt7bWKnRa2h0BH1=w66-h66-p-rp-mo-br100"
            review="Based on what I know about the program of Renukiran welfare foundation support the education  of underprivileged children and promote women's sense of self worth.
            They also organize medical camps for acute disease and celebrates festives with all of them.There efforts are admirable."
            ReviewerName="Raj Kushwaha"
            BorderColor="border-yellow-300"
            />



                  <ReviewCards
            imgURL="https://lh3.googleusercontent.com/a-/ALV-UjUjR_OlYV1qFLOBhIoSGJPqvH5lnp3pdYDgzBTTfdWkm9W_=w66-h66-p-rp-mo-br100"
            review="The NGO is doing such a great job. Very organized and very focused to reach their goal. The work and effort they have put is seen ... Good Job .. keep up the good work"
            ReviewerName="Samarth Koppala"
            BorderColor="border-indigo-400"
            /> */}



                  {/* <ReviewCards
            imgURL="https://lh3.googleusercontent.com/a-/ALV-UjUCKnNXD3TMsaVpyhg8DbtsSweKWhYQOuSE0whh-0J3moA=w66-h66-p-rp-mo-br100"
            review="Working with Renukiran for helping others and spreading Happiness is my best experience. I really enjoy helping children in their studies. Since when I joined Renukiran I am awarded with many opportunities to work with Renukiran family."
            ReviewerName="Arun"
            BorderColor="border-purple"
            /> */}


           </div>
        </div>

  )
}

export default Reviews
