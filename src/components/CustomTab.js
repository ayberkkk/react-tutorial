import { useState } from "react";

function CustomTab({ children, activeTab }) {
  const [active, setActive] = useState(activeTab);
  return (
    <div>
      <nav className="flex mt-4 justify-center">
        {children.map((tab, index) => (
          <button
            key={index}
            className={`bg-green-200 pl-2 pr-2 m-1 text-white rounded ${active === index ? "bg-green-400" : "bg-gray-400"}`}
            onClick={() => setActive(index)}
          >
            {tab.props.title}
          </button>
        ))}
      </nav>
      {children[active]}
    </div>
  );
}

CustomTab.Panel = function ({ children }) {
  return <div className="p-4 ml-4">{children}</div>;
};

export default CustomTab;
