ServerEvents.recipes((event) => {
  event.remove({
    mod: 'hazennstuff',
    type: 'minecraft:smithing_transform',
  }),
    event.remove({
      mod: 'crystal_chronicles',
      type: 'minecraft:smithing_transform',
    });
  event.shaped(Item.of('irons_spellbooks:portal_frame'), ['ABA', 'C C', 'C C'], {
    C: 'irons_spellbooks:arcane_ingot',
    B: 'waystones:warp_dust',
    A: 'irons_spellbooks:mithril_ingot',
  });
  event.remove({
    output: [
      'irons_spellbooks:portal_frame',
      'crystal_chronicles:hemalite_shard',
      'crystal_chronicles:ice_shard',
      'crystal_chronicles:floralite_shard',
      'crystal_chronicles:divinite_shard',
      'crystal_chronicles:voidstone_shard',
      'crystal_chronicles:voltite_shard',
      'crystal_chronicles:volcanite_shard',
      'eternal_starlight:terra_crystal',
      'eternal_starlight:wind_crystal',
      'eternal_starlight:water_crystal',
      'eternal_starlight:lunar_crystal',
      'eternal_starlight:blaze_crystal',
      'eternal_starlight:light_crystal',
      'irons_spellbooks:alchemist_cauldron',
    ],
  });
});

ServerEvents.recipes((event) => {
  event.replaceInput(
    { input: 'irons_spellbooks:arcane_essence' }, // Arg 1: the filter
    'irons_spellbooks:arcane_essence', // Arg 2: the item to replace
    'forbidden_arcanus:arcane_crystal_dust' // Arg 3: the item to replace it with
  );
  event.replaceOutput(
    { output: 'irons_spellbooks:arcane_essence' },
    'irons_spellbooks:arcane_essence', // Arg 2: the item to replace
    'forbidden_arcanus:arcane_crystal_dust'
  );
  event.shaped(Item.of('irons_spellbooks:alchemist_cauldron', 1), ['I I', 'ICI', 'ABA'], {
    A: 'forbidden_arcanus:arcane_crystal_dust',
    I: 'create:iron_sheet',
    C: 'minecraft:cauldron',
    B: 'irons_spellbooks:cinder_essence',
  });
  event.shapeless(
    Item.of('irons_spellbooks:shriving_stone'), // arg 1: output
    ['minecraft:raw_iron', 'eternal_starlight:shivering_gel']
  );
});
