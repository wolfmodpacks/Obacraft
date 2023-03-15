function replaceAll(string, find, replace) {
  return string.replace(new RegExp(find, 'g'), replace)
}
function getNameOfID(id) {
  let output = "";
  id = replaceAll(id, ":", " ");
  id = replaceAll(id, "_", " ");

  let parts = id.split(" ");
  for (let i = 0; i < parts.length; i++) {
      output += parts[i].substring(0, 1).toUpperCase() + parts[i].substring(1);
      if (i < parts.length - 1) {
          output += " ";
      } else {
          output += "s";
      }
  }
  return output;
}


REIEvents.removeCategories((event) => {
  event.yeet('minecraft:plugins/tag')
})


REIEvents.groupEntries(event => {
  Ingredient.of('@minecraft').getItemIds().forEach((id) => {
      let name = getNameOfID(id);
      id = id.replace('minecraft:', 'chipped:');
      let parts = id.split(':');
      event.groupItemsByTag(`kubejs:rei_groups/${parts[0]}/${parts[1]}`, name, id);
  });
  
  let terracottas = ['minecraft:terracotta'];
  for(let i=1; i<=66; i++){
      terracottas.push('chipped:terracotta_'+i);
  }
  event.groupItems('kubejs:reigroups/chipped/terracotta', getNameOfID('minecraft:terracotta'), terracottas);
  
});