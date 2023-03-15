const recipesForFlywheels = [
    {
        output: "extendedflywheels:steelflywheel",
        pattern: ["   ", " A ", "   "],
        key: {
            A: "modern_industrialization:steel_ingot"
        },
        id: "extendedflywheels:steel_flywheel"
    },
    {
        output: "extendedflywheels:ironflywheel",
        pattern: ["   ", " A ", "   "],
        key: {
            A: "minecraft:iron_ingot"
        },
        id: "extendedflywheels:iron_flywheel"
    }
]

function recipesFlywheels(event) {
    recipesForFlywheels.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
}

ServerEvents.recipes(recipesFlywheels);