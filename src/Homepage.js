import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function Homepage({ className }) {
  let employees = [
    {
      image: "James_King.jpg",
      name: "James King",
      title: "President and CEO",
      office: "781-000-0002",
      mobile: "617-000-0002",
      email: "jking@fakemail.com"
    },
    {
      image: "Julie_Taylor.jpg",
      name: "Julie Taylor",
      title: "VP of Marketing",
    },
    {
      image: "Eugene_Lee.jpg",
      name: "Eugene Lee",
      title: "CFO",
    },
    {
      image: "John_Williams.jpg",
      name: "John Williams",
      title: "VP of Engineering",
    },
    {
      image: "Ray_Moore.jpg",
      name: "Ray Moore",
      title: "VP of Sales",
    },
    {
      image: "Paul_Jones.jpg",
      name: "Paul Jones",
      title: "QA Manager",
    },
  ];
  if (className === "directory") {
    return (
      <>
        <Header className="directory" />
        <SearchBar />
        <EmployeeList list={employees} className="directory" />
      </>
    );
  } else if (className === "employeeData") {
    return (
      <>
        <Header className="employeeData" />
        <EmployeeList list={employees} className="employeeData"/>
      </>
    );
  }
}
