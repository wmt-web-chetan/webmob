"use client";
import ContactForm from "@/components/ContactForm";
import { fetchCountry } from "@/utils/ipApi";
import React, { useEffect, useState } from "react";

const FormFooter = () => { 
    const [countryCode, setCountryCode] = useState("");
    useEffect(() => {
        fetchCountry().then(data => {  
            setCountryCode(data.country);
        });
    }, []);

  return (
    <div className="mb-8 md:mb-20 mx-4 sm:mx-8 md:mx-16 lg:mx-16 2xl:mx-32 rounded-t-4xl rounded-b-3xl bg-white relative">
      <div className="py-8 lg:py-12 2xl:py-16 w-full footer-header-bg rounded-3xl flex flex-col justify-center items-start px-6 md:ps-14 gap-4">
        <div className="lg:max-w-md 2xl:max-w-max gap-4  flex flex-col justify-center items-start">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
            Ready to Collaborate?
          </h1>
          <p className="text-light-bg opacity-90 text-base sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl font-normal max-w-2xl">
            Share your vision with us — we'll connect and make it happen.
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="pt-32 pb-10 ps-14 text-text-primary flex flex-col gap-20">
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl 2xl:text-[32px] font-bold">
              Talk to Our Team Today:
            </h1>
            <ul className="flex flex-col gap-4 mt-6 text-text-secondary opacity-50 list-disc list-inside text-md md:text-lg lg:text-xl 2xl:text-2xl font-normal">
              <li>Learn how our solution fits your needs</li>
              <li>Get clear answers to your questions</li>
              <li>Request a personalized quote</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl 2xl:text-[32px] font-medium">
              Contact
            </h1>
            <div className="text-md md:text-lg lg:text-xl 2xl:text-2xl flex gap-2 font-medium pt-3 sm:pt-6">
              <h4>IND</h4>
              <p className="text-text-disabled font-normal">+91-70438-66892</p>
            </div>
            <div className="text-md md:text-lg lg:text-xl 2xl:text-2xl flex gap-2 font-medium pt-2 sm:pt-4">
              <h4>USA</h4>
              <p className="text-text-disabled font-normal">+1-408-520-9597</p>
            </div>
          </div>
        </div>
        {/* Desktop Form - Absolute positioning */}
        <div className="absolute top-8 lg:top-12 2xl:top-16 z-50 right-[2%] xl:right-[6%] bg-white rounded-3xl p-6 xl:p-8 w-80 xl:w-96 2xl:w-[40%] border border-text-disabled">
          <ContactForm CountryCode={countryCode} />
        </div>
      </div>

      {/* Mobile and Tablet Layout */}
      <div className="block lg:hidden">
        <div className="pt-8 pb-6 px-6 text-text-primary flex flex-col gap-8">
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl 2xl:text-[32px] font-bold">
              Talk to Our Team Today:
            </h1>
            <ul className="flex flex-col gap-1 sm:gap-4 mt-3 sm:mt-6 text-text-secondary opacity-50 list-disc list-inside text-md md:text-lg lg:text-xl 2xl:text-2xl font-normal">
              <li>Learn how our solution fits your needs</li>
              <li>Get clear answers to your questions</li>
              <li>Request a personalized quote</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl 2xl:text-[32px] font-medium">
              Contact
            </h1>
            <div className="text-md md:text-lg lg:text-xl 2xl:text-2xl flex gap-2 font-medium pt-2 sm:pt-6">
              <h4>IND</h4>
              <p className="text-text-disabled font-normal">+91-70438-66892</p>
            </div>
            <div className="text-md md:text-lg lg:text-xl 2xl:text-2xl flex gap-2 font-medium pt-1 sm:pt-4">
              <h4>USA</h4>
              <p className="text-text-disabled font-normal">+1-408-520-9597</p>
            </div>
          </div>
        </div>
        {/* Mobile/Tablet Form - Relative positioning */}
        <div className="pb-3 sm:pb-6 bg-white rounded-3xl">
          <div className="mx-3 sm:mx-6 bg-white rounded-3xl p-4 sm:p-6 border border-text-disabled">
            <ContactForm CountryCode={countryCode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFooter;
