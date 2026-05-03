"use client";
import Image from "next/image";
import bannerImage from "@/assets/hero-banner.png";

const Banner = () => {
  return (
    <div>
      <section className="bg-[#050B2B] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <button className="border border-purple-500 text-purple-300 rounded-full px-4 sm:px-5 py-2 mb-6 text-sm">
              ⭐ Upgrade Your Future
            </button>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Upgrade Your
              <span className="text-purple-500 block">Skills Today 🚀</span>
            </h1>

            <p className="text-gray-300 mt-6 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
              Explore industry-relevant courses and learn from expert
              instructors anytime, anywhere.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-left">
              <div>
                <h4 className="font-semibold">📘 Expert Instructors</h4>
                <p className="text-sm text-gray-400">
                  Learn from professionals
                </p>
              </div>

              <div>
                <h4 className="font-semibold">▶ Flexible Learning</h4>
                <p className="text-sm text-gray-400">Learn at your own pace</p>
              </div>

              <div>
                <h4 className="font-semibold">🏅 Certificates</h4>
                <p className="text-sm text-gray-400">Boost your career</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center items-center w-full max-w-[550px] mx-auto mt-10 lg:mt-0">
            {/* Glow */}
            <div className="absolute w-[250px] sm:w-[320px] md:w-[400px] lg:w-[430px] h-[250px] sm:h-[320px] md:h-[400px] lg:h-[430px] bg-purple-700 rounded-full blur-3xl opacity-40"></div>
            {/* Photo */}
            <div className="relative z-10">
              <Image
                src={bannerImage}
                alt="Hero Banner"
                width={500}
                height={500}
                className="w-[250px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto object-contain"
                priority
              />
            </div>
            {/* Floating Card 1 */}{" "}
            <div className=" hidden md:block absolute top-0 -right-20 bg-white text-black rounded-2xl p-2 shadow-lg w-52 z-20">
              {" "}
              <h4 className="font-bold text-gray-500">24/7 Access</h4>{" "}
              <p className="text-sm text-gray-600">
                Learn whenever you want
              </p>{" "}
            </div>{" "}
            {/* Floating Card 2 */}{" "}
            <div className=" hidden md:block absolute bottom-10 left-10 bg-white text-black rounded-2xl p-2 shadow-lg w-56 z-20">
              {" "}
              <h4 className="font-bold text-gray-500">Build Skills</h4>{" "}
              <p className="text-sm text-gray-600">
                {" "}
                Practical knowledge for real world{" "}
              </p>{" "}
            </div>{" "}
            {/* Floating card 3 */}{" "}
            <div className=" hidden md:block absolute bottom-[10%] -right-40 bg-white text-black rounded-2xl p-2 shadow-lg w-56 z-20">
              {" "}
              <h4 className="font-bold text-gray-500">Top Courses</h4>{" "}
              <p className="text-sm text-gray-600"> Curated by experts </p>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
