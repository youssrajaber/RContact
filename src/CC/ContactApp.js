import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { cnt } from "./Contact";
import OneContact from "./OneContact";
export default function ContactApp() {
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
    searchlst,
    setsearchlst,
    color,
    setcolor,
  } = useContext(cnt);
  return (
    <div
      className="bg-light w-75 mx-auto my-5 shadow p-3 mb-5 bg-body rounded"
      style={{ maxHeight: "42rem", height: "80vh", overflowY: "auto" }}
    >
      <div className="d-flex justify-content-between p-3 px-4">
        <h2>
          <span> Color </span>
          <input
            type="color"
            defaultValue={color}
            onChange={(e) => {
              setcolor(e.target.value);
            }}
          />
        </h2>
        <h2>Contacts</h2>
        <Link to="/Add">
          <h2>
            <i class="fa-solid fa-plus" style={{ color: color }}></i>
          </h2>
        </Link>
      </div>
      <div className="py-3 mx-4 position-relative">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
            FunSearch(e.target.value);
          }}
          style={{ textIndent: "2rem", width: "93%" }}
          className="form-control"
        />
        <h4
          className="position-absolute top-50 start-0 translate-middle ms-4 "
          style={{ color: color }}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </h4>
        <h3
          style={{
            color: color,
            border: `5px solid ${color}`,
            borderRadius: "5px",
            cursor: "pointer",
            left: "98%",
          }}
          className="position-absolute top-50 translate-middle "
          onClick={() => {
            setcontact(contacte.sort((a, b) => a.nom.localeCompare(b.nom)));
            setsearchlst([]);
          }}
        >
          <i class="fa-solid fa-arrow-down-a-z"></i>
        </h3>
      </div>
      <div className="d-flex justify-content-end py-3 mx-4"></div>
      {searchlst.length > 0
        ? searchlst.map((el, index) => {
            return (
              <div key={index} className="bg-light rounded-pill mb-4">
                <div className="paret d-flex justify-content-between align-items-center py-3 mx-4">
                  <div className="d-flex">
                    <img
                      src="prf.jpg"
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="ms-3 d-flex flex-column justify-content-start">
                      <h3>{el.nom}</h3>
                      <div>{el.tele}</div>
                      <span>{el.ville}</span>
                    </div>
                  </div>
                  <div className="">
                    <h3
                      className="deleticon p-1"
                      onClick={() => DeletContact(el.id)}
                      style={{
                        backgroundColor: "transparent",

                        fontWeight: "bold",
                        color: color,
                      }}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
      <br />
      {searchlst.length > 0
        ? contacte.map((el, index) => {
            return (
              <div
                className="bg-light rounded-pill mb-4"
                style={{ display: "none" }}
              >
                <OneContact
                  key={index}
                  nom={el.nom}
                  ville={el.ville}
                  tele={el.tele}
                  imgsrc="prf.jpg"
                />
              </div>
            );
          })
        : contacte.map((el, index) => {
            return (
              <div
                className="bg-light rounded-pill mb-4"
                style={{ display: "block" }}
              >
                <OneContact
                  key={index}
                  nom={el.nom}
                  ville={el.ville}
                  tele={el.tele}
                  imgsrc="prf.jpg"
                  delet={() => DeletContact(el.id)}
                  color={color}
                />
              </div>
            );
          })}
    </div>
  );
}
