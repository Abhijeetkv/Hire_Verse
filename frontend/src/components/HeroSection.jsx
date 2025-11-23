import Navbar from "./navbar";
import interview from "../assets/interview.png";

const HeroSection = () => {
  return (
    <>
      <Navbar />
   <main className="overflow-x-hidden">
        {/* HERO SECTION */}
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              {/* TEXT */}
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-5xl font-medium md:text-6xl xl:text-7xl">
                  Ship 10x Faster with NS
                </h1>

                <p className="mt-8 max-w-2xl text-lg text-gray-600">
                  Highly customizable components for building modern websites
                  and applications that look and feel the way you mean it.
                </p>

                {/* IMAGE */}
              <img
                className="right-0 top-0 mt-5 rounded-2xl w-full lg:mt-0 lg:absolute lg:w-1/2"
                src={interview}
                alt="Abstract Object"
              />

              </div>

              
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HeroSection;