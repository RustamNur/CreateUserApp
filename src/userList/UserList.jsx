/* eslint-disable react/prop-types */

import "./UserList.css"

// eslint-disable-next-line react/prop-types
const UserList = ({ users,setUsers }) => {
    const handleDelete = (id) => {
       
        let res = users.filter(value => value.id !== id)
        setUsers(res)
    }
  return (
    <div className="userList">
      <div className="userList-container container">
        
        {users.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card-inner">
                <img
                  src={item.imageURL}
                  alt={item.name}
                  width={150}
                  height={150}
                      />
                      <h3>
                          {item.firstName} {item.lastName},    
                          {item.age} years old
                      </h3>
                      <p>From: {item.country}</p>
                      <p>Job: {item.job}</p>
                      <p>Gender: {item.gender}</p>
                      <button type="button" onClick={()=>handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
