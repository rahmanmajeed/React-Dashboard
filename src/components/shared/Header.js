// import { useState } from "react";
import React from "react";
import Icon from "../icons/Icon";

function Header({ sidebar, handleSidebar }) {
  const [mobileSidebar, setMobileSidebar] = React.useState(false);

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
            {/** mobile sidebar top */}
            <div className="flex justify-between items-center px-5 py-3">
              <div>
                <Icon icon="#site_logo" size="10" />
              </div>
              <div>
                <button onClick={handleMobileHeader}>
                  <Icon icon="#open" size="4" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 px-5 py-2 items-center justify-between bg-gray-300">
            <div className="flex flex-1">
              <div className="hidden md:block px-2">
                <button
                  type="button"
                  className="text-pink-800"
                  onClick={handleHeader}
                >
                  {sidebar ? (
                    <Icon icon="#open" size="4" />
                  ) : (
                    <Icon icon="#close" size="4" />
                  )}
                </button>
              </div>
              <div className="block md:hidden px-2">
                <button
                  type="button"
                  className="text-yellow-500"
                  onClick={handleMobileHeader}
                >
                  <Icon icon="#close" size="4" />
                </button>
              </div>
              <div className="px-2 md:hidden">
                <Icon icon="#site_logo_dark" size="5" />
              </div>
            </div>
            {/** right side header */}
            <div className="flex justify-between items-center">
              <div className="px-3">
                <button type="button" className="mr-6 py-1">
                  <Icon icon="#bell" size="5" />
                </button>
              </div>
              <div className="w-8 h-8 mr-5 rounded-full bg-white">
                <button type="button">
                  <img
                    src={process.env.PUBLIC_URL + "/user.png"}
                    alt="img"
                    className="h-full w=full object-cover rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
