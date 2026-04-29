import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  alttext: string;
  label: string;
};

const Cards: React.FC<Props> = ({ image, alttext, label }) => {
  return (
    <div className="skill-card group">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f7f4ee] transition group-hover:bg-white">
        <Image src={image} alt={alttext} width={42} height={42} />
      </div>
      <p className="whitespace-nowrap text-base font-black text-[#161513]">
        {label}
      </p>
    </div>
  );
};

export default Cards;
