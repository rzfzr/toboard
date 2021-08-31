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

export type Project = {//as given by the api
    name: string,
    wid: integer,
    cid?: integer,
    active: boolean,
    is_private: boolean,
    template?: boolean,
    template_id: BigInteger,
    billable: boolean,
    auto_estimates?: boolean,//premium
    estimated_hours?: integer,//premium
    at: string, //read-only
    color: string,
    rate?: integer, // premium 
    created_at: any,//read-only
}

export type Goal = {
    project: Project,//could be optional
    entry?: Entry,
    target: integer,
}

