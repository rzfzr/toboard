import './App.css';
import NavigationBar from './components/NavigationBar'
import { Route, Switch } from 'react-router-dom'

import FavoritesPage from './pages/Favorites'
import GoalsPage from './pages/Goals'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <Switch>
          <Route path='/' exact>
            <FavoritesPage />
          </Route>
          <Route path='/goals' >
            <GoalsPage />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

