import React, { useState } from "react";
import "./Workspace.css";
import Navbar from "../../components/Navbar/Navbar";
import Icons from "../../components/Icon";
import BoardCard from "../../components/BoardCard/BoardCard";

export const recentBoards = [
  {
    name: "Trello",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    name: "SocialMedia",
    image:
      "https://i.pinimg.com/736x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg",
  },
  {
    name: "Test",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSur5uoo_I8ypq-aeq7hjf1YvRhEm6lUWGocT3Xas6vfd-7SRcEvc-_j1N3gN2Q4BK3shI&usqp=CAU",
  },
];

export default function Workspace() {
  const [userWorkspaceToggle, setUserWorkspaceToggle] = useState(true);

  function userWorkspaceFunc() {
    setUserWorkspaceToggle(!userWorkspaceToggle);
  }

 

  const yourWorkspaceTest = [
    {
      name: "Trello",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSur5uoo_I8ypq-aeq7hjf1YvRhEm6lUWGocT3Xas6vfd-7SRcEvc-_j1N3gN2Q4BK3shI&usqp=CAU",
    },
    {
      name: "SocialMedia",
      image:
        "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg",
    },
    {
      name: "Test",
      image:
        "https://img.freepik.com/premium-photo/mountain-sunrise_445983-2689.jpg",
    },
  ];

  return (
    <>
      <Navbar data={recentBoards}></Navbar>
      <div className="workspace">
        <div className="left-menu">
          <div className="left-menu-content">
            <div className="header">
              <div className="left-menu-buttons">
                <a>
                  <Icons name="trello-icon" />
                  Boards
                </a>
              </div>
              <div className="left-menu-buttons">
                <a>
                  <Icons name="trello-icon" />
                  Templates
                </a>
              </div>
              <div className="left-menu-buttons">
                <a>
                  <Icons name="trello-icon" />
                  Home
                </a>
              </div>
            </div>
            <div className="body">
              <div className="content">
                <h4>Workspace</h4>
                <div className="user-profile" onClick={userWorkspaceFunc}>
                  <Icons name="account" />
                  <p>User's Workspace</p>
                  {!userWorkspaceToggle ? (
                    <Icons name="arrow-down" />
                  ) : (
                    <Icons name="arrow-up" />
                  )}
                </div>
                {
                  <div className={`rolldown ${userWorkspaceToggle ? 'active' : ''}`}>
                    <div className="rolldown-item">
                      <Icons name="trello-icon2" />
                      <p>Boards</p>
                    </div>
                    <div className="rolldown-item">
                      <Icons name="heart" />
                      <p>Highlights</p>
                    </div>
                    <div className="rolldown-item">
                      <Icons name="views" />
                      <p>Views</p>
                    </div>
                    <div className="rolldown-item">
                      <Icons name="members" />
                      <p>Members</p>
                      <Icons name="add" />
                    </div>
                    <div className="rolldown-item">
                      <Icons name="settings" />
                      <p>Settings</p>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="boards">
          <div className="recently">
            <div className="header">
              <Icons name="clock" />
              <h3>Recently viewed</h3>
            </div>
            <div className="boardcard">
              {recentBoards.map((data, index) => (
                <BoardCard key={index} data={data} />
              ))}
            </div>
          </div>
          <div className="board-workspace">
            <div className="header">
              <h3>YOUR WORKSPACES</h3>
            </div>
            <div className="boardcard">
              {yourWorkspaceTest.map((data, index) => (
                <BoardCard  key={index} data={data} />
              ))}
              <BoardCard data={{ name: "Create new board", image: "" }} />
            </div>
          </div>
          <div className="guest-workspace">
            <div className="header">
              <h3>GUEST WORKSPACES</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
