ServerEvents.recipes(event => {
    event.shaped('artis:start_table', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:crafting_table',
        B: 'mcda:upgrade_core',
        }).id('artis:start_table');

})