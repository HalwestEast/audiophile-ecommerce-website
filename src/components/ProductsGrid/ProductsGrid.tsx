import Image from "next/image";
import speakerImage from "../../../public/assets/home/desktop/image-speaker-zx9.png";
import earphonesImage from "../../../public/assets/home/desktop/image-earphones-yx1.jpg";
import Circles from "../Circles/Circles";
import Button from "../Button/Button";

export default function ProductsGrid() {
  return (
    <section className="mt-40 flex flex-col items-center justify-center gap-6">
      <div className="relative mx-40 flex h-[600px] w-[327px] flex-col items-center justify-center gap-28 overflow-hidden rounded-md bg-[#D87D4A] md:h-[560px] md:w-[1110px] md:flex-row md:gap-52 md:pt-40">
        <div className="absolute left-0 top-0 opacity-20">
          <Circles />
        </div>
        <div className="z-20 size-40 md:size-fit">
          <Image alt="product" width={350} height={350} src={speakerImage} />
        </div>
        <div className="flex flex-col items-center gap-6 font-manrope text-white">
          <h3 className="text-2xl font-bold md:text-6xl">ZX9 SPEAKER</h3>
          <p className="text-md text-center font-normal text-stone-300 md:mb-10 md:text-left">
            Upgrade to premium speakers that are <br /> phenomenally built to
            deliver truly remarkable sound.
          </p>
          <Button variant="outline">SEE PRODUCT</Button>
        </div>
      </div>
      <div className="bg-fill relative flex h-[320px] w-[327px] items-center rounded-md bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-no-repeat md:h-[400px] md:w-[1110px] md:justify-start md:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] md:bg-center">
        <div className="pb-12 pl-10 md:pl-28">
          <h1 className="mb-10 text-center font-manrope text-3xl font-semibold text-black md:text-2xl">
            ZX7 SPEAKER
          </h1>
          <Button variant="outline">SEE PRODUCT</Button>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-10 md:flex-row">
        <div>
          <Image
            className="w-[327px] rounded-md md:h-[320px] md:w-[540px]"
            alt="product"
            width={350}
            height={350}
            src={earphonesImage}
          />
        </div>
        <div className="flex h-[320px] flex-col items-center justify-center rounded-md bg-[#F1F1F1] md:w-[540px]">
          <h2 className="mb-10 font-manrope text-3xl font-semibold">
            YX1 EARPHONES
          </h2>
          <Button variant="outline">SEE PRODUCT</Button>
        </div>
      </div>
    </section>
  );
}
