// Photography registry — every real asset in /public/images, with the alt text
// it should always ship with. Pages import from here, never hard-code a path.

const img = (src, alt) => ({ src: `/images/${src}`, alt });

export const media = {
  brand: {
    // Full lockup, and the flame mark cropped out of it for the nav/footer.
    logo: img("logo-flareon.jpg", "FLAREON — get grillin'"),
    mark: img("logo-mark.jpg", "FLAREON flame mark"),
  },

  // Hot product beauty shots
  fire: {
    hero: img(
      "hero-coal-flame.jpg",
      "Flareon coconut charcoal burning down to an even ember bed"
    ),
    hexagon: img(
      "flame-hexagon.jpg",
      "Flames rising off hexagonal coconut shell briquettes in a grill"
    ),
    coals: img(
      "coals-glowing.jpg",
      "Close-up of glowing Flareon briquettes at full heat"
    ),
    shisha: img(
      "shisha-cubes-grill.jpg",
      "Shisha cubes glowing red on a lighting grill"
    ),
    cubesLit: img(
      "lighter-cubes-foil.jpg",
      "Four coconut charcoal cubes fully lit on a foiled shisha bowl"
    ),
  },

  // Studio shots of the shapes we press
  shapes: {
    pillow: img("briquette-pillow.jpg", "Pillow-shaped coconut charcoal briquettes"),
    hexagon: img("briquette-hexagon.jpg", "Hexagonal coconut charcoal briquette logs"),
    cube: img("briquette-cube.jpg", "Cube coconut charcoal briquettes stacked"),
    round: img("briquette-round.jpg", "Round honeycomb coconut charcoal briquettes"),
  },

  // Raw material & by-product
  material: {
    rawSacks: img(
      "raw-shell-sacks.jpg",
      "Open sacks of coconut shell charcoal chips and carbon powder"
    ),
    powder: img("carbon-powder.jpg", "Milled coconut shell carbon powder"),
    carbonSack: img(
      "activated-carbon-sack.jpg",
      "25 kg sack of activated carbon powder, made in India"
    ),
  },

  // The Palladam plant
  plant: {
    machine: img(
      "briquette-machine.jpg",
      "Operator running the hydraulic briquette press at the Palladam plant"
    ),
    machineTeam: img(
      "briquette-machine-team.jpg",
      "Plant team working the briquette press line"
    ),
    conveyorCrates: img(
      "conveyor-drying-crates.jpg",
      "Carbon conveyor feeding the press beside stacked drying crates"
    ),
    sorting: img(
      "sorting-crates.jpg",
      "Workers grading fresh briquettes into drying crates"
    ),
    dryingTray: img(
      "drying-tray-hands.jpg",
      "Freshly pressed pillow briquettes laid out on a drying tray"
    ),
    trayLeveling: img(
      "tray-leveling.jpg",
      "Operator levelling a tray of green briquettes before drying"
    ),
    screening: img(
      "screening-conveyor.jpg",
      "Operator watching briquettes cross the screening conveyor"
    ),
    conveyorDrop: img(
      "conveyor-drop.jpg",
      "Dried briquettes dropping from the screen onto the transfer belt"
    ),
    conveyorNight: img(
      "conveyor-night.jpg",
      "Screening line running inside the plant"
    ),
    screeningCheck: img(
      "screening-check.jpg",
      "Quality check on the screening bed mid-run"
    ),
    bagging: img(
      "bagging-hopper.jpg",
      "Operator filling a 25 kg Flareon sack at the weighing hopper"
    ),
  },

  // Warehouse, packing and despatch
  logistics: {
    yardLoading: img(
      "yard-loading.jpg",
      "Tractor loader moving jumbo bags of coconut shell charcoal in the plant yard"
    ),
    warehouseFlareon: img(
      "warehouse-flareon-sacks.jpg",
      "Branded Flareon 25 kg charcoal sacks stacked in the covered warehouse"
    ),
    warehouseAisle: img(
      "warehouse-aisle.jpg",
      "Warehouse aisle between stacked charcoal sacks awaiting despatch"
    ),
    sackWall: img(
      "warehouse-sack-wall.jpg",
      "Wall of packed charcoal sacks ready for container loading"
    ),
    retailBags: img(
      "retail-bags.jpg",
      "Printed retail Flareon barbecue charcoal bags stacked for export"
    ),
    port: img(
      "port-night.jpg",
      "Container vessel loading at berth under gantry cranes at night"
    ),
  },

  people: {
    lead: img("leadership-portrait.jpg", "Gowtham, Managing Partner, Flareon Briquettes"),
  },
};

// Homepage / company plant strip — ordered as the process actually runs.
export const plantStrip = [
  media.logistics.yardLoading,
  media.plant.conveyorCrates,
  media.plant.machine,
  media.plant.dryingTray,
  media.plant.screening,
  media.logistics.warehouseFlareon,
];

// Gallery page — the documentary set (plant, material, packing, product in use).
// Studio shape shots and the carbon sack live on the Products page instead.
export const gallery = [
  { ...media.logistics.yardLoading, caption: "Jumbo bags of shell charcoal moved into the yard" },
  { ...media.logistics.warehouseFlareon, caption: "Branded 25 kg sacks stacked in the covered warehouse" },
  { ...media.plant.machine, caption: "The hydraulic briquette press mid-run" },
  { ...media.plant.machineTeam, caption: "Press line crew during a production shift" },
  { ...media.plant.sorting, caption: "Fresh briquettes graded into drying crates" },
  { ...media.plant.conveyorCrates, caption: "Carbon conveyor feeding the press" },
  { ...media.plant.dryingTray, caption: "Pillow briquettes laid out to dry" },
  { ...media.plant.trayLeveling, caption: "Levelling a tray before it goes to the yard" },
  { ...media.plant.screening, caption: "Watching the screening conveyor for undersize" },
  { ...media.plant.conveyorDrop, caption: "Dried briquettes dropping to the transfer belt" },
  { ...media.plant.conveyorNight, caption: "The screening line running late in the shift" },
  { ...media.plant.screeningCheck, caption: "Quality check on the screening bed" },
  { ...media.plant.bagging, caption: "Filling a 25 kg sack at the weighing hopper" },
  { ...media.logistics.retailBags, caption: "Printed retail bags stacked for export" },
  { ...media.logistics.sackWall, caption: "A wall of packed sacks awaiting a container" },
  { ...media.logistics.warehouseAisle, caption: "Warehouse aisle on the despatch side" },
  { ...media.material.rawSacks, caption: "Shell charcoal chips and milled carbon, side by side" },
  { ...media.material.powder, caption: "Milled coconut shell carbon, close up" },
  { ...media.fire.shisha, caption: "Cubes glowing on a lighting grill" },
  { ...media.fire.cubesLit, caption: "Fully lit cubes on a foiled bowl" },
  { ...media.fire.coals, caption: "Briquettes holding heat at full burn" },
  { ...media.fire.hexagon, caption: "Flames rising off hexagonal briquettes" },
  { ...media.fire.hero, caption: "An even ember bed — four hours of steady heat" },
];

// One photo per manufacturing stage on the Company page.
export const processImages = [
  media.material.rawSacks,
  media.material.powder,
  media.plant.machineTeam,
  media.plant.bagging,
];

// One photo per activated-carbon stage on the Company page.
export const carbonProcessImages = [
  media.material.rawSacks,
  media.plant.conveyorCrates,
  media.material.powder,
  media.material.carbonSack,
];

export default media;
