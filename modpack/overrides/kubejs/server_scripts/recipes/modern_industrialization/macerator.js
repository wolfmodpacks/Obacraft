ServerEvents.recipes((event) => {

    event.custom({
        "type": "modern_industrialization:macerator",
        "duration": 100,
        "eu": 2,
        "item_inputs": [
            {
                "amount": 1,
                "item": "mca:rose_gold_ingot"
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