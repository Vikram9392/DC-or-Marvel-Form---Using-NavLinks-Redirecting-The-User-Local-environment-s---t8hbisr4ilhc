// 'use client';
// import { useState, useEffect } from 'react';
// import Summary from './Summary';

// function FormB({ onSubmit, age }) {
//   // console.log("onSubmit ",onSubmit);
//   const [marvelShows, setMarvelShows] = useState('');
//   const[formData,setFormData] = useState({});
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let updated = {...onSubmit};
//     updated.marvelShows=marvelShows;
//     setFormData(updated);
//     // console.log(dc);
//   };

//   return (
//     Object.keys(formData).length>0 && marvelShows?<Summary formData={formData}/>:<form id='marvel' onSubmit={handleSubmit}>
//       <h2>Form B</h2>
//       <label>
//         Select Marvel Shows:
//         <select onChange={(e)=>{setMarvelShows(e.target.value)}} value={marvelShows}>
//           <option value=''>--Select--</option>
//           <option value='WandaVision'>WandaVision</option>
//           <option value='The Falcon and the Winter Soldier'>
//             The Falcon and the Winter Soldier
//           </option>
//           <option value='Loki'>Loki</option>
//           <option value='What If...?'>What If...?</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Enter your age:
//         <input type='number' value={age} disabled />
//       </label>
//       <br />
//       <button id='submit-marvel' type='submit'>
//         Submit
//       </button>
//     </form>
//   );
// }
// export default FormB;

'use client';
import { useState, useEffect } from 'react';
import Summary from './Summary';

function FormB({ onSubmit, age }) {
  // console.log("onSubmit ",onSubmit);
  const [marvelShows, setMarvelShows] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      type: 'Form B',
      age: age,
      dcShows: null,
      marvelShows: marvelShows,
    });
  };

  const handleChange = (event) => {
    setMarvelShows(event.target.value);
  };

  return (
    <form id='marvel' onSubmit={handleSubmit}>
      <h2>Form B</h2>
      <label>
        Select Marvel Shows:
        <select value={marvelShows} onChange={handleChange}>
          <option value=''>--Select--</option>
          <option value='WandaVision'>WandaVision</option>
          <option value='The Falcon and the Winter Soldier'>
            The Falcon and the Winter Soldier
          </option>
          <option value='Loki'>Loki</option>
          <option value='What If...?'>What If...?</option>
        </select>
      </label>
      <br />
      <label>
        Enter your age:
        <input type='number' value={age} disabled />
      </label>
      <br />
      <button id='submit-marvel' type='submit'>
        Submit
      </button>
    </form>
  );
}
export default FormB;
