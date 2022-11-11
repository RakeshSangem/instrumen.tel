import Image from "next/image";
import projectLogo from "../../public/project-logo.svg";
import githubLogo from "../../public/githubLogo.svg";

function Navbar() {
  return (
    <nav className="w-full h-[10vh] flex items-center justify-between px-16 bg-backgroundColor">
      <Image src={projectLogo} alt="project-logo" className="w-44"></Image>
      <Image src={githubLogo} alt="project-logo"></Image>
    </nav>
  );
}
export default Navbar;
