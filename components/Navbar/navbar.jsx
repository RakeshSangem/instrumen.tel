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
      <div className="flex gap-4">
        <Link href={"/team"} className="text-2xl text-primaryColor">
          Our Team
        </Link>
        <Link href="https://github.com/RakeshSangem/instrumen.tel">
          <Image src={githubLogo} alt="project-logo"></Image>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
