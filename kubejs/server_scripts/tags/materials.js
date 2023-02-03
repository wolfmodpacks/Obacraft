ServerEvents.tags('item', event => {
    const create_ingots = [
        'zinc',
        'brass'
    ]

    const create_nuggets = [
        'copper',
        'brass',
        'zinc'
    ]

    const create_sheets = [
        'copper',
        'brass',
        'iron'
    ]

    create_ingots.forEach((ingot) => {
        event.add(`c:${ingot}_ingots`, `create:${ingot}_ingot`)
        event.add(`c:${ingot}_blocks`, `create:${ingot}_block`)
    })

    create_nuggets.forEach((nugget) => {
        event.add(`c:${nugget}_nuggets`, `create:${nugget}_nugget`)
    })

    create_sheets.forEach((sheet) => {
        event.add(`c:${sheet}_plates`, `create:${sheet}_sheet`)
    })

    event.add("c:brass_ingots", "create:brass_ingot")
    event.add("c:brass_nuggets", "create:brass_nugget")
    event.add("c:brass_ingots", "create:brass_ingot")
    event.add("c:brass_blocks", "create:brass_block")
    event.add("c:raw_zinc_ores", "create:raw_zinc")
    event.add("c:gold_plates", "create:golden_sheet")

    // Create Additions
    event.add("c:zinc_plates", "createaddition:zinc_sheet")
    event.add("c:diamond_dusts", "createaddition:diamond_grit")
    event.add("c:iron_rods", "createaddition:iron_rod")
    event.add("c:gold_rods", "createaddition:gold_rod")
    event.add("c:copper_rods", "createaddition:copper_rod")

    // Tech Reborn
    event.add("c:plates/brass", "techreborn:brass_plate")
    event.add("c:plates/zinc", "techreborn:zinc_plate")
    event.add("c:nuggets/zinc", "techreborn:zinc_nugget")
    event.add('c:zinc_plates', 'techreborn:zinc_plate')
    event.add('c:brass_plates', 'techreborn:brass_plate')

    // Netherrack
    event.add("c:netherrack_dusts", "create:cinder_flour")




})