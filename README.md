# toboard
An alternative [Toggl](https://toggl.com/ "Toggl's Homepage") client, powered by the [official API](https://github.com/toggl/toggl_api_docs "API's Repository")

The main idea is to have a dashboard with period specific goals and a way to visualize them.

I started [this project](https://github.com/rzfzr/toboard-legacy) in VueJS as it was my preferred framework, however I felt motiveted into switching after getting a abysmal result on Toggl's React test.

# How to run locally

1. Clone the project

```
git clone https://github.com/rzfzr/toboard.git
```

2. Change to the directory

```
cd toboard 
```

3. Install dependencies

```
npm i
```

4. Create .env.local with the following keys:
```
REACT_APP_TOGGL_API=
REACT_APP_FIREBASE_API= 
```

5. Run it 
```
npm run serve
```
6. Use it on http://localhost:3000/