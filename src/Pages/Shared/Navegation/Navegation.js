import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../images/modernLogo.png";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Navegation = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  console.log(user);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ color: "#A25B0F" }}
          className="fw-bold"
        >
          <img
            alt=""
            src={Logo}
            style={{ borderRadius: "50%" }}
            width="50"
            height="50"
            className="d-inline-block align-center ms-auto mx-2"
          />
          Modern Furniture
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 fw-bold"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="text-decoration-none fw-bold">
              {" "}
              <Nav.Link href="#action1">Home</Nav.Link>
            </Link>
            <Link to="furniture" className="text-decoration-none fw-bold">
              <Nav.Link href="#action1">Furniture</Nav.Link>
            </Link>
            <Link to="about" className="text-decoration-none fw-bold">
              {" "}
              <Nav.Link href="#action1">About</Nav.Link>
            </Link>
            <Nav.Link href="#action1">Blog</Nav.Link>
            {user?.email ? (
              <div className=" d-flex">
                <li class="nav-item">
                  <Link to="/addFurniture" className="text-decoration-none fw-bold">
                    <a
                      href="n"
                      className="nav-link"
                    >
                      Add Item
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/manageInventories"
                    className="text-decoration-none fw-bold"
                  >
                    <a
                      href="n"
                      className="nav-link"
                    >
                      Manage Inventories
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/myItem" className="text-decoration-none fw-bold">
                    <a
                      href="n"
                      className="nav-link"
                    >
                      My Item
                    </a>
                  </Link>
                </li>

                <div className="my-auto">
                  <span style={{ color: "Black" }}>{user.displayName}</span>
                </div>

                <button
                  style={{ background: "#A25B0F" }}
                  className="btn mx-2 fw-bold text-white"
                  onClick={handleSignOut}
                >
                  LogOut
                </button>
              </div>
            ) : (
              <div className="d-flex">
                <li class="nav-item">
                  <Link to="/login" className="text-decoration-none fw-bold">
                    <a
                      href="n"
                      style={{ color: "#A25B0F" }}
                      className="nav-link "
                    >
                      Login
                    </a>
                  </Link>
                </li>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegation;
