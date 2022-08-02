import React from "react";
import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy, MdTheaterConedy } from "react-icons/md";
import {
  GiNinjaHeroicStance,
  GiRomanToga,
  GiGhost,
  GiBandageRoll,
} from "react-icons/gi";
import { SMenus } from "./StyleMenus";
import MenuItem from "./MenuItem";

const Menus = () => {
  return (
    <SMenus>
      <MenuItem name="Home" Icon={FaHome} />
      <MenuItem name="Trending" Icon={FaHotjar} />
      <MenuItem name="Top rated" Icon={FaStar} />
      <MenuItem name="Actions Movies" Icon={GiNinjaHeroicStance} />
      <MenuItem name="Comedy Movies" Icon={MdTheaterComedy} />
      <MenuItem name="Horror Movies" Icon={GiGhost} />
      <MenuItem name="Romance Movies" Icon={GiRomanToga} />
      <MenuItem name="Documentaries" Icon={GiBandageRoll} />
    </SMenus>
  );
};

export default Menus;
