// Datenquelle – erweitere hier die Liste
// Kategorien
const TOP_CATEGORIES = ["Keep for Quests","Keep for Projects","Safe to Recycle","Workshop Upgrades"];
const WORKSHOP_SUBS = ["Scrappy","Gunsmith","Medical Lab","Explosive Station","Gear Bench","Refiner","Utility Station"];

const CAT_COLORS = {
  "Keep for Quests": "bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30",
  "Keep for Projects": "bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/30",
  "Safe to Recycle": "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30",
  "Workshop Upgrades": "bg-violet-500/15 text-violet-300 ring-1 ring-violet-500/30",
};

const SUB_COLORS = {
  "Scrappy": "bg-stone-500/20 text-stone-200",
  "Gunsmith": "bg-zinc-500/20 text-zinc-200",
  "Medical Lab": "bg-rose-500/20 text-rose-200",
  "Explosive Station": "bg-orange-500/20 text-orange-200",
  "Gear Bench": "bg-cyan-500/20 text-cyan-200",
  "Refiner": "bg-lime-500/20 text-lime-200",
  "Utility Station": "bg-fuchsia-500/20 text-fuchsia-200",
};

// Starter-Daten
const ITEMS = [
  // Keep for Quests
  { name: "Jumper Power Cells", category: "Keep for Quests", notes: "Quest turn-in" },
  { name: "Ferral Nail", category: "Keep for Quests" },
  { name: "Energy Transfer Unit", category: "Keep for Quests" },
  { name: "Jackhammer", category: "Keep for Quests" },
  { name: "Injector", category: "Keep for Quests" },
  { name: "Control Driver", category: "Keep for Quests" },
  { name: "Syringe", category: "Keep for Quests" },
  { name: "Wedge Driver", category: "Keep for Quests" },
  { name: "Vacup Pump", category: "Keep for Quests" },
  { name: "Static Hammer", category: "Keep for Quests" },

  // Keep for Projects
  { name: "Lever Pump", category: "Keep for Projects" },
  { name: "Copper Scrap", category: "Keep for Projects" },
  { name: "Rivets", category: "Keep for Projects" },
  { name: "Metal Components", category: "Keep for Projects" },
  { name: "Composite", category: "Keep for Projects" },
  { name: "Solder", category: "Keep for Projects" },
  { name: "Battery", category: "Keep for Projects" },
  { name: "Cooling Fins", category: "Keep for Projects" },
  { name: "Light Bulb", category: "Keep for Projects" },
  { name: "Electrical Components", category: "Keep for Projects" },
  { name: "Wire", category: "Keep for Projects" },
  { name: "Granite Chisel", category: "Keep for Projects" },
  { name: "Steel Spring", category: "Keep for Projects" },
  { name: "ARC Alloy", category: "Keep for Projects" },
  { name: "Rubber Parts", category: "Keep for Projects" },
  { name: "Metal Parts", category: "Keep for Projects" },

  // Safe to Recycle (sample)
  { name: "Ammonite", category: "Safe to Recycle" },
  { name: "Alarm Clock", category: "Safe to Recycle" },
  { name: "ARC Perf Module", category: "Safe to Recycle" },
  { name: "Gasket", category: "Safe to Recycle" },
  { name: "Grinder Blade", category: "Safe to Recycle" },
  { name: "Ice Cream Scoop", category: "Safe to Recycle" },
  { name: "Industrial Shrapnel", category: "Safe to Recycle" },
  { name: "Metal Rod", category: "Safe to Recycle" },
  { name: "Pliers", category: "Safe to Recycle" },
  { name: "Thermostat", category: "Safe to Recycle" },
  { name: "Torch Handle", category: "Safe to Recycle" },
  { name: "Water Filter", category: "Safe to Recycle" },

  // Workshop – Scrappy
  { name: "Duct Tape", category: "Workshop Upgrades", subCategory: "Scrappy" },
  { name: "Bolts", category: "Workshop Upgrades", subCategory: "Scrappy" },
  { name: "Oil Can", category: "Workshop Upgrades", subCategory: "Scrappy" },
  { name: "Wrench", category: "Workshop Upgrades", subCategory: "Scrappy" },

  // Gunsmith
  { name: "Gun Barrel", category: "Workshop Upgrades", subCategory: "Gunsmith" },
  { name: "Trigger Assembly", category: "Workshop Upgrades", subCategory: "Gunsmith" },
  { name: "Scope Lens", category: "Workshop Upgrades", subCategory: "Gunsmith" },

  // Medical Lab
  { name: "Med Gel", category: "Workshop Upgrades", subCategory: "Medical Lab" },
  { name: "Antibiotics", category: "Workshop Upgrades", subCategory: "Medical Lab" },

  // Explosive Station
  { name: "Detonator", category: "Workshop Upgrades", subCategory: "Explosive Station" },
  { name: "Stabilizer", category: "Workshop Upgrades", subCategory: "Explosive Station" },

  // Gear Bench
  { name: "Servo Motor", category: "Workshop Upgrades", subCategory: "Gear Bench" },
  { name: "Kevlar Weave", category: "Workshop Upgrades", subCategory: "Gear Bench" },

  // Refiner
  { name: "Catalyst", category: "Workshop Upgrades", subCategory: "Refiner" },
  { name: "Solvent", category: "Workshop Upgrades", subCategory: "Refiner" },

  // Utility Station
  { name: "Power Converter", category: "Workshop Upgrades", subCategory: "Utility Station" },
  { name: "Coolant", category: "Workshop Upgrades", subCategory: "Utility Station" },
];
