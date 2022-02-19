const TogglClient = require('@natterstefan/toggl-api');

export const togglClient = new TogglClient({
    apiToken: process.env.REACT_APP_TOGGL_API
});