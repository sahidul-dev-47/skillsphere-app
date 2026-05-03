import React from "react";
import { MdWifiCalling3 } from "react-icons/md";
import PopularCourseCard from "./PopularCourseCard";

const PopularCourses = async () => {
  const res = await fetch("https://raw.githubusercontent.com/sahidul-dev-47/skillsphere-app/refs/heads/main/public/data.json");
  const data = await res.json();
  const popularCourse = data.slice(0, 3);
  console.log(popularCourse);
  return (
    <div>
      <h1 className="font-bold text-3xl text-purple-500 text-center mb-6">Popular Courses</h1>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        {
            popularCourse.map(course => <PopularCourseCard key={course.id} course ={course}></PopularCourseCard>)
        }
      </div>


      </div>
        
    
  );
};

export default PopularCourses;
