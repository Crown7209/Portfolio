import { SwitchIcon } from "./SwitchIcon";

export const Menu = ({ handleMenu, isOpenMenu }) => {
  return (
    <div
      className={`absolute transition-all duration-500 ease-in-out ${
        isOpenMenu ? "left-0" : "left-[100%]"
      } left-0 mt-4 flex justify-end w-screen h-screen background`}
    >
      <div className="flex flex-col w-[85%] h-screen gap-5 bg-[var(--background-color)] lg:hidden shadow">
        <div className="flex flex-col">
          <nav className="flex flex-col p-4 gap-4 border-t-[var(--zuraas)] border-t">
            <a
              href="#about"
              className="nav hover:text-[var(--secondary-text-color)] active:text-[var(--primary-text-color)]"
              onClick={handleMenu}
            >
              About
            </a>
            <a
              href="#work"
              className="nav hover:text-[var(--secondary-text-color)] active:text-[var(--primary-text-color)]"
              onClick={handleMenu}
            >
              Work
            </a>
            <a
              href="#experience"
              className="nav hover:text-[var(--secondary-text-color)] active:text-[var(--primary-text-color)]"
              onClick={handleMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="nav hover:text-[var(--secondary-text-color)] active:text-[var(--primary-text-color)]"
              onClick={handleMenu}
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center p-4 gap-4 flex-col w-full border-t border-t-[var(--zuraas)]">
            <div className="flex items-center justify-between w-full">
              <p className="text-base font-normal leading-6 text-[var(--primary-text-color)]">
                Switch Theme
              </p>
              <label for="check" className="cursor-pointer">
                <SwitchIcon />
              </label>
            </div>
            <button className="px-4 py-1.5 flex justify-center text-base font-medium font-text leading-6 bg-[var(--secondary-text-color)] text-[var(--background-color-two)] rounded-xl gap-2 hover:bg-[var(--date)] active:bg-[var(--button-hover)] w-full ">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
