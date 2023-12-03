import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  const pageSize = 9;
  const [progress, setProgress] = useState(0)


    return (
      <BrowserRouter>
      <div>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route exact path="/" element ={ <News setProgress={setProgress} key="general" pageSize = {9} country="us" category="general"/>}/>  
        <Route exact path="/business" element ={ <News setProgress={setProgress} key="business" pageSize = {9} country="us" category="business"/>}/>  
        <Route exact path="/entertainment" element ={ <News setProgress={setProgress} key="entertainment" pageSize = {9} country="us" category="entertainment"/>}/> 
        <Route exact path="/health" element ={ <News setProgress={setProgress} key="health" pageSize = {9} country="us" category="health"/>}/> 
        <Route exact path="/science" element ={ <News setProgress={setProgress} key="science" pageSize = {9} country="us" category="science"/>}/> 
        <Route exact path="/sports" element ={ <News setProgress={setProgress} key="sports" pageSize = {9} country="us" category="sports"/>}/> 
        <Route exact path="/technology" element ={ <News setProgress={setProgress} key="technology" pageSize = {9} country="us" category="technology"/>}/> 
        <Route exact path="/sports" element ={ <News setProgress={setProgress} key="sports" pageSize = {9} country="us" category="sports"/>}/>
        </Routes> 
      </div>
      </BrowserRouter>
    )

}

export default App ;
