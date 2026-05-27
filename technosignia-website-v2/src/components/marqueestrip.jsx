import { useThemeTokens } from "../hooks/usetheme";
import { MARQUEE_ITEMS } from "../constants/data";
import { useState ,useEffect} from "react";

export default function MarqueeStrip() {
  const th = useThemeTokens();
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  const [courses,setCourses]=useState([]);
  useEffect(() => {
    fetchCourses();
  }, []);
   const fetchCourses = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/latest-courses"
      );

      const data = await res.json();

      setCourses(data);
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div
      className="marquee-strip"
      style={{
        background: th.stripBg,
        borderBottom: `1px solid ${th.border}`,
      }}
    >
      <div className="marquee-track">
{courses.map((course,i)=>(
    <span key={i}     className="marquee-item"
            style={{ color: th.white }}>{course.title}</span>
))}






        {/* {doubled.map((text, i) => (
          <span
            key={i}
            className="marquee-item"
            style={{ color: th.white }}
          >
            {text}
          </span> */}
        {/* ))} */}
      </div>
    </div>
  );
}
