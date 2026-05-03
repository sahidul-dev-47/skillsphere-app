export default function LearningJourney() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Course",
      desc: "Explore hundreds of skill-based courses and pick your learning path.",
    },
    {
      number: "02",
      title: "Learn From Experts",
      desc: "Watch lessons and gain knowledge from industry professionals.",
    },
    {
      number: "03",
      title: "Practice Projects",
      desc: "Build real-world projects to strengthen your practical skills.",
    },
    {
      number: "04",
      title: "Earn Certificate",
      desc: "Complete your course and receive a verified certificate.",
    },
  ];

  return (
    <section className="bg-[#0B1120] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-widest mb-3">
            Learning Process
          </p>

          <h2 className="text-4xl md:text-5xl hover:bg-purple-500 font-bold">
            Your Learning Journey 🚀
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Follow a simple and structured learning path designed to help you grow faster.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#111827] rounded-3xl p-8 border border-gray-800 hover:border-purple-500 transition duration-300 hover:-translate-y-2"
            >
              {/* Number */}
              <div className="text-5xl font-bold text-purple-500 opacity-30 mb-6">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-400 leading-relaxed">
                {step.desc}
              </p>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-purple-600 opacity-0 hover:opacity-5 transition"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}