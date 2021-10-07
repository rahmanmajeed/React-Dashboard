function Header() {
  return (
    <>
      <header>
        <div className="flex flex-1 px-5 py-5 items-center justify-between bg-gray-300">
          <div className="flex flex-1">
            <div className="px-2">
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
            </div>
            <div className="px-2">Logo</div>
          </div>
          <div className="flex">
            <div className="rounded-2xl bg-yellow-300 p-1"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
