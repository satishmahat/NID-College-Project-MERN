import React from 'react'
import { FaFacebook, FaYoutube, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import gov from "../../../public/gov.png"
import carousel from "../../assets/images/carousel.jpg"

const LandingPage = () => {
  const [currentInfo, setCurrentInfo] = useState(0);

  const infoSlides = [
    "Providing the right amount to the right person at the right time, is our campaign for social security.",
    "Making civil registration and vital statistics accessible to all citizens of Nepal.",
    "National ID: Advancing digital identity for a secure and connected Nepal."
  ];

  return (
    <>
    <div className="w-full min-h-screen">
    
    <div className="bg-gray-600 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <span className="flex items-center">📍 Singhadurbar, Kathmandu</span>
        
        <div className="flex items-center space-x-4">
          <button className="px-4 py-1 bg-white text-black rounded">Secretary List</button>
          <button className="px-4 py-1 bg-white text-black rounded">Vital Statistics</button>
          <button className="px-4 py-1 bg-white text-black rounded">Personal ID Verification</button>
          
          <div className="flex items-center space-x-3 ml-4">
            <FaFacebook className="w-5 h-5" />
            <FaYoutube className="w-5 h-5" />
            <MdEmail className="w-5 h-5" />
          </div>

          <button className="px-4 py-1 bg-blue-600 text-white rounded">In Nepali</button>
          <button className="px-4 py-1 bg-gray-700 text-white rounded">Contact</button>
          <button className="px-4 py-1 bg-red-600 text-white rounded">Technical Support</button>
        </div>
      </div>
    </div>

    
    <div className="bg-white py-4 px-4 border-b">
      <div className="max-w-7xl mx-auto">
      
        <div className="flex items-center mb-4">
          <img
            src={gov}
            alt="Government of Nepal Logo"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-800">Government of Nepal</h1>
            <div className="text-gray-600 text-sm">
              <span>Ministry of Home Affairs</span>
              <span className="mx-2">•</span>
              <span>Department of National ID and Civil Registration</span>
            </div>
          </div>
        </div>

        <nav>
          <div className="flex space-x-6">
            {[
              'HOME',
              'ABOUT US',
              'NATIONAL ID',
              'VITAL EVENT',
              'SOCIAL SECURITY',
              'DOWNLOAD',
              'SERVICES',
              'CONTACT'
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  

<div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-200 overflow-hidden">
      
      <img 
        src={carousel}
        alt="carousel "
        className="w-full h-full object-cover"
      />
      
      
      <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2].map((dot) => (
          <div
            key={dot}
            className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white bg-opacity-50"
          />
        ))}
      </div>
      
     
      <div className="absolute bottom-0 left-0 right-0 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch">
          <div className="bg-blue-600 py-2 px-4 md:py-4 md:px-6 text-white font-bold text-sm md:text-base text-center sm:text-left">
            INFORMATION
          </div>
          <div className="py-2 px-4 md:py-4 md:px-6 flex-1 text-gray-800 text-sm md:text-base">
            {infoSlides[currentInfo]}
          </div>
          <div className="flex justify-end sm:px-4 border-t sm:border-t-0 border-gray-100">
            <button 
              className="p-2 hover:bg-gray-100 transition-colors duration-200 flex-1 sm:flex-none"
              onClick={() => setCurrentInfo((prev) => (prev - 1 + infoSlides.length) % infoSlides.length)}
            >
              <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 mx-auto" />
            </button>
            <button 
              className="p-2 hover:bg-gray-100 transition-colors duration-200 flex-1 sm:flex-none"
              onClick={() => setCurrentInfo((prev) => (prev + 1) % infoSlides.length)}
            >
              <FaChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-900 text-gray-300 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
        <div className="space-y-4">
          <p className="text-sm leading-relaxed">
            Birth registration is a natural right of children. Let us register within 35 days
            of birth at the ward office of our permanent address. The notification of
            birth and death registration can be given by the head of the family or, in
            his absence, by a person who has reached the age of 18. It is the duty of
            citizens to register births, deaths, migrations, marriages and divorces.
          </p>
          <p className="text-sm leading-relaxed">
            Both husband and wife must give notice of marriage. Divorce notice can
            be given by either husband or wife with a court order. When registering a
            migration, only the person who migrates alone and the family who has
            reached the age of 18 must give notice.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-red-500 font-medium mb-2">National ID Management Section</h3>
            <div className="space-y-1 text-sm">
              <p>Phone Number: 01-4200014, 01-4211563, 04120894</p>
              <p>Email: nid@donidc.gov.np</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">Vital Event Registration Section</h3>
              <p className="text-sm">Email: vital@donidc.gov.np</p>
            </div>

            <div>
              <h3 className="font-medium mb-1">Social Security Section</h3>
              <p className="text-sm">Email: ss@donidc.gov.np</p>
            </div>

            <div>
              <h3 className="font-medium mb-1">Administration Section</h3>
              <p className="text-sm">Email: info@donidc.gov.np</p>
            </div>

            <div>
              <h3 className="font-medium mb-1">IT Section</h3>
              <p className="text-sm">Email: it@donidc.gov.np</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-4">Technical Support</h3>
            <div className="space-y-2 text-sm">
              <p>For technical support on social security and vital event registration:</p>
              <p>Toll Free Number: 16600196666</p>
              <p>Call: 01-5970112</p>
              <p>Email: support@donidc.gov.np</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Store Section</h3>
            <p className="text-sm">Email: store@donidc.gov.np</p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm">
        © 2080, Department of National ID and Civil Registration
      </div>
    </div>



    </div>
    </>
);
};
  

export default LandingPage