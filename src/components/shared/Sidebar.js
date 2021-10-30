import { NavLink } from "react-router-dom";
import routes from "../../routes";

function Sidebar({ sidebar }) {
  return (
    <>
      <div
        className={`bg-gray-darkest ${
          sidebar
            ? "min-h-screen hidden md:block md:col-span-2 md:sticky md:top-0 md:self-start"
            : "hidden"
        }`}
      >
        {routes.map((item, index) => (
          <div key={index} className="text-green-50">
            <NavLink to={item.path}>{item.name}</NavLink>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
