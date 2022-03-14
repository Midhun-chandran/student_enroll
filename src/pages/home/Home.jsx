import React from "react";
import Courses from "../../components/courses/Courses";
import FrontSection from "../../components/frontSection/FrontSection";
import MiddleSection from "../../components/middleSection/MiddleSection";
import LastSection from "../../components/lastSection/LastSection.jsx";

import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get(
        "https://ictak-project.herokuapp.com/api/course/"
      );
      setCourses(res.data);
    };
    fetchCourses();
  });
  return (
    <>
      <FrontSection />
      <MiddleSection />
      <LastSection />
    </>
  );
};

export default Home;
