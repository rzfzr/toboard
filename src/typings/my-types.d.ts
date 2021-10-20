export type Entry = {
    at: string,
    billable: boolean,
    description: string,
    duration: integer,
    duronly: boolean,
    guid: string,
    id: integer,//should be tid?
    pid?: integer,
    start: string,
    stop: string,
    uid: integer,
    wid: integer,// required if pid or tid not supplied
    //above this is as given by the api, below are my computed values
    isRunning: boolean,
}
export type Favorite = {
    description: any,
    pid?: integer
    project: any,//this should be of Project type
    position: integer,
    isRunning?: boolean,
}

export type Project = {//as given by the api
    id: integer,
    name: string,
    wid: integer,
    cid?: integer,
    active: boolean,
    is_private: boolean,
    template?: boolean,
    template_id: integer,
    billable: boolean,
    auto_estimates?: boolean,//premium
    estimated_hours?: integer,//premium
    at: string, //read-only
    color?: string,//I assume it to be required, but I don't need it
    rate?: integer, // premium 
    created_at: any,//read-only
    hex_color: string, //I assume it to be required, it is not documented
    sum: integer,
}

export type Goal = {
    description: string,
    project: Project,
    entry?: Entry,
    target: integer,
    position: integer,
    isRunning: boolean
    // type: 'daily' | 'weekly' | '...',
    // group?: integer,
}

