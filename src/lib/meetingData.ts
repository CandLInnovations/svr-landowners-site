// lib/meetingData.ts
// Source: SVR POA Open Board Meeting Minutes 2024-2025
// All facts sourced directly from official minutes

export interface BoardMember {
  name: string
  roles: string[]
  activeFrom: string
  activeTo?: string
  notes?: string
}

export interface MeetingMinute {
  date: string
  location: string
  format: 'in-person' | 'zoom' | 'hybrid'
  boardPresent: string[]
  boardAbsent: string[]
  manager: string
  managementCompany: string
  homeownersPresent: number | string
  keyDecisions: KeyDecision[]
  flaggedItems: FlaggedItem[]
  ongoingItems: string[]
}

export interface KeyDecision {
  motion: string
  movedBy: string
  secondedBy: string
  result: 'carried' | 'failed' | 'tabled' | 'no-action'
  amount?: number
  fundSource?: 'operating' | 'reserve'
  notes?: string
}

export interface FlaggedItem {
  type: 'conflict-of-interest' | 'accountability-gap' |
        'budget-concern' | 'structural' | 'operations'
  description: string
  date: string
}

// ── 2023 meeting format — richer structure, embedded concerns ────────────────

export interface Concern {
  type: FlaggedItem['type']
  description: string
}

export interface Decision2023 {
  id: string
  category: 'governance' | 'financial' | 'employment' | 'roads' | 'property' |
            'technology' | 'management' | 'operations' | 'security' | 'elections' | 'legal'
  description: string
  outcome: 'approved' | 'failed' | 'tabled' | 'no-action' | 'noted' | 'applied-automatically'
  notes?: string
  concerns?: Concern[]
}

export interface LegalMatter {
  caseId: string
  description: string
  status: string
  costToDate?: number
  judgmentPaid?: number
  recovery?: number
  notes?: string
}

export interface FinancialSnapshot2023 {
  totalIncome: number
  assessmentIncome: number
  collectionsIncome: number
  otherIncome: number
  totalExpenses: number
  roadsSVR: number
  roadsNonSVR: number
  wells: number
  adminOperating: number
  managementFee: number
  collectionsExpense: number
  legalCounsel: number
  notes: string
}

export interface MeetingAttendees {
  boardPresent: string[]
  boardAbsent: string[]
  management: string
  audienceInPerson: number | null
  audienceZoom: number | null
  guests?: string[]
}

export interface DetailedMeeting {
  id: string
  date: string
  type: 'regular' | 'special' | 'annual'
  title: string
  location: string
  attendees: MeetingAttendees
  decisions: Decision2023[]
  legalMatters?: LegalMatter[]
  financialSnapshot?: FinancialSnapshot2023
  openQuestionNotes?: string
}

export const boardHistory: BoardMember[] = [
  {
    name: 'Rich Moore',
    roles: ['Board Member', 'VP (May 2024)', 'President (Jul 2024–present)'],
    activeFrom: '2024-01-01',
    notes: 'Son Richard "Bud" Moore hired as road crew employee Jan 2024. Rich Moore abstained from that vote.',
  },
  {
    name: 'Diana Gruber',
    roles: ['Board Member', 'Secretary (May 2024)',
            'Secretary + Treasurer (May 2025)',
            'Backup Invoice Approver (Mar 2025)'],
    activeFrom: '2024-01-01',
    notes: 'Holds Secretary and Treasurer simultaneously as of May 2025. Made motion to appoint herself as backup invoice approver.',
  },
  {
    name: 'Kim "Gator" Pratt',
    roles: ['Board Member', 'Road Manager', 'Well Manager (Jolly Well)'],
    activeFrom: '2024-01-01',
    notes: 'Spending authority raised from $750 to $5,000 in November 2024.',
  },
  {
    name: 'Roger Howell',
    roles: ['Board Member', 'VP (Jul 2024)', 'Well Manager (Anvil Rock)'],
    activeFrom: '2024-01-01',
  },
  {
    name: 'Tim Smith',
    roles: ['Board Member'],
    activeFrom: '2024-01-01',
  },
  {
    name: 'H. Wayne Murphy',
    roles: ['President (May 2024)', 'Board Member'],
    activeFrom: '2024-01-01',
    activeTo: '2024-07-20',
    notes: 'Departed between May and July 2024 meetings.',
  },
  {
    name: 'D. Clay Boop',
    roles: ['Board Member', 'Treasurer (May 2024)'],
    activeFrom: '2024-01-01',
    activeTo: '2025-05-17',
    notes: 'Kept on board despite 3 consecutive absences (health). Resigned May 2025.',
  },
  {
    name: 'Steve Huff',
    roles: ['Board Member'],
    activeFrom: '2025-05-17',
    notes: 'New member as of May 2025 election.',
  },
  {
    name: 'Richard Meyers',
    roles: ['Board Member'],
    activeFrom: '2024-01-01',
    activeTo: '2025-01-18',
    notes: 'Absent from most 2024 meetings. Seat open at 2025 election.',
  },
]

export const managementHistory = [
  {
    company: 'Vision Community Management',
    manager: 'Veda Jones, CMCA, AMS',
    startDate: '2022-01-01',
    endDate: '2025-02-28',
    contractDeclinedDate: '2025-01-18',
    note: 'Contract not renewed by board vote January 18, 2025.',
  },
  {
    company: 'Arizona Community First Management',
    manager: 'Veda Jones, CMCA, AMS',
    startDate: '2025-03-01',
    endDate: null,
    note: 'Same manager (Veda Jones) continued from Vision Community Management under new company.',
  },
]

export const meetings: MeetingMinute[] = [
  {
    date: '2024-01-20',
    location: 'St. Francis Catholic Church Hall, Seligman',
    format: 'hybrid',
    boardPresent: ['H. Wayne Murphy', 'D. Clay Boop', 'Wenona Kay Loving',
                   'Rich Moore', 'Tim Smith', 'Roger Howell',
                   'Diana Gruber', 'Cindy Seff', 'Kim "Gator" Pratt'],
    boardAbsent: [],
    manager: 'Veda Jones',
    managementCompany: 'Vision Community Management',
    homeownersPresent: 2,
    keyDecisions: [
      {
        motion: 'Approve 2024 management contract with Vision Community Management',
        movedBy: 'Diana Gruber',
        secondedBy: 'Roger Howell',
        result: 'carried',
        amount: 25740,
        fundSource: 'operating',
      },
      {
        motion: 'Accept deferred collections agreement from Goodman Law Firm',
        movedBy: 'Rich Moore',
        secondedBy: 'Kim "Gator" Pratt',
        result: 'carried',
        notes: 'Deferred collections = law firm paid from future recoveries, incentivizing aggressive escalation',
      },
      {
        motion: 'Hire Richard "Bud" Moore as road crew at $22/hour',
        movedBy: 'Kim "Gator" Pratt',
        secondedBy: 'D. Clay Boop',
        result: 'carried',
        notes: 'Bud Moore is the son of board member Rich Moore. Rich Moore abstained.',
      },
      {
        motion: 'Increase Jay Janssen hourly rate to $25/hour',
        movedBy: 'Diana Gruber',
        secondedBy: 'Rich Moore',
        result: 'carried',
      },
    ],
    flaggedItems: [
      {
        type: 'conflict-of-interest',
        description: "Board member Rich Moore's son hired as road crew employee. Moore abstained from vote.",
        date: '2024-01-20',
      },
      {
        type: 'accountability-gap',
        description: 'Deferred collections agreement with law firm creates direct financial incentive to escalate delinquency cases.',
        date: '2024-01-20',
      },
    ],
    ongoingItems: ['Cattle Guard on Markham Pass', 'SOPs Revision', 'New website beta'],
  },

  {
    date: '2024-03-16',
    location: 'Seligman Fire District',
    format: 'hybrid',
    boardPresent: ['H. Wayne Murphy', 'Wenona Kay Loving', 'Rich Moore',
                   'Tim Smith', 'Roger Howell', 'Diana Gruber',
                   'Cindy Seff', 'Kim "Gator" Pratt'],
    boardAbsent: ['D. Clay Boop'],
    manager: 'Veda Jones',
    managementCompany: 'Vision Community Management',
    homeownersPresent: 2,
    keyDecisions: [
      {
        motion: "Ratify service truck fuel system repair — B&B Auto & Diesel",
        movedBy: '(ratification)',
        secondedBy: '(ratification)',
        result: 'carried',
        amount: 8812.73,
        fundSource: 'operating',
        notes: 'Unanimous board approval ratified. No bid process documented.',
      },
      {
        motion: "Ratify Anvil Rock Well Pump Replacement — Arthur's Well Service",
        movedBy: '(ratification)',
        secondedBy: '(ratification)',
        result: 'carried',
        amount: 9824,
        fundSource: 'operating',
        notes: 'Single vendor, no competing bids documented.',
      },
      {
        motion: 'Authorize AZDEQ to test SVR Well #2 for PFAS',
        movedBy: 'Kim "Gator" Pratt',
        secondedBy: 'Rich Moore',
        result: 'carried',
      },
      {
        motion: 'Approve revised SOPs',
        movedBy: 'Rich Moore',
        secondedBy: 'Kim "Gator" Pratt',
        result: 'carried',
      },
    ],
    flaggedItems: [
      {
        type: 'accountability-gap',
        description: 'Two expenditures over $8,000 ratified after the fact with no documented bid process.',
        date: '2024-03-16',
      },
    ],
    ongoingItems: ['Cattle Guard on Markham Pass', 'Service truck repair', 'New website beta'],
  },

  {
    date: '2024-05-18',
    location: 'St. Francis Catholic Church Hall, Seligman',
    format: 'hybrid',
    boardPresent: ['H. Wayne Murphy', 'Tim Smith', 'Rich Moore',
                   'Diana Gruber', 'Roger Howell', 'Clay Boop'],
    boardAbsent: ['Kim "Gator" Pratt', 'Cindy Seff', 'Richard Meyers'],
    manager: 'Veda Jones',
    managementCompany: 'Vision Community Management',
    homeownersPresent: 'see sign-in sheet',
    keyDecisions: [
      {
        motion: 'Appoint H. Wayne Murphy as President',
        movedBy: 'Diana Gruber',
        secondedBy: 'Clay Boop',
        result: 'carried',
      },
      {
        motion: 'Appoint Kim "Gator" Pratt as Road Manager AND Well Manager',
        movedBy: 'Diana Gruber',
        secondedBy: 'Clay Boop / Rich Moore',
        result: 'carried',
        notes: 'One board member holds both road and well oversight roles.',
      },
      {
        motion: 'Allow Double OO Ranch to borrow the rock separator',
        movedBy: 'Roger Howell',
        secondedBy: 'Clay Boop',
        result: 'carried',
        notes: 'POA equipment loaned to neighboring private ranch. Before/after photos required.',
      },
    ],
    flaggedItems: [
      {
        type: 'structural',
        description: 'Single board member (Kim "Gator" Pratt) appointed to oversee both roads and wells with no separation of duties.',
        date: '2024-05-18',
      },
    ],
    ongoingItems: ['Cattle Guard on Markham Pass'],
  },

  {
    date: '2024-07-20',
    location: 'Seligman Library',
    format: 'hybrid',
    boardPresent: ['Tim Smith', 'Rich Moore', 'Diana Gruber',
                   'Roger Howell', 'D. Clay Boop', 'Kim "Gator" Pratt'],
    boardAbsent: ['Richard Meyers'],
    manager: 'Veda Jones',
    managementCompany: 'Vision Community Management',
    homeownersPresent: 11,
    keyDecisions: [
      {
        motion: 'Appoint Rich Moore as President',
        movedBy: 'Diana Gruber',
        secondedBy: 'Kim "Gator" Pratt',
        result: 'carried',
        notes: 'Murphy departed between meetings. Moore moves from VP to President.',
      },
      {
        motion: 'Approve 2025 budget — no assessment rate increase, $4.75/acre',
        movedBy: 'Kim "Gator" Pratt',
        secondedBy: 'Diana Gruber',
        result: 'carried',
      },
      {
        motion: 'Hire Kelly Lechner as part-time Equipment Repair Technician at $100/hour',
        movedBy: 'D. Clay Boop',
        secondedBy: 'Tim Smith',
        result: 'carried',
        notes: '$100/hour rate approved without documented bid or rate comparison.',
      },
      {
        motion: 'Reduce board seats from 9 to 7',
        movedBy: 'Kim "Gator" Pratt',
        secondedBy: 'Diana Gruber',
        result: 'carried',
        notes: 'Fewer board seats means fewer landowner voices in governance.',
      },
    ],
    flaggedItems: [
      {
        type: 'structural',
        description: 'Board voted to reduce its own size from 9 to 7 members, reducing representation.',
        date: '2024-07-20',
      },
      {
        type: 'budget-concern',
        description: 'Equipment repair technician hired at $100/hour with no documented competitive process.',
        date: '2024-07-20',
      },
    ],
    ongoingItems: ['Cattle Guard on Markham Pass', 'New website launch'],
  },

  {
    date: '2024-09-21',
    location: 'Seligman Library',
    format: 'in-person',
    boardPresent: ['Rich Moore', 'Diana Gruber', 'Roger Howell',
                   'D. Clay Boop', 'Kim "Gator" Pratt'],
    boardAbsent: ['Richard Meyers', 'Tim Smith'],
    manager: 'Veda Jones',
    managementCompany: 'Vision Community Management',
    homeownersPresent: 16,
    keyDecisions: [
      {
        motion: 'Set 2025 annual meeting record date as January 30, 2025; appoint Rich Moore as Election Committee Chair',
        movedBy: 'D. Clay Boop',
        secondedBy: 'Diana Gruber',
        result: 'carried',
        notes: 'President Rich Moore appointed to chair the election that could include his own re-election.',
      },
    ],
    flaggedItems: [
      {
        type: 'conflict-of-interest',
        description: 'President Rich Moore appointed as Election Committee Chair for election he may participate in as candidate.',
        date: '2024-09-21',
      },
    ],
    ongoingItems: ['Cattle Guard on Markham Pass'],
  },

  {
    date: '2024-11-16',
    location: 'Seligman Library',
    format: 'in-person',
    boardPresent: ['Rich Moore', 'Diana Gruber', 'Roger Howell', 'Tim Smith'],
    boardAbsent: ['D. Clay Boop', 'Kim "Gator" Pratt'],
    manager: 'Veda Jones',
    managementCompany: 'Vision Community Management',
    homeownersPresent: 4,
    keyDecisions: [
      {
        motion: 'Increase Road Manager spending authority from $750 to $5,000',
        movedBy: 'Diana Gruber',
        secondedBy: 'Tim Smith',
        result: 'carried',
        notes: 'Road Manager (Kim Pratt, also a board member) can now approve up to $5,000 in spending unilaterally.',
      },
    ],
    flaggedItems: [
      {
        type: 'accountability-gap',
        description: 'Road Manager spending authority raised 567% (from $750 to $5,000) with no additional reporting or accountability requirement added.',
        date: '2024-11-16',
      },
      {
        type: 'operations',
        description: 'Management had to formally request road crew provide daily activity logs — basic operational tracking not in place.',
        date: '2024-11-16',
      },
    ],
    ongoingItems: ['Cattle Guard on Markham Pass', 'Storage yard location'],
  },

  {
    date: '2025-01-18',
    location: 'Seligman Library',
    format: 'in-person',
    boardPresent: ['Rich Moore', 'Diana Gruber', 'Roger Howell', 'Kim Pratt'],
    boardAbsent: ['D. Clay Boop', 'Tim Smith'],
    manager: 'Jennifer Conner / Gina Porritt',
    managementCompany: 'Vision Community Management',
    homeownersPresent: 'see sign-in sheet',
    keyDecisions: [
      {
        motion: 'Decline to renew the Vision Community Management contract',
        movedBy: 'Diana Gruber',
        secondedBy: 'Kim Pratt',
        result: 'carried',
        notes: 'Board fired Vision after years of escalating costs. New manager (AZ Community First) would be same individual — Veda Jones.',
      },
    ],
    flaggedItems: [
      {
        type: 'operations',
        description: 'Road crew daily activity logs again noted as "required by law" — still not consistently in place months after first request.',
        date: '2025-01-18',
      },
    ],
    ongoingItems: ['Storage yard appraisal'],
  },

  {
    date: '2025-03-15',
    location: 'Seligman Library',
    format: 'in-person',
    boardPresent: ['Tim Smith', 'Rich Moore', 'Diana Gruber',
                   'Roger Howell', 'Kim "Gator" Pratt'],
    boardAbsent: ['D. Clay Boop'],
    manager: 'Veda Jones',
    managementCompany: 'Arizona Community First Management',
    homeownersPresent: 5,
    keyDecisions: [
      {
        motion: 'Pay AZ Community First 10 hours special project fees for transition',
        movedBy: 'Diana Gruber',
        secondedBy: 'Kim "Gator" Pratt',
        result: 'carried',
        notes: 'Transition billing on top of management contract.',
      },
      {
        motion: 'Appoint Diana Gruber as backup board member to approve invoices',
        movedBy: 'Diana Gruber',
        secondedBy: 'Kim "Gator" Pratt',
        result: 'carried',
        notes: 'Diana Gruber made the motion to appoint herself.',
      },
      {
        motion: 'Approve Samsung tablet with phone plan for road crew field tracking',
        movedBy: 'Diana Gruber',
        secondedBy: 'Tim Smith',
        result: 'carried',
        notes: 'Tablet purchased to address ongoing lack of road activity logging.',
      },
      {
        motion: 'Send CC&R amendment with July 31, 2025 deadline',
        movedBy: 'Diana Gruber',
        secondedBy: 'Roger Howell',
        result: 'carried',
        notes: 'Board attempting to amend CC&Rs — requires 66.67% landowner consent.',
      },
    ],
    flaggedItems: [
      {
        type: 'conflict-of-interest',
        description: 'Diana Gruber made the motion to appoint herself as backup invoice approver — a financial oversight role.',
        date: '2025-03-15',
      },
    ],
    ongoingItems: ['Storage yard sale', 'CC&R amendment', 'Road activity logging'],
  },

  {
    date: '2025-05-17',
    location: 'Seligman School',
    format: 'in-person',
    boardPresent: ['Tim Smith', 'Rich Moore', 'Diana Gruber', 'Kim "Gator" Pratt'],
    boardAbsent: ['Steve Huff', 'Roger Howell'],
    manager: 'Veda Jones',
    managementCompany: 'Arizona Community First Management',
    homeownersPresent: 'see sign-in sheet',
    keyDecisions: [
      {
        motion: 'Appoint Diana Gruber as Secretary AND Treasurer',
        movedBy: 'Rich Moore',
        secondedBy: 'Kim "Gator" Pratt',
        result: 'carried',
        notes: 'One person now controls financial records and official meeting minutes simultaneously.',
      },
      {
        motion: 'Invest $50,000 of reserve funds in 6-month CD at Mountain America Credit Union',
        movedBy: 'Diana Gruber',
        secondedBy: 'Kim "Gator" Pratt',
        result: 'carried',
        amount: 50000,
        fundSource: 'reserve',
      },
      {
        motion: 'Accept resignation of D. Clay Boop',
        movedBy: 'Diana Gruber',
        secondedBy: 'Kim "Gator" Pratt',
        result: 'carried',
      },
    ],
    flaggedItems: [
      {
        type: 'structural',
        description: 'Secretary and Treasurer roles combined in one board member. The person keeping the records also controls the finances.',
        date: '2025-05-17',
      },
      {
        type: 'accountability-gap',
        description: 'CC&R amendment at only 9% consent after months of outreach. Landowner trust in current board direction is low.',
        date: '2025-05-17',
      },
    ],
    ongoingItems: ['Storage yard sale', 'CC&R amendment (9%)'],
  },

  {
    date: '2025-07-03',
    location: 'Zoom',
    format: 'zoom',
    boardPresent: ['Tim Smith', 'Rich Moore', 'Diana Gruber',
                   'Kim "Gator" Pratt', 'Steve Huff', 'Roger Howell'],
    boardAbsent: [],
    manager: 'Veda Jones',
    managementCompany: 'Arizona Community First Management',
    homeownersPresent: 4,
    keyDecisions: [
      {
        motion: 'Purchase 1978 GMC Brigadier Tandem dump truck for $10,500',
        movedBy: 'Steve Huff',
        secondedBy: 'Diana Gruber',
        result: 'carried',
        amount: 10500,
        fundSource: 'reserve',
        notes: 'Special meeting called solely for this purchase. 16-minute meeting. No competing bids documented. Justification: historic plates avoid CDL requirement.',
      },
    ],
    flaggedItems: [
      {
        type: 'accountability-gap',
        description: 'Special Zoom meeting called to approve a $10,500 reserve fund expenditure. No competitive bidding documented. Meeting lasted 16 minutes.',
        date: '2025-07-03',
      },
    ],
    ongoingItems: [],
  },

  {
    date: '2025-07-19',
    location: 'Seligman Library',
    format: 'in-person',
    boardPresent: ['Tim Smith', 'Rich Moore', 'Diana Gruber',
                   'Kim "Gator" Pratt', 'Steve Huff', 'Roger Howell'],
    boardAbsent: [],
    manager: 'Veda Jones',
    managementCompany: 'Arizona Community First Management',
    homeownersPresent: 'see sign-in sheet',
    keyDecisions: [
      {
        motion: 'Approve 2026 draft budget',
        movedBy: 'Diana Gruber',
        secondedBy: 'Kim "Gator" Pratt',
        result: 'carried',
      },
      {
        motion: 'Raise well generator minimum from 7,500 to 9,500 running watts',
        movedBy: 'Kim "Gator" Pratt',
        secondedBy: 'Steve Huff',
        result: 'carried',
        notes: 'New requirement effective immediately; existing users have 12 months to upgrade.',
      },
      {
        motion: 'Engage AZC Drug Testing for employee drug screening',
        movedBy: 'Kim "Gator" Pratt',
        secondedBy: 'Steve Huff',
        result: 'carried',
      },
    ],
    flaggedItems: [
      {
        type: 'accountability-gap',
        description: 'CC&R amendment at 10.53% after 4+ months of monthly reminders. Board-initiated amendment deeply unpopular.',
        date: '2025-07-19',
      },
    ],
    ongoingItems: ['Storage yard', 'CC&R amendment (10.53%)'],
  },

  {
    date: '2025-09-20',
    location: 'Seligman Library',
    format: 'in-person',
    boardPresent: ['Tim Smith', 'Rich Moore', 'Kim "Gator" Pratt',
                   'Steve Huff', 'Roger Howell'],
    boardAbsent: ['Diana Gruber'],
    manager: 'Veda Jones',
    managementCompany: 'Arizona Community First Management',
    homeownersPresent: 6,
    keyDecisions: [
      {
        motion: 'Accept TechCollect "Lite" collections service agreement',
        movedBy: 'Kim "Gator" Pratt',
        secondedBy: 'Steve Huff',
        result: 'carried',
        notes: 'New collections platform layered on top of existing management company collections activity.',
      },
      {
        motion: 'Set January 30, 2026 as record date for 2026 election',
        movedBy: 'Kim "Gator" Pratt',
        secondedBy: 'Steve Huff',
        result: 'carried',
      },
    ],
    flaggedItems: [],
    ongoingItems: ['CC&R amendment (18.07%)', 'Storage yard'],
  },

  {
    date: '2025-12-15',
    location: 'Zoom',
    format: 'zoom',
    boardPresent: ['Tim Smith', 'Rich Moore', 'Kim "Gator" Pratt',
                   'Steve Huff', 'Roger Howell', 'Diana Gruber'],
    boardAbsent: [],
    manager: 'Veda Jones',
    managementCompany: 'Arizona Community First Management',
    homeownersPresent: 13,
    keyDecisions: [
      {
        motion: 'Authorize purchase of materials to build anti-tamper device for Anvil Rock Well Bluetooth lockboxes',
        movedBy: 'Diana Gruber',
        secondedBy: 'Steve Huff',
        result: 'carried',
        notes: 'Response to vandalism at Anvil Rock Well.',
      },
      {
        motion: 'Purchase motion-activated lights for well sites (security cameras tabled)',
        movedBy: '(discussed)',
        secondedBy: '(discussed)',
        result: 'tabled',
        notes: 'Security cameras tabled. Board to vote on lights via email or at January meeting.',
      },
    ],
    flaggedItems: [
      {
        type: 'operations',
        description: 'Anvil Rock Well vandalized. Physical security of critical water infrastructure is inadequate.',
        date: '2025-12-15',
      },
    ],
    ongoingItems: ['Well security', 'Security lighting'],
  },
]

// ── Summary statistics derived from minutes ──────────────────

export const governanceSummary = {
  managementTransition: {
    description: 'Vision Community Management was replaced by Arizona Community First Management in March 2025. The same individual, Veda Jones (CMCA, AMS), serves as Community Manager under both companies.',
    implication: 'The institutional culture, habits, and relationships of the management function did not change with the company name.',
  },
  structuralConcerns: [
    {
      issue: 'Single board member holds Secretary and Treasurer roles',
      detail: 'Diana Gruber has controlled both financial records and official meeting minutes since May 2025.',
      since: '2025-05-17',
    },
    {
      issue: 'Road Manager and Well Manager combined in one board member',
      detail: 'Kim "Gator" Pratt oversees both road and well operations with no separation of duties.',
      since: '2024-05-18',
    },
    {
      issue: 'Road Manager spending authority raised 567%',
      detail: 'Unilateral spending authority raised from $750 to $5,000 with no new accountability requirements.',
      since: '2024-11-16',
    },
    {
      issue: 'Board size reduced from 9 to 7',
      detail: 'Fewer seats means fewer independent voices in governance.',
      since: '2024-07-20',
    },
  ],
  roadActivityLogging: {
    firstRequested: '2024-11-16',
    secondRequest: '2025-01-18',
    tabletPurchased: '2025-03-15',
    portalDemoGiven: '2025-07-19',
    status: 'Still manual and inconsistent as of last available minutes.',
    implication: 'Despite multiple requests over 8 months, systematic road activity tracking was not in place. This is a core feature of the proposed platform.',
  },
  ccramendmentProgress: {
    started: '2025-03-15',
    may2025: 0.09,
    july2025: 0.1053,
    september2025: 0.1807,
    needed: 0.6667,
    implication: 'After 6 months of monthly reminders, less than 19% consent. Landowner trust in current board direction is very low.',
  },
  notableExpenditures: [
    {
      date: '2024-03-16',
      description: "Service truck fuel system repair — B&B Auto & Diesel",
      amount: 8812.73,
      fundSource: 'operating',
      bidsDocumented: false,
    },
    {
      date: '2024-03-16',
      description: "Anvil Rock Well Pump Replacement — Arthur's Well Service",
      amount: 9824,
      fundSource: 'operating',
      bidsDocumented: false,
    },
    {
      date: '2025-07-03',
      description: '1978 GMC Brigadier Tandem dump truck',
      amount: 10500,
      fundSource: 'reserve',
      bidsDocumented: false,
      note: 'Approved in 16-minute special Zoom meeting.',
    },
  ],
  attendance: {
    averageHomeownersPerMeeting: 7,
    lowest: 2,
    highest: 16,
    note: 'Most meetings see fewer than 10 landowners in a 400+ parcel community. Low engagement enables low accountability.',
  },
}

// ── 2023 Meeting Minutes ──────────────────────────────────────
// Source: 10 open board meeting minutes (Jan–Nov 2023)
// All facts sourced directly from official minutes
//
// RESEARCH NOTES — OPEN QUESTIONS ANSWERED BY 2023 MINUTES:
//
// THE $128,928 JUDGMENT (financialData.ts: 2022 entry)
//   Case TM: An owner sued the POA over road maintenance and
//   board action issues. Judge ruled 90% in POA's favor BUT
//   awarded the owner their legal fees. POA appealed.
//   Jan 2023: appeal hearing held. Mar 2023: appeal DENIED.
//   POA must pay $128,927.82. Total POA legal spend on TM case:
//   $165,260.92 (lawsuit) + $4,315.44 (appeal) = $169,576.
//   Total cost of one dispute to the association: ~$298,000.
//
// THE 2023 $20,898 "PROCEEDS FROM SALE"
//   Parcel #301-24-312. Nov 2, 2023: counter-offer set at
//   $26,000, floor $25,000. Net proceeds after closing costs
//   and realtor commissions on ~$25k sale = ~$20,898.
//
// 2023 LEGAL-COLLECTIONS SPIKE TO $52,214
//   Driven primarily by TM judgment payout in Q1 2023, combined
//   with ongoing appeal fees and delinquency collections.
//
// VCM 2024 CONTRACT RENEWAL
//   Sep 16, 2023: VCM rate increase bundled into the same
//   motion as the 2024 budget and 20% assessment increase.
//   No separate board discussion recorded.
//
// EMPLOYEE WAGES ESTABLISHED
//   Apr 5: Tysen Green hired at $22/hr via RealManage.
//   May 31: Jay Janssen and Tom Born hired directly at $22/hr.
//   This is the baseline before the 379% salary growth.

export const meetings2023: DetailedMeeting[] = [
  {
    id: '2023-01-21',
    date: '2023-01-21',
    type: 'regular',
    title: 'Open Board Meeting – January 2023',
    location: 'St. Francis Catholic Church Hall, Seligman',
    attendees: {
      boardPresent: [
        'Denny Hensley', 'Wenona Kay Loving', "Kim 'Gator' Pratt",
        'Roger Jacks', 'Shaun Gardner', 'H. Wayne Murphy',
        'Rich Moore', 'Cindy Seff', 'Tim Smith',
      ],
      boardAbsent: [],
      management: 'Veda Jones, CMCA — Vision Community Management',
      audienceInPerson: 2,
      audienceZoom: 19,
    },
    decisions: [
      {
        id: '2023-01-21-d1',
        category: 'governance',
        description:
          'Motion carried to let the CC&R amendment e-voting software expire March 21, 2023 ' +
          'and end the amendment vote at that time to avoid additional expense.',
        outcome: 'approved',
        notes:
          'A separate CC&R amendment effort that predates the 2024-2025 push. ' +
          'This version was quietly wound down rather than formally voted down.',
      },
      {
        id: '2023-01-21-d2',
        category: 'governance',
        description:
          "During SOP revision: motion carried to DELETE the 'Emergency Funds Approval' " +
          'section from the SOP draft. Rationale: board only needs 48-hour notice to call ' +
          'a meeting and vote on emergency expenses.',
        outcome: 'approved',
        notes:
          'Removes a documented approval requirement for emergency spending. ' +
          '48-hour meeting notice is weaker accountability than a written emergency funds policy.',
        concerns: [
          {
            type: 'accountability-gap',
            description:
              "Eliminating the Emergency Funds Approval section from SOPs removes a " +
              "documented check on unplanned spending. Emergency expenditures will now " +
              "only require a quick board meeting with no written threshold or approval chain.",
          },
        ],
      },
      {
        id: '2023-01-21-d3',
        category: 'governance',
        description:
          "SOP draft: 'Private Funding Policy' section removed (7 in favor, 2 opposed). " +
          "'Ranch Improvements Reserve' simplified to 'Reserve' throughout.",
        outcome: 'approved',
      },
      {
        id: '2023-01-21-d4',
        category: 'property',
        description:
          'Approved addendum from realtor Shena Lee Korn to reduce listing price and extend ' +
          'listing agreement for association-owned Parcel #301-24-312 through 12/31/23.',
        outcome: 'approved',
        notes:
          'This parcel eventually sells in late 2023 for approximately $25,000. ' +
          'Net proceeds (~$20,898) appear in 2023 financials.',
      },
      {
        id: '2023-01-21-d5',
        category: 'management',
        description:
          'Board member H. Wayne Murphy asked if the board had any interest in obtaining ' +
          'bids to replace the management contract. No board members wanted to.',
        outcome: 'no-action',
        notes:
          'Unanimous disinterest in competitive bidding for the management contract. ' +
          'No discussion of cost, performance, or alternatives was recorded.',
        concerns: [
          {
            type: 'accountability-gap',
            description:
              "The management contract was not put out for competitive bid despite being " +
              "the association's largest single expense. Zero board members expressed interest " +
              "in obtaining alternative pricing. No rationale recorded.",
          },
        ],
      },
    ],
    financialSnapshot: {
      totalIncome: 284172.27,
      assessmentIncome: 218458.43,
      collectionsIncome: 53536.43,
      otherIncome: 12177.41,
      totalExpenses: 210600.46,
      roadsSVR: 48936.26,
      roadsNonSVR: 0,
      wells: 12858.00,
      adminOperating: 18840.25,
      managementFee: 23400.00,
      collectionsExpense: 49910.84,
      legalCounsel: 56655.11,
      notes:
        '2022 full-year actuals. Legal at $56,655 driven by TM lawsuit. ' +
        'Collections expense ($49,911) far exceeds collections income allocated to expense line.',
    },
    legalMatters: [
      {
        caseId: 'TM-appeal',
        description:
          'POA appealed the TM judgment ordering payment of owner\'s legal fees ($128,927.82). ' +
          'Appeal hearing was January 11, 2023. As of this meeting: waiting for decision.',
        status: 'pending',
        costToDate: 169576.36,
      },
      {
        caseId: 'IG-compliance',
        description:
          'Long-running easement fencing/gate violation lawsuit. Owner finally complied. ' +
          "POA attorney charged compliance costs to owner, not POA. Case closed.",
        status: 'closed',
        costToDate: 103564.14,
        recovery: 5672.41,
      },
    ],
    openQuestionNotes:
      'JUDGMENT ORIGIN CONFIRMED: The $128,928 in 2022 financials is the TM lawsuit — ' +
      'owner sued POA over road maintenance and board action issues. POA won 90% but still ' +
      'owed owner\'s legal fees. Appeal hearing held Jan 11, 2023 — awaiting ruling.',
  },

  {
    id: '2023-03-25',
    date: '2023-03-25',
    type: 'regular',
    title: 'Open Board Meeting – March 2023',
    location: 'St. Francis Catholic Church Hall, Seligman',
    attendees: {
      boardPresent: [
        'Denny Hensley', 'Wenona Kay Loving', "Kim 'Gator' Pratt",
        'Roger Jacks', 'H. Wayne Murphy', 'Rich Moore', 'Cindy Seff', 'Tim Smith',
      ],
      boardAbsent: ['Shaun Gardner'],
      management: 'Veda Jones, CMCA — Vision Community Management',
      audienceInPerson: 7,
      audienceZoom: 7,
    },
    decisions: [
      {
        id: '2023-03-25-d1',
        category: 'governance',
        description:
          'CC&R amendment vote results announced: 37.99% approved. Required 66.67%. Amendment FAILED.',
        outcome: 'failed',
        notes:
          'Earlier amendment attempt (predates the 2024–2025 push). Even after over a year of ' +
          'effort, the board could not achieve 2/3 consent. The 2024-2025 amendment would ' +
          'similarly sit at ~18% consent after 6 months.',
      },
      {
        id: '2023-03-25-d2',
        category: 'governance',
        description:
          "Cindy Seff resigned as Road Manager. Kim 'Gator' Pratt appointed as interim Road Manager. " +
          'Board to appoint permanent Road Manager at the May meeting.',
        outcome: 'approved',
        notes:
          'Pratt already served as Well Manager. Now interim Road Manager. ' +
          'This consolidation becomes permanent in May 2023.',
        concerns: [
          {
            type: 'structural',
            description:
              "Kim 'Gator' Pratt now controls both the well and road programs as interim manager " +
              'while also serving as a voting board member — three roles simultaneously.',
          },
        ],
      },
      {
        id: '2023-03-25-d3',
        category: 'elections',
        description:
          'Approved ballot mailer and hard copy ballot for upcoming annual election. ' +
          "Set ballot counting day as Monday, May 8, at VCM's office. " +
          'Ballots to be counted by VCM staff; Roger Jacks will witness via Zoom.',
        outcome: 'approved',
        concerns: [
          {
            type: 'conflict-of-interest',
            description:
              'Annual election ballots are counted by Vision Community Management staff, ' +
              "at VCM's own office, with only one board member witnessing via Zoom. " +
              'The management company — whose contract renewal depends on election outcomes — ' +
              'controls the physical custody and counting of ballots.',
          },
        ],
      },
      {
        id: '2023-03-25-d4',
        category: 'financial',
        description:
          'Approved moving $50,000 from Alliance Bank reserves to Alerus Bank to keep all ' +
          'funds under FDIC limits per bank.',
        outcome: 'approved',
        notes: 'Prudent financial housekeeping.',
      },
      {
        id: '2023-03-25-d5',
        category: 'governance',
        description:
          "SOP revision: 'Board Member Expenditures' section removed from draft in its entirety.",
        outcome: 'approved',
        concerns: [
          {
            type: 'accountability-gap',
            description:
              'The section governing board member expenditure limits and documentation was ' +
              'removed from the SOPs entirely. Combined with the Jan 2023 removal of the ' +
              'Emergency Funds Approval section, two consecutive meetings stripped ' +
              'spending accountability provisions from association policy.',
          },
        ],
      },
    ],
    legalMatters: [
      {
        caseId: 'TM-appeal',
        description:
          "APPEAL DENIED. POA must pay $128,927.82 to owner. Funds previously held in court trust. " +
          "Owner's attorney also requesting additional appeal legal costs — amount TBD.",
        status: 'resolved-against-poa',
        costToDate: 169576.36,
        judgmentPaid: 128927.82,
        notes:
          'ROOT CAUSE OF $128K JUDGMENT CONFIRMED. Original case: owner sued POA over road ' +
          'maintenance and board action decisions. POA won 90% of the case but was ordered to ' +
          "pay owner's legal fees. Total cost of this one dispute to the association: ~$298,000.",
      },
    ],
    openQuestionNotes:
      'JUDGMENT FULLY RESOLVED: The $128,927.82 is the TM case appeal loss. POA spent ' +
      '~$170K litigating a case it mostly won, then had to pay the owner $128,928 anyway. ' +
      'Total cost to association for this one dispute: approximately $298,000.',
  },

  {
    id: '2023-04-05',
    date: '2023-04-05',
    type: 'special',
    title: 'Special Open Meeting – April 5, 2023 (Zoom)',
    location: 'Via Zoom Teleconference',
    attendees: {
      boardPresent: [
        'Shaun Gardner', "Kim 'Gator' Pratt", 'Roger Jacks',
        'H. Wayne Murphy', 'Rich Moore', 'Cindy Seff', 'Tim Smith',
      ],
      boardAbsent: ['Denny Hensley', 'Wenona Kay Loving'],
      management: 'Veda Jones, CMCA — Vision Community Management',
      audienceInPerson: 0,
      audienceZoom: 46,
    },
    decisions: [
      {
        id: '2023-04-05-d1',
        category: 'employment',
        description:
          'Approved hiring Tysen Green as part-time blade operator at $22/hr, ' +
          'pending passing RealManage corporate onboarding requirements.',
        outcome: 'approved',
        notes:
          "Employees at this point processed through RealManage (VCM's parent company). " +
          'Changed in May 2023 when board moves payroll to ADP.',
        concerns: [
          {
            type: 'structural',
            description:
              "Association employees were onboarded through RealManage (VCM's parent company), " +
              'meaning a vendor controlled the HR function for association staff.',
          },
        ],
      },
      {
        id: '2023-04-05-d2',
        category: 'roads',
        description: 'Appointed Tom Born and Tim Smith to the Road Committee.',
        outcome: 'approved',
        notes:
          'Tim Smith is a sitting board member appointed to a committee he will vote on budgets for.',
      },
      {
        id: '2023-04-05-d3',
        category: 'financial',
        description:
          "Approved up to $220 for two new service truck batteries. " +
          "Kim 'Gator' Pratt to purchase through his employer at a discount, then submit receipt for reimbursement.",
        outcome: 'approved',
        concerns: [
          {
            type: 'conflict-of-interest',
            description:
              "The Road Manager (also a board member) is approved to purchase POA equipment " +
              "through his personal employer. Actual cost came in at $432.33 — nearly double " +
              "the approved amount — and was approved retroactively after already being purchased.",
          },
        ],
      },
    ],
  },

  {
    id: '2023-04-12',
    date: '2023-04-12',
    type: 'special',
    title: 'Special Open Meeting – April 12, 2023 (Zoom)',
    location: 'Via Zoom Teleconference',
    attendees: {
      boardPresent: [
        'Shaun Gardner', "Kim 'Gator' Pratt", 'Roger Jacks',
        'H. Wayne Murphy', 'Tim Smith',
      ],
      boardAbsent: ['Denny Hensley', 'Cindy Seff', 'Wenona Kay Loving', 'Rich Moore'],
      management: 'Veda Jones, CMCA — Vision Community Management',
      audienceInPerson: 0,
      audienceZoom: 19,
    },
    decisions: [
      {
        id: '2023-04-12-d1',
        category: 'roads',
        description:
          'Approved up to $2,200 for new front tires for the road grader. ' +
          "Kim 'Gator' Pratt sourced through his employer, saving approximately $1,500.",
        outcome: 'approved',
        concerns: [
          {
            type: 'conflict-of-interest',
            description:
              "A second equipment purchase routed through the Road Manager's personal employer. " +
              'No competitive bid process. A board member\'s private employer has a recurring ' +
              'role as equipment supplier.',
          },
        ],
      },
      {
        id: '2023-04-12-d2',
        category: 'financial',
        description:
          "Approved $432.33 for service truck batteries already purchased by Kim 'Gator' Pratt. " +
          "Previous approval (Apr 5) was for 'not to exceed $220.'",
        outcome: 'approved',
        notes: 'Cost came in at nearly twice the approved NTE amount. Retroactive approval.',
        concerns: [
          {
            type: 'accountability-gap',
            description:
              'Board member spent $432.33 on an item approved at $220 NTE, then received ' +
              'retroactive approval after the fact. Spend controls appear advisory rather than ' +
              'binding when the purchaser is also a board member.',
          },
        ],
      },
      {
        id: '2023-04-12-d3',
        category: 'financial',
        description:
          "Approved $169.28 for new locks for the storage yard, already purchased by Kim 'Gator' Pratt.",
        outcome: 'approved',
        notes: 'Third retroactive purchase approval in two meetings.',
        concerns: [
          {
            type: 'accountability-gap',
            description:
              'Third consecutive retroactive purchase approval for items already bought by the ' +
              'Road Manager without prior board authorization. Pattern of spending first, approving later.',
          },
        ],
      },
    ],
  },

  {
    id: '2023-05-20',
    date: '2023-05-20',
    type: 'annual',
    title: 'Annual Meeting + Open Board Meeting – May 2023',
    location: 'Seligman School',
    attendees: {
      boardPresent: [
        'Wenona Kay Loving', "Kim 'Gator' Pratt", 'H. Wayne Murphy',
        'Rich Moore', 'Cindy Seff', 'Tim Smith',
      ],
      boardAbsent: ['Denny Hensley', 'D. Clay Boop'],
      management: 'Veda Jones, CMCA — Vision Community Management',
      audienceInPerson: 15,
      audienceZoom: 6,
    },
    decisions: [
      {
        id: '2023-05-20-d1',
        category: 'governance',
        description:
          'Roger Jacks resigned from board effective May 15, 2023. ' +
          'Board to solicit applicants, deadline June 30, 2023. Replacement appointment at July meeting.',
        outcome: 'noted',
      },
      {
        id: '2023-05-20-d2',
        category: 'governance',
        description:
          'Officer appointments for new term: H. Wayne Murphy (President), Rich Moore (VP), ' +
          'Wenona Kay Loving (Secretary), D. Clay Boop (Treasurer).',
        outcome: 'approved',
      },
      {
        id: '2023-05-20-d3',
        category: 'governance',
        description:
          "Kim 'Gator' Pratt formally appointed as BOTH Well Manager AND Road Manager simultaneously.",
        outcome: 'approved',
        concerns: [
          {
            type: 'structural',
            description:
              "Kim 'Gator' Pratt now officially holds three simultaneous roles: voting board member, " +
              'Well Manager, and Road Manager. These two manager roles represent the association\'s ' +
              'primary operational functions and the majority of its budget.',
          },
        ],
      },
      {
        id: '2023-05-20-d4',
        category: 'management',
        description:
          'Duties of Communications Manager delegated to management company (Veda Jones/VCM). ' +
          'VCM will now produce the 60-Day Snapshot report.',
        outcome: 'approved',
        concerns: [
          {
            type: 'conflict-of-interest',
            description:
              'The management company (VCM) is now responsible for producing the 60-Day Snapshot, ' +
              "which summarizes POA activity for landowners. VCM now writes the report that covers " +
              "VCM's own financial charges, collections activity, and legal billing.",
          },
        ],
      },
    ],
  },

  {
    id: '2023-05-31',
    date: '2023-05-31',
    type: 'special',
    title: 'Special Open Meeting – May 31, 2023 (Zoom)',
    location: 'Via Zoom Teleconference',
    attendees: {
      boardPresent: [
        'Denny Hensley', 'Wenona Kay Loving', "Kim 'Gator' Pratt",
        'H. Wayne Murphy', 'Rich Moore', 'Cindy Seff', 'Tim Smith',
      ],
      boardAbsent: ['D. Clay Boop'],
      management: 'Veda Jones, CMCA — Vision Community Management',
      audienceInPerson: 0,
      audienceZoom: 28,
    },
    decisions: [
      {
        id: '2023-05-31-d1',
        category: 'employment',
        description:
          "Eliminated the association's 2 employee positions with RealManage (VCM's parent company). " +
          'Approved ADP payroll services at $85/cycle plus year-end fees. ' +
          'Hired Jay Janssen and Tom Born directly as SVR Road Equipment Operators at $22/hr.',
        outcome: 'approved',
        notes:
          '$22/hr is the wage baseline before subsequent increases that produced the 379% ' +
          'salary growth by 2025. Tom Born contingent on background check. ' +
          "Jay Janssen's prior RealManage screening accepted in lieu of new screening.",
      },
      {
        id: '2023-05-31-d2',
        category: 'roads',
        description:
          "Tom Born's back-timesheets for 'several weeks' of prior work approved and " +
          'to be paid in the first ADP payroll cycle.',
        outcome: 'approved',
        notes:
          'Tom Born had been working for the association before his employment was formally approved.',
        concerns: [
          {
            type: 'accountability-gap',
            description:
              'An individual performed several weeks of compensated work before the board formally ' +
              'approved his hire. The Road Manager appears to have authorized work hours outside ' +
              'of the board approval process.',
          },
        ],
      },
      {
        id: '2023-05-31-d3',
        category: 'technology',
        description:
          'Road Committee member John Webb presented a digital road tracking map concept. ' +
          'Scope of work to be developed by Webb and Shane Terpstra for July 2023 board review.',
        outcome: 'tabled',
        notes:
          'This is the origin of the SVR digital map/website project that eventually leads ' +
          'to the $5,000 Technology Management Group contract in September 2023.',
      },
    ],
  },

  {
    id: '2023-07-15',
    date: '2023-07-15',
    type: 'regular',
    title: 'Open Board Meeting – July 2023',
    location: 'St. Francis Catholic Church Hall, Seligman',
    attendees: {
      boardPresent: [
        'H. Wayne Murphy', 'D. Clay Boop', 'Wenona Kay Loving',
        "Kim 'Gator' Pratt", 'Rich Moore', 'Tim Smith',
      ],
      boardAbsent: ['Cindy Seff', 'Roger Howell'],
      management: 'Veda Jones, CMCA — Vision Community Management',
      audienceInPerson: 5,
      audienceZoom: 3,
    },
    decisions: [
      {
        id: '2023-07-15-d1',
        category: 'governance',
        description:
          'Roger Howell appointed by written ballot to replace Roger Jacks. ' +
          'Howell will serve until 2024 annual election.',
        outcome: 'approved',
      },
      {
        id: '2023-07-15-d2',
        category: 'governance',
        description:
          'Denny Hensley sold his property and automatically vacated his board seat effective ' +
          'June 16, 2023. Board to solicit candidates with Sept 1, 2023 application deadline.',
        outcome: 'noted',
        notes: 'Second board vacancy in two months. Both filled by board appointment rather than member election.',
      },
      {
        id: '2023-07-15-d3',
        category: 'technology',
        description:
          'John Webb and Shane Terpstra demonstrated proposed new community website with ' +
          'road/well request tracking and text/email alerts. Tabled pending pricing from TMG.',
        outcome: 'tabled',
        notes:
          'The same concept — a functional tracking platform — that the current 2026 ' +
          'self-management proposal is built around. The board saw a version of this in 2023.',
      },
    ],
  },

  {
    id: '2023-09-16',
    date: '2023-09-16',
    type: 'regular',
    title: 'Open Board Meeting – September 2023',
    location: 'St. Francis Catholic Church Hall, Seligman',
    attendees: {
      boardPresent: [
        'H. Wayne Murphy', 'D. Clay Boop', 'Wenona Kay Loving',
        'Rich Moore', 'Tim Smith', 'Roger Howell', 'Diana Gruber',
      ],
      boardAbsent: ['Cindy Seff', "Kim 'Gator' Pratt"],
      management: 'Veda Jones, CMCA — Vision Community Management',
      audienceInPerson: 4,
      audienceZoom: 3,
    },
    decisions: [
      {
        id: '2023-09-16-d1',
        category: 'governance',
        description:
          'Diana Gruber appointed by written ballot to fill the Hensley vacancy. ' +
          'Gruber will serve until 2024 annual election.',
        outcome: 'approved',
        notes:
          "This is Diana Gruber's first board entry. By 2024-2025 she will hold both " +
          'Secretary and Treasurer simultaneously.',
      },
      {
        id: '2023-09-16-d2',
        category: 'financial',
        description:
          'Approved deferring reserve transfers for remainder of 2023 to ensure sufficient ' +
          'operating funds to continue the Road Maintenance Program.',
        outcome: 'approved',
        concerns: [
          {
            type: 'budget-concern',
            description:
              'Reserve contributions suspended to cover operating expenses mid-year. ' +
              'The reserve is already critically underfunded relative to the $618,000 in road ' +
              'and well work identified in the 2017 reserve study (never updated). ' +
              'Pausing reserve funding compounds a structural deficit.',
          },
        ],
      },
      {
        id: '2023-09-16-d3',
        category: 'technology',
        description:
          'Approved $5,000 contract with Technology Management Group (TMG) for new website ' +
          'with road request tracking system. $2,500 deposit due upfront, funded from reserves.',
        outcome: 'approved',
        notes: 'Single vendor, no competing bids noted in the minutes.',
      },
      {
        id: '2023-09-16-d4',
        category: 'financial',
        description:
          'Approved 2024 draft budget with a 20% assessment increase. Simultaneously approved ' +
          'the 2024 Vision Community Management price sheet (Exhibit A).',
        outcome: 'approved',
        notes:
          'The 20% assessment increase is presented alongside the VCM rate increase in a single ' +
          'motion. No separate discussion of the VCM price sheet was recorded.',
        concerns: [
          {
            type: 'conflict-of-interest',
            description:
              "The management company's contract renewal and rate increase (Exhibit A) was bundled " +
              'into the same motion as the 2024 budget and assessment increase. No independent ' +
              'review of Exhibit A, no alternative bids, no separate vote.',
          },
          {
            type: 'budget-concern',
            description:
              '20% assessment increase approved following mid-year operating pressure. ' +
              'Assessment income is growing, but management ecosystem costs are growing faster — ' +
              'establishing the pattern that produces the 48% management cost ratio by 2025.',
          },
        ],
      },
    ],
  },

  {
    id: '2023-11-02',
    date: '2023-11-02',
    type: 'special',
    title: 'Special Open Meeting – November 2, 2023 (Parcel Sale)',
    location: 'Via Zoom Teleconference',
    attendees: {
      boardPresent: [
        'H. Wayne Murphy', 'Cindy Seff', 'Wenona Kay Loving',
        'Rich Moore', 'Tim Smith', 'Roger Howell', 'Diana Gruber',
      ],
      boardAbsent: ['D. Clay Boop', "Kim 'Gator' Pratt"],
      management: 'Veda Jones, CMCA — Vision Community Management',
      guests: ['Shena Lee Korn, Realtor'],
      audienceInPerson: 0,
      audienceZoom: 0,
    },
    decisions: [
      {
        id: '2023-11-02-d1',
        category: 'property',
        description:
          'Approved submitting a counter-offer of $26,000 for association-owned Parcel #301-24-312. ' +
          'Minimum acceptable price: $25,000. Roger Howell appointed to execute all closing documents.',
        outcome: 'approved',
        notes:
          "ASSET SALE behind the 2023 '$20,898 proceeds from sale' in financial data. " +
          'Net proceeds after realtor commissions (~6%) and closing costs on a ~$25k sale ' +
          'land near $20,898.',
      },
    ],
    openQuestionNotes:
      'ASSET SALE CONFIRMED: The 2023 "proceeds from sale" ($20,898) is the sale of ' +
      'POA-owned Parcel #301-24-312. Sale price approximately $25,000-$26,000; ' +
      'net to association approximately $20,898 after fees.',
  },

  {
    id: '2023-11-18',
    date: '2023-11-18',
    type: 'regular',
    title: 'Open Board Meeting – November 2023',
    location: 'Seligman Library',
    attendees: {
      boardPresent: [
        'H. Wayne Murphy', 'D. Clay Boop', 'Wenona Kay Loving',
        'Rich Moore', 'Tim Smith', 'Roger Howell', 'Diana Gruber',
        'Cindy Seff', "Kim 'Gator' Pratt",
      ],
      boardAbsent: [],
      management: 'Veda Jones, CMCA, AMS — Vision Community Management',
      audienceInPerson: 19,
      audienceZoom: 11,
    },
    decisions: [
      {
        id: '2023-11-18-d1',
        category: 'financial',
        description:
          'Approved transferring $35,000 from reserves to operating to cover year-end operating shortfall. ' +
          'Any net income at year-end to be returned to reserves before December 31.',
        outcome: 'approved',
        concerns: [
          {
            type: 'budget-concern',
            description:
              'Year-end operating shortfall required a $35,000 reserve draw — following ' +
              'mid-year suspension of reserve contributions. The association is consuming the ' +
              'safety net it cannot afford to lose, against a backdrop of $618,000+ in ' +
              'deferred infrastructure needs from the 2017 reserve study.',
          },
        ],
      },
      {
        id: '2023-11-18-d2',
        category: 'governance',
        description:
          'Road program expectations formally set: all equipment stored at association yard; ' +
          'Road Manager to recommend additional security; board members may not communicate ' +
          'individually to owners; Road Manager responsible for obtaining clean title for the ' +
          'water truck; no non-SVR equipment for SVR maintenance; cost-per-mile tracking required.',
        outcome: 'approved',
        notes:
          'These controls being established in response to apparent operational problems — ' +
          'equipment stored off-site, water truck without clear title, unclear cost tracking.',
        concerns: [
          {
            type: 'operations',
            description:
              'Water truck without clear title was in use for POA road maintenance. ' +
              'The board had to formally direct the Road Manager to obtain title and register ' +
              'the vehicle — suggesting the association was operating unregistered/uninsured equipment.',
          },
          {
            type: 'accountability-gap',
            description:
              'The board setting cost-per-mile tracking requirements at year-end 2023 implies ' +
              'road maintenance costs had not been tracked at that granularity previously. ' +
              'The Road Manager was authorized to spend on grading and labor without per-mile accountability.',
          },
        ],
      },
      {
        id: '2023-11-18-d3',
        category: 'governance',
        description: 'Road Manager Role and Duties policy formally approved.',
        outcome: 'approved',
        notes:
          'First drafted early in 2023 and tabled repeatedly. Approved near year-end, ' +
          'well after Gator assumed the role.',
      },
      {
        id: '2023-11-18-d4',
        category: 'governance',
        description:
          'Set 2024 record date as January 30, 2024. Rich Moore appointed as Election Committee Chair.',
        outcome: 'approved',
      },
    ],
  },
]

// ── 2023 Pattern Summary ──────────────────────────────────────
export const patterns2023 = {
  legalCostResolution: {
    case: 'TM lawsuit',
    description:
      'Owner sued POA over road maintenance and board action decisions. POA won 90% of the case ' +
      "but was ordered to pay the owner's legal fees ($128,928) plus spent ~$170K in its own " +
      'legal costs. Total cost of one litigation to the association: approximately $298,000.',
    totalCost: 298000,
    drivesLegalSpike2022to2023: true,
  },
  consolidationOfControl: [
    "Kim 'Gator' Pratt: Well Manager (existing) → interim Road Manager (Mar 2023) → permanent Well + Road Manager + board member (May 2023)",
    "VCM absorbs Communications Manager function (May 2023) — now writes the report covering its own charges",
  ],
  spendingBeforeApproval: {
    instances: 3,
    months: 'April 2023',
    description:
      'Three consecutive retroactive purchase approvals, all purchased by Road Manager ' +
      'through his personal employer. One item exceeded its NTE amount by 96%.',
  },
  ballotCustody: {
    description:
      "Annual election ballots counted by VCM staff at VCM's office, witnessed only via Zoom. " +
      'The vendor whose contract depends on board composition controls the physical ballot count.',
  },
  reserveDetermination: {
    contributionsSuspended: '2023-09',
    emergencyDraw: 35000,
    drawDate: '2023-11',
    context: '$618,000+ in deferred infrastructure identified in 2017 reserve study (never updated)',
  },
  bundledContractRenewal: {
    date: '2023-09-16',
    description:
      'VCM rate increase approved in same motion as 20% assessment increase and 2024 budget. ' +
      'No separate discussion, no competitive bids.',
  },
  digitalTracking: {
    note:
      'The community wanted a road/well tracking platform in 2023 (Webb/TMG proposal). ' +
      'The board approved $5,000 for a version of this. The platform we are building does ' +
      'what members asked for in 2023 — only better, and owned by the community.',
  },
}

// ── 2021 Meeting Data ──────────────────────────────────────────────────────────
// Source: SVR POA Open Board Meeting Minutes, January–November 2021

export const meetings2021: DetailedMeeting[] = [
  {
    id: '2021-01-16',
    date: '2021-01-16',
    type: 'regular',
    title: 'Board Meeting – January 2021',
    location: 'St. Francis Catholic Church Hall, Seligman',
    attendees: {
      boardPresent: [
        'Wes Drown (President)', 'Roger Jacks (Treasurer)', 'Denny Hensley',
        'Shaun Gardner', 'Matt Hickman', 'Bill Sasser', 'Cindy Seff',
        'Wenona Kay Loving', 'Wayne Murphy (Vice President)',
      ],
      boardAbsent: ['Tim Michelson'],
      management: 'Darin Fisher — Vision Community Management',
      audienceInPerson: 4,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2021-01-16-d1',
        category: 'management',
        description:
          'Board launched a Request for Proposal (RFP) for Community Association Management Services. ' +
          "Darin Fisher (Vision's manager) suggested the RFP should separate financial and operational " +
          'frameworks. Wes Drown to revise the old RFP and distribute to board; upon approval, ' +
          'send to additional management companies within two weeks (by February 2, 2021). ' +
          'Motion carried unanimously.',
        outcome: 'approved',
        notes:
          'The board was actively shopping for a replacement management company in January 2021. ' +
          "Vision's own representative Darin Fisher was in the room and helped frame the RFP structure. " +
          'The RFP will be tabled in March 2021 without being sent out. ' +
          'By 2022 the board will decline even to solicit bids (Jan 2023: zero members interested). ' +
          "Vision's successor (AZ Community First, same manager Veda Jones) is still in place as of 2025.",
        concerns: [
          {
            type: 'conflict-of-interest',
            description:
              'The vendor being evaluated (Vision Community Management) was present at the meeting ' +
              'and helped structure the RFP that would be used to potentially replace it. ' +
              'The board received guidance on how to evaluate management proposals from the management ' +
              'company that stood to lose the contract. The RFP was subsequently tabled and never sent.',
          },
        ],
      },
      {
        id: '2021-01-16-d2',
        category: 'financial',
        description:
          'Approved audit engagement with March & McMillan CPAs for 2020 fiscal year at $2,750, ' +
          'with a cap of $5,000 for unexpected additional work.',
        outcome: 'approved',
        notes:
          'Darin Fisher steered the board toward this firm after noting the prior CPA may not be able ' +
          'to complete an audit and that typical audit costs are around $10,000. ' +
          'The firm he recommended came in at $2,750.',
      },
      {
        id: '2021-01-16-d3',
        category: 'governance',
        description:
          'Discussion of live streaming board meetings instead of audio recording and posting. ' +
          'Matt Hickman offered to facilitate live streaming for the next meeting.',
        outcome: 'noted',
        notes:
          'Early member interest in transparent, accessible board meetings — ' +
          'the same need the platform addresses with its dashboard and meeting record system.',
      },
    ],
  },
  {
    id: '2021-03-20',
    date: '2021-03-20',
    type: 'regular',
    title: 'Open Board Meeting – March 2021',
    location: 'St. Francis Catholic Church Hall, Seligman',
    attendees: {
      boardPresent: [
        'Cindy Seff', 'Wenona Kay Loving', 'Matt Hickman', 'Roger Jacks',
        'Shaun Gardner', 'Wayne Murphy', 'Wes Drown', 'Tim Michelson',
      ],
      boardAbsent: ['Jennifer DiCiano', 'Bill Sasser', 'Denny Hensley'],
      management: 'Veda Jones, CAAM, CMCA — Vision Community Management',
      audienceInPerson: 6,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2021-03-20-d1',
        category: 'management',
        description:
          'RFP for management services tabled. Board to hold a special meeting on April 6, 2021 ' +
          'to make a final decision.',
        outcome: 'tabled',
        notes:
          'The April 6 special meeting is not in the uploaded minutes set. ' +
          'Based on subsequent meetings, the RFP was never sent out and Vision retained the contract. ' +
          'This is the moment the 2021 management review quietly died.',
        concerns: [
          {
            type: 'accountability-gap',
            description:
              'The January 2021 resolution to send the management RFP within two weeks was delayed ' +
              'to a special meeting in April, then apparently abandoned with no recorded vote to close ' +
              'the item. The board authorized a competitive review of its largest vendor, then never ' +
              'completed it. No minutes from the April 6 special meeting are in the public record.',
          },
        ],
      },
      {
        id: '2021-03-20-d2',
        category: 'employment',
        description: 'Motion to retain Jay Janssen as a road employee. Motion carried.',
        outcome: 'approved',
        notes:
          'Jay Janssen appears here as an existing employee. He will later be hired as an ADP ' +
          'direct employee at $22/hr in May 2023. He has the longest continuous employment ' +
          'relationship with the road program in the meeting record.',
      },
      {
        id: '2021-03-20-d3',
        category: 'legal',
        description:
          'Motion to pursue foreclosure lawsuit on the top 12 highest-balance delinquent accounts ' +
          'at Cannon Law Firm. Motion carried.',
        outcome: 'approved',
        notes:
          'This is the origin of the aggressive collections legal strategy. The board is explicitly ' +
          'choosing foreclosure action on 12 accounts simultaneously. Combined with the active TM ' +
          'lawsuit, this is the period when legal spending begins its significant escalation.',
      },
      {
        id: '2021-03-20-d4',
        category: 'elections',
        description:
          'Election Committee Chair Roger Jacks to attend ballot counting on May 3, 2021 via Zoom. ' +
          "VCM will count ballots at VCM's office.",
        outcome: 'noted',
        notes:
          'The Zoom-only witness / VCM ballot custody pattern appears in 2021 as well — ' +
          'it is not new in 2023 when it was flagged. This has been the election process for years.',
        concerns: [
          {
            type: 'conflict-of-interest',
            description:
              "VCM counts annual election ballots at its own office with a single board member " +
              'observing via Zoom. This arrangement has been in place since at least 2021. ' +
              'The management company whose contract depends on board composition controls physical ' +
              'ballot custody and counting. A community-owned platform would enable independently ' +
              'witnessed, verifiable digital voting with full audit trail.',
          },
        ],
      },
    ],
  },
  {
    id: '2021-05-15',
    date: '2021-05-15',
    type: 'annual',
    title: 'Annual Meeting + Open Board Meeting – May 2021',
    location: 'Seligman School',
    attendees: {
      boardPresent: [
        'Cindy Seff', 'Bill Sasser', 'Denny Hensley', 'Wenona Kay Loving',
        'Matt Hickman', 'Roger Jacks', 'Shaun Gardner', 'H. Wayne Murphy',
        'Wes Drown', 'Tim Michelson',
      ],
      boardAbsent: ['Jennifer DiCiano'],
      management: 'Veda Jones, CAAM, CMCA — Vision Community Management',
      guests: ['Lloyd L. Rabb III, Legal Counsel'],
      audienceInPerson: null,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2021-05-15-d1',
        category: 'governance',
        description:
          'Officer appointments: Wes Drown (President), H. Wayne Murphy (Vice President — non-voting, ' +
          'as he was not an elected board member), Roger Jacks (Treasurer), Wenona Kay Loving (Secretary). ' +
          'Secretary may delegate meeting minute recording duties to management.',
        outcome: 'approved',
        notes:
          '(1) H. Wayne Murphy is noted as non-voting because he was not an elected board member — ' +
          'he was serving on the board in some capacity without election. ' +
          '(2) The authority for VCM to write the minutes is formally established here in May 2021. ' +
          "VCM will eventually write all meeting minutes that document VCM's own charges.",
        concerns: [
          {
            type: 'conflict-of-interest',
            description:
              'The board formally authorized the management company to record and produce the ' +
              'official meeting minutes. Vision Community Management now writes the minutes that ' +
              "document Vision's own fees, collections activity, and legal billing. " +
              'This arrangement begins in May 2021 and continues through the full record.',
          },
        ],
      },
      {
        id: '2021-05-15-d2',
        category: 'financial',
        description: 'Collection policy and resolution approved. Procedure for payment arrangements outlined.',
        outcome: 'approved',
        notes:
          'This is the foundational collections policy that drives the legal collections escalation ' +
          'documented in 2021–2023. The policy was drafted with Vision input (a sample was presented ' +
          'by VCM at the March meeting).',
      },
      {
        id: '2021-05-15-d3',
        category: 'financial',
        description:
          'Accounting audit for 2020 fiscal year noted as in progress; expected completion by June 30, 2021. ' +
          'CPA recommended budgeting 100% of billed assessment income, with a separate Bad Debt line item ' +
          'for expected non-payment. Management to follow this for the 2022 draft budget.',
        outcome: 'noted',
      },
    ],
  },
  {
    id: '2021-07-17',
    date: '2021-07-17',
    type: 'regular',
    title: 'Open Board Meeting – July 2021',
    location: 'St. Francis Catholic Church Hall, Seligman',
    attendees: {
      boardPresent: [
        'Cindy Seff', 'Matt Hickman', 'Roger Jacks', 'Shaun Gardner',
        'H. Wayne Murphy', 'Wes Drown',
      ],
      boardAbsent: ['Bill Sasser', 'Denny Hensley', 'Wenona Kay Loving', 'Tim Michelson'],
      management: 'Veda Jones, CAAM, CMCA — Vision Community Management',
      guests: ['Erik Gerharter, Desert North Realty'],
      audienceInPerson: null,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2021-07-17-d1',
        category: 'property',
        description:
          'Erik Gerharter (Desert North Realty) presented on listing the two HOA-owned parcels for sale. ' +
          'Board directed management to get information from 2 more local realtors for comparison. ' +
          'Item tabled pending additional realtor information.',
        outcome: 'tabled',
        notes:
          'The two parcels are #301-24-312 (eventually sells 2023 for ~$25K) and ' +
          '#301-05-218 (sells September 2021 for $45,000 cash). ' +
          'The board shopped multiple realtors before selecting Shena Lee Korn.',
      },
      {
        id: '2021-07-17-d2',
        category: 'governance',
        description:
          'Ad-hoc committee created to investigate fair assessments across all parcel sizes. ' +
          'Members: Wes Drown, H. Wayne Murphy, Matt Hickman, Denny Hensley.',
        outcome: 'approved',
        notes:
          'This committee is the origin of the acre-weighted assessment discussion that eventually ' +
          'becomes the CC&R amendment campaigns. The current vote-by-acre system means large parcel ' +
          'owners have outsized voting power — this committee was formed to explore alternatives.',
      },
      {
        id: '2021-07-17-d3',
        category: 'legal',
        description:
          'New collections attorney test case: Carpenter, Hazlewood, Delgado & Bolen selected to ' +
          'pursue collections against one lot as a test. The specific lot was a former POA-owned ' +
          'parcel sold in 2013 on which the buyer had defaulted on the loan.',
        outcome: 'approved',
        notes:
          'The board is now using multiple law firms for collections — Cannon Law Firm (March 2021) ' +
          'plus this new firm being evaluated. Legal collections costs will escalate significantly ' +
          'through 2022 and 2023.',
      },
    ],
  },
  {
    id: '2021-08-02',
    date: '2021-08-02',
    type: 'special',
    title: 'Special Open Meeting – August 2, 2021 (Parcel Listing)',
    location: 'Via Zoom',
    attendees: {
      boardPresent: [
        'Cindy Seff', 'Bill Sasser', 'Matt Hickman', 'Roger Jacks', 'Wes Drown',
      ],
      boardAbsent: [
        'Denny Hensley', 'Wenona Kay Loving', 'Shaun Gardner',
        'H. Wayne Murphy', 'Tim Michelson',
      ],
      management: 'Veda Jones, CAAM, CMCA — Vision Community Management',
      audienceInPerson: 0,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2021-08-02-d1',
        category: 'property',
        description:
          'Approved hiring Shena Lee Korn to list and sell both HOA-owned parcels ' +
          '(#301-24-312 and #301-05-218) with a 120-day listing agreement limit.',
        outcome: 'approved',
        notes:
          'Parcel #301-05-218 will sell in September 2021 for $45,000. ' +
          'Parcel #301-24-312 will not sell until November 2023 for approximately $25,000. ' +
          'Shena Lee Korn remains the association\'s realtor for this parcel for over two years.',
      },
    ],
  },
  {
    id: '2021-08-26',
    date: '2021-08-26',
    type: 'special',
    title: 'Special Open Meeting – August 26, 2021 (Parcel Price)',
    location: 'Via Zoom',
    attendees: {
      boardPresent: [
        'Cindy Seff', 'Bill Sasser', 'Roger Jacks', 'Wes Drown',
        'Shaun Gardner', 'Wenona Kay Loving',
      ],
      boardAbsent: [
        'Denny Hensley', 'Matt Hickman', 'H. Wayne Murphy', 'Tim Michelson',
      ],
      management: 'Veda Jones, CAAM, CMCA — Vision Community Management',
      audienceInPerson: 0,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2021-08-26-d1',
        category: 'property',
        description:
          'Board discussed reducing sale price for both parcels. Item tabled to September 18 meeting; ' +
          'realtor Shena Lee Korn requested to be present to explain pricing recommendation.',
        outcome: 'tabled',
      },
    ],
  },
  {
    id: '2021-09-10',
    date: '2021-09-10',
    type: 'special',
    title: 'Special Open Meeting – September 10, 2021 (Parcel #301-05-218 Sale)',
    location: 'Via Zoom',
    attendees: {
      boardPresent: [
        'Cindy Seff', 'Bill Sasser', 'Roger Jacks', 'Wes Drown',
        'Shaun Gardner', 'Wenona Kay Loving', 'Matt Hickman',
      ],
      boardAbsent: ['Denny Hensley', 'H. Wayne Murphy', 'Tim Michelson'],
      management: 'Veda Jones, CAAM, CMCA — Vision Community Management',
      guests: ['Lloyd L. Rabb III, Legal Counsel', 'Shena Lee Korn, Realtor'],
      audienceInPerson: 0,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2021-09-10-d1',
        category: 'property',
        description:
          'Accepted full-price, cash purchase offer of $45,000 for Parcel #301-05-218. ' +
          'Disclosure forms completed by legal counsel accepted. ' +
          'Wes Drown authorized to sign purchase agreement, disclosure forms, and all closing paperwork. ' +
          'Wes also authorized to accept any full-price, cash offer for Parcel #301-24-312 ' +
          'should one arise; all other offer types to go back to the board.',
        outcome: 'approved',
        notes:
          'PARCEL SALE #1 CONFIRMED. The $45,000 cash sale of Parcel #301-05-218 in September 2021 ' +
          'is separate from the 2023 sale of Parcel #301-24-312. ' +
          'The association has sold at least two properties from its real estate holdings. ' +
          'Both sales were handled through Shena Lee Korn — the same realtor who appears in ' +
          'subsequent meetings through the 2023 sale.',
      },
    ],
  },
  {
    id: '2021-09-18',
    date: '2021-09-18',
    type: 'regular',
    title: 'Open Board Meeting – September 2021',
    location: 'St. Francis Catholic Church Hall, Seligman',
    attendees: {
      boardPresent: [
        'Bill Sasser', 'Cindy Seff', 'Wenona Kay Loving', 'Roger Jacks',
        'Shaun Gardner', 'H. Wayne Murphy', 'Denny Hensley', 'Wes Drown',
      ],
      boardAbsent: ['Matt Hickman', 'Tim Michelson'],
      management: 'Veda Jones, CAAM, CMCA — Vision Community Management',
      guests: ["Shena Lee Korn, Russ Lyon Sotheby's", 'Lloyd L. Rabb III, Legal Counsel'],
      audienceInPerson: null,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2021-09-18-d1',
        category: 'governance',
        description:
          'Director Tim Michelson automatically removed from board per Bylaws Article 6, Section 6.8 ' +
          'for missing 3+ consecutive meetings. Removal effective September 18, 2021.',
        outcome: 'applied-automatically',
        notes:
          'The same bylaw applied to Michelson here, to Hickman in March 2022, but waived for ' +
          'Hensley in January 2022. Three applications of the same rule, two automatically and ' +
          'one by board discretion.',
      },
      {
        id: '2021-09-18-d2',
        category: 'financial',
        description:
          '2022 budget approved WITH NO assessment increase. ' +
          'President Wes Drown recommended a 20% increase to fund reserves and replenish ' +
          'funds depleted by legal costs — but the board voted the budget without the increase.',
        outcome: 'approved',
        notes:
          'Wes Drown had the right diagnosis in September 2021: the association needed ' +
          'to fund reserves and replenish legal funds. The board declined. ' +
          'One year later (Sep 2022) the same 20% increase was approved without discussion. ' +
          'Two years later (Sep 2023) another 20% was approved. ' +
          'The delay cost landowners nothing in 2022, then hit them with back-to-back 20% increases ' +
          'in 2023 and 2024 — while the reserve study remained unupdated throughout.',
        concerns: [
          {
            type: 'budget-concern',
            description:
              'The outgoing President explicitly recommended a 20% assessment increase in 2021 ' +
              'to address reserve underfunding and legal cost depletion. The board voted against it. ' +
              'The same increase was approved the next two years without recorded discussion. ' +
              'Two consecutive 20% increases following a deferred year create a steeper cumulative ' +
              'burden without the earlier year\'s contribution going to reserves.',
          },
        ],
      },
      {
        id: '2021-09-18-d3',
        category: 'financial',
        description:
          '2020 Audit accepted. Finished audit to be posted to website and portal. Wes Drown abstained.',
        outcome: 'approved',
        notes: "Wes Drown's abstention on the audit is not explained in the minutes.",
      },
      {
        id: '2021-09-18-d4',
        category: 'operations',
        description:
          'Realtor Shena Lee Korn noted that the equipment storage yard the association currently uses ' +
          "was just listed for sale by its owner (also Shena's client). " +
          'The association may need to find an alternative storage location.',
        outcome: 'noted',
        notes:
          'The realtor who is selling an association-owned parcel FOR the association ' +
          'is simultaneously representing the owner of the property the association RENTS for storage. ' +
          'The board does not record any discussion of this dual representation.',
        concerns: [
          {
            type: 'conflict-of-interest',
            description:
              "Shena Lee Korn was simultaneously: (1) the association's listing agent for Parcel #301-05-218, " +
              'and (2) the listing agent for the storage yard property being sold by her client. ' +
              'The association learned it might lose its equipment storage from the same realtor ' +
              "it was relying on to sell its own property. No dual-representation disclosure is noted.",
          },
        ],
      },
    ],
  },
  {
    id: '2021-10-13',
    date: '2021-10-13',
    type: 'special',
    title: 'Special Open Meeting – October 13, 2021 (Storage Yard Purchase)',
    location: 'Via Zoom',
    attendees: {
      boardPresent: [
        'Cindy Seff', 'Bill Sasser', 'Wenona Kay Loving', 'Matt Hickman',
        'Shaun Gardner', 'Wes Drown', 'Rich Moore',
      ],
      boardAbsent: ['Roger Jacks', 'H. Wayne Murphy', 'Denny Hensley'],
      management: 'Veda Jones, CAAM, CMCA — Vision Community Management',
      audienceInPerson: 0,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2021-10-13-d1',
        category: 'property',
        description:
          'Approved submitting a purchase offer for the equipment storage yard (Parcel #301-28-028). ' +
          'Starting offer: $30,000 cash. Authorized up to $35,000. Wes Drown authorized to negotiate, ' +
          'including owner-carry financing at up to 6% interest for up to 10 years. ' +
          'If operating funds insufficient, purchase to come from reserves.',
        outcome: 'approved',
        notes:
          'In the same 12-month period, the association: (1) sold Parcel #301-05-218 for $45,000, ' +
          'and (2) purchased Parcel #301-28-028 (storage yard) for up to $35,000. ' +
          'The realtor who sold the storage yard to the association (Shena\'s client) ' +
          'is the same realtor who had been listing the association\'s own parcels.',
        concerns: [
          {
            type: 'budget-concern',
            description:
              'The storage yard purchase of up to $35,000 was authorized from reserves if needed — ' +
              'the same reserves that the president had just recommended shoring up with a 20% ' +
              'assessment increase (which the board declined). The association bought real estate ' +
              'from reserves it was told were underfunded.',
          },
        ],
      },
    ],
  },
  {
    id: '2021-11-20',
    date: '2021-11-20',
    type: 'regular',
    title: 'Open Board Meeting – November 2021',
    location: 'St. Francis Catholic Church Hall, Seligman',
    attendees: {
      boardPresent: [
        'Bill Sasser', 'Cindy Seff', 'Wenona Kay Loving', 'Roger Jacks',
        'Shaun Gardner', 'H. Wayne Murphy', 'Rich Moore',
      ],
      boardAbsent: ['Matt Hickman', 'Denny Hensley'],
      management: 'Veda Jones, CAAM, CMCA — Vision Community Management',
      guests: ["Shena Lee Korn, Russ Lyon Sotheby's International Realty"],
      audienceInPerson: null,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2021-11-20-d1',
        category: 'governance',
        description:
          'Wes Drown resigned from the board. H. Wayne Murphy appointed to fill the vacancy AND ' +
          'immediately appointed as President. Rich Moore appointed as Vice President.',
        outcome: 'approved',
        notes:
          'Wayne Murphy was previously noted in May 2021 as non-voting VP because he was ' +
          'not an elected board member. He is now appointed to fill a vacancy and immediately ' +
          'made President — without a membership vote. He holds the presidency continuously ' +
          'through the 2023–2025 record.',
        concerns: [
          {
            type: 'structural',
            description:
              'H. Wayne Murphy was not an elected board member — he served as a non-voting VP officer. ' +
              'Upon Wes Drown\'s resignation, the remaining board appointed Murphy to fill the vacancy ' +
              'AND immediately made him President, all by internal board vote. ' +
              'No member election was held. Murphy then serves as President for the next several years.',
          },
        ],
      },
      {
        id: '2021-11-20-d2',
        category: 'governance',
        description: 'Reserve Study Proposals: tabled to next meeting.',
        outcome: 'tabled',
        notes:
          'First tabling of the reserve study in this record. ' +
          'It will be tabled once more at this same meeting, then removed from consideration in Jan 2022.',
      },
      {
        id: '2021-11-20-d3',
        category: 'governance',
        description:
          'CC&R Amendment campaign officially launched. ' +
          'Goodman Holmgren approved to draft the amendment and prepare mailing at up to $700. ' +
          'Vote HOA Now approved for e-voting services at up to $2,000.',
        outcome: 'approved',
        notes:
          'THE ORIGIN OF THE CC&R AMENDMENT CAMPAIGNS. ' +
          'The first campaign launches November 2021 with $2,700 in upfront vendor costs. ' +
          'It will run over a year, get two deadline extensions, and fail at 37.99% in March 2023. ' +
          'A second campaign follows (2024), and a third is active in 2025, at ~18% after 6 months. ' +
          'While reserve study proposals sit tabled and unupdated, the amendment campaign budget ' +
          'keeps getting funded.',
        concerns: [
          {
            type: 'budget-concern',
            description:
              'The board approved $2,700 in CC&R amendment campaign costs at the same meeting it ' +
              'tabled the reserve study. The amendment campaign will cost additional money through ' +
              'mailing, deadline extensions, and e-voting renewals — for a measure that ultimately ' +
              'fails at 37.99%. A second and third campaign follow. The cumulative cost of failed ' +
              'supermajority amendment campaigns has never been separately disclosed to landowners.',
          },
        ],
      },
      {
        id: '2021-11-20-d4',
        category: 'property',
        description:
          'Storage yard purchase (Parcel #301-28-028) confirmed completed. ' +
          'Parcel #301-24-312 still on market; price reduction of $2,000 authorized after Dec 1 ' +
          'if not sold by then.',
        outcome: 'noted',
      },
    ],
  },
]

// ── 2021 Pattern Summary ──────────────────────────────────────
export const patterns2021 = {
  managementReviewAbandoned: {
    description:
      'January 2021: Board unanimously voted to send an RFP for management services within 2 weeks. ' +
      "Vision's own rep helped frame the RFP in the same meeting. " +
      'March 2021: Tabled to a special meeting. April 2021: No public minutes. ' +
      'Result: Vision retained. No competitive bids recorded. ' +
      'By January 2023, zero board members wanted to solicit bids. ' +
      'The management review that was unanimously approved in 2021 was quietly buried ' +
      'with no recorded final vote.',
  },
  ballotCustodyOrigin: {
    firstRecordedYear: 2021,
    description:
      "VCM counts election ballots at VCM's office; sole board witness attends via Zoom. " +
      'This process has been in place since at least 2021 — it is not a new problem introduced in 2023.',
  },
  minuteDelegationOrigin: {
    date: '2021-05-15',
    description:
      'Secretary formally delegates minute recording to VCM in May 2021. ' +
      'VCM has been writing the official record of board decisions — including those covering ' +
      "VCM's own fees, collections billing, and contract renewals — since this date.",
  },
  reserveStudyDeclined: {
    tabledDates: ['2021-11-20', '2021-11-20'],
    removedDate: '2022-01-xx',
    description:
      'The board had three decision points to commission an updated reserve study. ' +
      'Each time it declined. The 2017 reserve study ($618K+ infrastructure gap) ' +
      'remains the most recent update through 2025.',
  },
  ccrAmendmentVsReserveStudy: {
    description:
      'At the November 2021 meeting the board simultaneously tabled the reserve study ' +
      'and approved $2,700 to launch the CC&R amendment campaign. ' +
      'The amendment campaign keeps getting funded; the reserve study keeps getting tabled. ' +
      'This priority ordering holds for 4+ years.',
  },
  presidentialContinuity: {
    description:
      'Wayne Murphy: non-voting VP (May 2021) → appointed to fill Drown vacancy + ' +
      'immediately named President (Nov 2021) → serves as President 2022–2025. ' +
      'Never elected by the membership. Appointed by the board he now leads.',
  },
  realEstateAccounting: {
    sold2021: { parcel: '301-05-218', amount: 45000, date: '2021-09' },
    bought2021: { parcel: '301-28-028', amount: 35000, date: '2021-10', source: 'reserves' },
    sold2023: { parcel: '301-24-312', amount: 25000, date: '2023-11' },
    note:
      'Net real estate position roughly breakeven over the period, but the storage yard purchase ' +
      'used reserve funds that Wes Drown had just warned were underfunded.',
  },
  budgetDelay: {
    description:
      '2021: Wes Drown recommended 20% increase; board declined. ' +
      '2022: 20% approved. 2023: 20% approved again. ' +
      'Two consecutive 20% increases following a deferred year — with no reserve study update throughout.',
  },
}

// ── 2020 Meeting Data ──────────────────────────────────────────────────────────
// Source: SVR POA Open Board Meeting Minutes, January–November 2020

export const meetings2020: DetailedMeeting[] = [
  {
    id: '2020-01-18',
    date: '2020-01-18',
    type: 'regular',
    title: 'Board Meeting – January 2020',
    location: 'St. Francis Catholic Church Hall, Seligman',
    attendees: {
      boardPresent: [
        'Robert Gager (President)', 'Roger Jacks (Treasurer)',
        'Wenona Loving (Secretary)', 'Cindy Seff (Road Committee Chair)',
        'George Seff (Wells Committee Chair)', 'Shaun Gardner',
        'Bill Sasser', 'Wes Drown (via telephone)',
      ],
      boardAbsent: ['Scott Hensley (Vice President/Road Manager)'],
      management: "Hart's HOA Management Company",
      audienceInPerson: null,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2020-01-18-d1',
        category: 'operations',
        description:
          "Approved new Roads Policy; placed on website. Road map initiative approved: Hart's HOA " +
          'discovered a full area map and proposed Road Committee use it to track previously worked areas, ' +
          'current work, planned projects, and unworkable areas. W. Drown requested photos of progress ' +
          'at each meeting for historical record.',
        outcome: 'approved',
        notes:
          'This is the earliest documented request for visual road tracking. ' +
          'The same concept resurfaces in 2023 (Webb/TMG digital map) and is the direct ancestor ' +
          'of the platform being built in 2026. The community has asked for a functional road ' +
          'tracking tool since at least January 2020.',
      },
      {
        id: '2020-01-18-d2',
        category: 'financial',
        description:
          'Cannon Law Firm collections update: 46 delinquent accounts with $108,000 in accumulated ' +
          "legal fees negotiated down to $45,000. 8 accounts uncollectable due to foreclosure. " +
          'Board approved settlement plan: POA pays $32,400 for 38 collectable accounts; ' +
          'each member signs agreement making the settlement a lien on their property; ' +
          'interest-free payment plan to repay arrears.',
        outcome: 'approved',
        notes:
          'This is the foundational collections decision. The board chose a settlement/lien model. ' +
          'Vision inherits this delinquency portfolio when they take over in November 2020 — ' +
          'and subsequently expands the collections legal apparatus, with legal-collections ' +
          'spending reaching $52,214 by 2023.',
        concerns: [
          {
            type: 'budget-concern',
            description:
              'The POA accumulated $108,000 in legal fees on delinquency collections before negotiating ' +
              'a settlement. Under Vision, legal-collections costs escalate further: $49,911 (2022) and ' +
              '$52,214 (2023). The incentive structure — collections attorneys paid per account action — ' +
              'drives escalation regardless of recovery rates.',
          },
        ],
      },
      {
        id: '2020-01-18-d3',
        category: 'legal',
        description:
          'ADRE complaint filed by a member after the November 16, 2019 meeting, alleging the POA ' +
          'failed its fiduciary duty regarding roads. Board advised by legal counsel not to discuss ' +
          'details pending the March 23, 2020 hearing. Response cost: just over $10,000 ' +
          '(20-day response deadline). Board approved posting complaint and association response to website.',
        outcome: 'approved',
        notes:
          'Two separate legal fronts running simultaneously in early 2020: (1) the ADRE complaint ' +
          '(roads-related), and (2) the Michelson lawsuit (confirmed July 2020). ' +
          'Combined legal exposure is mounting before the TM judgment that will eventually ' +
          'cost the association ~$298,000.',
      },
      {
        id: '2020-01-18-d4',
        category: 'financial',
        description:
          'Year-end 2019 financials: Total assets $399,435.64 ' +
          '(Operating: $121,510; Reserve: $131,385; Money Market: $146,541). ' +
          'Total revenue: $196,508. Total expenses: $194,416. Net income: $2,093 (breakeven).',
        outcome: 'noted',
        notes:
          'Earliest financial baseline in the record. Reserve account at $131,385 in January 2020. ' +
          'By end of 2023 the reserve is being drawn down to cover operating shortfalls. ' +
          'George Seff is Wells Committee Chair here — organizational relationship with Cindy Seff ' +
          'predates his 2022 paid road mechanic hire by 2+ years.',
      },
    ],
    openQuestionNotes:
      "EARLIEST FINANCIAL BASELINE: Reserve = $131,385 (Jan 2020). Management fee: $1,890/month ($22,680/year) under Hart's HOA.",
  },
  {
    id: '2020-03-14',
    date: '2020-03-14',
    type: 'special',
    title: 'Emergency Telephonic Meeting – March 14, 2020 (COVID / Leadership Vacancies)',
    location: 'Telephonic (COVID-19 restrictions)',
    attendees: {
      boardPresent: [
        'Roger Jacks (Treasurer)', 'Cindy Seff (Road Chair)',
        'George Seff (Wells Chair)', 'Wes Drown', 'Shaun Gardner',
        'Bill Sasser', 'Wayne Murphy (POA Member)',
      ],
      boardAbsent: ['Wenona Loving'],
      management: "Hart's HOA Management Company",
      audienceInPerson: 0,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2020-03-14-d1',
        category: 'governance',
        description:
          'Accepted resignations of President Robert Gager and Vice President/Road Manager Scott Hensley. ' +
          'Wes Drown appointed Interim President. ' +
          'POA member Wayne Murphy (not a board member) appointed as Interim Board Director. ' +
          'Cindy Seff appointed as Road Manager.',
        outcome: 'approved',
        notes:
          "This is the origin of Wayne Murphy's board presence. He was a regular POA member who " +
          'volunteered to serve as an interim director during a COVID-era leadership crisis. ' +
          'He was never elected. From this interim appointment he becomes non-voting VP (May 2021), ' +
          'then appointed President (November 2021), and holds the presidency through 2024. ' +
          'Cindy Seff becomes Road Manager in the same emergency meeting — establishing the ' +
          'Roads VP / Road Manager dual role that later transfers to Kim Pratt.',
        concerns: [
          {
            type: 'structural',
            description:
              'Wayne Murphy joined the board as an emergency interim appointment — not through election. ' +
              'This begins a 4+ year continuous board tenure through internal appointments only, ' +
              'culminating in him becoming and serving as President for years without a membership vote.',
          },
        ],
      },
      {
        id: '2020-03-14-d2',
        category: 'legal',
        description:
          'Authorized providing SVR POA historical records to Rabb & Rabb Law Firm for review ' +
          'and preparation of the ADRE complaint hearing and future legal concerns.',
        outcome: 'approved',
      },
    ],
  },
  {
    id: '2020-04-02',
    date: '2020-04-02',
    type: 'special',
    title: 'Special Telephonic Meeting – April 2, 2020 (Budget Restructure)',
    location: 'Telephonic (COVID-19 restrictions)',
    attendees: {
      boardPresent: [
        'Wes Drown (Interim President)', 'Roger Jacks (Treasurer)',
        'Cindy Seff (Road Chair)', 'George Seff (Wells Chair)',
        'Shaun Gardner', 'Bill Sasser', 'Wayne Murphy (Interim Director)',
      ],
      boardAbsent: ['Wenona Loving'],
      management: "Hart's HOA Management Company",
      audienceInPerson: 0,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2020-04-02-d1',
        category: 'financial',
        description:
          'Emergency budget amendment approved to reinstate Dan Robison as 1099 road contractor ' +
          'with his own equipment, and to use two graders for more coverage. Budget adjustments: ' +
          'Employee Compensation: $43,000 → $78,000 (+$35,000). ' +
          'Equipment Maintenance: $40,000 → $21,000 (-$19,000). ' +
          'Fuel: $16,000 → $8,000 (-$8,000). ' +
          'Reserve Deposit: $20,116 → $12,116 (-$8,000). ' +
          'Emergency culvert repair included in road grading override.',
        outcome: 'approved',
        notes:
          'The Reserve Deposit was cut by $8,000 to fund payroll expansion. ' +
          'This is the earliest documented instance of reserve contributions being reduced to cover ' +
          'operational needs — a pattern that escalates through 2023 when contributions are suspended ' +
          'entirely and a $35,000 emergency draw is taken.',
        concerns: [
          {
            type: 'budget-concern',
            description:
              'Reserve contributions were reduced by $8,000 in an emergency budget amendment to fund ' +
              'road contractor payroll. The reserve fund — already insufficient against the $618K+ ' +
              'infrastructure backlog in the 2017 study — was further underfunded to cover operations. ' +
              'This is the first of several documented instances where reserves are sacrificed for ' +
              'short-term operational needs.',
          },
        ],
      },
    ],
  },
  {
    id: '2020-05-09',
    date: '2020-05-09',
    type: 'special',
    title: 'Special Meeting – May 9, 2020 (Management Contract Amendment + Annual Meeting Planning)',
    location: 'Via Videoconference (COVID-19 restrictions)',
    attendees: {
      boardPresent: [
        'Wes Drown (Interim President)', 'Roger Jacks (Treasurer)',
        'Cindy Seff (Road Chair)', 'George Seff (Wells Chair)',
        'Shaun Gardner', 'Bill Sasser', 'Wayne Murphy (Interim Director)',
        'Wendie M.',
      ],
      boardAbsent: ['Wenona Loving'],
      management: "Hart's HOA Management Company",
      audienceInPerson: 0,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2020-05-09-d1',
        category: 'management',
        description:
          'Management contract amended due to increased workload: ' +
          '(1) Monthly salary increased from $1,890 to $2,000. ' +
          '(2) Hourly clerical/attendance rate increased from $18/hr to $45/hr ' +
          '(applies to research, records inspection, legal proceedings, travel, ' +
          'any task over 20 minutes requiring extra attention, as approved by board). ' +
          '(3) Website update frequency changed from "daily" to "as needed." ' +
          'Motion carried unanimously.',
        outcome: 'approved',
        notes:
          "MANAGEMENT FEE BASELINE ESTABLISHED. Hart's HOA rate: $2,000/month = $24,000/year " +
          'plus $45/hr for "unusual circumstances." Vision Community Management inherited this rate ' +
          "structure when they acquired Hart's contracts in November 2020. Vision's 2022 rate was " +
          '$23,400/year ($1,950/month) — slightly less than Hart\'s. By 2025 the AZ Community First ' +
          'contract is $27,675/year in base fees, with the true ecosystem cost reaching $141,050 ' +
          '(48% of all assessments). The $45/hr attendance rate for legal proceedings is notable: ' +
          'as legal activity escalated, this billable rate created an additional incentive for ' +
          'management to participate in legal matters.',
        concerns: [
          {
            type: 'conflict-of-interest',
            description:
              'The management contract\'s $45/hr "unusual circumstances" rate — explicitly covering ' +
              'legal proceedings and records inspection — means the management company earns additional ' +
              'hourly revenue when the association is involved in legal matters. As collections litigation ' +
              'and the TM lawsuit expand through 2020–2023, management\'s legal-adjacent billing grows ' +
              'alongside legal costs. This creates a structural incentive for management involvement ' +
              'in legal escalation.',
          },
        ],
      },
      {
        id: '2020-05-09-d2',
        category: 'elections',
        description:
          'Annual Meeting scheduled for July 18, 2020 at Seligman Unified School District. ' +
          'Roger Jacks appointed Election Committee Chair. ' +
          'Preliminary ballot counting scheduled July 11, 2020 at Seligman Public Library.',
        outcome: 'approved',
        notes:
          'Roger Jacks as Election Committee Chair and the library ballot counting arrangement ' +
          'continue through subsequent years. The ballot custody concern (management counting ballots) ' +
          'is not yet present in 2020 — physical counting location is the public library.',
      },
    ],
    openQuestionNotes:
      "MANAGEMENT FEE ORIGIN CONFIRMED. Hart's HOA rate: $2,000/month + $45/hr for legal/special tasks. " +
      "Vision inherited this rate and charged $23,400/year ($1,950/month) in 2022 — actually less than Hart's. " +
      'The management fee itself is not the primary cost driver; the ecosystem around it is.',
  },
  {
    id: '2020-07-18',
    date: '2020-07-18',
    type: 'annual',
    title: 'Annual Meeting + Board Meeting – July 2020',
    location: 'Seligman (Annual Meeting)',
    attendees: {
      boardPresent: [
        'Wes Drown', 'Roger Jacks', 'Cindy Seff', 'Winona Loving',
        'Shaun Gardner', 'Bill Sasser', 'Matt Hickman', 'Tim Michelson',
        'Denny Hensley',
      ],
      boardAbsent: [],
      management: "Hart's HOA Management Company",
      guests: [
        'Lloyd Rabb, Rabb & Rabb Law Firm',
        'Arizona Rangers Sgt. Bates and Sgt. Mgr. Baxter',
      ],
      audienceInPerson: 36,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2020-07-18-d1',
        category: 'governance',
        description:
          'Officer appointments: Wes Drown (President, 6-3 vote over Matt Hickman), ' +
          'Wayne Murphy (Vice President, unanimous), Roger Jacks (Treasurer, unanimous), ' +
          'Caroline Hart (Secretary, unanimous), Cindy Seff (VP/Chair Roads, unanimous), ' +
          'Shaun Gardner (VP/Chair Wells, unanimous).',
        outcome: 'approved',
        notes:
          'The 6-3 contested vote for President is notable — Matt Hickman and Denny Hensley/Tim Michelson ' +
          'formed a minority bloc. This internal board tension is the backdrop for the Michelson lawsuit. ' +
          'Arizona Rangers were present — suggesting security concerns at this particular meeting.',
        concerns: [
          {
            type: 'structural',
            description:
              'Tim Michelson, who has an active lawsuit pending against the POA, is a voting board member ' +
              'and participated in officer elections. The board that he is suing also voted on his ' +
              'continued participation and conduct. This dual status — board member and active plaintiff — ' +
              'creates an irresolvable structural conflict that the board noted but could not resolve.',
          },
        ],
      },
      {
        id: '2020-07-18-d2',
        category: 'legal',
        description:
          'Legal counsel Lloyd Rabb updated the board on two active legal matters: ' +
          '(1) Lawsuit by Mr. and Mrs. T. Michelson against the POA (road maintenance and board actions). ' +
          '(2) POA suit against owner for easement/roadway blockage compliance. ' +
          'Approved providing all 27 boxes of SVR POA archive files to Rabb & Rabb for Michelson lawsuit ' +
          'research at a $5,000 budget. (Passed 7-2; Michelson and Drown abstained.)',
        outcome: 'approved',
        notes:
          'TM LAWSUIT ORIGIN CONFIRMED: Tim Michelson and his wife filed the lawsuit against the POA. ' +
          'Michelson was a sitting board member at the time of filing. ' +
          'September 2020 snapshot: Michelson case at $30,192.82; easement case at $29,345.59. ' +
          'The Michelson case will ultimately cost the association ~$298,000 total ' +
          '(legal fees + $128,927 judgment + appeal costs). ' +
          'The $5,000 archive research budget is the first direct legal cost in the minutes.',
        concerns: [
          {
            type: 'conflict-of-interest',
            description:
              'Tim Michelson was a sitting board member with an active lawsuit against the association ' +
              'he served on. He voted on board matters while litigating against the same POA. ' +
              'He abstained from the vote to fund archive research for the defense against his own lawsuit, ' +
              'but his continued board presence created ongoing conflicts in every board decision.',
          },
        ],
      },
      {
        id: '2020-07-18-d3',
        category: 'employment',
        description:
          'Reinstated former road employee J. Robison. ' +
          'Approved initial drug testing kit purchase ($229.30 for 20 kits) and employee random testing program.',
        outcome: 'approved',
        notes: 'J. Robison is a recurring road crew member across multiple years in the record.',
      },
      {
        id: '2020-07-18-d4',
        category: 'operations',
        description:
          'Approved new Bluetooth lock system for wells with individual member codes at $1,000 budget.',
        outcome: 'approved',
        notes:
          'The Bluetooth well access system has a multi-year implementation history: ' +
          'approved in concept July 2020, still being installed through 2022.',
      },
      {
        id: '2020-07-18-d5',
        category: 'technology',
        description:
          'Formed committee to research a new website with more member access and options. ' +
          'Approved posting all public lawsuit information to the POA website.',
        outcome: 'approved',
        notes:
          'Third documented instance of the community seeking a better digital platform ' +
          '(after the Jan 2020 road map initiative). This website committee never produced a ' +
          'modern platform; the community is still seeking the same thing in 2026.',
      },
    ],
  },
  {
    id: '2020-09-19',
    date: '2020-09-19',
    type: 'regular',
    title: 'Board Meeting – September 2020',
    location: 'Seligman (in-person)',
    attendees: {
      boardPresent: [
        'Wes Drown (President)', 'Roger Jacks (Treasurer)',
        'Shaun Gardner', 'Denny Hensley', 'Matt Hickman',
        'Tim Michelson', 'Bill Sasser', 'Cindy Seff',
        'Wayne Murphy (Vice President)',
      ],
      boardAbsent: ['Wenona Kay Loving'],
      management: "Caroline Hart (Secretary/POA Manager), Ken Hart (POA Manager) — Hart's HOA",
      guests: ['Lloyd Rabb, Rabb & Rabb Law Firm'],
      audienceInPerson: 23,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2020-09-19-d1',
        category: 'financial',
        description:
          '2021 budget approved without amendments. ' +
          'Outstanding dues: $65,199.33. Cannon Law accounts still outstanding: $52,792.29.',
        outcome: 'approved',
        notes:
          "Wes Drown proposed a 15% dues increase separately (see d2). The budget passed without any " +
          'increase. The collections situation ($52,792 still at Cannon) has not improved substantially ' +
          'since the January 2020 settlement plan.',
      },
      {
        id: '2020-09-19-d2',
        category: 'financial',
        description: 'Wes Drown moved to increase dues by 15% annually. Motion failed — no board member seconded it.',
        outcome: 'failed',
        notes:
          'EARLIEST DUES INCREASE ATTEMPT: Failed for lack of a second in September 2020. ' +
          'Drown will attempt again in September 2021 (voted down). ' +
          'Back-to-back 20% increases will finally be approved silently in September 2022 and 2023. ' +
          'The board resisted increases for two years while legal costs accumulated, ' +
          'then approved two consecutive 20% hikes with no recorded discussion.',
        concerns: [
          {
            type: 'budget-concern',
            description:
              'A dues increase proposed to address reserve underfunding and legal costs failed for ' +
              'lack of support in September 2020, and was voted down again in 2021. ' +
              'Two consecutive 20% increases were then approved without discussion in 2022 and 2023. ' +
              'The delay means two years of deferred reserve contributions followed by a steeper ' +
              'cumulative burden — against a reserve fund that never caught up to its $618,000+ obligation.',
          },
        ],
      },
      {
        id: '2020-09-19-d3',
        category: 'legal',
        description:
          'Legal cost update from floor: Easement compliance case: $29,345.59. Michelson case: $30,192.82. ' +
          'Member requested board remove Tim Michelson for cause. ' +
          'Legal counsel Ken Hart explained the ARS 33-1813 removal procedure — no action taken.',
        outcome: 'no-action',
        notes:
          'By this point the Michelson lawsuit has cost $30,193. It will eventually cost ~$298,000 total. ' +
          "A member formally requested Michelson's removal; the board took no action. " +
          'Michelson remained on the board and continued to participate in votes.',
        concerns: [
          {
            type: 'structural',
            description:
              'A member formally raised the removal of a board member who was actively suing the association. ' +
              'The board declined to act. Michelson remained a voting board member through November 2020, ' +
              'participating in budget approvals, officer elections, and governance decisions while his ' +
              'lawsuit was pending. The final judgment cost $128,927.',
          },
        ],
      },
      {
        id: '2020-09-19-d4',
        category: 'governance',
        description:
          'Approved posting tentative meeting agenda to website two weeks in advance (final amendments ' +
          'no later than 7 days prior). Passed 5-3: Yeas: Drown, Michelson, Sasser, Hensley, Hickman. ' +
          'Nays: Jacks, Seff, Gardner.',
        outcome: 'approved',
        notes:
          'Agenda transparency measure passed over three nays — including Roger Jacks and Cindy Seff, ' +
          'both long-serving members who will remain on the board through 2024.',
      },
      {
        id: '2020-09-19-d5',
        category: 'governance',
        description:
          'Motion to draft bylaw language requiring formal hearing and arbitration before any member ' +
          'can sue the association. Passed 7-1 (Michelson voted against). ' +
          '$500 reward approved for conviction of anyone who vandalizes SVR POA equipment.',
        outcome: 'approved',
        notes:
          'The board passed an anti-lawsuit bylaw amendment while the Michelson lawsuit was active. ' +
          'Michelson voted against. The board used the active lawsuit as justification for a ' +
          'procedural barrier to future litigation.',
      },
    ],
  },
  {
    id: '2020-11-21',
    date: '2020-11-21',
    type: 'regular',
    title: 'Board Meeting – November 2020 (Vision Management Takeover)',
    location: 'Seligman',
    attendees: {
      boardPresent: [
        'Roger Jacks (Treasurer)', 'Denny Hensley', 'Shaun Gardner',
        'Matt Hickman', 'Tim Michelson', 'Bill Sasser', 'Cindy Seff',
        'Wayne Murphy (Vice President)',
      ],
      boardAbsent: ['Wes Drown (President)', 'Wenona Kay Loving'],
      management: "Caroline Hart, Ken Hart (Hart's HOA); Veda Jones, Darren Fisher (Vision Community Management)",
      audienceInPerson: 9,
      audienceZoom: null,
    },
    decisions: [
      {
        id: '2020-11-21-d1',
        category: 'management',
        description:
          "Hart's HOA Management sold all POA contracts to Vision Community Management, effective immediately. " +
          "Reason: Ken Hart's accident and resulting back injury. " +
          'Board approved the management transfer from Hart\'s to Vision. ' +
          'Vision noted capabilities: online payments, enhanced website, forensic accountant owner (Darren Fisher), ' +
          '3 locations (Phoenix, Flagstaff, Show Low).',
        outcome: 'approved',
        notes:
          "VISION'S ORIGIN: Vision Community Management did not win a competitive bid for the SVR POA contract. " +
          "They acquired it when Hart's sold their client book due to a health crisis. " +
          'The same Veda Jones who manages SVR in 2025 under AZ Community First was present at the ' +
          'November 2020 handoff meeting as the incoming Vision manager. ' +
          'The board voted unanimously to transfer — no RFP, no alternatives considered, no competitive process. ' +
          'The vendor relationship that now costs $141,050/year in management ecosystem costs entered ' +
          'without competition in November 2020.',
        concerns: [
          {
            type: 'accountability-gap',
            description:
              "The management company that represents the association's largest operational cost was never " +
              "competitively selected. Hart's HOA sold the contract to Vision without the board having any " +
              'say in the selection. The board approved the transfer unanimously without soliciting alternatives. ' +
              'The January 2021 RFP attempt was the first and only time the board tried to competitively ' +
              'evaluate management — and it was abandoned. Vision (and its successor AZ Community First, ' +
              'same manager) has operated without competitive renewal ever since.',
          },
        ],
      },
      {
        id: '2020-11-21-d2',
        category: 'financial',
        description:
          'Approved $6,500 from savings to repair the blade. ' +
          'Approved $1,600 to repair the computer on the blade. ' +
          'Approved new service truck purchase up to $18,000 (from savings; old truck to be sold, ' +
          'proceeds returned to savings). ' +
          'Approved selling the SVR Toyota (proceeds to savings). ' +
          'Approved $8,000 from savings for immediate blade repairs.',
        outcome: 'approved',
        notes:
          'Multiple simultaneous equipment expenditures totaling $16,100+ from reserves in a single meeting, ' +
          'during the management company transition. ' +
          'The road equipment is in poor condition: blade needs engine and computer repairs simultaneously. ' +
          'The same blade will require a $63,217 RDO repair in October 2022.',
        concerns: [
          {
            type: 'budget-concern',
            description:
              'Multiple equipment expenditures totaling $16,100+ drawn from reserves in a single meeting. ' +
              'The reserve fund that was $131,385 in January 2020 is being steadily consumed by ' +
              'equipment failures and legal costs with no updated reserve study to guide replenishment.',
          },
        ],
      },
      {
        id: '2020-11-21-d3',
        category: 'financial',
        description:
          'Authorized Vision to obtain CPA audit quotes; to be discussed at January 2021 meeting. ' +
          'Estimated cost: $7,000–$10,000. Recommended as this is a transition year.',
        outcome: 'approved',
        notes:
          'Vision recommending a financial audit in the same meeting they take over management. ' +
          'They will steer the board toward a specific CPA firm at the January 2021 meeting.',
      },
      {
        id: '2020-11-21-d4',
        category: 'governance',
        description:
          'Approved video and/or audio recording of board meetings by the Secretary for posting to website. ' +
          "Passed 6-1; Denny Hensley opposed.",
        outcome: 'approved',
        notes:
          "Transparency measure approved over Hensley's objection. " +
          'The recording policy will later evolve into the Zoom participation format.',
      },
      {
        id: '2020-11-21-d5',
        category: 'governance',
        description:
          'Tim Michelson attempted to raise concerns about board election legality and accounting practices. ' +
          'Wayne Murphy immediately stopped discussion citing the active lawsuit. ' +
          'Vision Management also intervened, citing no legal counsel present. ' +
          'Michelson left the meeting before adjournment.',
        outcome: 'no-action',
        notes:
          "The board used the active Michelson lawsuit as justification to silence Michelson's " +
          'governance concerns — concerns about election validity and accounting practices. ' +
          'The concerns were not addressed on their merits.',
        concerns: [
          {
            type: 'structural',
            description:
              "A board member's attempt to raise governance concerns — election validity and accounting " +
              'practices — was cut off by citing his own active lawsuit as the reason he could not speak. ' +
              'The concerns were not addressed on their merits. This appears to have been used to foreclose ' +
              'any governance critique from a dissenting board member.',
          },
        ],
      },
    ],
  },
]

// ── 2020 Pattern Summary ──────────────────────────────────────
export const patterns2020 = {
  visionOrigin: {
    date: '2020-11-21',
    description:
      "Vision Community Management acquired the SVR POA contract when Hart's HOA sold its client book " +
      "due to Ken Hart's injury. No competitive selection. No RFP. Board approved unanimously. " +
      'The same manager (Veda Jones) and the same structural arrangement continues under ' +
      "AZ Community First in 2025 — 5 years after Vision's non-competitive entry.",
  },
  managementFeeBaseline: {
    company: "Hart's HOA",
    monthlyRate: 2000,
    annualRate: 24000,
    hourlySpecialRate: 45,
    date: '2020-05-09',
    note:
      "Hart's HOA rate established May 2020: $2,000/month + $45/hr for legal/special tasks. " +
      'Vision entered at $23,400/year ($1,950/month) — slightly less. ' +
      'By 2025 the base fee is $27,675/year, but the true ecosystem cost is $141,050.',
  },
  duesIncreaseTimeline: {
    description:
      'Sep 2020: 15% increase proposed by Wes Drown — failed, no second. ' +
      'Sep 2021: 20% increase recommended by Drown — voted down. ' +
      'Sep 2022: 20% increase approved — no discussion recorded. ' +
      'Sep 2023: 20% increase approved — no discussion recorded. ' +
      'Two years of resistance, then two consecutive 20% hikes passed in silence.',
  },
  michelsonConflict: {
    description:
      'Tim Michelson filed suit against the POA while serving as a voting board member. ' +
      'He participated in officer elections, budget votes, and governance decisions ' +
      'while the lawsuit (ultimately costing ~$298,000) was pending. ' +
      'His governance concerns were silenced by citing his own lawsuit. ' +
      'He was automatically removed for non-attendance in September 2021 — not for the lawsuit.',
  },
  trackingPlatformHistory: {
    firstRequest: '2020-01-18',
    description:
      "January 2020: Hart's HOA proposed using an area map for road tracking. " +
      'July 2020: Website committee formed to research a new platform — never completed. ' +
      'May 2023: John Webb presented digital road/well tracking concept. ' +
      'September 2023: $5,000 TMG contract approved — limited implementation. ' +
      '2026: The self-management platform addresses what the community asked for in January 2020. ' +
      'The need has been documented for 6+ years.',
  },
  reserveErosionOrigin: {
    jan2020Balance: 131385,
    description:
      'Reserve at $131,385 in January 2020. ' +
      'April 2020: Reserve deposit reduced $8,000 to fund payroll. ' +
      'November 2020: $16,100+ drawn for equipment. ' +
      'October 2021: $35,000 used to purchase storage yard. ' +
      'October 2022: $23,217 drawn for blade repair. ' +
      'September 2023: Reserve contributions suspended. ' +
      'November 2023: $35,000 drawn to cover operating shortfall. ' +
      'The reserve fund has been consumed for operations and equipment for 4+ years ' +
      'against a $618,000+ capital obligation that has never been formally reassessed.',
  },
}
