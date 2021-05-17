import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header py-8 px-0">
      <div className="container">
        <div className="row justify-between items-center">
          <div className="column">
            <div className="row items-center">
              <div className="column">
                <a>
                  <img
                    src="images/logo.svg"
                    alt=""
                    aria-label="logo"
                    title="logo"
                  />
                </a>
              </div>
              <div className="column">
                <nav className="lg:ml-[121px]">
                  <ul className="nav-list">
                    <li className="nav-item">
                      <Link href="#">
                        <a className="nav-link">About</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a className="nav-link">Help</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a className="nav-link">Features</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a className="nav-link">Signup</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="column">
            <Link href="#">
              <a className="button flex items-center space-x-4 bg-[#ffffff] shadow-md">
                <span className="text-secondary ">Request Demo</span>
                <i>
                  <img src="images/right-arrow.svg" alt="logo" />
                </i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
