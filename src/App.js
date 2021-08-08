import React, {useState} from 'react';
import './App.css';
import Header from './components/Header.jsx'
import ThemeContext from './context/ThemeContext';



function App() {

  const [theme, updateTheme] = useState("englishColors");
  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>
      <div className={theme}>
    
      <Header></Header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
