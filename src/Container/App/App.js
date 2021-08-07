import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home';
import Category from '../../Page/Category/Category';
import Containers from '../Containers/Containers';
import Product from '../../Components/Product/Product';
import ThemeContext from '../../Container/Context/theme-context'
import { useEffect, useState } from 'react'
import colors from '../../Data/colors';
import MobileApps from '../../Page/MobilApp/MobilApp';
import Help from '../../Page/Help/Help';
function App() {
  const [theme, setTheme] = useState("dark")
  const [changeThemeColors, setChangeThemeColors] = useState(colors.dark)
  useEffect(() => {
    setChangeThemeColors(colors[theme])
  }, [theme])
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme, colors: changeThemeColors }}>
        <Containers >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mobilApp" component={MobileApps}/>
            <Route path="/help" component={Help}/>
            <Route path="/:category" exact component={Category} />
            <Route path="/:category/:id" component={Product} />
          </Switch>
        </Containers >
      </ThemeContext.Provider>
    </div >
  );
}

export default App;
