const NavBar = () => {
  return (
    <div className="">
      <nav className="flex flex-row shadow-lg justify-between items-center p-3 w-full border">
        <div
          className=" text-4xl font-bold text-pink-500 hover:text-pink-600 transition-colors duration-300"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Blog Dev
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-row gap-3 text-md font-bold text-metal lg:gap-16">
            {[
              "TODO",
              "TECNOLOGIA",
              "POLITICA",
              "VIDA-MUNDIAL",
              "CLIMA",
              "MUNDO",
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-pink-500 transition-colors duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2">
          <button className="bg-gradient-to-r from-pink-color via-pink-color to-bubble-gum text-white px-5 py-2 rounded-lg font-bold shadow-md shadow-bubble-gum hover:opacity-90 transition-opacity duration-300">
            Login
          </button>
          <button className="bg-gradient-to-r from-pink-color via-pink-color to-bubble-gum text-white px-5 py-2 rounded-lg font-bold shadow-md shadow-bubble-gum hover:opacity-90 transition-opacity duration-300">
            Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
