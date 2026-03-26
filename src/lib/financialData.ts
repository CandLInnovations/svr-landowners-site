// lib/financialData.ts
// Source: CPA-compiled annual financial statements 2022-2024
// (March & McMillin, CPAs, PLLC) + 2025 monthly budget
// comparisons + 2026 approved budget (board year-end letter)
// NOTE: AZ Community First became manager March 1, 2025.
// Prior manager handled 2022-2024.

export type ManagementType = 'base' | 'addon' | 'incentive' | null

export interface LineItem {
  name: string
  actual: number
  managementType?: ManagementType
}

export interface YearlyFinancials {
  year: number
  manager: string
  totalRevenue: number
  totalExpenses: number
  netIncome: number
  operatingCash: number
  reserveCash: number
  totalAssets: number
  assessmentIncome: number
  managementEcosystemCost: number
  salariesCommonGrounds: number
  legalCollections: number
  legalGeneralCounsel: number
  lienFees: number
  lateNotices: number
  collections: number
  fuel: number
  equipmentMaintenance: number
  managementContract: number
  revenue: LineItem[]
  expenses: LineItem[]
  notes: string[]
}

export const financialHistory: YearlyFinancials[] = [
  {
    year: 2022,
    manager: 'Vision Community Management',
    totalRevenue: 249636,
    totalExpenses: 339528,
    netIncome: -89892,
    operatingCash: 132083,
    reserveCash: 140977,
    totalAssets: 353099,
    assessmentIncome: 201443,
    salariesCommonGrounds: 23676,
    legalCollections: 12761,
    legalGeneralCounsel: 56655,
    lienFees: 4700,
    lateNotices: 16185,
    collections: 9235,
    fuel: 8124,
    equipmentMaintenance: 16336,
    managementContract: 23400,
    managementEcosystemCost:
      23400 +   // management contract
      4402 +    // statement fees
      480 +     // website
      222 +     // postage
      16185 +   // late notices
      4700 +    // lien fees
      9235 +    // collections
      12761 +   // legal-collections
      56655,    // legal-general counsel
    // = 127,040
    revenue: [
      { name: 'Regular Assessments', actual: 201443 },
      { name: 'Late Payment Charges', actual: 6909 },
      { name: 'Demand Charges', actual: 10790 },
      { name: 'Lien Charges', actual: 2801 },
      { name: 'Collection Costs Recovered', actual: 11713 },
      { name: 'Small Claims Charges', actual: 3356 },
      { name: 'Legal Fees Recovered', actual: 13504 },
      { name: 'Returned Payment Charges', actual: 210 },
      { name: 'Interest', actual: 322 },
      { name: 'Disclosure Fees', actual: -1158 },
      { name: 'Miscellaneous', actual: -254 },
    ],
    expenses: [
      // Common Areas
      { name: 'Well Operator Contract', actual: 2000 },
      { name: 'Well Maintenance', actual: 9862 },
      { name: 'Community Groundskeeper', actual: 621 },
      { name: 'Equipment Maintenance', actual: 16336 },
      { name: 'Fuel', actual: 8124 },
      { name: 'Equipment Storage', actual: 800 },
      { name: 'Keys/Locks', actual: 375 },
      // Insurance
      { name: 'Association Master Policy', actual: 10253 },
      // Administrative
      { name: 'Statement Fees', actual: 4402, managementType: 'addon' },
      { name: 'Late Notices / Demand Letters', actual: 16185, managementType: 'incentive' },
      { name: 'Lien / Judgment Fees', actual: 4700, managementType: 'incentive' },
      { name: 'Postage', actual: 222, managementType: 'addon' },
      { name: 'Bank Fees', actual: 75 },
      { name: 'Property Taxes', actual: 417 },
      { name: 'Income Taxes', actual: 50 },
      { name: 'Meeting Facility', actual: 350 },
      { name: 'Dues & Subscriptions', actual: 100 },
      { name: 'Violation Letters', actual: 6 },
      { name: 'Miscellaneous Administrative', actual: 1941 },
      // Professional
      { name: 'Management Contract', actual: 23400, managementType: 'base' },
      { name: 'CPA Services', actual: 550 },
      { name: 'Collections', actual: 9235, managementType: 'incentive' },
      { name: 'Legal - Small Claims', actual: 7024, managementType: 'incentive' },
      { name: 'Legal - Collections', actual: 12761, managementType: 'incentive' },
      { name: 'Legal - General Counsel', actual: 56655, managementType: 'incentive' },
      { name: 'Website Maintenance', actual: 480, managementType: 'addon' },
      { name: 'Salaries - Common Grounds', actual: 23676 },
      // Reserve (from reserve fund)
      { name: 'Judgment Payment (Reserve)', actual: 128928 },
    ],
    notes: [
      'A $128,928 judgment was paid from the reserve fund — a lawsuit the POA lost or settled. The reserve fund dropped from $196,333 to $140,977 as a result.',
      'Legal - General Counsel hit $56,655 — more than double the management contract. No public explanation was given to landowners.',
      'Salaries for common grounds were $23,676 — this would grow nearly 5x over the next three years.',
      'Annual meeting mailer not listed as a separate line item this year.',
      'Assessment income was $201,443 — the rate per acre has since increased significantly.',
    ],
  },

  {
    year: 2023,
    manager: 'Vision Community Management',
    totalRevenue: 301457,
    totalExpenses: 356159,
    netIncome: -54702,
    operatingCash: 109098,
    reserveCash: 86275,
    totalAssets: 195373,
    assessmentIncome: 240944,
    salariesCommonGrounds: 47155,
    legalCollections: 52214,
    legalGeneralCounsel: 44855,
    lienFees: 7535,
    lateNotices: 19670,
    collections: 13342,
    fuel: 22645,
    equipmentMaintenance: 17759,
    managementContract: 25740,
    managementEcosystemCost:
      25740 +   // management contract
      1262 +    // website
      11434 +   // annual meeting mailer
      719 +     // printing/copies
      95 +      // postage
      19670 +   // late notices
      7535 +    // lien fees
      13342 +   // collections
      52214 +   // legal-collections
      44855,    // legal-general counsel
    // = 176,866
    revenue: [
      { name: 'Regular Assessments', actual: 240944 },
      { name: 'Late Payment Charges', actual: 6700 },
      { name: 'Demand Charges', actual: 16283 },
      { name: 'Lien Charges', actual: 2853 },
      { name: 'Collection Costs Recovered', actual: 8578 },
      { name: 'Small Claims Charges', actual: 1503 },
      { name: 'Legal Fees Recovered', actual: 1198 },
      { name: 'Returned Payment Charges', actual: 210 },
      { name: 'Judgment Recovery Fees', actual: 131 },
      { name: 'Proceeds From Sale', actual: 20898 },
      { name: 'Disclosure Fees', actual: 743 },
      { name: 'Interest', actual: 659 },
      { name: 'Miscellaneous', actual: 757 },
    ],
    expenses: [
      // Common Areas
      { name: 'Well Operator Contract', actual: 6000 },
      { name: 'Well Maintenance', actual: 3643 },
      { name: 'Community Groundskeeper', actual: 58 },
      { name: 'Equipment Maintenance', actual: 17759 },
      { name: 'Fuel', actual: 22645 },
      { name: 'Fuel - Outside SVR', actual: 341 },
      // Structures
      { name: 'Keys/Locks', actual: 228 },
      // Insurance
      { name: 'Association Master Policy', actual: 11170 },
      // Administrative
      { name: 'Annual Meeting Mailer', actual: 11434, managementType: 'addon' },
      { name: 'Printing/Copies', actual: 719, managementType: 'addon' },
      { name: 'Late Notices / Demand Letters', actual: 19670, managementType: 'incentive' },
      { name: 'Lien / Judgment Fees', actual: 7535, managementType: 'incentive' },
      { name: 'Postage', actual: 95, managementType: 'addon' },
      { name: 'Bank Fees', actual: 60 },
      { name: 'Permits & Licenses', actual: 696 },
      { name: 'Property Taxes', actual: 362 },
      { name: 'Income Taxes', actual: 50 },
      { name: 'Dues & Subscriptions', actual: 100 },
      { name: 'Meeting Facility', actual: 250 },
      { name: 'Miscellaneous Administrative', actual: 472 },
      // Professional
      { name: 'Management Contract', actual: 25740, managementType: 'base' },
      { name: 'CPA Services', actual: 450 },
      { name: 'Collections', actual: 13342, managementType: 'incentive' },
      { name: 'Legal - Small Claims', actual: 5636, managementType: 'incentive' },
      { name: 'Legal - Collections', actual: 52214, managementType: 'incentive' },
      { name: 'Legal - General Counsel', actual: 44855, managementType: 'incentive' },
      { name: 'Website Maintenance', actual: 1262, managementType: 'addon' },
      { name: 'Salaries - Common Grounds', actual: 47155 },
      // Reserve
      { name: 'Equipment (Reserve)', actual: 59718 },
      { name: 'Website Upgrade (Reserve)', actual: 2500 },
    ],
    notes: [
      'Legal - Collections exploded to $52,214 — the highest in any year on record. No public explanation given to landowners.',
      'Legal - General Counsel remained elevated at $44,855.',
      'Salaries doubled from $23,676 to $47,155 — a 99% increase in one year.',
      '"Proceeds From Sale" of $20,898 appears in revenue. What was sold? No explanation in public documents.',
      'Reserve fund dropped to $86,275 — still recovering from 2022 judgment.',
      'Fuel nearly tripled from $8,124 (2022) to $22,645.',
      '$59,718 drawn from reserves for equipment.',
      'The POA ran a net loss of $54,702 for the year.',
    ],
  },

  {
    year: 2024,
    manager: 'Vision Community Management (through Feb 2025)',
    totalRevenue: 369811,
    totalExpenses: 288925,
    netIncome: 80886,
    operatingCash: 169693,
    reserveCash: 167161,
    totalAssets: 336854,
    assessmentIncome: 287023,
    salariesCommonGrounds: 89803,
    legalCollections: 16410,
    legalGeneralCounsel: 6616,
    lienFees: 1750,
    lateNotices: 29655,
    collections: 4265,
    fuel: 21256,
    equipmentMaintenance: 22426,
    managementContract: 27600,
    managementEcosystemCost:
      27600 +   // management contract
      8795 +    // statement fees
      11466 +   // annual meeting mailer
      879 +     // newsletter
      1653 +    // website
      400 +     // meeting minutes
      71 +      // postage
      45 +      // certified postage
      29655 +   // late notices
      1750 +    // lien fees
      4265 +    // collections
      16410 +   // legal-collections
      6616,     // legal-general counsel
    // = 109,605
    revenue: [
      { name: 'Regular Assessments', actual: 287023 },
      { name: 'Late Payment Charges', actual: 6423 },
      { name: 'Demand Charges', actual: 18743 },
      { name: 'Lien Charges', actual: 5850 },
      { name: 'Collection Costs Recovered', actual: 13982 },
      { name: 'Small Claims Charges', actual: 3142 },
      { name: 'Legal Fees Recovered', actual: 27058 },
      { name: 'Judgment Recovery Fees', actual: 219 },
      { name: 'Returned Payment Charges', actual: 329 },
      { name: 'Disclosure Fees', actual: -11 },
      { name: 'Interest', actual: 414 },
      { name: 'Miscellaneous', actual: 6639 },
    ],
    expenses: [
      // Common Areas
      { name: 'Well Operator Contract', actual: 3500 },
      { name: 'Well Maintenance', actual: 2150 },
      { name: 'Community Groundskeeper', actual: -58 },
      { name: 'Equipment Maintenance', actual: 22426 },
      { name: 'Fuel', actual: 21256 },
      { name: 'Road Maintenance', actual: 1000 },
      // Structures
      { name: 'Keys/Locks', actual: 102 },
      // Insurance
      { name: 'Association Master Policy', actual: 14053 },
      // Administrative
      { name: 'Statement Fees', actual: 8795, managementType: 'addon' },
      { name: 'Annual Meeting Mailer', actual: 11466, managementType: 'addon' },
      { name: 'Newsletter / Communications', actual: 879, managementType: 'addon' },
      { name: 'Late Notices / Demand Letters', actual: 29655, managementType: 'incentive' },
      { name: 'Lien / Judgment Fees', actual: 1750, managementType: 'incentive' },
      { name: 'Postage', actual: 71, managementType: 'addon' },
      { name: 'Certified Postage', actual: 45, managementType: 'addon' },
      { name: 'Printing/Copies', actual: 736, managementType: 'addon' },
      { name: 'Meeting Minutes', actual: 400, managementType: 'addon' },
      { name: 'Bank Fees', actual: 130 },
      { name: 'Permits & Licenses', actual: 141 },
      { name: 'Property Taxes', actual: 219 },
      { name: 'Income Taxes', actual: 50 },
      { name: 'Meeting Facility', actual: 150 },
      { name: 'Dues & Subscriptions', actual: 100 },
      { name: 'Miscellaneous Administrative', actual: 719 },
      // Professional
      { name: 'Management Contract', actual: 27600, managementType: 'base' },
      { name: 'CPA Services', actual: 475 },
      { name: 'Collections', actual: 4265, managementType: 'incentive' },
      { name: 'Legal - Small Claims', actual: 2153, managementType: 'incentive' },
      { name: 'Legal - Collections', actual: 16410, managementType: 'incentive' },
      { name: 'Legal - General Counsel', actual: 6616, managementType: 'incentive' },
      { name: 'Website Maintenance', actual: 1653, managementType: 'addon' },
      { name: 'Salaries - Common Grounds', actual: 89803 },
      // Reserve
      { name: 'Equipment (Reserve)', actual: 17715 },
      { name: 'Website Upgrade (Reserve)', actual: 2500 },
    ],
    notes: [
      'Late notices / demand letters hit $29,655 — the highest administrative line item overrun across all years.',
      'Salaries grew again to $89,803 — a 90% increase from 2023, and 279% from 2022.',
      'Legal - General Counsel dropped sharply to $6,616 after two elevated years.',
      'Statement fees hit $8,795 — nearly double 2022. This is a per-account monthly charge by the management company.',
      'The POA had a positive net year ($80,886 excess) largely due to elevated revenue from collections activity and legal fee recoveries.',
      'Reserve fund recovered to $167,161.',
      'AZ Community First took over as manager on March 1, 2025.',
    ],
  },

  {
    year: 2025,
    manager: 'AZ Community First Management (from March 1)',
    totalRevenue: 349389,
    totalExpenses: 378999,
    netIncome: -29610,
    operatingCash: 147968,
    reserveCash: 184916,
    totalAssets: 332884,
    assessmentIncome: 291308,
    salariesCommonGrounds: 113409,
    legalCollections: 16288,
    legalGeneralCounsel: 9743,
    lienFees: 34000,
    lateNotices: 22187,
    collections: 7786,
    fuel: 16445,
    equipmentMaintenance: 43638,
    managementContract: 27675,
    managementEcosystemCost:
      27675 +   // management contract
      4527 +    // statement fees
      11674 +   // annual meeting mailer
      4820 +    // newsletter (5.5x budget)
      1268 +    // website
      750 +     // meeting minutes
      332 +     // postage
      22187 +   // late notices
      34000 +   // lien fees (10x budget)
      7786 +    // collections
      16288 +   // legal-collections
      9743,     // legal-general counsel
    // = 141,050
    revenue: [
      { name: 'Homeowner Assessments', actual: 291308 },
      { name: 'Late Payment Charges', actual: 10848 },
      { name: 'Demand Charges', actual: 13993 },
      { name: 'Lien Charges', actual: 16770 },
      { name: 'Collection Costs Recovered', actual: 1611 },
      { name: 'Small Claims Charges', actual: 275 },
      { name: 'Legal Fees Recovered', actual: 9715 },
      { name: 'Returned Payment Charges', actual: 245 },
      { name: 'Disclosure Fees', actual: 1010 },
      { name: 'Transfer Fees', actual: 400 },
      { name: 'Road Map Book', actual: 321 },
      { name: 'Interest - Reserves', actual: 1896 },
      { name: 'Interest - Operating', actual: 26 },
      { name: 'Damage Assessment', actual: 21 },
      { name: 'Miscellaneous', actual: 105 },
    ],
    expenses: [
      // Common Areas
      { name: 'Well Operator Contract', actual: 6500 },
      { name: 'Well Maintenance', actual: 1167 },
      { name: 'Equipment Maintenance', actual: 43638 },
      { name: 'Fuel', actual: 16445 },
      // Structures
      { name: 'Keys/Locks', actual: 1695 },
      // Insurance
      { name: 'Association Master Policy', actual: 13922 },
      // Administrative
      { name: 'Statement Fees', actual: 4527, managementType: 'addon' },
      { name: 'Annual Meeting Mailer', actual: 11674, managementType: 'addon' },
      { name: 'Newsletter / Communications', actual: 4820, managementType: 'addon' },
      { name: 'Late Notices / Demand Letters', actual: 22187, managementType: 'incentive' },
      { name: 'Lien / Judgment Fees', actual: 34000, managementType: 'incentive' },
      { name: 'Postage', actual: 332, managementType: 'addon' },
      { name: 'Meeting Minutes', actual: 750, managementType: 'addon' },
      { name: 'Certified Postage', actual: 90 },
      { name: 'NSF Bank Fees', actual: 100 },
      { name: 'Permits & Licenses', actual: 147 },
      { name: 'Property Taxes', actual: 133 },
      { name: 'Income Taxes', actual: 50 },
      { name: 'Meeting Facility', actual: 285 },
      { name: 'Dues & Subscriptions', actual: 100 },
      { name: 'Community Events', actual: 70 },
      { name: 'Miscellaneous Administrative', actual: 3017 },
      { name: 'Bank Service Charge', actual: 20 },
      // Professional
      { name: 'Management Contract', actual: 27675, managementType: 'base' },
      { name: 'CPA Services', actual: 475 },
      { name: 'Collections', actual: 7786, managementType: 'incentive' },
      { name: 'Legal - Collections', actual: 16288, managementType: 'incentive' },
      { name: 'Legal - General Counsel', actual: 9743, managementType: 'incentive' },
      { name: 'Website Maintenance', actual: 1268, managementType: 'addon' },
      { name: 'Salaries - Common Grounds', actual: 113409 },
      // Reserves
      { name: 'General Reserve Transfer', actual: 34858 },
      { name: 'Equipment (Reserve)', actual: 19000 },
    ],
    notes: [
      'Lien fees hit $34,000 against a $3,200 budget — a 10x overrun. No landowner alert was issued.',
      'Salaries reached $113,409 — up 379% from $23,676 in 2022. Board approved these increases without public disclosure.',
      'Equipment maintenance spiked to $43,638 against a $19,000 budget — possibly related to new equipment purchases (loader, GMC Brigadier dump truck) mentioned in year-end letter.',
      'Newsletter/communications hit $4,820 against an $879 budget — 5.5x overrun.',
      'AZ Community First took over March 1, 2025. The lien fee explosion occurred under their watch.',
      'Net operating loss of $29,610 despite $291K in assessments collected.',
    ],
  },
]

// ── 2026 Approved Budget ──────────────────────────────────────
export const budget2026 = {
  year: 2026,
  assessmentRatePerAcre: 4.75,
  dueDate: 'January 1, 2026',
  lateDate: 'January 30, 2026',
  totalBudget: 309569.75,
  categories: {
    commonAreas: 62000,
    structures: 500,
    insurance: 16011,
    administrative: 69635,
    professional: 141423.75,
    reserves: 20000,
  },
  notes: [
    'Zero-based budget — no assessment rate increase from 2025.',
    'Professional category ($141,423.75) includes management contract, CPA fees, legal general counsel, website, and road employee salaries.',
    'Administrative category ($69,635) includes postage, annual meeting mailer, statement fees, late notices/demand letters, violation letters, equipment registration, property taxes for wells/storage yard, meeting facility, minutes.',
    'Reserves allocation cut from $34,858 (2025 actual) to $20,000.',
    'Four board seats open for election at May 16, 2026 annual meeting.',
  ],
}

// ── Reserve Study (2017 — never updated) ─────────────────────
export const reserveStudy = {
  studyYear: 2017,
  warningNote: 'This study is 8 years old. Replacement costs are significantly understated due to inflation.',
  totalFutureNeed30Years: 876279,
  criticalNeeds: [
    { component: 'Roads — Reshaping (Major)', firstYearNeeded: 2026, estimatedCost: 343437 },
    { component: 'Roads — Regraveling (Major)', firstYearNeeded: 2026, estimatedCost: 274750 },
    { component: 'Well Casing — Repair/Partial Replace (PVC)', firstYearNeeded: 2028, estimatedCost: 97619 },
    { component: 'Well Casing — Repair/Partial Replace', firstYearNeeded: 2026, estimatedCost: 60945 },
    { component: 'Culverts — Replacements', firstYearNeeded: 2021, estimatedCost: 16557 },
    { component: 'Well Pump — Replace', firstYearNeeded: 2018, estimatedCost: 10250 },
    { component: 'Roads — Dust Control', firstYearNeeded: 2018, estimatedCost: 12684 },
    { component: 'Washboarding Remediation', firstYearNeeded: 2018, estimatedCost: 10570 },
  ],
  currentReserves: 184916, // as of Dec 2025
  reserveShortfall: 343437 + 274750 - 184916, // roads alone: $433,271 gap
  shortfallNote: 'Major road reshaping and regraveling estimated at $618,187 were due in 2026 per the reserve study. Current reserves cover only 30% of this need — and the 2017 cost estimates are almost certainly 40-60% below actual 2026 costs.',
}

// ── Key Trends ────────────────────────────────────────────────
export const trends = {
  salariesGrowth: {
    2022: 23676,
    2023: 47155,
    2024: 89803,
    2025: 113409,
    pctGrowthTotal: 379,
    note: 'Salaries for "common grounds" grew 379% in 3 years. Board approved each increase. No public breakdown of who was paid what.',
  },
  managementEcosystemCost: {
    2022: 127040,
    2023: 176866,
    2024: 109605,
    2025: 141050,
    note: 'True cost of the management company ecosystem (contract + add-ons + incentive-driven legal/collection costs). 2023 was the worst year at $176,866.',
  },
  legalCollections: {
    2022: 12761,
    2023: 52214,
    2024: 16410,
    2025: 16288,
    note: '2023 legal-collections hit $52,214 — the worst year. No public explanation was given.',
  },
  reserveFund: {
    2021: 196333, // beginning balance per 2022 statement
    2022: 140977, // drained by $128,928 judgment
    2023: 86275,  // still recovering
    2024: 167161, // recovered
    2025: 184916, // growing but critically short for 2026 road needs
  },
  netIncome: {
    2022: -89892,
    2023: -54702,
    2024: 80886,
    2025: -29610,
    note: '3 of 4 years ran at a loss. 2024 was positive largely due to high legal fee recoveries.',
  },
  assessmentIncome: {
    2022: 201443,
    2023: 240944,
    2024: 287023,
    2025: 291308,
    note: 'Assessment income grew 45% from 2022 to 2025. Expenses grew faster.',
  },
  collectionParadox: {
    description: 'Money spent pursuing delinquent owners vs. money recovered from them',
    2025: {
      spent: 22187 + 34000 + 7786 + 16288, // notices + liens + collections + legal
      recovered: 10848 + 13993 + 16770 + 1611 + 275, // late charges + demand + lien income + collections + small claims
      net: -(22187 + 34000 + 7786 + 16288) + (10848 + 13993 + 16770 + 1611 + 275),
    },
  },
  unresolved: [
    '2022: $128,928 judgment — what lawsuit? Who was the opposing party?',
    '2023: "Proceeds From Sale" of $20,898 — what POA asset was sold?',
    '2023: Legal-collections hit $52,214 — what cases drove this?',
    '2022-2025: Salaries grew 379% — who are the employees and what are their roles and pay rates?',
    'Reserve study has not been updated since 2017 — actual capital needs unknown.',
  ],
}

// ── Current State (for pitch site) ───────────────────────────
export const currentState = {
  managementContract: 27675,
  managementEcosystemCost2025: 141050,
  managementEcosystemPct: 48,
  netOperatingLoss2025: -29610,
  operatingCash: 147968,
  reserveCash: 184916,
  reserveShortfall: 433271,
  assessmentRatePerAcre: 4.75,
  annualMeetingDate: '2026-05-16',
  manager: 'AZ Community First Management',
  managerStartDate: '2025-03-01',
  developer: {
    name: 'Yavapai 10,000 LLC',
    parcelsHeld: 0,
    confirmedVia: 'Yavapai County GIS owner name search',
  },
  board: {
    seats: { min: 7, max: 9 },
    openSeats2026: 4,
    termYears: 3,
    quorumMembers: 50,
    quorumAcreVotes: 1000,
  },
  ccrs: {
    recorded: '1996-03-28',
    currentWindow: '2026',
    renewalPeriodYears: 10,
    dissolveThresholdPct: 66.67,
    voteWeighting: 'acres',
    recommendation: 'KEEP — dissolving eliminates assessment authority and road maintenance obligation',
  },
}
