import React, { Component, useState } from "react";
import "./Workspace.css";
import Navbar from "../../components/Navbar/Navbar";
import Icons from "../../components/Icon";
import Rolldown from "../../components/Rolldown/Rolldown";

export default function Workspace() {
  const [userWorkspaceToggle, setUserWorkspaceToggle] = useState(false);

  function userWorkspaceFunc() {
    setUserWorkspaceToggle(!userWorkspaceToggle);
  }

  const rolldown = [
    {
      value: "Boards",
      key: 1,
    },
    {
      value: "Highlights",
      key: 2,
    },
    {
      value: "Views",
      key: 3,
    },
    {
      value: "Members",
      key: 3,
    },
    {
      value: "Settings",
      key: 3,
    },
  ];
  return (
    <>
      <Navbar></Navbar>
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
                  <img
                    id="account"
                    alt="account"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0ElEQVR4nO1Za0xcRRS+gC2vavWHsVUMhmDEBBJEWYiJMRiICQmx4qNJY0ysxqiNNEFTNDVZjPUvr1800HtRFOsyFyQRTJhJN7rFx5aKLl3KQtyH210XTVGEfW85Zi4Bl13YndlXNeFLzp/ZmTPfN3Nm7pmzgrCHPewhaajV6uyBEaKSEH5HlAmSEDGICC+LMvErhvAybZMQHqZ9aF86RrjZGJS/OizK+IyEyK+STIDHRJnY6FjqI+PEP/1Sd4eISLcoYy8v8Wgh2Et9SaPa2zNCXhyZbBYRWUqWeJQh7KK+00Zco9HkKCuVauJypOEuOldKyUuSNk9EeCT95MlGWNG5JG1eSsjT1VBujwyRl/4VMabWam9JWgBv2HzYfQ6ebHoW7rn3PsjLLwBBEBSrfeyJRER0Jkd+ZLKZdbJzw5PQeOQoZOfkbJEOt+zsbHi99T04+9k4j4D1AZk8nRD5sxp8UETEyTgRqB59fEfikVZ44FZ4+cTb7DuBsIte2/yrj0gP6yTPHDvORD7cXnjlTY6dIN1c5CWN9pAoYw+L885+Dezbt59bwP7cXOjoO88mQMbe/i8m72ZffZoeMK7OU8+/GJNocXExtLa2wtTUFAwNDSlnYfO35mMvse+CjM8wkadJFs1TWB2X3F8WRbq0tBTa2tpAr9fD+vo6hKO3txeysrKUfg9WPMRxK2ErUwKoZJUcV11B4QGFTElJCbS0tIBOp4siHYmuri5lzJ13HeYQQKB/ePKR+OGD8Ls8TjdXnRd0TH5+AZcACZFTDPFPUKYECILAKQBr4gqQEJnlcXryrVPbBFRXV0NNTU0U4ch2Oua1Eyd5d8AQX4BMrvM4DQRDoFart4ipVCqora2NEhDZTscEAkHeHfiDJYT8PE5/mjNDopiZM/PugC/lAqj9ubLGTX55ZZWPPKsA3hCiNmuycgswzFsSEMAQQryHmNrn4zoIBkPM5Om5OT+uS2QHDCm/RjdN+72BWcDX+iv85GXGa5T3QxZulFh88rOJkZcZP2S8qUSkxUMyvvtZUgneZC5zAjBbMsebTlMbkDEcf/UNKK+oiEk+FApBVdXD0Hb6ffhkTMsr4gMhHQ8a3bQRPD4/FBUVKemBy+XaVYDJZFL61NfXg8frh28uGdPzoGGpRnw8egEWrc4tcu3t7Qq5pqamHdNp2lZXV6f06evr22pfsDjgo9EL8cKnS+DF4ODEbbEe9SaLYxtBt9sNZWUbj5vGxkZwOBxKyFCzWq3Q0NCg/FZVVQWBQGDb2EWrM8bNg10J10036qB4PdLpdzPzO4aIzWaD8vLyXZ+XlZWVirCd8O2PV6NDh86NyBEhGdDtC3dKD58/ENw1zj0ej/LioqlzYWGhYjQL7enpAZ/Pt+s4nz8Ag5EHG5EOIdWlxYuX5yBd0E0bt5UWU1bk7Z6YyN0s7lquLaVNgNnu2lx5mc4ppL68jjsTSZ25UmxEOlJeXg/HjPGX0yur7t0PQYL4e80TmjXZ2oVM4IcrlkNmu2uaJ4WOlVqb7a5L1KeQaUwb5ssWLA6y5vFy78ia2xtctDmx/uerDwg3GzTJumxcPGqyOMZ++33ZvvzXqnvV7b0RDIWA2qrbc4O2OZeu2xfM10ZnjObn/hN/s+5hD8L/H/8Anku/nJd3yY8AAAAASUVORK5CYII="
                  />
                  <p>User's Workspace</p>
                  {!userWorkspaceToggle ? (
                    <img
                      alt="arrow-down"
                      className="arrow-down"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVR4nO3YTQrCMBCG4XpDFcWFXs2Meyc9gBkvowiKPxdQiFRQRFtta9tM8Xuhu6TMQ+gijSKEEEIIIYSKRPFyaFgOxLIhlm6krJmVHrHbGnYnw26Uush73yF2e7Libw+7c+biABl2o2Smx3xWjsnMGYtl97RQDca8I3wya/aGeNF/3RAaY1IQt5niRf/jxqmVwZveymU6l0kU4JullFnIunGuF2jA0K8IDRiqChESQ1UjQmCoLkSTmNoRTWAaQ9SJaRxRByYYokpMcEQVGDWIXzDqEGUwahFFMOoReTCtQXy7O2i745Q+mdacRF5MqxBZmFYi7iW/lIjdmlhWGn8vIYQQQgihP+sKFKVHhpJKRZwAAAAASUVORK5CYII="
                    ></img>
                  ) : (
                    <img
                      alt="arrow-up"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqElEQVR4nO2UzwrCMAyH+xIOffg0MG8juSqjAS+C4HbSg4+jZDAYw/9Nd8oHpaGl+fgd0hAcx3GWpOa2ipyOyNJpvYgUmt0KSS7IctcVWW5b3m+KSmtuKyS5DlLdJ3Wx5DBJqimxOaznZ+bJ4Yn01Z2ZHN5Ii8nhC6m5HH6QmsnhD2m2HDKkWXJk6Sxmczbz548PIskpUuotPoTha6XUa8/cXo7jOGHkAeS9CcyJSaG6AAAAAElFTkSuQmCC"
                    />
                  )}
                </div>
                {userWorkspaceToggle ? <Rolldown options={rolldown} /> : <></>}
              </div>
            </div>
          </div>
        </div>
        <div className="boards">boards</div>
      </div>
    </>
  );
}
