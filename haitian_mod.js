//////////////////////////////
// 🇭🇹 HAITIAN INGREDIENTS MOD
//////////////////////////////

// --- BASIC INGREDIENTS ---

addIngredient("rice", {
    color: "#f5f5dc",
    type: "grain"
});

addIngredient("beans", {
    color: "#8b0000",
    type: "vegetable"
});

addIngredient("pumpkin", {
    color: "#ff8c00",
    type: "vegetable"
});

addIngredient("beef", {
    color: "#8b3a3a",
    type: "meat"
});

addIngredient("fish", {
    color: "#ffcc99",
    type: "meat",
    shape: "fish"
});

addIngredient("flour", {
    color: "#fff8dc",
    type: "powder"
});

addIngredient("sugar", {
    color: "#ffffff",
    type: "powder"
});

addIngredient("oil", {
    color: "#ffd700",
    type: "liquid"
});

addIngredient("garlic", {
    color: "#f0e68c",
    type: "vegetable"
});

addIngredient("onion", {
    color: "#dda0dd",
    type: "vegetable"
});

addIngredient("carrot", {
    color: "#ffa500",
    type: "vegetable"
});

addIngredient("cabbage", {
    color: "#7cfc00",
    type: "vegetable"
});

addIngredient("lemon", {
    color: "#fff44f",
    type: "fruit"
});

addIngredient("milk", {
    color: "#ffffff",
    type: "liquid"
});

addIngredient("yeast", {
    color: "#d2b48c",
    type: "powder"
});

addIngredient("pasta", {
    color: "#ffe4b5",
    type: "grain"
});

//////////////////////////////
// 🍲 HAIITIAN RECIPES
//////////////////////////////

// 🇭🇹 Diri Kole
addRecipe("rice+beans+oil+garlic+onion", "diri_kole");

// 🇭🇹 Soup Joumou
addRecipe("pumpkin+beef+carrot+cabbage+pasta", "soup_joumou");

// 🇭🇹 Beignet
addRecipe("flour+sugar+milk+yeast+oil", "beignet");

// 🇭🇹 Poisson Rouge
addRecipe("fish+lemon+garlic+onion+oil", "poisson_rouge");
