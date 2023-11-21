import Image from "next/image";
function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-matasEarth-500 p-6 h-40">
      <a href="#" aria-label="Hjem">
        <Image src="/logo.svg" alt="Matas logo" width={90} height={20}></Image>
      </a>
    </nav>
  );
}

export default NavBar;
