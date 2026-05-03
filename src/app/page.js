import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import PopularCourses from "@/components/PopularCourses";
import { div } from "framer-motion/client";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses></PopularCourses>
      <Footer></Footer>
    </div>
  )
  
}
