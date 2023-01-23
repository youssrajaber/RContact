/* eslint-disable react/jsx-no-undef */
import React, { createContext, useEffect, useId, useState } from "react";
// import { redirect } from "react-router-dom";
import { v4 as uuidy4 } from "uuid";
export const cnt = createContext("");
export default function Contact({ children }) {
  const [color, setcolor] = useState("#e44a50");
  const [nom, setnom] = useState("");
  const [tele, settele] = useState("");
  const [ville, setville] = useState("");
  const [search, setsearch] = useState("");
  const [searchlst, setsearchlst] = useState([]);
  const [contacte, setcontact] = useState([
    { nom: "youssra Jaber", tele: "098654221", ville: "tanger" },
  ]);
  // id aléatoire
  const id = uuidy4();
  //Pour Ajouter
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  const Addcontact = () => {
    let contcts = [...contacte];
    if (nom === "" || tele === "" || ville === "") {
      alert("Les informations sont obligatoir");
    } else {
      let contct = {
        id: id,
        nom: nom,
        tele: tele,
        ville: ville,
      };
      contcts.push(contct);
      setcontact(contcts);
      setnom("");
      settele("");
      setville("");
      alert("Le Nouveau Contact ajouter avec Succès ");
    }
  };

  const DeletContact = (idt) => {
    let cntt = contacte.filter((t) => {
      return t.id !== idt;
    });
    setcontact(cntt);
    setsearchlst([]);
  };
  const FunSearch = (val) => {
    const regex = new RegExp(`^${val}`);
    let cntt = contacte.filter((t) => {
      return regex.test(t.ville);
    });
    setsearchlst(cntt);
  };
  return (
    <cnt.Provider
      value={{
        id,
        nom,
        tele,
        ville,
        search,
        setnom,
        settele,
        setville,
        setsearch,
        contacte,
        setcontact,
        Addcontact,
        DeletContact,
        FunSearch,
        searchlst,
        setsearchlst,
        color,
        setcolor,
      }}
    >
      {children}
    </cnt.Provider>
  );
}
