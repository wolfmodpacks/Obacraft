const theRecipes = [
    {
        output: 'itemalchemy:high_covalence_dust',
        pattern: ['AB '],
        key: {
          A: 'botania:mana_diamond',
          B: 'botania:ender_air_bottle'
        },
        id: 'itemalchemy:high_covalence_dust'
    },
    {
        output: 'itemalchemy:middle_covalence_dust',
        pattern: ['AB '],
        key: {
            A: 'twilightforest:raw_ironwood',
            B: 'modern_industrialization:redstone_battery'
        },
        id: 'itemalchemy:middle_covalence_dust'
    },
    {
        output: 'itemalchemy:low_covalence_dust',
        pattern: ['BBB', 'BBB', 'BBA'],
        key: {
            B: 'compressor:octuple_compressed_cobblestone',
            A: 'twilightforest:raw_ironwood'
        },
        id: 'itemalchemy:low_covalence_dust'
    }
];


function recipesDust(event) {
    theRecipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
}

ServerEvents.recipes(recipesDust);

ServerEvents.recipes(event => {

    event.custom({
        "type": "artis:the_huge_table_shaped",
        "id": "itemalchemy:philosopher_stone",
        "acceptMirrored": false,
        "key": {
            "A": {
                "item": "spectrum:bedrock_storage_block"
            },
            "B": {
                "item": "haema:vampire_blood"
            },
            "C": {
                "item": "modern_industrialization:singularity"
            },
            "D": {
                "item": "ae2:singularity"
            },
            "F": {
                "item": "mca:baby_boy"
            },
            "G": {
                "item": "arclight:arclight_core"
            },
        },
        "pattern": [
            "    A    ",
            "   ABA   ",
            "  ABGBA  ",
            " ABDBCBA ",
            "ABGFGFGBA",
            " ABCBDBA ",
            "  ABGBA  ",
            "   ABA   ",
            "    A    "
        ],
        "result": {
            "item": "itemalchemy:philosopher_stone",
            "count": 1
        }
    })

});