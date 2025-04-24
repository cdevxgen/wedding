"use client";

import Image from "next/image";
import { MdOutlineDoubleArrow } from "react-icons/md";

const InvitationSection = () => {
  const handleSaveDate = () => {
    // Define the event start and end dates
    const receptionStartDate = new Date("2024-11-23T18:30:00Z"); // 6:30 PM
    const receptionEndDate = new Date("2024-11-23T23:00:00Z"); // 11:00 PM

    const muhurthamStartDate = new Date("2024-11-24T09:00:00Z"); // 9:00 AM
    const muhurthamEndDate = new Date("2024-11-24T10:15:00Z"); // 10:15 AM

    // Function to format date for the iCalendar format (ISO format with 'Z' at the end)
    const formatDate = (date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const formattedReceptionStartDate = formatDate(receptionStartDate);
    const formattedReceptionEndDate = formatDate(receptionEndDate);

    const formattedMuhurthamStartDate = formatDate(muhurthamStartDate);
    const formattedMuhurthamEndDate = formatDate(muhurthamEndDate);

    // Create the calendar content for both Reception and Muhurtham
    const calendarContent = `BEGIN:VCALENDAR
      VERSION:2.0
      BEGIN:VEVENT
      SUMMARY:Wedding Reception of Mahesh N Shetty & ShreeRaksha R Shetty
      DESCRIPTION:Join us for the wedding reception of Mahesh N Shetty & ShreeRaksha R Shetty.
      DTSTART:${formattedReceptionStartDate}
      DTEND:${formattedReceptionEndDate}
      LOCATION:Brooklyn, NY
      END:VEVENT
      BEGIN:VEVENT
      SUMMARY:Muhurtham Ceremony of Mahesh N Shetty & ShreeRaksha R Shetty
      DESCRIPTION:Celebrate the Muhurtham of Mahesh N Shetty & ShreeRaksha R Shetty.
      DTSTART:${formattedMuhurthamStartDate}
      DTEND:${formattedMuhurthamEndDate}
      LOCATION:Brooklyn, NY
      END:VEVENT
      END:VCALENDAR`;

    // Create a Blob from the calendar content
    const blob = new Blob([calendarContent], {
      type: "text/calendar;charset=utf-8",
    });

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Wedding_Invitation.ics");
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link element
    document.body.removeChild(link);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/card/info.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Mahesh & ShreeRaksha
        </h1>
        <div className="text-white text-lg sm:text-sm lg:text-2xl space-y-4">
          <p className="font-semibold">Reception: Saturday, Nov 23, 2024</p>
          <p>6.30pm onwards</p>
          <p className="font-semibold">Muhurtham: Sunday, Nov 24, 2024</p>
          <p>9.00 to 10.15 am</p>
        </div>
        <div className="mt-3 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-6 text-white text-base sm:text-sm lg:text-xl max-w-2xl mx-auto leading-relaxed">
          <p>We're super excited to have you all with us on our big day.</p>
          <p>
            Join us as we share our joy and celebrate this special occasion.
          </p>
          <p>
            Allow us to show you the beauty of Brooklyn that we love so dearly.
          </p>
        </div>
        <div className="mt-3 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-6 text-center">
          <button
            className="bg-gradient-to-r from-pink-800 to-pink-600 text-white font-bold py-2 px-6 rounded-md shadow-lg inline-flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-700 hover:shadow-xl"
            onClick={handleSaveDate}
          >
            Save the date
            <MdOutlineDoubleArrow className="text-2xl animate-pulse" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitationSection;
