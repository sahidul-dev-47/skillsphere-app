import Image from "next/image";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const CourseDetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  const { id } = await params;
  const res = await fetch("https://raw.githubusercontent.com/sahidul-dev-47/skillsphere-app/refs/heads/main/public/data.json");
  const courses = await res.json();

  const course = courses.find((p) => p.id == id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <p className="font-bold text-2xl text-gray-800">Course Not Found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <Image
          src={course?.image || "/placeholder.jpg"}
          width={800}
          height={450}
          alt={course?.title || "Course Image"}
          className="w-full h-[300px] object-cover"
          priority
        />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            {course?.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-600 mb-6 text-sm font-medium">
            <span className="flex items-center gap-1">👨‍🏫 {course?.instructor}</span>
            <span className="flex items-center gap-1">⭐ {course?.rating}</span>
            <span className="flex items-center gap-1">⏱ {course?.duration}</span>
            <span className="flex items-center gap-1">📊 {course?.level}</span>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            {course?.description}
          </p>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h2 className="font-bold mb-4 text-lg text-gray-800">
              Course Curriculum 📚
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-600 font-medium">
              <li>Introduction</li>
              <li>Basics</li>
              <li>Intermediate Concepts</li>
              <li>Advanced Topics</li>
              <li>Final Project</li>
            </ul>
          </div>

          <button className="bg-black hover:bg-gray-800 transition-colors rounded-xl p-4 text-white font-bold mt-8 w-full shadow-md">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;