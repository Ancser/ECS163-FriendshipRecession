# Friendship Wellbeing Data

`friendship_wellbeing.csv` combines the six selected GSS/YRBSS indicators for the John radar chart.

Selected indicators:
- GSS `HEALTH`: excellent self-rated health.
- YRBSS `H56`: ever had sexual intercourse, used as a romance/sexual-experience proxy.
- GSS `ATTEND`: religious service attendance, converted to monthly-equivalent frequency as a community participation proxy.
- GSS `TRUST`: most people can be trusted.
- YRBSS `H26`: did not feel sad or hopeless for 2+ weeks during the past 12 months.
- GSS `SOCFREND`: social evenings with friends outside the neighborhood, converted to monthly-equivalent frequency.

Sources:
- GSS 1972-2024 cumulative release R3 Stata data: https://gss.norc.org/content/norc/us/en/gss/get-the-data.html
- GSS Data Explorer: https://gssdataexplorer.norc.org/
- CDC YRBS Explorer: https://yrbs-explorer.services.cdc.gov/
- CDC YRBSS data documentation: https://www.cdc.gov/yrbs/data/index.html

Time handling:
- The visualization runs from 2000 to 2022 because the selected GSS indicators end at the 2022 wave.
- YRBSS national trend is odd-year only. The chart uses 1999/2001 values to interpolate the 2000 baseline and 2021/2023 values to interpolate the 2022 endpoint.
