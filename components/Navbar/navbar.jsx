import Image from "next/image";
import Link from "next/link";
import projectLogo from "../../public/project-logo.svg";
import githubLogo from "../../public/githubLogo.svg";

function Navbar() {
  return (
    <nav className="w-full h-[10vh] flex items-center justify-between px-16 bg-backgroundColor z-50">
      <Link href="/">
        <Image src={projectLogo} alt="project-logo" className="w-44"></Image>
      </Link>
      <Link href="https://github.com/RakeshSangem/instrumen.tel">
        <Image src={githubLogo} alt="project-logo"></Image>
      </Link>
    </nav>
  );
}
export default Navbar;
