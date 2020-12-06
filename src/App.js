import React, {useState} from 'react';
import './styles.scss'
import Header from "./Components/Head/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Content/Main";
import ErrorBoundary from "./Components/ErrorBoundary";


const App = () => {
  return (
    <div className="wrap">
      <Header/>
      <Main/>
      <Footer />
    </div>
  )
}

export default App