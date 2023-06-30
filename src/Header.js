import React from 'react'

function Header({className}) {
   let title = ""
if(className === 'directory'){
    title = "Employee Directory"
} else if(className === 'employeeData'){
    title = "Employee"
}
  return (
    <h1 style={{textAlign: "center"}}>{title}</h1>
  )
}
export default Header