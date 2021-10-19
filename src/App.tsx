import './App.css';
import NavigationBar from './components/NavigationBar'
import { Route, Router } from 'react-router-dom'

import history from './history'

import FavoritesPage from './pages/Favorites'
import WeeklyPage from './pages/Weekly'
import HomePage from './pages/Home';

import { TogglContext } from './TogglContext';
import { useState, useMemo } from 'react';
import { useEffect } from 'react';
import { Entry, Favorite, Goal, Project } from './typings/my-types';
import { togglClient } from './modules/togglClient';


function getPreviousMonday() {
  var date = new Date();
  var day = date.getDay();
  var prevMonday = new Date();
  if (date.getDay() === 0) {
    prevMonday.setDate(date.getDate() - 7);
  } else {
    prevMonday.setDate(date.getDate() - (day - 1));
  }
  prevMonday.setHours(0, 0, 0, 0);
  return prevMonday.toISOString();
}

export default function App() {
  const [entries, setEntries] = useState([] as Array<Entry>)
  const [projects, setProjects] = useState([] as Array<Project>)
  const [goals, setGoals] = useState([] as Array<Goal>)
  const [favorites, setFavorites] = useState([] as Array<Favorite>)
  const providerValue = useMemo(() => ({
    entries, setEntries,
    projects, setProjects,
    goals, setGoals,
    favorites, setFavorites,
  }), [entries, projects, goals, favorites]
  )
  console.log('Received entries and projects', entries, projects)
  useEffect(() => {
    console.log('Rendering App')
    togglClient.getTimeEntries(
      getPreviousMonday(),
      new Date().toISOString(),
      async (err: any, timeEntries: any) => {
        if (err) {
          console.log("Error getting timeEntries: ", err);
        } else {
          console.log("Received timeEntries:", timeEntries)
          timeEntries.forEach((entry: any) => {
            entry.isRunning = entry.duration < 0

          });
          setEntries(timeEntries)
          updateProjects(timeEntries);
        }
      }
    );
    function updateProjects(timeEntries: any) {
      const set = new Set(timeEntries.map((item: { pid: any; }) => item.pid));
      let uniqueProjects = Array.from(set).filter(x => x);
      let projects = [] as Array<Project>;
      uniqueProjects.forEach((entry) => {
        togglClient.getProjectData(entry, (err: any, projectData: any) => {
          if (err) {
            console.log("Error getting projectData for project: ", entry, err);
          } else {
            projectData.sum = 0;
            timeEntries.forEach((entry: any) => {
              if (entry.pid === projectData.id) {
                if (entry.duration > 0) projectData.sum += entry.duration;
              }
            });
            projects.push(projectData)
          }
        });
      });
      setProjects(projects)
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Router history={history}>
          <Route path='/' exact component={HomePage} />
          <TogglContext.Provider value={providerValue}>
            <Route path='/favorites' component={FavoritesPage} />
            <Route path='/weekly' component={WeeklyPage} />
          </TogglContext.Provider>
        </Router>
        <NavigationBar />
      </header>
    </div>
  );
}

