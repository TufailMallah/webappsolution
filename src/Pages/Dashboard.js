import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
  
    axios.get("http://localhost:3000/api/contact/get-all-contacts")
      .then((response) => {
        setContacts(response.data.contacts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Fragment>
      <section>
        <div className="container mt-5">
          <div className="row mb-4">
            <div className="col-md-12 d-flex justify-content-between align-items-center">
              <h1 className="text-center">Admin Panel</h1>
              <button 
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive mt-5">
                <table className="table table-striped table-bordered">
                  <thead className="table-header bg-primary text-white">
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Subject</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.subject}</td>
                        <td>{contact.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Dashboard;
