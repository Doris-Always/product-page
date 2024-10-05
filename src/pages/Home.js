import HeroSection from "../reusableComponents/HeroSection";

const Home = () => {
  return (
    <>
      <section className="sm:px-4 md:px-16">
        <HeroSection />
        <section className="flex flex-col justify-center items-center w-full border border-2">
          <div className="border-black-300 h-64">
            <img src="" alt="" />
          </div>
        </section>
      </section>
    </>
  );
};
export default Home;
