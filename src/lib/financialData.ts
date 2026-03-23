export const financialData = {
  assessmentIncome: 291308,
  reserveBalance: 184916,
  operatingCash: 147968,
  netOperatingLoss: -29610,

  managementEcosystemCost: 141050,
  managementEcosystemPct: 48, // % of assessment income

  lineItems: {
    managementContract: {
      label: "Management contract (AZ Community First)",
      account: "8510",
      budgeted: 28210,
      actual: 27675,
    },
    lienFees: {
      label: "Lien fees",
      budgeted: 3200,
      actual: 34000,
    },
    legalCollections: {
      label: "Legal — collections",
      budgeted: 0,
      actual: 16288,
    },
    demandLetters: {
      label: "Demand letters",
      budgeted: 0,
      actual: 22187,
    },
  },

  collectionsNetLoss: -36783, // spent on collections vs recovered

  ccrs: {
    recorded: "March 28, 1996",
    renewEveryYears: 10,
    dissolvePct: 66.67,
    votingUnit: "acres",
  },

  board: {
    minMembers: 7,
    maxMembers: 9,
    termYears: 3,
    quorumMembers: 50,
    quorumAcreVotes: 1000,
  },

  annualMeeting: {
    date: "May 16, 2026",
    isoDate: "2026-05-16",
  },

  developer: {
    name: "Yavapai 10,000 LLC",
    parcelsHeld: 0,
    note: "Confirmed via Yavapai County GIS — developer holds zero parcels",
  },
} as const;

export type FinancialData = typeof financialData;
