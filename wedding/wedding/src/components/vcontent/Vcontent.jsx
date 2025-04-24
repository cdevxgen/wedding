"use client"
// Import necessary modules from Next.js and React
import React from "react";
import styles from "./Vcontent.module.css"; // Import your CSS module for styling

const Vcontent = () => {
  const handleSaveDate = () => {
    // Get the current date and time
    const currentDate = new Date();

    // Format date to be used in the calendar file
    const formattedDate = currentDate.toISOString().replace(/[-:]/g, "");

    // Create the calendar content
    const calendarContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Dai & Dakota Wedding
DESCRIPTION:We are Getting Married. Join us on our big day!
DTSTART:${formattedDate}
DTEND:${formattedDate}
END:VEVENT
END:VCALENDAR`;

    // Create a Blob from the calendar content
    const blob = new Blob([calendarContent], {
      type: "text/calendar;charset=utf-8",
    });

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Chinni_Prethii_Wedding.ics");
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link element
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      {/* Background Image */}
      <div className={styles.background} />

      <div className="relative flex items-end justify-center h-screen">
        <div
          className={`pb-10 text-start bg-gradient-to-r justify-end text-newblue rounded-md shadow-md`}
        >
          {/* Heading and Subheading */}
          <div className="text-start pb-100 pr-10 bg-red-500 rounded-md">
            <h1 className=" text-2xl sm:text-5xl md:text-5xl lg:text-6xl font-bold font-Poppins text-indigo-900 ml-20 pl-20 text-shadow-lg">
              Kai & Dakota
            </h1>
            <p className="text-gray-600 text-2xl font-Poppins text-center pt-8">
              We are Getting Married
            </p>
          </div>

          {/* Date and Details */}
          <div className="mt-8 relative">
            <p className="text-xl text-center pb-10 font-semibold text-indigo-700">
              21st November 2028
            </p>
            <div className="max-w-md font-Poppins mx-auto">
              <p className="text-gray-700 text-center font-serif leading-relaxed mb-4">
                Were super excited to have you all with us on our big day.
              </p>
              <p className="text-gray-700 text-center font-Poppins leading-relaxed mb-4">
                Join us as we share our joy and celebrate this special occasion.
              </p>
              <p className="text-gray-700 text-center font-Poppins leading-relaxed">
                Allow us to show you the beauty of Brooklyn that we love so
                dearly.
              </p>
            </div>
          </div>

          {/* Save the Date Button */}
          <button
            className="mt-6 bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition-all duration-300 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-700"
            onClick={handleSaveDate}
          >
            Save the Date!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vcontent;
