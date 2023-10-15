/* eslint-disable react/prop-types */
import { useState } from "react";
import "./NewUserForm.css";
import { v4 as uuidv4 } from "uuid";

const NewUserForm = ({ addUser }) => {
  const [user, setUser] = useState({
    id: uuidv4(),
    imageURL: "",
    firstName: "",
    lastName: "",
    age: null,
    country: "",
    job: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
      addUser(user);
      
  };
  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Image URL:</span>
              <input
                type="url"
                required
                placeholder="Your URL"
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, imageURL: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>First Name:</span>
              <input
                type="text"
                placeholder="Name"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, firstName: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Last Name:</span>
              <input
                type="text"
                placeholder="Last Name"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, lastName: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Age:</span>
              <input
                type="text"
                placeholder="Age"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, age: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Country:</span>
              <input
                type="text"
                placeholder="Where are you from?"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, country: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Job:</span>
              <input
                type="text"
                placeholder="Job"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, job: e.target.value };
                  });
                }}
              />
            </label>
            <div className="gender">
              <span>Gender:</span>
              <label>
                <small>Male</small>
                <input
                  type="radio"
                  required
                  name="gender"
                  value="male"
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                />
              </label>
              <label>
                <small>Female</small>
                <input
                  type="radio"
                  required
                  name="gender"
                  value="female"
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                />
              </label>
            </div>
            <button className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUserForm;
