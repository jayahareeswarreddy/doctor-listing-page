import React from "react";

const DoctorCard = ({ doctor }) => {
  const { name, photo, specialities, experience, fees } = doctor;

  return (
    <div
      className="flex items-start bg-white p-4 rounded-lg mb-4 shadow-md"
      data-testid="doctor-card"
    >
      <img
        src={photo}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mr-4"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold" data-testid="doctor-name">
          {name}
        </h3>
        <p className="text-sm text-gray-600" data-testid="doctor-specialty">
          {specialities.map((s) => s.name).join(", ")}
        </p>
        <p className="text-sm text-gray-600" data-testid="doctor-experience">
          {experience}
        </p>
        <p className="text-sm text-gray-600" data-testid="doctor-fee">
          {fees}
        </p>
        <button className="mt-2 px-4 py-2 border border-blue-700 text-blue-700 rounded hover:bg-blue-50 transition">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
