import {
  Heart,
  Droplet,
  BookOpen,
  Heart as HeartIcon,
  Users,
  ArrowRight,
} from "lucide-react";
import RazorpayPaymentButton from "@/components/RazorpayPaymentButton";
import DonationCard from "@/components/donationCard";
import { Venus, TreeDeciduous } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function DonationPage() {
  return (
    <div className="max-w-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Visual Appeal */}
      <div className="relative bg-blue-700 text-white overflow-hidden">
        <div className="absolute bg-blue-700 inset-0 opacity-20">
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/CarouselPics%2Fcarouselbg_l3ol6o_c_scale%2Cw_857.webp?alt=media&token=1b8c4290-2828-47e6-93e3-75faf89327c0"
            alt=""
            className="w-full h-5xl bg-blue-500 object-cover"
          /> */}
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Help Us Make a <span className="text-[#81c421]">Difference</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 mb-8">
            Your support enables us to continue our vital work in communities
            around the world
          </p>
          {/* <RazorpayPaymentButton
                  PaymentId={"pl_QJHlGMsTFtCXxA"}
                  cardId={"cajcxzxssgvcsdd"}
                /> */}
        </div>
      </div>

      {/* Impact Stats Bar */}
      <div className="bg-white shadow-md py-6">
        <div className="max-w-8xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center">
              <TreeDeciduous className="text-blue-600 h-10 w-10 mr-4" />
              <div>
                <p className="text-3xl font-bold text-blue-800">500+</p>
                <p className="text-gray-600">
                  Trees Planted across Country to create a cleaner and greener
                  atmosphere{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Droplet className="text-blue-600 h-10 w-10 mr-4" />
              <div>
                <p className="text-3xl font-bold text-blue-800">30,000+</p>
                <p className="text-gray-600">
                  Seed balls Made and Distributed to promote greenry and
                  sustainability
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <BookOpen className="text-blue-600 h-10 w-10 mr-4" />
              <div>
                <p className="text-3xl font-bold text-blue-800">21,000+</p>
                <p className="text-gray-600">
                  Children got access to education resources and professional
                  guidance
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Venus className="text-blue-600 h-10 w-10 mr-4" />
              <div>
                <p className="text-3xl font-bold text-blue-800">2,500+</p>
                <p className="text-gray-600">
                  Women empowered Through awareness session and support{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-8xl  py-16">
        {/* Donation cards and image section with better layout */}
        <div className="mb-16 mx-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Current Initiatives
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* <div className="lg:w-1/2">
              <div className="sticky top-8 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1505155485412-30b3a45080ec?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Children benefiting from our program"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}

            <div
              id="card_container"
              className="grid md:grid-cols-3 grid-cols-1 gap-4 pr-2  w-full"
            >
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
        <div className="bg-blue-800 text-white mx-6 p-10 rounded-2xl mb-16 shadow-lg transform hover:shadow-xl transition-all">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#81c421]">
              Our Impact
            </h3>
            <p className="text-lg mb-6 opacity-90">
            Our initiatives have made a significant impact, with over 500 trees planted nationwide to foster a cleaner, greener environment. We've distributed more than 30,000 seed balls to promote sustainability and greenery. Additionally, we've provided educational resources and professional guidance to over 21,000 children, empowering their futures. Through awareness sessions and support, we've empowered more than 2,500 women, driving positive change in communities across the country.
            </p>
            <p className="text-lg opacity-90">
              We commit to using{" "}
              <span className="text-[#81c421] font-bold">90%</span> of all
              donations directly for program expenses, with only{" "}
              <span className="text-[#81c421] font-bold">10%</span> going toward
              administrative costs. Your generosity makes a real, measurable
              difference in people's lives.
            </p>
          </div>
        </div>

        {/* Image gallery with better visual design */}
        <div className="mb-16 mx-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Other Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:transform hover:scale-105">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Clean water project"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 ">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Computer Literacy
                </h3>
                <p className="text-gray-600 mb-4">
                  Providing access to clean, safe drinking water through
                  sustainable solutions.
                </p>
                <RazorpayPaymentButton
                  PaymentId={"pl_QJHlGMsTFtCXxA"}
                  cardId={"cajvdsvdscxzxssgd"}
                />
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:transform hover:scale-105">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1147299491/photo/indian-women-stitching-cloths-by-machine-at-home-stock-image.jpg?s=1024x1024&w=is&k=20&c=B9WKknQMPXtFf48o79hYzlAU0CbGmMG0wQyTr9kvU7M="
                  alt="Education program"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Health and Hygiene
                </h3>
                <p className="text-gray-600 mb-4">
                  Empowering communities through quality education and
                  resources.
                </p>
                <RazorpayPaymentButton
                  PaymentId={"pl_QJHlGMsTFtCXxA"}
                  cardId={"cajcxzxssgd"}
                />
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
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Climate Change
                </h3>
                <p className="text-gray-600 mb-4">
                  Delivering essential healthcare to underserved communities
                  worldwide.
                </p>
                <RazorpayPaymentButton
                  PaymentId={"pl_QJHlGMsTFtCXxA"}
                  cardId={"cajssgd"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Donation CTA with improved design */}
        <div className="bg-gradient-to-r mx-6 from-blue-700 to-blue-900 rounded-2xl overflow-hidden shadow-xl mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-10 text-white">
              <HeartIcon className="text-red-400 mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg mb-8 opacity-90">
              Your contributions are eligible for up to 50% tax benefit under Section 80G as Renukiran Welfare Foundation is registered as a non-profit organization.
              
              </p>
              <div className="mb-8">
                <span className="text-lg font-bold"> Details: </span>
PAN: AACTS7973G | 80G NUMBER: AACTS7973GF20210
                
              </div>
              <p className="text-sm opacity-80 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 116 0z"
                    clipRule="evenodd"
                  />
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
            </div>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className="mb-16">
          <TestimonialCarousel />
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
