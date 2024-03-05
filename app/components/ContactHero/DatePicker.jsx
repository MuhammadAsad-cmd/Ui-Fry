"use client";
import React from "react";
import DatePicker from "react-datepicker";
import { FaAngleDown } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

function DateInput() {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <label
        htmlFor="last-name"
        className="block text-lg font-medium leading-6 text-[#3C4959]"
      >
        Select date
      </label>
      <div className="relative w-full bg-white border border-[#D0D5DD] rounded-md">
        <DatePicker
          onChange={handleDateChange}
          selected={selectedDate}
          className="block w-full px-4 rounded-md h-[55px] text-[#667085] outline-none placeholder:text-[#667085]  z-10"
          placeholderText="December - 02 - 2022"
          calendarClassName="absolute bg-white shadow-md mt-2 rounded-lg border border-gray-300 z-20"
        />
        <FaAngleDown className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </div>
    </>
  );
}

export default DateInput;
