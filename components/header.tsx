import Image from "next/image";

const Header = (): JSX.Element => {
  return (
    <header className="flex flex-row">
      <Image src="/pokeball.png" alt="Pokeball Image" height={35} width={50} />

      <Image
        src="/pokemon-explorer-logo.png"
        alt="Pokemon Explorer Logo"
        height={50}
        width={250}
      />
    </header>
  );
};

export default Header;
