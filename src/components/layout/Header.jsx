import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Header = ({ setSidebarToggle }) => {

  const url = "#"

  const handleSidebarToggle = () => {
    setSidebarToggle();
  };
  const { logout } = useAuth();
  const handleLogout = () => {
    return logout();
  };

  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-custom">
        <Link className="navbar-brand" to="/">
          {process.env.REACT_APP_NAME}
        </Link>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 toggleButton"
          id="toggleButton"
          onClick={handleSidebarToggle}
        >
          <i className="fas fa-bars" />
        </button>
        {/* <a href="/" className="frnt-link">
          <i className="fas fa-external-link-alt" />
          Home
        </a> */}
        <ul className="navbar-nav ml-auto mr-md-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href={url}
            >
              <i className="fas fa-user fa-fw" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="userDropdown"
            >
              <Link
                className="dropdown-item admin-dropdown-item"
                to="/edit-profile"
              >
                Edit Profile
              </Link>
              <Link
                className="dropdown-item admin-dropdown-item"
                to="/change-password"
              >
                Change Password
              </Link>
              <a
                className="dropdown-item admin-dropdown-item"
                onClick={handleLogout}
                href={url}
              >
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
