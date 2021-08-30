import './App.css';
import NavigationBar from './components/NavigationBar'
import { Route, Switch } from 'react-router-dom'

import FavoritesPage from './pages/Favorites'
import GoalsPage from './pages/Goals'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path='/favorites' exact>
            <FavoritesPage />
          </Route>
          <Route path='/goals' >
            <GoalsPage />
          </Route>
        </Switch>
        <NavigationBar />
      </header>
    </div>
  );
}

