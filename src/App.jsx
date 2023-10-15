//style
import { useState } from "react";
import "./App.css";

//components
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import { data } from "./mock";
import UserList from "./userList/UserList";
import NewUserForm from "./newUser/NewUserForm";

const App = () => {
  const [users, setUsers] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    }
    );
    setShowModal(false)
  };
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h4>No Users</h4>}
        </div>
        <UserList data={users} setUsers={setUsers} users={users} />
      </main>
      {showModal && <NewUserForm addUser={addUser} />}
      <button className="create-user" onClick={() => setShowModal(true)}>
        Create User
      </button>
      <Footer />
    </div>
  );
};

export default App;
