import Axios from "axios";
import { useState } from "react";

function App() {
  const [employeesList, setEmployeesList] = useState([]);

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeesList(response.data);
    });
  };

  return (
    <div className="App Container m-5">
      <h1>Employee Information</h1>
      <div className="Information">
        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter age"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter country"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="position" className="form-label">
              Position:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter position"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="wage" className="form-label">
              Wage:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter wage"
            />
          </div>

          <button className="btn btn-success">Add Employee</button>
        </form>
      </div>
      <hr />

      <div className="employees">
        <button className="btn btn-primary" onClick={getEmployees}>
          Show employee
        </button>
        {employeesList.map((val, key) => {
          return (
            <div className="employee card mt-2">
              <div className="card-body text-left">
                <p className="card-text">Name: {val.name}</p>
                <p className="card-text">Age: {val.age}</p>
                <p className="card-text">Country: {val.country}</p>
                <p className="card-text">Position: {val.position}</p>
                <p className="card-text">Wage: {val.wage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
