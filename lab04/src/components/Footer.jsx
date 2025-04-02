import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10 rounded-t-md">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-bold">About Us</h3>
          <p className="text-sm mt-2">
            Welcome to our website, a wonderful place to explore how to cook like a pro.
          </p>
          <div className="mt-3 flex">
            <input type="text" placeholder="Enter your email" className="p-2 rounded-l-md text-black" />
            <button className="bg-blue-500 p-2 rounded-r-md">Subscribe</button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold">Learn More</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Our Cooks</a></li>
            <li><a href="#" className="hover:underline">See Our Features</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold">Recipes</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#" className="hover:underline">What to Cook This Week</a></li>
            <li><a href="#" className="hover:underline">Pasta</a></li>
            <li><a href="#" className="hover:underline">Healthy</a></li>
            <li><a href="#" className="hover:underline">Vegetarian</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 text-center text-xs border-t border-gray-700 pt-3">
        <p>&copy; 2023 Chefify Company | Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
