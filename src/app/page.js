import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import LearningJourney from "@/components/LearningJourney";
import PopularCourses from "@/components/PopularCourses";
import { div } from "framer-motion/client";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses></PopularCourses>
      <LearningJourney></LearningJourney>
      <Footer></Footer>
    </div>
  )
  
}
