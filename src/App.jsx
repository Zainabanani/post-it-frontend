import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
     Login,
     Register,
     Error,
     Allstories,
     Mystories,
     Singlestories,
     Edit,
     Create,
     Home,
     Welcome,
   } from "./pages";

import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path="/register" element={<Register/>} />
         <Route path="/login" element={<Login />} />
        <Route path="/allstories" element={<Allstories />} />
        <Route path="/welcome" element={<Welcome />} />
            <Route path="/mystories" element={<Mystories />} />
            <Route path="/create" element={<Create />} />
           <Route path="/single/:storyId" element={<Singlestories />} />
           <Route path="/edit/:storyId" element={<Edit />} />
           <Route path="*" element={<Error />} />
      </Routes>
    </Router>



    
  )
}

export default App




















// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   Login,
//   Register,
//   Error,
//   Allstories,
//   Mystories,
//   Singlestories,
//   Edit,
//   Create,
//   Home,
// } from "./pages";
// function App() {
//     <>
//       <Router>
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register/>} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/allstories" element={<Allstories />} />
//             <Route path="/mystories" element={<Mystories />} />
//             <Route path="/create" element={<Create />} />
//             <Route path="/single/:storyId" element={<Singlestories />} />
//             <Route path="/edit/:storyId" element={<Edit />} />
//             <Route path="*" element={<Error />} />
//         </Routes>
//       </Router>
//     </>
// }

// export default App
