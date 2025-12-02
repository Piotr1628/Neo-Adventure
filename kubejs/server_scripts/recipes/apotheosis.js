ServerEvents.recipes((event) => {
  event.remove({
    output: [
      'apotheosis:simple_reforging_table',
      'apotheosis:reforging_table',
      'apothic_enchanting:hellshelf',
      'apothic_enchanting:glowing_hellshelf',
      'apothic_enchanting:blazing_hellshelf',
      'apothic_enchanting:sightshelf',
      'apothic_enchanting:library',
      'apothic_enchanting:ender_library',
      'apothic_enchanting:endshelf',
      'apothic_enchanting:draconic_endshelf',
      'apothic_enchanting:pearl_endshelf',
      'apothic_enchanting:treasure_shelf',
      'apothic_enchanting:dormant_deepshelf',
      'apothic_enchanting:scrap_tome',
    ],
  }),
    event.shaped('4x apothic_enchanting:scrap_tome', ['IBI', 'BAB', 'IBI'], {
      B: 'minecraft:book',
      I: 'minecraft:netherite_ingot',
      A: 'minecraft:anvil',
    }),
    event.shaped(Item.of('apothic_enchanting:hellshelf', 1), ['NNN', 'ABC', 'NNN'], {
      N: 'minecraft:nether_bricks',
      A: 'forbidden_arcanus:deorum_block',
      B: 'eternalnether:netherite_bell',
      C: 'mynethersdelight:hoglin_hide',
    });
  event.shaped(Item.of('apotheosis:simple_reforging_table', 1), ['ISI', 'WEW', 'WPW'], {
    I: 'ars_nouveau:source_gem',
    S: 'forbidden_arcanus:iron_blacksmith_gavel',
    E: 'mythsandlegends:cursed_core',
    W: 'minecraft:stone',
    P: 'hexerei:witch_hazel_planks',
  });
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['mythsandlegends:ethereal_flame', 'eternal_starlight:saltpeter_powder', 'mythsandlegends:ethereal_flame', 'eternal_starlight:saltpeter_powder', 'mythsandlegends:ethereal_flame', 'eternal_starlight:saltpeter_powder', 'mythsandlegends:ethereal_flame'],
    'apothic_enchanting:infused_hellshelf',
    'apothic_enchanting:glowing_hellshelf',
    1000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(['create:blaze_cake', 'eternal_starlight:starfire', 'eternal_starlight:starfire', 'create:blaze_cake', 'create:blaze_cake', 'eternal_starlight:starfire'], 'apothic_enchanting:infused_hellshelf', 'apothic_enchanting:blazing_hellshelf', 1000);
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['createaddition:electrum_block', 'apothic_enchanting:infused_hellshelf', 'apothic_enchanting:infused_hellshelf', 'minecraft:golden_carrot', 'createaddition:electrum_block', 'hexerei:reading_glasses', 'createaddition:electrum_block', 'createaddition:electrum_block'],
    'cataclysm:flame_eye',
    'apothic_enchanting:sightshelf',
    2000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['minecraft:deepslate_tiles', 'minecraft:deepslate_tiles', 'minecraft:book', 'minecraft:deepslate_tiles', 'minecraft:deepslate_tiles', 'minecraft:deepslate_tiles', 'minecraft:book', 'minecraft:deepslate_tiles'],
    'discerning_the_eldritch:ironbound_feather',
    'apothic_enchanting:dormant_deepshelf',
    4000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'apothic_enchanting:deepshelf',
      'forbidden_arcanus:arcane_crystal_block',
      'cataclysm:ancient_metal_block',
      'forbidden_arcanus:arcane_crystal_block',
      'apothic_enchanting:deepshelf',
      'forbidden_arcanus:arcane_crystal_block',
      'cataclysm:ancient_metal_block',
      'forbidden_arcanus:arcane_crystal_block',
    ],
    'forbidden_arcanus:deorum_block',
    'apothic_enchanting:treasure_shelf',
    10000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['apothic_enchanting:infused_breath', 'minecraft:end_stone_bricks', 'minecraft:end_stone_bricks', 'minecraft:end_stone_bricks', 'unusualend:shulker_orb', 'minecraft:end_stone_bricks', 'minecraft:end_stone_bricks', 'minecraft:end_stone_bricks'],
    'apothic_enchanting:soul_touched_sculkshelf',
    'apothic_enchanting:endshelf',
    40000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['minecraft:dragon_head', 'minecraft:end_stone_bricks', 'apotheosis:mythic_material', 'irons_spellbooks:divine_soulshard', 'apotheosis:mythic_material', 'irons_spellbooks:divine_soulshard', 'apotheosis:mythic_material', 'minecraft:end_stone_bricks'],
    'apothic_enchanting:pearl_endshelf',
    'apothic_enchanting:draconic_endshelf',
    40000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['apotheosis:mythic_material', 'minecraft:ender_pearl', 'apotheosis:mythic_material', 'minecraft:ender_pearl', 'apotheosis:mythic_material', 'minecraft:ender_pearl', 'apotheosis:mythic_material', 'minecraft:ender_pearl'],
    'apothic_enchanting:endshelf',
    'apothic_enchanting:pearl_endshelf',
    20000
  );
});
