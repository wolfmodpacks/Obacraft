ServerEvents.recipes((event) => {
    
    const output = [
        // Modern Industrialization
        'modern_industrialization:quantum_sword',
        'modern_industrialization:quantum_helmet',
        'modern_industrialization:quantum_chestplate',
        'modern_industrialization:quantum_leggings',
        'modern_industrialization:quantum_boots',
        // Bewtichment
        'bewitchment:raw_silver',
        // Item Alchemy
        'itemalchemy:philosopher_stone',
        // MCA
        'mca:gold_dust',
        'mca:engagement_ring',
        'mca:wedding_ring',

    ]

    const id = [
        // MCA
        'mca:gold_dust',
        'mca:engagement_ring',
        'mca:wedding_ring',
        'mca:rose_gold_dust',

        // Kibe
        'kibe:slime_boots',
        'kibe:slime_sling',
    ]


    const plates = [
        'copper',
        'iron',
        'gold',
        'tin',
        'steel',
        'ostrum',
        'desh',
        'calorite'
    ]

    plates.forEach((plate) => {
        event.remove({id: `indrev:shapeless/${plate}_plate_from_hammer`})
        event.remove({id: `ad_astra:hammering/${plate}_plate`})
    })

    id.forEach((item) => {
        event.remove({id: item})
    })

    
   output.forEach((item) => {
       event.remove({output: item})
    })
})   