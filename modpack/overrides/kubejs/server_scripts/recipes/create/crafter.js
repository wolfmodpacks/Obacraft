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

});

