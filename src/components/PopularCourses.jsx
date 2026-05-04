
import PopularCourseCard from "./PopularCourseCard";

const PopularCourses = async () => {
  const res = await fetch("https://raw.githubusercontent.com/sahidul-dev-47/skillsphere-app/refs/heads/main/public/data.json", { cache: 'no-store' });
  const data = await res.json();
  const popularCourse = data.slice(0, 3);

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-bold text-3xl text-purple-600 text-center mb-10">
          Popular Courses
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {popularCourse.map((course) => (
            <div key={course.id} className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-w-[300px] max-w-[400px]">
              <PopularCourseCard course={course} showBadge={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;