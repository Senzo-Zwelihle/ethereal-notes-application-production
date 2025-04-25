import Image from "next/image";
import EtherealLogoDark from "@/public/brand/ethereal-logo-dark.svg"
import EtherealLogoLight from "@/public/brand/ethereal-logo-light.svg"


export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={EtherealLogoDark}
        height={40}
        width={46}
        quality={95}
        alt="Ethereal notes logo black"
        className="dark:hidden rounded-sm"
      />
      <Image
        src={EtherealLogoLight}
        height={40}
        width={46}
        quality={95}
        alt="Ethereal notes logo light"
        className="hidden dark:block rounded-sm"
      />
    </div>
  );
};
