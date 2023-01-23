import React from "react";
import prf from './prf.jpg'

export default function OneContact(props) {
  return (
    <>
      <div className="paret d-flex justify-content-between align-items-center py-3 mx-4">
        <div className="d-flex">
          <img
            src={prf}
            alt=""
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
          <div className="ms-3 d-flex flex-column justify-content-start">
            <h3>{props.nom}</h3>
            <div>{props.tele}</div>
            <span>{props.ville}</span>
          </div>
        </div>
        <div className="">
          <h3
            className="deleticon p-1"
            onClick={props.delet}
            style={{
              cursor:"pointer",
              backgroundColor: "transparent",
              fontWeight: "bold",
              color: props.color,
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </h3>
        </div>
      </div>
    </>
  );
}
