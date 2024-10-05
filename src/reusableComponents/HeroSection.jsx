import Button from "./Button";

const HeroSection = () => {
  return (
    <>
      <header className="flex flex-col justify-center items-center mt-8">
        <h1 className="text-2xl text-center font-semibold">Better products for the planet</h1>
        <p className="text-center mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
          lacus vitae augue efficitur aliquam.
        </p>
        <div className="mt-4">
        <Button
          size="large" 
          bgColor="bg-white" 
          text="Shop" 
          color="text-black" 
        /> 
        </div>
       
      </header>
    </>
  );
};
export default HeroSection;
