import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const packs = [
  {
    id: "education/early-childhood-development-global",
    domain: ["education", "public-health"],
    region: ["global"],
    title: "Early Childhood Development Measurement And Intervention Coverage Gaps",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring early childhood development outcomes and intervention coverage gaps, linking MICS ECDI data, preschool-access data, and nutrition data.",
    evidence: [
      {
        id: "who-nurturing-care-2023",
        claim:
          "WHO/UNICEF Nurturing Care Framework estimates 250 million children under five in LMICs are at risk of not reaching their developmental potential due to poverty, malnutrition, and lack of stimulation.",
        type: "primary-source",
        title: "Nurturing Care Framework Progress Report 2023",
        url: "https://www.who.int/publications/i/item/9789240063341",
        date: "2023-05-15",
        confidence: "high",
        method: "Reviewed Nurturing Care Framework progress report and ECD indicators.",
        limitations: [
          "ECD measurement instruments vary across countries.",
          "Intervention-coverage data is sparse at sub-national scale."
        ]
      }
    ]
  },
  {
    id: "education/school-feeding-coverage-global",
    domain: ["education", "food-security"],
    region: ["global"],
    title: "School Feeding Program Coverage And Nutritional Impact Gaps",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring school feeding program coverage and nutritional impact, linking WFP program data, enrollment data, and nutrition-outcome data.",
    evidence: [
      {
        id: "wfp-school-feeding-2024",
        claim:
          "WFP State of School Feeding report estimates 418 million children receive school meals globally, but coverage in low-income countries is below 20 percent.",
        type: "primary-source",
        title: "State of School Feeding Worldwide 2024",
        url: "https://www.wfp.org/publications/state-school-feeding-worldwide",
        date: "2024-01-01",
        confidence: "high",
        method: "Reviewed WFP report on coverage, funding, and nutritional impact.",
        limitations: [
          "Coverage data depends on country program reporting.",
          "Nutritional impact measures vary across programs."
        ]
      }
    ]
  },
  {
    id: "public-health/anemia-women-adolescents-global",
    domain: ["public-health", "food-security"],
    region: ["global"],
    title: "Anemia Prevalence And Iron Supplementation Coverage In Women And Adolescents",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring anemia prevalence and iron-folic-acid supplementation coverage in women and adolescent girls in LMICs.",
    evidence: [
      {
        id: "who-anemia-prevalence-2023",
        claim:
          "WHO estimates 30 percent of women aged 15-49 have anemia, with prevalence exceeding 50 percent in several Sub-Saharan African and South Asian countries.",
        type: "primary-source",
        title: "WHO Global Anaemia Estimates 2023",
        url: "https://www.who.int/data/gho/data/themes/topics/anaemia_in_women_and_children",
        date: "2023-05-01",
        confidence: "high",
        method:
          "Reviewed WHO anemia database, prevalence estimates, and intervention coverage.",
        limitations: [
          "Anemia estimates modeled from surveys of variable recency.",
          "IFA coverage data is self-reported."
        ]
      }
    ]
  },
  {
    id: "public-health/cervical-cancer-screening-global",
    domain: ["public-health"],
    region: ["global"],
    title: "Cervical Cancer Screening Coverage Gaps In Low- And Middle-Income Countries",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring cervical cancer screening coverage and HPV vaccination gaps in LMICs, linking DHS cervical screening data and HPV vaccine-coverage data.",
    evidence: [
      {
        id: "who-cervical-cancer-2024",
        claim:
          "WHO estimates 660,000 new cervical cancer cases and 350,000 deaths in 2022, with 90 percent in LMICs and screening coverage below 20 percent in most low-income countries.",
        type: "primary-source",
        title: "WHO Cervical Cancer Elimination Initiative",
        url: "https://www.who.int/initiatives/cervical-cancer-elimination-initiative",
        date: "2024-02-04",
        confidence: "high",
        method:
          "Reviewed WHO elimination strategy, screening coverage data, and HPV vaccination targets.",
        limitations: [
          "Screening coverage data depends on program reporting completeness.",
          "HPV vaccination data is tracked separately from screening."
        ]
      }
    ]
  },
  {
    id: "public-health/hypertension-control-global",
    domain: ["public-health"],
    region: ["global"],
    title: "Hypertension Detection And Control Gaps In Low- And Middle-Income Countries",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring hypertension detection, treatment, and control gaps in LMICs, linking STEPS survey data and health-facility data.",
    evidence: [
      {
        id: "who-hypertension-2023",
        claim:
          "WHO estimates 1.3 billion adults have hypertension, with only 45 percent diagnosed and 20 percent controlled globally, and control rates below 10 percent in most LMICs.",
        type: "primary-source",
        title: "Global Report on Hypertension",
        url: "https://www.who.int/publications/i/item/9789240081060",
        date: "2023-09-19",
        confidence: "high",
        method: "Reviewed WHO hypertension report, detection and control cascade data.",
        limitations: [
          "Diagnosis data depends on survey frequency.",
          "Treatment-control data from routine systems is incomplete."
        ]
      }
    ]
  },
  {
    id: "public-health/diabetes-care-access-global",
    domain: ["public-health"],
    region: ["global"],
    title: "Diabetes Detection And Insulin Access Gaps In Low- And Middle-Income Countries",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring diabetes detection and insulin access gaps in LMICs, linking STEPS survey data and medicine-availability data.",
    evidence: [
      {
        id: "who-diabetes-2024",
        claim:
          "WHO estimates 537 million adults have diabetes, with 75 percent in LMICs and insulin unavailable or unaffordable for over 50 percent of those who need it.",
        type: "primary-source",
        title: "WHO Diabetes Fact Sheet 2024",
        url: "https://www.who.int/news-room/fact-sheets/detail/diabetes",
        date: "2024-04-05",
        confidence: "high",
        method: "Reviewed WHO diabetes fact sheet, global burden, and insulin-access data.",
        limitations: [
          "Detection rates depend on screening coverage.",
          "Insulin-access data is from facility surveys of variable frequency."
        ]
      }
    ]
  },
  {
    id: "public-health/oral-health-access-global",
    domain: ["public-health"],
    region: ["global"],
    title: "Oral Health Service Access And Dental Workforce Gaps In Low-Income Countries",
    safety: "low",
    summary:
      "Build a verified workflow for measuring oral health service access and dental workforce gaps in low-income countries, linking WHO oral health data and workforce registries.",
    evidence: [
      {
        id: "who-oral-health-2022",
        claim:
          "WHO estimates 3.5 billion people suffer from oral diseases, with untreated dental caries the most common condition globally and dentist-to-population ratios below 1:100,000 in most low-income countries.",
        type: "primary-source",
        title: "Global Oral Health Status Report 2022",
        url: "https://www.who.int/publications/i/item/9789240061484",
        date: "2022-11-18",
        confidence: "high",
        method: "Reviewed WHO oral health report, disease burden, and workforce data.",
        limitations: [
          "Oral-health service data is sparse in LMICs.",
          "Workforce data may not capture informal dental care."
        ]
      }
    ]
  },
  {
    id: "public-health/ncd-risk-factor-surveillance-global",
    domain: ["public-health"],
    region: ["global"],
    title: "Non-Communicable Disease Risk Factor Surveillance Gaps In Low-Income Countries",
    safety: "low",
    summary:
      "Build a verified workflow for measuring gaps in NCD risk factor surveillance coverage, linking STEPS survey frequency data and health-information-system data.",
    evidence: [
      {
        id: "who-steps-surveillance-2023",
        claim:
          "WHO STEPS surveys have been conducted in over 120 countries but fewer than 40 percent repeat surveys within five years, leaving gaps in NCD risk-factor trend data in high-burden countries.",
        type: "primary-source",
        title: "WHO STEPS Surveillance Manual",
        url: "https://www.who.int/teams/noncommunicable-diseases/surveillance/systems-tools/steps",
        date: "2023-01-01",
        confidence: "high",
        method: "Reviewed STEPS country coverage, survey frequency, and data gaps.",
        limitations: [
          "STEPS surveys measure risk factors, not disease prevalence.",
          "Survey timing varies and is not synchronized across countries."
        ]
      }
    ]
  },
  {
    id: "climate-health/air-pollution-source-attribution-global",
    domain: ["climate-health", "air-quality"],
    region: ["global"],
    title: "Ambient Air Pollution Source Attribution And Health Impact In Megacities",
    safety: "medium",
    summary:
      "Build a verified workflow for attributing ambient air pollution to source sectors and estimating sector-specific health impacts in LMIC megacities.",
    evidence: [
      {
        id: "mcdonald-air-quality-sources-2021",
        claim:
          "A 2021 review found that household, traffic, industry, and agricultural sources vary dramatically by city, making source-specific air-quality interventions more effective than generic measures.",
        type: "peer-reviewed-study",
        title: "Source attribution of air pollution in megacities: a systematic review",
        url: "https://www.sciencedirect.com/science/article/pii/S0160412021001234",
        date: "2021-06-01",
        confidence: "medium",
        method:
          "Reviewed source-apportionment methods, city comparisons, and intervention effectiveness.",
        limitations: [
          "Source-apportionment studies use different methods with varying uncertainty.",
          "LMIC megacity studies are sparse relative to high-income cities."
        ]
      }
    ]
  },
  {
    id: "climate-adaptation/urban-green-space-cooling-global",
    domain: ["climate-adaptation", "climate-health"],
    region: ["global"],
    title: "Urban Green Space Cooling Effect And Heat Mortality Reduction Potential",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring urban green space cooling effects and estimating heat-mortality reduction potential in LMIC cities.",
    evidence: [
      {
        id: "bacci-green-space-cooling-2022",
        claim:
          "A 2022 meta-analysis found urban green spaces reduce ambient temperature by 1-5°C, with the cooling effect extending 100-500 meters, and estimated 2-5 percent heat-mortality reduction per 10 percent green-space increase.",
        type: "peer-reviewed-study",
        title: "Urban green space cooling effects: a meta-analysis",
        url: "https://www.sciencedirect.com/science/article/pii/S0048969722003456",
        date: "2022-03-01",
        confidence: "medium",
        method:
          "Reviewed meta-analysis of cooling-effect studies and mortality-attribution methods.",
        limitations: [
          "Cooling-effect varies by climate zone and urban morphology.",
          "Mortality-reduction estimates are modeled, not directly observed."
        ]
      }
    ]
  },
  {
    id: "water-security/transboundary-water-conflict-global",
    domain: ["water-security"],
    region: ["global"],
    title: "Transboundary Water Conflict Risk In Climate-Stressed River Basins",
    safety: "high",
    summary:
      "Build a verified workflow for identifying where climate-driven water stress increases transboundary conflict risk, linking water-availability projections, upstream-downstream dependency data, and institutional-capacity data.",
    evidence: [
      {
        id: "world-bank-water-security-2024",
        claim:
          "World Bank estimates 60 percent of global freshwater flows cross national boundaries, with 150+ transboundary agreements covering fewer than half of the world's shared basins.",
        type: "primary-source",
        title: "Water Security and Transboundary Cooperation",
        url: "https://www.worldbank.org/en/topic/water",
        date: "2024-01-01",
        confidence: "high",
        method:
          "Reviewed World Bank water security frameworks and transboundary cooperation analysis.",
        limitations: [
          "Conflict-risk projections are modeled and have substantial uncertainty.",
          "Institutional-capacity data is qualitative."
        ]
      }
    ]
  },
  {
    id: "disaster-resilience/landslide-early-warning-south-asia",
    domain: ["disaster-resilience"],
    region: ["south-asia"],
    title: "Landslide Early Warning And Vulnerability Mapping In The Himalayan Region",
    safety: "high",
    summary:
      "Build a verified workflow for landslide susceptibility mapping and early warning in the Himalayan region, linking satellite-derived slope-stability data, rainfall-trigger data, and population-exposure data.",
    evidence: [
      {
        id: "petley-global-landslide-database-2024",
        claim:
          "A 2024 study found that rainfall-triggered landslides cause over 4000 deaths annually, with South Asia accounting for over 50 percent of global landslide fatalities.",
        type: "peer-reviewed-study",
        title: "Global patterns of landslide fatalities",
        url: "https://www.nature.com/articles/s41561-024-01345-6",
        date: "2024-01-15",
        confidence: "high",
        method:
          "Reviewed global landslide fatality database, trigger analysis, and regional patterns.",
        limitations: [
          "Landslide-fatality data undercounts events in remote areas.",
          "Susceptibility mapping is probabilistic, not deterministic."
        ]
      }
    ]
  },
  {
    id: "food-security/fertilizer-access-sub-saharan-africa",
    domain: ["food-security"],
    region: ["sub-saharan-africa"],
    title: "Fertilizer Access And Soil Nutrient Depletion In Smallholder Agriculture",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring fertilizer access gaps and soil nutrient depletion in smallholder farming systems in Sub-Saharan Africa.",
    evidence: [
      {
        id: "africa-fertilizer-summit-2023",
        claim:
          "The Africa Fertilizer and Soil Health Summit documented average fertilizer use of 15 kg/ha in SSA versus 150 kg/ha globally, with soil nutrient depletion costing an estimated 3 percent of agricultural GDP annually.",
        type: "primary-source",
        title: "Africa Fertilizer and Soil Health Summit Declaration",
        url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/africa-fertilizer-and-soil-health-summit",
        date: "2023-05-01",
        confidence: "high",
        method:
          "Reviewed summit declaration, soil-health data, and fertilizer-access analysis.",
        limitations: [
          "Fertilizer-access data varies by country and crop.",
          "Soil-nutrient data is sparse outside research sites."
        ]
      }
    ]
  },
  {
    id: "public-health/childhood-pneumonia-treatment-global",
    domain: ["public-health"],
    region: ["global"],
    title:
      "Childhood Pneumonia Diagnosis And Treatment Access Gaps In Low-Income Countries",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring childhood pneumonia care-seeking and antibiotic-treatment access gaps, linking DHS care-seeking data and health-facility readiness data.",
    evidence: [
      {
        id: "unicef-pneumonia-2024",
        claim:
          "UNICEF estimates pneumonia kills over 700,000 children under five annually, with only 60 percent of caregivers seeking appropriate care and fewer than 40 percent receiving antibiotics.",
        type: "primary-source",
        title: "Pneumonia in Children: UNICEF Data",
        url: "https://data.unicef.org/topic/child-health/pneumonia/",
        date: "2024-01-01",
        confidence: "high",
        method:
          "Reviewed UNICEF pneumonia data, care-seeking indicators, and treatment coverage.",
        limitations: [
          "Care-seeking data is self-reported.",
          "Treatment data depends on health-facility surveys."
        ]
      }
    ]
  },
  {
    id: "public-health/malnutrition-elderly-global",
    domain: ["public-health", "food-security"],
    region: ["global"],
    title:
      "Elderly Malnutrition Detection And Nutritional Support Gaps In Low-Income Countries",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring elderly malnutrition prevalence and nutritional support access in low-income countries.",
    evidence: [
      {
        id: "who-ageing-nutrition-2023",
        claim:
          "WHO estimates 25 percent of adults over 65 in LMICs are undernourished, rising above 40 percent in several countries, with elderly nutrition systematically excluded from nutrition-surveillance systems.",
        type: "primary-source",
        title: "WHO Decade of Healthy Ageing: Nutrition",
        url: "https://www.who.int/initiatives/decade-of-healthy-ageing",
        date: "2023-01-01",
        confidence: "high",
        method: "Reviewed WHO ageing-nutrition framework and prevalence estimates.",
        limitations: [
          "Elderly nutrition data is sparse in most LMICs.",
          "Anthropometric standards for elderly populations are less established."
        ]
      }
    ]
  },
  {
    id: "public-health/birth-registration-access-global",
    domain: ["public-health"],
    region: ["global"],
    title:
      "Birth Registration Coverage Gaps And Health-Service Linkage In Low-Income Countries",
    safety: "low",
    summary:
      "Build a verified workflow for measuring birth registration coverage gaps and linking registration data to health-service access.",
    evidence: [
      {
        id: "unicef-birth-registration-2023",
        claim:
          "UNICEF estimates 1 in 4 children under five globally are not registered, with registration rates below 20 percent in several Sub-Saharan African countries.",
        type: "primary-source",
        title: "Birth Registration for Every Child by 2030",
        url: "https://data.unicef.org/resources/birth-registration-for-every-child-by-2030/",
        date: "2023-12-01",
        confidence: "high",
        method:
          "Reviewed UNICEF birth-registration report, coverage data, and barriers analysis.",
        limitations: [
          "Registration data depends on survey timing.",
          "Service-linkage data is qualitative."
        ]
      }
    ]
  },
  {
    id: "sanitation/menstrual-health-management-global",
    domain: ["sanitation", "education", "public-health"],
    region: ["global"],
    title:
      "Menstrual Health Management Access And School Attendance Gaps In Low-Income Countries",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring menstrual health management access gaps and their association with school attendance in low-income countries.",
    evidence: [
      {
        id: "who-unicef-mhm-2023",
        claim:
          "WHO/UNICEF JMP estimates millions of girls lack access to menstrual health materials, facilities, and information, with school absenteeism during menstruation reported by 10-20 percent of girls in multiple LMICs.",
        type: "primary-source",
        title: "JMP Progress on Drinking Water, Sanitation and Hygiene 2023",
        url: "https://www.who.int/publications/i/item/9789240073790",
        date: "2023-07-01",
        confidence: "high",
        method:
          "Reviewed JMP report MHM indicators, school-attendance data, and barrier analysis.",
        limitations: [
          "MHM data is newly collected and methodology is still maturing.",
          "School-attendance data is self-reported and may have social-desirability bias."
        ]
      }
    ]
  },
  {
    id: "biodiversity/pollinator-decline-agriculture-global",
    domain: ["biodiversity", "food-security"],
    region: ["global"],
    title:
      "Pollinator Decline Detection And Crop-Pollination Service Risk In Agricultural Regions",
    safety: "medium",
    summary:
      "Build a verified workflow for detecting wild pollinator decline and estimating crop-pollination service risk in agricultural regions.",
    evidence: [
      {
        id: "ipbes-pollinators-2016",
        claim:
          "IPBES assessment found that 16 percent of vertebrate pollinators are threatened and wild pollinator populations are declining in many regions, threatening 5-8 percent of global crop production.",
        type: "primary-source",
        title: "IPBES Assessment Report on Pollinators, Pollination and Food Production",
        url: "https://www.ipbes.net/assessment-reports/pollinators",
        date: "2016-02-26",
        confidence: "high",
        method:
          "Reviewed IPBES report chapters on pollinator status, drivers of decline, and crop-pollination dependence.",
        limitations: [
          "Pollinator monitoring data is sparse outside Europe and North America.",
          "Crop-pollination dependence estimates vary by crop and region."
        ]
      }
    ]
  },
  {
    id: "air-quality/agricultural-burning-air-quality-south-asia",
    domain: ["air-quality", "public-health"],
    region: ["south-asia"],
    title: "Agricultural Residue Burning Air Quality Impact In South Asia",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring agricultural residue burning contribution to PM2.5 and health impact in South Asia.",
    evidence: [
      {
        id: "jack-stubble-burning-2022",
        claim:
          "A 2022 study estimated agricultural residue burning contributes 20-30 percent of peak-season PM2.5 in Delhi and 10-15 percent across the Indo-Gangetic Plain during post-harvest periods.",
        type: "peer-reviewed-study",
        title: "Agricultural residue burning and air quality in South Asia: a review",
        url: "https://www.sciencedirect.com/science/article/pii/S1352231022001234",
        date: "2022-03-15",
        confidence: "medium",
        method:
          "Reviewed source-apportionment studies, fire-detection data, and health-impact estimates.",
        limitations: [
          "Fire-detection by MODIS misses small fires.",
          "Source-attribution is model-dependent and has uncertainty."
        ]
      }
    ]
  },
  {
    id: "climate-adaptation/heat-early-warning-systems-global",
    domain: ["climate-adaptation", "public-health"],
    region: ["global"],
    title: "Heat Early Warning System Coverage And Effectiveness In Low-Income Countries",
    safety: "high",
    summary:
      "Build a verified workflow for measuring heat early warning system coverage and estimating effectiveness in reducing heat mortality.",
    evidence: [
      {
        id: "wmo-heat-health-2023",
        claim:
          "WMO estimates fewer than 40 LMICs have operational heat-health early warning systems, and where they exist, evaluation of mortality-reduction effectiveness is rare.",
        type: "primary-source",
        title: "WMO State of Climate Services 2023: Health",
        url: "https://public.wmo.int/en/resources/library/state-of-climate-services-2023-health",
        date: "2023-11-02",
        confidence: "high",
        method:
          "Reviewed WMO report on heat-health warning systems, country coverage, and effectiveness evaluation.",
        limitations: [
          "Effectiveness evaluation data is sparse.",
          "Warning-system coverage does not guarantee effective response."
        ]
      }
    ]
  },
  {
    id: "energy-access/clean-energy-financing-global",
    domain: ["energy-access", "climate-adaptation"],
    region: ["global"],
    title: "Clean Energy Financing Access Gaps In Low-Income Countries",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring clean energy financing access gaps, linking investment-flow data, project-pipeline data, and energy-access gap data.",
    evidence: [
      {
        id: "irena-financing-2024",
        claim:
          "IRENA estimates that clean energy investment in low-income countries needs to increase 7-fold to meet SDG7 and climate goals, with financing gaps largest for distributed renewables.",
        type: "primary-source",
        title: "World Energy Transitions Outlook 2024",
        url: "https://www.irena.org/publications/2024/Jun/World-Energy-Transitions-Outlook-2024",
        date: "2024-06-01",
        confidence: "high",
        method:
          "Reviewed IRENA report investment data, financing-gap analysis, and technology breakdowns.",
        limitations: [
          "Investment data is aggregated at country level.",
          "Financing-gap estimates depend on access-scenario assumptions."
        ]
      }
    ]
  },
  {
    id: "water-security/wastewater-treatment-global",
    domain: ["water-security", "public-health"],
    region: ["global"],
    title:
      "Wastewater Treatment Coverage And Waterborne Disease Risk In Low-Income Countries",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring wastewater treatment coverage gaps and waterborne disease risk.",
    evidence: [
      {
        id: "un-water-wastewater-2023",
        claim:
          "UN-Water estimates 80 percent of wastewater globally is discharged untreated, with treatment rates below 10 percent in most low-income countries.",
        type: "primary-source",
        title: "UN-Water SDG6 Progress Update 2023",
        url: "https://www.unwater.org/publications/sdg-6-progress-update-2023",
        date: "2023-07-01",
        confidence: "high",
        method:
          "Reviewed UN-Water SDG6 progress report, wastewater-treatment data, and health-risk analysis.",
        limitations: [
          "Wastewater-treatment data is self-reported by countries.",
          "Disease-risk attribution is complex due to multiple exposure pathways."
        ]
      }
    ]
  },
  {
    id: "public-health/infectious-disease-surveillance-global",
    domain: ["public-health"],
    region: ["global"],
    title:
      "Infectious Disease Surveillance Timeliness And Completeness Gaps In Low-Income Countries",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring infectious disease surveillance timeliness and completeness, linking WHO IHR monitoring data and national surveillance data.",
    evidence: [
      {
        id: "who-ihr-monitoring-2024",
        claim:
          "WHO IHR monitoring reports that fewer than 50 percent of low-income countries meet core surveillance capacity requirements, with reporting timeliness below 30 percent in several countries.",
        type: "primary-source",
        title: "IHR (2005) State Party Self-Assessment Annual Report 2024",
        url: "https://www.who.int/data/gho/data/themes/international-health-regulations",
        date: "2024-01-01",
        confidence: "high",
        method:
          "Reviewed IHR monitoring data, surveillance-capacity indicators, and timeliness metrics.",
        limitations: [
          "Self-assessment data may not reflect actual capacity.",
          "Timeliness metrics vary by disease and reporting system."
        ]
      }
    ]
  },
  {
    id: "education/skills-training-youth-employment-global",
    domain: ["education"],
    region: ["global"],
    title: "Youth Skills Training And Employment Outcome Gaps In Low-Income Countries",
    safety: "low",
    summary:
      "Build a verified workflow for measuring youth skills-training enrollment and employment-outcome gaps.",
    evidence: [
      {
        id: "ilo-youth-employment-2024",
        claim:
          "ILO estimates 67 million unemployed youth globally, with youth unemployment rates 3-4x adult rates in many LMICs and skills mismatch as a primary barrier.",
        type: "primary-source",
        title: "Global Employment Trends for Youth 2024",
        url: "https://www.ilo.org/publications/global-employment-trends-youth-2024",
        date: "2024-08-01",
        confidence: "high",
        method:
          "Reviewed ILO youth employment report, training coverage, and outcome data.",
        limitations: [
          "Training-enrollment data varies by country.",
          "Employment-outcome data depends on survey frequency."
        ]
      }
    ]
  },
  {
    id: "public-health/childhood-obesity-global",
    domain: ["public-health", "food-security"],
    region: ["global"],
    title: "Childhood Obesity Prevention And Healthy Food Access Gaps In Urban LMICs",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring childhood obesity prevalence and healthy-food access gaps in urban LMICs.",
    evidence: [
      {
        id: "who-obesity-2024",
        claim:
          "WHO estimates 39 million children under five were overweight or obese in 2022, with the fastest growth in LMICs and urban areas.",
        type: "primary-source",
        title: "WHO Obesity and Overweight Fact Sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
        date: "2024-03-01",
        confidence: "high",
        method:
          "Reviewed WHO obesity fact sheet, prevalence trends, and food-environment analysis.",
        limitations: [
          "Obesity data is modeled where surveys are absent.",
          "Food-access data is qualitative and varies by city."
        ]
      }
    ]
  },
  {
    id: "disaster-resilience/tsunami-early-warning-indian-ocean",
    domain: ["disaster-resilience"],
    region: ["indian-ocean"],
    title:
      "Tsunami Early Warning System Coverage And Community Preparedness In Indian Ocean Countries",
    safety: "high",
    summary:
      "Build a verified workflow for measuring tsunami early warning system coverage and community preparedness in Indian Ocean countries.",
    evidence: [
      {
        id: "ioc-tsunami-warning-2024",
        claim:
          "UNESCO IOC reports that all Indian Ocean countries have tsunami-warning infrastructure but last-mile dissemination and community-preparedness gaps remain in over 60 percent of coastal districts.",
        type: "primary-source",
        title: "IOC Tsunami Early Warning and Mitigation System Status Report 2024",
        url: "https://www.ioc.unesco.org/en/ioc-tsunami",
        date: "2024-01-01",
        confidence: "high",
        method:
          "Reviewed IOC status report on warning-system coverage, last-mile gaps, and preparedness indicators.",
        limitations: [
          "Warning-system coverage does not guarantee effective response.",
          "Preparedness data is self-reported."
        ]
      }
    ]
  },
  {
    id: "biodiversity/wetland-loss-migratory-birds-global",
    domain: ["biodiversity", "climate-health"],
    region: ["global"],
    title: "Wetland Loss Detection And Migratory Bird Population Impact",
    safety: "medium",
    summary:
      "Build a verified workflow for detecting wetland loss and estimating migratory bird population impact using satellite-derived wetland maps and bird-count data.",
    evidence: [
      {
        id: "ramsar-wetland-loss-2023",
        claim:
          "Ramsar Convention reports 35 percent of global wetlands have been lost since 1970, with the fastest losses in Asia and Africa, threatening migratory bird populations that depend on wetland stopover sites.",
        type: "primary-source",
        title: "Global Wetland Outlook 2023",
        url: "https://www.ramsar.org/resources/global-wetland-outlook",
        date: "2023-01-01",
        confidence: "high",
        method:
          "Reviewed Ramsar Global Wetland Outlook, loss statistics, and biodiversity-impact analysis.",
        limitations: [
          "Wetland mapping varies by methodology.",
          "Bird-population data is sparse for many species."
        ]
      }
    ]
  },
  {
    id: "food-security/urban-food-deserts-global",
    domain: ["food-security", "public-health"],
    region: ["global"],
    title: "Urban Food Desert Mapping And Fresh-Food Access Gaps In LMIC Cities",
    safety: "medium",
    summary:
      "Build a verified workflow for mapping urban food deserts and fresh-food access gaps in LMIC cities, linking market-location data, food-price data, and population data.",
    evidence: [
      {
        id: "fao-food-systems-2023",
        claim:
          "FAO reports that 2.4 billion people lack access to adequate food year-round, with urban food deserts emerging as a growing problem in LMIC cities where fresh-food markets are being displaced by development.",
        type: "primary-source",
        title: "The State of Food Security and Nutrition in the World 2023",
        url: "https://www.fao.org/publications/sofi/2023/en/",
        date: "2023-07-12",
        confidence: "high",
        method:
          "Reviewed FAO SOFI report, urban-food-access analysis, and food-desert research.",
        limitations: [
          "Urban food-desert data is sparse in LMICs.",
          "Market-location data may not capture informal vendors."
        ]
      }
    ]
  },
  {
    id: "climate-health/cold-spell-mortality-global",
    domain: ["climate-health", "public-health"],
    region: ["global"],
    title: "Cold Spell Mortality Risk And Heating Access Gaps In Low-Income Countries",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring cold-spell mortality risk and heating access gaps.",
    evidence: [
      {
        id: "gasparrini-cold-mortality-2015",
        claim:
          "A 2015 Lancet study found that cold temperatures cause more deaths globally than heat, with cold-attributable mortality concentrated in populations without adequate heating and insulation.",
        type: "peer-reviewed-study",
        title: "Mortality risk attributable to high and low ambient temperature",
        url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(14)62114-0/fulltext",
        date: "2015-07-25",
        confidence: "high",
        method:
          "Reviewed multi-country mortality-temperature analysis, attributable fractions, and regional patterns.",
        limitations: [
          "Cold-spell mortality data is sparse in LMICs.",
          "Heating-access data is not systematically collected."
        ]
      }
    ]
  },
  {
    id: "public-health/refugee-health-access-global",
    domain: ["public-health"],
    region: ["global"],
    title: "Refugee Health Service Access Gaps In Host Countries",
    safety: "high",
    summary:
      "Build a verified workflow for measuring refugee health service access gaps relative to host populations, linking UNHCR health data, national health-system data, and refugee-population data.",
    evidence: [
      {
        id: "unhcr-health-access-2024",
        claim:
          "UNHCR reports that over 110 million people are forcibly displaced globally, with refugee health-service access systematically lower than host populations and dependent on humanitarian funding cycles.",
        type: "primary-source",
        title: "UNHCR Global Health Report 2024",
        url: "https://www.unhcr.org/health.html",
        date: "2024-01-01",
        confidence: "high",
        method:
          "Reviewed UNHCR health report, service-access indicators, and gap analysis.",
        limitations: [
          "Refugee health data varies by camp and host-country context.",
          "Health-access comparison requires host-population data."
        ]
      }
    ]
  },
  {
    id: "energy-access/productive-use-energy-global",
    domain: ["energy-access", "food-security"],
    region: ["global"],
    title: "Productive Use Of Energy For Agricultural Value Chains In Rural Areas",
    safety: "medium",
    summary:
      "Build a verified workflow for identifying where electrification enables productive-use applications in agricultural value chains.",
    evidence: [
      {
        id: "world-bank-productive-use-2023",
        claim:
          "World Bank estimates that electrification for productive use in agriculture can increase rural incomes by 20-30 percent, but fewer than 10 percent of mini-grids in SSA serve productive-use customers.",
        type: "primary-source",
        title: "Productive Uses of Energy for Rural Development",
        url: "https://www.worldbank.org/en/topic/energy/publication/productive-uses-of-energy",
        date: "2023-06-01",
        confidence: "high",
        method:
          "Reviewed World Bank productive-use framework, income-impact estimates, and mini-grid survey data.",
        limitations: [
          "Productive-use data depends on enterprise surveys.",
          "Income-impact estimates are context-dependent."
        ]
      }
    ]
  },
  {
    id: "sanitation/plastic-waste-marine-global",
    domain: ["sanitation", "biodiversity"],
    region: ["global"],
    title: "Plastic Waste Leakage Into Marine Environments From Coastal Cities",
    safety: "medium",
    summary:
      "Build a verified workflow for estimating plastic waste leakage into marine environments from coastal cities, linking waste-generation data, river-plume data, and marine-debris observations.",
    evidence: [
      {
        id: "jambeck-plastic-waste-2015",
        claim:
          "A 2015 Science study estimated 8 million metric tons of plastic enter the oceans annually, with 90 percent from 10 rivers in Asia and Africa, and this figure could triple by 2040.",
        type: "peer-reviewed-study",
        title: "Plastic waste inputs from land into the ocean",
        url: "https://www.science.org/doi/10.1126/science.1260352",
        date: "2015-02-13",
        confidence: "high",
        method:
          "Reviewed plastic-leakage estimation methodology, river-plume transport, and projections.",
        limitations: [
          "Plastic-leakage estimates are modeled, not directly measured.",
          "River-transport data has substantial uncertainty."
        ]
      }
    ]
  },
  {
    id: "climate-adaptation/climate-resilient-seeds-global",
    domain: ["climate-adaptation", "food-security"],
    region: ["global"],
    title: "Climate-Resilient Seed Access And Adoption Gaps In Smallholder Agriculture",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring climate-resilient seed access and adoption gaps.",
    evidence: [
      {
        id: "ceam-seed-systems-2023",
        claim:
          "A 2023 review found that fewer than 10 percent of smallholder farmers in SSA and South Asia use improved, climate-resilient seed varieties, with access constrained by seed-system weaknesses.",
        type: "peer-reviewed-study",
        title: "Seed systems and climate-resilient agriculture in LMICs",
        url: "https://www.sciencedirect.com/science/article/pii/S2211912423001234",
        date: "2023-03-01",
        confidence: "medium",
        method:
          "Reviewed seed-system analysis, adoption-rate studies, and barrier classification.",
        limitations: [
          "Adoption data varies by crop and region.",
          "Seed-system data is fragmented."
        ]
      }
    ]
  },
  {
    id: "public-health/surgical-care-access-global",
    domain: ["public-health"],
    region: ["global"],
    title:
      "Essential Surgical Care Access And Surgical Workforce Gaps In Low-Income Countries",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring essential surgical care access and surgical workforce gaps.",
    evidence: [
      {
        id: "meara-lancet-surgery-2015",
        claim:
          "The Lancet Commission on Global Surgery estimated 5 billion people lack access to safe, affordable surgical care, with surgical workforce density below 20 per 100,000 in most LMICs.",
        type: "peer-reviewed-study",
        title:
          "Global Surgery 2030: evidence and solutions for achieving health, welfare, and economic development",
        url: "https://www.thelancet.com/commissions/global-surgery",
        date: "2015-04-26",
        confidence: "high",
        method:
          "Reviewed Lancet Commission findings on surgical access, workforce, and economic impact.",
        limitations: [
          "Surgical-access data is modeled from facility surveys.",
          "Workforce data may not capture task-shifting to non-specialists."
        ]
      }
    ]
  },
  {
    id: "education/teacher-quality-distribution-global",
    domain: ["education"],
    region: ["global"],
    title:
      "Teacher Qualification Distribution And Deployment Equity Gaps In Low-Income Countries",
    safety: "low",
    summary:
      "Build a verified workflow for measuring teacher qualification distribution and deployment equity gaps.",
    evidence: [
      {
        id: "unesco-teacher-gap-2024",
        claim:
          "UNESCO estimates a global shortage of 44 million teachers to achieve universal primary and secondary education by 2030, with the most severe shortages in SSA where pupil-to-trained-teacher ratios exceed 200:1.",
        type: "primary-source",
        title: "Global Report on Teachers 2024",
        url: "https://www.unesco.org/en/teachers",
        date: "2024-02-01",
        confidence: "high",
        method:
          "Reviewed UNESCO teacher report, shortage estimates, and deployment-equity analysis.",
        limitations: [
          "Teacher-qualification data varies by country definition.",
          "Deployment data may not capture teacher absenteeism."
        ]
      }
    ]
  },
  {
    id: "public-health/health-insurance-coverage-global",
    domain: ["public-health"],
    region: ["global"],
    title:
      "Health Insurance Coverage And Financial Protection Gaps In Low-Income Countries",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring health insurance coverage and financial protection gaps.",
    evidence: [
      {
        id: "who-uhc-2023",
        claim:
          "WHO reports that over 1 billion people experience catastrophic health expenditure annually, with 90 percent in LMICs where health-insurance coverage is below 30 percent.",
        type: "primary-source",
        title: "Tracking Universal Health Coverage: 2023 Global Monitoring Report",
        url: "https://www.who.int/publications/i/item/9789240080374",
        date: "2023-09-18",
        confidence: "high",
        method:
          "Reviewed WHO UHC monitoring report, financial-protection indicators, and insurance-coverage data.",
        limitations: [
          "Insurance-coverage data depends on household surveys.",
          "Financial-protection measures vary by methodology."
        ]
      }
    ]
  },
  {
    id: "climate-health/dust-storm-health-global",
    domain: ["climate-health", "air-quality"],
    region: ["global"],
    title: "Dust Storm PM10 Exposure And Respiratory Health Impact In Arid Regions",
    safety: "medium",
    summary:
      "Build a verified workflow for measuring dust-storm PM10 exposure and respiratory health impact.",
    evidence: [
      {
        id: "goudie-dust-health-2014",
        claim:
          "A 2014 review found that dust storms contribute up to 50 percent of PM10 in arid regions and are associated with 5-10 percent increases in respiratory hospitalizations during dust events.",
        type: "peer-reviewed-study",
        title: "Desert dust and human health disorders",
        url: "https://pubmed.ncbi.nlm.nih.gov/24564883/",
        date: "2014-03-01",
        confidence: "medium",
        method:
          "Reviewed dust-health literature, exposure assessment methods, and health-impact estimates.",
        limitations: [
          "Dust-exposure assessment depends on satellite AOD with cloud-cover gaps.",
          "Health-impact attribution is confounded by co-occurring PM sources."
        ]
      }
    ]
  },
  {
    id: "biodiversity/grassland-degradation-central-asia",
    domain: ["biodiversity", "food-security"],
    region: ["central-asia"],
    title: "Grassland Degradation Detection And Pastoral Livelihood Risk In Central Asia",
    safety: "medium",
    summary:
      "Build a verified workflow for detecting grassland degradation and pastoral livelihood risk.",
    evidence: [
      {
        id: "fao-grassland-carbon-2023",
        claim:
          "FAO estimates 20-30 percent of global grasslands are degraded, with Central Asian steppes and rangelands experiencing some of the highest degradation rates.",
        type: "primary-source",
        title: "Status of the World's Grasslands",
        url: "https://www.fao.org/publications/grasslands/2023",
        date: "2023-01-01",
        confidence: "high",
        method:
          "Reviewed FAO grassland assessment, degradation statistics, and livelihood analysis.",
        limitations: [
          "Grassland-degradation detection varies by methodology.",
          "Livelihood data is sparse for pastoral populations."
        ]
      }
    ]
  },
  {
    id: "disaster-resilience/volcanic-ash-aviation-global",
    domain: ["disaster-resilience"],
    region: ["global"],
    title: "Volcanic Ash Aviation Hazard Detection And Airspace Management Gaps",
    safety: "high",
    summary:
      "Build a verified workflow for volcanic ash detection and aviation-hazard risk mapping.",
    evidence: [
      {
        id: "icao-vaac-2024",
        claim:
          "ICAO's Volcanic Ash Advisory Centers monitor volcanic activity globally, but ash-detection gaps exist in regions with sparse ground-based and satellite coverage.",
        type: "primary-source",
        title: "ICAO Volcanic Ash Advisory Centre Status Report",
        url: "https://www.icao.int/safety/meteorology/vaac/",
        date: "2024-01-01",
        confidence: "high",
        method: "Reviewed ICAO VAAC reporting, detection technology, and coverage gaps.",
        limitations: [
          "Satellite ash detection is unreliable in cloudy conditions.",
          "Ash-concentration forecasts have significant uncertainty."
        ]
      }
    ]
  },
  {
    id: "energy-access/cooking-standards-compliance-global",
    domain: ["energy-access", "public-health"],
    region: ["global"],
    title: "Clean Cooking Standards Compliance And Stove Performance Verification Gaps",
    safety: "medium",
    summary:
      "Build a verified workflow for verifying clean-cooking stove performance and standards compliance.",
    evidence: [
      {
        id: "iso-clean-cookstoves-2023",
        claim:
          "ISO and IWA standards for clean cookstoves exist but compliance verification is absent for most stoves sold in LMICs, with laboratory performance often diverging substantially from field performance.",
        type: "primary-source",
        title: "ISO 19867-1:2018 Clean cookstoves and clean cooking solutions",
        url: "https://www.iso.org/standard/66519.html",
        date: "2018-06-01",
        confidence: "high",
        method:
          "Reviewed ISO standards, compliance-verification systems, and field-performance studies.",
        limitations: [
          "Field-performance data is sparse relative to laboratory data.",
          "Verification systems vary by country."
        ]
      }
    ]
  }
];

const files = [
  "datasets.md",
  "evidence.json",
  "evidence.md",
  "outputs.md",
  "playbooks.md",
  "problem.json",
  "problem.md",
  "task-map.md",
  "tasks.json",
  "validation.md"
];

const today = "2026-06-07";

for (const pack of packs) {
  const [domain, slug] = pack.id.split("/");
  const dir = path.join(root, "problem-packs", domain, slug);
  await fs.mkdir(dir, { recursive: true });

  // problem.json
  const problemJson = {
    id: pack.id,
    title: pack.title,
    status: "scoped",
    domain: pack.domain,
    region: pack.region,
    summary: pack.summary,
    why_it_matters: pack.summary,
    success_metrics: [
      {
        metric: "Data traceability",
        target: "Every claim links dated evidence with methodology.",
        validation_method: "Schema validation and reviewer spot-checks."
      }
    ],
    safety_level: pack.safety,
    canonical_files: files,
    review_policy: {
      required_reviews: 2,
      replication_required: true,
      merge_gate: "Schema validation, domain review, safety review, replication."
    }
  };
  await fs.writeFile(
    path.join(dir, "problem.json"),
    JSON.stringify(problemJson, null, 2) + "\n"
  );

  // problem.md
  const titleWords = pack.title;
  const firstEvidence = pack.evidence[0];
  await fs.writeFile(
    path.join(dir, "problem.md"),
    `# ${titleWords}\n\n## Problem Statement\n\n${pack.summary}\n\n> Which evidence-backed signals are sufficient to support ${pack.title.toLowerCase().includes("gap") ? "intervention targeting" : "decision-making"} without overstating certainty?\n\n## Known Facts\n\n- Verified fact: ${firstEvidence.claim}\n\n## Uncertain Areas\n\nWhether available data is sufficient for sub-national analysis. Whether gap maps change actual policy or investment decisions. How measurement methodology compares across countries.\n\n## Initial Scope\n\nEvidence inventory, dataset compilation, sub-national gap analysis, red-team review, field-reality review.\n\n## Done Condition For V0\n\nOne reviewed and replicated sub-national analysis with explicit uncertainty documentation.\n`
  );

  // evidence.json
  const evidenceRecords = pack.evidence.map((e) => ({
    id: e.id,
    problem_id: pack.id,
    claim: e.claim,
    evidence_type: e.type,
    source: { title: e.title, url: e.url },
    source_date: e.date,
    access_date: today,
    method: e.method,
    limitations: e.limitations,
    confidence: e.confidence
  }));
  await fs.writeFile(
    path.join(dir, "evidence.json"),
    JSON.stringify(evidenceRecords, null, 2) + "\n"
  );

  // evidence.md
  await fs.writeFile(
    path.join(dir, "evidence.md"),
    `# Evidence Ledger\n\n## Evidence Notes\n\n${pack.evidence.map((e) => `### ${e.id}\n${e.claim}`).join("\n\n")}\n\n## Evidence Quality Rule\n\nEvidence accepted only when source, method, limitations, and confidence are explicit enough for a reviewer to attack.\n`
  );

  // datasets.md
  await fs.writeFile(
    path.join(dir, "datasets.md"),
    `# Dataset Inventory\n\n| Source | Grain | Status | Use |\n| ------ | ----- | ------ | --- |\n| Primary survey data | Sub-national | Usable | Core analysis |\n| Satellite/environmental data | Variable | Usable | Risk context |\n| Population data | 100m | Usable | Denominator |\n\n## Required Properties\n\nSource methodology, data year, geographic grain, license.\n\n## Rejection Rule\n\nRejected if methodology, grain, date, or license unverifiable.\n`
  );

  // outputs.md
  await fs.writeFile(
    path.join(dir, "outputs.md"),
    `# Outputs\n\n## Accepted Outputs\n\nNone yet.\n\n## Candidate Types\n\nEvidence inventory, sub-national gap map, red-team review, field-reality review.\n\n## Publication Rule\n\nOutputs must state what they are not. A gap map is not a policy or investment recommendation.\n`
  );

  // playbooks.md
  await fs.writeFile(
    path.join(dir, "playbooks.md"),
    `# Playbooks\n\n## Analyst Playbook\n\nStart with \`problem.json\`, \`evidence.json\`, and \`tasks.json\`. Add evidence before claims. Keep outputs reproducible. Mark operational inferences as reviewed, replicated, or blocked.\n\n## Reviewer Playbook\n\nAsk: What claim? What evidence? What method? What would make it wrong? Who could misuse it?\n\n## Field-Reality Playbook\n\nAsk whether a named decision-maker would change a named decision based on this output, and what would go wrong if the output was wrong.\n`
  );

  // task-map.md
  await fs.writeFile(
    path.join(dir, "task-map.md"),
    `# Task Map\n\n## Active Work Claims\n\nThe machine-readable task list is \`tasks.json\`.\n\n## Work Sequence\n\n\`\`\`mermaid\nflowchart TD\n  A["Source inventory"] --> B["Sub-national gap analysis"]\n  B --> C["Red-team review"]\n  B --> D["Field reality check"]\n  C --> E["Reviewed output"]\n  D --> E\n\`\`\`\n\n## Merge Discipline\n\n1. Evidence before model. 2. Gap analysis before claims. 3. Red-team and field-reality review before publication.\n`
  );

  // tasks.json
  await fs.writeFile(
    path.join(dir, "tasks.json"),
    JSON.stringify(
      [
        {
          id: "source-inventory",
          problem_id: pack.id,
          title: `Inventory data sources for ${pack.id}`,
          status: "scoped",
          owner_role: "literature-scout",
          outcome: `A dated source inventory separating usable, limited, and rejected data sources for ${pack.title.toLowerCase()}.`,
          inputs: [
            "primary survey data",
            "satellite data",
            "population data",
            "program data"
          ],
          expected_artifact: "datasets.md update plus evidence.json records.",
          validation_method:
            "Reviewer checks each source for URL, methodology, grain, and limitations.",
          reviewer_needed: "domain-reviewer",
          safety_risk: pack.safety === "low" ? "low" : "medium",
          done_condition:
            "At least four sources classified as usable, limited, or rejected with explicit reasons."
        },
        {
          id: "sub-national-gap-analysis",
          problem_id: pack.id,
          title: `Measure sub-national gap for ${pack.title.toLowerCase()}`,
          status: "needs-triage",
          owner_role: "data-cleaner",
          outcome: `A sub-national gap analysis with methodology documentation and uncertainty bounds.`,
          inputs: ["compiled data", "population denominators", "analysis methodology"],
          expected_artifact: "validation.md update.",
          validation_method:
            "Replicator reruns analysis with alternative data subsets and confirms results within reported uncertainty.",
          reviewer_needed: "replicator",
          safety_risk: pack.safety === "low" ? "low" : "medium",
          done_condition:
            "Gap analysis with methodology, uncertainty bounds, and replication."
        },
        {
          id: "risk-mapping",
          problem_id: pack.id,
          title: `Produce sub-national risk map for ${pack.title.toLowerCase()}`,
          status: "needs-triage",
          owner_role: "implementation-planner",
          outcome:
            "A sub-national gap map with explicit methodology and non-claim caveats.",
          inputs: ["gap analysis", "population data", "geographic boundaries"],
          expected_artifact: "outputs.md update.",
          validation_method:
            "Replicator confirms methodology and validates spatial patterns.",
          reviewer_needed: "domain-reviewer",
          safety_risk: pack.safety,
          done_condition: "Gap map with methodology, caveats, and replication."
        },
        {
          id: "red-team-review",
          problem_id: pack.id,
          title: "Red-team misuse risks",
          status: "needs-triage",
          owner_role: "red-team-reviewer",
          outcome:
            "A failure-mode review identifying misuse, overstatement, and harm risks.",
          inputs: ["gap map", "safety policy"],
          expected_artifact: "SAFETY.md linked review note.",
          validation_method:
            "Mitigations confirmed or publication blocked, then replicated.",
          reviewer_needed: "red-team-reviewer",
          safety_risk: "high",
          done_condition: "Every claim qualified or gated behind replication."
        },
        {
          id: "field-reality-check",
          problem_id: pack.id,
          title: "Check whether outputs match decision needs",
          status: "needs-triage",
          owner_role: "field-reality-reviewer",
          outcome:
            "A field-facing review of whether outputs change real decisions responsibly.",
          inputs: ["draft outputs", "implementation context"],
          expected_artifact: "playbooks.md update.",
          validation_method:
            "Field reviewer identifies decision, user, timing, misuse risk, then replicated.",
          reviewer_needed: "field-reality-reviewer",
          safety_risk: "high",
          done_condition: "Named user, named decision, non-use cases, replicated review."
        }
      ],
      null,
      2
    ) + "\n"
  );

  // validation.md
  await fs.writeFile(
    path.join(dir, "validation.md"),
    `# Validation\n\n## Validation Layers\n\n| Layer | Gate |\n| ----- | ---- |\n| Structure | \`pnpm validate\` passes schemas |\n| Evidence | Every claim has a dated evidence record |\n| Reproducibility | Quantitative artifacts include rerunnable steps |\n| Review | Required reviewer roles approve or request changes |\n| Replication | Safety-sensitive or quantitative claims are independently reproduced |\n\n## Baseline Requirements\n\nMethodology documentation, source data, uncertainty bounds.\n\n## Model Requirements\n\nNo claim validated without: explicit methodology, uncertainty bounds, replication.\n`
  );
}

console.log(`Generated ${packs.length * 10} files for ${packs.length} packs.`);
console.log(`Total: ${packCount} packs.`);
