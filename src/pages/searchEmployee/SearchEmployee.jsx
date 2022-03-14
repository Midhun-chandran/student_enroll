import "./searchEmployee.css";

import { useEffect, useState } from "react";

import axios from "axios";
import EmployeeTable from "../../components/employeeTable/EmployeeTable";

export default function SearchEmployee() {
  const [employees, setEmployees] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await axios.get(
        "https://ictak-project.herokuapp.com/api/employee"
      );
      setEmployees(res.data);
    };
    fetchEmployees();
  }, []);

  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.role.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
  };
  return (
    <div className="searchmain">
      <div className="search-box">
      <input
        type="text"
        placeholder="Search employees name here...."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
      <span></span>
      <EmployeeTable data={search(employees)} />
    </div>
  );
}
