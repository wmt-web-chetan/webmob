import ContactForm from "@/components/ContactForm";
import React from "react"; 

const FormFooter = () => {
  return (
    <div className="mb-20 mx-32 rounded-t-4xl rounded-b-3xl  bg-white relative">
      <div className="py-16 w-full footer-header-bg rounded-3xl flex flex-col justify-center items-start ps-14 gap-4 ">
        <h1 className="text-5xl font-semibold">Ready to Collaborate?</h1>
        <p className="text-light-bg opacity-90 text-2xl font-normal max-w-2xl">
          Share your vision with us — we’ll connect and make it happen.
        </p>
      </div>
      <div className="pt-32 pb-10 ps-14 text-text-primary flex flex-col gap-20 ">
        <div>
          <h1 className=" text-[32px] font-bold">Talk to Our Team Today:</h1>
          <ul className="flex flex-col gap-4 mt-6 text-text-secondary opacity-50 list-disc list-inside text-2xl font-normal">
            <li>Learn how our solution fits your needs</li>
            <li>Get clear answers to your questions</li>
            <li>Request a personalized quote</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[32px] font-medium">Contact</h1>
          <div className="text-2xl flex gap-2 font-medium pt-3 sm:pt-6">
            <h4>IND</h4>
            <p className="text-text-disabled font-normal">+91-70438-66892</p>
          </div>
          <div className="text-2xl flex gap-2 font-medium pt-2 sm:pt-4">
            <h4>USA</h4>
            <p className="text-text-disabled font-normal">+1-408-520-9597</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[10%] z-50 right-[6%] bg-white rounded-3xl p-8 w-full sm:w-auto min-w-2xl border border-text-disabled ">
        <ContactForm />
      </div>
    </div>
  );
};

export default FormFooter;
