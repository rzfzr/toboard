import './App.css';
import NavigationBar from './components/NavigationBar'
import { Route, Switch } from 'react-router-dom'

import FavoritesPage from './pages/Favorites'
import WeeklyPage from './pages/Weekly'
import HomePage from './pages/Home';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/favorites' >
            <FavoritesPage />
          </Route>
          <Route path='/weekly' >
            <WeeklyPage />
          </Route>
        </Switch>
        <NavigationBar />
      </header>
    </div>
  );
}

