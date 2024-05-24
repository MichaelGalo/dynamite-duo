export const database = {
  heroes: [
    {
      id: 1,
      name: "Dynoguy",
      power: "Fire blasts",
    },
    {
      id: 2,
      name: "Hyperspeed",
      power: "Super speed",
    },
  ],
  villains: [
    {
      id: 1,
      name: "Captain Dad Bod",
      power: "Thunderous Sneezes",
    },
    {
      id: 2,
      name: "Wal-Mart Karen",
      power: "Asking for the manager",
    },
  ],
};

export const getVillains = () => {
  return database.villains.map((villain) => ({ ...villain }));
};
