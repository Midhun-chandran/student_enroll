import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.scss";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);

  // window.onscroll = () => {
  //   setIsScrolled(window.pageYOffset === 0 ? false : true);
  //   return () => (window.onscroll = null);
  // };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className={user && user.isAdmin ? "navbar1 admin " : "navbar1"}>
      <div className="container-fluid  ">
        <div className="left">
          <img
            src="https://ictkerala.org/wp-content/uploads/2019/01/cropped-ict-ico.png"
            alt=""
          />
          <span>
            <Link className="link" to="/">
              HOME
            </Link>
          </span>
          {!user && (
            <div className="dropdown">
              <span>LOGIN</span>
              <div className="options">
                <Link className="link optionsValue" to="/student-login">
                  <span>STUDENT</span>
                </Link>
                <Link className="link optionsValue" to="/employee-login">
                  <span>EMPLOYEE</span>
                </Link>
                <Link className="link optionsValue" to="/admin-login">
                  <span>ADMIN</span>
                </Link>
              </div>
            </div>
          )}
          {!user && (
            <div className="dropdown">
              <span>REGISTER</span>
              <div className="options">
                <Link className="link optionsValue" to="/student-register">
                  <span>STUDENT</span>
                </Link>
                <Link className="link optionsValue" to="/employee-register">
                  <span>EMPLOYEE</span>
                </Link>
              </div>
            </div>
          )}

          {user && user.isAdmin && (
            <span>
              <Link className="link" to="/course">
                ADD COURSES
              </Link>
            </span>
          )}
          <span>
            <Link className="link" to="/courses">
              COURSES
            </Link>
          </span>

          {user && user.isAdmin && (
            <span>
              <Link className="link" to="/employee">
                EMPLOYEES
              </Link>
            </span>
          )}
          {((user && user.isAdmin) || (user && user.isEmployee)) && (
            <span>
              <Link className="link" to="/search">
                SEARCH STUDENTS
              </Link>
            </span>
          )}
          {user && user.isAdmin && (
            <span>
              <Link className="link" to="/approve">
                APPROVE STUDENTS
              </Link>
            </span>
          )}
          {user && user.isAdmin && (
            <span>
              <Link className="link" to="/employee-approve">
                APPROVE EMPLOYEES
              </Link>
            </span>
          )}
        </div>
        {user && (
          <div className="right">
            {user && user.isStudent && (
              <span>
                <Link className="link" to={`/student/${user._id || ""}`}>
                  MY PROFILE
                </Link>
              </span>
            )}
            <span>{user.username}</span>
            <Link className="link" to="/">
              <span className="topListItem" onClick={handleLogout}>
                LOGOUT
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
