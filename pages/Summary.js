// 'use client';
// import { useState } from 'react';
// function Summary({ formData }) {
//   console.log("form data ",formData);
//   return (
//     formData.step===2?
//     (<div id='summary'>
//       <h2>Summary</h2>
      
//       <p>Form Type: Form A</p>
//       <p>Age:{formData.age} </p>

//       <p>DC Shows:{formData.dc} </p>
      
//     </div>):(<div id='summary'>
//       <h2>Summary</h2>
      
//       <p>Form Type: Form B</p>
//       <p>Age:{formData.age} </p>
//       <p>Marvel Shows:{formData.marvelShows} </p>
      
//     </div>)

//   );
// }
// export default Summary;

"use client";
import { useState } from "react";
function Summary({ formData }) {
  return (
    <div id="summary">
      <h2>Summary</h2>
      <p>Form Type: {formData.type}</p>
      <p>Age: {formData.age}</p>
      {formData.dcShows ? (
        <p>DC Shows: {formData.dcShows}</p>
      ) : (
        <p>Marvel Shows: {formData.marvelShows}</p>
      )}
    </div>
  );
}
export default Summary;
