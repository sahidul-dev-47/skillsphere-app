"use client";

import { useState, useMemo } from "react";
import PopularCourseCard from "@/components/PopularCourseCard";

export default function AllCoursesClient({ courses }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(courses.map((c) => c.category))];
  }, [courses]);

  const filteredCourses = courses.filter((course) => {
    const matchSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || course.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="w-full">
      {/* Search and Dropdown */}
      <div className="max-w-2xl mx-auto mb-16 px-4">
        <div className="flex items-center bg-white border-2 border-purple-200 rounded-2xl overflow-hidden focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-100 transition-all shadow-sm h-14">
          
          {/* Search Input Part */}
          <div className="flex-grow flex items-center px-4 gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full bg-transparent outline-none text-gray-700 text-sm h-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Divider Line */}
          <div className="h-8 w-[1px] bg-gray-200"></div>

          {/* Dropdown Part */}
          <div className="relative min-w-[140px] h-full">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-full pl-4 pr-10 bg-gray-50 outline-none text-[11px] font-bold uppercase tracking-wider text-purple-600 cursor-pointer appearance-none border-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="text-black bg-white">
                  {cat}
                </option>
              ))}
            </select>
            {/* Custom Arrow for Dropdown */}
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <PopularCourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-4xl mb-4 text-gray-300">🔍</p>
            <h2 className="text-xl font-medium text-gray-400">No courses found matching {search}</h2>
            <button 
              onClick={() => {setSearch(""); setCategory("All");}} 
              className="mt-4 text-purple-600 font-semibold underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}