function App() {
  return (
    <div className="App Container">
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
        </form>
      </div>
    </div>
  );
}

export default App;
