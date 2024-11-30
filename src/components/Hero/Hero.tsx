import Button from "../Button/Button";

export default function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center bg-hero-bg-sm bg-cover bg-center bg-no-repeat md:items-start md:bg-hero-bg-lg md:pl-52">
      <div className="absolute inset-0 bg-black opacity-40 md:opacity-20"></div>

      <div className="relative flex flex-col items-center gap-5 font-manrope text-white md:items-start">
        <p className="text-lg font-extralight tracking-widest text-stone-400">
          NEW PRODUCT
        </p>
        <h3 className="text-6xl font-bold">
          XX99 Mark II <br /> Headphones
        </h3>
        <p className="text-md mb-4 font-normal text-stone-300">
          Experience natural, lifelike audio and exceptional <br />
          build quality made for the passionate music enthusiast.
        </p>
        <Button variant="primary">SEE PRODUCTS</Button>
      </div>
    </section>
  );
}
