// 24h day breakdown by age group — ATUS 2003-2020 weighted averages
// Buckets: sleep, work, screens, home (chores/meals/errands), hobbies, social
const DAY_BY_AGE = {
  "15-29": {
    "sleep": 9.135,
    "work": 4.376,
    "screens": 2.365,
    "home": 5.382,
    "hobbies": 1.579,
    "social": 1.163,
    "_total": 24.0
  },
  "30-44": {
    "sleep": 8.451,
    "work": 4.551,
    "screens": 2.338,
    "home": 6.789,
    "hobbies": 0.952,
    "social": 0.918,
    "_total": 24.0
  },
  "45-59": {
    "sleep": 8.323,
    "work": 4.305,
    "screens": 3.014,
    "home": 6.407,
    "hobbies": 1.028,
    "social": 0.924,
    "_total": 24.0
  },
  "60+": {
    "sleep": 8.71,
    "work": 1.347,
    "screens": 4.69,
    "home": 6.709,
    "hobbies": 1.477,
    "social": 1.068,
    "_total": 24.0
  }
};

const DAY_BUCKET_META = {
  sleep:   {label:"Sleep",              color:"#3D5A7A"},
  work:    {label:"Work & School",       color:"#4E5769"},
  screens: {label:"Screens",             color:"#56B4E9"},
  home:    {label:"Chores, Meals & Errands", color:"#7B5EA7"},
  hobbies: {label:"Hobbies & Exercise",  color:"#009E73"},
  social:  {label:"Social Time",         color:"#F5A623", clickable:true},
};
