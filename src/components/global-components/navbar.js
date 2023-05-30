import React from "react";
import { Link } from "react-router-dom";
import useScrollingUp from "./ScrollingHooks";
import "../assets/css/navbar.css";
export const Navbar = () =>
{
  const token = localStorage.getItem("token");
  const scrolled = useScrollingUp()
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div>
      <header className="ltn__header-area ltn__header-5 desktop_menu ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
          <div className="container">
            <div className="navbar_wrapper">
              <div className="site-logo-wrap">
                <div style={{ width: "30%" }} className="site-logo go-top">
                  <Link to="/">
                    <img
                      src={publicUrl + "assets/img/BMBC-1.png"}
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="header-menu-column menu-color-white">
                <div className="header-menu go-top">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">Why BMBC</Link>
                        </li>
                        <li>
                          <Link to="/blog">Blogs</Link>
                        </li>
                        <li>
                          <Link to="/helpCenter">Help Center</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>

                        <li>
                          <Link to="#">
                            <i className="icon-user" />
                          </Link>
                          <ul className="sub-menu">
                            {token == null && (
                              <>
                                <li>
                                  <Link to="/login">Sign in</Link>
                                </li>
                                <li>
                                  <Link to="/register">Register</Link>
                                </li>
                              </>
                            )}

                            {token !== null && (
                              <>
                                <li>
                                  <Link to="/my-account/profile">Profile</Link>
                                </li>
                                <li>
                                  <Link to="/my-account/password">Change Password</Link>
                                </li>
                              </>
                            )}

                            {/* <li><Link to="/my-account">My Account</Link></li> */}
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div
          id="ltn__utilize-mobile-menu"
          className="ltn__utilize ltn__utilize-mobile-menu"
        >
          <ul className="menu_wrap_head">
            <li>
              <Link className="mmobile_item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="mmobile_item" to="/about">
                Why BMBC
              </Link>
            </li>
            <li>
              <Link className="mmobile_item" to="/blog">
                Blog
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
