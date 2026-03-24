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
