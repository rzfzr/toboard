
import TogglClient from "toggl-api";
import { Entry, Favorite } from "../typings/my-types";

export const togglClient = new TogglClient({
    apiToken: process.env.REACT_APP_TOGGL_API
});
export const customClient = {
    toggle: (entry: Entry | Favorite) => {
        togglClient.getCurrentTimeEntry((err: any, timeEntry: any) => {
            if (err) console.log(err);
            else {
                if (timeEntry) {
                    console.log("Something already running: ", timeEntry.description, timeEntry.pid);
                    console.log("Checking if it is:", entry);
                    if ((timeEntry.pid === entry.pid || 0) && timeEntry.description === entry.description) {
                        console.log('Matched! Stopping');
                        customClient.stopEntry(timeEntry.id)
                    } else {
                        console.log('Not Matched! Starting new');
                        customClient.start(entry);
                    }
                } else {
                    console.log("Nothing running! Starting new");
                    customClient.start(entry);
                }
            }
        })
    },
    start(entry: Entry | Favorite) {
        console.log("Creating: ", entry);
        togglClient.startTimeEntry({
            description: entry.description,
            pid: entry.pid,
        },
            (err: any, timeEntry: any) => {
                if (err) console.log(err);
                else {
                    console.log("succefully started: ", timeEntry);
                    // this.$store.state.timeEntries.push(timeEntry);

                    // this.$store.commit("setRunningEntry", timeEntry);
                }
            }
        );
    },
    stopEntry: (entryID: number) => {
        console.log("Stopping: " + entryID);
        togglClient.stopTimeEntry(entryID, (err: any, timeEntry: Entry) => {
            if (err) console.log(err);
            else {
                console.log("succefully stopped ", timeEntry);
                // this.$store.commit("setRunningEntry", {});
            }
        });
    },
    // getProject(entry) {
    //     return this.$store.state.projects.find(p => p.id == entry.pid)
    // },
    // getSumEntries(entryDescription) {
    //     let goalEntries = [];
    //     let goalSum = 0;
    //     this.$store.state.timeEntries.forEach((entry) => {
    //         if (entry.description == entryDescription && entry.duration > 0) {
    //             goalEntries.push(entry);
    //             goalSum += entry.duration;
    //         }
    //     });
    //     return goalSum;
    // }
}