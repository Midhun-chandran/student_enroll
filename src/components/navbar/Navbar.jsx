import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.css";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);

 const [isMobile,setIsMobile]=useState(false);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="navbar">
         <ul className={isMobile ? "nav-links-mobile" :"nav-links"}  
         onClick={()=>setIsMobile(false)}>
          
        
          <Link to='/' className="img-li">
            <li>
              <img
               src="https://ictkerala.org/wp-content/uploads/2019/01/cropped-ict-ico.png"
               alt=""
              />
            </li>
          </Link>
           
               <li  className="studroll">
                    ICTAK STUDROLL
               </li>
           
            <Link className="homee" to="/">
               <li>
                     HOME
               </li>
            </Link>
         
          {!user && (
              <div className="dropdown1">
                    <li>LOGIN</li>
               <div className="options1">
                <Link className="link optionsvalue" to="/student-login">
                     <li>STUDENT </li>
                </Link>
                <Link className="link optionsvalue" to="/employee-login">
                     <li>EMPLOYEE </li>
                </Link>
                <Link className="link optionsvalue" to="/admin-login">
                     <li>ADMIN </li>
                </Link>
             </div>
         </div>
          )}
          {!user && (
            <div className="dropdown2">
                    <li>REGISTER</li>
              <div className="options2">
                <Link className="link optionsValue" to="/student-register">
                     <li>STUDENT</li>
                </Link>
                <Link className="link optionsValue" to="/employee-register">
                     <li>EMPLOYEE</li>
                </Link>
              </div>
            </div>
          )}

          {user && user.isAdmin && (
            
              <Link className="add-course" to="/course">
                <li>
                     ADD COURSES
                </li>
              </Link>
  
          )}
         
            <Link className="coursee" to="/courses">
                <li>
                    COURSES
                 </li>
            </Link>
        

          {user && user.isAdmin && (
             <li>
              <Link className="employee" to="/employee">
                  EMPLOYEES
              </Link>
             </li>
          )}
          {((user && user.isAdmin) || (user && user.isEmployee)) && (
            
              <Link className="search-stud" to="/search">
                <li>
                     SEARCH STUDENTS
                </li>
              </Link>
        
          )}
          {user && user.isAdmin && (
           
              <Link className="approv-stud" to="/approve">
                  <li>
                        APPROVE STUDENTS
                  </li>
              </Link>
        
          )}
          {user && user.isAdmin && (
            
              <Link className="approv-empl" to="/employee-approve">
                 <li>
                     APPROVE EMPLOYEES
                </li>
              </Link>
            
          )}
        
        {user && (
      <>
            {user && user.isStudent && (
              
                <Link className="my-prof" to={`/student/${user._id || ""}`}>
                   <li >
                        MY  PROFILE
                  </li>
                </Link>
             
            )}
             <li className="usernme">{user.username} </li>
            <Link className="logot" to="/">
              <li  onClick={handleLogout}>
                   LOGOUT
              </li>
            </Link>
         </>
        )}
    </ul>
     <button className="mobile-menu-icon"  onClick={()=>setIsMobile(!isMobile)}>
      {isMobile?<i className="fas fa-times"></i>:<i class="fa-solid fa-bars"></i>}
    </button>
   </nav>
  );
}
