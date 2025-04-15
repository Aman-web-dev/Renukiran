import { Heart } from 'lucide-react';

export default function DonationPage() {
  const handleDonation = () => {
    alert("Thank you for your donation!");
    // In a real application, this would connect to a payment processor
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Help Us Make a Difference</h1>
        <p className="text-gray-600">Your support enables us to continue our vital work</p>
      </header>
      
      {/* Main content */}
      <div className="mb-12">
        {/* Hero image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1505155485412-30b3a45080ec?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Children benefiting from our program" 
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
        
        {/* Impact message */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Your Impact</h2>
          
          <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
            Every donation helps us provide essential services to communities in need. 
            Our programs focus on sustainable development, education, and healthcare initiatives 
            that create lasting change for vulnerable populations around the world.
          </p>
        </div>
        
        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Clean water project" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">Clean Water Initiatives</p>
          </div>
          <div>
            <img 
              src="https://cdn.pixabay.com/photo/2015/05/06/13/06/woman-755227_1280.jpg" 
              alt="Education program" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">Education Programs</p>
          </div>
          <div>
            <img 
              src="https://media.istockphoto.com/id/1147299491/photo/indian-women-stitching-cloths-by-machine-at-home-stock-image.jpg?s=1024x1024&w=is&k=20&c=B9WKknQMPXtFf48o79hYzlAU0CbGmMG0wQyTr9kvU7M=" 
              alt="Healthcare services" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">Healthcare Services</p>
          </div>
        </div>
        
        {/* Impact statement */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">Our Impact</h3>
            <p className="text-gray-700 mb-4">
              In the past year alone, we've helped over 15,000 people gain access to clean water, 
              provided educational resources to 8,000 children, and supported 2,500 families with 
              sustainable farming initiatives.
            </p>
            <p className="text-gray-700">
              We commit to using 92% of all donations directly for program expenses, 
              with only 8% going toward administrative costs. Your generosity makes 
              a real, measurable difference in people's lives.
            </p>
          </div>
        </div>
        
        {/* Donation button section */}
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <Heart className="mx-auto text-red-500 mb-4" size={48} />
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Ready to Make a Difference?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Your donation today will help transform lives and communities.
            Join us in our mission to create lasting positive change.
          </p>
          
          <a
href='https://razorpay.me/@renukiranwelfarefoundation'   
target='_blank'       
            // onClick={handleDonation}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-md text-lg transition duration-200"
          >
            Donate Now
          </a>
          
          <p className="mt-4 text-sm text-gray-600">
            Secure payment processing. All donations are tax-deductible.
          </p>
        </div>
      </div>
      

    </div>
  );
}