ServerEvents.recipes((event) => {
  event.remove({
    output: [
      'irons_spellbooks:ender_rune',
      'irons_spellbooks:holy_rune',
      'irons_spellbooks:fire_rune',
      'irons_spellbooks:ice_rune',
      'irons_spellbooks:evocation_rune',
      'irons_spellbooks:lightning_rune',
      'irons_spellbooks:blood_rune',
      'irons_spellbooks:nature_rune',
      'irons_spellbooks:shriving_stone',
      'forbidden_arcanus:silver_dragon_scale',
      'forbidden_arcanus:aquatic_dragon_scale',
      'forbidden_arcanus:golden_dragon_scale',
      'ars_nouveau:apprentice_spell_book',
      'ars_nouveau:archmage_spell_book',
      'ars_nouveau:novice_spell_book',
      'irons_spellbooks:iron_spell_book',
      'ars_nouveau:mob_jar',
      'ars_nouveau:jar_of_light',
      'ars_nouveau:splash_flask_cannon',
      'ars_nouveau:enchanters_gauntlet',
      'ars_nouveau:enchanters_fishing_rod',
      'ars_nouveau:dull_trinket',
      'ars_nouveau:amulet_of_mana_boost',
      'ars_nouveau:amulet_of_mana_regen',
      'ars_nouveau:dowsing_rod',
      'ars_nouveau:belt_of_levitation',
      'ars_nouveau:mundane_belt',
      'ars_nouveau:stable_warp_scroll',
      'ars_nouveau:warp_scroll',
      'ars_nouveau:alchemists_crown',
      'ars_nouveau:void_jar',
      'ars_nouveau:potion_flask',
      'ars_nouveau:ring_of_potential',
      'ars_nouveau:ring_of_lesser_discount',
      'ars_nouveau:ring_of_greater_discount',
      'ars_nouveau:belt_of_unstable_gifts',
      'irons_spellbooks:divine_pearl',
      'ars_nouveau:runic_chalk',
      'ars_nouveau:drygmy_charm',
      'hazennstuff:deus_essence',
      'ars_nouveau:source_jar',
      'cataclysm:void_eye',
      'cataclysm:flame_eye',
      'cataclysm:storm_eye',
      'cataclysm:cursed_eye',
      'cataclysm:desert_eye',
      'cataclysm:abyss_eye',
      'cataclysm:monstrous_eye',
      'cataclysm:mech_eye',
      'forbidden_arcanus:utrem_jar',
    ],
  });
});

const runeRecipes = {
  fire: 'fire_rune',
  abjuration: 'ender_rune',
  air: 'holy_rune',
  conjuration: 'ice_rune',
  manipulation: 'evocation_rune',
  water: 'lightning_rune',
  earth: 'nature_rune',
};

ServerEvents.recipes((event) => {
  const makeRuneRecipe = (essence, rune) => {
    event.custom({
      type: 'ars_nouveau:enchanting_apparatus',
      keepNbtOfReagent: false,
      pedestalItems: Array(8).fill({ item: `ars_nouveau:${essence}_essence` }),
      reagent: { item: 'irons_spellbooks:blank_rune' },
      result: {
        count: 1,
        id: `irons_spellbooks:${rune}`,
      },
      sourceCost: 200,
    });
  };
  event.recipes.ars_nouveau.imbuement(['minecraft:gold_ingot'], 'eidolon_repraised:arcane_gold_ingot', 2000, [
    'irons_spellbooks:arcane_essence',
    'irons_spellbooks:arcane_essence',
    'irons_spellbooks:arcane_essence',
    'irons_spellbooks:arcane_essence',
    'irons_spellbooks:arcane_essence',
    'irons_spellbooks:arcane_essence',
    'irons_spellbooks:arcane_essence',
  ]);
  for (const [essence, rune] of Object.entries(runeRecipes)) {
    makeRuneRecipe(essence, rune);
  }
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial', 'irons_spellbooks:blood_vial'],
    'irons_spellbooks:blank_rune',
    'irons_spellbooks:blood_rune',
    1000
  );

  event.replaceInput(
    { mod: 'ars_nouveau' }, // Arg 1: the filter
    'minecraft:gold_ingot', // Arg 2: the item to replace
    'eidolon_repraised:arcane_gold_ingot' // Arg 3: the item to replace it with
  );
  event.replaceInput(
    { mod: 'ars_nouveau' }, // Arg 1: the filter
    'minecraft:gold_nugget', // Arg 2: the item to replace
    'createaddition:electrum_nugget' // Arg 3: the item to replace it with
  );
  event.shapeless(Item.of('ars_nouveau:runic_chalk'), ['ars_nouveau:manipulation_essence', 'minecraft:bone_meal', 'forbidden_arcanus:rune']);

  // Eternal Crystals Recipe Definitions
  const shardRed = 'eternal_starlight:red_starlight_crystal_shard';
  const shardBlue = 'eternal_starlight:blue_starlight_crystal_shard';

  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:fire_essence', 'ars_nouveau:fire_essence', 'ars_nouveau:fire_essence', 'ars_nouveau:manipulation_essence', 'ars_nouveau:manipulation_essence', 'irons_spellbooks:cinder_essence', shardRed],
    'apotheosis:rare_material',
    'eternal_starlight:blaze_crystal',
    2500
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:air_essence', 'ars_nouveau:air_essence', 'ars_nouveau:conjuration_essence', 'ars_nouveau:conjuration_essence', 'irons_spellbooks:cinder_essence', 'irons_spellbooks:cinder_essence', shardBlue],
    'apotheosis:rare_material',
    'eternal_starlight:wind_crystal',
    2500
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:abjuration_essence', 'ars_nouveau:abjuration_essence', 'ars_nouveau:abjuration_essence', 'ars_nouveau:conjuration_essence', 'ars_nouveau:conjuration_essence', 'ars_nouveau:air_essence', shardRed],
    'apotheosis:rare_material',
    'eternal_starlight:light_crystal',
    2500
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:earth_essence', 'ars_nouveau:earth_essence', 'ars_nouveau:earth_essence', 'ars_nouveau:manipulation_essence', 'ars_nouveau:manipulation_essence', 'irons_spellbooks:cinder_essence', shardBlue],
    'apotheosis:rare_material',
    'eternal_starlight:terra_crystal',
    2500
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:water_essence', 'ars_nouveau:water_essence', 'ars_nouveau:abjuration_essence', 'ars_nouveau:abjuration_essence', 'irons_spellbooks:cinder_essence', 'irons_spellbooks:cinder_essence', shardBlue],
    'apotheosis:rare_material',
    'eternal_starlight:water_crystal',
    2500
  );

  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:abjuration_essence', 'ars_nouveau:abjuration_essence', 'ars_nouveau:abjuration_essence', 'ars_nouveau:manipulation_essence', 'ars_nouveau:manipulation_essence', 'irons_spellbooks:cinder_essence', shardBlue],
    'apotheosis:rare_material',
    'eternal_starlight:lunar_crystal',
    2500
  );

  /// EYEEEESS
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['bosses_of_mass_destruction:soul_star', 'irons_spellbooks:lightning_bottle', 'crystal_chronicles:voltite_shard', 'iceandfire:ice_dragon_heart', 'fdbosses:lightning_core', 'iceandfire:ice_dragon_heart', 'crystal_chronicles:voltite_shard', 'irons_spellbooks:lightning_bottle'],
    'eternal_starlight:seeking_eye',
    'cataclysm:storm_eye',
    1000000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['mowziesmobs:ice_crystal', 'irons_spellbooks:ice_venom_vial', 'crystal_chronicles:ice_shard', 'iceandfire:ice_dragon_heart', 'fdbosses:lightning_core', 'iceandfire:ice_dragon_heart', 'crystal_chronicles:ice_shard', 'irons_spellbooks:ice_venom_vial'],
    'eternal_starlight:seeking_eye',
    'cataclysm:cursed_eye',
    1000000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['bosses_of_mass_destruction:soul_star', 'the_bumblezone:ancient_wax_bricks', 'minecraft:sandstone', 'mowziesmobs:earthrend_gauntlet', 'fdbosses:lightning_core', 'mowziesmobs:sol_visage', 'minecraft:sandstone', 'the_bumblezone:ancient_wax_bricks'],
    'eternal_starlight:seeking_eye',
    'cataclysm:desert_eye',
    1000000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['mowziesmobs:wrought_helmet', 'iceandfire:fire_dragon_heart', 'crystal_chronicles:volcanite_shard', 'iceandfire:dragonsteel_fire_ingot', 'fdbosses:lightning_core', 'iceandfire:dragonsteel_fire_ingot', 'crystal_chronicles:volcanite_shard', 'iceandfire:fire_dragon_heart'],
    'eternal_starlight:seeking_eye',
    'cataclysm:flame_eye',
    1000000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'bosses_of_mass_destruction:obsidian_heart',
      'eternal_starlight:golem_steel_ingot',
      'crystal_chronicles:voidstone_shard',
      'eternal_starlight:golem_steel_ingot',
      'fdbosses:lightning_core',
      'eternal_starlight:golem_steel_ingot',
      'crystal_chronicles:voidstone_shard',
      'eternal_starlight:golem_steel_ingot',
    ],
    'eternal_starlight:seeking_eye',
    'cataclysm:void_eye',
    1000000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['bosses_of_mass_destruction:soul_star', 'eternal_starlight:saltpeter_powder', 'unusualend:citrine_chunk', 'eternal_starlight:saltpeter_powder', 'fdbosses:lightning_core', 'eternal_starlight:saltpeter_powder', 'unusualend:citrine_chunk', 'eternal_starlight:saltpeter_powder'],
    'eternal_starlight:seeking_eye',
    'cataclysm:monstrous_eye',
    1000000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['bosses_of_mass_destruction:obsidian_heart', 'minecraft:obsidian', 'crystal_chronicles:voidstone_shard', 'minecraft:obsidian', 'fdbosses:lightning_core', 'minecraft:obsidian', 'crystal_chronicles:voidstone_shard', 'minecraft:obsidian'],
    'eternal_starlight:seeking_eye',
    'cataclysm:abyss_eye',
    1000000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['bosses_of_mass_destruction:obsidian_heart', 'minecraft:obsidian', 'crystal_chronicles:voidstone_shard', 'minecraft:obsidian', 'fdbosses:lightning_core', 'minecraft:obsidian', 'crystal_chronicles:voidstone_shard', 'minecraft:obsidian'],
    'eternal_starlight:seeking_eye',
    'cataclysm:abyss_eye',
    1000000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['bosses_of_mass_destruction:soul_star', 'create:sturdy_sheet', 'refinedstorage:destruction_core', 'create:sturdy_sheet', 'fdbosses:lightning_core', 'create:sturdy_sheet', 'refinedstorage:destruction_core', 'create:sturdy_sheet'],
    'eternal_starlight:seeking_eye',
    'cataclysm:mech_eye',
    1000000
  );

  event.recipes.ars_nouveau.enchanting_apparatus(['the_bumblezone:royal_jelly_bottle', 'unify:silver_block', 'eternal_starlight:silver_pungency_fruit'], 'forbidden_arcanus:dragon_scale', 'forbidden_arcanus:silver_dragon_scale', 100000);
  event.recipes.ars_nouveau.enchanting_apparatus(['the_bumblezone:royal_jelly_bottle', 'eidolon_repraised:arcane_gold_block', 'eternal_starlight:starfire'], 'forbidden_arcanus:dragon_scale', 'forbidden_arcanus:golden_dragon_scale', 100000);
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['the_bumblezone:royal_jelly_bottle', 'ars_nouveau:magebloom_block', 'minecraft:diamond_block', 'minecraft:lapis_block', 'upgrade_aquatic:thrasher_tooth', 'minecraft:lapis_block', 'minecraft:diamond_block', 'ars_nouveau:magebloom_block'],
    'forbidden_arcanus:dragon_scale',
    'forbidden_arcanus:aquatic_dragon_scale',
    20000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'irons_spellbooks:divine_soulshard',
      'forbidden_arcanus:golden_dragon_scale',
      'crystal_chronicles:floralite_shard',
      'crystal_chronicles:volcanite_shard',
      'forbidden_arcanus:aquatic_dragon_scale',
      'crystal_chronicles:voltite_shard',
      'crystal_chronicles:divinite_shard',
      'forbidden_arcanus:silver_dragon_scale',
    ],
    'ars_nouveau:apprentice_spell_book',
    'ars_nouveau:archmage_spell_book',
    2000000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['minecraft:chain', 'minecraft:iron_ingot', 'minecraft:chain', 'minecraft:iron_ingot', 'minecraft:chain', 'minecraft:iron_ingot', 'minecraft:chain', 'minecraft:iron_ingot'],
    'irons_spellbooks:copper_spell_book',
    'irons_spellbooks:iron_spell_book',
    5000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:magebloom_fiber', 'irons_spellbooks:hogskin', 'ars_nouveau:magebloom_fiber', 'forbidden_arcanus:rune', 'ars_nouveau:magebloom_fiber', 'forbidden_arcanus:rune', 'ars_nouveau:magebloom_fiber', 'irons_spellbooks:hogskin'],
    'ars_nouveau:novice_spell_book',
    'ars_nouveau:apprentice_spell_book',
    500000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:source_gem', 'minecraft:blaze_powder', 'ars_nouveau:source_gem', 'minecraft:blaze_powder', 'ars_nouveau:source_gem', 'minecraft:blaze_powder', 'ars_nouveau:source_gem', 'minecraft:blaze_powder'],
    'minecraft:ender_pearl',
    'irons_spellbooks:divine_pearl',
    500
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:source_gem_block', 'minecraft:gold_block', 'create:golden_sheet', 'forbidden_arcanus:deorum_ingot', 'createaddition:iron_rod', 'forbidden_arcanus:deorum_ingot', 'create:golden_sheet', 'minecraft:gold_block'],
    'tide:diamond_fishing_rod',
    'ars_nouveau:enchanters_fishing_rod',
    500
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['minecraft:diamond', 'ars_nouveau:source_gem', 'minecraft:diamond', 'ars_nouveau:conjuration_essence', 'minecraft:diamond', 'ars_nouveau:conjuration_essence', 'minecraft:diamond', 'ars_nouveau:source_gem'],
    'ars_nouveau:dull_trinket',
    'ars_nouveau:amulet_of_mana_boost',
    2000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['forbidden_arcanus:deorum_ingot', 'minecraft:diamond', 'forbidden_arcanus:deorum_ingot', 'ars_nouveau:conjuration_essence', 'minecraft:diamond', 'ars_nouveau:conjuration_essence', 'forbidden_arcanus:deorum_ingot', 'minecraft:diamond'],
    'ars_nouveau:dull_trinket',
    'ars_nouveau:amulet_of_mana_regen',
    2000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(['iceandfire:fire_dragon_blood', 'minecraft:ender_pearl', 'the_bumblezone:honey_crystal_shards', 'minecraft:diamond'], 'eternal_starlight:starfire', 'iceandfire:summoning_crystal_fire', 1000),
    event.recipes.ars_nouveau.enchanting_apparatus(['iceandfire:ice_dragon_blood', 'minecraft:ender_pearl', 'the_bumblezone:honey_crystal_shards', 'minecraft:diamond'], 'iceandfire:sapphire_gem', 'iceandfire:summoning_crystal_ice', 1000),
    event.recipes.ars_nouveau.enchanting_apparatus(['iceandfire:lightning_dragon_blood', 'minecraft:ender_pearl', 'the_bumblezone:honey_crystal_shards', 'minecraft:diamond'], 'minecraft:amethyst_shard', 'iceandfire:summoning_crystal_lightning', 1000),
    event.recipes.ars_nouveau.enchanting_apparatus(
      ['create:golden_sheet', 'create:golden_sheet', 'ars_nouveau:source_gem_block', 'createaddition:iron_rod', 'create:golden_sheet', 'createaddition:iron_rod', 'ars_nouveau:source_gem_block', 'create:golden_sheet'],
      'create:potato_cannon',
      'ars_nouveau:splash_flask_cannon',
      2000
    );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['minecraft:gold_block', 'createaddition:diamond_grit', 'ars_nouveau:source_gem_block', 'create:powdered_obsidian', 'minecraft:gold_block', 'create:powdered_obsidian', 'ars_nouveau:source_gem_block', 'createaddition:diamond_grit'],
    'iceandfire:deathworm_gauntlet_yellow',
    'ars_nouveau:enchanters_gauntlet',
    4000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['create:iron_sheet', 'minecraft:shroomlight', 'mythsandlegends:ethereal_flame', 'minecraft:glowstone', 'create:iron_sheet', 'minecraft:shroomlight', 'mythsandlegends:ethereal_flame', 'minecraft:glowstone'],
    'supplementaries:jar',
    'ars_nouveau:jar_of_light',
    2000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:manipulation_essence', 'ars_nouveau:manipulation_essence', 'ars_nouveau:manipulation_essence', 'ars_nouveau:conjuration_essence', 'ars_nouveau:conjuration_essence', 'ars_nouveau:conjuration_essence', 'ars_nouveau:manipulation_essence', 'ars_nouveau:manipulation_essence'],
    'supplementaries:jar',
    'ars_nouveau:mob_jar',
    500
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:archwood_planks', 'forbidden_arcanus:deorum_ingot', 'ars_nouveau:archwood_planks', 'create:brass_ingot', 'ars_nouveau:archwood_planks', 'create:brass_ingot', 'ars_nouveau:archwood_planks', 'forbidden_arcanus:deorum_ingot'],
    'minecraft:compass',
    'ars_nouveau:dowsing_rod',
    500
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:air_essence', 'iceandfire:amphithere_feather', 'forbidden_arcanus:deorum_ingot', 'forbidden_arcanus:bat_wing', 'forbidden_arcanus:bat_wing', 'forbidden_arcanus:bat_wing', 'forbidden_arcanus:deorum_ingot', 'iceandfire:amphithere_feather'],
    'ars_nouveau:mundane_belt',
    'ars_nouveau:belt_of_levitation',
    2000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['minecraft:glass_bottle', 'minecraft:glass_bottle', 'minecraft:experience_bottle', 'create:golden_sheet', 'create:golden_sheet', 'create:golden_sheet', 'minecraft:experience_bottle', 'minecraft:glass_bottle'],
    'minecraft:golden_helmet',
    'ars_nouveau:alchemists_crown',
    2000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(['ars_nouveau:allow_scroll', 'transmog:void_fragment', 'transmog:void_fragment', 'transmog:void_fragment'], 'supplementaries:jar', 'ars_nouveau:void_jar', 2000);
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['ars_nouveau:source_gem_block', 'forbidden_arcanus:runic_glass', 'forbidden_arcanus:runic_glass', 'forbidden_arcanus:runic_glass', 'forbidden_arcanus:deorum_ingot', 'forbidden_arcanus:runic_glass', 'forbidden_arcanus:runic_glass', 'forbidden_arcanus:runic_glass'],
    'ars_nouveau:potion_jar',
    'ars_nouveau:potion_flask',
    4000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['forbidden_arcanus:deorum_ingot', 'irons_spellbooks:lightning_bottle', 'regions_unexplored:hanging_prismarite', 'illagerinvasion:illusionary_dust', 'illagerinvasion:unusual_dust', 'forbidden_arcanus:aureal_bottle', 'rottencreatures:corrupted_wart', 'iceandfire:amphithere_feather'],
    'ars_nouveau:mundane_belt',
    'ars_nouveau:belt_of_unstable_gifts',
    4000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['minecraft:ender_eye', 'ars_nouveau:source_gem_block', 'createaddition:diamond_grit', 'dungeonsdelight:sculk_polyp', 'minecraft:ender_eye', 'dungeonsdelight:sculk_polyp', 'createaddition:diamond_grit', 'ars_nouveau:source_gem_block'],
    'ars_nouveau:ring_of_potential',
    'ars_nouveau:ring_of_lesser_discount',
    6000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['minecraft:nether_star', 'minecraft:end_crystal', 'minecraft:diamond_block', 'dungeonsdelight:sculk_polyp', 'crystal_chronicles:divinite_shard', 'minecraft:diamond_block', 'minecraft:end_crystal'],
    'ars_nouveau:ring_of_potential',
    'ars_nouveau:ring_of_greater_discount',
    12000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(
    ['minecraft:obsidian', 'ars_nouveau:archwood_door', 'minecraft:ender_eye', 'waystones:warp_dust', 'minecraft:obsidian', 'waystones:warp_dust', 'minecraft:ender_eye', 'ars_nouveau:archwood_door'],
    'ars_nouveau:warp_scroll',
    'ars_nouveau:stable_warp_scroll',
    2000
  );
  event.recipes.ars_nouveau.enchanting_apparatus(['forbidden_arcanus:silver_dragon_scale', 'forbidden_arcanus:golden_dragon_scale', 'forbidden_arcanus:silver_dragon_scale', 'forbidden_arcanus:golden_dragon_scale'], 'ars_nouveau:drygmy_shard', 'ars_nouveau:drygmy_charm', 2000),
    event.recipes.ars_nouveau.enchanting_apparatus(
      ['irons_spellbooks:cinder_essence', 'mythsandlegends:ethereal_flame', 'forbidden_arcanus:corrupti_dust', 'mythsandlegends:ethereal_flame', 'irons_spellbooks:cinder_essence', 'mythsandlegends:ethereal_flame', 'forbidden_arcanus:corrupti_dust', 'mythsandlegends:ethereal_flame'],
      'bosses_of_mass_destruction:ancient_anima',
      'hazennstuff:deus_essence',
      8000
    );
  event.recipes.ars_nouveau.enchanting_apparatus(['forbidden_arcanus:deorum_ingot', 'forbidden_arcanus:deorum_ingot', 'forbidden_arcanus:deorum_ingot', 'forbidden_arcanus:deorum_ingot'], 'supplementaries:jar', 'forbidden_arcanus:utrem_jar', 5000);

  event.shaped(Item.of('ars_nouveau:ring_of_potential', 1), [' S ', 'IGI', ' I '], {
    S: 'create:iron_sheet',
    G: 'ars_nouveau:source_gem',
    I: 'minecraft:iron_nugget',
  });
  event.shaped(Item.of('ars_nouveau:warp_scroll', 4), ['LPS', 'LDS', 'LPS'], {
    L: 'minecraft:lapis_lazuli',
    P: 'minecraft:map',
    S: 'ars_nouveau:source_gem',
    D: 'waystones:warp_dust',
  });
  event.shaped(Item.of('ars_nouveau:mundane_belt', 1), [' L ', 'LGL', 'BLB'], {
    L: 'minecraft:leather',
    B: 'create:brass_ingot',
    G: 'ars_nouveau:source_gem',
  });
  event.shaped(Item.of('ars_nouveau:dull_trinket', 1), [' L ', 'LBL', 'IGI'], {
    L: 'minecraft:leather',
    B: 'create:brass_ingot',
    I: 'iceandfire:silver_nugget',
    G: 'ars_nouveau:source_gem',
  });

  event.shaped(Item.of('ars_nouveau:novice_spell_book', 1), ['WBB', 'WFR', 'WBB'], {
    W: 'minecraft:purple_wool',
    B: 'create:brass_ingot',
    F: 'irons_spellbooks:copper_spell_book',
    R: 'forbidden_arcanus:rune',
  });

  event.shaped(Item.of('ars_nouveau:source_jar', 1), ['SNS', 'IJI', 'III'], {
    S: 'ars_nouveau:archwood_slab',
    N: 'createaddition:electrum_nugget',
    I: 'createaddition:electrum_ingot',
    J: 'supplementaries:jar',
  });
});
