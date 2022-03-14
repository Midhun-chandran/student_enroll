import "./course.css";
import { Link } from "react-router-dom";

function Course({ course }) {
  const PF = "https://ictak-project.herokuapp.com/images/";
  return (
    <div className="course">
      <Link className="link" to={`/course/${course._id}`}>
        <div className="courseInfo">
          <img className="courseImg" src={PF + course.photo} alt="" />
          <span className="courseTitle">{course.name}</span>
        </div>
      </Link>
     
    </div>
  );
}

export default Course;
