ServerEvents.recipes(event => {
    event.custom({
        "type": "modern_industrialization:mixer",
        "duration": 100,
        "eu": 2,
        "fluid_inputs": [
            {
                "amount": 1000,
                "fluid": "minecraft:water"
            }
        ],
        "item_inputs": [
            {
                "amount": 3,
                "tag": "c:copper_dusts"
            },
            {
                "amount": 6,
                "tag": "c:gold_dusts"
            }
        ],
        "item_outputs": [
            {
                "amount": 1,
                "item": "mca:rose_gold_dust"
            }
        ]
    });
});