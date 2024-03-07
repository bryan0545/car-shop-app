import { SearchButtonProps } from "@/types";
import Image from "next/image";

const SearchButton = ({ otherClasses }: SearchButtonProps) => {
  return (
    <button className={`-ml-3 z-10 ${otherClasses}`} type="submit">
      <Image
        src="magnifying-glass.svg"
        alt="magnifying glas"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

export default SearchButton;
