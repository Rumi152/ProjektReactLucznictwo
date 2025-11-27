import { useState } from "react";
import logo from "../assets/archery.jpg";
import { Link } from "react-router";

const Header = () => {
  const navigationItems = [
    { name: "Home", href: "/" },
    {
      name: "Bows",
      submenu: [
        { name: "All", href: "shop/bows" },
        { name: "Longbows", href: "shop/bows/longbows" },
        { name: "Recurve", href: "shop/bows/recurve" },
        { name: "Composite", href: "shop/bows/composite" },
      ],
    },
    {
      name: "Accesories",
      submenu: [
        { name: "All", href: "shop/accesories" },
        { name: "Arrows", href: "shop/accesories/arrows" },
        {
          name: "Recurve/Longbow Accesories",
          href: "shop/accesories/longbows",
        },
        { name: "Composite Accesories", href: "shop/accesories/composite" },
      ],
    },
    { name: "Cart", href: "cart" },
  ];

  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <header className="bg-green-700 shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <div className="overflow-hidden h-10 w-10 rounded-lg flex items-center justify-center">
              <img alt="logo" src={logo}></img>
            </div>
            <span className="ml-2 text-xl font-bold uppercase text-green-100">
              Archery
            </span>
          </Link>

          <nav className="flex space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onClick={() => {
                  if (openSubmenu === item.name) setOpenSubmenu(null);
                  else setOpenSubmenu(item.name);
                }}
              >
                <Link
                  to={item.submenu ? "#" : item.href}
                  className="text-green-100 hover:text-green-950 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  {item.name}

                  {item.submenu && (
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {item.submenu && openSubmenu == item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
