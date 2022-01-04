import React, { createContext, useState } from "react";

//! This Component Contatins Student Data

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [students, setStudents] = useState([
    {
      name: "ManiKumar",
      age: 22,
      course: "MERN",
      batch: "September",
      id: "1",
    },
    {
      name: "RaviTeja",
      age: 25,
      course: "MERN",
      batch: "July",
      id: "2",
    },
    {
      name: "VamshiKalyan",
      age: 35,
      course: "MERN",
      batch: "November",
      id: "3",
    },
    {
      name: "Vaibhav",
      age: 35,
      course: "MERN",
      batch: "December",
      id: "4",
    },
  ]);

  return (
    <StudentContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentContext.Provider>
  );
};
