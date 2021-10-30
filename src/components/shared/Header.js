import { useState } from "react/cjs/react.development";
import Icon from "../icons/Icon";

function Header({ handleSidebar }) {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const handleHeader = () => {
    handleSidebar((pState) => !pState);
  };
  const handleMobileHeader = () => {
    setMobileSidebar((pState) => !pState);
  };
  return (
    <>
      <div className="md:sticky md:top-0 md:self-start">
        <header>
          <div
            className={`${
              mobileSidebar
                ? "absolute min-h-screen bg-gray-darkest w-3/4 md:hidden"
                : "hidden"
            }`}
          >
            <button
              type="button"
              className="text-yellow-500"
              onClick={handleMobileHeader}
            >
              <Icon icon="#menu" size="4" />
            </button>
          </div>
          <div className="flex flex-1 px-5 py-3 items-center justify-between bg-gray-300">
            <div className="flex flex-1">
              <div className="hidden md:block px-2">
                <button
                  type="button"
                  className="text-pink-800"
                  onClick={handleHeader}
                >
                  <Icon icon="#menu" size="4" />
                </button>
              </div>
              <div className="block md:hidden px-2">
                <button
                  type="button"
                  className="text-yellow-500"
                  onClick={handleMobileHeader}
                >
                  <Icon icon="#menu" size="4" />
                </button>
              </div>
              <div className="px-2">Logo</div>
            </div>
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
