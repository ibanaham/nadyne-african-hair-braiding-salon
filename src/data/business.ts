export const business = {
  name: "Nadyne African Hair Braiding Salon",
  shortName: "Nadyne",
  tagline: "African Hair Braiding Salon",
  phoneDisplay: "(682) 313-1465",
  phoneTel: "tel:+16823131465",
  phoneSms: "sms:+16823131465",
  address: {
    street: "739 W Wheatland Road",
    city: "Duncanville",
    state: "TX",
    zip: "75116",
    country: "United States",
    full: "739 W Wheatland Road, Duncanville, TX 75116, United States",
    short: "739 W Wheatland Road, Duncanville, TX 75116",
  },
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=739+W+Wheatland+Road%2C+Duncanville%2C+TX+75116",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=739+W+Wheatland+Road%2C+Duncanville%2C+TX+75116&z=15&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Nadyne+African+Hair+Braiding+Salon+739+W+Wheatland+Road+Duncanville+TX",
  hours: [
    { day: "Monday", hours: "8:00 AM–9:00 PM" },
    { day: "Tuesday", hours: "8:00 AM–9:00 PM" },
    { day: "Wednesday", hours: "8:00 AM–9:00 PM" },
    { day: "Thursday", hours: "8:00 AM–9:00 PM" },
    { day: "Friday", hours: "8:00 AM–9:00 PM" },
    { day: "Saturday", hours: "8:00 AM–9:00 PM" },
    { day: "Sunday", hours: "10:00 AM–6:00 PM" },
  ],
  hoursSummary: {
    weekday: "Monday–Saturday: 8:00 AM–9:00 PM",
    sunday: "Sunday: 10:00 AM–6:00 PM",
  },
  openingHoursSpecification: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
    {
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  areaServed: "Duncanville and the surrounding Dallas–Fort Worth area",
  announcement:
    "Professional African braiding in Duncanville • Call today to reserve your appointment",
  designer: {
    name: "Hamid Banafunzi",
    url: "https://hamid-banafunzi.vercel.app/",
  },
} as const;
