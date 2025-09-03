"use client";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton";
import { AllCountry } from "@/assets/Json/country";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "Rajesh",
    email: "rajeshsharma1241@gmail.com",
    phone: "99812 25145",
    message: "",
    newsletter: false,
    country_code: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  useEffect(() => { 

    fetch("https://ipapi.co/json/") // free IP API
        .then(res => res.json())
        .then(data =>{
          const foundCountry = AllCountry.find(country => country.code === data.country);
          if (foundCountry) {
            setFormData((prev) => ({
              ...prev,
              country_code: foundCountry.dial_code
            }));
          }
        })
        .catch(() => {
          // Optionally handle error, e.g., set a default country code
        });

  }, [ ]);

  return (
    <div>
      <form className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-base font-medium text-text-secondary opacity-50 mb-4"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-4 border border-text-disabled rounded-2xl text-text-primary 
              focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-base font-medium text-text-secondary opacity-50 mb-4"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border border-text-disabled rounded-2xl text-text-primary 
              focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-base font-medium text-text-secondary opacity-50 mb-4"
          >
            Phone Number
          </label>
          <div className="flex flex-row gap-2">
            <div className="relative">
              <select
              value={formData.country_code}
              onChange={handleChange}
                className="w-28 p-4 border border-text-disabled rounded-2xl text-text-primary 
              focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent appearance-none"
              >
                {AllCountry.map((country, index) => (
                  <option key={index} value={country.dial_code}>
                    {country.flag} {country.dial_code}
                  </option>
                ))} 
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
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
              </div>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 border border-text-disabled rounded-2xl text-text-primary 
              focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-base font-medium text-text-secondary opacity-50 mb-4"
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
            className="w-full p-4 border border-text-disabled rounded-2xl text-text-primary 
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
