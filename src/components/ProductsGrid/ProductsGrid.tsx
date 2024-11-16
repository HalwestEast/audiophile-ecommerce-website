import Image from "next/image";
import speakerImage from "../../../public/assets/home/desktop/image-speaker-zx9.png";
import earphonesImage from "../../../public/assets/home/desktop/image-earphones-yx1.jpg";
import Circles from "../Circles/Circles";
import Button from "../Button/Button";

export default function ProductsGrid() {
  return (
    <section className="flex flex-col gap-6 justify-center items-center mt-40">
      <div className="overflow-hidden relative flex flex-row gap-52 justify-center w-[1110px] items-center pt-40  bg-[#D87D4A] h-[560px] rounded-md mx-40 ">
        <div className="absolute top-0 left-0 opacity-20">
          {" "}
          <Circles />
        </div>
        <div className="z-50">
          <Image
            className="z-50"
            alt="product"
            width={350}
            height={350}
            src={speakerImage}
          />
        </div>
        <div className="text-white flex flex-col gap-6 font-manrope ">
          <h3 className="text-6xl font-bold ">ZX9 SPEAKER</h3>
          <p className="text-md text-stone-300 font-normal mb-10">
            Upgrade to premium speakers that are <br /> phenomenally built to
            deliver truly remarkable sound.
          </p>
          <Button variant="outline">SEE PRODUCTS</Button>
        </div>
      </div>
      <div
        className="relative flex items-center justify-start  w-[1110px] h-[400px] bg-fill bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        }}
      >
        <div className="pl-28 pb-12 ">
          <h1 className="text-black text-3xl mb-10 md:text-2xl font-semibold font-manrope   text-center">
            ZX7 SPEAKER
          </h1>
          <Button variant="outline">SEE PRODUCT</Button>
        </div>
      </div>
      <div className="flex flex-row gap-10 justify-center">
        <div>
          <Image
            className="w-[540px] h-[320px] rounded-md"
            alt="product"
            width={350}
            height={350}
            src={earphonesImage}
          />
        </div>
        <div className="w-[540px] flex flex-col justify-center items-center h-[320px] rounded-md bg-[#F1F1F1]">
          <h2 className="font-manrope text-3xl font-semibold mb-10">
            YX1 EARPHONES
          </h2>
          <Button variant="outline">SEE PRODUCT</Button>
        </div>
      </div>
    </section>
  );
}
