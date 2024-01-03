import React from 'react'
import BuyingCard from '@/components/BuyingCard'

function page() {
  return (
    <div className='text-black  w-full m-auto gap-4 bg-gray-100 text-center pt-4' >


<div className='text-center'>

<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Donate Where Need Is Great</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

</div>

        <div className='flex flex-wrap  w-[100vw] m-auto gap-4 justify-center'>

      <BuyingCard pictureLink="https://img.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_74855-21023.jpg?w=900&t=st=1704267384~exp=1704267984~hmac=b60786a94fe64bbdc409b642275271b85b11411a283de2c2856b234a522f5d78" DonationTitle="Food Donation" DonationDetails=" Nourish a life, donate a meal – Share the joy of a full stomach!" />


      <BuyingCard pictureLink="https://img.freepik.com/free-vector/drawn-clothing-donation-concept_23-2148832529.jpg?w=740&t=st=1704266820~exp=1704267420~hmac=e724b6d97e277aa0e9f2af52c0c2eb1a35cf2f666aa730d34a18c1106637d029" DonationTitle="Cloth Donation" DonationDetails="Clothe with kindness – Your gently-used garments can bring warmth and comfort" />



      <BuyingCard pictureLink="https://img.freepik.com/free-vector/flat-world-humanitarian-day-illustration_23-2148998437.jpg?w=740&t=st=1704267289~exp=1704267889~hmac=1bb385ad4a96ef6eb13501750a8ddd15b427479a78abaa92c14e495aa3d123b9" DonationTitle="Toiletries and Personal Care Donation" DonationDetails="Spread hygiene, spread smiles – Contribute toiletries for a healthier community." />



      <BuyingCard pictureLink="https://img.freepik.com/free-vector/tiny-students-sitting-near-books-getting-university-degree-paying-money-education-business-flat-vector-illustration-college-scholarship-finance-system-school-fee-economy-student-loan-concept_74855-21037.jpg?w=826&t=st=1704268491~exp=1704269091~hmac=a3bc1b3385f77a6264f2d1e61e2794a07de9697b71e46adbc73d9ca2df0f6ea7" DonationTitle="Educational Donation" DonationDetails="Empower through education – Gift books and stationery for a brighter future." />



      <BuyingCard pictureLink="https://img.freepik.com/free-vector/tiny-students-sitting-near-books-getting-university-degree-paying-money-education-business-flat-vector-illustration-college-scholarship-finance-system-school-fee-economy-student-loan-concept_74855-21037.jpg?w=826&t=st=1704268491~exp=1704269091~hmac=a3bc1b3385f77a6264f2d1e61e2794a07de9697b71e46adbc73d9ca2df0f6ea7" DonationTitle="Home Essentials Donation" DonationDetails="Make a house a home – Your donated household items transform lives." />



      <BuyingCard pictureLink="https://img.freepik.com/free-vector/humanitarian-help-people-donating-sanitary-protection-equipment-concept-illustration_114360-1756.jpg?w=900&t=st=1704268607~exp=1704269207~hmac=07bd3562b8274fff2af2a852d0505e2f6d99b7336a534396b42c4c54a0ea7a9f" DonationTitle="Medical Donation" DonationDetails=" Heal with kindness – Donate medicines for a healthier community." />



      <BuyingCard pictureLink="https://img.freepik.com/free-vector/charity-flowchart-layout-with-free-lunches-health-care-donations-box-dollar-bills-isometric-elements-illustration_1284-28203.jpg?w=740&t=st=1704268770~exp=1704269370~hmac=17bf97706ad122be8d5a264a017fad183a0ad87061d8c0689e767587ec852c80" DonationTitle="Toy Donation" DonationDetails="Ignite joy. Donate toys for brighter smiles and active play. Make a difference today!" />





      </div>

    </div>
  )
}

export default page
