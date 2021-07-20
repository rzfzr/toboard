import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'

import FavoritesPage from './pages/Favorites'
import GoalsPage from './pages/Goals'

export default function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <FavoritesPage />
        </Route>
        <Route path='/Goals' >
          <GoalsPage />
        </Route>
      </Switch>
    </div>
  );
}

