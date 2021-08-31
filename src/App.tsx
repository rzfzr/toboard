import './App.css';
import NavigationBar from './components/NavigationBar'
import { Route, Switch } from 'react-router-dom'

import FavoritesPage from './pages/Favorites'
import WeeklyPage from './pages/Weekly'
import HomePage from './pages/Home';

import TogglClient from "toggl-api";
import { TogglContext } from './TogglContext';
import { useState, useMemo } from 'react';
import { useEffect } from 'react';

const togglClient = new TogglClient({
  apiToken: process.env.REACT_APP_TOGGL_API
});


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

  const [entries, setEntries] = useState([])
  const providerValue = useMemo(() => ({ entries, setEntries }), [entries, setEntries])

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
            entry.isRunning = false

          });





          setEntries(timeEntries)
          // await this.$store.dispatch("setTimeEntries", timeEntries);
          // let running = this.$store.state.timeEntries.find(
          //   (x) => x.duration < 0
          // );
          // this.$store.commit("setRunningEntry", running);
          // updateProjects(timeEntries);
        }
      }
    );
  }, [])


  // function updateProjects(timeEntries: any) {
  //   const set = new Set(timeEntries.map((item: { pid: any; }) => item.pid));
  //   let uniqueProjects = Array.from(set);

  //   console.log("updatingProjects", uniqueProjects);
  //   uniqueProjects.forEach((entry) => {
  //     togglClient.getProjectData(entry, (err: any, projectData: any) => {
  //       if (err) {
  //         console.log("error: ", err);
  //       } else {
  //         projectData.sum = 0;
  //         timeEntries.forEach((entry: any) => {
  //           if (entry.pid == projectData.id) {
  //             if (entry.duration > 0) projectData.sum += entry.duration;
  //           }
  //         });
  //         // this.$store.commit("addProject", projectData);
  //         // this.setGoals();
  //         console.log('GoalSetting?', projectData)
  //       }
  //     });
  //   });
  // }





  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path='/' exact component={HomePage} />

          <TogglContext.Provider value={providerValue}>
            <Route path='/favorites' component={FavoritesPage} />
            <Route path='/weekly' component={WeeklyPage} />
          </TogglContext.Provider>
        </Switch>
        <NavigationBar />
      </header>
    </div>
  );
}

