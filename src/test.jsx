import React, { useState } from 'react';

const doctors = [
  {
    name: 'Dr. Munaf Inamdar',
    specialization: 'General Physician',
    degree: 'MBBS, MD-General Medicine',
    experience: 27,
    clinic: 'Apex Multispeciality and Mater...',
    location: 'Kondhawa Khurd',
    price: 600,
    img: 'https://randomuser.me/api/portraits/men/11.jpg'
  },
  {
    name: 'Dr. Subhash Bajaj',
    specialization: 'General Physician',
    degree: 'MBBS, Diploma in Cardiology',
    experience: 11,
    clinic: 'Dr. Bajaj Wellness Clinic',
    location: 'Wanowarie',
    price: 600,
    img: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    name: 'Dr. Mufaddal Zakir',
    specialization: 'General Physician',
    degree: 'MBBS',
    experience: 27,
    clinic: 'Sparsh Polyclinic..',
    location: 'Wanwadi',
    price: 600,
    img: 'https://randomuser.me/api/portraits/men/13.jpg'
  },
  {
    name: 'Dr. Ajay Gangoli',
    specialization: 'General Physician',
    degree: 'MBBS',
    experience: 34,
    clinic: 'Niramaya Clinic',
    location: 'Wanowrie',
    price: 400,
    img: 'https://randomuser.me/api/portraits/men/14.jpg'
  }
];

export default function DoctorListingPage() {
  const [mode, setMode] = useState('in-clinic');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-800 p-4">
        <input
          type="text"
          placeholder="Search Symptoms, Doctors, Specialists, Clinics"
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
        />
      </div>

      <div className="flex p-4 gap-4">
        {/* Filters */}
        <div className="w-1/4 bg-white p-4 rounded shadow">
          <div>
            <h3 className="font-semibold mb-2">Sort by</h3>
            <div>
              <label className="block">
                <input type="radio" name="sort" /> Price: Low-High
              </label>
              <label className="block">
                <input type="radio" name="sort" /> Experience - Most Experience first
              </label>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Filters</h3>
            <h4 className="text-sm font-medium">Specialities</h4>
            <div className="mt-2">
              {['Neurologist', 'Oncologist', 'Ayurveda', 'Homeopath'].map((spec, idx) => (
                <label key={idx} className="block text-sm">
                  <input type="checkbox" className="mr-1" /> {spec}
                </label>
              ))}
            </div>
            <h4 className="text-sm font-medium mt-4">Mode of consultation</h4>
            <div className="mt-2">
              <label className="block">
                <input
                  type="radio"
                  name="mode"
                  checked={mode === 'video'}
                  onChange={() => setMode('video')}
                />{' '}
                Video Consultation
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="mode"
                  checked={mode === 'in-clinic'}
                  onChange={() => setMode('in-clinic')}
                />{' '}
                In-clinic Consultation
              </label>
              <label className="block">
                <input type="radio" name="mode" onChange={() => setMode('all')} /> All
              </label>
            </div>
          </div>
        </div>

        {/* Doctor List */}
        <div className="flex-1 space-y-4">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white p-4 flex items-center justify-between rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{doc.name}</h3>
                  <p className="text-sm text-gray-600">{doc.specialization}</p>
                  <p className="text-sm text-gray-600">{doc.degree}</p>
                  <p className="text-sm text-gray-600">{doc.experience} yrs exp.</p>
                  <p className="text-sm text-gray-600">{doc.clinic}</p>
                  <p className="text-sm text-gray-600">📍 {doc.location}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold mb-2">₹ {doc.price}</p>
                <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
