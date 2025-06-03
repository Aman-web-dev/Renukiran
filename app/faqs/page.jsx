"use client";
import React from "react";

const FAQsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center header-text-400 text-black">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          <div className="collapse collapse-arrow background-color-blue rounded-none ">
            <input
              type="radio"
              name="accordion"              
              defaultChecked
            />
            <div style={{color:"white"}} className="collapse-title sub-text-heading text-lg font-medium">
              How can I donate to RWF?
            </div>
            <div style={{color:"white"}} className="collapse-content sub-text-400">
              <p>
                You can donate through our website, bank transfer, or by
                contacting us directly.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow background-color-blue rounded-none ">
            <input type="radio" name="accordion"  />
            <div style={{color:"white"}} className="collapse-title  sub-text-heading text-lg font-medium">
              What types of donations does RWF accept?
            </div>
            <div style={{color:"white"}} className="collapse-content sub-text-400">
              <p>
                We accept monetary donations, goods, and services that support
                our programs.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow background-color-blue rounded-none ">
            <input type="radio" name="accordion"  />
            <div style={{color:"white"}}className="collapse-title  sub-text-heading text-lg font-medium">
              Is my donation tax-deductible?
            </div>
            <div style={{color:"white"}} className="collapse-content sub-text-400">
              <p>
                Please check with your local tax authorities for specific
                regulations regarding tax-deductible donations.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow background-color-blue rounded-none ">
            <input type="radio" name="accordion"  />
            <div style={{color:"white"}}className="collapse-title  sub-text-heading text-lg font-medium">
              How will my donation be used?
            </div>
            <div style={{color:"white"}} className="collapse-content sub-text-400">
              <p>
                Your donation will support our programs in education,
                livelihood, women empowerment, health & hygiene, and climate
                change.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow background-color-blue rounded-none ">
            <input type="radio" name="accordion"  />
            <div style={{color:"white"}}className="collapse-title  sub-text-heading text-lg font-medium">
              Can I specify how my donation is used?
            </div>
            <div style={{color:"white"}} className="collapse-content sub-text-400">
              <p>
                Yes, you can designate your donation towards a specific program
                or initiative.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow background-color-blue rounded-none ">
            <input type="radio" name="accordion"  />
            <div style={{color:"white"}}className="collapse-title  sub-text-heading text-lg font-medium">
              How can I ensure my donation is secure?
            </div>
            <div style={{color:"white"}} className="collapse-content sub-text-400">
              <p>
                Our website uses secure payment processing, and we adhere to
                strict financial management practices.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow background-color-blue rounded-none ">
            <input type="radio" name="accordion"  />
            <div style={{color:"white"}}className="collapse-title  sub-text-heading text-lg font-medium">
              Can I make a recurring donation?
            </div>
            <div style={{color:"white"}} className="collapse-content sub-text-400">
              <p>
                Yes, you can set up recurring donations through our website or
                by contacting us.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow background-color-blue rounded-none ">
            <input type="radio" name="accordion"  />
            <div style={{color:"white"}}className="collapse-title  sub-text-heading text-lg font-medium">
              How can I track the impact of my donation?
            </div>
            <div style={{color:"white"}} className="collapse-content sub-text-400">
              <p>
                We'll keep you updated on the progress of our programs and the
                impact of your donation.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow background-color-blue rounded-none ">
            <input type="radio" name="accordion"  />
            <div style={{color:"white"}}className="collapse-title  sub-text-heading text-lg font-medium">
              Can I donate in-kind (goods or services)?
            </div>
            <div style={{color:"white"}} className="collapse-content sub-text-400">
              <p>
                Yes, we accept in-kind donations that support our programs and
                initiatives.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow background-color-blue rounded-none ">
            <input type="radio" name="accordion"  />
            <div style={{color:"white"}}className="collapse-title  sub-text-heading text-lg font-medium">
              How can I receive a receipt for my donation?
            </div>
            <div style={{color:"white"}} className="collapse-content sub-text-400">
              <p>
                We'll provide a receipt for your donation upon request; please
                contact us for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
