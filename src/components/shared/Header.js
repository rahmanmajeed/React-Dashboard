import { useState } from "react/cjs/react.development";

function Header({handleSidebar}) {
  const[mobileSidebar,setMobileSidebar] = useState(false);

  const handleHeader = () => {
    handleSidebar((pState) => !pState);
  };
  const handleMobileHeader = () =>{
    setMobileSidebar((pState) => !pState);
  }
  return (
    <>
      <div className="md:sticky md:top-0 md:self-start">
      <header>
        <div className={`${mobileSidebar ? 'absolute min-h-screen bg-gray-darkest w-3/4 md:hidden' : 'hidden'}`}>
        <button
                type="button"
                className="text-yellow-500"
                onClick={handleMobileHeader}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              
            </div>
            <div className="block md:hidden px-2">
            <button
                type="button"
                className="text-yellow-500"
                onClick={handleMobileHeader}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="px-2">Logo</div>
          </div>
          <div className="flex">
            <div className="w-8 h-8 rounded-full bg-gray-400">
              
            </div>
          </div>
        </div>
      </header>
      </div>
    </>
  );
}

export default Header;
