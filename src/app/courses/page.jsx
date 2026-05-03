import PopularCourseCard from "@/components/PopularCourseCard";


const AllCoursesPage = async () => {
    const res = await fetch("https://skillsphere-app.vercel.app/data.json");
    const courses = await res.json();
    console.log(courses);

    return (
        <div>
            <h1 className=" text-3xl font-bold text-purple-500 text-center mt-4 mb-4">All Courses</h1>
            <div className="flex flex-col md: grid grid-cols-4 gap-4">
                {
                    courses.map(course => <PopularCourseCard key={course.id} course={course} ></PopularCourseCard>)
                }
            </div>
        </div>
    );
};

export default AllCoursesPage;