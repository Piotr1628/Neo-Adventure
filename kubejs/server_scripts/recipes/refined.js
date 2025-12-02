ServerEvents.recipes((event) => {
  event.shaped(Item.of('refinedstorage:machine_casing', 1), ['ISI', 'SAS', 'ISI'], {
    I: 'create:iron_sheet',
    S: 'create:sturdy_sheet',
    A: 'create:andesite_alloy_block',
  });
  event.remove({
    output: [
      'refinedstorage:controller',
      'refinedstorage:raw_basic_processor',
      'refinedstorage:raw_improved_processor',
      'refinedstorage:raw_advanced_processor',
      'refinedstorage:basic_processor',
      'refinedstorage:improved_processor',
      'refinedstorage:advanced_processor',
      'refinedstorage:machine_casing',
      'create_connected:control_chip',
      'refinedstorage:quartz_enriched_copper',
      'refinedstorage:quartz_enriched_iron',
    ],
  });
  // === REFINED STORAGE CONTROLLER ====
  event.recipes.create.mechanical_crafting('refinedstorage:controller', [' DDD ', 'DSLSD', 'DOCED', 'DSLSD', ' DDD '], {
    D: 'create:sturdy_sheet',
    S: 'eternal_starlight:golem_steel_ingot',
    C: 'refinedstorage:machine_casing',
    L: 'create:electron_tube',
    O: 'refinedstorage:construction_core',
    E: 'refinedstorage:destruction_core',
  });
  // === CORES ===
  event.shapeless(Item.of('refinedstorage:construction_core', 1), ['create:electron_tube', 'eternal_starlight:deepsilver_ingot']);
  event.shapeless(Item.of('refinedstorage:destruction_core', 1), ['create:electron_tube', 'eternal_starlight:thermal_springstone_ingot']);
  // === BASIC PROCESSOR ===
  event.recipes.create
    .sequenced_assembly('refinedstorage:basic_processor', 'create:precision_mechanism', [
      event.recipes.create.deploying('refinedstorage:raw_basic_processor', ['refinedstorage:raw_basic_processor', 'create:iron_sheet']),
      event.recipes.create.deploying('refinedstorage:raw_basic_processor', ['refinedstorage:raw_basic_processor', 'refinedstorage:silicon']),
      event.recipes.create.deploying('refinedstorage:raw_basic_processor', ['refinedstorage:raw_basic_processor', 'create:sturdy_sheet']),
      event.recipes.create.pressing('refinedstorage:raw_basic_processor', 'refinedstorage:raw_basic_processor'),
    ])
    .transitionalItem('refinedstorage:raw_basic_processor')
    .loops(1)
    .id('seq_basic_processor');
  // === IMPROVED PROCESSOR ===
  event.recipes.create
    .sequenced_assembly('refinedstorage:improved_processor', 'create:precision_mechanism', [
      event.recipes.create.deploying('refinedstorage:raw_improved_processor', ['refinedstorage:raw_improved_processor', 'create:golden_sheet']),
      event.recipes.create.deploying('refinedstorage:raw_improved_processor', ['refinedstorage:raw_improved_processor', 'refinedstorage:silicon']),
      event.recipes.create.deploying('refinedstorage:raw_improved_processor', ['refinedstorage:raw_improved_processor', 'create:sturdy_sheet']),
      event.recipes.create.pressing('refinedstorage:raw_improved_processor', 'refinedstorage:raw_improved_processor'),
    ])
    .transitionalItem('refinedstorage:raw_improved_processor')
    .loops(1)
    .id('seq_improved_processor');

  // === ADVANCED PROCESSOR ===
  event.recipes.create
    .sequenced_assembly('refinedstorage:advanced_processor', 'create:precision_mechanism', [
      event.recipes.create.deploying('refinedstorage:raw_advanced_processor', ['refinedstorage:raw_advanced_processor', 'minecraft:diamond']),
      event.recipes.create.deploying('refinedstorage:raw_advanced_processor', ['refinedstorage:raw_advanced_processor', 'refinedstorage:silicon']),
      event.recipes.create.deploying('refinedstorage:raw_advanced_processor', ['refinedstorage:raw_advanced_processor', 'create:sturdy_sheet']),
      event.recipes.create.pressing('refinedstorage:raw_advanced_processor', 'refinedstorage:raw_advanced_processor'),
    ])
    .transitionalItem('refinedstorage:raw_advanced_processor')
    .loops(1)
    .id('seq_advanced_processor');

  // === QUARTZ ENRICHED IRON ===
  event.recipes.create.mixing('refinedstorage:quartz_enriched_iron', ['minecraft:iron_ingot', 'minecraft:quartz']).heated().id('mix_quartz_enriched_iron');

  // === QUARTZ ENRICHED COPPER ===
  event.recipes.create.mixing('refinedstorage:quartz_enriched_copper', ['minecraft:copper_ingot', 'minecraft:quartz']).heated().id('mix_quartz_enriched_copper');
});
