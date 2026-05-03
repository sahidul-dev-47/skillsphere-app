"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const PopularCourseCard = ({ course }) => {
  console.log(course);
  return (

    <div className="flex flex-wrap gap-8 p-12 bg-[#F8F9FA] justify-center rounded-lg">
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: course * 0.15 }}
          whileHover={{ y: -12 }}
          className="relative group w-80 bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          <div className="absolute top-4 right-4 z-10 bg-linear-to-r from-violet-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-tighter shadow-lg">
            High Rated
          </div>

          <div className="relative h-48 w-full bg-gray-100 rounded-2xl overflow-hidden mb-5">
            <Image
              src={course.image} 
              alt={course.title}
              width={300}
              height={300}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 bg-linear-to-r from-transparent via-white/40 to-transparent" />
          </div>

          <div className="space-y-3">
            <h3 className="text-gray-800 font-extrabold text-xl leading-snug group-hover:text-violet-600 transition-colors">
             {course.title}
            </h3>
            
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400 text-sm">{course.rating}</div>
             
            </div>

            <p className="text-gray-500 text-sm font-medium border-b border-gray-50 pb-4">
              Instructor: <span className="text-gray-700">{course.instructor}</span>
            </p>

            <div className="flex justify-between items-center pt-4">
              <div className="flex flex-col">
                <span className="text-gray-800 text-md font-bold"> Duration :  /{course.duration}</span>
                <span className="text-gray-800 text-md font-bold "> Level :  {course.level}</span>
                <span className="text-2xl font-black text-gray-900">{course.category}</span>
                <span className="text-sm font-black text-gray-900">{course.description}</span>

               <div className="flex w-full gap-4 ">
                 <button className="bg-gray-700 flex-1 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-violet-600 transition-all active:scale-95 shadow-md mt-3">
                Buy Now
              </button>
                 <button className="bg-gray-700 flex-1 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-violet-600 transition-all active:scale-95 shadow-md mt-3">
                Details
              </button>
               </div>
              </div>
              
            </div>
          </div>
        </motion.div>
    </div>
  )}

export default PopularCourseCard;
