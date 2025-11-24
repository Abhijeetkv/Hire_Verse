import interview from "../assets/interview.mp4";

const HeroSection = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center mx-auto px-4 text-center mt-14 lg:mt-24">
        <p className="text-neutral-500 mb-5 border px-2 py-1 rounded-full">Welcome To HireVerse</p>
        <p className="max-w-6xl text-3xl lg:text-5xl mb-4 text-black">
          Build your dream team with HireVerse
        </p>
        <p className="max-w-3xl text-md mb-4 text-gray-700 lg:text-xl md:mt-5">
          Meet candidates face-to-face online, assess skills faster, and
          streamline your hiring workflow with a smart, collaborative interview
          environment.
        </p>

        <video
          width={950}
          height={950}
          className="rounded-xl mt-10 lg:max-w-6xl"
          src={interview}
          loop
          muted
          autoPlay
        />
      </div>
    </>
  );
};

export default HeroSection;
