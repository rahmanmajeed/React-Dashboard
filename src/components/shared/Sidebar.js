import { NavLink, useLocation } from "react-router-dom";
import routes from "../../routes";
import Icon from "../icons/Icon";

function Sidebar({ sidebar, handleSidebar }) {
  const currentLocation = useLocation();
  const activeClass = "bg-gray-light text-white rounded-2xl py-2";
  const deActiveClass = "py-3 text-gray-200";

  return (
    <>
      <div
        className={`bg-gray-darkest ${
          sidebar
            ? "min-h-screen hidden md:block md:col-span-2 md:sticky md:top-0 md:self-start"
            : "hidden"
        }`}
      >
        {/** sidebar top */}
        <div className="flex justify-between items-center px-5 py-3">
          <div>
            <Icon icon="#site_logo" size="10" />
          </div>
          <div>
            <button onClick={() => handleSidebar(false)}>
              <Icon icon="#open" size="4" />
            </button>
          </div>
        </div>

        {/** sidebar items */}
        <div className="m-3 pt-5">
          {routes.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.path}
                className="ml-12px"
                activeStyle={{ color: "black" }}
              >
                <div
                  className={`flex gap-2 lg:gap-3 justify-start items-center ${
                    item.path === currentLocation.pathname
                      ? activeClass
                      : deActiveClass
                  }`}
                >
                  <div className="pl-5">
                    <Icon icon={item.icon} size="4" />
                  </div>
                  <div className="">{item.name}</div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
