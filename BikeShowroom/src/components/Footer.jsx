import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 h-[300px]">
      <div className="container mx-auto flex flex-col items-center mt-5">
        <div className="mb-2">
          <h3 className="text-lg font-bold">Address</h3>
          <p>123 Main Street</p>
          <p>City, State, ZIP</p>
        </div>
        <div className="mb-2">
          <h3 className="text-lg font-bold">Contact</h3>
          <p>Phone:  4567890</p>
        </div>
        <div className="mb-2">
          <h3 className="text-lg font-bold">Email</h3>
          <p>example.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
