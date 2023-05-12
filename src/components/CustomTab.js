import { useState, useEffect } from "react";
import { BsList, BsX } from "react-icons/bs";

function CustomTab({ children, activeTab }) {
  const [active, setActive] = useState(activeTab);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleTabClick = (index) => {
    setActive(index);
    if (windowWidth <= 992) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 992) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <nav className="d-lg-flex mt-lg-4 justify-center">
        {windowWidth <= 992 && (
          <button
            className={`mobile-menu-toggle ${
              isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
            } bg-primary text-white py-2 px-4 rounded`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <BsX /> : <BsList />}
          </button>
        )}
        {isMobileMenuOpen && windowWidth <= 992 && (
          <div className="mobile-menu-items absolute top-0 right-0 bg-white p-4 rounded shadow-lg h-100">
            {children.map((tab, index) => (
              <button
                key={index}
                className={`block w-full py-2 px-4 text-gray-800 rounded mt-3 ${
                  active === index ? "bg-green-400 text-white" : "bg-gray-400"
                } ${
                  tab.props.title === "Commit-History"
                    ? "bg-blue-400 text-white"
                    : tab.props.title === "Hooks-Components"
                    ? "bg-yellow-400 text-white"
                    : ""
                }`}
                onClick={() => {
                  handleTabClick(index);
                  toggleMobileMenu();
                }}
              >
                {tab.props.title}
              </button>
            ))}
          </div>
        )}
        {windowWidth > 992 && (
          <div className="desktop-menu">
            {children.map((tab, index) => (
              <button
                key={index}
                className={`pl-2 pr-2 m-1 rounded text-white ${
                  active === index ? "bg-green-400 text-white" : "bg-gray-400"
                } ${
                  tab.props.title === "Commit-History"
                    ? "bg-blue-400 text-white"
                    : tab.props.title === "Hooks-Components"
                    ? "bg-yellow-400 text-white"
                    : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.props.title}
              </button>
            ))}
          </div>
        )}
      </nav>
      {children[active]}
    </div>
  );
}

CustomTab.Panel = function ({ children }) {
  return <div className="mt-3">{children}</div>;
};

export default CustomTab;
