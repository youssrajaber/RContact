import React, { useContext, useState } from "react";
import { v4 as uuidy4 } from "uuid";
import { cnt } from "./Contact";
import { Link } from "react-router-dom";
export default function Contacts() {
  const {
    id,
    nom,
    tele,
    ville,
    search,
    contacte,
    setcontact,
    Addcontact,
    DeletContact,
    setnom,
    settele,
    setville,
    setsearch,
    FunSearch,
    color,
  } = useContext(cnt);
  const sbmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="bg-light w-75 mx-auto my-5 py-3 px-4 shadow bg-body rounded"
      style={{ height: "70vh" }}
    >
      <h1 className="text-center mb-5">Contact Manager App</h1>
      <div className="parent">
        <form action="" onSubmit={sbmit} className="w-75 mx-auto ">
          <div>
            <h4>
              <label htmlFor="">Nom</label>
            </h4>
            <input
              type="text"
              name=""
              id=""
              value={nom}
              onChange={(e) => {
                setnom(e.target.value);
              }}
              className="w-100 form-control "
            />
          </div>
          <div>
            <h4>
              <label htmlFor="">Ville</label>
            </h4>
            <input
              type="text"
              name=""
              id=""
              value={ville}
              onChange={(e) => {
                setville(e.target.value);
              }}
              className="w-100 form-control  "
            />
          </div>
          <div>
            <h4>
              <label htmlFor="">Telephone</label>
            </h4>
            <input
              type="number"
              name=""
              id=""
              value={tele}
              onChange={(e) => {
                settele(e.target.value);
              }}
              className="w-100 form-control  "
            />
          </div>
          <div className="d-flex justify-content-between py-3 ">
            <h4>
              <button className="px-3 py-1"
                onClick={Addcontact}
                style={{
                  backgroundColor: "transparent",
                  border: `5px solid ${color}`,
                  borderRadius: "5px",
                  fontWeight: "bold",
                  color: color,
                }}
              >
                Add
              </button>
            </h4>
            <Link to="/">
              <h4 >
                <button
                className="px-3 py-1"
                  style={{
                    backgroundColor: "transparent",
                    border: `5px solid ${color}`,
                    borderRadius: "5px",
                    fontWeight: "bold",
                    color: color,
                  }}
                >
                  Cancel
                </button>
              </h4>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
