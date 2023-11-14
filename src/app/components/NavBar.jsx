import Image from "next/image"
function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <a href="#" aria-label="Hjem">
        <Image src="/logo.svg" alt="Matas logo" width={90} height={20}></Image>
      </a>
    </nav>
  );
}

export default NavBar
