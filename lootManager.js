class LootManager {
  constructor(loot) {
    this.loot = loot;
  }

  sortLoot() {
    return this.loot.slice().sort((a, b) => b.value - a.value);
  }

  filterLoot(type) {
    return this.loot.filter((item) => item.type === type);
  }

  divideEqually() {
    const totalValue = (arr) => arr.reduce((sum, item) => sum + item.value, 0);

    const sortedLoot = this.sortLoot();

    let group1 = [];
    let group2 = [];

    for (const item of sortedLoot) {
      if (totalValue(group1) <= totalValue(group2)) {
        group1.push(item);
      } else {
        group2.push(item);
      }
    }

    return [group1, group2];
  }
}

// Test
const loot = [
  { name: "Gasoline Canister", type: "fuel", value: 9 },
  { name: "Rusty Crowbar", type: "misc", value: 3 },
  { name: "Bits of leather", type: "food", value: 2 },
  { name: "Ruined Tire", type: "fuel", value: 2 },
  { name: "Mud cake", type: "food", value: 1 },
];

// instance of LootManager
const lootManager = new LootManager(loot);

// Test Level 1
console.log("Sorted Loot:", lootManager.sortLoot());

// Test Level 2
console.log("Filtered Loot (type: 'fuel'):", lootManager.filterLoot("fuel"));

// Test Level 3
console.log("Divided Loot:", lootManager.divideEqually());
