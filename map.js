// ════════════════════════════════════════════════════════
//  DATA SHELLS  (filled from CSVs at runtime)
// ════════════════════════════════════════════════════════
var GALLUP = {
    loneliness: {}, connected: {},
    men_loneliness: {}, women_loneliness: {},
    men_connected:  {}, women_connected:  {}
};

const POLICIES = {
    "United Kingdom": [
        {
            id: "uk1", tag: "national", tagLabel: "National",
            name: "Minister for Loneliness",
            short: "World's first government minister dedicated to loneliness (2018)",
            detail: `<b>Background:</b> Following the Jo Cox Commission on Loneliness, PM Theresa May appointed the world's first Minister for Loneliness in January 2018. The role coordinates cross-government action on social isolation and oversees dedicated funding for organisations working in this space.<br><br>
<b>Key measures:</b> The minister oversees the <em>A Connected Society</em> national strategy (October 2018), an ONS standard measurement framework using "How often do you feel lonely?", and two funds: £98 million for healthy ageing and £20 million for community organisations, including the £11.5 million Building Connections Fund.<br><br>
<b>Effectiveness:</b> Rigorous quantitative evaluation has been difficult even years on. That said, the strategy accelerated the mainstreaming of social prescribing across the NHS and directly inspired Japan, Australia, and others to create similar ministerial roles.<br><br>
<b>Source:</b> <a href="https://commonslibrary.parliament.uk/research-briefings/cbp-8514/" target="_blank">UK Parliament Research Briefing, 2024</a>`
        },
        {
            id: "uk2", tag: "health", tagLabel: "Healthcare",
            name: "Social Prescribing / Link Workers",
            short: "GPs refer lonely patients to community activities instead of medication",
            detail: `<b>Background:</b> Social prescribing lets GPs refer patients experiencing loneliness to non-clinical community resources such as art classes, walking groups, cooking clubs, gardening, and volunteering. These referrals are managed by trained "link workers" who connect patients with local services.<br><br>
<b>Scale:</b> More than 1,000 link workers were deployed across England by 2020 to 2021, with the programme extended further in 2023 and 2024. All GPs in England are now equipped to make referrals.<br><br>
<b>Effectiveness:</b> An evaluation of the Connecting Communities programme found nearly 70% of service users experienced lower loneliness levels, with three-quarters also reporting improved wellbeing. Social prescribing reduces NHS demand while improving outcomes at low cost.<br><br>
<b>Source:</b> <a href="https://www.redcross.org.uk/about-us/news-and-media/media-centre/press-releases/social-prescribing-is-a-vital-part-of-treatment-to-tackle-loneliness" target="_blank">British Red Cross evaluation</a>`
        },
        {
            id: "uk3", tag: "local", tagLabel: "Community",
            name: "Building Connections Fund",
            short: "£11.5 million fund supporting community organisations across England",
            detail: `<b>Overview:</b> The £11.5 million Building Connections Fund supported organisations across England delivering befriending services, community arts groups, digital connection tools, and social activities designed to bring together isolated individuals. A total of 126 organisations received grants of between £30,000 and £100,000.<br><br>
<b>Partners:</b> A joint initiative between the Government, the National Lottery Community Fund (Big Lottery Fund), and the Co-op Foundation. Focus areas included older adults, young people, and care leavers who face the highest risk of isolation.<br><br>
<b>Effectiveness:</b> Individual project evaluations showed reduced loneliness scores among participants. The fund demonstrated that targeted, relatively modest investment can meaningfully reduce social isolation at the community level.<br><br>
<b>Source:</b> <a href="https://hansard.parliament.uk/commons/2018-10-15/debates/3C48CE18-4473-4698-92E2-CF010D786CDC/LonelinessStrategy" target="_blank">UK Parliament, Loneliness Strategy Debate 2018</a>`
        }
    ],
    "Japan": [
        {
            id: "jp1", tag: "national", tagLabel: "National",
            name: "Act on Measures to Address Loneliness and Isolation",
            short: "World's first comprehensive loneliness law, enacted April 2024",
            detail: `<b>Background:</b> Japan enacted the world's first comprehensive national loneliness law on April 1, 2024, positioning loneliness as a societal challenge rather than an individual failing and requiring national and local governments to take concrete action.<br><br>
<b>Key provisions:</b> The law established a Cabinet-level Minister of State for Loneliness, mandated priority plans with specific goals and timelines, created public-private coordination platforms, and provided dedicated funding for NPOs and local government.<br><br>
<b>Context:</b> Japan coined the term <em>hikikomori</em> for extreme social withdrawal. A 2022 Cabinet Office survey found approximately 1.46 million people aged 15 to 64 were living as social recluses, roughly 2% of that age group. The law also addresses <em>kodokushi</em>, or dying alone at home undiscovered.<br><br>
<b>Effectiveness:</b> Still in its early stages, having been enforced in April 2024. Critics note the law does not yet fully account for demographic diversity in how loneliness is experienced. The UK's own strategy, which is older, still lacks rigorous quantitative evaluation, suggesting that meaningful results take many years to emerge.<br><br>
<b>Source:</b> <a href="https://www.oecd.org/en/blogs/2025/03/supporting-opportunities-insights-from-communities/supporting-japanese-people-affected-by-severe-social-isolation-a-case-study.html" target="_blank">OECD, March 2025</a>`
        },
        {
            id: "jp2", tag: "national", tagLabel: "National",
            name: "Minister of State for Loneliness and Isolation",
            short: "Cabinet-level minister appointed 2021 to coordinate anti-loneliness policy",
            detail: `<b>Overview:</b> In 2021, Japan became the second country in the world (after the UK) to appoint a dedicated Cabinet-level minister for loneliness and isolation, reflecting the scale of the hikikomori and kodokushi crises.<br><br>
<b>Actions taken:</b> The minister oversaw a 2022 comprehensive plan of countermeasures that included a 24/7 national loneliness consultation service, expanded counselling and social work programmes, the <em>Hikikomori Voice Station</em> online support platform, and Hikikomori Support Centres across prefectures.<br><br>
<b>International work:</b> Japan and the UK maintain regular ministerial dialogue and share data on loneliness policy outcomes, with both countries treating the issue as a public health priority.<br><br>
<b>Source:</b> <a href="https://isvd.or.jp/en/columns/loneliness-isolation-act-two-years" target="_blank">Institute for Social Value Design, 2026</a>`
        }
    ],
    "South Korea": [
        {
            id: "kr1", tag: "national", tagLabel: "National",
            name: "Lonely Death Prevention and Management Act",
            short: "Law mandating government prevention plans and 5-yearly situation reports",
            detail: `<b>Overview:</b> South Korea's Lonely Death (Godoksa) Prevention and Management Act requires the government to publish a comprehensive prevention plan and a situation report every five years. A "lonely death" is legally defined as dying in social isolation, cut off from family, due to suicide or illness.<br><br>
<b>Numbers:</b> South Korea's Ministry of Health and Welfare recorded 3,661 lonely deaths in 2023, up from 3,559 in 2022. An estimated 244,000 people experienced hikikomori-style social withdrawal in 2022. Middle-aged men are disproportionately at risk.<br><br>
<b>2023 amendment:</b> Reclusive youth can now receive up to 650,000 won (approximately $475) per month in living expenses to help them re-enter society.<br><br>
<b>Seoul initiative:</b> Seoul city authorities announced plans to spend 451.3 billion won (approximately $327 million) over five years to "create a city where no-one is lonely," including 24/7 loneliness counsellors and follow-up in-person visits.<br><br>
<b>Effectiveness:</b> Experts welcome the measures but note that more is needed, particularly given the cultural pressures and stigma around loneliness that are specific to Korean society.<br><br>
<b>Source:</b> <a href="https://edition.cnn.com/2024/10/24/asia/south-korea-loneliness-deaths-intl-hnk" target="_blank">CNN, October 2024</a>`
        }
    ],
    "United States": [
        {
            id: "us1", tag: "national", tagLabel: "National",
            name: "Surgeon General's Advisory on Loneliness",
            short: "2023 six-pillar national framework treating loneliness as a public health crisis",
            detail: `<b>Overview:</b> In May 2023, U.S. Surgeon General Dr. Vivek Murthy issued a landmark Advisory declaring an "epidemic of loneliness and isolation" and laying out a National Strategy to Advance Social Connection built around six foundational pillars.<br><br>
<b>The six pillars:</b>
<ol>
<li><b>Strengthen Social Infrastructure</b>: design built environments that encourage connection and invest in local institutions.</li>
<li><b>Enact Pro-Connection Public Policies</b>: adopt a "connection-in-all-policies" lens across government agencies.</li>
<li><b>Mobilize the Health Sector</b>: screen for loneliness, train providers, and cover social care.</li>
<li><b>Reform Digital Environments</b>: establish platform design standards and fund research on technology's effects on connection.</li>
<li><b>Deepen Our Knowledge</b>: standardise measurement and fund longitudinal research.</li>
<li><b>Cultivate a Culture of Connection</b>: shift societal norms around seeking and maintaining social bonds.</li>
</ol>
<b>Scale:</b> Loneliness is estimated to cost the U.S. economy around $400 billion annually. The advisory compares its health risk to smoking 15 cigarettes a day.<br><br>
<b>Source:</b> <a href="https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf" target="_blank">U.S. Surgeon General's Office, 2023</a>`
        }
    ],
    "Sweden": [
        {
            id: "se1", tag: "local", tagLabel: "Local Initiative",
            name: "SällBo Intergenerational Housing",
            short: "Mixed-age, mixed-culture housing in Helsingborg to foster community",
            detail: `<b>Overview:</b> SällBo (from the Swedish words <em>sällskap</em>, meaning companionship, and <em>bo</em>, meaning to live) is a housing initiative in Helsingborg that deliberately brings together residents of different ages and cultural backgrounds, including elderly residents and recently arrived immigrants, through shared spaces and structured social activities.<br><br>
<b>Effectiveness:</b> Early evaluations show reduced loneliness among participants and improved integration outcomes for newcomers. The model has attracted international interest as a replicable approach to urban planning that treats social connection as a design goal.<br><br>
<b>Source:</b> <a href="https://www.medscape.com/viewarticle/lonely-planet-how-world-fighting-social-isolation-2025a1000748" target="_blank">Medscape, April 2025</a>`
        },
        {
            id: "se2", tag: "local", tagLabel: "Local Initiative",
            name: "Luleå \"Say Hello\" Campaign",
            short: "2023 city campaign encouraging residents to greet strangers",
            detail: `<b>Overview:</b> In 2023, the city of Luleå in northern Sweden launched a public awareness campaign encouraging residents to greet strangers with a simple "hello." The initiative is a low-cost, high-frequency intervention targeting the kind of everyday social isolation that can build up slowly and go unnoticed.<br><br>
<b>Rationale:</b> Research shows that even brief positive interactions with strangers, what sociologists call "weak ties," can meaningfully improve daily wellbeing and reduce feelings of isolation, particularly among people who live alone.<br><br>
<b>Source:</b> <a href="https://www.medscape.com/viewarticle/lonely-planet-how-world-fighting-social-isolation-2025a1000748" target="_blank">Medscape, April 2025</a>`
        },
        {
            id: "se3", tag: "national", tagLabel: "National",
            name: "Standing Together: Sweden's National Loneliness Strategy (2025)",
            short: "First national strategy against loneliness, published February 2025, running through 2029",
            detail: `<b>Overview:</b> The Public Health Agency of Sweden presented <em>Standing Together</em>, the country's first national strategy against loneliness, on February 28, 2025. Developed with the National Board of Health and Welfare on behalf of the government, it runs through 2029 and builds on a situation analysis published in March 2024 and a community initiative launched in 2023.<br><br>
<b>Three sub-goals:</b>
<ul>
<li>Social venues accessible to all, regardless of age, background, or ability.</li>
<li>Fewer barriers to social participation.</li>
<li>Fewer people experiencing long-term severe loneliness.</li>
</ul>
<b>Context:</b> 41% of Swedes live in single-person households. National data show that 23% report mild loneliness, 13% have no close friends, and 3% experience severe loneliness. Twice as many men under 45 as women report being often or always troubled by loneliness, though the pattern reverses in older age groups.<br><br>
<b>Source:</b> <a href="https://www.thelocal.se/20250301/sweden-unveils-national-strategy-to-combat-loneliness" target="_blank">The Local Sweden, March 2025</a>`
        }
    ],
    "Denmark": [
        {
            id: "dk1", tag: "national", tagLabel: "National",
            name: "National Partnership Against Loneliness",
            short: "115-stakeholder coalition published Denmark's first national strategy (May 2023)",
            detail: `<b>Overview:</b> Supported by the Danish government, a National Partnership of 115 stakeholders, including municipalities, regions, companies, and civil society organisations, produced Denmark's first national strategy and action plan against loneliness in May 2023.<br><br>
<b>Context:</b> More than 1 in 8 Danes over the age of 16 experience loneliness, roughly 600,000 people, with 1 in 5 young people aged 16 to 24 affected. The rate has risen steadily for a decade and spans all age groups.<br><br>
<b>Key elements:</b> Multi-sector collaboration; impact measurement through the <em>EnsomhediTal</em> platform, which lets organisations calculate the socioeconomic value of their interventions; and a focus on individual, community, and societal levels simultaneously.<br><br>
<b>Source:</b> <a href="https://www.age-platform.eu/proposal-for-national-strategy-against-loneliness-in-denmark/" target="_blank">AGE Platform Europe, 2023</a>`
        }
    ],
    "Germany": [
        {
            id: "de1", tag: "national", tagLabel: "National",
            name: "Loneliness: Recognising, Evaluating and Resolutely Confronting It (2021)",
            short: "Parliamentary technical report funding a national Competence Network on Loneliness",
            detail: `<b>Overview:</b> Germany's Committee for Family Affairs, Senior Citizens, Women and Youth published <em>Loneliness: Recognising, Evaluating and Resolutely Confronting It</em> in 2021. The report established the national policy framework and partially funded the <em>Kompetenznetz Einsamkeit</em> (Competence Network on Loneliness), a research body tasked with studying causes and developing evidence-based interventions.<br><br>
<b>Scope:</b> The policy addresses the general population across five dimensions: geographic, social, health, economic, and political, including the civic engagement consequences of loneliness. Germany is one of only 14 countries globally with a published national loneliness policy as of 2024.<br><br>
<b>Funding:</b> Partial funding was provided specifically for the Competence Network; broader intervention funding was not ring-fenced in the initial document.<br><br>
<b>Key priorities:</b> Raising public awareness and reducing stigma; cross-sectoral collaboration between government, private sector, and civil society; building a robust research evidence base; and integrating loneliness into broader health and social policy frameworks.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Netherlands": [
        {
            id: "nl1", tag: "national", tagLabel: "National",
            name: "One Against Loneliness: Action Programme 2022 to 2025",
            short: "10.7M USD/year government action plan distinguishing emotional, social, and existential loneliness",
            detail: `<b>Overview:</b> The Netherlands Ministry of Health, Welfare and Sport launched <em>One Against Loneliness (Een tegen eenzaamheid)</em>, a dedicated action programme running from 2022 to 2025 with approximately $10.7 million USD annually. A predecessor programme ran from 2018 to 2022 at around $5.5 million USD annually, making the Netherlands one of the few countries with sustained and publicly documented loneliness funding over multiple government terms.<br><br>
<b>Distinctive feature:</b> The programme explicitly distinguishes between three types of loneliness: <em>emotional</em> (the absence of close relationships), <em>social</em> (the absence of a broader network), and <em>existential</em> (a lack of meaning and purpose). Interventions are designed and tailored to each type.<br><br>
<b>Scope:</b> Addresses all five dimensions of isolation (geographic, social, health, economic, political) for the general population, with particular focus on older adults, people with disabilities, and migrants.<br><br>
<b>Interventions:</b> Community connector programmes, training for GPs and home care workers, public awareness campaigns, and funding for local municipalities to develop their own tailored approaches.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Finland": [
        {
            id: "fi1", tag: "national", tagLabel: "National",
            name: "National Loneliness Strategy (in preparation)",
            short: "Strategy under development as Finnish Red Cross data shows two-thirds of young people experience loneliness",
            detail: `<b>Overview:</b> Finland has been developing a national loneliness strategy, described by the Finnish Red Cross as "a good step in the right direction." The country has taken a decentralised approach, requiring all municipalities to record loneliness and actions to reduce it in their wellbeing plans, while the national strategy takes shape.<br><br>
<b>Scale of the problem:</b> The Finnish Red Cross Loneliness Barometer, conducted in early 2025, found that 59% of Finns feel lonely at least occasionally. Among those aged 16 to 24, nearly two in three reported regular loneliness. More than one in ten respondents said they have no close friends with whom they can share personal matters.<br><br>
<b>Community programmes:</b> Finland's <em>Circle of Friends (Ystäväpiiri)</em> initiative supports older adults experiencing loneliness through structured peer groups, and has been identified in European research as a model partnership intervention. The Nordic Welfare Centre coordinates knowledge-sharing on loneliness across Denmark, Sweden, Finland, and Norway.<br><br>
<b>Source:</b> <a href="https://www.redcross.fi/news/2025/finnish-red-cross-loneliness-barometer-loneliness-of-teens-and-young-adults-increased-even-more/" target="_blank">Finnish Red Cross Loneliness Barometer, February 2025</a>`
        }
    ],
    "Australia": [
        {
            id: "au1", tag: "national", tagLabel: "National",
            name: "A National Strategy to Address Loneliness and Social Isolation (2021)",
            short: "Multi-agency national strategy covering all five dimensions of social isolation",
            detail: `<b>Overview:</b> Australia's <em>National Strategy to Address Loneliness and Social Isolation</em> (2021) was developed with input from the Treasury, the Australian Institute of Health and Welfare, and the Australian Institute of Family Studies. It provides a whole-of-government framework targeting both the general population and vulnerable subgroups.<br><br>
<b>Scope:</b> Covers all five dimensions identified in international research: geographic, social, health, economic, and political. The strategy explicitly distinguishes between loneliness (a subjective feeling) and social isolation (an objective measure of contact), and includes follow-up reports on <em>Understanding and Defining Loneliness and Social Isolation</em> (2022).<br><br>
<b>Funding:</b> As of 2024, no concrete federal funding pledge had been made. The advocacy coalition Ending Loneliness Together continues to push the federal government to invest, setting a public goal of halving loneliness in Australia by 2030. At the state level, South Australia committed over $86 million for social connection programmes including $37.3 million to extend its Community Connections programme.<br><br>
<b>Context:</b> Australia's 2023 State of the Nation Report on Social Connection, a nationally representative study of 4,026 people, found significant loneliness across all ages and regions, with young Australians aged 18 to 34 reporting the highest rates at 41.5%.<br><br>
<b>Source:</b> <a href="https://endingloneliness.com.au/wp-content/uploads/2023/10/ELT_LNA_Report_Digital.pdf" target="_blank">Ending Loneliness Together, State of the Nation Report, 2023</a>`
        }
    ],
    "Canada": [
        {
            id: "ca1", tag: "national", tagLabel: "National",
            name: "Report on the Social Isolation of Seniors",
            short: "National Seniors Council report (2014) establishing the policy baseline for social isolation",
            detail: `<b>Overview:</b> Canada's National Seniors Council published its foundational <em>Report on the Social Isolation of Seniors</em> in 2014, following an earlier profile published in 2006. These reports established the evidence base and policy language used by subsequent Canadian initiatives, though no concrete funding was attached at the time.<br><br>
<b>Scope:</b> Primarily focused on older adults (65+). The reports identified key risk factors including living alone, bereavement, low income, and disability, and recommended a whole-of-government response.<br><br>
<b>Subsequent action:</b> A September 2025 National Seniors Council dialogue paper, drawing on a 2024 National Institute on Ageing survey, found that 43% of Canadians aged 50 and older are at risk of social isolation and up to 59% have experienced loneliness. Canada was ranked the loneliest among 11 developed nations by the Commonwealth Fund in 2021. The Canadian Coalition for Seniors' Mental Health published the country's first clinical practice guidelines on social isolation and loneliness in February 2024. Advocates including Women's Age Lab at Women's College Hospital continue to call for a dedicated national loneliness strategy, noting that Canada lags behind the UK, Japan, and others.<br><br>
<b>Source:</b> <a href="https://www.canada.ca/en/national-seniors-council/programs/publications-reports/dialogue-social.html" target="_blank">National Seniors Council of Canada, Dialogue Report, September 2025</a>`
        }
    ],
    "Ireland": [
        {
            id: "ie1", tag: "health", tagLabel: "Healthcare",
            name: "Stronger Together: HSE Mental Health Promotion Plan 2022 to 2027",
            short: "Ireland's national health strategy explicitly addressing loneliness as a mental health determinant",
            detail: `<b>Overview:</b> Ireland's Health Service Executive published <em>Stronger Together: The HSE Mental Health Promotion Plan 2022 to 2027</em>, which explicitly addresses loneliness and social isolation as key determinants of mental health. It is Ireland's most comprehensive government document targeting loneliness at a national level.<br><br>
<b>Scope:</b> General population, with vulnerable subgroups including older adults, young people, and those with chronic illness. The plan emphasises mental health literacy, community-based supports, and education initiatives to reduce the stigma around seeking social connection.<br><br>
<b>Funding:</b> No specific ring-fenced budget for loneliness interventions was identified in the plan; it operates within the broader HSE mental health budget.<br><br>
<b>Complementary programmes:</b> The government also funds ALONE, a national charity dedicated to older people's loneliness, and the Connecting Ireland rural transport programme, which addresses structural isolation in remote and rural communities.<br><br>
<b>Source:</b> <a href="https://www.hse.ie/eng/services/list/4/mental-health-services/strengthening-our-mental-health-promotion-prevention-and-early-intervention/" target="_blank">Health Service Executive Ireland, 2022</a>`
        }
    ],
    "Norway": [
        {
            id: "no1", tag: "national", tagLabel: "National",
            name: "Public Health White Paper: Loneliness as a Health Determinant (2019)",
            short: "Loneliness included in national public health strategy since 2015, with a dedicated strategy from 2019",
            detail: `<b>Overview:</b> Norway was among the first countries in the world to include loneliness in its public health white papers, doing so from 2015 onward. The country released its first dedicated loneliness strategy in 2019 as part of that year's Public Health White Paper, grounding it in the country's Public Health Act, which explicitly acknowledges health inequalities and a national solidarity principle in policymaking.<br><br>
<b>Monitoring:</b> The Norwegian Institute of Public Health (Folkehelseinstituttet) has conducted county-level health surveys since 2019, mapping loneliness at the municipal level across the country. These surveys have revealed significant local variation not captured in national statistics, and directly inform targeted public health measures. Norway's Statistics Bureau (SSB) tracks loneliness annually through its Quality of Life survey.<br><br>
<b>Youth data:</b> Among Norwegians aged 18 to 24, loneliness peaked above 30% in 2021 and has since shown signs of recovery, falling to around 22% by 2025 according to SSB data. This improvement among young people is one of the more encouraging data points in OECD comparisons of post-pandemic loneliness trends.<br><br>
<b>Nordic cooperation:</b> Norway co-funds the Nordic Welfare Centre's cross-national loneliness research programme alongside Denmark, Sweden, and Finland.<br><br>
<b>Source:</b> <a href="https://journals.sagepub.com/doi/10.1177/21582440251345605" target="_blank">Jentoft and Kohler-Olsen, "Sounding the Loneliness Alarm," SAGE Open, 2025</a>`
        }
    ],
    "Belgium": [
        {
            id: "be1", tag: "national", tagLabel: "National",
            name: "Federal Plan for Social Cohesion",
            short: "Federal plan funding community centres and social bond programmes in deprived areas",
            detail: `<b>Overview:</b> Belgium's Federal Plan for Social Cohesion (Plan de cohesion sociale) funds community centres in socially deprived urban and rural areas with an explicit mandate to reduce social isolation. The programme channels resources to local associations that facilitate social participation.<br><br>
<b>Flanders:</b> The Flemish government separately runs the Samenlevingsopbouw (Community Development) programme, employing over 400 community workers whose explicit purpose is reducing isolation and building social cohesion in vulnerable neighbourhoods.<br><br>
<b>Brussels:</b> The Brussels-Capital Region has a dedicated "Contrat de Quartier Durable" funding neighbourhood-level projects that reduce isolation, with loneliness reduction as an explicit evaluation criterion since 2022.<br><br>
<b>Source:</b> <a href="https://www.mi-is.be/fr/plan-de-cohesion-sociale" target="_blank">Belgian Federal Social Integration Service</a>`
        }
    ],
    "New Zealand": [
        {
            id: "nz1", tag: "national", tagLabel: "National",
            name: "Kia Ora Hauora: Social Connection Strategy",
            short: "National health strategy embedding social connection as a health outcome across all DHBs",
            detail: `<b>Overview:</b> New Zealand's 2022 health system reform created Health New Zealand (Te Whatu Ora), which embeds social connection as a core health outcome. District Health Boards are required to report on loneliness metrics and fund social prescribing pathways.<br><br>
<b>Maori lens:</b> New Zealand's approach is distinctive in grounding social connection policy in te ao Maori concepts, particularly <em>whanaungatanga</em> (kinship and a sense of belonging), recognising that Indigenous collective wellbeing frameworks offer insights that are transferable across the wider population.<br><br>
<b>Statistics:</b> New Zealand's 2021 General Social Survey found 16% of adults experienced loneliness, with those aged 15 to 24 and those aged 75 and above most affected.<br><br>
<b>Source:</b> <a href="https://www.stats.govt.nz/information-releases/social-indicators-new-zealand-2021-general-social-survey" target="_blank">Statistics New Zealand, General Social Survey 2021</a>`
        }
    ],
    "France": [
        {
            id: "fr1", tag: "national", tagLabel: "National",
            name: "Pacte des Solidarites (Solidarity Pact)",
            short: "2023 to 2027 national solidarity pact with loneliness reduction as an explicit pillar",
            detail: `<b>Overview:</b> France's Pacte des Solidarites (2023 to 2027) is a comprehensive anti-poverty and social cohesion strategy. Its fourth pillar, "Renforcer l'inclusion sociale" (Strengthen Social Inclusion), explicitly targets isolation and loneliness, particularly among older adults and young people who are not in employment, education, or training (NEET).<br><br>
<b>Key measures:</b> 1.5 billion euros over four years; expansion of the Monalisa (Mobilisation nationale contre l'isolement des ages) network of 15,000 volunteers who visit isolated elderly people; and funding for civic service programmes where young people provide companionship to isolated seniors.<br><br>
<b>Context:</b> The Fondation de France found 5 million people in France were severely isolated in 2021, up from 3 million in 2010. That increase of 2 million people over a decade was the largest recorded anywhere in Europe over the same period.<br><br>
<b>Source:</b> <a href="https://solidarites.gouv.fr/le-pacte-des-solidarites" target="_blank">French Ministry of Solidarity, Autonomy and Disability</a>`
        }
    ],
    "Albania": [
        {
            id: "al1", tag: "national", tagLabel: "National",
            name: "National Action Plan on Aging 2020 to 2024",
            short: "$750K funded action plan from Albania's Ministry of Health targeting older adults' social isolation",
            detail: `<b>Overview:</b> Albania's Ministry of Health and Social Protection published the <em>National Action Plan on Aging 2020 to 2024</em>, which explicitly addresses social isolation among adults aged 65 and over. It is notable for being one of only four countries in a 52-country scoping review to have a concrete, identified funding allocation for loneliness-related work.<br><br>
<b>Funding:</b> $0.75 million USD allocated over five years. While modest in absolute terms, this represents a meaningful commitment relative to Albania's public health budget and is one of the most transparent funding pledges among all countries surveyed.<br><br>
<b>Scope:</b> Addresses geographic, social, health, economic, and political dimensions of isolation. Interventions include community day centres, home-visit programmes for isolated older adults, and intergenerational activities.<br><br>
<b>Context:</b> Albania has experienced significant rural depopulation and emigration over recent decades, leaving older adults in rural areas particularly vulnerable to social isolation. The plan reflects a growing regional awareness of loneliness as a policy concern in South-East Europe.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Austria": [
        {
            id: "at1", tag: "national", tagLabel: "National",
            name: "Overcoming Loneliness (2023)",
            short: "Austrian federal ministry portal consolidating national loneliness information and referral pathways",
            detail: `<b>Overview:</b> Austria's Federal Ministry of Social Affairs, Health, Care and Consumer Protection launched <em>Overcoming Loneliness (Einsamkeit uberwinden)</em> in 2023, a government information and coordination portal that consolidates national resources, raises public awareness, and directs individuals to local support services.<br><br>
<b>Scope:</b> Targets the general population across geographic, social, health, and economic dimensions. The document explicitly acknowledges loneliness across all age groups, not just older adults, and includes sections on digital loneliness and the effects of screen-based social contact.<br><br>
<b>Funding:</b> No specific budget allocation was identified in the published document. The portal primarily serves an awareness and coordination function rather than funding direct interventions.<br><br>
<b>Significance:</b> Austria's policy marks a deliberate shift away from treating loneliness as an elderly-care issue toward treating it as a cross-cutting social determinant of health. It is one of 14 countries globally with a published national loneliness document as of 2024.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Czech Republic": [
        {
            id: "cz1", tag: "national", tagLabel: "National",
            name: "Social Inclusion Strategy 2021 to 2030 (published 2019)",
            short: "Decade-long social inclusion strategy addressing isolation through mental health and employment",
            detail: `<b>Overview:</b> The Czech Republic's Ministry of Labour and Social Affairs published the <em>Social Inclusion Strategy 2021 to 2030</em> in 2019. While broader than loneliness alone, it explicitly targets social isolation as a component of exclusion and is one of the most comprehensive Eastern European policy documents in this space.<br><br>
<b>Distinctive approach:</b> The strategy includes mental health interventions (addressing the psychological drivers of isolation) alongside employment integration (addressing economic exclusion) and community participation programmes, covering loneliness across all five recognised dimensions.<br><br>
<b>Funding:</b> Primarily funded through EU Structural Funds and the European Social Fund, allowing for more substantial resourcing than purely national budgets. No specific ring-fenced loneliness budget was identified.<br><br>
<b>Scope:</b> General population with a particular focus on marginalised groups including Roma communities, the long-term unemployed, people with disabilities, and residents of socially excluded localities.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Italy": [
        {
            id: "it1", tag: "national", tagLabel: "National",
            name: "Policies for Active Ageing in Italy (2022)",
            short: "Italy's Family Department strategy targeting social isolation among older adults",
            detail: `<b>Overview:</b> Italy's Family Department published <em>Policies for Active Ageing in Italy: What Are the Possible Objectives?</em> in 2022, establishing a policy framework that explicitly addresses social isolation among older adults (65+) as a national concern.<br><br>
<b>Scope:</b> Covers geographic, social, health, and economic dimensions of isolation. Italy's geography, with large elderly populations concentrated in depopulating rural areas and Southern regions, makes geographic isolation a particularly acute problem.<br><br>
<b>Funding:</b> The document acknowledges the need for funding without making a concrete pledge. Italy's National Recovery and Resilience Plan (PNRR) includes investments in community welfare that partially address isolation, though not under an explicit loneliness label.<br><br>
<b>Context:</b> Italy has one of the world's oldest populations, with 23% of citizens aged over 65, and among Europe's highest proportions of people living alone. The COVID-19 pandemic dramatically increased public and political awareness of isolation's health consequences, directly driving this policy document.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Malta": [
        {
            id: "mt1", tag: "national", tagLabel: "National",
            name: "National Strategic Policy for Active Ageing 2023 to 2030",
            short: "Malta's 7-year ageing strategy with gender-specific loneliness interventions",
            detail: `<b>Overview:</b> Malta's Ministry for Senior Citizens and Active Ageing published the <em>National Strategic Policy for Active Ageing 2023 to 2030</em>, which addresses social isolation among older adults as a central concern. Malta is the smallest country to have published a dedicated national loneliness-related policy document.<br><br>
<b>Distinctive feature:</b> The strategy is notable for including <em>gender-specific interventions</em>, recognising that men and women experience and respond to social isolation differently, particularly following bereavement or retirement.<br><br>
<b>Scope:</b> Covers geographic, social, and health dimensions. Interventions include community day centre expansion, intergenerational programmes, and digital inclusion training for older adults.<br><br>
<b>Funding:</b> No specific budget allocation was identified in the published document. Malta's small size means national programmes can achieve significant population reach with relatively modest investment.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Switzerland": [
        {
            id: "ch1", tag: "health", tagLabel: "Healthcare",
            name: "Social Resources as Health Protection (2014 and 2020)",
            short: "Swiss Health Observatory research establishing social connection as a formal health protection factor",
            detail: `<b>Overview:</b> Switzerland's approach to loneliness is grounded in public health research rather than ministerial action. The Swiss Health Observatory published <em>Social Resources as Health Protection: Mode of Action and Dissemination in Swiss Population</em> in 2014, followed by Health Promotion Switzerland's <em>Social Resources: Promotion of Social Resources as Important Contribution to Mental Health</em> in 2020.<br><br>
<b>Framework:</b> Switzerland formally treats social resources (networks, belonging, trust) as measurable <em>health protection factors</em> on equal footing with physical health behaviours like exercise and diet. This framing is embedded in the national health promotion system rather than treated as a separate loneliness agenda.<br><br>
<b>Scope:</b> General population with vulnerable subgroups. Addresses health and social dimensions with less emphasis on geographic and political dimensions compared to other countries' policies.<br><br>
<b>Significance:</b> Switzerland's approach of embedding social connection within the existing health promotion system, rather than creating a standalone loneliness ministry, represents a distinctive model that some researchers argue may be more institutionally durable over the long term.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Portugal": [
        {
            id: "pt1", tag: "national", tagLabel: "National",
            name: "Programa de Apoio a Integracao Social (PAIS)",
            short: "National social integration programme targeting isolated elderly and youth in deprived areas",
            detail: `<b>Overview:</b> Portugal's PAIS programme coordinates local authority and NGO interventions targeting social isolation, with a particular focus on isolated elderly people in rural interior regions and disadvantaged youth in the suburban areas of Lisbon and Porto. The programme funds neighbourhood social workers whose caseloads are specifically structured around isolation cases.<br><br>
<b>Context:</b> Portugal has one of Europe's highest proportions of elderly people living alone, with nearly 30% of those aged 65 and over in single-person households, combined with significant rural depopulation, creating acute structural loneliness risks that are geographic as much as social.<br><br>
<b>Volunteer network:</b> The Banco Local de Voluntariado coordinates over 60,000 volunteers across 278 municipalities, many of whom are engaged in befriending and social inclusion activities targeting isolation.<br><br>
<b>Source:</b> <a href="https://www.seg-social.pt/programas-de-apoio-a-integracao-social" target="_blank">Portuguese Social Security Institute</a>`
        }
    ]
};

// ════════════════════════════════════════════════════════
//  GeoJSON name → Gallup data key mapping
// ════════════════════════════════════════════════════════

const NAME_MAP = {
    "USA":                 "United States",
    "United Kingdom of Great Britain and Northern Ireland": "United Kingdom",
    "Republic of Korea":                        "South Korea",
    "Korea":                                    "South Korea",
    "Democratic Republic of the Congo":         "Democratic Republic of the Congo",
    "Republic of the Congo":                    "Republic of the Congo",
    "Congo":                                    "Republic of the Congo",
    "Côte d'Ivoire":                            "Côte d'Ivoire",
    "Taiwan":                                   "Taiwan (Province of China)",
    "Hong Kong":                                "Hong Kong (S.A.R. of China)",
    "Bosnia and Herz.":                         "Bosnia and Herzegovina",
    "Dominican Rep.":                           "Dominican Republic",
    "eSwatini":                                 "Eswatini",
    "Palestine":                                "Palestinian Territories",
    "Turkiye":                                  "Türkiye",
    "Turkey":                                   "Türkiye",
    "N. Cyprus":                                "Northern Cyprus",
    "Gambia":                                   "The Gambia",
    "Kosovo":                                   "Kosovo",
    "Macedonia":                                "North Macedonia",
    "North Macedonia":                          "North Macedonia",
    "Myanmar":                                  "Myanmar",
    "Laos":                                     "Laos",
    "Vietnam":                                  "Vietnam",
    "S. Sudan":                                 "South Sudan",
    "Solomon Is.":                              "Solomon Islands",
};

// ════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════
function parsePct(s) {
    if (!s) return null;
    s = s.trim();
    if (s === "<1%" || s === "<1") return 0.5;
    var n = parseFloat(s.replace("%", ""));
    return isNaN(n) ? null : n;
}

function resolveKey(name) {
    if (!name) return null;
    return NAME_MAP[name] || name;
}

// ════════════════════════════════════════════════════════
//  STATE
// ════════════════════════════════════════════════════════
var currentMode     = "loneliness";
var selectedCountry = null;
var mapCountryPaths = null;

// ════════════════════════════════════════════════════════
//  MAP COLOURS
// ════════════════════════════════════════════════════════
function getVal(key) {
    if (!key) return null;
    if (currentMode === "loneliness") return GALLUP.loneliness[key] ? GALLUP.loneliness[key].vf : null;
    if (currentMode === "connected")  return GALLUP.connected[key]  ? GALLUP.connected[key].vf  : null;
    if (currentMode === "policies")   return POLICIES[key] ? POLICIES[key].length : 0;
    return null;
}

function getColor(key) {
    var v = getVal(key);
    if (v === null || v === undefined) return "#1a2235";
    if (currentMode === "loneliness") {
        return d3.interpolateRgb("#1e3a5f", "#dc2626")(Math.min(Math.max((v - 5) / 53, 0), 1));
    }
    if (currentMode === "connected") {
        return d3.interpolateRgb("#14532d", "#4ade80")(Math.min(Math.max((v - 45) / 50, 0), 1));
    }
    if (currentMode === "policies") {
        if (v === 0) return "#1a2235";
        if (v === 1) return "#4338ca";
        if (v === 2) return "#7c3aed";
        return "#c026d3";
    }
}

// ════════════════════════════════════════════════════════
//  MODE & LEGEND
// ════════════════════════════════════════════════════════
function setMode(mode) {
    currentMode = mode;
    d3.selectAll(".mode-btn").classed("active", false);
    d3.select(".mode-btn[data-mode='" + mode + "']").classed("active", true);
    updateLegend();
    if (mapCountryPaths) {
        mapCountryPaths.transition().duration(400)
            .attr("fill", function(d) { return getColor(resolveKey(d.properties.name)); });
    }
    if (selectedCountry) showSidebar(selectedCountry);
}

function updateLegend() {
    var grad  = document.getElementById("legend-grad");
    var label = document.getElementById("legend-label");
    var lo    = document.getElementById("legend-lo");
    var hi    = document.getElementById("legend-hi");
    if (currentMode === "loneliness") {
        grad.style.background = "linear-gradient(to right,#1e3a5f,#dc2626)";
        label.textContent = "% Very/Fairly Lonely";
        lo.textContent = "Low";  hi.textContent = "High";
    } else if (currentMode === "connected") {
        grad.style.background = "linear-gradient(to right,#14532d,#4ade80)";
        label.textContent = "% Very/Fairly Connected";
        lo.textContent = "Low";  hi.textContent = "High";
    } else {
        grad.style.background = "linear-gradient(to right,#1a2235,#4338ca,#7c3aed,#c026d3)";
        label.textContent = "# of tracked policies";
        lo.textContent = "None"; hi.textContent = "Many";
    }
}

// ════════════════════════════════════════════════════════
//  TOOLTIP
// ════════════════════════════════════════════════════════
var tooltip = d3.select("#tooltip");

function showTooltip(evt, d) {
    var key = resolveKey(d.properties.name);
    var v   = getVal(key);
    document.getElementById("tt-name").textContent = key || d.properties.name;
    if (v === null || v === undefined) {
        document.getElementById("tt-val").textContent = "No data";
    } else if (currentMode === "policies") {
        document.getElementById("tt-val").textContent = v + " tracked " + (v === 1 ? "policy" : "policies");
    } else {
        var lbl = currentMode === "loneliness" ? "Very/Fairly Lonely" : "Very/Fairly Connected";
        document.getElementById("tt-val").textContent = v + "% " + lbl;
    }
    tooltip.style("display", "block");
    moveTooltip(evt);
}

function moveTooltip(evt) {
    var wrap = document.getElementById("map-wrap");
    var rect = wrap.getBoundingClientRect();
    var x    = evt.clientX - rect.left;
    var y    = evt.clientY - rect.top;
    var tw   = 180;
    var left = (x + 14 + tw > wrap.offsetWidth) ? x - tw - 10 : x + 14;
    tooltip.style("left", left + "px").style("top", (y - 10) + "px");
}

function hideTooltip() { tooltip.style("display", "none"); }

// ════════════════════════════════════════════════════════
//  SIDEBAR
// ════════════════════════════════════════════════════════
function statRow(label, val, color) {
    if (val === null || val === undefined) return "";
    return '<div class="stat-row">' +
        '<span class="stat-lbl">' + label + '</span>' +
        '<div class="stat-bar-wrap"><div class="stat-bar" style="width:' + val + '%;background:' + color + '"></div></div>' +
        '<span class="stat-num">' + val + '%</span>' +
        '</div>';
}

function genderColors(type) {
    return type === "loneliness"
        ? { v:"#dc2626", f:"#9a334e", al:"#5b3a68", na:"#1e3a5f", vfColor:"#dc2626" }
        : { v:"#4ade80", f:"#2fab58", al:"#1f7a3d", na:"#14532d", vfColor:"#4ade80" };
}

function genderInlineHtml(countryKey, type) {
    var isLone = type === "loneliness";
    var men = isLone ? GALLUP.men_loneliness[countryKey] : GALLUP.men_connected[countryKey];
    var women = isLone ? GALLUP.women_loneliness[countryKey] : GALLUP.women_connected[countryKey];
    var colors = genderColors(type);
    if (!men && !women) return "";
    var rows = isLone
        ? [
            { label:"Very", key:"v", color:colors.v },
            { label:"Fairly", key:"f", color:colors.f },
            { label:"A little", key:"al", color:colors.al },
            { label:"Not at all", key:"na", color:colors.na }
          ]
        : [
            { label:"Not at all", key:"na", color:colors.na },
            { label:"A little", key:"al", color:colors.al },
            { label:"Fairly", key:"f", color:colors.f },
            { label:"Very", key:"v", color:colors.v }
          ];
    function val(data, key) {
        return data && data[key] !== null && data[key] !== undefined ? data[key] : null;
    }
    function fmt(v) {
        return v === null ? "N/A" : v + "%";
    }
    function bar(v, side, color) {
        if (v === null) return '<div class="gender-pyramid-bar empty"></div>';
        return '<div class="gender-pyramid-bar ' + side + '" style="width:' + v + '%;background:' + color + '"></div>';
    }
    return '<div class="gender-inline gender-pyramid" onclick="event.stopPropagation()">' +
        '<div class="gender-pyramid-head"><span>Men</span><span>Women</span></div>' +
        rows.map(function(r) {
            var mv = val(men, r.key);
            var wv = val(women, r.key);
            return '<div class="gender-pyramid-row">' +
                '<div class="gender-pyramid-label">' + r.label + '</div>' +
                '<div class="gender-pyramid-value men-value">' + fmt(mv) + '</div>' +
                '<div class="gender-pyramid-side left">' + bar(mv, "men", r.color) + '</div>' +
                '<div class="gender-pyramid-side right">' + bar(wv, "women", r.color) + '</div>' +
                '<div class="gender-pyramid-value women-value">' + fmt(wv) + '</div>' +
            '</div>';
        }).join('') +
        '</div>';
}

function toggleGenderInline(card) {
    card.classList.toggle("expanded");
    var hint = card.querySelector(".card-hint");
    if (hint) hint.textContent = card.classList.contains("expanded") ? "Click to collapse gender breakdown" : "Click for gender breakdown";
}

function showSidebar(key) {
    selectedCountry = key;
    document.getElementById("sb-country").textContent = key;
    document.getElementById("sidebar").classList.add("open");
    closePolicyDetail();
    closeGenderDetail();

    var lone = GALLUP.loneliness[key];
    var conn = GALLUP.connected[key];
    var pols = POLICIES[key] || [];
    var html = "";

    // Loneliness card
    if (lone) {
        var hasLoneGender = !!(GALLUP.men_loneliness[key] || GALLUP.women_loneliness[key]);
        html += '<div class="section-label">Loneliness</div>';
        html += '<div class="stat-card' + (hasLoneGender ? ' clickable' : '') + '"' +
            (hasLoneGender ? ' onclick="toggleGenderInline(this)"' : '') + '>' +
            '<h4>Self-Reported Loneliness</h4>' +
            '<div class="stat-headline">Very + Fairly Lonely: <b style="color:#dc2626">' + lone.vf + '%</b></div>' +
            statRow("Very lonely",   lone.v,  "#dc2626") +
            statRow("Fairly lonely", lone.f,  "#9a334e") +
            statRow("A little",      lone.al, "#5b3a68") +
            statRow("Not at all",    lone.na, "#1e3a5f") +
            (hasLoneGender ? genderInlineHtml(key, "loneliness") : '') +
            (hasLoneGender ? '<div class="card-hint">Click for gender breakdown</div>' : '') +
            '</div>';
    }

    // Connection card
    if (conn) {
        var hasConnGender = !!(GALLUP.men_connected[key] || GALLUP.women_connected[key]);
        html += '<div class="section-label">Social Connection</div>';
        html += '<div class="stat-card' + (hasConnGender ? ' clickable' : '') + '"' +
            (hasConnGender ? ' onclick="toggleGenderInline(this)"' : '') + '>' +
            '<h4>Perceptions of Social Connectedness</h4>' +
            '<div class="stat-headline">Very + Fairly Connected: <b style="color:#4ade80">' + conn.vf + '%</b></div>' +
            statRow("Not at all",       conn.na, "#14532d") +
            statRow("A little",         conn.al, "#1f7a3d") +
            statRow("Fairly connected", conn.f,  "#2fab58") +
            statRow("Very connected",   conn.v,  "#4ade80") +
            (hasConnGender ? genderInlineHtml(key, "connected") : '') +
            (hasConnGender ? '<div class="card-hint">Click for gender breakdown</div>' : '') +
            '</div>';
    }

    // Policies
    html += '<div class="section-label" style="margin-top:16px">Policies & Initiatives</div>';
    if (pols.length === 0) {
        html += '<div class="no-policy">No tracked policies found for this country.<br><br>' +
            'As of 2024, only 14 of 194 WHO member states have published formal national loneliness policies (Goldman et al., 2024).</div>';
    } else {
        pols.forEach(function(p) {
            html += '<div class="policy-item" onclick="showPolicyDetail(\'' + p.id + '\',\'' + key.replace(/'/g, "&#39;") + '\')">' +
                '<div class="policy-text">' +
                    '<div class="policy-tag tag-' + p.tag + '">' + p.tagLabel + '</div>' +
                    '<h5>' + p.name + '</h5>' +
                    '<p>' + p.short + '</p>' +
                    '<div class="card-hint">Click for details</div>' +
                '</div></div>';
        });
    }

    document.getElementById("sb-content").innerHTML = html;
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    selectedCountry = null;
    if (mapCountryPaths) mapCountryPaths.classed("selected", false);
    closePolicyDetail();
    closeGenderDetail();
}

// ════════════════════════════════════════════════════════
//  POLICY DETAIL
// ════════════════════════════════════════════════════════
function showPolicyDetail(policyId, countryKey) {
    var pols = POLICIES[countryKey] || [];
    var p = pols.find(function(x) { return x.id === policyId; });
    if (!p) return;
    document.getElementById("sidebar").classList.add("policy-mode");
    document.getElementById("pd-title").textContent = p.name;
    document.getElementById("pd-body").innerHTML    = p.detail;
    document.getElementById("policy-detail").classList.add("show");
    document.getElementById("pd-body").scrollTop = 0;
}

function closePolicyDetail() {
    document.getElementById("policy-detail").classList.remove("show");
    document.getElementById("sidebar").classList.remove("policy-mode");
}

// ════════════════════════════════════════════════════════
//  GENDER DETAIL
// ════════════════════════════════════════════════════════
function showGenderDetail(countryKey, type) {
    var isLone   = (type === "loneliness");
    var mData    = isLone ? GALLUP.men_loneliness[countryKey]  : GALLUP.men_connected[countryKey];
    var wData    = isLone ? GALLUP.women_loneliness[countryKey] : GALLUP.women_connected[countryKey];
    var colors   = isLone
        ? { v:"#dc2626", f:"#9a334e", al:"#5b3a68", na:"#1e3a5f", vfColor:"#dc2626" }
        : { v:"#4ade80", f:"#2fab58", al:"#1f7a3d", na:"#14532d", vfColor:"#4ade80" };
    var vfLabel  = isLone ? "Very + Fairly Lonely"     : "Very + Fairly Connected";
    var vLabel   = isLone ? "Very lonely"               : "Very connected";
    var fLabel   = isLone ? "Fairly lonely"             : "Fairly connected";

    function genderSection(emoji, label, d) {
        if (!d) return '<div class="gender-section"><h4>' + emoji + ' ' + label + '</h4>' +
            '<p style="color:var(--muted);font-size:12px">No data available</p></div>';
        return '<div class="gender-section">' +
            '<h4>' + emoji + ' ' + label + '</h4>' +
            '<div class="stat-card">' +
                '<div class="stat-headline">' + vfLabel + ': <b style="color:' + colors.vfColor + '">' + d.vf + '%</b></div>' +
                (isLone
                    ? statRow(vLabel,        d.v,  colors.v) +
                      statRow(fLabel,        d.f,  colors.f) +
                      statRow("A little",    d.al, colors.al) +
                      statRow("Not at all",  d.na, colors.na)
                    : statRow("Not at all",  d.na, colors.na) +
                      statRow("A little",    d.al, colors.al) +
                      statRow(fLabel,        d.f,  colors.f) +
                      statRow(vLabel,        d.v,  colors.v)) +
            '</div>' +
        '</div>';
    }

    document.getElementById("gd-title").textContent =
        countryKey + " — " + (isLone ? "Loneliness" : "Social Connection") + " by Gender";
    document.getElementById("gd-body").innerHTML =
        genderSection("♂", "Men",   mData) +
        genderSection("♀", "Women", wData);
    document.getElementById("gender-detail").classList.add("show");
}

function closeGenderDetail() {
    document.getElementById("gender-detail").classList.remove("show");
}

// ════════════════════════════════════════════════════════
//  MAP SETUP
// ════════════════════════════════════════════════════════
var mapDiv = document.getElementById("map");
var mapW   = mapDiv.offsetWidth;
var mapH   = mapDiv.offsetHeight;

var projection = d3.geoNaturalEarth1()
    .scale(mapW / 6)
    .translate([mapW * 0.45, mapH / 1.85]);

var pathFn = d3.geoPath().projection(projection);

var mapSvg = d3.select("#map")
    .append("svg")
    .attr("width", mapW).attr("height", mapH)
    .style("cursor", "grab");

var mapG = mapSvg.append("g");

var mapPan = d3.zoom()
    .scaleExtent([1, 1])
    .filter(function(event) {
        return event.type !== "wheel" && event.type !== "dblclick";
    })
    .on("zoom", function(event) {
        mapG.attr("transform", "translate(" + event.transform.x + ",0) scale(1)");
    });

mapSvg
    .call(mapPan)
    .on("wheel.zoom", null)
    .style("touch-action", "pan-y")
    .on("mousedown.cursor", function() { mapSvg.style("cursor", "grabbing"); })
    .on("mouseup.cursor mouseleave.cursor", function() { mapSvg.style("cursor", "grab"); });

// ════════════════════════════════════════════════════════
//  EVENT WIRING
// ════════════════════════════════════════════════════════
d3.selectAll(".mode-btn").on("click", function() {
    setMode(d3.select(this).attr("data-mode"));
});
document.getElementById("sb-close").addEventListener("click", closeSidebar);
document.getElementById("pd-back").addEventListener("click", closePolicyDetail);
document.getElementById("gd-back").addEventListener("click", closeGenderDetail);
updateLegend();

// ════════════════════════════════════════════════════════
//  DATA LOADING
// ════════════════════════════════════════════════════════
Promise.all([
    d3.csv("data/LonlinessByCountry.csv"),
    d3.csv("data/ConnectedByCountry.csv"),
    d3.csv("data/LonlinessByGenderCountry.csv"),
    d3.csv("data/ConnectedByGenderCountry.csv")
]).then(function(files) {

    files[0].forEach(function(r) {
        var c = (r["Country"] || "").trim(); if (!c) return;
        GALLUP.loneliness[c] = {
            vf: parsePct(r["Very + Fairly Lonely"]),
            v:  parsePct(r["Very Lonely"]),
            f:  parsePct(r["Fairly Lonely"]),
            al: parsePct(r["A Little Lonely"]),
            na: parsePct(r["Not At All Lonely"])
        };
    });

    files[1].forEach(function(r) {
        var c = (r["Country"] || "").trim(); if (!c) return;
        GALLUP.connected[c] = {
            vf: parsePct(r["Very + Fairly connected"]),
            v:  parsePct(r["Very connected"]),
            f:  parsePct(r["Fairly connected"]),
            al: parsePct(r["A Little connected"]),
            na: parsePct(r["Not at all connected"])
        };
    });

    files[2].forEach(function(r) {
        var cm = (r["Country (Men)"]   || "").trim();
        var cw = (r["Country (Women)"] || "").trim();
        if (cm) GALLUP.men_loneliness[cm] = {
            vf: parsePct(r["Men.Very + Fairly loneley"]),
            v:  parsePct(r["Men.Very lonely"]),
            f:  parsePct(r["Men.Fairly lonely"]),
            al: parsePct(r["Men.A little lonely"]),
            na: parsePct(r["Men.Not at all lonely"])
        };
        if (cw) GALLUP.women_loneliness[cw] = {
            vf: parsePct(r["Women.Very + Fairly lonely"]),
            v:  parsePct(r["Women.Very lonely"]),
            f:  parsePct(r["Women.Fairly lonely"]),
            al: parsePct(r["Women.A little lonely"]),
            na: parsePct(r["Women.Not at all lonely"])
        };
    });

    files[3].forEach(function(r) {
        var cm = (r["Country (Men)"]   || "").trim();
        var cw = (r["Country (Women)"] || "").trim();
        if (cm) GALLUP.men_connected[cm] = {
            vf: parsePct(r["Men.Very + Fairly connected"]),
            v:  parsePct(r["Men.Very connected"]),
            f:  parsePct(r["Men.Fairly connected"]),
            al: parsePct(r["Men.A Little connected"]),
            na: parsePct(r["Men.Not at all connected"])
        };
        if (cw) {
            var wv = parsePct(r["Women.Very connected"]);
            var wf = parsePct(r["Women.Fairly connected"]);
            GALLUP.women_connected[cw] = {
                vf: (wv !== null && wf !== null) ? Math.round(wv + wf) : null,
                v:  wv,
                f:  wf,
                al: parsePct(r["Women.A Little connected"]),
                na: parsePct(r["Women.Not at all connected"])
            };
        }
    });

    // Draw map once data is ready
    d3.json("data/world.geojson")
        .then(function(geo) {
            mapCountryPaths = mapG.selectAll(".country")
                .data(geo.features)
                .enter().append("path")
                .attr("class", "country")
                .attr("d", pathFn)
                .attr("fill", function(d) { return getColor(resolveKey(d.properties.name)); })
                .on("mouseover", function(event, d) { showTooltip(event, d); })
                .on("mousemove", function(event)  { moveTooltip(event); })
                .on("mouseout",  function()  { hideTooltip(); })
                .on("click", function(event, d) {
                    event.stopPropagation();
                    var key = resolveKey(d.properties.name);
                    if (key === selectedCountry) { closeSidebar(); return; }
                    mapCountryPaths.classed("selected", false);
                    d3.select(this).classed("selected", true);
                    showSidebar(key);
                });
            mapSvg.on("click", function() { closeSidebar(); });
        })
        .catch(function(err) { console.error("GeoJSON load error:", err); });

}).catch(function(err) { console.error("CSV load error:", err); });
