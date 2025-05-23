import { useDarkMode } from "../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <ButtonIcon>
        {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </ButtonIcon>
    </>
  );
}
