import React from "react";
import { MdWifiCalling3 } from "react-icons/md";
import PopularCourseCard from "./PopularCourseCard";

const PopularCourses = async () => {
  const res = await fetch("https://raw.githubusercontent.com/sahidul-dev-47/skillsphere-app/refs/heads/main/public/data.json", {cache : 'no-store'});
  const data = await res.json();
  const popularCourse = data.slice(0, 3);
  console.log(popularCourse);
  return (
    <div>
      <h1 className="font-bold text-3xl text-purple-500 text-center mb-6">Popular Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto p-4">
        {
            popularCourse.map(course => <PopularCourseCard key={course.id} course ={course} showBadge={true}></PopularCourseCard>)
        }
      </div>


      </div>
        
    
  );
};

export default PopularCourses;
