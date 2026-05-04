import Image from "next/image";

const CourseDetailsPage = async ({params}) => {
    const {id} = await params;
     const res = await fetch("https://skillsphere-app.vercel.app/data.json");
    const courses = await res.json();
    
    const course = courses.find(p => p.id == id)
    console.log(course);

//   if (!course)
//     return (
//       <p className="p-10 font-bold text-2xl text-center text-white">
//         Course Not Found
//       </p>
//     );

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 p-6">

      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Image */}
        <Image
          src={course.image}
          width={400}
          height={400}
          alt={course.title}
          className="w-full h-[250px] object-cover"
        />

        {/* Content */}
        <div className="p-6">

          {/* Title */}
          <h1 className="text-2xl font-bold mb-2">
            {course.title}
          </h1>

          {/* Info */}
          <div className="flex flex-wrap gap-4 text-gray-600 mb-4 text-sm">
            <span>👨‍🏫 {course.instructor}</span>
            <span>⭐ {course.rating}</span>
            <span>⏱ {course.duration}</span>
            <span>📊 {course.level}</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">
            {course.description}
          </p>

          {/* Curriculum */}
          <div className="bg-base-200 p-4 rounded-xl">
            <h2 className="font-bold mb-3">
              Course Curriculum 📚
            </h2>

            <ul className="list-disc ml-6 space-y-1 text-sm font-medium">
              <li>Introduction</li>
              <li>Basics</li>
              <li>Intermediate Concepts</li>
              <li>Advanced Topics</li>
              <li>Final Project</li>
            </ul>
          </div>

          {/* Button */}
          <button className="border bg-black rounded-xl p-4 text-white mt-6 w-full">
            Enroll Now
          </button>

        </div>
      </div>

    </div>
  );
}
export default CourseDetailsPage;
