// import React, { useState, useMemo } from 'react';
// import { debounce } from 'lodash';

// const students = [
//   { name: "Suhaas", regNo: "12345" },
//   { name: "Aarav", regNo: "23456" },
//   { name: "Nisha", regNo: "34567" },
//   { name: "Riya", regNo: "45678" },
//   { name: "Tarun", regNo: "56789" }
// ];

// export default function Home() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState(students);

//   // Debounced search function (waits 400ms)
//   const debouncedSearch = useMemo(
//     () =>
//       debounce((searchTerm) => {
//         const filtered = students.filter(
//           (s) =>
//             s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             s.regNo.includes(searchTerm)
//         );
//         setResults(filtered);
//       }, 400),
//     []
//   );

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     debouncedSearch(value);
//   };

//   return (
//     <div style={{ padding: "2rem", textAlign: "center" }}>
//       <h2>Debounced Student Search</h2>
//       <input
//         type="text"
//         placeholder="Search by name or Reg No"
//         value={query}
//         onChange={handleChange}
//         style={{
//           padding: "10px",
//           width: "280px",
//           border: "1px solid #ccc",
//           borderRadius: "5px",
//           marginBottom: "20px"
//         }}
//       />
//       <ul>
//         {results.length > 0 ? (
//           results.map((student, index) => (
//             <li key={index}>
//               {student.name} ({student.regNo})
//             </li>
//           ))
//         ) : (
//           <li>No matching students found.</li>
//         )}
//       </ul>
//     </div>
//   );
// }

import React, { useMemo, useState } from "react";
import { debounce } from 'lodash';

const students = [
  { name: "Suhaas", regNo: "12345" },
  { name: "Aarav", regNo: "23456" },
  { name: "Nisha", regNo: "34567" },
  { name: "Riya", regNo: "45678" },
  { name: "Tarun", regNo: "56789" }
];

function Home() {

  const [query,setQuery]=useState('');
  const [results,setResults] = useState(students);

  const searchItems = useMemo(() =>
    debounce ((searchItem) => {
      const filtered = students.filter((s) => 
        s.name.toLowerCase().includes(searchItem.toLowerCase()) || s.regNo.includes(searchItem));

      setResults(filtered);
    },400),
  []);

  const handleChange = (e) => {
    const {value} = e.target;
    setQuery(value);
    searchItems(value)
  }

  return (
    <>
    <h2>Search user Needs</h2>
      <input value={query} type="text" placeholder="search" onChange={handleChange}/>

      <div>
        {results.map((item) => {
          return (
            <>
              <h2>{item.name}---{item.regNo}</h2>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Home;