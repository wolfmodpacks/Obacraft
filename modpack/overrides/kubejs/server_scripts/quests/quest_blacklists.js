///////////////////////////
// Made by Wolfkid200444 //
///////////////////////////

const blockBlacklistedItems = 
[
  {
		  "id": "indrev:nikolite_ore",
		  "message": "You need to reach The Revolution stage!",
		  "questId": "247E1A063CCA79AC"
	},
  {
      "id": "ae2:flawless_budding_quartz",
      "message": "You need to reach More Advance Storage System? stage!",
      "questId": "106041630D354C31"
  },
  {
      "id": "ae2:flawed_budding_quartz",
      "message": "You need to reach More Advance Storage System? stage!",
      "questId": "106041630D354C31"
  },  
  {   
      "id": "ae2:chipped_budding_quartz",
      "message": "You need to reach More Advance Storage System? stage!",
      "questId": "106041630D354C31"
  },  
  {   
      "id": "ae2:damaged_budding_quartz",
      "message": "You need to reach More Advance Storage System? stage!",
      "questId": "106041630D354C31"
  },  
  {   
      "id": "expandedstorage:copper_barrel",
      "message": "You need to reach More CHEST!! stage!",
      "questId": "12B0C16F9BC8B0B5"
  },  
  {   
      "id": "expandedstorage:iron_chest",
      "message": "You need to reach More CHEST!! stage!",
      "questId": "12B0C16F9BC8B0B5"
  },  
  {   
      "id": "dankstorage:dank_1",
      "message": "You need to reach More CHEST!! stage!",
      "questId": "12B0C16F9BC8B0B5"
  },  
  {   
      "id": "inmis:frayed_backpack",
      "message": "You need to reach More CHEST!! stage!",
      "questId": "12B0C16F9BC8B0B5"
  },  
  {   
      "id": "travelersbackpack:standard",
      "message": "You need to reach More CHEST!! stage!",
      "questId": "12B0C16F9BC8B0B5"
  },  
  {   
      "id": "toms_storage:ts.inventory_connector",
      "message": "You need to reach More Storage stage!",
      "questId": "5C06CF4591DC1C4E"
  }
]
const itemBlacklistedItems = 
[
  {
      "id": "indrev:nikolite_dust",
      "message": "You need to reach The Revolution stage!",
      "questId": "247E1A063CCA79AC"
  },
  {
      "id": "techreborn:sap",
      "message": "You need to reach More Machines?!?! stage!",
      "questId": "62984CE5CE9E0906"
  },
  {
      "id": "powah:uraninite",
      "message": "You need to reach Power? stage!",
      "questId": "490066BEC7EE97CF"
  },
  {
      "id": "powah:dielectric_paste",
      "message": "You need to reach Power? stage!",
      "questId": "490066BEC7EE97CF"
  },
  {
      "id": "ae2:certus_quartz_crystal",
      "message": "You need to reach More Advance Storage System? stage!",
      "questId": "106041630D354C31"
  },
  {
      "id": "ae2:certus_quartz_dust",
      "message": "You need to reach More Advance Storage System? stage!",
      "questId": "106041630D354C31"
  },
  {
      "id": "bewitchment:athame",
      "message": "You need to reach Magic Time stage!",
      "questId": "34E8B5ADE8249162"
  },
  {
      "id": "haema:vampire_blood",
      "message": "You need to reach Deeper stage!",
      "questId": "48A868BD6B165F2D"
  },  
  { 
      "id": "botania:apothecary_default",
      "message": "You need to reach Welcome to nature stage!",
      "questId": "1BF6A5B8A1F0B844"
  }
]


function isBlacklisted(id, player, blacklist) {
    for (const item of blacklist) {
      if (item.id === id) {
        if (!item.questId || !player.data.ftbquests.isCompleted(item.questId)) {
          return item;
        }
      }
    }
    return null;
  }
  
  let handleBlacklistedItem = (event, blacklistedItem) => {
    event.cancel();
    event.player.displayClientMessage(blacklistedItem.message, true);
    
    const item = event.player.getInventory().getItem(event.getSlot())
    event.player.getInventory().setItem(event.getSlot(), 'minecraft:air')

  };  
  
  function blackListCheck(itemToTest, event) {
    if (!itemToTest) return;
    const id = itemToTest.id;
    const player = event.player;
  
    const itemBlacklisted = isBlacklisted(id, player, itemBlacklistedItems);
    if (itemBlacklisted) {
      handleBlacklistedItem(event, itemBlacklisted);
      return;
    }
  
    const blockBlacklisted = isBlacklisted(id, player, blockBlacklistedItems);
    if (blockBlacklisted) {
      handleBlacklistedItem(event, blockBlacklisted);
    }
  }
  ItemEvents.canPickUp((event) => blackListCheck(event.item, event));
  ItemEvents.crafted((event) => blackListCheck(event.item, event));
  ItemEvents.smelted((event) => blackListCheck(event.item, event));
  ItemEvents.entityInteracted((event) => blackListCheck(event.item, event));

  BlockEvents.placed((event) => blackListCheck(event.item, event));
  BlockEvents.leftClicked((event) => blackListCheck(event.item, event));
  BlockEvents.rightClicked((event) => blackListCheck(event.item, event));
  BlockEvents.broken((event) => {
    const block = event.block;
    if (!block) return;
  
    const blockId = block.id;
    const player = event.player;
  
    const blockBlacklisted = isBlacklisted(blockId, player, blockBlacklistedItems);
    if (blockBlacklisted) {
      handleBlacklistedItem(event, blockBlacklisted);
    }
  });
  let flag = true;
  PlayerEvents.inventoryChanged((event) => {
    flag = !flag
    if (flag) return;
    blackListCheck(event.item, event)

  });