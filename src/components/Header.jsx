import { useState } from "react";
import { SwitchIcon } from "./SwitchIcon";
import { NavIcon } from "./SwitchNavIcon";
import { Menu } from "./Menu";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="bg-[var(--background-color)] w-full z-[1] fixed">
      <nav className="py-4 max-w-[1280px] m-auto header">
        <div className="px-8 flex justify-between items-center">
          <div className="text-3xl font-normal leading-9 tracking-[-0.6px] text-[var(--secondary-text-color)] font-title">
            <a href="#">TOM</a>
          </div>

          {/* Menu button */}
          <div>
            <label for="menu" class="checkbox p-1.5" onClick={handleMenu}>
              <NavIcon />
            </label>
            <input type="checkbox" name="menu" id="menu" />
            <Menu handleMenu={handleMenu} isOpenMenu={isOpenMenu} />
          </div>

          <div className="navbar">
            <div className="flex items-center">
              <nav className="flex items-center">
                <a
                  href="#about"
                  className="nav hover:text-[var(--secondary-text-color)] active:text-[var(--primary-text-color)]"
                >
                  About
                </a>
                <a
                  href="#work"
                  className="nav hover:text-[var(--secondary-text-color)] active:text-[var(--primary-text-color)]"
                >
                  Work
                </a>
                <a
                  href="#experience"
                  className="nav hover:text-[var(--secondary-text-color)] active:text-[var(--primary-text-color)]"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="nav hover:text-[var(--secondary-text-color)] active:text-[var(--primary-text-color)]"
                >
                  Contact
                </a>
                <div className="w-[1px] h-6 bg-[var(--zuraas)] mr-6 zuraas"></div>
              </nav>
              <div className="flex items-center navbar-div">
                <div>
                  <p className="text-base font-normal hidden leading-6 text-[var(--primary-text-color)]">
                    Switch Theme
                  </p>
                  <label for="check" className="cursor-pointer">
                    <SwitchIcon />
                  </label>
                </div>
                <button className="px-4 py-1.5 flex justify-center text-base font-medium font-text leading-6 bg-[var(--secondary-text-color)] text-[var(--background-color-two)] rounded-xl gap-2 ml-4 hover:bg-[var(--date)] active:bg-[var(--button-hover)] ">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
