# YRBSS Wellbeing Data Source

`../YRBSS_wellbeing.csv` is generated from CDC YRBS Explorer national high school chart data.

Official CDC source pages:
https://yrbs-explorer.services.cdc.gov/#/
https://www.cdc.gov/yrbs/data/national-yrbs-datasets-documentation.html
https://www.cdc.gov/yrbs/data/index.html

API pattern used:
https://yrbs-explorer.services.cdc.gov/api/ChartData?QuestionId={QUESTION_CODE}&LocationId=XX&Yr=9999

`LocationId=XX` is the national dataset. `Yr=9999` returns the trend series. Rows use `StratType=Total` and `Strat=Total`.

Friendship-recession themed indicators:
- Mental Health: H26, transformed as `100 - felt sad or hopeless for 2+ weeks during the past 12 months`.
- Youth Health: H85, direct value for getting 8 or more hours of sleep on an average school night.
- Activity: H76, direct value for being physically active 60+ minutes on 5 or more days.
- Romance: H56, direct value for ever having had sexual intercourse. This is a romance/sexual-experience proxy, not a health score.
- Team: H78, direct value for playing on at least one sports team. This is used as a social participation proxy.
- School Bond: QNCLOSE2PEOPLE, direct value for agreeing they feel close to people at school. This is the closest national YRBSS friendship/belonging proxy available through the Explorer API.

Notes:
- YRBSS does not provide a stable national trend for actual friend count.
- `QNTALKFRIENDACE` looks friend-related, but the national trend API returned no chart rows when checked.
- Most selected indicators cover 2011-2023. `School Bond` is only available for 2021 and 2023 in the Explorer API.

No source JSON files are kept in this folder; the CSV stores each row's `source_question_code` and `source_url`.
