
import { Entry, Favorite } from "../typings/my-types";
import { togglClient } from './togglClient';

export function Toggle(entry: Entry | Favorite, setCurrent: any) {
    togglClient.getCurrentTimeEntry((err: any, timeEntry: any) => {
        if (err) console.log(err);
        else {
            if (timeEntry) {
                console.log("Something already running: ", timeEntry.description, timeEntry.pid);
                console.log("Checking if it is:", entry);
                if ((timeEntry.pid === entry.pid || 0) && timeEntry.description === entry.description) {
                    console.log('Matched! Stopping');
                    Stop(timeEntry.id, setCurrent)
                } else {
                    console.log('Not Matched! Starting new');
                    Start(entry, setCurrent);
                }
            } else {
                console.log("Nothing running! Starting new");
                Start(entry, setCurrent);
            }
        }
    })
}
export function Start(entry: Entry | Favorite, setCurrent: any) {
    togglClient.startTimeEntry({
        description: entry.description,
        pid: entry.pid,
    },
        (err: any, timeEntry: any) => {
            if (err) console.log(err);
            else {
                setCurrent(timeEntry)
                console.log(setCurrent, "Succefully started: ", timeEntry);
            }
        }
    );
}

export function Stop(entryID: number, setCurrent: any) {
    console.log("Stopping: " + entryID);
    togglClient.stopTimeEntry(entryID, (err: any, timeEntry: Entry) => {
        if (err) console.log(err);
        else {
            setCurrent("{}")
            console.log("succefully stopped ", timeEntry);
        }
    });
}
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

