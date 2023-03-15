const crafting_tables = [
    {
        type: "artis:start_table_shaped",
        id: "artis:apprentice_table",
        acceptMirrored: false,
        key: {
            A: {
                item: "artis:start_table"
            },
            B: {
                item: "advanced_reborn:duct_tape"
            },
        },
        pattern: [
            "BAAAB",
            "AAAAA",
            "AABAA",
            "AAAAA",
            "BAAAB",
        ],
        result: {
            item: "artis:apprentice_table",
            count: 1
        }
    }
]

function recipes(event) {
    crafting_tables.forEach((recipe) => {
        event.custom(recipe);
    });
}

ServerEvents.recipes(recipes);