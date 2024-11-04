import SidebarLinkRenderer from "./SidebarLinkRenderer.jsx";

const Sidebar = () => {
  return (
    <>
      <div
        id="default-sidebar"
        className="top-0 left-0 z-40 h-screen"
        aria-label="Sidebar"
      >
        <div className="h-screen p-5 bg-base-200 w-56">
          <SidebarLinkRenderer />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
