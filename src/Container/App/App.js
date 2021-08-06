import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home';
import Category from '../../Page/Category/Category';
import Containers from '../Containers/Containers';
import Product from '../../Components/Products/Product';
import ThemeContext from '../../Container/Context/theme-context'
import { useState } from 'react'
function App() {
  const [theme, setTheme] = useState("dark")
  return (
    <div className="App">
      <ThemeContext.Provider value={{theme,setTheme}}>
        <Containers >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:category" exact component={Category} />
            <Route path="/category/:id" component={Product} />
          </Switch>
        </Containers >
      </ThemeContext.Provider>
    </div >
  );
}

export default App;
