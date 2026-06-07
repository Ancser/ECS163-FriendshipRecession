// Companion time by age group and year
// Source: Our World in Data / BLS ATUS
const COMPANION_YEAR_DATA = [
  {
    "e": "All ages",
    "yr": 2010,
    "alone": 5.609,
    "friends": 1.031,
    "children": 2.178,
    "family": 1.517,
    "partner": 2.877,
    "coworkers": 2.216
  },
  {
    "e": "All ages",
    "yr": 2011,
    "alone": 5.566,
    "friends": 1.012,
    "children": 2.175,
    "family": 1.417,
    "partner": 2.817,
    "coworkers": 2.348
  },
  {
    "e": "All ages",
    "yr": 2012,
    "alone": 5.511,
    "friends": 1.0,
    "children": 2.124,
    "family": 1.477,
    "partner": 2.894,
    "coworkers": 2.321
  },
  {
    "e": "All ages",
    "yr": 2013,
    "alone": 5.511,
    "friends": 1.019,
    "children": 2.176,
    "family": 1.482,
    "partner": 2.914,
    "coworkers": 2.237
  },
  {
    "e": "All ages",
    "yr": 2014,
    "alone": 5.543,
    "friends": 0.927,
    "children": 2.055,
    "family": 1.408,
    "partner": 2.88,
    "coworkers": 2.393
  },
  {
    "e": "All ages",
    "yr": 2015,
    "alone": 5.657,
    "friends": 0.895,
    "children": 1.987,
    "family": 1.414,
    "partner": 2.91,
    "coworkers": 2.255
  },
  {
    "e": "All ages",
    "yr": 2016,
    "alone": 5.736,
    "friends": 0.873,
    "children": 2.028,
    "family": 1.295,
    "partner": 2.871,
    "coworkers": 2.286
  },
  {
    "e": "All ages",
    "yr": 2017,
    "alone": 5.744,
    "friends": 0.798,
    "children": 1.946,
    "family": 1.363,
    "partner": 2.957,
    "coworkers": 2.183
  },
  {
    "e": "All ages",
    "yr": 2018,
    "alone": 5.875,
    "friends": 0.779,
    "children": 1.99,
    "family": 1.372,
    "partner": 2.875,
    "coworkers": 2.206
  },
  {
    "e": "All ages",
    "yr": 2019,
    "alone": 6.043,
    "friends": 0.647,
    "children": 1.825,
    "family": 1.316,
    "partner": 2.922,
    "coworkers": 2.201
  },
  {
    "e": "All ages",
    "yr": 2021,
    "alone": 6.809,
    "friends": 0.443,
    "children": 1.886,
    "family": 1.223,
    "partner": 2.964,
    "coworkers": 1.633
  },
  {
    "e": "All ages",
    "yr": 2022,
    "alone": 6.569,
    "friends": 0.485,
    "children": 1.818,
    "family": 1.222,
    "partner": 3.033,
    "coworkers": 1.632
  },
  {
    "e": "All ages",
    "yr": 2023,
    "alone": 6.731,
    "friends": 0.486,
    "children": 1.712,
    "family": 1.119,
    "partner": 2.862,
    "coworkers": 1.782
  },
  {
    "e": "All ages",
    "yr": 2024,
    "alone": 6.664,
    "friends": 0.505,
    "children": 1.725,
    "family": 1.193,
    "partner": 2.883,
    "coworkers": 1.728
  },
  {
    "e": "15-29",
    "yr": 2010,
    "alone": 4.133,
    "friends": 2.035,
    "children": 1.671,
    "family": 2.657,
    "partner": 1.249,
    "coworkers": 2.286
  },
  {
    "e": "15-29",
    "yr": 2012,
    "alone": 4.022,
    "friends": 1.893,
    "children": 1.626,
    "family": 2.71,
    "partner": 1.19,
    "coworkers": 2.327
  },
  {
    "e": "15-29",
    "yr": 2014,
    "alone": 4.047,
    "friends": 1.627,
    "children": 1.615,
    "family": 2.628,
    "partner": 1.334,
    "coworkers": 2.521
  },
  {
    "e": "15-29",
    "yr": 2016,
    "alone": 4.431,
    "friends": 1.499,
    "children": 1.334,
    "family": 2.323,
    "partner": 1.104,
    "coworkers": 2.633
  },
  {
    "e": "15-29",
    "yr": 2018,
    "alone": 4.7,
    "friends": 1.504,
    "children": 1.309,
    "family": 2.546,
    "partner": 1.201,
    "coworkers": 2.376
  },
  {
    "e": "15-29",
    "yr": 2021,
    "alone": 6.065,
    "friends": 0.854,
    "children": 1.071,
    "family": 2.285,
    "partner": 1.121,
    "coworkers": 1.978
  },
  {
    "e": "15-29",
    "yr": 2024,
    "alone": 5.58,
    "friends": 0.861,
    "children": 0.887,
    "family": 2.343,
    "partner": 1.165,
    "coworkers": 1.985
  },
  {
    "e": "30-44",
    "yr": 2010,
    "alone": 4.683,
    "friends": 0.79,
    "children": 4.041,
    "family": 1.065,
    "partner": 3.279,
    "coworkers": 2.965
  },
  {
    "e": "30-44",
    "yr": 2014,
    "alone": 4.563,
    "friends": 0.833,
    "children": 3.894,
    "family": 0.997,
    "partner": 3.234,
    "coworkers": 3.27
  },
  {
    "e": "30-44",
    "yr": 2018,
    "alone": 4.902,
    "friends": 0.58,
    "children": 3.83,
    "family": 0.955,
    "partner": 3.04,
    "coworkers": 3.202
  },
  {
    "e": "30-44",
    "yr": 2021,
    "alone": 5.787,
    "friends": 0.313,
    "children": 3.787,
    "family": 0.867,
    "partner": 3.45,
    "coworkers": 2.241
  },
  {
    "e": "30-44",
    "yr": 2024,
    "alone": 5.981,
    "friends": 0.451,
    "children": 3.472,
    "family": 0.806,
    "partner": 3.166,
    "coworkers": 2.374
  },
  {
    "e": "45-59",
    "yr": 2010,
    "alone": 6.327,
    "friends": 0.6,
    "children": 2.023,
    "family": 1.14,
    "partner": 3.097,
    "coworkers": 2.741
  },
  {
    "e": "45-59",
    "yr": 2014,
    "alone": 5.983,
    "friends": 0.607,
    "children": 1.882,
    "family": 0.958,
    "partner": 3.135,
    "coworkers": 2.971
  },
  {
    "e": "45-59",
    "yr": 2018,
    "alone": 6.268,
    "friends": 0.483,
    "children": 2.059,
    "family": 0.967,
    "partner": 3.106,
    "coworkers": 2.79
  },
  {
    "e": "45-59",
    "yr": 2021,
    "alone": 7.182,
    "friends": 0.271,
    "children": 2.067,
    "family": 1.012,
    "partner": 3.033,
    "coworkers": 1.887
  },
  {
    "e": "45-59",
    "yr": 2024,
    "alone": 6.906,
    "friends": 0.398,
    "children": 1.94,
    "family": 0.831,
    "partner": 3.156,
    "coworkers": 2.183
  },
  {
    "e": "60+",
    "yr": 2010,
    "alone": 7.471,
    "friends": 0.642,
    "children": 0.916,
    "family": 1.14,
    "partner": 4.048,
    "coworkers": 0.721
  },
  {
    "e": "60+",
    "yr": 2014,
    "alone": 7.54,
    "friends": 0.632,
    "children": 0.926,
    "family": 1.023,
    "partner": 3.848,
    "coworkers": 0.848
  },
  {
    "e": "60+",
    "yr": 2018,
    "alone": 7.439,
    "friends": 0.553,
    "children": 0.953,
    "family": 1.023,
    "partner": 4.049,
    "coworkers": 0.678
  },
  {
    "e": "60+",
    "yr": 2021,
    "alone": 7.985,
    "friends": 0.347,
    "children": 0.827,
    "family": 0.811,
    "partner": 4.021,
    "coworkers": 0.64
  },
  {
    "e": "60+",
    "yr": 2024,
    "alone": 7.917,
    "friends": 0.345,
    "children": 0.785,
    "family": 0.863,
    "partner": 3.819,
    "coworkers": 0.648
  }
];
const COMPANION_YEARS = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021, 2022, 2023, 2024];
