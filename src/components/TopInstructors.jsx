// components/TopInstructors.js

import Image from "next/image";

export default function TopInstructors() {
  const instructors = [
    {
      name: "Michael Anderson",
      title: "Full Stack Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      rating: 4.9,
      students: "14K",
    },
    {
      name: "Daniel Carter",
      title: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
      rating: 4.8,
      students: "10K",
    },
    {
      name: "James Wilson",
      title: "React Specialist",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop",
      rating: 4.9,
      students: "12K",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12 text-purple-500">
          Top Instructors 🏆
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {instructors.map((inst, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              {/* Image */}
              <Image
                src={inst.image}
                width={400}
                height={400}
                alt={inst.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />

              {/* Name */}
              <h3 className="text-xl font-bold">{inst.name}</h3>

              {/* Title */}
              <p className="text-gray-500">{inst.title}</p>

              {/* Stats */}
              <div className="flex justify-center gap-4 mt-3 text-sm text-gray-600">
                <span>⭐ {inst.rating}</span>
                <span>👨‍🎓 {inst.students}</span>
              </div>

              {/* Button */}
              <button className="border bg-black p-2 rounded-xl font-medium w-30 text-white mt-5 text-center hover:bg-gray-600">
                View Profile
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}