import Image from "next/image";
import speakerImage from "../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import headphoneImage from "../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphoneImage from "../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import Button from "../Button/Button";
export default function ProductCard() {
  return (
    <section className="mt-40 flex flex-row gap-7 justify-center">
      <div className="w-[350px] relative h-[204px] flex rounded-md bg-[#F1F1F1] mt-10">
        <div className="absolute left-[70px] top-[-80px]">
          <Image
            width={221.49}
            height={246}
            src={speakerImage}
            alt="FLoating image"
          />
        </div>

        <div className="absolute bottom-[10px] left-[100px]">
          {" "}
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="font-manrope font-bold">SPEAKERS</p>
            <Button variant="link">Shop</Button>
          </div>
        </div>
      </div>
      <div className="w-[350px] relative h-[204px]  flex rounded-md bg-[#F1F1F1] mt-10">
        <div className="absolute left-[70px] top-[-80px]">
          <Image
            width={221.49}
            height={246}
            src={headphoneImage}
            alt="FLoating image"
          />
        </div>

        <div className="absolute bottom-[10px] left-[100px]">
          {" "}
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="font-manrope font-bold">HEADPHONES</p>
            <Button variant="link">Shop</Button>
          </div>
        </div>
      </div>
      <div className="w-[350px] relative h-[204px] flex rounded-md bg-[#F1F1F1] mt-10">
        <div className="absolute left-[70px] top-[-70px]">
          <Image
            width={221.49}
            height={246}
            src={earphoneImage}
            alt="FLoating image"
          />
        </div>

        <div className="absolute bottom-[10px] left-[100px]">
          {" "}
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="font-manrope font-bold">EARPHONES</p>
            <Button variant="link">Shop</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
