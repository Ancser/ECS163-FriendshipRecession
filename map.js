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
            detail: `<b>Background:</b> Following the Jo Cox Commission on Loneliness, PM Theresa May appointed the world's first Minister for Loneliness in January 2018. The portfolio coordinates cross-government action and funds organisations in the space.<br><br>
<b>Key measures:</b> The minister oversees the <em>A Connected Society</em> national strategy (October 2018), an ONS standard measurement framework using "How often do you feel lonely?", and two funds: Â£98 million for healthy ageing and Â£20 million for community organisations (including an Â£11 million Building Connections Fund).<br><br>
<b>Effectiveness:</b> Rigorous quantitative evaluation has been difficult even 8 years on. However, the strategy accelerated mainstreaming of social prescribing and directly inspired Japan, Australia and others to create similar roles.<br><br>
<b>Source:</b> <a href="https://commonslibrary.parliament.uk/research-briefings/cbp-8514/" target="_blank">UK Parliament Research Briefing, 2024</a>`
        },
        {
            id: "uk2", tag: "health", tagLabel: "Healthcare",
            name: "Social Prescribing / Link Workers",
            short: "GPs refer lonely patients to community activities instead of medication",
            detail: `<b>Background:</b> Social prescribing enables GPs to refer patients experiencing loneliness to non-clinical community resources â€” art classes, walking groups, cooking clubs, gardening, volunteering â€” managed by trained "link workers."<br><br>
<b>Scale:</b> 1,000+ link workers deployed across England by 2020â€“21, extended in 2023/24. All GPs in England are now equipped to make referrals.<br><br>
<b>Effectiveness:</b> An evaluation of the Connecting Communities programme found nearly 70% of service users experienced lower loneliness levels, with three-quarters also reporting improved wellbeing. Social prescribing reduces NHS demand while improving outcomes at low cost.<br><br>
<b>Source:</b> <a href="https://www.redcross.org.uk/about-us/news-and-media/media-centre/press-releases/social-prescribing-is-a-vital-part-of-treatment-to-tackle-loneliness" target="_blank">British Red Cross evaluation</a>`
        },
        {
            id: "uk3", tag: "local", tagLabel: "Community",
            name: "Building Connections Fund",
            short: "Â£11 million fund transforming unused spaces into community hubs",
            detail: `<b>Overview:</b> The Â£11 million Building Connections Fund backed local projects across England that convert underutilised spaces into community cafÃ©s, art spaces, and gardens â€” physical venues designed to bring together isolated individuals.<br><br>
<b>Partners:</b> Co-run with Nesta and the Co-op. Focus on the most isolated communities and high-risk groups (older people, new parents, people with disabilities).<br><br>
<b>Effectiveness:</b> Individual project evaluations showed reduced loneliness scores among participants. The fund demonstrated that relatively low-cost physical infrastructure changes can meaningfully reduce social isolation.<br><br>
<b>Source:</b> <a href="https://hansard.parliament.uk/commons/2018-10-15/debates/3C48CE18-4473-4698-92E2-CF010D786CDC/LonelinessStrategy" target="_blank">UK Parliament, Loneliness Strategy Debate 2018</a>`
        }
    ],
    "Japan": [
        {
            id: "jp1", tag: "national", tagLabel: "National",
            name: "Act on Measures to Address Loneliness & Isolation",
            short: "World's first comprehensive loneliness law, enacted April 2024",
            detail: `<b>Background:</b> Japan enacted the world's first comprehensive national loneliness law on April 1, 2024 (Act No. 45 of 2023), positioning loneliness as a societal â€” not individual â€” challenge and mandating national and local governments to act.<br><br>
<b>Key provisions:</b> A Cabinet-level Minister of State for Loneliness; mandatory priority plans with specific goals and timelines; public-private coordination platforms; dedicated funding for NPOs and local government; mandated research collection.<br><br>
<b>Context:</b> Japan coined <em>hikikomori</em> (extreme social withdrawal). By 2022, approximately 1.46 million people (â‰ˆ2% of population) were affected. The law also addresses <em>kodokushi</em> (dying alone).<br><br>
<b>Effectiveness:</b> Still early (2024 enforcement). Critics note the law does not yet fully account for demographic diversity in loneliness experiences. The UK's 8-year-old strategy still lacks rigorous quantitative evaluation, suggesting long timelines are needed.<br><br>
<b>Source:</b> <a href="https://www.oecd.org/en/blogs/2025/03/supporting-opportunities-insights-from-communities/supporting-japanese-people-affected-by-severe-social-isolation-a-case-study.html" target="_blank">OECD, March 2025</a>`
        },
        {
            id: "jp2", tag: "national", tagLabel: "National",
            name: "Minister of State for Loneliness & Isolation",
            short: "Cabinet-level minister appointed 2021 to coordinate anti-loneliness policy",
            detail: `<b>Overview:</b> In 2021, Japan became the second country (after the UK) to appoint a dedicated Cabinet-level minister for loneliness, reflecting the severity of hikikomori and kodokushi as public health crises.<br><br>
<b>Actions taken:</b> A 2022 comprehensive plan of countermeasures; a 24/7 national loneliness consultation service; expanded counselling and social work programmes; the <em>Hikikomori Voice Station</em> online support platform; Hikikomori Support Centres across prefectures.<br><br>
<b>International work:</b> Japan and the UK maintain regular ministerial dialogue and data sharing on loneliness policy.<br><br>
<b>Source:</b> <a href="https://isvd.or.jp/en/columns/loneliness-isolation-act-two-years" target="_blank">Institute for Social Value Design, 2026</a>`
        }
    ],
    "South Korea": [
        {
            id: "kr1", tag: "national", tagLabel: "National",
            name: "Lonely Death Prevention and Management Act",
            short: "Law mandating government prevention plans and 5-yearly situation reports",
            detail: `<b>Overview:</b> South Korea's Lonely Death (Godoksa) Prevention and Management Act requires the government to publish a comprehensive prevention plan and a situation report every five years. A "lonely death" is now defined as dying in social isolation â€” cut off from family â€” due to suicide or illness.<br><br>
<b>Numbers:</b> South Korea recorded 3,661 lonely deaths in 2023 (up from 3,378 in 2021). An estimated 244,000 people experienced hikikomori-style isolation in 2022. Middle-aged men are disproportionately at risk.<br><br>
<b>2023 amendment:</b> Reclusive youth can now receive up to 650,000 won (â‰ˆ$475) per month in living expenses to help them re-enter society.<br><br>
<b>Seoul initiative:</b> The city of Seoul committed $327 million specifically targeting loneliness and isolation across the metropolitan area.<br><br>
<b>Effectiveness:</b> Experts welcome the measures but say more is needed, particularly given cultural pressures unique to Korean society.<br><br>
<b>Source:</b> <a href="https://edition.cnn.com/2024/10/24/asia/south-korea-loneliness-deaths-intl-hnk" target="_blank">CNN, October 2024</a>`
        }
    ],
    "United States": [
        {
            id: "us1", tag: "national", tagLabel: "National",
            name: "Surgeon General's Advisory on Loneliness",
            short: "2023 six-pillar national framework treating loneliness as a public health crisis",
            detail: `<b>Overview:</b> In May 2023, U.S. Surgeon General Dr. Vivek Murthy issued a landmark Advisory declaring an "epidemic of loneliness and isolation" and laying out a National Strategy to Advance Social Connection based on six foundational pillars.<br><br>
<b>The six pillars:</b>
<ol>
<li><b>Strengthen Social Infrastructure</b> â€” design built environments for connection; invest in local institutions</li>
<li><b>Enact Pro-Connection Public Policies</b> â€” adopt a "connection-in-all-policies" approach across government</li>
<li><b>Mobilize the Health Sector</b> â€” screen for loneliness; train providers; cover social care</li>
<li><b>Reform Digital Environments</b> â€” platform design standards; fund research on technology's impact</li>
<li><b>Deepen Our Knowledge</b> â€” standardise measurement; fund longitudinal research</li>
<li><b>Cultivate a Culture of Connection</b> â€” shift societal norms around seeking connection</li>
</ol>
<b>Scale:</b> Loneliness is estimated to cost the U.S. economy â‰ˆ$400 billion annually. The advisory equates its health risk to smoking 15 cigarettes per day.<br><br>
<b>Source:</b> <a href="https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf" target="_blank">U.S. Surgeon General's Office, 2023</a>`
        }
    ],
    "Sweden": [
        {
            id: "se1", tag: "local", tagLabel: "Local Initiative",
            name: "SÃ¤llBo Intergenerational Housing",
            short: "Mixed-age, mixed-culture housing in Helsingborg to foster community",
            detail: `<b>Overview:</b> SÃ¤llBo (from Swedish <em>sÃ¤llskap</em> "companionship" + <em>bo</em> "to live") is a housing initiative in Helsingborg that intentionally brings together residents of different ages and cultural backgrounds â€” including elderly residents and newly arrived immigrants â€” through shared spaces and structured activities.<br><br>
<b>Effectiveness:</b> Early evaluations show reduced loneliness among participants and improved integration outcomes. The model has attracted international interest as a replicable urban planning approach.<br><br>
<b>Source:</b> <a href="https://www.medscape.com/viewarticle/lonely-planet-how-world-fighting-social-isolation-2025a1000748" target="_blank">Medscape, April 2025</a>`
        },
        {
            id: "se2", tag: "local", tagLabel: "Local Initiative",
            name: "Luleå \"Say Hello\" Campaign",
            short: "2023 city campaign encouraging residents to greet strangers",
            detail: `<b>Overview:</b> In 2023, the city of Luleå in northern Sweden launched a public awareness campaign encouraging residents to greet strangers with a simple "hello" â€” a low-cost, high-frequency intervention targeting everyday social isolation.<br><br>
<b>Rationale:</b> Research shows even brief positive interactions with strangers ("weak ties") meaningfully improve daily wellbeing and reduce feelings of isolation, particularly among people who live alone.<br><br>
<b>Source:</b> <a href="https://www.medscape.com/viewarticle/lonely-planet-how-world-fighting-social-isolation-2025a1000748" target="_blank">Medscape, April 2025</a>`
        },
        {
            id: "se3", tag: "national", tagLabel: "National",
            name: "Sweden's National Loneliness Strategy (2025)",
            short: "Multi-stakeholder national strategy published February 2025",
            detail: `<b>Overview:</b> Sweden released its first national strategy to combat loneliness in February 2025, following a situation analysis published in March 2024. Developed through a 2023 community initiative involving municipalities, civil society, businesses, and academia.<br><br>
<b>Three sub-goals:</b>
<ul>
<li>Social arenas accessible to all â€” regardless of age, background, or ability</li>
<li>Fewer barriers to social participation</li>
<li>Fewer people experiencing long-term severe loneliness</li>
</ul>
<b>Context:</b> 41% of Swedes live alone; 23% report mild loneliness; 13% report having no close friends; 3% experience severe loneliness. Twice as many men under 45 as women report being often/always troubled by loneliness.<br><br>
<b>Source:</b> <a href="https://www.thelocal.se/20250301/sweden-unveils-national-strategy-to-combat-loneliness" target="_blank">The Local Sweden, March 2025</a>`
        }
    ],
    "Denmark": [
        {
            id: "dk1", tag: "national", tagLabel: "National",
            name: "National Partnership Against Loneliness",
            short: "115-stakeholder coalition published Denmark's first national strategy (May 2023)",
            detail: `<b>Overview:</b> Supported by the Danish government, a National Partnership of 115 stakeholders â€” municipalities, regions, companies, civil society â€” produced Denmark's first national strategy and action plan against loneliness in May 2023.<br><br>
<b>Context:</b> More than 1 in 8 Danes over 16 experience loneliness (â‰ˆ600,000 people), with 1 in 5 young people aged 16â€“24 affected. The rate has risen steadily for a decade.<br><br>
<b>Key elements:</b> Multi-sector collaboration; impact measurement via the <em>EnsomhediTal</em> platform (allowing organisations to calculate the socioeconomic value of their interventions); focus on individual, community, and societal levels simultaneously.<br><br>
<b>Source:</b> <a href="https://www.age-platform.eu/proposal-for-national-strategy-against-loneliness-in-denmark/" target="_blank">AGE Platform Europe, 2023</a>`
        }
    ],
    "Germany": [
        {
            id: "de1", tag: "national", tagLabel: "National",
            name: "Loneliness â€” Recognising, Evaluating & Resolutely Confronting It (2021)",
            short: "Parliamentary technical report funding a national Competence Network on Loneliness",
            detail: `<b>Overview:</b> Germany's Committee for Family Affairs, Senior Citizens, Women and Youth published <em>Loneliness â€” Recognising, Evaluating & Resolutely Confronting It</em> in 2021. The report established the national policy framework and partially funded the <em>Kompetenznetz Einsamkeit</em> (Competence Network on Loneliness) to study causes and develop evidence-based interventions.<br><br>
<b>Scope:</b> Addresses the general population across all five dimensions â€” geographic, social, health, economic, and political â€” including the civic engagement implications of loneliness. Germany is one of only 14 countries globally with a published national loneliness policy as of 2024.<br><br>
<b>Funding:</b> Partial funding provided specifically for the Competence Network research organisation; broader intervention funding was not ring-fenced in the initial document.<br><br>
<b>Key priorities:</b> Raising public awareness and reducing stigma; cross-sectoral collaboration between government, private sector, and civil society; building a robust research evidence base; integrating loneliness into broader health and social policy.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Netherlands": [
        {
            id: "nl1", tag: "national", tagLabel: "National",
            name: "One Against Loneliness â€” Action Programme 2022â€“2025",
            short: "â‚¬10.7M/year government action plan distinguishing emotional, social, and existential loneliness",
            detail: `<b>Overview:</b> The Netherlands Ministry of Health, Welfare and Sport launched <em>One Against Loneliness (EÃ©n tegen eenzaamheid)</em> â€” an action programme running 2022â€“2025 with $10.7 million USD annually. A predecessor programme ran 2018â€“2022 at $5.5 million USD annually, making the Netherlands one of the few countries with sustained and transparent loneliness funding.<br><br>
<b>Distinctive feature:</b> The programme explicitly distinguishes between three types of loneliness â€” <em>emotional</em> (lack of close relationships), <em>social</em> (lack of broader network), and <em>existential</em> (lack of meaning and purpose) â€” and tailors interventions accordingly.<br><br>
<b>Scope:</b> Addresses all five dimensions (geographic, social, health, economic, political) for the general population, with focus on vulnerable subgroups including older adults, people with disabilities, and migrants.<br><br>
<b>Interventions:</b> Community connector programmes; training for GPs and home care workers; public awareness campaigns; funding for local municipalities to develop tailored approaches.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Finland": [
        {
            id: "fi1", tag: "national", tagLabel: "National",
            name: "Finland National Loneliness Strategy",
            short: "Decentralised strategy focusing on vulnerable groups and community care",
            detail: `<b>Overview:</b> Finland developed a national strategy addressing loneliness with particular attention to vulnerable groups, reflecting Finland's decentralised public services model. It emphasises building stronger communities and strengthening local approaches.<br><br>
<b>Nordic context:</b> Despite high social trust and comprehensive welfare systems, loneliness remains significant across Nordic countries â€” particularly among younger people and men. The Nordic Welfare Centre coordinates knowledge-sharing across Denmark, Sweden, Finland, and Norway.<br><br>
<b>Source:</b> <a href="https://nordicwelfare.org/pub/good-and-equal-health-in-the-nordics-conference-report/theme-3-prevention-of-loneliness-and-social-isolation.html" target="_blank">Nordic Welfare Centre Conference Report</a>`
        }
    ],
    "Australia": [
        {
            id: "au1", tag: "national", tagLabel: "National",
            name: "A National Strategy to Address Loneliness and Social Isolation (2021)",
            short: "Multi-agency national strategy covering all five dimensions of social isolation",
            detail: `<b>Overview:</b> Australia's <em>National Strategy to Address Loneliness and Social Isolation</em> (2021) was developed with input from the Treasury, the Australian Institute of Health and Welfare, and the Australian Institute of Family Studies. It provides a whole-of-government framework targeting both the general population and vulnerable subgroups.<br><br>
<b>Scope:</b> Covers all five dimensions identified in international research: geographic, social, health, economic, and political. The strategy explicitly distinguishes between loneliness (subjective) and social isolation (objective), and includes separate reports on <em>Understanding and Defining Loneliness & Social Isolation</em> (2022).<br><br>
<b>Funding:</b> A coalition of three national organisations submitted specific budget proposals to government. As of the scoping review (2024), no concrete funding pledge had been made â€” though the strategy was accompanied by advocacy for investment in social prescribing and community infrastructure.<br><br>
<b>Context:</b> Swinburne University's Australian Loneliness Report found 1 in 4 Australians experience loneliness regularly. Australia's approach was partly inspired by the UK model and Japan's legislative approach.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Canada": [
        {
            id: "ca1", tag: "national", tagLabel: "National",
            name: "Report on the Social Isolation of Seniors",
            short: "National Seniors Council report (2014) establishing the policy baseline for social isolation",
            detail: `<b>Overview:</b> Canada's National Seniors Council published its foundational <em>Report on the Social Isolation of Seniors</em> in 2014, followed by <em>A Profile of Social Isolation in Canada</em> (2006). These technical reports established the evidence base and policy language used by all subsequent Canadian initiatives.<br><br>
<b>Scope:</b> Primarily focused on older adults (65+). The reports identified key risk factors â€” living alone, bereavement, low income, disability â€” and recommended a whole-of-government response. However, no concrete funding was pledged at the time of publication.<br><br>
<b>Subsequent action:</b> The 2023 federal budget allocated funding to community-based organisations via the New Horizons for Seniors Program. A Statistics Canada 2021 survey found 37% of Canadians aged 15+ reported loneliness, accelerating calls for a comprehensive national strategy.<br><br>
<b>Source:</b> <a href="https://www.canada.ca/en/national-seniors-council/programs/publications-reports/2014/social-isolation.html" target="_blank">National Seniors Council of Canada, 2014</a>`
        }
    ],
    "Ireland": [
        {
            id: "ie1", tag: "health", tagLabel: "Healthcare",
            name: "Stronger Together â€” HSE Mental Health Promotion Plan 2022â€“2027",
            short: "Ireland's national health strategy explicitly addressing loneliness as a mental health determinant",
            detail: `<b>Overview:</b> Ireland's Health Service Executive published <em>Stronger Together: The HSE Mental Health Promotion Plan 2022â€“2027</em>, which explicitly addresses loneliness and social isolation as key determinants of mental health. It is Ireland's most comprehensive government document targeting loneliness at a national level.<br><br>
<b>Scope:</b> General population with vulnerable subgroups including older adults, young people, and those with chronic illness. The plan emphasises mental health literacy, community-based supports, and education initiatives to reduce stigma around seeking social connection.<br><br>
<b>Funding:</b> No specific ring-fenced budget for loneliness interventions was identified in the plan, though it operates within the broader HSE mental health budget.<br><br>
<b>Complementary programmes:</b> The government also funds ALONE (national charity for older people's loneliness) and the Connecting Ireland rural transport programme, which addresses structural isolation in remote communities.<br><br>
<b>Source:</b> <a href="https://www.hse.ie/eng/services/list/4/mental-health-services/strengthening-our-mental-health-promotion-prevention-and-early-intervention/" target="_blank">Health Service Executive Ireland, 2022</a>`
        }
    ],
    "Norway": [
        {
            id: "no1", tag: "national", tagLabel: "National",
            name: "Norwegian Public Health Strategy â€” Loneliness as a Health Determinant",
            short: "National public health frameworks explicitly classify loneliness as a social determinant of health",
            detail: `<b>Overview:</b> Norway's public health strategies formally recognise loneliness and social isolation as key social determinants of health. The Norwegian Institute of Public Health (Folkehelseinstituttet) conducts regular national monitoring and publishes loneliness prevalence data across age groups.<br><br>
<b>Youth focus:</b> Norway's Ungdata survey (the world's largest annual youth lifestyle study) tracks loneliness trends among 13â€“19 year-olds. Findings have directly driven policy including school mental health investments.<br><br>
<b>Nordic cooperation:</b> Norway co-funds the Nordic Welfare Centre's cross-national loneliness research programme alongside Denmark, Sweden, and Finland.<br><br>
<b>Source:</b> <a href="https://www.fhi.no/en/op/public-health-report-2022/" target="_blank">Norwegian Institute of Public Health, Public Health Report 2022</a>`
        }
    ],
    "Belgium": [
        {
            id: "be1", tag: "national", tagLabel: "National",
            name: "Federal Plan for Social Cohesion",
            short: "Federal plan funding community centres and social bond programmes in deprived areas",
            detail: `<b>Overview:</b> Belgium's Federal Plan for Social Cohesion (Plan de cohÃ©sion sociale) funds community centres in socially deprived urban and rural areas with an explicit mandate to reduce social isolation. The programme channels resources to local associations that facilitate social participation.<br><br>
<b>Flanders:</b> The Flemish government separately runs the Samenlevingsopbouw (Community Development) programme, employing over 400 community workers whose explicit goal is reducing isolation and building social cohesion in vulnerable neighbourhoods.<br><br>
<b>Brussels:</b> The Brussels-Capital Region has a dedicated "Contrat de Quartier Durable" funding neighbourhood projects that reduce isolation, with loneliness reduction as an explicit evaluation criterion since 2022.<br><br>
<b>Source:</b> <a href="https://www.mi-is.be/fr/plan-de-cohesion-sociale" target="_blank">Belgian Federal Social Integration Service</a>`
        }
    ],
    "New Zealand": [
        {
            id: "nz1", tag: "national", tagLabel: "National",
            name: "Kia Ora Hauora â€” Social Connection Strategy",
            short: "National health strategy embedding social connection as a health outcome across all DHBs",
            detail: `<b>Overview:</b> New Zealand's health system reform (2022) created Health New Zealand (Te Whatu Ora), which embeds social connection as a core health outcome. District Health Boards are required to report on loneliness metrics and fund social prescribing pathways.<br><br>
<b>MÄori lens:</b> New Zealand's approach is distinctive in grounding social connection policy in te ao MÄori concepts â€” particularly <em>whanaungatanga</em> (kinship and sense of belonging) â€” recognising that Indigenous collective wellbeing frameworks offer transferable insights.<br><br>
<b>Statistics:</b> New Zealand's 2021 General Social Survey found 16% of adults experienced loneliness, with those aged 15â€“24 and 75+ most affected.<br><br>
<b>Source:</b> <a href="https://www.stats.govt.nz/information-releases/social-indicators-new-zealand-2021-general-social-survey" target="_blank">Statistics New Zealand, General Social Survey 2021</a>`
        }
    ],
    "France": [
        {
            id: "fr1", tag: "national", tagLabel: "National",
            name: "Pacte des SolidaritÃ©s (Solidarity Pact)",
            short: "2023â€“2027 national solidarity pact with loneliness reduction as an explicit pillar",
            detail: `<b>Overview:</b> France's Pacte des SolidaritÃ©s (2023â€“2027) is a comprehensive anti-poverty and social cohesion strategy. Its fourth pillar, "Renforcer l'inclusion sociale" (Strengthen Social Inclusion), explicitly targets isolation and loneliness, particularly among older adults and young people not in employment, education, or training (NEET).<br><br>
<b>Key measures:</b> â‚¬1.5 billion over four years; expansion of the Monalisa (Mobilisation nationale contre l'isolement des Ã¢gÃ©s) network of 15,000 volunteers visiting isolated elderly people; funding for civic service programmes where young people provide companionship to isolated seniors.<br><br>
<b>Context:</b> The Fondation de France found 5 million people in France were severely isolated in 2021 â€” a figure that rose from 3 million in 2010, the largest increase in Europe over that period.<br><br>
<b>Source:</b> <a href="https://solidarites.gouv.fr/le-pacte-des-solidarites" target="_blank">French Ministry of Solidarity, Autonomy and Disability</a>`
        }
    ],
    "Albania": [
        {
            id: "al1", tag: "national", tagLabel: "National",
            name: "National Action Plan on Aging 2020â€“2024",
            short: "$750K funded action plan from Albania's Ministry of Health targeting older adults' social isolation",
            detail: `<b>Overview:</b> Albania's Ministry of Health & Social Protection published the <em>National Action Plan on Aging 2020â€“2024</em>, which explicitly addresses social isolation among adults aged 65+. It is notable for being one of only four countries in a 52-country scoping review with a concrete identified funding allocation.<br><br>
<b>Funding:</b> $0.75 million USD allocated over five years â€” a meaningful commitment relative to Albania's public health budget, and one of the most transparent funding pledges among countries surveyed.<br><br>
<b>Scope:</b> Addresses geographic, social, health, economic, and political dimensions of isolation. Interventions include community day centres, home-visit programmes for isolated older adults, and intergenerational activities.<br><br>
<b>Context:</b> Albania has experienced significant rural depopulation and emigration, leaving older adults in rural areas particularly vulnerable to social isolation. The plan reflects a growing regional awareness of loneliness as a policy issue in South-East Europe.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Austria": [
        {
            id: "at1", tag: "national", tagLabel: "National",
            name: "Overcoming Loneliness (2023)",
            short: "Austrian federal ministry portal consolidating national loneliness information and referral pathways",
            detail: `<b>Overview:</b> Austria's Federal Ministry of Social Affairs, Health, Care and Consumer Protection launched <em>Overcoming Loneliness (Einsamkeit Ã¼berwinden)</em> in 2023 â€” a government information and coordination portal that consolidates national resources, raises public awareness, and signposts individuals to local support services.<br><br>
<b>Scope:</b> Targets the general population across geographic, social, health, and economic dimensions. The document acknowledges loneliness across all age groups â€” not just older adults â€” and includes sections on digital loneliness.<br><br>
<b>Funding:</b> No specific budget allocation was identified in the published document; the portal primarily serves an awareness and coordination function rather than funding direct interventions.<br><br>
<b>Significance:</b> Austria's policy marks a shift from treating loneliness solely as an elderly-care issue to a cross-cutting social determinant of health. It is one of 14 countries globally with a published national loneliness document as of 2024.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Czech Republic": [
        {
            id: "cz1", tag: "national", tagLabel: "National",
            name: "Social Inclusion Strategy 2021â€“2030 (2019)",
            short: "Decade-long social inclusion strategy addressing isolation through mental health and employment",
            detail: `<b>Overview:</b> Czech Republic's Ministry of Labour & Social Affairs published the <em>Social Inclusion Strategy 2021â€“2030</em> in 2019. While broader than loneliness alone, it explicitly targets social isolation as a component of exclusion, making it one of the most comprehensive Eastern European policy documents in this space.<br><br>
<b>Distinctive approach:</b> The strategy uniquely includes mental health interventions (addressing the psychological drivers of isolation) alongside employment integration (addressing economic exclusion) and community participation programmes â€” addressing loneliness across all five dimensions.<br><br>
<b>Funding:</b> Primarily funded through EU Structural Funds and the European Social Fund, allowing for more substantial resourcing than purely national budgets. No specific ring-fenced loneliness budget was identified.<br><br>
<b>Scope:</b> General population with focus on marginalised groups including Roma communities, long-term unemployed, people with disabilities, and residents of socially excluded localities.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Italy": [
        {
            id: "it1", tag: "national", tagLabel: "National",
            name: "Policies for Active Ageing in Italy (2022)",
            short: "Italy's Family Department strategy targeting social isolation among older adults",
            detail: `<b>Overview:</b> Italy's Family Department published <em>Policies for Active Ageing in Italy: What Are the Possible Objectives?</em> in 2022, establishing a policy framework that explicitly addresses social isolation among older adults (65+) as a national concern.<br><br>
<b>Scope:</b> Covers geographic, social, health, and economic dimensions of isolation. Italy's geography â€” with large elderly populations in depopulating rural areas and Southern regions â€” makes geographic isolation a particularly acute dimension.<br><br>
<b>Funding:</b> The document acknowledges the need for funding without making a concrete pledge. Italy's National Recovery and Resilience Plan (PNRR) includes investments in community welfare that partially address isolation, though not under an explicit loneliness label.<br><br>
<b>Context:</b> Italy has one of the world's oldest populations (23% over 65) and among Europe's highest proportions of people living alone. The COVID-19 pandemic dramatically increased public awareness of isolation's health impacts, directly driving this policy document.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Malta": [
        {
            id: "mt1", tag: "national", tagLabel: "National",
            name: "National Strategic Policy for Active Ageing 2023â€“2030",
            short: "Malta's 7-year ageing strategy with gender-specific loneliness interventions",
            detail: `<b>Overview:</b> Malta's Ministry for Senior Citizens and Active Ageing published the <em>National Strategic Policy for Active Ageing 2023â€“2030</em>, which addresses social isolation among older adults as a central concern. Malta is the smallest country to have published a dedicated national loneliness-related policy document.<br><br>
<b>Distinctive feature:</b> The strategy is notable for including <em>gender-specific interventions</em> â€” recognising that men and women experience and respond to social isolation differently, particularly after bereavement or retirement.<br><br>
<b>Scope:</b> Covers geographic, social, and health dimensions. Interventions include community day centre expansion, intergenerational programmes, and digital inclusion training for older adults.<br><br>
<b>Funding:</b> No specific budget allocation was identified in the published document. Malta's small size means national programmes can achieve significant reach with modest investment.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Switzerland": [
        {
            id: "ch1", tag: "health", tagLabel: "Healthcare",
            name: "Social Resources as Health Protection (2014 & 2020)",
            short: "Swiss Health Observatory research establishing social connection as a formal health protection factor",
            detail: `<b>Overview:</b> Switzerland's approach to loneliness is grounded in public health research. The Swiss Health Observatory published <em>Social Resources as Health Protection: Mode of Action and Dissemination in Swiss Population</em> (2014), followed by Health Promotion Switzerland's <em>Social Resources â€” Promotion of Social Resources as Important Contribution to Mental Health</em> (2020).<br><br>
<b>Framework:</b> Switzerland's policy treats social resources (networks, belonging, trust) as measurable <em>health protection factors</em> â€” formally equivalent to physical health behaviours like exercise and diet. This framing is integrated into the national health promotion system.<br><br>
<b>Scope:</b> General population with vulnerable subgroups. Addresses health and social dimensions; less emphasis on geographic and political dimensions compared to other countries' policies.<br><br>
<b>Funding:</b> No specific ring-fenced loneliness budget was identified. Programmes are funded through the broader Health Promotion Switzerland infrastructure.<br><br>
<b>Significance:</b> Switzerland's approach â€” embedding social connection within the health promotion system rather than creating a standalone loneliness ministry â€” represents a distinctive model that may be more sustainable long-term.<br><br>
<b>Source:</b> <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11061917/" target="_blank">Goldman et al., scoping review of 52 countries, 2024</a>`
        }
    ],
    "Portugal": [
        {
            id: "pt1", tag: "national", tagLabel: "National",
            name: "Programa de Apoio Ã  IntegraÃ§Ã£o Social (PAIS)",
            short: "National social integration programme targeting isolated elderly and youth in deprived areas",
            detail: `<b>Overview:</b> Portugal's PAIS programme coordinates local authority and NGO interventions targeting social isolation, with a focus on isolated elderly in rural interior regions and disadvantaged youth in suburban Lisbon and Porto. The programme funds neighbourhood social workers with caseloads specifically structured around isolation cases.<br><br>
<b>Context:</b> Portugal has one of Europe's highest proportions of elderly people living alone (nearly 30% of those aged 65+) combined with significant rural depopulation, creating acute structural loneliness risks.<br><br>
<b>Volunteer network:</b> The Banco Local de Voluntariado coordinates over 60,000 volunteers across 278 municipalities, many engaged in befriending and social inclusion activities targeting isolation.<br><br>
<b>Source:</b> <a href="https://www.seg-social.pt/programas-de-apoio-a-integracao-social" target="_blank">Portuguese Social Security Institute</a>`
        }
    ]
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  GeoJSON name â†’ Gallup data key mapping
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

const NAME_MAP = {
    "USA":                 "United States",
    "United Kingdom of Great Britain and Northern Ireland": "United Kingdom",
    "Republic of Korea":                        "South Korea",
    "Korea":                                    "South Korea",
    "Democratic Republic of the Congo":         "Democratic Republic of the Congo",
    "Republic of the Congo":                    "Republic of the Congo",
    "Congo":                                    "Republic of the Congo",
    "CÃ´te d'Ivoire":                            "CÃ´te d'Ivoire",
    "Taiwan":                                   "Taiwan (Province of China)",
    "Hong Kong":                                "Hong Kong (S.A.R. of China)",
    "Bosnia and Herz.":                         "Bosnia and Herzegovina",
    "Dominican Rep.":                           "Dominican Republic",
    "eSwatini":                                 "Eswatini",
    "Palestine":                                "Palestinian Territories",
    "Turkiye":                                  "TÃ¼rkiye",
    "Turkey":                                   "TÃ¼rkiye",
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
    document.getElementById("pd-title").textContent = p.name;
    document.getElementById("pd-body").innerHTML    = p.detail;
    document.getElementById("policy-detail").classList.add("show");
}

function closePolicyDetail() {
    document.getElementById("policy-detail").classList.remove("show");
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
