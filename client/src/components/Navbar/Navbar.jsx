import React, { useState } from "react";
import "./Navbar.css";
//////////////
import Icons from "../Icon";
import { Search } from "../Search/Search";

export default class Navbar extends Component {


  handleFilterChange = (filteredData) => {
    console.log("filter data from navbar " ,filteredData);
  }


  render() {
    return (
/////////////////
import { motion } from "framer-motion";

export default function Navbar() {
  const [inputFocus, setInputFocus] = useState(true);

  return (
    <>

      <div className="navbar">
        <div className="nav-left">
          <div>
            <Icons name="menu-icon" />
          </div>
          <div>
            <Icons name='trello-icon3' />
            <p id="trello">Trello</p>
          </div>
          <div>
            Workspaces{" "}
            <Icons name='arrow-down' />
          </div>
          <div>
            Recent{" "}
            <Icons name='arrow-down' />
          </div>
          <div>
            Starred{" "}
            <Icons name='arrow-down' />
          </div>
          <div>
            Templates{" "}
            <Icons name='arrow-down' />
          </div>
          <div id="create">Create</div>
        </div>
        <div className="nav-right">
          <div className="input">
////////////////
            <Icons name="search" />
            <Search data={this.props.data} onFilterChange={this.handleFilterChange}/>
            
          </div>
          <div><Icons name='notification' /></div>
          <div><Icons name='help' /></div>
          <div id="account-div"><Icons name='account' /></div>
///////////////
            <img
              alt="search"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADhklEQVR4nO1ZzWsTQRQfK36hCGo9eBBErXrX6lEUxT9AUNGTJ9F/wdqcPRZUCO3OpI2t7WQmhSJpzHtpwM/Sxt6i0IoHj+JNBKto5DWJTSabNNnM5qPkBwPLsvt789t57828t4x10UUXviEUTR5zFNwVGia4xiWu8JvQ8IsGXdM9oXGcnnEUHGXtBCnlVqHxBtfwmiv4KzRmaxn0bP6d64FAoKelIhwFl7jGj7VOvvKADNfJi00XIOXbXVxjsHEBxlD4WIjUzqaIcGTsoFC4UMldhMZFofC+E02cH5HJk2NjL3bToGu6xxUM0DOV3JArfDcahQO+i+AKP7j6u4JnwzJ1vFYurhJ9QuOkuyDIBGdSvb65U4WVWA5Nz532yss19AsNKy5i5n1xswoxAePPX+1rlHtYxvdzjegWM8wmuMbLbiKCwfQ2WzaIy00Mt5XNaJ9wSbHLNlbCbWXK3QwyVvYZ2uzMwB6JJM4wnxCK4lkzAYQiiWsNEwsNb4wvNMF8Btc4Zdh82fDZqfjr5NJsoo/5DLJh2hXTqSPeCTXcM7LIgtUZV7OtIF0a9HjHMxmdVI34GLA626q24YHhXmHPZPlj938yOmKwJiGk8ILxEdOeyXL1xDrZaBROsCaBzmaiNOV/9UzGNa4Wkz2SqT2sSSBbojQ+f3akkHA4tteIke+bwrW4xs+bItiFhvnOTL8KB41gdzyT5ToiJWSLrEkwvYEruOmZjFo2rTiiUCyadsN69lBDpNSyMVZlkvkMoSBi1PGzDZNS36msPtfQz3yCE5k7Zx7juUpcsdSAg4yRQVaoCGKWQd0TruCTkXaXstnsFisGqNwsL0ER7Ze6MFe6m8Nv60Wc0PjETYyNlaGVEAqS5fzwkNkGtWaoeVbehIAVKk8bjIkSdyqKx9hQLLbDrhJa/plUb3m8FBIATtWTminFCgVyo8Y390vMmhtQ88zdKHUc01QUrR0xVPxUoWVK17l7OCgUvK+zcx/zRQy52VrDucaJ2BjcLzHr2azc1eoeChfWflEoiLVMTCAQ6KG+E7Vs6nEXofGP0BgXCq4W9gmaZEvFFEAtG+p2cIVPKVbyv9tWhcIfQuGX3C8HGHZ08jafjh9mLmgbMTYgpdwuNMxssKLxpv0UagRdMe0K2XWzNsVQDdlMaLjFOgGyiptxhQHWSZAuYjpOBMujWEzHiiiAYqZaTPwDY0wlav0XK/UAAAAASUVORK5CYII="
            />
            <input
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(true)}
              placeholder="Search"
              type="text"
            />
            {inputFocus ? (
              <motion.div
                className="input-dropdown"
                initial={{ height: "0" }}
                animate={{ height: "400px" }}
                exit={{ height: "0px" }}
                transition={{delay:0.15, duration: 0.5 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, recusandae! Maiores et recusandae placeat, enim
                deserunt consequuntur ipsa reprehenderit, tempore suscipit sequi
                eligendi dolores alias deleniti exercitationem est
                necessitatibus dolor vero! Corporis dolore expedita asperiores
                explicabo, ducimus minima error libero omnis quod perferendis
                reiciendis nostrum velit similique nemo totam sunt.
              </motion.div>
            ) : null}
          </div>
          <div>
            <img
              id="notification"
              alt="notification"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE80lEQVR4nO2bXYgbVRTHb1u/rYvVVcH6jeA3gmIVoRSpKIIIgoII9UFB9EGLT/VBSXVB64tSWJG4m3tnE1fk5pykjTXs5pzsoNsq4hco9kFtFbS6FG3Vqq21beQkmzbNZtdNZiYzs+YHB5Ywubn/M/eeOefcWaV69OjRo0f80EDPGOTdGpmdHK9QcWcYyhebHD+mgV7TQJurhmQ0cMLJlu/IZIp9R6/F8Ws10BGDXBGTvzXwyPCm0vkqbuj82IUG6U2DfLguqLXRQYNUMLny/Ro52fIaoN9TudIqFRc00k0GaGpu4e2ZBiqqOJCyxXMM8C4/xddWAb+q4oBBfst38UjfJQtuv4o6To7v8l981QZU1EkWCqcZ5B0BOaCigTcmEonFKqpopJeCEt9go5F0Qio7cbMB+qcLDpCnwaCKEplMsS/Ipd/SgB9RUcHUkp3uia/Fg98kwwxbu9JZerjb4o+tAhoKWXz5VgN8IDwH8AFJusIrcMDfVLdDe6Dr4ke3TC4zwF9EQLysgpe7Kj6dHj/dAE+GLnzaNNJwV8VrpHfDFn2cA4Be6Yr4kRydrYE/CFvwzC1QXhO4+LQdv9QgfRm62Jn266B1lwYq3mRLqzXwzxEQ22L58/PBCTfuKQZog0Y+FLbQWWx3Yy+xc6EwdqVGflGqLAfpoUqlsqghvx/QyH9EQGwLoyc8Cc9kin0aKd3csNRAHxos3VK/bmgznyfVl0b+O3zR03NE3mmtPclbREf+dPa9JW1pyjiWl9e/kwK6TAO/8d8d3uAtBfR4x+KTyY9P1MjuvH4M+E+DtN7a90896gjLVxsgG5oDgKYa59M2BvmFtpcc0Lcp5Psax9FZXmmQtoXggKc7Fj9k3ctrhxAd7z03heXrG8d0sHxPt+oCjbRftq/yQgrodg283cNEDkvwlOBYH1N6dNVTHaBvgnUCZZQfbCwWT9bI6+S4qeO7AbQ3hfSUxJT6uBKZNfBaeUYHsgKyvFL5SbLg9kur2WOy81UqR3fPLJp4naSq/i1/3lnPUXxHI99gkN7zOElysuVrGseV/VrLJmm/ZycAbVBBUqlUFmmgBw3Q9x726EFpUJi8e+aM7hGy42WlyWGr6tbpjq4uX9rn4Y79IrHAWrukceyRXOkqySEaz//nJR5ob/NYgeNYXi7Rvt3JHj9x3q6hdGerQxSNNNHG3c+rsHByvMJzIwT4bekptHokG6BP5rG1nlRhkkgkFkul6KULLMWUPHGGN209ozn2SA5hkL6e9bt5uk5FgbQ0RJHWezoLAN7lAD3afMAp+YR8roF/bFr+f0XuMHRIUmrvBdFHcrAyWxCWwDftsM9VVDHZ0mqZYOdBko6II0csXdQ89pAdO2s6h0irKJOU8hp4rQba0/lqoH1S5UmK3jx+wnVPUHEgWXD7JdnxuC12OMj3qrhioLzGowOmAyWVIxP528EgPeuLA2qPzUPyWpzn+r+bSMLilwMaAuUeGTewStBPpFvktwMi+UrMXGik8YAcMKniwOvoXiBN1DmESBY5oJF+aDMwTqm4kMbxc6V/N/O1Odrm5CduPJZWVx0xr2aJRvpJxY3RLZPLHODbqq/P5t1LWl0jnxug7DwcsFUtZFK50ioN/NkcDnhOLXSstUukImzVVW4+j1jQDFp3aVPZTer/yLAtX2GQ3onVv8r06NGjh4oI/wI7jAqscQpmbwAAAABJRU5ErkJggg=="
            />
          </div>
          <div>
            <img
              id="help"
              alt="help"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFc0lEQVR4nO1azW9UVRR/iIoKURH82KkLjUaj/gPqxiiIiho3oC5MIDYqpUGMcQFj4oYImxpInJS5dzrIwjf3vGptx86c83iSIgGtiC6kVVkYvxYSMAarDZox5777Zh52Pvo+ZloNJ7nJtO/Oue/cez5+93fGsi7I/1QG7LFrpKLHpcKdEnBUAk4KhacF0Iwe/ucT+pnCncLBtftHxpdbC0Gk9C6Tyn1WKqxIoL8lUDXKEEB/CcByrkjP9JdKS7pugG0fvlwqelko+qn2Yor+FIAHJOA2PplBp3I773g2O3EJD/7M//NPjbYLII+/E/r+j0LhFt6crhghAddIoJOhnf1UAG3I2nhVZF1D3tXSqWwUCidqp6Tw27xDqzvsRvh2fQfxs3zRfTA1/YCrhKLPQye0J/XTkbZ3A7+4WeB3CbjJtu3F6busvVgo2iwAp4PTHnifrk9FecEu38zHbYLzxF4o32l1WPJFuksomvKNwW/4HRIpzNmla2sKFX2SHfZWWl2S/SPjywXgIXMyJ9krksSEdieh6HChUF5qdVkKhfJSCXgkcLNYMRMENrsTFztrnmTQwRUhr9gTJ8XqwI4bE9nh4Ss4E0nAXgH0ag7c56Qauy12zECQAHDV3ItdrU7gpniZB18TCs80rOiKxnPg3h1VrwTqC4J/Ti4mwN0a1ImoKTbjeRcLhU57aILTOadyf1TdUuFxo6Ov5WS2NIAdcYodu9D5u4+uBHqRsZQA3CWAzoaM+Xm37S2Loj/v0Grz3R9aYjNeMMgQcWKCEW4IEL757zmDDt4qFf5WM9ShnihrVKvVRfVMiuubTjQoll9iQ1RDhHIfDhnxHbtCkzV2hOa9G3kdoOdNSfiw4QROsQyrGZHGAYCiSPcyJGcUy/eNZvNyRXddyL0OxiuUNCMVnmv4nhpe+8oPWB0UoeilUAZ7L44OqegjHcfgPjZ7AcBdJr1tszokmUzmIoY69RNxt8bRIwFfbxaH/HC0qZUpiQB8IRQfZwtQvi6OnjzQE2bTh2c9lEBf80O+xVkdkL3KvVEC/RpKza/E1ZUvuncYQyZnPRSKTvmG4AorZdGFso5kOQ4PJbnPZIe9lWYzfpn1UGcCoKpt25daKYsEeiN0lT0jh7ybkujrL5WWBDxB1wzJK/c+ndaNITmgp5Lq7G9pSAdci91HKvoyBFtyaejNtnKtTgT7edVe4em0NinfJthH9IIOrrVSkjr01mMsLb35Vum3VhAVbU9rwTAaFoAyLb2yZUGsQRTyUlvQ14n+iH5JayaM0QxwfLQZGNOgkRlAa4HKgA9uNWjct690ZcNJGr3qe0Jlo7VARTrUY+JjtPkkwKdNhplIY9Gcg4/o+4fCHUw+JNVXrVYXCaBjuh4V3XUtCw1fI31jKg8lXVgoeidMdqeyMaDrx/dt2xCa2veD/lhSfjdNQzI+XvvCuFVv2y/4BIThehVtXiiGiGCDFU3NuSkUYiummRyLv3jllpzCB/SIwWUFIofK9wjAP2KxO7o/YXagE9A+CpEumZTz3+WteCQ2E8e+Tx6ZDxJ7t+0tEwqPmkx6NHaf0ezGZNBW4L+tbnaJAT8O2nGJGz7cZAkd7VQSX48SE9KsqVF5wotYTXg3AjczrHhfMwIuiWR87nhLENjsTnEJijaNHz8BmKJ0PK3uq6ZCAdfU64Qf2B3tvZueR3DsmrVnGjPOrxh0HDjUE8AOaVwpzW7xXDJaXwBnDBKYYXgtFGX44sO3OE7bzAHw4M/cNBJO5Umeo+caniCAHRKwd15+AaGxmcL1TCiHCYY5D4XnGMUyAJwXAxoJE8p80eFbm1T0AfcemdCo/6iGTglFX/H1lOfw3Kb3iQti/fflH5xOJroA+dyuAAAAAElFTkSuQmCC"
            />
          </div>
          <div id="account-div">
            <img
              id="account"
              alt="account"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0ElEQVR4nO1Za0xcRRS+gC2vavWHsVUMhmDEBBJEWYiJMRiICQmx4qNJY0ysxqiNNEFTNDVZjPUvr1800HtRFOsyFyQRTJhJN7rFx5aKLl3KQtyH210XTVGEfW85Zi4Bl13YndlXNeFLzp/ZmTPfN3Nm7pmzgrCHPewhaajV6uyBEaKSEH5HlAmSEDGICC+LMvErhvAybZMQHqZ9aF86RrjZGJS/OizK+IyEyK+STIDHRJnY6FjqI+PEP/1Sd4eISLcoYy8v8Wgh2Et9SaPa2zNCXhyZbBYRWUqWeJQh7KK+00Zco9HkKCuVauJypOEuOldKyUuSNk9EeCT95MlGWNG5JG1eSsjT1VBujwyRl/4VMabWam9JWgBv2HzYfQ6ebHoW7rn3PsjLLwBBEBSrfeyJRER0Jkd+ZLKZdbJzw5PQeOQoZOfkbJEOt+zsbHi99T04+9k4j4D1AZk8nRD5sxp8UETEyTgRqB59fEfikVZ44FZ4+cTb7DuBsIte2/yrj0gP6yTPHDvORD7cXnjlTY6dIN1c5CWN9pAoYw+L885+Dezbt59bwP7cXOjoO88mQMbe/i8m72ZffZoeMK7OU8+/GJNocXExtLa2wtTUFAwNDSlnYfO35mMvse+CjM8wkadJFs1TWB2X3F8WRbq0tBTa2tpAr9fD+vo6hKO3txeysrKUfg9WPMRxK2ErUwKoZJUcV11B4QGFTElJCbS0tIBOp4siHYmuri5lzJ13HeYQQKB/ePKR+OGD8Ls8TjdXnRd0TH5+AZcACZFTDPFPUKYECILAKQBr4gqQEJnlcXryrVPbBFRXV0NNTU0U4ch2Oua1Eyd5d8AQX4BMrvM4DQRDoFart4ipVCqora2NEhDZTscEAkHeHfiDJYT8PE5/mjNDopiZM/PugC/lAqj9ubLGTX55ZZWPPKsA3hCiNmuycgswzFsSEMAQQryHmNrn4zoIBkPM5Om5OT+uS2QHDCm/RjdN+72BWcDX+iv85GXGa5T3QxZulFh88rOJkZcZP2S8qUSkxUMyvvtZUgneZC5zAjBbMsebTlMbkDEcf/UNKK+oiEk+FApBVdXD0Hb6ffhkTMsr4gMhHQ8a3bQRPD4/FBUVKemBy+XaVYDJZFL61NfXg8frh28uGdPzoGGpRnw8egEWrc4tcu3t7Qq5pqamHdNp2lZXV6f06evr22pfsDjgo9EL8cKnS+DF4ODEbbEe9SaLYxtBt9sNZWUbj5vGxkZwOBxKyFCzWq3Q0NCg/FZVVQWBQGDb2EWrM8bNg10J10036qB4PdLpdzPzO4aIzWaD8vLyXZ+XlZWVirCd8O2PV6NDh86NyBEhGdDtC3dKD58/ENw1zj0ej/LioqlzYWGhYjQL7enpAZ/Pt+s4nz8Ag5EHG5EOIdWlxYuX5yBd0E0bt5UWU1bk7Z6YyN0s7lquLaVNgNnu2lx5mc4ppL68jjsTSZ25UmxEOlJeXg/HjPGX0yur7t0PQYL4e80TmjXZ2oVM4IcrlkNmu2uaJ4WOlVqb7a5L1KeQaUwb5ssWLA6y5vFy78ia2xtctDmx/uerDwg3GzTJumxcPGqyOMZ++33ZvvzXqnvV7b0RDIWA2qrbc4O2OZeu2xfM10ZnjObn/hN/s+5hD8L/H/8Anku/nJd3yY8AAAAASUVORK5CYII="
            />
          </div>
//////////////////
        </div>
      </div>
    </>
  );
}
