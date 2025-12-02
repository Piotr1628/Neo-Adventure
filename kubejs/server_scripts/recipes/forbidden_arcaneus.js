ServerEvents.recipes((event) => {
  event.remove({
    output: ['forbidden_arcanus:arcane_crystal_dust'],
  });
  event.recipes.create.milling(['2x forbidden_arcanus:arcane_crystal_dust', CreateItem.of('irons_spellbooks:arcane_essence', 0.5)], 'forbidden_arcanus:arcane_crystal');
  event.custom({
    id: 'hexerei:grinding_arcane_crystal_dust',
    type: 'hexerei:pestle_and_mortar',
    ingredients: [
      {
        item: 'forbidden_arcanus:arcane_crystal_dust',
      },
      {
        item: 'forbidden_arcanus:arcane_crystal_dust',
      },
      {
        item: 'forbidden_arcanus:arcane_crystal_dust',
      },
      {
        item: 'forbidden_arcanus:arcane_crystal_dust',
      },
      {
        item: 'forbidden_arcanus:arcane_crystal_dust',
      },
    ],
    output: {
      id: 'irons_spellbooks:arcane_essence',
      count: 8,
    },
    grindingTime: 120,
  });
});

ServerEvents.recipes((event) => {
  // Converted from charged_scourge_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:charged_scourge_boots').withCount(1)), 'irons_spellbooks:electromancer_boots')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voltite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from charged_scourge_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:charged_scourge_chestplate').withCount(1)), 'irons_spellbooks:electromancer_chestplate')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voltite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from charged_scourge_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:charged_scourge_helmet').withCount(1)), 'irons_spellbooks:electromancer_helmet')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voltite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from charged_scourge_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:electromancer_leggings').withCount(1)), 'irons_spellbooks:electromancer_leggings')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voltite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:electromancer_boots').withCount(1)), 'irons_spellbooks:electromancer_boots')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voltite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from creaking_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:creaking_boots').withCount(1)), 'irons_spellbooks:plagued_boots')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:floralite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from creaking_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:creaking_chestplate').withCount(1)), 'irons_spellbooks:plagued_chestplate')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:floralite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from creaking_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:creaking_helmet').withCount(1)), 'irons_spellbooks:plagued_helmet')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:floralite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from creaking_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:creaking_leggings').withCount(1)), 'irons_spellbooks:plagued_leggings')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:floralite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from cryogenic_ruler_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:cryogenic_ruler_boots').withCount(1)), 'irons_spellbooks:cryomancer_boots')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:ice_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(880, 6, 1280, 410)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from cryogenic_ruler_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:cryogenic_ruler_chestplate').withCount(1)), 'irons_spellbooks:cryomancer_chestplate')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:ice_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(920, 6, 1350, 430)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from cryogenic_ruler_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:cryogenic_ruler_helmet').withCount(1)), 'irons_spellbooks:cryomancer_helmet')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:ice_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(820, 6, 1250, 430)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from cryogenic_ruler_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:cryogenic_ruler_leggings').withCount(1)), 'irons_spellbooks:cryomancer_leggings')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:ice_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 7, 1320, 420)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from cursium_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm:cursium_boots').withCount(1)), 'deeperdarker:warden_boots')
    .addInput('cataclysm:cursium_ingot', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .essences(1100, 6, 1600, 550)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from cursium_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm:cursium_chestplate').withCount(1)), 'deeperdarker:warden_chestplate')
    .addInput('cataclysm:cursium_ingot', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .essences(1400, 9, 1900, 700)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from cursium_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm:cursium_helmet').withCount(1)), 'deeperdarker:warden_helmet')
    .addInput('cataclysm:cursium_ingot', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .essences(1300, 8, 1800, 650)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from cursium_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm:cursium_leggings').withCount(1)), 'deeperdarker:warden_leggings')
    .addInput('cataclysm:cursium_ingot', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .essences(1250, 7, 1750, 600)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from cursium_mage_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm_spellbooks:cursium_mage_boots').withCount(1)), 'irons_spellbooks:netherite_mage_boots')
    .addInput('deeperdarker:warden_carapace', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .essences(1300, 7, 1700, 600)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium', 'forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from cursium_mage_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm_spellbooks:cursium_mage_chestplate').withCount(1)), 'irons_spellbooks:netherite_mage_chestplate')
    .addInput('deeperdarker:warden_carapace', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .essences(1650, 12, 2300, 850)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium', 'forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from cursium_mage_circlet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm_spellbooks:cursium_mage_circlet').withCount(1)), 'irons_spellbooks:netherite_mage_helmet')
    .addInput('deeperdarker:warden_carapace', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .essences(1500, 10, 2100, 730)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium', 'forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from cursium_mage_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm_spellbooks:cursium_mage_skirt').withCount(1)), 'irons_spellbooks:netherite_mage_leggings')
    .addInput('deeperdarker:warden_carapace', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:glacite_block', 1)
    .addInput('iceandfire:dragonsteel_ice_ingot', 1)
    .addInput('cataclysm:cursium_ingot', 1)
    .essences(1400, 9, 1900, 700)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium', 'forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from divinite_shard.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:divinite_shard').withCount(1)), 'minecraft:echo_shard')
    .addInput('irons_spellbooks:divine_pearl', 3)
    .addInput('eternal_starlight:lunar_crystal', 1)
    .addInput('eternal_starlight:light_crystal', 1)
    .addInput('the_bumblezone:honey_crystal', 3)
    .essences(400, 2, 1000, 150)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from draco_arcanus_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('forbidden_arcanus:draco_arcanus_boots').withCount(1)), 'minecraft:diamond_boots')
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('apothic_enchanting:infused_breath', 1)
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('minecraft:netherite_ingot', 1)
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('minecraft:netherite_ingot', 1)
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('apothic_enchanting:infused_breath', 1)
    .essences(1050, 6, 1500, 500)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from draco_arcanus_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('forbidden_arcanus:draco_arcanus_chestplate').withCount(1)), 'minecraft:diamond_chestplate')
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('apothic_enchanting:infused_breath', 1)
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('minecraft:netherite_ingot', 1)
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('minecraft:netherite_ingot', 1)
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('apothic_enchanting:infused_breath', 1)
    .essences(1150, 7, 1600, 550)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from draco_arcanus_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('forbidden_arcanus:draco_arcanus_helmet').withCount(1)), 'minecraft:diamond_helmet')
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('apothic_enchanting:infused_breath', 1)
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('minecraft:netherite_ingot', 1)
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('minecraft:netherite_ingot', 1)
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('apothic_enchanting:infused_breath', 1)
    .essences(1000, 6, 1400, 500)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from draco_arcanus_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('forbidden_arcanus:draco_arcanus_leggings').withCount(1)), 'minecraft:diamond_leggings')
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('apothic_enchanting:infused_breath', 1)
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('minecraft:netherite_ingot', 1)
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('minecraft:netherite_ingot', 1)
    .addInput('forbidden_arcanus:dragon_scale', 1)
    .addInput('apothic_enchanting:infused_breath', 1)
    .essences(1100, 6, 1550, 525)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from electromancer_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:charged_scourge_boots').withCount(1)), 'irons_spellbooks:electromancer_boots')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voltite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from electromancer_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:electromancer_chestplate').withCount(1)), 'irons_spellbooks:electromancer_chestplate')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voltite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from electromancer_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:electromancer_helmet').withCount(1)), 'irons_spellbooks:electromancer_helmet')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voltite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from electromancer_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:charged_scourge_chestplate').withCount(1)), 'irons_spellbooks:electromancer_chestplate')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voltite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ender_dragon_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:ender_dragon_boots').withCount(1)), 'irons_spellbooks:shadowwalker_boots')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voidstone_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ender_dragon_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:ender_dragon_chestplate').withCount(1)), 'irons_spellbooks:shadowwalker_chestplate')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voidstone_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ender_dragon_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:ender_dragon_helmet').withCount(1)), 'irons_spellbooks:shadowwalker_helmet')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voidstone_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ender_dragon_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:ender_dragon_leggings').withCount(1)), 'irons_spellbooks:shadowwalker_leggings')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voidstone_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from flesh_mass_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:flesh_mass_boots').withCount(1)), 'irons_spellbooks:cultist_boots')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:hemalite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(280, 3, 1200, 150)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from flesh_mass_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:flesh_mass_chestplate').withCount(1)), 'irons_spellbooks:cultist_chestplate')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:hemalite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(750, 4, 1150, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from flesh_mass_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:flesh_mass_helmet').withCount(1)), 'irons_spellbooks:cultist_helmet')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:hemalite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(700, 4, 1100, 380)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from flesh_mass_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:flesh_mass_leggings').withCount(1)), 'irons_spellbooks:cultist_leggings')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:hemalite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(720, 4, 1130, 390)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from floralite_shard.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:floralite_shard').withCount(1)), 'minecraft:echo_shard')
    .addInput('eternal_starlight:terra_crystal', 1)
    .addInput('forbidden_arcanus:mundabitur_dust', 3)
    .addInput('farmersdelight:organic_compost', 3)
    .addInput('eternal_starlight:wind_crystal', 1)
    .essences(320, 2, 900, 80)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from hemalite_shard.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:hemalite_shard').withCount(1)), 'minecraft:echo_shard')
    .addInput('irons_spellbooks:blood_vial', 3)
    .addInput('eternal_starlight:blaze_crystal', 1)
    .addInput('eternal_starlight:terra_crystal', 1)
    .addInput('hexerei:blood_sigil', 3)
    .essences(300, 4, 1500, 100)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from hemomacer_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:rogue_helmet').withCount(1)), 'irons_spellbooks:cultist_helmet')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:hemalite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(700, 4, 1100, 380)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from hemomancer_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:rogue_boots').withCount(1)), 'irons_spellbooks:cultist_boots')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:hemalite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(700, 4, 1100, 380)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from hemomancer_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:rogue_chestplate').withCount(1)), 'irons_spellbooks:cultist_chestplate')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:hemalite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(750, 4, 1150, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from hemomancer_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:rogue_leggings').withCount(1)), 'irons_spellbooks:cultist_leggings')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:hemalite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(720, 4, 1130, 390)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ice_shard.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:ice_shard').withCount(1)), 'minecraft:echo_shard')
    .addInput('eternal_starlight:lunar_crystal', 1)
    .addInput('ars_nouveau:frostaya_pod', 3)
    .addInput('irons_spellbooks:frozen_bone', 3)
    .addInput('eternal_starlight:water_crystal', 1)
    .essences(270, 2, 600, 120)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ignis_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm_spellbooks:ignis_boots').withCount(1)), 'irons_spellbooks:netherite_mage_boots')
    .addInput('deeperdarker:warden_carapace', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .essences(1450, 9, 2000, 700)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium', 'forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ignis_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm_spellbooks:ignis_chestplate').withCount(1)), 'irons_spellbooks:netherite_mage_chestplate')
    .addInput('deeperdarker:warden_carapace', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .essences(1600, 10, 2100, 750)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium', 'forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ignis_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm_spellbooks:ignis_helmet').withCount(1)), 'irons_spellbooks:netherite_mage_helmet')
    .addInput('deeperdarker:warden_carapace', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .essences(1400, 9, 1900, 700)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium', 'forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ignis_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm_spellbooks:ignis_leggings').withCount(1)), 'irons_spellbooks:netherite_mage_leggings')
    .addInput('deeperdarker:warden_carapace', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .essences(1500, 9, 2050, 725)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium', 'forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ignitium_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm:ignitium_boots').withCount(1)), 'deeperdarker:warden_boots')
    .addInput('cataclysm:ignitium_ingot', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .essences(1250, 7, 1750, 580)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ignitium_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm:ignitium_chestplate').withCount(1)), 'deeperdarker:warden_chestplate')
    .addInput('cataclysm:ignitium_ingot', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .essences(1400, 9, 2000, 700)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ignitium_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm:ignitium_helmet').withCount(1)), 'deeperdarker:warden_helmet')
    .addInput('cataclysm:ignitium_ingot', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .essences(1300, 8, 1800, 600)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from ignitium_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('cataclysm:ignitium_leggings').withCount(1)), 'deeperdarker:warden_leggings')
    .addInput('cataclysm:ignitium_ingot', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('minecraft:leather_boots', 1)
    .addInput('eternal_starlight:starcore_block', 1)
    .addInput('iceandfire:dragonsteel_fire_ingot', 1)
    .addInput('cataclysm:ignitium_ingot', 1)
    .essences(1350, 8, 1900, 650)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from mage_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:mage_boots').withCount(1)), 'irons_spellbooks:shadowwalker_boots')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voidstone_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from mage_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:mage_chestplate').withCount(1)), 'irons_spellbooks:shadowwalker_chestplate')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voidstone_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from mage_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:mage_helmet').withCount(1)), 'irons_spellbooks:shadowwalker_helmet')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voidstone_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from mage_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:mage_leggings').withCount(1)), 'irons_spellbooks:shadowwalker_leggings')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:voidstone_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from netherite_mage_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('irons_spellbooks:netherite_mage_boots').withCount(1)), 'minecraft:netherite_boots')
    .addInput('minecraft:ghast_tear', 1)
    .addInput('eternal_starlight:starfire', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('irons_spellbooks:magic_cloth', 1)
    .addInput('irons_spellbooks:magic_cloth', 1)
    .addInput('irons_spellbooks:magic_cloth', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:starfire', 1)
    .essences(600, 3, 950, 250)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from netherite_mage_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('irons_spellbooks:netherite_mage_chestplate').withCount(1)), 'minecraft:netherite_chestplate')
    .addInput('minecraft:ghast_tear', 1)
    .addInput('eternal_starlight:starfire', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('irons_spellbooks:magic_cloth', 1)
    .addInput('irons_spellbooks:magic_cloth', 1)
    .addInput('irons_spellbooks:magic_cloth', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:starfire', 1)
    .essences(1000, 8, 1600, 500)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from netherite_mage_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('irons_spellbooks:netherite_mage_helmet').withCount(1)), 'minecraft:netherite_helmet')
    .addInput('minecraft:ghast_tear', 1)
    .addInput('eternal_starlight:starfire', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('irons_spellbooks:magic_cloth', 1)
    .addInput('irons_spellbooks:magic_cloth', 1)
    .addInput('irons_spellbooks:magic_cloth', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:starfire', 1)
    .essences(900, 6, 1300, 450)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from netherite_mage_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('irons_spellbooks:netherite_mage_leggings').withCount(1)), 'minecraft:netherite_leggings')
    .addInput('minecraft:ghast_tear', 1)
    .addInput('eternal_starlight:starfire', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('irons_spellbooks:magic_cloth', 1)
    .addInput('irons_spellbooks:magic_cloth', 1)
    .addInput('irons_spellbooks:magic_cloth', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:starfire', 1)
    .essences(850, 6, 1350, 400)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from paladin_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:paladin_boots').withCount(1)), 'irons_spellbooks:priest_boots')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:divinite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from paladin_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:paladin_chestplate').withCount(1)), 'irons_spellbooks:priest_chestplate')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:divinite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from paladin_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:paladin_helmet').withCount(1)), 'irons_spellbooks:priest_helmet')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:divinite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from paladin_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:paladin_leggings').withCount(1)), 'irons_spellbooks:priest_leggings')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:divinite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(850, 5, 1250, 430)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from pyromacer_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:pyromancer_boots').withCount(1)), 'irons_spellbooks:pyromancer_boots')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:volcanite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(760, 4, 1150, 390)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from pyromacer_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:pyromancer_chestplate').withCount(1)), 'irons_spellbooks:pyromancer_chestplate')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:volcanite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(870, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from pyromacer_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:pyromancer_helmet').withCount(1)), 'irons_spellbooks:pyromancer_helmet')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:volcanite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(870, 5, 1100, 410)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from pyromacer_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:pyromancer_leggings').withCount(1)), 'irons_spellbooks:pyromancer_leggings')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:volcanite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 420)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from reforging_table.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('apotheosis:reforging_table').withCount(1)), 'apotheosis:simple_reforging_table')
    .addInput('cataclysm:void_core', 1)
    .addInput('mythsandlegends:cursed_core', 7)
    .essences(1350, 8, 1900, 650)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium', 'forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_chakram.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_chakram').withCount(1)), 'simplyswords:netherite_chakram')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_chakram_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_chakram').withCount(1)), 'simplyswords:runic_chakram')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(500, 5, 500, 100)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_claymore.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_claymore').withCount(1)), 'simplyswords:netherite_claymore')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_claymore_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_claymore').withCount(1)), 'simplyswords:runic_claymore')
    .addInput('forbidden_arcanus:arcane_crystal_dust', 2)
    .addInput('forbidden_arcanus:rune', 2)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_cutlass.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_cutlass').withCount(1)), 'simplyswords:netherite_cutlass')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_cutlass_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_cutlass').withCount(1)), 'simplyswords:runic_cutlass')
    .addInput('forbidden_arcanus:arcane_crystal_dust', 2)
    .addInput('forbidden_arcanus:rune', 2)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_glaive.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_glaive').withCount(1)), 'simplyswords:netherite_glaive')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_glaive_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_glaive').withCount(1)), 'simplyswords:runic_glaive')
    .addInput('forbidden_arcanus:arcane_crystal_dust', 2)
    .addInput('forbidden_arcanus:rune', 2)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_greataxe.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_greataxe').withCount(1)), 'simplyswords:netherite_greataxe')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_greataxe_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_greataxe').withCount(1)), 'simplyswords:runic_greataxe')
    .addInput('forbidden_arcanus:arcane_crystal_dust', 2)
    .addInput('forbidden_arcanus:rune', 2)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_greathammer.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_greathammer').withCount(1)), 'simplyswords:netherite_greathammer')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_greathammer_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_greathammer').withCount(1)), 'simplyswords:runic_greathammer')
    .addInput('forbidden_arcanus:arcane_crystal_dust', 2)
    .addInput('forbidden_arcanus:rune', 2)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_halberd.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_halberd').withCount(1)), 'simplyswords:netherite_halberd')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_halberd_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_halberd').withCount(1)), 'simplyswords:runic_halberd')
    .addInput('forbidden_arcanus:arcane_crystal_dust', 2)
    .addInput('forbidden_arcanus:rune', 2)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_katana.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_katana').withCount(1)), 'simplyswords:netherite_katana')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_katana_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_katana').withCount(1)), 'simplyswords:runic_katana')
    .addInput('forbidden_arcanus:arcane_crystal_dust', 2)
    .addInput('forbidden_arcanus:rune', 2)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_longsword.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_longsword').withCount(1)), 'simplyswords:netherite_longsword')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_longsword_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_longsword').withCount(1)), 'simplyswords:runic_longsword')
    .addInput('forbidden_arcanus:arcane_crystal_dust', 2)
    .addInput('forbidden_arcanus:rune', 2)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_rapier.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_rapier').withCount(1)), 'simplyswords:netherite_rapier')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_rapier_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_rapier').withCount(1)), 'simplyswords:runic_rapier')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_sai.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_sai').withCount(1)), 'simplyswords:netherite_sai')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_sai_netherite.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_sai').withCount(1)), 'simplyswords:netherite_sai')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_sai_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_sai').withCount(1)), 'simplyswords:runic_sai')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_scythe.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_scythe').withCount(1)), 'simplyswords:netherite_scythe')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_scythe_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_scythe').withCount(1)), 'simplyswords:runic_scythe')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_spear.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_spear').withCount(1)), 'simplyswords:netherite_spear')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_spear_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_spear').withCount(1)), 'simplyswords:runic_spear')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_tablet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_tablet').withCount(1)), 'forbidden_arcanus:stellarite_piece')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(500, 1, 0, 0)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_twinblade.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_twinblade').withCount(1)), 'simplyswords:netherite_twinblade')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_twinblade_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_twinblade').withCount(1)), 'simplyswords:runic_twinblade')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_warglaive.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_warglaive').withCount(1)), 'simplyswords:netherite_warglaive')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(1000, 10, 1000, 750)
    .tier(2)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from runic_warglaive_reroll.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('simplyswords:runic_warglaive').withCount(1)), 'simplyswords:runic_warglaive')
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .addInput('forbidden_arcanus:rune', 1)
    .addInput('hazennstuff:runestone_fragments', 1)
    .essences(500, 5, 500, 100)
    .tier(3)
    .matchTierExact(false)
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from seraph_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:seraph_boots').withCount(1)), 'irons_spellbooks:priest_boots')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:divinite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from seraph_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:seraph_chestplate').withCount(1)), 'irons_spellbooks:priest_chestplate')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:divinite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(900, 6, 1300, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from seraph_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:seraph_helmet').withCount(1)), 'irons_spellbooks:priest_helmet')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:divinite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from seraph_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:seraph_leggings').withCount(1)), 'irons_spellbooks:priest_leggings')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:divinite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(850, 5, 1250, 430)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from soul_flame_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:soul_flame_boots').withCount(1)), 'irons_spellbooks:pyromancer_boots')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:volcanite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(1000, 6, 1450, 470)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from soul_flame_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:soul_flame_chestplate').withCount(1)), 'irons_spellbooks:pyromancer_chestplate')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:volcanite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(1100, 7, 1600, 500)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from soul_flame_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:soul_flame_helmet').withCount(1)), 'irons_spellbooks:pyromancer_helmet')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:volcanite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(930, 7, 1350, 450)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from soul_flame_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('hazennstuff:soul_flame_leggings').withCount(1)), 'irons_spellbooks:pyromancer_leggings')
    .addInput('forbidden_arcanus:dark_nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:volcanite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(1020, 6, 1500, 480)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:maledictus_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from tank_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:tank_boots').withCount(1)), 'irons_spellbooks:cryomancer_boots')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:ice_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(760, 5, 1100, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from tank_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:tank_chestplate').withCount(1)), 'irons_spellbooks:cryomancer_chestplate')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:ice_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 420)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from tank_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:tank_helmet').withCount(1)), 'irons_spellbooks:cryomancer_helmet')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:ice_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(780, 5, 1150, 410)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from tank_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:tank_leggings').withCount(1)), 'irons_spellbooks:cryomancer_leggings')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:ice_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(780, 6, 1150, 410)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from toxic_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:toxic_boots').withCount(1)), 'irons_spellbooks:plagued_boots')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:floralite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from toxic_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:toxic_chestplate').withCount(1)), 'irons_spellbooks:plagued_chestplate')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:floralite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from toxic_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:toxic_helmet').withCount(1)), 'irons_spellbooks:plagued_helmet')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:floralite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from toxic_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:toxic_leggings').withCount(1)), 'irons_spellbooks:plagued_leggings')
    .addInput('minecraft:nether_star', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('crystal_chronicles:floralite_shard', 1)
    .addInput('the_bumblezone:royal_jelly_bottle', 1)
    .addInput('irons_spellbooks:mithril_weave', 1)
    .addInput('eternal_starlight:aethersent_ingot', 1)
    .essences(800, 5, 1200, 400)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from tyr_boots.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('forbidden_arcanus:tyr_boots').withCount(1)), 'minecraft:netherite_boots')
    .addInput('cataclysm:ancient_metal_block', 1)
    .addInput('forbidden_arcanus:aquatic_dragon_scale', 1)
    .addInput('cataclysm:ancient_metal_block', 1)
    .addInput('forbidden_arcanus:golden_dragon_scale', 1)
    .addInput('irons_spellbooks:holy_upgrade_orb', 1)
    .addInput('forbidden_arcanus:golden_dragon_scale', 1)
    .addInput('cataclysm:ancient_metal_block', 1)
    .addInput('forbidden_arcanus:aquatic_dragon_scale', 1)
    .essences(1100, 6, 1600, 550)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from tyr_chestplate.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('forbidden_arcanus:tyr_chestplate').withCount(1)), 'minecraft:netherite_chestplate')
    .addInput('cataclysm:ancient_metal_block', 1)
    .addInput('forbidden_arcanus:aquatic_dragon_scale', 1)
    .addInput('cataclysm:ancient_metal_block', 1)
    .addInput('forbidden_arcanus:golden_dragon_scale', 1)
    .addInput('irons_spellbooks:holy_upgrade_orb', 1)
    .addInput('forbidden_arcanus:golden_dragon_scale', 1)
    .addInput('cataclysm:ancient_metal_block', 1)
    .addInput('forbidden_arcanus:aquatic_dragon_scale', 1)
    .essences(1400, 9, 1900, 700)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from tyr_helmet.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('forbidden_arcanus:tyr_helmet').withCount(1)), 'minecraft:netherite_helmet')
    .addInput('cataclysm:ancient_metal_block', 1)
    .addInput('forbidden_arcanus:aquatic_dragon_scale', 1)
    .addInput('cataclysm:ancient_metal_block', 1)
    .addInput('forbidden_arcanus:golden_dragon_scale', 1)
    .addInput('irons_spellbooks:holy_upgrade_orb', 1)
    .addInput('forbidden_arcanus:golden_dragon_scale', 1)
    .addInput('cataclysm:ancient_metal_block', 1)
    .addInput('forbidden_arcanus:aquatic_dragon_scale', 1)
    .essences(1200, 6, 1600, 500)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from tyr_leggins.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('forbidden_arcanus:tyr_leggings').withCount(1)), 'minecraft:netherite_leggings')
    .addInput('cataclysm:ancient_metal_block', 1)
    .addInput('forbidden_arcanus:aquatic_dragon_scale', 1)
    .addInput('cataclysm:ancient_metal_block', 1)
    .addInput('forbidden_arcanus:golden_dragon_scale', 1)
    .addInput('irons_spellbooks:holy_upgrade_orb', 1)
    .addInput('forbidden_arcanus:golden_dragon_scale', 1)
    .addInput('cataclysm:ancient_metal_block', 1)
    .addInput('forbidden_arcanus:aquatic_dragon_scale', 1)
    .essences(1250, 7, 1750, 600)
    .tier(4)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:divine_pact')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from voidstone_shard.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:voidstone_shard').withCount(1)), 'minecraft:echo_shard')
    .addInput('minecraft:ender_pearl', 3)
    .addInput('eternal_starlight:lunar_berries', 3)
    .addInput('eternal_starlight:wind_crystal', 1)
    .addInput('eternal_starlight:lunar_crystal', 1)
    .essences(350, 5, 800, 250)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from volcanite_shard.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:volcanite_shard').withCount(1)), 'minecraft:echo_shard')
    .addInput('eternal_starlight:blaze_crystal', 1)
    .addInput('forbidden_arcanus:mundabitur_dust', 3)
    .addInput('eternal_starlight:starfire', 3)
    .addInput('eternal_starlight:light_crystal', 1)
    .essences(280, 3, 1200, 150)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');

  // Converted from voltite_shard.json
  event.recipes.forbidden_arcanus
    .ritual(RitualResults.ofCreateItemResult(Item.of('crystal_chronicles:voltite_shard').withCount(1)), 'minecraft:echo_shard')
    .addInput('irons_spellbooks:lightning_bottle', 3)
    .addInput('eternal_starlight:wind_crystal', 1)
    .addInput('minecraft:glowstone_dust', 3)
    .addInput('eternal_starlight:blaze_crystal', 1)
    .essences(330, 2, 700, 180)
    .tier(3)
    .matchTierExact(false)
    .enhancers('forbidden_arcanus:elementarium')
    .magicCircles('forbidden_arcanus:create_item');
});
