import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Components/Header'; 

const Routers = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route exact path="/Header" element={<Header/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default Routers;
