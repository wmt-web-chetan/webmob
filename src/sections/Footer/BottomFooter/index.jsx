import React from "react";
import Logo from "@/assets/images/WebMobTech_Logo.png";
import Image from "next/image";
import dayjs from "dayjs";

const BottomFooter = () => {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 lg:py-14 flex flex-col xl:flex-row justify-center gap-8 sm:gap-10 sm:justify-between items-center footer-gradient">
        <div className="w-full flex flex-col xl:flex-row gap-8 sm:gap-10 xl:gap-20">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-semibold">
            Step into our portfolio to witness ideas turned into{" "}
            <br className="hidden sm:block" />
            meaningful experiences and success stories.
          </div>
          <div className="border-r border-text-disabled hidden lg:block"></div>
          <div className="flex flex-col gap-y-1 sm:gap-y-2 justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">500+</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-disabled font-normal">
              Projects Delivered
            </p>
          </div>
          <div className="flex flex-col gap-y-1 sm:gap-y-2 justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">99%</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-disabled font-normal">
              Happy Clients
            </p>
          </div>
        </div>
        <div className="xl:w-auto w-full flex xl:justify-center justify-start items-center gap-2 md:gap-4 xl:gap-6">
          <h1 className="text-base sm:text-lg md:text-xl xl:text-2xl font-normal">View</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 xl:w-10 xl:h-10"
            viewBox="0 0 40 41"
            fill="none"
          >
            <path
              d="M33.3317 20.7492C33.3312 20.7785 33.3306 20.8079 33.3285 20.8371C33.3226 20.9187 33.3099 20.9984 33.2927 21.0764C33.2886 21.0949 33.2844 21.1133 33.2797 21.1317C33.2508 21.2438 33.2096 21.3507 33.1592 21.4523C33.0807 21.6112 32.9773 21.7612 32.8451 21.8934L21.1784 33.5601C20.5276 34.2109 19.4725 34.2109 18.8217 33.5601C18.1708 32.9092 18.1708 31.8542 18.8217 31.2033L27.6433 22.3817H8.33337C7.41294 22.3817 6.66678 21.6355 6.66671 20.715C6.66671 19.7946 7.4129 19.0484 8.33337 19.0484H27.6433L18.8217 10.2268C18.1708 9.57591 18.1708 8.52087 18.8217 7.86999C19.4725 7.21912 20.5276 7.21912 21.1784 7.86999L32.8451 19.5367C32.9404 19.6319 33.0224 19.7397 33.0925 19.8557C33.1126 19.8889 33.1319 19.9223 33.1495 19.9566C33.2027 20.0605 33.2458 20.1702 33.2764 20.2854C33.2838 20.313 33.2917 20.3405 33.2976 20.3684C33.3014 20.3866 33.3041 20.4052 33.3073 20.4237C33.3125 20.4529 33.3167 20.4822 33.3204 20.5116C33.324 20.5412 33.3265 20.571 33.3285 20.6011C33.3303 20.6277 33.3312 20.6543 33.3317 20.6809C33.332 20.6922 33.3334 20.7037 33.3334 20.715C33.3334 20.7265 33.332 20.7378 33.3317 20.7492Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="relative pt-8 sm:pt-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 pb-8 sm:pb-10 border-b border-text-disabled">
          <div>
            <Image
              src={Logo}
              alt="WebMobTech Logo"
              className="h-12 sm:h-14 md:h-16 xl:h-24 w-auto"
            />
            <h1 className="pt-6 sm:pt-10 md:pt-12 lg:pt-14 text-lg sm:text-xl md:text-2xl font-medium">
              Contact
            </h1>
            <div className="text-sm sm:text-base flex gap-2 font-medium pt-3 sm:pt-4 md:pt-6">
              <h4>IND</h4>
              <p className="text-text-disabled font-normal">+91-70438-66892</p>
            </div>
            <div className="text-sm sm:text-base flex gap-2 font-medium pt-2 sm:pt-3 md:pt-4">
              <h4>USA</h4>
              <p className="text-text-disabled font-normal">+1-408-520-9597</p>
            </div>
            <div className="pt-4 sm:pt-8 flex gap-4 sm:gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 12.2148C22 6.69184 17.523 2.21484 12 2.21484C6.477 2.21484 2 6.69184 2 12.2148C2 17.2058 5.657 21.3428 10.438 22.0928V15.1058H7.898V12.2148H10.438V10.0118C10.438 7.50584 11.93 6.12184 14.215 6.12184C15.309 6.12184 16.453 6.31684 16.453 6.31684V8.77684H15.193C13.95 8.77684 13.563 9.54784 13.563 10.3388V12.2148H16.336L15.893 15.1048H13.563V22.0928C18.343 21.3428 22 17.2058 22 12.2148Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.315 2.21484C14.745 2.21484 15.099 2.22784 16.123 2.27484C17.187 2.32384 17.914 2.49284 18.55 2.73984C19.2175 2.99072 19.8222 3.3842 20.322 3.89284C20.8306 4.39262 21.2241 4.99735 21.475 5.66484C21.722 6.30084 21.891 7.02784 21.94 8.09184C21.988 9.15884 22 9.49884 22 12.2148V12.2948C22 14.9378 21.988 15.2818 21.94 16.3378C21.891 17.4018 21.722 18.1288 21.475 18.7648C21.2241 19.4323 20.8306 20.0371 20.322 20.5368C19.8222 21.0455 19.2175 21.439 18.55 21.6898C17.914 21.9368 17.187 22.1058 16.123 22.1548C15.056 22.2028 14.716 22.2148 12 22.2148H11.92C9.277 22.2148 8.933 22.2028 7.877 22.1548C6.813 22.1058 6.086 21.9368 5.45 21.6898C4.7825 21.439 4.17777 21.0455 3.678 20.5368C3.16936 20.0371 2.77587 19.4323 2.525 18.7648C2.278 18.1288 2.109 17.4018 2.06 16.3378C2.013 15.3138 2 14.9588 2 12.5298V11.8998C2 9.46984 2.013 9.11584 2.06 8.09184C2.109 7.02784 2.278 6.30084 2.525 5.66484C2.77587 4.99735 3.16936 4.39262 3.678 3.89284C4.17777 3.3842 4.7825 2.99072 5.45 2.73984C6.086 2.49284 6.813 2.32384 7.877 2.27484C8.901 2.22784 9.256 2.21484 11.685 2.21484H12.315ZM12.234 4.01684H11.766C9.31 4.01684 8.982 4.02784 7.959 4.07484C6.984 4.11984 6.455 4.28184 6.102 4.41884C5.635 4.60084 5.302 4.81684 4.952 5.16684C4.602 5.51684 4.386 5.84984 4.204 6.31684C4.067 6.66984 3.904 7.19884 3.86 8.17384C3.813 9.19684 3.802 9.52484 3.802 11.9808V12.4488C3.802 14.9048 3.813 15.2328 3.86 16.2558C3.905 17.2308 4.067 17.7598 4.204 18.1128C4.386 18.5788 4.603 18.9128 4.952 19.2628C5.302 19.6128 5.635 19.8288 6.102 20.0108C6.455 20.1478 6.984 20.3108 7.959 20.3548C9.013 20.4028 9.329 20.4128 12 20.4128H12.08C14.677 20.4128 14.997 20.4028 16.04 20.3548C17.016 20.3098 17.545 20.1478 17.898 20.0108C18.364 19.8288 18.698 19.6128 19.048 19.2628C19.398 18.9128 19.614 18.5798 19.796 18.1128C19.933 17.7598 20.096 17.2308 20.14 16.2558C20.188 15.2008 20.198 14.8858 20.198 12.2148V12.1348C20.198 9.53784 20.188 9.21784 20.14 8.17484C20.095 7.19884 19.933 6.66984 19.796 6.31684C19.6358 5.88241 19.3802 5.48944 19.048 5.16684C18.7254 4.8347 18.3324 4.5791 17.898 4.41884C17.545 4.28184 17.016 4.11884 16.041 4.07484C15.018 4.02784 14.69 4.01684 12.234 4.01684ZM12 7.07984C12.6743 7.07984 13.3421 7.21266 13.9651 7.47072C14.5881 7.72878 15.1542 8.10702 15.631 8.58385C16.1078 9.06068 16.4861 9.62676 16.7441 10.2498C17.0022 10.8728 17.135 11.5405 17.135 12.2148C17.135 12.8892 17.0022 13.5569 16.7441 14.1799C16.4861 14.8029 16.1078 15.369 15.631 15.8458C15.1542 16.3227 14.5881 16.7009 13.9651 16.959C13.3421 17.217 12.6743 17.3498 12 17.3498C10.6381 17.3498 9.33201 16.8088 8.36901 15.8458C7.40601 14.8828 6.865 13.5767 6.865 12.2148C6.865 10.853 7.40601 9.54685 8.36901 8.58385C9.33201 7.62085 10.6381 7.07984 12 7.07984ZM12 8.88184C11.116 8.88184 10.2683 9.233 9.64321 9.85806C9.01815 10.4831 8.667 11.3309 8.667 12.2148C8.667 13.0988 9.01815 13.9466 9.64321 14.5716C10.2683 15.1967 11.116 15.5478 12 15.5478C12.884 15.5478 13.7317 15.1967 14.3568 14.5716C14.9818 13.9466 15.333 13.0988 15.333 12.2148C15.333 11.3309 14.9818 10.4831 14.3568 9.85806C13.7317 9.233 12.884 8.88184 12 8.88184ZM17.338 5.67684C17.6563 5.67684 17.9615 5.80327 18.1865 6.02832C18.4116 6.25336 18.538 6.55858 18.538 6.87684C18.538 7.1951 18.4116 7.50033 18.1865 7.72537C17.9615 7.95042 17.6563 8.07684 17.338 8.07684C17.0197 8.07684 16.7145 7.95042 16.4895 7.72537C16.2644 7.50033 16.138 7.1951 16.138 6.87684C16.138 6.55858 16.2644 6.25336 16.4895 6.02832C16.7145 5.80327 17.0197 5.67684 17.338 5.67684Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M13.6468 10.6834L20.9321 2.21484H19.2057L12.8799 9.56804L7.82741 2.21484H2L9.6403 13.3341L2 22.2148H3.72649L10.4068 14.4496L15.7425 22.2148H21.5699L13.6468 10.6834ZM11.2821 13.4321L10.508 12.3249L4.34857 3.51451H7.00037L11.9711 10.6247L12.7452 11.732L19.2066 20.9742H16.5548L11.2821 13.4321Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2.21484C6.477 2.21484 2 6.69884 2 12.2318C2 16.6568 4.865 20.4118 8.839 21.7358C9.339 21.8278 9.521 21.5188 9.521 21.2528C9.521 21.0158 9.513 20.3848 9.508 19.5498C6.726 20.1548 6.139 18.2068 6.139 18.2068C5.685 17.0488 5.029 16.7408 5.029 16.7408C4.121 16.1208 5.098 16.1328 5.098 16.1328C6.101 16.2028 6.629 17.1648 6.629 17.1648C7.521 18.6948 8.97 18.2528 9.539 17.9968C9.631 17.3498 9.889 16.9088 10.175 16.6588C7.955 16.4058 5.62 15.5458 5.62 11.7078C5.62 10.6148 6.01 9.71984 6.649 9.01984C6.546 8.76684 6.203 7.74784 6.747 6.36984C6.747 6.36984 7.587 6.09984 9.497 7.39584C10.3128 7.17336 11.1544 7.06004 12 7.05884C12.85 7.06284 13.705 7.17384 14.504 7.39584C16.413 6.09984 17.251 6.36884 17.251 6.36884C17.797 7.74784 17.453 8.76684 17.351 9.01984C17.991 9.71984 18.379 10.6148 18.379 11.7078C18.379 15.5558 16.04 16.4028 13.813 16.6508C14.172 16.9598 14.491 17.5708 14.491 18.5058C14.491 19.8438 14.479 20.9248 14.479 21.2528C14.479 21.5208 14.659 21.8328 15.167 21.7348C17.1583 21.067 18.8893 19.7902 20.1155 18.0849C21.3416 16.3796 22.0009 14.3322 22 12.2318C22 6.69884 17.522 2.21484 12 2.21484Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2.21484C6.48 2.21484 2 6.69484 2 12.2148C2 17.7348 6.48 22.2148 12 22.2148C17.51 22.2148 22 17.7348 22 12.2148C22 6.69484 17.51 2.21484 12 2.21484ZM18.605 6.82484C19.8357 8.32415 20.5167 10.1992 20.535 12.1388C20.254 12.0848 17.434 11.5098 14.592 11.8678C14.527 11.7268 14.472 11.5748 14.408 11.4228C14.231 11.0059 14.043 10.5937 13.844 10.1868C16.989 8.90684 18.421 7.06284 18.605 6.82484ZM12 3.68984C14.17 3.68984 16.154 4.50284 17.662 5.83784C17.51 6.05384 16.219 7.77884 13.182 8.91784C11.783 6.34784 10.232 4.24284 9.993 3.91784C10.6509 3.76406 11.3244 3.68754 12 3.68984ZM8.367 4.49284C9.51144 6.07915 10.5687 7.72659 11.534 9.42784C7.542 10.4908 4.017 10.4678 3.638 10.4678C3.91283 9.17497 4.48261 7.96306 5.3029 6.92664C6.12319 5.89021 7.17182 5.05729 8.367 4.49284ZM3.453 12.2248V11.9648C3.823 11.9748 7.965 12.0298 12.228 10.7498C12.478 11.2268 12.705 11.7148 12.922 12.2028C12.813 12.2358 12.694 12.2678 12.586 12.3008C8.182 13.7208 5.839 17.6038 5.644 17.9298C4.23384 16.3643 3.45264 14.3319 3.453 12.2248ZM12 20.7618C10.1014 20.7651 8.25667 20.1313 6.761 18.9618C6.913 18.6468 8.649 15.3058 13.464 13.6248C13.486 13.6148 13.497 13.6148 13.518 13.6028C14.3303 15.6983 14.9407 17.8664 15.341 20.0778C14.2858 20.5319 13.1487 20.7647 12 20.7618ZM16.761 19.2968C16.675 18.7768 16.219 16.2818 15.102 13.2128C17.781 12.7898 20.124 13.4838 20.416 13.5818C20.2336 14.7349 19.8148 15.8379 19.1858 16.8213C18.5568 17.8048 17.7313 18.6476 16.761 19.2968Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.85 2.46484C6.548 2.46484 2.25 6.76284 2.25 12.0648C2.25 17.3668 6.548 21.6648 11.85 21.6648C17.152 21.6648 21.45 17.3668 21.45 12.0648C21.45 6.76284 17.152 2.46484 11.85 2.46484ZM9.5 16.0438H7.556V9.78784H9.5V16.0438ZM8.516 9.01984C7.902 9.01984 7.505 8.58484 7.505 8.04684C7.505 7.49784 7.914 7.07584 8.541 7.07584C9.168 7.07584 9.552 7.49784 9.564 8.04684C9.564 8.58484 9.168 9.01984 8.516 9.01984ZM16.6 16.0438H14.656V12.5768C14.656 11.7698 14.374 11.2218 13.671 11.2218C13.134 11.2218 12.815 11.5928 12.674 11.9498C12.622 12.0768 12.609 12.2568 12.609 12.4358V16.0428H10.664V11.7828C10.664 11.0018 10.639 10.3488 10.613 9.78684H12.302L12.391 10.6558H12.43C12.686 10.2478 13.313 9.64584 14.362 9.64584C15.641 9.64584 16.6 10.5028 16.6 12.3448V16.0438Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M23.5 5.43859C23.23 4.40859 22.41 3.59859 21.39 3.32859C19.51 2.80859 12 2.80859 12 2.80859C12 2.80859 4.48 2.80859 2.61 3.30859C1.6 3.57859 0.77 4.40859 0.49 5.43859C0 7.31859 0 11.2086 0 11.2086C0 11.2086 0 15.1286 0.49 16.9886C0.77 18.0186 1.58 18.8286 2.61 19.0986C4.5 19.6186 12 19.6186 12 19.6186C12 19.6186 19.51 19.6186 21.39 19.1186C22.41 18.8486 23.23 18.0286 23.5 17.0086C24 15.1286 24 11.2286 24 11.2286V11.1686C24 10.6786 23.98 7.18859 23.5 5.43859ZM9.6 14.8086V7.61859L15.85 11.2086L9.6 14.8086Z"
                  fill="white"
                />
                <path
                  d="M23.5 5.43859C23.23 4.40859 22.41 3.59859 21.39 3.32859C19.51 2.80859 12 2.80859 12 2.80859C12 2.80859 4.48 2.80859 2.61 3.30859C1.6 3.57859 0.77 4.40859 0.49 5.43859C0 7.31859 0 11.2086 0 11.2086C0 11.2086 0 15.1286 0.49 16.9886C0.77 18.0186 1.58 18.8286 2.61 19.0986C4.5 19.6186 12 19.6186 12 19.6186C12 19.6186 19.51 19.6186 21.39 19.1186C22.41 18.8486 23.23 18.0286 23.5 17.0086C24 15.1286 24 11.2286 24 11.2286V11.1686C24 10.6786 23.98 7.18859 23.5 5.43859ZM9.6 14.8086V7.61859L15.85 11.2086L9.6 14.8086Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {/* Services */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
                  Services
                </h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-normal text-text-disabled">
                  <li>Web Development</li>
                  <li>Mobile Development</li>
                  <li>Product Design and Development</li>
                  <li>DevOps Services</li>
                  <li>Blockchain Services</li>
                  <li>Q&amp;A Services</li>
                  <li>Hire Dedicated Developers</li>
                  <li>Management &amp; IT Consulting</li>
                </ul>
              </div>

              {/* Tools & Tech */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
                  Tools &amp; Tech
                </h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-normal text-text-disabled">
                  <li>
                    Laravel Development{" "}
                    <span className="hidden sm:inline">Services</span>
                  </li>
                  <li>
                    React JS Development{" "}
                    <span className="hidden sm:inline">Services</span>
                  </li>
                  <li>
                    AWS Development{" "}
                    <span className="hidden sm:inline">Services</span>
                  </li>
                  <li>
                    Flutter <span className="hidden sm:inline">App</span>{" "}
                    Development
                  </li>
                  <li>
                    Node Js Development{" "}
                    <span className="hidden sm:inline">Services</span>
                  </li>
                  <li>
                    React Native{" "}
                    <span className="hidden sm:inline">Services</span>
                  </li>
                  <li>
                    Django development{" "}
                    <span className="hidden sm:inline">Services</span>
                  </li>
                  <li>
                    Python development{" "}
                    <span className="hidden sm:inline">Services</span>
                  </li>
                </ul>
              </div>

              {/* Work */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
                  Work
                </h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-normal text-text-disabled">
                  <li>HouzQuest</li>
                  <li>Video Streaming App</li>
                  <li>Sterling Accuris</li>
                  <li>Primally Nourished</li>
                  <li>Dentaway</li>
                  <li>Loan Management System</li>
                  <li>Switchit</li>
                  <li>Zroomm</li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6">
                  Company
                </h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-normal text-text-disabled">
                  <li>About Us</li>
                  <li>Career</li>
                  <li>Contact Us</li>
                  <li>Blog</li>
                  <li>FAQ</li>
                  <li>Testimonial</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-0 justify-between lg:items-center text-xs sm:text-sm md:text-base font-light pt-6 lg:pt-8">
          <p className="text-light-bg">
            © {dayjs(new Date()).format("YYYY")} WebMobTech Solutions Pvt.Ltd.
            All Rights Reserved.
          </p>
          <div className="sm:w-auto w-full flex flex-col sm:flex-row gap-2 sm:gap-2 lg:gap-4 justify-start sm:items-center text-text-disabled text-xs sm:text-sm">
            <p>D-U-N-S Number: 860386955</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="7"
              className="hidden sm:block w-6  "
              viewBox="0 0 8 9"
              fill="none"
            >
              <circle
                opacity="0.5"
                cx="4"
                cy="4.71484"
                r="4"
                fill="var(--color-text-disabled)"
              />
            </svg>
            <p>CIN: U74999GJ2016PTC092785</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomFooter;
