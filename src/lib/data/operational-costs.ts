// =============================================================================
// MyEval.ai — Exhaustive Operational Cost Breakdown for International Expansion
// Two traveling directors visiting all 8 countries together (as a pair)
// All figures in USD unless otherwise noted
// =============================================================================

// ---------------------------------------------------------------------------
// SECTION 1: TRAVEL COSTS — ITEMIZED BY COUNTRY
// ---------------------------------------------------------------------------

export interface FlightRoute {
  route: string;
  carrier: string;
  classOfService: string;
  oneWayPrice: number;
  roundTripPrice: number;
  frequencyPerYear: number;
  annualCostPer2: number;
}

export interface HotelRecommendation {
  name: string;
  city: string;
  nightlyRate: number;
  stayDaysPerVisit: number;
  visitsPerYear: number;
  annualCostPer2: number;
}

export interface PerDiem {
  city: string;
  usDeptStateMeals: number;
  incidentals: number;
  totalDaily: number;
  daysPerVisit: number;
  visitsPerYear: number;
  annualCostPer2: number;
}

export interface GroundTransport {
  airportTransferOneWay: number;
  dailyCarService: number;
  daysPerVisit: number;
  visitsPerYear: number;
  annualCostPer2: number;
}

export interface MeetingEntertainment {
  clientDinnerCost: number;
  dinnersPerVisit: number;
  conferenceFeePerEvent: number;
  conferencesPerYear: number;
  boothCostPerEvent: number;
  boothEventsPerYear: number;
  giftHospitalityPerVisit: number;
  govMeetingPrepPerVisit: number;
  annualTotal: number;
}

export interface VisaImmigration {
  visaRequired: boolean;
  visaType: string;
  visaCostPerPerson: number;
  processingTime: string;
  multipleEntryOption: string;
  multipleEntryCost: number;
  workPermitNeeded: boolean;
  workPermitCost: number;
  annualCostPer2: number;
  notes: string;
}

export interface CountryTravelCosts {
  country: string;
  capital: string;
  flights: FlightRoute[];
  hotels: HotelRecommendation[];
  perDiem: PerDiem;
  groundTransport: GroundTransport;
  meetingEntertainment: MeetingEntertainment;
  visa: VisaImmigration;
  countryTravelTotal: number;
}

export const travelCosts: CountryTravelCosts[] = [
  // =========================================================================
  // VIETNAM
  // =========================================================================
  {
    country: "Vietnam",
    capital: "Hanoi (gov) / Ho Chi Minh City (ops)",
    flights: [
      {
        route: "NYC (JFK) -> Hanoi (HAN) round-trip",
        carrier: "Vietnam Airlines / ANA via Tokyo",
        classOfService: "Business",
        oneWayPrice: 2_800,
        roundTripPrice: 5_200,
        frequencyPerYear: 7,
        annualCostPer2: 72_800,
      },
      {
        route: "Intra-regional: Bangkok (BKK) -> Hanoi (HAN)",
        carrier: "Vietnam Airlines / Thai Airways",
        classOfService: "Business",
        oneWayPrice: 350,
        roundTripPrice: 650,
        frequencyPerYear: 4,
        annualCostPer2: 5_200,
      },
      {
        route: "Domestic: Hanoi (HAN) -> HCMC (SGN)",
        carrier: "Vietnam Airlines",
        classOfService: "Business",
        oneWayPrice: 150,
        roundTripPrice: 280,
        frequencyPerYear: 7,
        annualCostPer2: 3_920,
      },
    ],
    hotels: [
      {
        name: "Lotte Hotel Hanoi",
        city: "Hanoi",
        nightlyRate: 180,
        stayDaysPerVisit: 3,
        visitsPerYear: 7,
        annualCostPer2: 7_560,
      },
      {
        name: "Hotel Nikko Saigon (District 1)",
        city: "Ho Chi Minh City",
        nightlyRate: 160,
        stayDaysPerVisit: 3,
        visitsPerYear: 7,
        annualCostPer2: 6_720,
      },
    ],
    perDiem: {
      city: "Hanoi / HCMC",
      usDeptStateMeals: 98,
      incidentals: 27,
      totalDaily: 125,
      daysPerVisit: 6,
      visitsPerYear: 7,
      annualCostPer2: 10_500,
    },
    groundTransport: {
      airportTransferOneWay: 25,
      dailyCarService: 80,
      daysPerVisit: 6,
      visitsPerYear: 7,
      annualCostPer2: 7_700,
    },
    meetingEntertainment: {
      clientDinnerCost: 250,
      dinnersPerVisit: 2,
      conferenceFeePerEvent: 800,
      conferencesPerYear: 3,
      boothCostPerEvent: 5_000,
      boothEventsPerYear: 2,
      giftHospitalityPerVisit: 200,
      govMeetingPrepPerVisit: 500,
      annualTotal: 22_300,
    },
    visa: {
      visaRequired: true,
      visaType: "E-visa (single/multiple entry)",
      visaCostPerPerson: 25,
      processingTime: "3 business days",
      multipleEntryOption: "Multiple-entry e-visa (90 days)",
      multipleEntryCost: 50,
      workPermitNeeded: false,
      workPermitCost: 0,
      annualCostPer2: 700,
      notes: "US citizens eligible for e-visa. Apply online at evisa.xuatnhapcanh.gov.vn. 90-day multiple entry available. No work permit needed for business meetings under 90-day stays.",
    },
    countryTravelTotal: 137_400,
  },

  // =========================================================================
  // INDIA
  // =========================================================================
  {
    country: "India",
    capital: "New Delhi (gov) / Bangalore (ops)",
    flights: [
      {
        route: "NYC (JFK) -> Delhi (DEL) round-trip",
        carrier: "Air India / Emirates via Dubai",
        classOfService: "Business",
        oneWayPrice: 2_600,
        roundTripPrice: 4_800,
        frequencyPerYear: 7,
        annualCostPer2: 67_200,
      },
      {
        route: "Domestic: Delhi (DEL) -> Bangalore (BLR)",
        carrier: "Air India / Vistara",
        classOfService: "Business",
        oneWayPrice: 180,
        roundTripPrice: 320,
        frequencyPerYear: 7,
        annualCostPer2: 4_480,
      },
      {
        route: "Intra-regional: Bangkok (BKK) -> Delhi (DEL)",
        carrier: "Thai Airways / Air India",
        classOfService: "Business",
        oneWayPrice: 450,
        roundTripPrice: 800,
        frequencyPerYear: 3,
        annualCostPer2: 4_800,
      },
    ],
    hotels: [
      {
        name: "The Leela Palace New Delhi",
        city: "New Delhi",
        nightlyRate: 220,
        stayDaysPerVisit: 3,
        visitsPerYear: 7,
        annualCostPer2: 9_240,
      },
      {
        name: "ITC Gardenia Bangalore",
        city: "Bangalore",
        nightlyRate: 170,
        stayDaysPerVisit: 3,
        visitsPerYear: 7,
        annualCostPer2: 7_140,
      },
    ],
    perDiem: {
      city: "New Delhi / Bangalore",
      usDeptStateMeals: 88,
      incidentals: 24,
      totalDaily: 112,
      daysPerVisit: 6,
      visitsPerYear: 7,
      annualCostPer2: 9_408,
    },
    groundTransport: {
      airportTransferOneWay: 30,
      dailyCarService: 70,
      daysPerVisit: 6,
      visitsPerYear: 7,
      annualCostPer2: 6_720,
    },
    meetingEntertainment: {
      clientDinnerCost: 200,
      dinnersPerVisit: 3,
      conferenceFeePerEvent: 1_200,
      conferencesPerYear: 4,
      boothCostPerEvent: 6_000,
      boothEventsPerYear: 2,
      giftHospitalityPerVisit: 150,
      govMeetingPrepPerVisit: 400,
      annualTotal: 25_650,
    },
    visa: {
      visaRequired: true,
      visaType: "e-Business Visa (1-year multiple entry)",
      visaCostPerPerson: 82,
      processingTime: "3-5 business days",
      multipleEntryOption: "1-year multiple entry e-Business visa",
      multipleEntryCost: 82,
      workPermitNeeded: false,
      workPermitCost: 0,
      annualCostPer2: 328,
      notes: "US citizens get 1-year multiple-entry e-visa. Apply at indianvisaonline.gov.in. Business visa sufficient for meetings, conferences, establishing business contacts. No work permit for short visits.",
    },
    countryTravelTotal: 134_966,
  },

  // =========================================================================
  // BANGLADESH
  // =========================================================================
  {
    country: "Bangladesh",
    capital: "Dhaka",
    flights: [
      {
        route: "NYC (JFK) -> Dhaka (DAC) round-trip",
        carrier: "Emirates via Dubai / Qatar via Doha",
        classOfService: "Business",
        oneWayPrice: 2_700,
        roundTripPrice: 5_000,
        frequencyPerYear: 7,
        annualCostPer2: 70_000,
      },
      {
        route: "Intra-regional: Delhi (DEL) -> Dhaka (DAC)",
        carrier: "IndiGo / Biman Bangladesh",
        classOfService: "Business",
        oneWayPrice: 250,
        roundTripPrice: 450,
        frequencyPerYear: 3,
        annualCostPer2: 2_700,
      },
    ],
    hotels: [
      {
        name: "Le Meridien Dhaka",
        city: "Dhaka",
        nightlyRate: 150,
        stayDaysPerVisit: 5,
        visitsPerYear: 7,
        annualCostPer2: 10_500,
      },
    ],
    perDiem: {
      city: "Dhaka",
      usDeptStateMeals: 73,
      incidentals: 22,
      totalDaily: 95,
      daysPerVisit: 5,
      visitsPerYear: 7,
      annualCostPer2: 6_650,
    },
    groundTransport: {
      airportTransferOneWay: 20,
      dailyCarService: 50,
      daysPerVisit: 5,
      visitsPerYear: 7,
      annualCostPer2: 4_060,
    },
    meetingEntertainment: {
      clientDinnerCost: 120,
      dinnersPerVisit: 2,
      conferenceFeePerEvent: 500,
      conferencesPerYear: 2,
      boothCostPerEvent: 3_000,
      boothEventsPerYear: 1,
      giftHospitalityPerVisit: 100,
      govMeetingPrepPerVisit: 300,
      annualTotal: 9_480,
    },
    visa: {
      visaRequired: true,
      visaType: "Business visa (multiple entry)",
      visaCostPerPerson: 160,
      processingTime: "5-7 business days",
      multipleEntryOption: "1-year multiple entry business visa",
      multipleEntryCost: 160,
      workPermitNeeded: false,
      workPermitCost: 0,
      annualCostPer2: 640,
      notes: "Apply at Bangladesh embassy/consulate. Visa on arrival available but unreliable. Recommend securing 1-year multiple entry business visa before travel. Invitation letter from local partner recommended.",
    },
    countryTravelTotal: 104_030,
  },

  // =========================================================================
  // THAILAND
  // =========================================================================
  {
    country: "Thailand",
    capital: "Bangkok",
    flights: [
      {
        route: "NYC (JFK) -> Bangkok (BKK) round-trip",
        carrier: "Thai Airways / ANA via Tokyo",
        classOfService: "Business",
        oneWayPrice: 2_900,
        roundTripPrice: 5_400,
        frequencyPerYear: 7,
        annualCostPer2: 75_600,
      },
      {
        route: "Intra-regional: Hanoi (HAN) -> Bangkok (BKK)",
        carrier: "Thai Airways / VietJet",
        classOfService: "Business",
        oneWayPrice: 300,
        roundTripPrice: 550,
        frequencyPerYear: 3,
        annualCostPer2: 3_300,
      },
    ],
    hotels: [
      {
        name: "Marriott Marquis Queen's Park Bangkok",
        city: "Bangkok",
        nightlyRate: 190,
        stayDaysPerVisit: 5,
        visitsPerYear: 7,
        annualCostPer2: 13_300,
      },
    ],
    perDiem: {
      city: "Bangkok",
      usDeptStateMeals: 100,
      incidentals: 28,
      totalDaily: 128,
      daysPerVisit: 5,
      visitsPerYear: 7,
      annualCostPer2: 8_960,
    },
    groundTransport: {
      airportTransferOneWay: 20,
      dailyCarService: 70,
      daysPerVisit: 5,
      visitsPerYear: 7,
      annualCostPer2: 5_460,
    },
    meetingEntertainment: {
      clientDinnerCost: 300,
      dinnersPerVisit: 2,
      conferenceFeePerEvent: 1_000,
      conferencesPerYear: 3,
      boothCostPerEvent: 5_500,
      boothEventsPerYear: 2,
      giftHospitalityPerVisit: 200,
      govMeetingPrepPerVisit: 400,
      annualTotal: 23_200,
    },
    visa: {
      visaRequired: false,
      visaType: "Visa exemption (30 days per entry)",
      visaCostPerPerson: 0,
      processingTime: "N/A -- stamp on arrival",
      multipleEntryOption: "METV (Multiple Entry Tourist Visa) or Non-Immigrant B visa for business",
      multipleEntryCost: 200,
      workPermitNeeded: false,
      workPermitCost: 0,
      annualCostPer2: 800,
      notes: "US citizens get 30-day visa exemption on arrival. For stays over 30 days or formal business activities, apply for Non-Immigrant B visa ($200). BOI-promoted companies get expedited work permits if needed later.",
    },
    countryTravelTotal: 130_620,
  },

  // =========================================================================
  // COLOMBIA
  // =========================================================================
  {
    country: "Colombia",
    capital: "Bogota",
    flights: [
      {
        route: "Miami (MIA) -> Bogota (BOG) round-trip",
        carrier: "Avianca / LATAM",
        classOfService: "Business",
        oneWayPrice: 1_200,
        roundTripPrice: 2_200,
        frequencyPerYear: 8,
        annualCostPer2: 35_200,
      },
      {
        route: "Intra-regional: Bogota (BOG) -> Sao Paulo (GRU)",
        carrier: "Avianca / LATAM",
        classOfService: "Business",
        oneWayPrice: 800,
        roundTripPrice: 1_400,
        frequencyPerYear: 3,
        annualCostPer2: 8_400,
      },
    ],
    hotels: [
      {
        name: "JW Marriott Hotel Bogota",
        city: "Bogota",
        nightlyRate: 200,
        stayDaysPerVisit: 5,
        visitsPerYear: 8,
        annualCostPer2: 16_000,
      },
    ],
    perDiem: {
      city: "Bogota",
      usDeptStateMeals: 82,
      incidentals: 23,
      totalDaily: 105,
      daysPerVisit: 5,
      visitsPerYear: 8,
      annualCostPer2: 8_400,
    },
    groundTransport: {
      airportTransferOneWay: 20,
      dailyCarService: 60,
      daysPerVisit: 5,
      visitsPerYear: 8,
      annualCostPer2: 5_440,
    },
    meetingEntertainment: {
      clientDinnerCost: 280,
      dinnersPerVisit: 2,
      conferenceFeePerEvent: 800,
      conferencesPerYear: 3,
      boothCostPerEvent: 4_500,
      boothEventsPerYear: 2,
      giftHospitalityPerVisit: 150,
      govMeetingPrepPerVisit: 400,
      annualTotal: 20_280,
    },
    visa: {
      visaRequired: false,
      visaType: "Visa exemption (90 days per entry)",
      visaCostPerPerson: 0,
      processingTime: "N/A -- stamp on arrival",
      multipleEntryOption: "90 days visa-free, extendable to 180 days/year",
      multipleEntryCost: 0,
      workPermitNeeded: false,
      workPermitCost: 0,
      annualCostPer2: 0,
      notes: "US citizens enter visa-free for up to 90 days, extendable. No visa cost. For permanent business presence, Migrant visa (Tipo M) available at $230 but not required for director visits.",
    },
    countryTravelTotal: 93_720,
  },

  // =========================================================================
  // BRAZIL
  // =========================================================================
  {
    country: "Brazil",
    capital: "Sao Paulo (ops) / Brasilia (gov)",
    flights: [
      {
        route: "Miami (MIA) -> Sao Paulo (GRU) round-trip",
        carrier: "LATAM / American Airlines",
        classOfService: "Business",
        oneWayPrice: 1_800,
        roundTripPrice: 3_400,
        frequencyPerYear: 8,
        annualCostPer2: 54_400,
      },
      {
        route: "Domestic: Sao Paulo (GRU) -> Brasilia (BSB)",
        carrier: "LATAM / Gol",
        classOfService: "Business",
        oneWayPrice: 250,
        roundTripPrice: 450,
        frequencyPerYear: 4,
        annualCostPer2: 3_600,
      },
      {
        route: "Intra-regional: Sao Paulo (GRU) -> Buenos Aires (EZE)",
        carrier: "LATAM / Aerolineas Argentinas",
        classOfService: "Business",
        oneWayPrice: 500,
        roundTripPrice: 900,
        frequencyPerYear: 3,
        annualCostPer2: 5_400,
      },
    ],
    hotels: [
      {
        name: "Renaissance Sao Paulo Hotel (Jardins)",
        city: "Sao Paulo",
        nightlyRate: 220,
        stayDaysPerVisit: 4,
        visitsPerYear: 8,
        annualCostPer2: 14_080,
      },
      {
        name: "Melia Brasilia",
        city: "Brasilia",
        nightlyRate: 160,
        stayDaysPerVisit: 2,
        visitsPerYear: 4,
        annualCostPer2: 2_560,
      },
    ],
    perDiem: {
      city: "Sao Paulo / Brasilia",
      usDeptStateMeals: 105,
      incidentals: 30,
      totalDaily: 135,
      daysPerVisit: 6,
      visitsPerYear: 8,
      annualCostPer2: 12_960,
    },
    groundTransport: {
      airportTransferOneWay: 35,
      dailyCarService: 90,
      daysPerVisit: 6,
      visitsPerYear: 8,
      annualCostPer2: 9_680,
    },
    meetingEntertainment: {
      clientDinnerCost: 400,
      dinnersPerVisit: 2,
      conferenceFeePerEvent: 1_500,
      conferencesPerYear: 3,
      boothCostPerEvent: 7_000,
      boothEventsPerYear: 2,
      giftHospitalityPerVisit: 200,
      govMeetingPrepPerVisit: 500,
      annualTotal: 31_400,
    },
    visa: {
      visaRequired: true,
      visaType: "e-Visa (10-year multiple entry)",
      visaCostPerPerson: 80,
      processingTime: "5-10 business days",
      multipleEntryOption: "10-year multiple entry e-visa, 90 days per entry",
      multipleEntryCost: 80,
      workPermitNeeded: false,
      workPermitCost: 0,
      annualCostPer2: 320,
      notes: "US citizens require e-visa since Oct 2023. Apply at evisa.gov.br. 10-year validity, multiple entry, 90 days per visit. Business activities (meetings, conferences) covered. No work permit for short stays.",
    },
    countryTravelTotal: 134_400,
  },

  // =========================================================================
  // ARGENTINA
  // =========================================================================
  {
    country: "Argentina",
    capital: "Buenos Aires",
    flights: [
      {
        route: "Miami (MIA) -> Buenos Aires (EZE) round-trip",
        carrier: "American Airlines / Aerolineas Argentinas",
        classOfService: "Business",
        oneWayPrice: 1_600,
        roundTripPrice: 3_000,
        frequencyPerYear: 7,
        annualCostPer2: 42_000,
      },
      {
        route: "Intra-regional: Bogota (BOG) -> Buenos Aires (EZE)",
        carrier: "Avianca / LATAM",
        classOfService: "Business",
        oneWayPrice: 700,
        roundTripPrice: 1_200,
        frequencyPerYear: 2,
        annualCostPer2: 4_800,
      },
    ],
    hotels: [
      {
        name: "Alvear Art Hotel (Puerto Madero)",
        city: "Buenos Aires",
        nightlyRate: 180,
        stayDaysPerVisit: 5,
        visitsPerYear: 7,
        annualCostPer2: 12_600,
      },
    ],
    perDiem: {
      city: "Buenos Aires",
      usDeptStateMeals: 92,
      incidentals: 26,
      totalDaily: 118,
      daysPerVisit: 5,
      visitsPerYear: 7,
      annualCostPer2: 8_260,
    },
    groundTransport: {
      airportTransferOneWay: 25,
      dailyCarService: 50,
      daysPerVisit: 5,
      visitsPerYear: 7,
      annualCostPer2: 4_200,
    },
    meetingEntertainment: {
      clientDinnerCost: 220,
      dinnersPerVisit: 2,
      conferenceFeePerEvent: 700,
      conferencesPerYear: 2,
      boothCostPerEvent: 4_000,
      boothEventsPerYear: 1,
      giftHospitalityPerVisit: 150,
      govMeetingPrepPerVisit: 350,
      annualTotal: 13_980,
    },
    visa: {
      visaRequired: false,
      visaType: "Visa exemption (90 days per entry)",
      visaCostPerPerson: 0,
      processingTime: "N/A -- stamp on arrival",
      multipleEntryOption: "90 days visa-free, renewable for additional 90 days",
      multipleEntryCost: 0,
      workPermitNeeded: false,
      workPermitCost: 0,
      annualCostPer2: 0,
      notes: "US citizens enter Argentina visa-free for 90 days, extendable once. No reciprocity fee since 2024. Business meetings and conferences covered. For permanent presence, Temporary Residency visa available.",
    },
    countryTravelTotal: 85_840,
  },

  // =========================================================================
  // BOLIVIA
  // =========================================================================
  {
    country: "Bolivia",
    capital: "La Paz (gov) / Santa Cruz (business)",
    flights: [
      {
        route: "Miami (MIA) -> La Paz (LPB) round-trip via Lima/Bogota",
        carrier: "LATAM via Lima / Avianca via Bogota",
        classOfService: "Business",
        oneWayPrice: 1_400,
        roundTripPrice: 2_600,
        frequencyPerYear: 7,
        annualCostPer2: 36_400,
      },
      {
        route: "Domestic: La Paz (LPB) -> Santa Cruz (VVI)",
        carrier: "Boliviana de Aviacion (BoA)",
        classOfService: "Economy (no business class on domestic)",
        oneWayPrice: 80,
        roundTripPrice: 150,
        frequencyPerYear: 7,
        annualCostPer2: 2_100,
      },
      {
        route: "Intra-regional: Buenos Aires (EZE) -> La Paz (LPB)",
        carrier: "Aerolineas Argentinas / BoA",
        classOfService: "Business",
        oneWayPrice: 350,
        roundTripPrice: 650,
        frequencyPerYear: 2,
        annualCostPer2: 2_600,
      },
    ],
    hotels: [
      {
        name: "Casa Grande Hotel (Zona Sur)",
        city: "La Paz",
        nightlyRate: 120,
        stayDaysPerVisit: 3,
        visitsPerYear: 7,
        annualCostPer2: 5_040,
      },
      {
        name: "Hotel Los Tajibos",
        city: "Santa Cruz",
        nightlyRate: 110,
        stayDaysPerVisit: 2,
        visitsPerYear: 5,
        annualCostPer2: 2_200,
      },
    ],
    perDiem: {
      city: "La Paz / Santa Cruz",
      usDeptStateMeals: 68,
      incidentals: 18,
      totalDaily: 86,
      daysPerVisit: 5,
      visitsPerYear: 7,
      annualCostPer2: 6_020,
    },
    groundTransport: {
      airportTransferOneWay: 15,
      dailyCarService: 40,
      daysPerVisit: 5,
      visitsPerYear: 7,
      annualCostPer2: 3_220,
    },
    meetingEntertainment: {
      clientDinnerCost: 100,
      dinnersPerVisit: 2,
      conferenceFeePerEvent: 300,
      conferencesPerYear: 2,
      boothCostPerEvent: 2_000,
      boothEventsPerYear: 1,
      giftHospitalityPerVisit: 100,
      govMeetingPrepPerVisit: 250,
      annualTotal: 7_650,
    },
    visa: {
      visaRequired: true,
      visaType: "Tourist visa (required for US citizens)",
      visaCostPerPerson: 160,
      processingTime: "3-5 business days at consulate / on arrival",
      multipleEntryOption: "10-year multiple entry tourist visa",
      multipleEntryCost: 160,
      workPermitNeeded: false,
      workPermitCost: 0,
      annualCostPer2: 640,
      notes: "US citizens require visa. Can obtain at border or consulate. 10-year multiple entry available for $160. Business activities covered under tourist visa for short stays. Bolivia does not have a separate business visa category for short visits.",
    },
    countryTravelTotal: 65_870,
  },
];

export const totalAnnualTravelCost = travelCosts.reduce(
  (sum, c) => sum + c.countryTravelTotal,
  0
);

// ---------------------------------------------------------------------------
// SECTION 2: EQUIPMENT & TECHNOLOGY COSTS
// ---------------------------------------------------------------------------

export interface EquipmentItem {
  item: string;
  costPerUnit: number;
  quantity: string;
  annualTotal: number;
  notes: string;
}

export const perEmployeeEquipment: EquipmentItem[] = [
  { item: "MacBook Pro 14\" M4 Pro", costPerUnit: 2_400, quantity: "Per employee", annualTotal: 2_400, notes: "Standard for all employees. 3-year refresh cycle = $800/yr amortized." },
  { item: "External Monitor (LG 27\" 4K)", costPerUnit: 350, quantity: "Office workers only", annualTotal: 350, notes: "For office-based staff. ~120 of 152 employees." },
  { item: "iPhone 15 (company phone)", costPerUnit: 800, quantity: "Key staff (managers + BD)", annualTotal: 800, notes: "~40 key staff (country managers, BD leads, directors)." },
  { item: "Headset (Jabra Evolve2 75)", costPerUnit: 180, quantity: "Per employee", annualTotal: 180, notes: "Video conferencing standard for all remote/hybrid staff." },
  { item: "Webcam (Logitech Brio)", costPerUnit: 130, quantity: "Per employee", annualTotal: 130, notes: "External webcam for desktop setups." },
];

export const totalPerEmployeeEquipmentCost = 3_860;
export const estimatedEmployeeCount = 152;
export const totalEquipmentBudgetYear1 = 339_680; // 88 avg employees x $3,860
export const totalEquipmentBudgetYear2 = 182_400; // refresh + new hires

export interface SoftwareLicense {
  tool: string;
  vendor: string;
  costModel: string;
  monthlyCost: number;
  annualCost: number;
  notes: string;
}

export const softwareLicenses: SoftwareLicense[] = [
  { tool: "CRM", vendor: "HubSpot Professional", costModel: "$800/mo (10 seats) + $45/additional seat", monthlyCost: 2_200, annualCost: 26_400, notes: "HubSpot chosen over Salesforce for lower cost at our scale. 30 sales seats by Year 2." },
  { tool: "Project Management", vendor: "Linear (Business)", costModel: "$8/user/month", monthlyCost: 960, annualCost: 11_520, notes: "120 seats. Linear chosen for engineering-centric product teams." },
  { tool: "Communication -- Chat", vendor: "Slack (Business+)", costModel: "$12.50/user/month", monthlyCost: 1_500, annualCost: 18_000, notes: "120 seats. Enterprise grid not needed at this stage." },
  { tool: "Communication -- Video", vendor: "Zoom (Business)", costModel: "$21.99/user/month", monthlyCost: 1_100, annualCost: 13_200, notes: "50 host licenses. Most staff use free participant mode." },
  { tool: "Communication -- Async", vendor: "Microsoft Teams (via M365)", costModel: "Included in M365", monthlyCost: 0, annualCost: 0, notes: "Used for government/enterprise client meetings that require Teams." },
  { tool: "Design", vendor: "Figma (Organization)", costModel: "$45/editor/month", monthlyCost: 675, annualCost: 8_100, notes: "15 editor seats (designers + PMs). Free viewer for all." },
  { tool: "Password Management", vendor: "1Password Business", costModel: "$7.99/user/month", monthlyCost: 960, annualCost: 11_520, notes: "120 seats. Critical for multi-country credential management." },
  { tool: "Endpoint Protection", vendor: "CrowdStrike Falcon Go", costModel: "$8.33/endpoint/month", monthlyCost: 1_000, annualCost: 12_000, notes: "120 endpoints. Required for SOC 2 compliance." },
  { tool: "MDM (Device Management)", vendor: "Jamf Business", costModel: "$7.17/device/month", monthlyCost: 860, annualCost: 10_320, notes: "120 devices. MacBook fleet management." },
  { tool: "Analytics -- Product", vendor: "Mixpanel (Growth)", costModel: "$28/month base + MTU", monthlyCost: 1_200, annualCost: 14_400, notes: "Scales with monthly tracked users. Budget assumes 5M MTU by Year 2." },
  { tool: "Analytics -- Business", vendor: "Metabase (Pro Cloud)", costModel: "$500/month", monthlyCost: 500, annualCost: 6_000, notes: "Internal business analytics dashboards." },
  { tool: "Cloud Hosting", vendor: "AWS + Vercel", costModel: "Variable -- see infra section", monthlyCost: 18_000, annualCost: 216_000, notes: "See cloud infrastructure breakdown below for detail." },
  { tool: "AI Platform Costs", vendor: "Anthropic Claude API", costModel: "Per-token pricing", monthlyCost: 25_000, annualCost: 300_000, notes: "Core AI engine. $0.003/input, $0.015/output per 1K tokens. Budget scales with user volume." },
  { tool: "Email / Productivity", vendor: "Google Workspace Business Standard", costModel: "$14/user/month", monthlyCost: 1_680, annualCost: 20_160, notes: "120 seats. Gmail, Drive, Calendar, Meet." },
  { tool: "Legal / Compliance", vendor: "Vanta (SOC 2 automation)", costModel: "$3,500/month", monthlyCost: 3_500, annualCost: 42_000, notes: "Automated compliance monitoring for SOC 2, HIPAA, GDPR equivalents." },
  { tool: "Customer Support", vendor: "Intercom (Early Stage)", costModel: "$74/seat/month", monthlyCost: 740, annualCost: 8_880, notes: "10 support seats. Multilingual chat across 8 countries." },
  { tool: "Code Repository & CI/CD", vendor: "GitHub Enterprise", costModel: "$21/user/month", monthlyCost: 840, annualCost: 10_080, notes: "40 developer seats. Actions minutes included." },
  { tool: "Error Monitoring", vendor: "Sentry (Team)", costModel: "$26/month + volume", monthlyCost: 300, annualCost: 3_600, notes: "Application error tracking across all environments." },
  { tool: "Log Management", vendor: "Datadog (Pro)", costModel: "$23/host/month", monthlyCost: 1_150, annualCost: 13_800, notes: "50 hosts. APM, logging, infrastructure monitoring." },
  { tool: "Document Signing", vendor: "DocuSign (Business Pro)", costModel: "$480/user/year", monthlyCost: 200, annualCost: 2_400, notes: "5 sender licenses. Critical for international contracts." },
];

export const totalAnnualSoftwareCost = softwareLicenses.reduce(
  (sum, s) => sum + s.annualCost,
  0
);

export interface CloudInfraItem {
  service: string;
  provider: string;
  region: string;
  monthlyCost: number;
  annualCost: number;
  notes: string;
}

export const cloudInfrastructure: CloudInfraItem[] = [
  { service: "Primary Application Hosting", provider: "Vercel Pro", region: "Global Edge", monthlyCost: 400, annualCost: 4_800, notes: "Next.js app hosting, edge functions, CDN." },
  { service: "API Backend (ECS Fargate)", provider: "AWS", region: "us-east-1 (primary)", monthlyCost: 3_200, annualCost: 38_400, notes: "Core API services, auto-scaling containers." },
  { service: "Vietnam Data Localization", provider: "AWS", region: "ap-southeast-1 (Singapore) + local VPS", monthlyCost: 1_800, annualCost: 21_600, notes: "Vietnam Cybersecurity Law requires data localization. AWS Singapore + local backup." },
  { service: "India Hosting", provider: "AWS", region: "ap-south-1 (Mumbai)", monthlyCost: 2_200, annualCost: 26_400, notes: "DPDPA compliance. ABDM integration requires India-hosted endpoints." },
  { service: "Brazil Hosting", provider: "AWS", region: "sa-east-1 (Sao Paulo)", monthlyCost: 1_500, annualCost: 18_000, notes: "LGPD compliance. LatAm low-latency serving." },
  { service: "Primary Database (RDS PostgreSQL)", provider: "AWS", region: "us-east-1 + read replicas", monthlyCost: 2_800, annualCost: 33_600, notes: "Multi-AZ PostgreSQL. db.r6g.xlarge primary + read replicas per region." },
  { service: "Redis Cache (ElastiCache)", provider: "AWS", region: "Multi-region", monthlyCost: 800, annualCost: 9_600, notes: "Session caching, rate limiting, real-time features." },
  { service: "CDN / Static Assets", provider: "CloudFront", region: "Global", monthlyCost: 600, annualCost: 7_200, notes: "Multi-country content delivery. ~10TB/month bandwidth." },
  { service: "Object Storage (S3)", provider: "AWS", region: "Multi-region", monthlyCost: 400, annualCost: 4_800, notes: "User documents, reports, backups. ~5TB growing." },
  { service: "Search (OpenSearch)", provider: "AWS", region: "us-east-1", monthlyCost: 1_200, annualCost: 14_400, notes: "Health content search, multi-language indexing." },
  { service: "Monitoring & Logging", provider: "AWS CloudWatch + Datadog", region: "All regions", monthlyCost: 800, annualCost: 9_600, notes: "Infrastructure monitoring, alerting." },
  { service: "Email Delivery (SES)", provider: "AWS", region: "Multi-region", monthlyCost: 300, annualCost: 3_600, notes: "Transactional email. ~2M emails/month at scale." },
  { service: "DNS / Domain", provider: "Route 53 + Cloudflare", region: "Global", monthlyCost: 100, annualCost: 1_200, notes: "DNS management for 8 country domains + primary." },
  { service: "Secrets Manager", provider: "AWS", region: "Multi-region", monthlyCost: 150, annualCost: 1_800, notes: "API keys, credentials management." },
  { service: "WAF / DDoS Protection", provider: "AWS WAF + Shield Standard", region: "Global", monthlyCost: 650, annualCost: 7_800, notes: "Web application firewall, DDoS protection." },
  { service: "Backup & DR", provider: "AWS Backup", region: "Cross-region", monthlyCost: 500, annualCost: 6_000, notes: "Automated backups, cross-region replication." },
  { service: "CI/CD Pipeline", provider: "GitHub Actions + AWS CodePipeline", region: "us-east-1", monthlyCost: 500, annualCost: 6_000, notes: "Build minutes, deployment automation." },
];

export const totalMonthlyCloudCost = cloudInfrastructure.reduce(
  (sum, c) => sum + c.monthlyCost,
  0
);
export const totalAnnualCloudCost = cloudInfrastructure.reduce(
  (sum, c) => sum + c.annualCost,
  0
);

// ---------------------------------------------------------------------------
// SECTION 3: COMMUNICATION COSTS
// ---------------------------------------------------------------------------

export interface CommunicationItem {
  category: string;
  detail: string;
  unitCost: string;
  annualCost: number;
  notes: string;
}

export const communicationCosts: CommunicationItem[] = [
  { category: "International Phone Plans", detail: "T-Mobile Magenta MAX for Business (2 lines) -- unlimited international data/text", unitCost: "$85/line/month", annualCost: 2_040, notes: "Includes unlimited data in all 8 countries. No roaming fees." },
  { category: "Local SIM Cards", detail: "Prepaid data SIMs for each country (2 per country, 8 countries)", unitCost: "$20-40/SIM/month", annualCost: 3_840, notes: "Backup local numbers for Grab, WhatsApp, government registrations." },
  { category: "Translation -- Vietnamese", detail: "Document + meeting interpretation", unitCost: "$35-50/hr interpretation; $0.12/word translation", annualCost: 18_000, notes: "Heavy gov doc translation. ~200 hrs interpretation + 500 pages/yr." },
  { category: "Translation -- Hindi/Regional Indian", detail: "Document + meeting interpretation", unitCost: "$25-40/hr interpretation; $0.08/word translation", annualCost: 15_000, notes: "Hindi, Tamil, Telugu. ~180 hrs interpretation + 400 pages/yr." },
  { category: "Translation -- Bengali", detail: "Document + meeting interpretation", unitCost: "$25-35/hr interpretation; $0.08/word translation", annualCost: 8_000, notes: "~100 hrs interpretation + 200 pages/yr." },
  { category: "Translation -- Thai", detail: "Document + meeting interpretation", unitCost: "$35-50/hr interpretation; $0.14/word translation", annualCost: 14_000, notes: "Thai FDA docs, NHSO proposals. ~150 hrs + 300 pages/yr." },
  { category: "Translation -- Spanish (LatAm)", detail: "Covers Colombia, Argentina, Bolivia", unitCost: "$30-45/hr interpretation; $0.10/word translation", annualCost: 22_000, notes: "3 countries sharing Spanish. ~250 hrs + 600 pages/yr." },
  { category: "Translation -- Portuguese (Brazil)", detail: "Document + meeting interpretation", unitCost: "$35-50/hr interpretation; $0.12/word translation", annualCost: 16_000, notes: "ANVISA, ANS regulatory docs. ~180 hrs + 400 pages/yr." },
  { category: "Translation -- Quechua/Aymara (Bolivia)", detail: "Specialized indigenous language translation", unitCost: "$50-70/hr interpretation", annualCost: 3_000, notes: "Limited need -- community health materials only. ~50 hrs/yr." },
  { category: "Marketing Translation & Localization", detail: "Website, app, marketing materials -- all languages", unitCost: "$0.15-0.25/word with localization review", annualCost: 45_000, notes: "App UI, website copy, marketing campaigns across 7 languages." },
  { category: "Simultaneous Interpretation Equipment", detail: "Rental for large meetings/conferences", unitCost: "$500-1,500/event", annualCost: 8_000, notes: "~8 events/year requiring simultaneous interpretation equipment." },
];

export const totalAnnualCommunicationCost = communicationCosts.reduce(
  (sum, c) => sum + c.annualCost,
  0
);

// ---------------------------------------------------------------------------
// SECTION 4: INSURANCE COSTS
// ---------------------------------------------------------------------------

export interface InsurancePolicy {
  type: string;
  carrier: string;
  coverage: string;
  annualPremium: number;
  notes: string;
}

export const insurancePolicies: InsurancePolicy[] = [
  { type: "Directors & Officers (D&O)", carrier: "Chubb / AIG", coverage: "$5M aggregate limit", annualPremium: 35_000, notes: "Essential for VC-backed company. Covers personal liability of directors/officers. Premium based on $50M fund size and international operations." },
  { type: "Errors & Omissions (E&O) / Professional Liability", carrier: "Hiscox / Hartford", coverage: "$5M per occurrence, $10M aggregate", annualPremium: 28_000, notes: "Critical for health-tech. Covers claims arising from AI health recommendations, diagnostic errors, or data inaccuracies." },
  { type: "Cyber Liability", carrier: "Coalition / Beazley", coverage: "$5M aggregate", annualPremium: 32_000, notes: "Covers data breaches, ransomware, regulatory fines. Higher premium due to health data (PHI/PII) across 8 jurisdictions." },
  { type: "General Liability (Commercial)", carrier: "The Hartford / Travelers", coverage: "$2M per occurrence, $4M aggregate", annualPremium: 12_000, notes: "Covers bodily injury, property damage at offices. Multi-country endorsements." },
  { type: "International Health Insurance (2 Directors)", carrier: "Cigna Global / Aetna International", coverage: "Comprehensive global coverage", annualPremium: 24_000, notes: "$12,000/person/year. Covers all 8 countries plus US. Includes evacuation, repatriation." },
  { type: "Travel Insurance (Annual Multi-Trip)", carrier: "Allianz Global / World Nomads", coverage: "Trip cancellation, delay, medical, evacuation", annualPremium: 6_000, notes: "$3,000/person/year. Annual multi-trip policy for frequent international travelers." },
  { type: "Workers Compensation -- US", carrier: "State-specific carrier", coverage: "Per US state requirements", annualPremium: 8_000, notes: "US-based employees. Premium varies by state and role classification." },
  { type: "Workers Compensation -- International", carrier: "Zurich / AIG Multinational", coverage: "Statutory coverage per country", annualPremium: 22_000, notes: "Covers statutory WC requirements in all 8 countries. Managed through multinational program." },
  { type: "Key Person Insurance", carrier: "MetLife / Prudential", coverage: "$2M per key person (2 directors + CEO)", annualPremium: 15_000, notes: "3 key persons at ~$5,000/yr each. Protects investors if key personnel are incapacitated." },
  { type: "Employment Practices Liability (EPLI)", carrier: "Chubb / AIG", coverage: "$3M aggregate", annualPremium: 10_000, notes: "Covers wrongful termination, discrimination claims across multiple jurisdictions." },
  { type: "Commercial Property (Office Contents)", carrier: "Local carriers per country", coverage: "$100K per office location", annualPremium: 4_800, notes: "$600/yr per office x 8 offices. Covers equipment, furniture, fixtures." },
  { type: "Business Interruption", carrier: "Zurich / Chubb", coverage: "12 months lost revenue", annualPremium: 8_000, notes: "Covers revenue loss from catastrophic events (natural disaster, political unrest) in operating countries." },
];

export const totalAnnualInsuranceCost = insurancePolicies.reduce(
  (sum, p) => sum + p.annualPremium,
  0
);

// ---------------------------------------------------------------------------
// SECTION 5: COMPLIANCE & CERTIFICATION COSTS
// ---------------------------------------------------------------------------

export interface ComplianceItem {
  category: string;
  detail: string;
  frequency: string;
  cost: number;
  notes: string;
}

export const complianceCosts: ComplianceItem[] = [
  { category: "HIPAA Compliance Audit", detail: "Third-party HIPAA security risk assessment + remediation", frequency: "Annual", cost: 35_000, notes: "Required for US health data. Covers security risk assessment, policy review, and gap remediation. Firm: Coalfire or A-LIGN." },
  { category: "SOC 2 Type II Audit", detail: "Full SOC 2 Type II examination (Security, Availability, Confidentiality)", frequency: "Annual", cost: 50_000, notes: "Required by enterprise clients and health plans. 6-month observation period. Firm: Schellman or Deloitte." },
  { category: "Vietnam -- Data Localization Compliance", detail: "Annual assessment of Decree 13/2023 compliance", frequency: "Annual", cost: 15_000, notes: "Local law firm audit of data storage, cross-border transfer mechanisms, and Ministry reporting." },
  { category: "India -- DPDPA Compliance", detail: "Digital Personal Data Protection Act assessment", frequency: "Annual", cost: 18_000, notes: "Data protection impact assessments, consent management audit, ABDM data handling review." },
  { category: "Brazil -- LGPD Compliance", detail: "Lei Geral de Protecao de Dados assessment + DPO", frequency: "Annual", cost: 20_000, notes: "Mandatory DPO appointment ($12K/yr outsourced) + annual compliance audit ($8K)." },
  { category: "Thailand -- PDPA Compliance", detail: "Personal Data Protection Act assessment", frequency: "Annual", cost: 12_000, notes: "Thai FDA sandbox compliance review + PDPA data protection audit." },
  { category: "Colombia -- Ley 1581 Compliance", detail: "Habeas Data compliance assessment", frequency: "Annual", cost: 10_000, notes: "SIC (Superintendencia de Industria y Comercio) registration + compliance audit." },
  { category: "Argentina -- Data Protection Compliance", detail: "Ley 25.326 assessment", frequency: "Annual", cost: 8_000, notes: "AAIP (Agencia de Acceso a la Informacion Publica) registration + audit." },
  { category: "Bangladesh -- Digital Security Act Compliance", detail: "Annual compliance review", frequency: "Annual", cost: 6_000, notes: "BTRC and ICT Act compliance review." },
  { category: "Bolivia -- Ley 164 Compliance", detail: "Telecoms data compliance", frequency: "Annual", cost: 5_000, notes: "AGETIC standards compliance. Minimal requirements compared to other countries." },
  { category: "Penetration Testing", detail: "External + internal pen test of all production systems", frequency: "Annual (external) + quarterly scans", cost: 40_000, notes: "Annual comprehensive pen test ($30K) + quarterly automated scanning ($10K/yr). Firm: Bishop Fox or NCC Group." },
  { category: "Security Audit -- Code Review", detail: "Third-party secure code review of core AI platform", frequency: "Annual", cost: 25_000, notes: "Focus on AI model security, API security, authentication. Firm: Trail of Bits or NCC Group." },
  { category: "Medical Device Classification -- Vietnam", detail: "Software-as-medical-device classification assessment", frequency: "One-time + annual maintenance", cost: 8_000, notes: "MOH classification exemption application for software-only health analytics." },
  { category: "Medical Device Classification -- India", detail: "CDSCO software classification", frequency: "One-time + annual", cost: 10_000, notes: "CDSCO Medical Device Rules 2017 classification for health AI software." },
  { category: "Medical Device Classification -- Brazil", detail: "ANVISA RDC 657/2022 classification", frequency: "One-time + annual", cost: 15_000, notes: "ANVISA health software classification. Longer timeline (6-12 months)." },
  { category: "Medical Device Classification -- Thailand", detail: "Thai FDA health software classification", frequency: "One-time + annual", cost: 10_000, notes: "Thai FDA Sandbox + eventual full classification." },
  { category: "Medical Device Classification -- Colombia", detail: "INVIMA health tech classification", frequency: "One-time + annual", cost: 8_000, notes: "INVIMA health technology registration." },
  { category: "Medical Device Classification -- Argentina", detail: "ANMAT disposition", frequency: "One-time + annual", cost: 8_000, notes: "ANMAT health software classification assessment." },
  { category: "Legal Fees -- Regulatory Filings (all countries)", detail: "Attorney fees for regulatory submissions, filings, responses", frequency: "Annual", cost: 60_000, notes: "~$7,500/country average for ongoing regulatory filing support across 8 countries." },
  { category: "ISO 27001 Certification", detail: "Information security management system certification", frequency: "Initial + annual surveillance", cost: 30_000, notes: "Year 1 initial certification ($30K). Year 2+ surveillance audit ($15K). Valued by government clients." },
  { category: "GDPR-equivalent Cross-Border Transfer Mechanisms", detail: "Standard contractual clauses, transfer impact assessments", frequency: "Annual review", cost: 12_000, notes: "Legal review of all cross-border data transfers between 8 countries + US. Required for Vietnam, India, Brazil, Thailand." },
];

export const totalAnnualComplianceCost = complianceCosts.reduce(
  (sum, c) => sum + c.cost,
  0
);

// ---------------------------------------------------------------------------
// GRAND TOTALS
// ---------------------------------------------------------------------------

export interface CostCategory {
  label: string;
  annual: number;
}

export const grandTotalSummary: CostCategory[] = [
  { label: "Director Travel (8 Countries)", annual: totalAnnualTravelCost },
  { label: "Equipment & Hardware (Year 1)", annual: totalEquipmentBudgetYear1 },
  { label: "Software Licenses", annual: totalAnnualSoftwareCost },
  { label: "Cloud Infrastructure", annual: totalAnnualCloudCost },
  { label: "Communication & Translation", annual: totalAnnualCommunicationCost },
  { label: "Insurance (All Policies)", annual: totalAnnualInsuranceCost },
  { label: "Compliance & Certification", annual: totalAnnualComplianceCost },
];

export const grandTotal =
  totalAnnualTravelCost +
  totalEquipmentBudgetYear1 +
  totalAnnualSoftwareCost +
  totalAnnualCloudCost +
  totalAnnualCommunicationCost +
  totalAnnualInsuranceCost +
  totalAnnualComplianceCost;
