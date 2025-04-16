import { Heart, Droplet, BookOpen, Heart as HeartIcon, Users, ArrowRight } from "lucide-react";
import RazorpayButton from "@/components/razorpayPaymnetButton";
import DonationCard from "@/components/donationCard";
import Reviews from "@/components/Reviews";

export default function DonationPage() {
  const handleDonation = () => {
    alert("Thank you for your donation!");
    // In a real application, this would connect to a payment processor
  };

  return (
    <div className="max-w-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Visual Appeal */}
      <div className="relative bg-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1505155485412-30b3a45080ec?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Help Us Make a <span className="text-[#81c421]">Difference</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 mb-8">
            Your support enables us to continue our vital work in communities around the world
          </p>
          <button className="inline-flex items-center justify-center bg-[#81c421] hover:bg-[#3e5b16] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Donate Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Impact Stats Bar */}
      <div className="bg-white shadow-md py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <Droplet className="text-blue-600 h-10 w-10 mr-4" />
              <div>
                <p className="text-3xl font-bold text-blue-800">15,000+</p>
                <p className="text-gray-600">People with clean water access</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <BookOpen className="text-blue-600 h-10 w-10 mr-4" />
              <div>
                <p className="text-3xl font-bold text-blue-800">8,000+</p>
                <p className="text-gray-600">Children with educational resources</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Users className="text-blue-600 h-10 w-10 mr-4" />
              <div>
                <p className="text-3xl font-bold text-blue-800">2,500+</p>
                <p className="text-gray-600">Families supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-8xl mx-auto px-6 py-16">
        {/* Donation cards and image section with better layout */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Current Initiatives</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="sticky top-8 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1505155485412-30b3a45080ec?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Children benefiting from our program"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div id="card_container" className="lg:w-1/2 max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 pr-2">
              {donationCardDetails.map((elem) => (
                <DonationCard
                  key={elem.cardId}
                  title={elem.title}
                  description={elem.description}
                  imageLink={elem.imageLink}
                  paymentId={elem.paymentLink}
                  cardId={elem.cardId}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Impact statement with better design */}
        <div className="bg-blue-800 text-white p-10 rounded-2xl mb-16 shadow-lg transform hover:shadow-xl transition-all">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#81c421]">
              Our Impact
            </h3>
            <p className="text-lg mb-6 opacity-90">
              In the past year alone, we've helped over 15,000 people gain
              access to clean water, provided educational resources to 8,000
              children, and supported 2,500 families with sustainable farming
              initiatives.
            </p>
            <p className="text-lg opacity-90">
              We commit to using <span className="text-[#81c421] font-bold">92%</span> of all donations directly
              for program expenses, with only 8% going toward administrative
              costs. Your generosity makes a real, measurable difference in
              people's lives.
            </p>
            
            {/* Progress bar */}
            <div className="mt-8">
              <div className="flex justify-between mb-2 text-sm">
                <span>Monthly Goal: $50,000</span>
                <span>$37,500 (75%)</span>
              </div>
              <div className="w-full bg-blue-950 rounded-full h-4">
                <div className="bg-[#81c421] h-4 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Image gallery with better visual design */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:transform hover:scale-105">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Clean water project"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Clean Water Initiatives</h3>
                <p className="text-gray-600">Providing access to clean, safe drinking water through sustainable solutions.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:transform hover:scale-105">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://cdn.pixabay.com/photo/2015/05/06/13/06/woman-755227_1280.jpg"
                  alt="Education program"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Education Programs</h3>
                <p className="text-gray-600">Empowering communities through quality education and resources.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:transform hover:scale-105">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1147299491/photo/indian-women-stitching-cloths-by-machine-at-home-stock-image.jpg?s=1024x1024&w=is&k=20&c=B9WKknQMPXtFf48o79hYzlAU0CbGmMG0wQyTr9kvU7M="
                  alt="Healthcare services"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Healthcare Services</h3>
                <p className="text-gray-600">Delivering essential healthcare to underserved communities worldwide.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Donation CTA with improved design */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl overflow-hidden shadow-xl mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-10 text-white">
              <HeartIcon className="text-red-400 mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Your donation today will help transform lives and communities. Join
                us in our mission to create lasting positive change.
              </p>
              <div className="mb-8">
                <RazorpayButton
                  PaymentId={"pl_QJHlGMsTFtCXxA"}
                  cardId={"card_1237"}
                />
              </div>
              <p className="text-sm opacity-80 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 116 0z" clipRule="evenodd" />
                </svg>
                Secure payment processing. All donations are tax-deductible.
              </p>
            </div>
            <div className="md:w-1/2 bg-blue-800 relative hidden md:block">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative p-10 text-center flex flex-col justify-center items-center h-full ">
                <div className="mb-6 p-3 bg-white bg-opacity-20 rounded-full inline-block">
                  <Heart className="text-red-400" size={32} />
                </div>
                <div className="mb-6 text-white">
                  <p className="text-3xl font-bold mb-2">$1,245,678</p>
                  <p className="opacity-80">Raised so far</p>
                </div>
                <div className="grid grid-cols-3 gap-4 w-full max-w-xs text-white">
                  <div className=" bg-opacity-20 p-3 rounded-lg">
                    <p className="text-xl font-bold">7,234</p>
                    <p className="text-sm opacity-80">Donors</p>
                  </div>
                  <div className=" bg-opacity-20 p-3 rounded-lg">
                    <p className="text-xl font-bold">92%</p>
                    <p className="text-sm opacity-80">To Programs</p>
                  </div>
                  <div className=" bg-opacity-20 p-3 rounded-lg">
                    <p className="text-xl font-bold">54</p>
                    <p className="text-sm opacity-80">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">What People Say</h2>
     
          
      <Reviews/>
            

        </div>
      </div>


      {/* Footer with newsletter signup */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
              <p className="mb-6 opacity-80">Sign up for our newsletter to receive updates about our projects and impact.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 w-full rounded-l-lg text-gray-800 focus:outline-none"
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-medium px-6 py-3 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="opacity-80 mb-2">1234 Charity Lane, Suite 500</p>
              <p className="opacity-80 mb-2">Giving City, GC 12345</p>
              <p className="opacity-80 mb-2">contact@yourcharity.org</p>
              <p className="opacity-80">(555) 123-4567</p>
              <div className="flex mt-4 space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="text-white hover:text-[#81c421]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#81c421]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#81c421]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800 text-center text-sm opacity-70">
            <p>© 2025 Your Charity Organization. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const donationCardDetails = [
  {
    title: "Education",
    description:
      "RWF empowers underprivileged communities by focusing on education-centric initiatives. Our programs provide academic support to children in need through access to quality education, essential learning resources like stationery and school bags, and exposure to new experiences via educational tours. We emphasize digital literacy and vocational training for both children and women, ensuring they gain practical skills for the future. Our efforts primarily target children in underserved, remote, or challenging environments, aiming to create long-term educational impact and foster meaningful change in alignment with the Sustainable Development Goals.",
    imageLink:
      "https://media.istockphoto.com/id/1395727822/photo/happy-village-girl-kid-with-school-uniform-playing-using-toy-cardboard-aeroplane-at-paddy.jpg?s=1024x1024&w=is&k=20&c=iD5kfzII3XIyynivF4HR2waRdMgd5iteOGeBq8kJiX0=",
    paymentLink: "pl_QERQGOIXMinZCo",
    cardId: "education_razorpay_button_container",
  },
  {
    title: "Women Empowerment",
    description:
      "RWF empowers women and girls through holistic initiatives, including menstrual awareness sessions and sanitary pad distribution in rural areas and government schools. We focus on building self-esteem and confidence, while also conducting financial literacy awareness sessions to equip women with essential skills for financial management. Our programs aim to break taboos, promote health and hygiene, and foster economic independence, ultimately creating a more equitable and sustainable world for women and girls.",
    imageLink:
      "https://cdn.pixabay.com/photo/2015/05/06/13/06/woman-755227_1280.jpg",
    paymentLink: "pl_QERaFWq5PthBLT",
    cardId: "women_empowerment_razorpay_button_container",
  },
  {
    title: "Livelihood",
    description:
      "RWF empowers individuals through skill development initiatives, offering training in stitching, beauty, and computer skills. Our programs focus on equipping individuals with essential skills to enhance their livelihoods, promote entrepreneurship, and increase employability. By providing comprehensive skill training, we aim to empower women and youth to build sustainable futures and secure better opportunities for themselves and their communities.",
    imageLink:
      "https://media.istockphoto.com/id/1279844456/photo/young-indian-business-woman-entrepreneur-looking-at-camera-in-the-office.jpg?s=1024x1024&w=is&k=20&c=PcLgXCRFtcBusMiH8r-pUgCZI0JbvnpGQxPw2RMqH-4=",
    paymentLink: "pl_QJePWVvMQeQyQ5",
    cardId: "liveli_hood_card",
  },
];

<form>
  <script
    src="https://checkout.razorpay.com/v1/payment-button.js"
    data-payment_button_id="pl_QJePWVvMQeQyQ5"
    async
  >
    {" "}
  </script>{" "}
</form>;
