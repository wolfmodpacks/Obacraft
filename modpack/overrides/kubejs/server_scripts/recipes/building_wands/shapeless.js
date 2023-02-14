const wands = [
    {
      output: 'wands:stone_wand',
      pattern: ['  A', ' B ', 'B  '],
      key: {
        A: '#c:stone',
        B: 'campanion:wooden_rod'
      },
      id: 'wands:stone_wand'
    },
    {
      output: 'wands:iron_wand',
      pattern: ['  A', ' B ', 'B  '],
      key: {
        A: '#c:iron_ingots',
        B: 'campanion:wooden_rod'
      },
      id: 'wands:iron_wand'
    },
    {
      output: 'wands:diamond_wand',
      pattern: ['  A', ' B ', 'B  '],
      key: {
        A: 'minecraft:diamond',
        B: 'campanion:wooden_rod'
      },
      id: 'wands:diamond_wand'
    }
  ];
  
  function registerWandRecipes(event) {
    wands.forEach((wand) => {
      event.shaped(wand.output, wand.pattern, wand.key).id(wand.id);
    });
  }
  
  ServerEvents.recipes(registerWandRecipes);