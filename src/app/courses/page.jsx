import AllCoursesClient from "@/components/AllCoursesClient";

const AllCoursesPage = async () => {
  const res = await fetch("https://skillsphere-app.vercel.app/data.json");
  const courses = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent inline-block">
          All Courses
        </h1>
        <p className="text-gray-500 mt-2 text-lg">Browse our extensive library of professional courses</p>
      </div>
      
      <AllCoursesClient courses={courses} />
    </div>
  );
};

export default AllCoursesPage;