import { sidebarLinks } from "./sidebarLinks.jsx";
import React from "react";

const SidebarLinkRenderer = () => {
  return sidebarLinks.map((item, id) => (
    <ul key={id} className="space-y-2 font-medium min-w-44">
      <li>
        <a
          href={item.path}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          {React.cloneElement(item.icon, {
            className:
              "size-6 lex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
          })}
          <span className="ms-5">{item.title}</span>
        </a>
      </li>
    </ul>
  ));
};

export default SidebarLinkRenderer;
