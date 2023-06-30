import EmployeeListItem from "./EmployeeListItem";

export default function EmployeesList({ list, className }) {
  if (className === "directory") {
    return (
      <div>
        {list.map((emp, index) => (
          <EmployeeListItem
            key={index}
            image={emp.image}
            name={emp.name}
            title={emp.title}
          />
        ))}
      </div>
    );
  } else if (className === "employeeData") {
    let image = list[0].image;
    let name = list[0].name;
    let title = list[0].title;
    let officeNumber = list[0].office;
    let mobileNumber = list[0].mobile;
    let email = list[0].email;
    return (
      <>
        <div className="eListTop">
          <img className="proPicBig" src={image} alt="image" />
          <div>
            <h3 className="topName">{name}</h3>
            <p className="topTitle">{title}</p>
          </div>
        </div>
        <div className="eListItem">
          <h3>Call Office</h3>
          <p className="eData">{officeNumber}</p>
        </div>
        <div className="eListItem">
          <h3>Call Mobile</h3>
          <p className="eData">{mobileNumber}</p>
        </div>
        <div className="eListItem">
          <h3>SMS</h3>
          <p className="eData">{mobileNumber}</p>
        </div>
        <div className="eListItem">
          <h3>Email</h3>
          <p className="eData">{email}</p>
        </div>
      </>
    );
  }
}
