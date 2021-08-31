export type Entry = {
    at: string,
    billable: boolean,
    description: string,
    duration: number,
    duronly: boolean,
    guid: string,
    id: number,
    pid: number,
    start: string,
    stop: string,
    uid: number,
    wid: number,
    //above this is as given by the api, below are my computed values
    isRunning: boolean,
}

