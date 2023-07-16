// import React, { useEffect, useState } from 'react';
// import './App.css';

// const App = () => {
//   const [images, setImages] = useState();

//   useEffect(() => {
//     fetch('images?limit=10')
//       .then(res => res.json())
//       .then(data => {
//         console.log('Success:', data);
//         setImages(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

//   return (
//     <div className='app'>
//       {
//         images && images.map(img => (
//           <div key={img.id} >
//             <img src={`${img.url}.jpg`} alt=''/>
//             <img src={`${img.user.profile_image}.webp`} alt=''/>
//           </div>
//         ))
//       }
//     </div>
//   );
// }

// export default App;
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Header from './components/header/Header'

const App = () => {
  return (
    <Router>
    <div className='app'>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Header />} ></Route> */}
        <Route path='/' element={<Hero />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
