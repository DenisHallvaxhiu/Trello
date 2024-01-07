import React, { useState } from "react";
import "./Workspace.css";
import Navbar from "../../components/Navbar/Navbar";
import Icons from "../../components/Icon";

export default function Workspace() {
  const [userWorkspaceToggle, setUserWorkspaceToggle] = useState(true);

  function userWorkspaceFunc() {
    setUserWorkspaceToggle(!userWorkspaceToggle);
  }

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
                {userWorkspaceToggle ? (
                  <div className="rolldown">
                    <div className="rolldown-item">
                      <img
                        alt="trello"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9UlEQVR4nO2WPQrCQBCFt/IaARs9gJ7Au9h4D3+alNrojkWwWGd6yUxOoUfwB/QIFpENFpvIgpINNgk8CMvLfJvZB7PKGNPRxAuNcgWSPIhQLoA8t7WVfQlWmKognqugO6eyNPFNlRZQEsBDf4PcdQX7dATID8d7t2sfPjz0gXjn1iwB1ibrKc+jkVeOd+nz2Rp+AGaR70NAiZ1DjL0AzKIWkLct+n+KNEri82niYYCY8hNIplvksSsgmWjiU30Afa8WkP/Won068KYDJal9BoBytEmopkOTzN7JqQloQKoY0M2NzHOjQ9+2VtmrRQEJ+SfOteUFjgrhZZhDX5YAAAAASUVORK5CYII="
                      />
                      <p>Boards</p>
                    </div>
                    <div className="rolldown-item">
                    <img alt="heart" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/0lEQVR4nO1Uv2sUURBesQiijY0oIiLEQoxWKgpaiYrYxj9Bm/wD6QUJdkLAqHvz1hMR3s5sAoaY3ZnlAoHUaay0EX9gkybRKBFcmb23dwe7G+8uBiwcGHgw877vezPzxvP+26DWtPEJIHlskD8Y5J9A/BGI/ae2NVrkACYnDUlDY5rjcmf07rbggMkNQ7xhSLKy85aJkjsB8t38XJWDvB6E6fVa5R1wlFdAfL7ZjPf7FI/lLyLJAPmXevssT2CWz2iO5gLKfEHiY3q8rN6BKHiVAEMy0UMwUV2BNgkgPyoDaB1JMj9MztWV0CBPqtfFg0gu5AQk7ysuyw8N6pO9IW3atg60Cfh7KQjI7zQYhOnpYQl8isfcQLwtBQ0yuGm4PyyBQZ5yL/DLQUouOvaNwMrRQcFhdvEYkHzVIdBe1CmwbtRSa+3efsE1F0haboJe1iY2KT4EKJ8dyUw/4FmW7dE/4e58MbZ1eNsLEMoVIN50/bj3JwLtmav7ZiPiy/2I0k93rRhbgzylKiuVkzzorBHiW32Bd5RF6e1i52gJenuS17woC/FWg2R8IPAOSZhc7dlPc9au7Hu4sDDSHQb5FkRy09uJPYv4kiFZc4BLubf7s6axHYF3SZJTul+6a1k+BaGc9f6mPafXRwzyqiF+o5/K2w17Mb98UH1XwP9Z+w0E68qTFZVqzQAAAABJRU5ErkJggg=="/>
                      <p>Highlights</p>
                    </div>
                    <div className="rolldown-item">
                    <img alt="views" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAk0lEQVR4nO1VQQqEMAzsY1e/sFePviLxAY0PMLl68Df6gi7BVUGItOJFyEAgJR0mlE4Susg1RFmQJFkBWu+HKvxRxNEEIk8YubUCtE4ybwJFnFWRm3ABJG703nEu4LiABX+ilP2LVsPwCCRfK5B4PPsgm6Nu0+TKlUgyA8ln7+4G58XofNgZcCcn3wfPrUx4+7D7AbXuIJbHlv21AAAAAElFTkSuQmCC"/>
                      <p>Views</p>
                    </div>
                    <div className="rolldown-item">
                    <img alt="members" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0UlEQVR4nO2ZXYhbRRSAo6DUf8GqVRBB64M/0PalFEUUtIKCiAqCtCCIv1gRFMEXWa1QFX2QdvsQsplJdh+Ee8+5qQvdmpxzm3ZdxUJtxdVaRUrFH2wtUtauf+0mcuYm2eDmzmTvzS4r5MC85J6ZOd+cM2fOTDKZvvSlL31JKtns/nMKyA9qoJwC2q+ATyjkvwtBeH3m/yD1ev0shfyEBv5JI9fnNODtWleXZZayaF1dpoGxI0BbU0A1hXwg74ePZpamJ6jkgpgDhfR6ZimJRtowX4hGm1HI6xfV2IGBgbO1X7lLIQ0p4IMK6cfh4fIF8rsCPpQQRPbNHhl/0KteaBID8vcaeFpjZV3PIYawfIsC2vcfI0i+FQJemxiiuWdKH14jY2mkw7PfaFwhP6296oqeQIihCvlUBwMGzXegp9KARGPx/QYEyOvw/aQGejgVhC5VL1XAxzobQK9Gq8hvpAXRSM/LWAp4a0xS+KMYVG5MDCJZJT7j8JuNVXy5VyAa6T3LfNnkHgGejN+kpEQn7/PGtCAFv/JIwyNFy3w/JC4zFPIZS1wfEr1hLF9h0+uizQxBeG3Du5/Hz0c1z/vkvGSHHFDNMvBvomNWEunLFGH1aWs+nJtU2puk+0Re0UhHLSDvRxC8PnVoBby2MRZbIuBEIggzMNCgBcSkXwW8KS2ICioPmYUD8mN1kHRiEHG7ZeCS6OSB7k4Lkge6ruGRA/HzcTU5CNCUxdXHPM87V5pC/joFiKkQch/wlRrotGW+nxODKKS9ViOCypPNzKWBPps3BFAoh27kfd5i16edyT2ClXWSvy2GTCk/vDXFCf+c9C0EfK9G+scCcVSXyqsTgxivAG+2blSksugVfVozrw2OfKZVLDq9Sa9l0koew1WO8DgtoWWgkXZ3H1aM0UJVbnDp5jFclemFSHxaVxd4s+hJYSf5vguQ482HiLhCUc8C7+gJhAHxqisck03nPb7J6AK94w4retfolsqr5XXFpjuCu67qGYiUBk7jgF40xiFtc+vy1giaX3J6z+vRxUpEVsUZx0DPRsZRzr0/KCe60selW/RpTU8gpOJUSMMOb9QkhRoQpBH3HqER0ZU+tsJUR2G4u3nWJH6nUj49rpCPOMLkGxXQA7PQdv3IOD7SfKgzL5LI3zo8+IsCfqEY0GVdA0ipIDdDFXvFNW1GAY3JisorSuteArzL7Y2WV3bmvbHLpW/0EhPeJ2PK2PFA/Jfc6wt+eI89hIAHNNLvFgNOSsbJedWVzX7Z0dHzTawD/do9RKsd1wE/035hynnVlTKHeXSwh/M+DeXb5njBVulG5QNty45Wlzf7yDmggd7q8tywh5p55Ka32x+5Za4oA8aXLtHNlDa0pVb6yuLOyeYZIZIPKnc0Qig+BBIDUU3GljlaC+aHN9vsU0h/SnUg6fIViyfG5QVQBhRlZzXcywa8pxnCQzsmLlJIExbd7VIiHIxZne9GRsYuNhA+Pea6Ty9EU8inZG4Tah5dEp8R6XAmzkDl8+0mlHze6Mr1CwoDVBMbzJHg050xHpmWMuGjDnG3N3Jp5WpHFlukMKMpscXAII138MjH1jPFfWtb1LbFcQRaQIC/WAIA9Ub4TKYBcf6VtlhNIU0kBulLX/rSl75kFkj+Bb8fRAy5Ndv6AAAAAElFTkSuQmCC"/>
                      <p>Members</p>
                      <img id="add" alt="add" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArElEQVR4nO3ZUQrCQAyE4RzP4h1ND7DpBTanab1HfRFRpKKonV34P8h7wmxhoGYAcM+jHk9Rzx65PkypyzjlYK3zUpen5W9H5Gyt863lr2Otcw4QIwE1ElAjATUSUCOBv1Zi1ZQPq/jLSiw7It+v4vJl48sqrl7UOSB6f0Kl8494nHJo6oiSs0c92B5+9gxUOECNBNRIQI0E1EhAjQTUuv/FNG5V8T0rMQDrxgXbrWezWLybsgAAAABJRU5ErkJggg=="/>
                    </div>
                    <div className="rolldown-item">
                    <img alt="settings" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEb0lEQVR4nO1aS4gcZRBuX1ERVzQiongQ8eZZ8KqgklNM3IgK4tH3WwQvK4gIBoWAgsvuVM3uECI9VZ2Qx7gzVc0gkeAjJiAS4gMRV1SIovhYVrNxpWamyUzP370zs9M9E9gP6jLdf3d9f/1VXV/tet4GNuCtrq6eh+XaHUCyB1hfim8Jkj6MrG8Wg/Cmsdwu3z9yKbC+DCTfIOuqGbAstTs8u692HbL+3rp+BkkPANXuMvLeuGBXpXIxsP4TkWgjU43uAZKg+7qulEqVCW+cACRH4442TQ7Z7ruuAelxb9yAJO+6iSQbkLw9+pzYu3BD+29AOtU3EZbH4s+empo6Pzci5kDLkR+QxEfWV1050oP9CiT3IcmLlkNA+iOyPpMLCasyQHpiAKdXeztueiIXIsVyeGdWJLBlc4HcljkRZNnfk0Ok3yPJ9tl9H15uhqRbkeVkb2sFMidSKIf3A+kva5GY8Reuiq/dffDwlQ2C6UTOIMlOLw+gX78WWPam7Oj2xLVBOJlcxfRYMdBbvbwBpEdcDtlRSlpTKlUmEkjoVL1+Yb4MWtULWT7ql8i0L1ckRLGcLwNrALl6C7B8kJIjW5PWFsu1He6yK/8hycxcIJtzIQGsbyDLv+kJKyctseNr5wLZjCSLa1SsU9bu50Gk3nP5DcJJy4lSqTLRiMRaJM5Gp5I5EWR5MIuPIHZG9O71OUmy0xHqjpqOWL/EeqQMiXy17sbRqRtID8TvA9JdSLoMJB8j6TvIWhjIaZJTyPo4sCCyfNeKxpM9OwxBbRtQuKWLCMvXrh1yr5cHOsl1K8C1rFiu7Wh/xrxfvXF+vnpZTyTsq2tVx8qd7azJ1Da5utKVeKwr0T3T00cvQpZXrI1o3BuEk2efq4f7j4g+7w2CAuu9SHI6Ft7PLJxI+nnKSz9tHAHS4zFHlq0b9n1/kw0bnBWI9Vtg+Snhue/1TcKOUheJYRjp38DhC04SJHvs3bON7re79BrJAYjUbgbWvzIgstzcJH0LSH5ri/TP0/vrV0fvL7LeE98AZC0OVKEiiTpMA5LnoudbomKgjwDLF1YQXFoGWI8VSB61nstbl0xlqQ6RyEI/Azbf9zd5wwKQPj00Im1VK1fMc/Wa1MEByaJVtkie2vGw70gKGbGSnIvzwPo6kL7fGrWkJK0suuSp/dYY+ySvOw2kXza0fJYSFXs8JhaJfjWEy0ZOZHYQVTeOREopU/Fzigg46n5HazNqItBM9oNrzZMsYV162ZI9oStuS3h7thyyd3l5YLcNyFKmfVadLLEjedqMRAoJktClzXNBgeXZXo9Jv3oiN/i+f4Ht4rCIjGQWZUCS14ZGIooKy0NengAOb3cpwPWb/GkSIT8iQW1bNsLKWpRu/Z8pCg6pa229dcRpzaRJXCB9oimLO0mktTaZAqPhA8uS/XdCpNCKvl6fUJKXrEi4hg/2txJvlAAKt8TPdWO6TvJH99HRT5zrUzqBkQOb05J4Dsx45xqQpeSoSk+N2q8NeGOE/wHRXkfkW5HImgAAAABJRU5ErkJggg=="/>
                      <p>Settings</p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="boards">boards</div>
      </div>
    </>
  );
}
