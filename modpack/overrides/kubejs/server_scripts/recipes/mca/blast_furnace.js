ServerEvents.recipes(event => {

    event.custom({
        "type": "modern_industrialization:blast_furnace",
        "duration": 200,
        "eu": 32,
        "item_inputs": [
            {
                "amount": 1,
                "item": "mca:rose_gold_dust"
            }
        ],
        "item_outputs": [
            {
                "amount": 1,
                "item": "mca:rose_gold_ingot"
            }
        ]
    });
});