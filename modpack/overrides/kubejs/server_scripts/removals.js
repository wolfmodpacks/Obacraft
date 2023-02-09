ServerEvents.recipes((event) => {
    
    const output = [
        'modern_industrialization:quantum_sword',
        'modern_industrialization:quantum_helmet',
        'modern_industrialization:quantum_chestplate',
        'modern_industrialization:quantum_leggings',
        'modern_industrialization:quantum_boots',
    ]

   output.forEach((item) => {
       event.remove({output: item})
    })
})   