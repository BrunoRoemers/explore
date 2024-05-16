const c = [
  "/explore/_app/immutable/assets/_layout-faf2005a.css",
  "/explore/_app/immutable/chunks/6-ee6d2496.js",
  "/explore/_app/immutable/chunks/singletons-c9b53750.js",
  "/explore/_app/immutable/components/pages/_page.svelte-5bbbfaa2.js",
  "/explore/_app/immutable/chunks/CollectionList-8eff242c.js",
  "/explore/_app/immutable/chunks/CalendarList-5a7545ee.js",
  "/explore/_app/immutable/chunks/0-05ca907b.js",
  "/explore/_app/immutable/chunks/1-507f4667.js",
  "/explore/_app/immutable/modules/pages/_layout.js-e0c98329.js",
  "/explore/_app/immutable/components/error.svelte-bf878a46.js",
  "/explore/_app/immutable/chunks/_layout-9259b610.js",
  "/explore/_app/immutable/components/pages/day/_date_/_page.svelte-358eda0d.js",
  "/explore/_app/immutable/start-bf20037a.js",
  "/explore/_app/immutable/components/pages/schedule/_page.svelte-f147e7f9.js",
  "/explore/_app/immutable/chunks/TimelineHeatmap-8d56020b.js",
  "/explore/_app/immutable/chunks/Disclaimer-15eeef6d.js",
  "/explore/_app/immutable/chunks/2-8b5cd56e.js",
  "/explore/_app/immutable/chunks/3-7149fc9a.js",
  "/explore/_app/immutable/chunks/4-431d028c.js",
  "/explore/_app/immutable/chunks/5-6bff8e80.js",
  "/explore/_app/immutable/chunks/stores-6b80303c.js",
  "/explore/_app/immutable/chunks/Footer-a3e4efb3.js",
  "/explore/_app/immutable/components/pages/_type_/_page.svelte-a30e5bba.js",
  "/explore/_app/immutable/chunks/EventTypeBadge-9466e62a.js",
  "/explore/_app/immutable/components/pages/_layout.svelte-a85fda49.js",
  "/explore/_app/immutable/components/pages/_type_/_slug_/_page.svelte-49f5b34f.js",
  "/explore/_app/immutable/chunks/utils-157bfc7e.js"
], m = [
  "/explore/bg-prg.png",
  "/explore/favicon.png",
  "/explore/img/pbw23-banner-square.png",
  "/explore/img/pbw23-twitter-card.png",
  "/explore/img/press-center-banner.webp",
  "/explore/manifest.json",
  "/explore/preview.jpg"
], u = "1715893568597", d = "24", h = "Regen Village 2024", b = "https://regenvillage.github.io/data/24", g = "https://regenvillage.github.io/explore", f = "https://github.com/regenvillage/data/tree/main/data/24", _ = [], x = [
  {
    id: "placeholder",
    hash: "532b295b1631485e9ad90f19b7284118264380d33e6aff2d463d3d92b72ce45e",
    name: "Example Event 2024",
    shortname: "Example",
    types: [
      "meetup"
    ],
    status: "planning",
    org: "Example place",
    dri: "john007",
    poc: "John Appleseed",
    date: "2024-05-23",
    days: 3,
    times: "09:00-20:00",
    venueName: "Example venue",
    venueUrl: "https://nominatim.openstreetmap.org/ui/search.html?q=becentral",
    venueAddress: "Cantersteen 12, 1000 Bruxelles",
    languages: [
      "english"
    ],
    attendees: 600,
    chains: [],
    tags: [
      "solarpunk"
    ],
    logo: "https://regenvillage.github.io/data/24/assets/events/placeholder/logo.webp",
    description: `Lorem ipsum ...
`,
    registration: {
      type: "tickets",
      price: "100 EUR",
      link: "https://example.org/tickets",
      status: "available"
    },
    links: {
      web: "https://example.org/",
      twitter: "https://twitter.com/ExampleConf",
      telegram: "https://t.me/example"
    },
    segments: [
      {
        date: "2024-05-23",
        times: "09:00-20:00",
        startTime: "2024-05-23T07:00:00.000Z",
        endTime: "2024-05-23T18:00:00.000Z"
      },
      {
        date: "2024-05-24",
        times: "09:00-20:00",
        startTime: "2024-05-24T07:00:00.000Z",
        endTime: "2024-05-24T18:00:00.000Z"
      },
      {
        date: "2024-05-25",
        times: "09:00-20:00",
        startTime: "2024-05-25T07:00:00.000Z",
        endTime: "2024-05-25T18:00:00.000Z"
      }
    ]
  }
], v = [], k = [], j = [], y = [], T = "2024-05-16T20:32:34.788Z", w = "v24.2.4", i = {
  id: d,
  name: h,
  dataUrl: b,
  exploreUrl: g,
  dataGithubUrl: f,
  places: _,
  events: x,
  "media-partners": [],
  contributors: v,
  benefits: k,
  unions: j,
  chains: y,
  "other-events": [],
  __time: T,
  __tag: w
}, o = {
  tz: "Europe/Brussels",
  collections: {
    places: {
      title: "Places",
      model: "place",
      img: "photo"
    },
    events: {
      title: "Events",
      model: "event"
    },
    speakers: {
      title: "Speakers",
      model: "speaker",
      img: "photoUrl",
      virtual: !0
    },
    "media-partners": {
      title: "Media Partners & Communities",
      model: "media-partner",
      aspect: "aspect-video"
    },
    benefits: {
      title: "Benefits for visitors",
      model: "benefit",
      aspect: "aspect-video"
    },
    unions: {
      title: "Event Unions",
      model: "union"
    },
    chains: {
      title: "Blockchains",
      model: "chain"
    },
    "other-events": {
      title: "Other events",
      model: "other-event"
    }
  },
  eventTypeColors: {
    conference: "#d3e5ee",
    meetup: "#fdecc8",
    hackathon: "#dad7ed",
    expo: "#eee0da",
    party: "#dbeddb"
  },
  date: "2024-05-18",
  days: 10
}, n = `cache-${u}`, l = [];
for (const e in o.collections)
  o.collections[e].virtual || l.push(...i[e].map((t) => t.logo || t.photoUrl || t.photo).filter((t) => t));
for (const e of i.events)
  e.speakers && l.push(...e.speakers.map((t) => t.photoUrl).filter((t) => t));
const r = [
  ...c,
  // the app itself
  ...m,
  // everything in `static`
  ...l
];
self.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(n)).addAll(r);
  }
  e.waitUntil(t());
});
self.addEventListener("activate", (e) => {
  async function t() {
    for (const a of await caches.keys())
      a !== n && await caches.delete(a);
  }
  e.waitUntil(t());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function t() {
    const a = new URL(e.request.url), s = await caches.open(n);
    if (r.includes(a.pathname))
      return s.match(e.request);
    try {
      const p = await fetch(e.request);
      return p.status === 200 && s.put(e.request, p.clone()), p;
    } catch {
      return s.match(e.request);
    }
  }
  e.respondWith(t());
});
