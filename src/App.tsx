import './App.css';
import NavigationBar from './components/NavigationBar'
import { Route, Switch } from 'react-router-dom'

import FavoritesPage from './pages/Favorites'
import WeeklyPage from './pages/Weekly'
import HomePage from './pages/Home';

import TogglClient from "toggl-api";
const togglClient = new TogglClient({
  apiToken: process.env.REACT_APP_TOGGL_API
});


function getPreviousMonday() {
  var date = new Date();
  var day = date.getDay();
  var prevMonday = new Date();
  if (date.getDay() == 0) {
    prevMonday.setDate(date.getDate() - 7);
  } else {
    prevMonday.setDate(date.getDate() - (day - 1));
  }
  prevMonday.setHours(0, 0, 0, 0);
  return prevMonday.toISOString();
}

export default function App() {
  function updateProjects(timeEntries: any) {
    const set = new Set(timeEntries.map((item: { pid: any; }) => item.pid));
    let uniqueProjects = Array.from(set);

    console.log("updatingProjects", uniqueProjects);
    uniqueProjects.forEach((entry) => {
      togglClient.getProjectData(entry, (err: any, projectData: any) => {
        if (err) {
          console.log("error: ", err);
        } else {
          projectData.sum = 0;
          timeEntries.forEach((entry: any) => {
            if (entry.pid == projectData.id) {
              if (entry.duration > 0) projectData.sum += entry.duration;
            }
          });
          // this.$store.commit("addProject", projectData);
          // this.setGoals();
          console.log('GoalSetting?', projectData)
        }
      });
    });
  }


  togglClient.getTimeEntries(
    getPreviousMonday(),
    new Date().toISOString(),
    async (err: any, timeEntries: any) => {
      if (err) {
        console.log("error: ", err);
      } else {
        console.table(timeEntries)
        // await this.$store.dispatch("setTimeEntries", timeEntries);
        // let running = this.$store.state.timeEntries.find(
        //   (x) => x.duration < 0
        // );
        // this.$store.commit("setRunningEntry", running);
        updateProjects(timeEntries);
      }
    }
  );





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

