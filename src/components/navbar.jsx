import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 text-2xl font-bold">
          <Link to="/" className="!text-orange-600">
            Business
            <span className="text-black"> Gurukull</span>
          </Link>
        </div>
        {/* /* Center Nav Links  */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
          <Link to="/" className="hover:text-orange-600! !text-gray-800">
            Home
          </Link>
          <Link to="/" className="hover:text-orange-600! !text-gray-800">
            About Us
          </Link>
          <Link to="/" className="hover:text-orange-600! !text-gray-800">
            Services
          </Link>
          <Link to="/" className="hover:text-orange-600! !text-gray-800">
            Case Studies
          </Link>
          <Link to="/" className="hover:text-orange-600! !text-gray-800">
            Blog
          </Link>
          <Link to="/" className="hover:text-orange-600! !text-gray-800">
            Career
          </Link>
          {/* <Link to="/" className="hover:text-orange-600! !text-gray-800">
            Integrations
          </Link>
          <Link to="/" className="hover:text-orange-600! !text-gray-800">
            Company
          </Link>
          <Link to="/" className="hover:text-orange-600! !text-gray-800">
            Work
          </Link> */}
          <div className="ml-auto">
            <Link
              to="/"
              className="bg-orange-500 hover:bg-orange-600! !text-white px-5 py-2 rounded-full text-sm font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* CTA Button */}
      </div>
    </nav>
  );
};

export default Navbar;
