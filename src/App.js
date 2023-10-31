
import './App.css';
import Navbar from './components/navbar';
import News from './components/news';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_APIKEY

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey} pageSize={10} country={"in"} category="general" />}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey} pageSize={10} country={"in"} category="business" heading="Top Headlines-Business" />}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey} pageSize={10} country={"in"} category="health" heading="Top Headlines-Health" />}></Route>
          <Route exact path='/entertaiment' element={<News setProgress={setProgress} apikey={apikey} pageSize={10} country={"in"} category="entertainment" heading="Top Headlines-Entertainment" />}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey} pageSize={10} country={"in"} category="sports" heading="Top Headlines-Sports" />}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} apikey={apikey} pageSize={10} country={"in"} category="technology" heading="Top Headlines-Technology" />}></Route>
        </Routes>

      </Router>

    </div>
  )
}
export default App