import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import LearningJourney from "@/components/LearningJourney";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import TopInstructors from "@/components/TopInstructors";
import { div } from "framer-motion/client";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses></PopularCourses>
      <LearningJourney></LearningJourney>
      <TopInstructors></TopInstructors>
      <LearningTips></LearningTips>
      <Footer></Footer>
    </div>
  )
  
}
