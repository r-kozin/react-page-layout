// import Nav from "./Nav";
import Header from "./Header";
import Homepage from "./Homepage";


function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'row',
      margin: "10%",
      border: '1px solid',
      padding: '1%'
      }}>
      <div className="left" style={{flexDirection: "column", width: "50%"}}>
          <Homepage className="directory" />
      </div>
      <div className="right" style={{flexDirection: "column", width: "50%"}}>
          <Homepage className="employeeData" />
      </div>
    </div>
  );
}

export default App;