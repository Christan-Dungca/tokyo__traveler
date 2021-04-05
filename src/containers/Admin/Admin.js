import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  useRouteMatch,
  Link,
  Route,
  Switch,
  useParams,
  useLocation,
} from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";

import AuthContext from "../../context/auth-context";
import styles from "./Admin.module.scss";

const Admin = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className={styles.Admin}>
      <aside className={styles.sideNav}>
        <Logo />
        <AdminProfile />
        <nav className={styles.linkContainer}>
          <ul>
            <li>
              <BiHomeAlt className={styles.HomeLogo} />
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <BiUser className={styles.UserLogo} />
              <Link to={`${url}/users`} className={styles.link}>
                Users List
              </Link>
            </li>
            <li>
              <BiBook className={styles.ArticleLogo} />
              <Link to={`${url}/articles`} className={styles.link}>
                Articles
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main>
        <Switch>
          <Route path={path} exact children={AdminHome} />
          <Route path={`${path}/users`} exact>
            <UsersSection />
          </Route>
          <Route path={`${path}/users/:userId`}>
            <UserSection />
          </Route>
          <Route path={`${path}/articles`} exact>
            <Articles />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

const Logo = () => {
  return <div className={styles.Logo}> Tokyo Traveler </div>;
};

const AdminProfile = () => {
  return (
    <div className={styles.AdminProfile}>
      <div className={styles.adminImg}></div>
      <div className={styles.adminInfo}>
        <h4 className={styles.adminTitle}>Administrator</h4>
        <h3 className={styles.adminName}> Christian Dungca</h3>
      </div>
    </div>
  );
};

const AdminHome = () => {
  return (
    <div>
      <h1> Admin Dashboard </h1>
    </div>
  );
};

const SearchBar = ({ width, height }) => {
  return (
    <div className={styles.SearchBar}>
      <BiSearch className={styles.SearchLogo} />
      <input className={styles.searchBarInput} placeholder="Search" />
    </div>
  );
};

const FormatDate = (date) => {
  return `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`;
};

const UserTable = () => {
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  let { url } = useRouteMatch();

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const res = await axios({
          method: "get",
          url: "http://127.0.0.1:5000/api/users",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(res.data.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [token]);

  return (
    <div className={styles.UserTable}>
      <h3 className={styles.tableHeading}>Name</h3>
      <h3 className={styles.tableHeading}>Role</h3>
      <h3 className={styles.tableHeading}>Created At</h3>
      <h3 className={styles.tableHeading}>Actions</h3>
      {users.map((user) => {
        return (
          <React.Fragment key={user._id}>
            <div className={styles.userProfile}>
              <div className={styles.userImg}></div>
              <div className={styles.userInfo}>
                <h4 className={styles.userName}>{user.name}</h4>
                <p className={styles.userId}>#{user._id}</p>
              </div>
            </div>

            {user.role === "admin" ? (
              <p className={styles.adminRole}>{user.role}</p>
            ) : user.role === "author" ? (
              <p className={styles.authorRole}>{user.role}</p>
            ) : (
              <p className={styles.userRole}>{user.role}</p>
            )}

            {/* <p className={styles.userRole}>{user.role}</p> */}
            <p className={styles.userCreatedAt}>{user.createdAt}</p>
            {/* <Link to={`${url}/${user._id}`} className={styles.editBtn}>
              Edit
            </Link> */}
            <Link to={`${url}/${user._id}`} className={styles.editBtn}>
              Edit
            </Link>
          </React.Fragment>
        );
      })}
      {/* Need retreve users from API */}
    </div>
  );
};

const UsersSection = () => {
  return (
    <div className={styles.UsersSection}>
      <h1 className={styles.title}> Users List </h1>
      <SearchBar />
      <div className={styles.tableContainer}>
        <UserTable />
      </div>
    </div>
  );
};

const UserSection = () => {
  const { userId } = useParams();
  console.log(useParams());
  console.log(useLocation());

  return (
    <div className={styles.UserSection}>
      <h1> User Name - {userId} </h1>
    </div>
  );
};

const Articles = () => {
  return (
    <div>
      <h1> Articles </h1>
    </div>
  );
};

export default Admin;
