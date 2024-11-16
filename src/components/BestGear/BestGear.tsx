import guyWithHeadphones from "../../../public/assets/shared/desktop/image-best-gear.jpg";
import Image from "next/image";
export default function BestGear() {
  return (
    <section className="flex flex-row gap-32  justify-center mt-40 mb-40">
      <div className="flex flex-col justify-center items-start">
        <h3 className="text-5xl font-manrope font-semibold mb-10">
          BRINGING YOU THE <br /> <span className="text-[#D87D4A]">BEST</span>{" "}
          AUDIO GEAR
        </h3>
        <p className="font-manrope w-[445px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div>
        <Image
          className="rounded-md"
          alt="best gear"
          src={guyWithHeadphones}
          width={540}
          height={588}
        />
      </div>
    </section>
  );
}
