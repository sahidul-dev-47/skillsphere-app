// components/LearningTips.js

export default function LearningTips() {
  const tips = [
    {
      title: "Create a Study Plan",
      desc: "Set clear goals and follow a structured learning schedule.",
    },
    {
      title: "Practice Daily",
      desc: "Consistency is key. Practice what you learn every day.",
    },
    {
      title: "Take Notes",
      desc: "Write down important concepts for better understanding.",
    },
    {
      title: "Avoid Distractions",
      desc: "Focus fully while learning for better results.",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center text-purple-500">
          Learning Tips 📌
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}