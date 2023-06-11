import {
  BsBell,
  BsBookmark,
  BsBookmarks,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsPerson,
  BsSearch,
  BsTwitter,
} from "react-icons/bs";
import { AiOutlineLogout, AiOutlineMail } from "react-icons/ai";
import { FcFlashOn } from "react-icons/fc";
import { GoNote, GoKebabHorizontal } from "react-icons/go";
import { SlNote } from "react-icons/sl";
import { GiNetworkBars } from "react-icons/gi";
import { IconType } from "react-icons";

interface IconsType {
  [key: string]: IconType;
}

const Icons: IconsType = {
  bookmark: BsBookmark,
  email: AiOutlineMail,
  search: BsSearch,
  write: SlNote,
  bell: BsBell,
  user: BsPerson,
  library: BsBookmarks,
  note: GoNote,
  stats: GiNetworkBars,
  logout: AiOutlineLogout,
  chevronDown: BsChevronDown,
  chevronRight: BsChevronRight,
  chevronLeft: BsChevronLeft,
  twitter: BsTwitter,
  flash: FcFlashOn,
  horizontalMenu: GoKebabHorizontal,
};

export default Icons;
