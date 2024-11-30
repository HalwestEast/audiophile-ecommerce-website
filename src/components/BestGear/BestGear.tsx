import guyWithHeadphonesDesktop from "../../../public/assets/shared/desktop/image-best-gear.jpg";

import Image from "next/image";
export default function BestGear() {
  return (
    <section className="mb-40 mt-40 flex flex-col items-center justify-center gap-32 md:flex-row">
      <div className="order-2 md:order-1 flex flex-col items-center justify-center text-center md:items-start">
        <h3 className="mb-10 font-manrope text-5xl font-semibold md:text-left">
          BRINGING YOU THE <br /> <span className="text-[#D87D4A]">BEST</span>{" "}
          AUDIO GEAR
        </h3>
        <p className="w-[445px] text-center font-manrope md:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="size-[400px] md:order-2 md:size-fit">
        <Image
          className="rounded-md"
          alt="best gear"
          src={guyWithHeadphonesDesktop}
          width={540}
          height={588}
        />
      </div>
    </section>
  );
}
