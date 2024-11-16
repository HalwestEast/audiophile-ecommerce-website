import Button from "../Button/Button";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center pl-52 h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/home/desktop/image-hero.jpg')",
        backgroundPosition: "top center",
      }}
    >
      <div className="text-white flex flex-col gap-5 font-manrope ">
        <p className="text-lg tracking-widest font-extralight text-stone-400">
          NEW PRODUCT
        </p>
        <h3 className="text-6xl font-bold ">
          XX99 Mark II <br /> Headphones
        </h3>
        <p className="text-md text-stone-300 font-normal mb-4">
          Experience natural, lifelike audio and exceptional <br />
          build quality made for the passionate music enthusiast.
        </p>
        <Button variant="primary">SEE PRODUCTS</Button>
      </div>
    </section>
  );
}
