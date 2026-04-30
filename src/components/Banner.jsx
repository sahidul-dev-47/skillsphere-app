"use client";
import Image from "next/image";
import bannerImage from "@/assets/hero-banner.png";

const Banner = () => {
  return (
    <div>
      <section className="bg-[#050B2B] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 items-center gap-10">
          {/* Left Side */}
          <div>
            <button className="border border-purple-500 text-purple-300 rounded-full px-5 py-2 mb-6">
              ⭐ Upgrade Your Future
            </button>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Upgrade Your
              <span className="text-purple-500 block">Skills Today 🚀</span>
            </h1>

            <p className="text-gray-300 mt-6 text-lg max-w-lg">
              Explore industry-relevant courses and learn from expert
              instructors anytime, anywhere.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
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
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute w-105 h-105 bg-purple-700 rounded-full blur-3xl opacity-40"></div>

            {/* Photo */}
            <div className="relative z-10">
              <Image
                src={bannerImage}
                alt="Hero Banner"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute top-0 -right-25 bg-white text-black rounded-2xl p-2 shadow-lg w-52 z-20">
              <h4 className="font-bold text-gray-500">24/7 Access</h4>
              <p className="text-sm text-gray-600">Learn whenever you want</p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-10 left-15 bg-white text-black rounded-2xl p-2 shadow-lg w-56 z-20">
              <h4 className="font-bold text-gray-500">Build Skills</h4>
              <p className="text-sm text-gray-600">
                Practical knowledge for real world
              </p>
            </div>

            {/* Floating card 3 */}
            <div className="absolute bottom-[10%] -right-40 bg-white text-black rounded-2xl p-2 shadow-lg w-56 z-20">
              <h4 className="font-bold text-gray-500">Top Courses</h4>
              <p className="text-sm text-gray-600">
                Curated by experts
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
