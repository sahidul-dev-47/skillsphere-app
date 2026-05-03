"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const PopularCourseCard = ({ course , showBadge }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.5 }}
      // w-full max-w-[420px] card-ke mota korbe kintu responsive rakhbe
      className="relative group w-full max-w-100 sm:max-w-125  bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm hover:shadow-2xl transition-all duration-300"
    >
      {showBadge &&(
         <div className="absolute top-5 right-5 z-10 bg-linear-to-r from-violet-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
        High Rated
      </div>
      )};
     

      {/* Image height komano hoyeche height komanor jonno */}
      <div className="relative h-50 w-full bg-gray-50 rounded-2xl overflow-hidden mb-4">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-gray-800 font-bold text-xl leading-tight line-clamp-1">
            {course.title}
          </h3>
          <p className="text-gray-400 text-xs mt-1 font-medium">
            Instructor: <span className="text-gray-600">{course.instructor}</span>
          </p>
        </div>

        {/* Info Grid: Egulo pasapasi thakbe jate height na bare */}
        <div className="flex justify-between py-3 border-y border-gray-50">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Duration</span>
            <span className="text-gray-800 text-xs font-extrabold">{course.duration}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Level</span>
            <span className="text-gray-800 text-xs font-extrabold">{course.level}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Category</span>
            <span className="text-violet-600 text-xs font-black uppercase">{course.category}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 line-clamp-1 italic">
          {course.description}
        </p>

        {/* Mota Buttons */}
        <div className="flex gap-3">
          <button className="flex-[1.5] bg-gray-900 text-white py-3.5 rounded-2xl text-sm font-bold hover:bg-violet-600 transition-all shadow-lg active:scale-95">
            Buy Now
          </button>
          <button className="flex-1 bg-gray-50 text-gray-700 py-3.5 rounded-2xl text-sm font-bold hover:bg-gray-100 transition-all border border-gray-100">
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularCourseCard;