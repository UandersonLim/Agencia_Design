import Head from './Components/Header/index.jsx';
import Banner from './Components/Banner/index.jsx';
import { Work_experience } from './Components/Experience/index.jsx';
import Footer from './Components/Footer/index.jsx';
import { useState } from 'react';


function App() {
  let light = 'light'
  let Dark = 'Dark'
  
const [theme, setTheme] = useState(light)

const togglerTheme = () =>{
    setTheme(theme === light ? Dark : light)
};

  return (
    <>
      <Head eventTheme={togglerTheme} eventType={theme} />
      <Banner eventTheme={togglerTheme} eventType={theme}/>
      <Work_experience eventTheme={togglerTheme} eventType={theme}/>
      <Footer  eventTheme={togglerTheme} eventType={theme}/>
    </>
  )
}

export default App
