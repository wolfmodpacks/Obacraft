ServerEvents.recipes(event => {

    event.custom({
        "type": "create:mechanical_crafting",
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
            "AAAAA",
            "ACBFA",
            "ADGDA",
            "AFBCA",
            "AAAAA",
        ],
        "result": {
            "item": "itemalchemy:philosopher_stone",
            "count": 1
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "id": "arclight:arclight_core",
        "acceptMirrored": false,
        "key": {
            "A": {
                "item": "arclight:jade_block"
            },
            "B": {
                "item": "arclight:arclight_ingot"
            },
            "C": {
                "item": "minecraft:nether_star"
            },
            "D": {
                "item": "botania:third_eye"
            },
            "F": {
                "item": "spectrum:wither_head"
            },
        },
        "pattern": [
            "AAAAA",
            "ACBFA",
            "ADADA",
            "AFBCA",
            "AAAAA",     
        ],
        "result": {
            "item": "arclight:arclight_core",
            "count": 1
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "id": "arclight:angel_helmet",
        "acceptMirrored": false,
        "key": {
            "A": {
                "item": "arclight:arclight_core"
            },
            "B": {
                "item": "arclight:arclight_ingot"
            },
            "C": {
                "item": "minecraft:nether_star"
            },
            "D": {
                "item": "botania:third_eye"
            },
            "F": {
                "item": "arclight:moonlight_jellyball"
            },
            "G": {
                "item": "arclight:arclight_helmet"
            },
        },
        "pattern": [
            " CBC ",
            "BFBFB",
            "BDADB",
            "BFGFB",
            "B B B",
        ],
        "result": {
            "item": "arclight:angel_helmet",
            "count": 1
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "id": "arclight:angel_chestplate",
        "acceptMirrored": false,
        "key": {
            "A": {
                "item": "arclight:arclight_core"
            },
            "B": {
                "item": "arclight:arclight_ingot"
            },
            "C": {
                "item": "arclight:moonlight_jellyball"
            },
            "D": {
                "item": "arclight:angel_feather"
            },
            "F": {
                "item": "arclight:arclight_chestplate"
            },
        },
        "pattern": [
            "B B B",
            "BCBCB",
            "BDADB",
            "BDFDB",
            "BCBCB",
        ],
        "result": {
            "item": "arclight:angel_chestplate",
            "count": 1
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "id": "arclight:angel_leggings",
        "acceptMirrored": false,
        "key": {
            "A": {
                "item": "arclight:arclight_core"
            },
            "B": {
                "item": "arclight:arclight_ingot"
            },
            "C": {
                "item": "arclight:moonlight_jellyball"
            },
            "F": {
                "item": "arclight:arclight_leggings"
            },
        },
        "pattern": [
            "BBBBB",
            "BCBCB",
            "C A C",
            "B F B",
            "C B C",
        ],
        "result": {
            "item": "arclight:angel_leggings",
            "count": 1
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "id": "arclight:angel_boots",
        "acceptMirrored": false,
        "key": {
            "A": {
                "item": "arclight:arclight_core"
            },
            "B": {
                "item": "arclight:arclight_ingot"
            },
            "C": {
                "item": "arclight:moonlight_jellyball"
            },
            "F": {
                "item": "arclight:arclight_boots"
            },
        },
        "pattern": [
            "C A C",
            "B F B",
            "C   C",
            "B   B",
        ],
        "result": {
            "item": "arclight:angel_boots",
            "count": 1
        }
    })

});

