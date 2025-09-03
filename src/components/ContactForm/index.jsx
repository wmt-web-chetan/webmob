"use client";
import React, { useEffect, useState, useRef, use } from "react";
import PrimaryButton from "../PrimaryButton";
import { AllCountry } from "@/assets/Json/country";

const ContactForm = ({CountryCode}) => {
  const [formData, setFormData] = useState({
    fullName: "Rajesh",
    email: "rajeshsharma1241@gmail.com",
    phone: "99812 25145",
    message: "",
    newsletter: false,
    country_code: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setFormData((prev) => ({
      ...prev,
      country_code: country.dial_code,
    }));
    setIsDropdownOpen(false);
  };
 

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
 
  useEffect(() => {
    if(CountryCode){  
      const country = AllCountry.find(country => country.code === CountryCode);
      console.log('country',country);
      setFormData((prev) => ({
        ...prev,
        country_code: country?.dial_code,
      }));
      setSelectedCountry(country);
    }
  }, [CountryCode]);

  return (
    <div>
      <form className="space-y-2 md:space-y-4 2xl:space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-base font-medium text-text-secondary opacity-50 mb-2 2xl:mb-4"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 sm:p-4 border border-text-disabled rounded-2xl text-text-primary 
              focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-base font-medium text-text-secondary opacity-50 mb-2 2xl:mb-4"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 sm:p-4 border border-text-disabled rounded-2xl text-text-primary 
              focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-base font-medium text-text-secondary opacity-50 mb-2 2xl:mb-4"
          >
            Phone Number
          </label>
          <div className="flex flex-row gap-2">
            <div className="relative" ref={dropdownRef}>
              {/* Custom Dropdown Button */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-24 sm:w-28 py-3 px-2 sm:p-4 border border-text-disabled rounded-2xl text-text-primary text-sm
                focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent bg-white cursor-pointer
                flex items-center justify-between h-12 sm:h-14"
              >
                <span className="truncate">
                  {selectedCountry ? `${selectedCountry.flag} ${selectedCountry.dial_code}` : ''}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Custom Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-50 top-full left-0 right-0 mt-1 w-24 sm:w-full  bg-white border border-text-disabled rounded-2xl shadow-lg max-h-40 sm:max-h-48 overflow-y-auto">
                  {AllCountry.map((country, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                      className="w-full px-3 py-2 text-text-primary text-left text-sm hover:bg-gray-50 flex items-center gap-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span>{country.flag}</span>
                      <span className="truncate">{country.dial_code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 border border-text-disabled rounded-2xl text-text-primary 
              focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-base font-medium text-text-secondary opacity-50 mb-2 2xl:mb-4"
          >
            Message Box
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type a Message..."
            className="w-full p-3 sm:p-4 border border-text-disabled rounded-2xl text-text-primary 
              focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent resize-none"
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            className=" w-4 h-4 text-blue-600 border-text-disabled rounded focus:ring-primary"
          />
          <label
            htmlFor="newsletter"
            className="text-xs text-text-secondary leading-relaxed"
          >
            I agree to receive information about WebMobTech's news, products, &
            updates.
          </label>
        </div>

        <div>
          <PrimaryButton
            text="Submit"
            className="bg-gradient-primary text-white font-medium transition-colors duration-200 shadow-sm hover:shadow-md w-full !h-12"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
