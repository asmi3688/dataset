
function DataTable({ userData, handleChange }) {
    return (
        <div className="dataTable">
            <div>
                <p>Enter Search Text:</p>
                <input onChange={handleChange} className="searchBox" />
            </div>
            <table>
                <tr className="centerTxt">
                    <th>ID</th>
                    <th colspan="3">Company</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Username</th>
                    <th>Website</th>
                    <th>Address</th>
                </tr>
                <tr className="centerTxt">
                    <th></th>
                    <th >BS</th>
                    <th>Name</th>
                    <th>Catch Phrase</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>

                </tr>
                {userData && userData.length > 0 ?
                    userData.map((element, index) => {
                        const { address, company, address: { geo: geoObj } } = element
                        return (
                            <tr className="lftTxt" key={element.email}>
                                <td>{element.id}</td>
                                <td>{company.bs}</td>
                                <td>{company.name}</td>
                                <td>{company.catchPhrase}</td>
                                <td>{element.email}</td>
                                <td>{element.name}</td>
                                <td>{element.phone}</td>
                                <td>{element.username}</td>
                                <td>{element.website}</td>
                                <td>{address.street} {address.suite} {address.city} {address.zipcode} {geoObj.lat} {geoObj.lng}</td>
                            </tr>
                        )

                    })
                    :
                    <tr><td colSpan="10" className="centerTxt">No record found</td></tr>
                }
            </table>
        </div>
    );
}

export default DataTable;