import React from 'react';
import Image from 'next/image';

interface PricingButtonProps {
  buttonBackgroundColor: string;
  textColor: string;
  text : string;
}

const PricingButton: React.FC<PricingButtonProps> = ({ buttonBackgroundColor, textColor, text }) => {
  return (
    <button className={`bg-${buttonBackgroundColor} ${text === "Subscribe now" ? "mt-2":"mt-7"} px-4 py-3 rounded-md text-${textColor} flex items-center justify-center gap-2 w-full ${textColor == "black" && "border-solid border-[1px] border-gray-150 shadow-md"}`}>
      <p>{text}</p>
      {buttonBackgroundColor == "buttonOrange"?<Image
        src="/images/arrow.png"
        width={20}
        height={20}
        alt="Arrow"
      />:<Image
      src="/images/black-arrow.png"
      width={20}
      height={20}
      alt="Arrow"
    />}
    </button>
  );
};

export default PricingButton;
