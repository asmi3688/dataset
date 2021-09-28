import './App.css';
import './Table.css';
import DataTable from './DataTable'
import { useState, useEffect } from "react";
const axios = require('axios');

function App() {
  const [userData, setUserData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const getUserData = async () => {
    // API call to get user list
    const { data: { data: userList } } = await axios("http://localhost:3001/users");
    setUserData(userList);
    setFilterData(userList)
  }
  const handleChange = (e) => {
    let { value: searchText } = e.target;
    let searchArray = searchText.trim().split(" ");
    // Create regex for search text
    let regX = new RegExp(searchArray.join("|"), "i");
    let resultsObj = userData.filter(quote =>
      regX.test(quote.name) ||
      regX.test(quote.username) ||
      regX.test(quote.email) ||
      regX.test(quote.phone) ||
      regX.test(quote.website) ||
      regX.test(JSON.stringify(quote.company)) ||
      regX.test(JSON.stringify(quote.address))
    );
    setFilterData(resultsObj)
  }
  useEffect(() => {
    getUserData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p className="AppTitle">
          List Of Users.
        </p>
      </header>
      <div>
        <DataTable userData={filterData} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
