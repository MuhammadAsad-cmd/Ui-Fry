import React from "react";

function PhoneNumberForm() {
  return (
    <form className="">
      <label
        htmlFor="last-name"
        className="block text-lg font-medium leading-6 text-[#3C4959]"
      >
        Phone number
      </label>
      <div className="flex items-center border border-[#D0D5DD] px-4 rounded-md mt-[10px]">
        <button
          id="dropdown-phone-button"
          data-dropdown-toggle="dropdown-phone"
          className="flex-shrink-0 z-10 inline-flex items-center h-[55px] text-sm font-medium text-center bg-white"
          type="button"
        >
          <p className="text-base text-[#011632] "> US</p>
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <input
          type="tel"
          name="phone"
          id="phone"
          className="block w-full px-4 h-[55px] text-[#667085] outline-none placeholder:text-[#667085] "
          placeholder="+1 (555) 000-0000"
        />
      </div>
    </form>
  );
}

export default PhoneNumberForm;
