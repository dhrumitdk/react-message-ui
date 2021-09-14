import React, { useState } from "react";
import {
  Search,
  MessageCircle,
  Flag,
  AlertTriangle,
  Trash2,
  Inbox,
  Menu,
} from "react-feather";
import "./App.css";
import message from "./MessageData";

function Content() {
  const [flag, setFlag] = useState(5);
  const [flagActive, setFlagActive] = useState(false);
  const [spam, setSpam] = useState(10);
  const [spamActive, setSpamActive] = useState(false);
  const [deleted, setDeleted] = useState(0);
  const [deleteActive, setDeleteActive] = useState(false);

  const [searchTerm, setSearchTerm] = React.useState("");

  const fetchData = (search) => {};

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        <div>
          <Menu style={{ marginTop: "20px", marginLeft: "170px" }} />
          <ul className="ul-menu">
            <li className="active-ul-menu-li">
              <Inbox /> &nbsp;
              <p> Inbox </p>
            </li>
            <li className="ul-menu-li">
              <Flag /> &nbsp;
              <p> Flagged </p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p
                style={{
                  padding: "6px",
                  borderRadius: "5px",
                  color: "white",
                  backgroundColor: "#0f3875",
                  fontWeight: "bold",
                }}
              >
                {flag}
              </p>
            </li>
            <li className="ul-menu-li">
              <AlertTriangle /> &nbsp;
              <p> Spam </p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p
                style={{
                  padding: "6px",
                  borderRadius: "5px",
                  color: "white",
                  backgroundColor: "#0f3875",
                  fontWeight: "bold",
                }}
              >
                {spam}
              </p>
            </li>
            <li className="ul-menu-li">
              <Trash2 /> &nbsp;
              <p> Deleted </p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p
                style={{
                  padding: "6px",
                  borderRadius: "5px",
                  color: "white",
                  backgroundColor: "#0f3875",
                  fontWeight: "bold",
                }}
              >
                {" "}
                {deleted}{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginLeft: "20px" }}>
        {/* Search Bar */}
        <div>
          <form style={{ display: "flex", justifyContent: "space-between" }}>
            <div class="input-wrapper">
              <input
                type="text"
                name="search"
                className="search-bar"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
            <Search
              className="search-icon"
              style={{
                position: "relative",
                width: "18px",
                marginTop: "32px",
                marginRight: "10px",
              }}
              onClick={() => fetchData()}
            />
          </form>
        </div>
        {/* Content section */}
        <p className="paragraph">Last Month</p>

        {message
          .filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map(({ title, date }) => (
            <>
              <div className="header">
                <p style={{ fontWeight: "bold" }}>{title}</p>
                <p style={{ fontWeight: "bold" }}>{date}</p>
              </div>
              <div className="desc-content">
                <div className="desc">
                  <MessageCircle
                    style={{ marginLeft: "20px", width: "15px" }}
                  />
                  +91 1234567890
                </div>
                <div>
                  <AlertTriangle
                    style={{ width: "15px", cursor: "pointer" }}
                    onClick={() => {
                      if (spamActive) {
                        setSpam(spam - 1);
                        setSpamActive(false);
                      } else {
                        setSpam(flag + 1);
                        setSpamActive(true);
                      }
                    }}
                  />
                  <Trash2
                    style={{
                      marginLeft: "10px",
                      width: "15px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (deleteActive && flagActive) {
                        setDeleted(deleted - 1);
                        setDeleteActive(false);
                      } else if (flagActive) {
                        setFlag(flag - 1);
                        setDeleted(deleted + 1);
                      } else {
                        setDeleted(deleted + 1);
                        setDeleteActive(true);
                      }
                    }}
                  />
                  <Flag
                    style={{
                      marginLeft: "10px",
                      width: "15px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (flagActive) {
                        setFlag(flag - 1);
                        setFlagActive(false);
                      } else {
                        setFlag(flag + 1);
                        setFlagActive(true);
                      }
                    }}
                  />
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

export default Content;
