import React from "react";
import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import { GiNinjaHeroicStance, GiRomanToga, GiGhost } from "react-icons/gi";
import { SMenus } from "./StyleMenus";
import MenuItem from "./MenuItem";

const Menus = () => {
  return (
    <SMenus>
      <MenuItem name="Phim chiếu rạp" Icon={FaHome} to="chieu-rap" />
      <MenuItem name="Phim HOT" Icon={FaHotjar} to="hot" />
      <MenuItem name="Phim tài liệu" Icon={FaStar} to="tai-lieu" />
      <MenuItem
        name="Phim hành động"
        Icon={GiNinjaHeroicStance}
        to="hanh-dong"
      />
      <MenuItem name="Phim tình cảm" Icon={MdTheaterComedy} to="tinh-cam" />
      <MenuItem name="Phim ma" Icon={GiGhost} to="ma" />
      <MenuItem name="Phim kiếm hiệp" Icon={GiRomanToga} to="kiem-hiep" />
    </SMenus>
  );
};

export default Menus;
