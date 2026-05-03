import { Card } from "@heroui/react";
import Image from "next/image";

const PopularCourseCard = ({course}) => {
    console.log(course);
  return (
    <div>
      <Card>
        <Image  
        src={course.image}
        width={300}
        height={300}
        alt="image"
        >

        </Image>
      </Card>
    </div>
  );
};

export default PopularCourseCard;
