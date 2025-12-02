ServerEvents.recipes((event) => {
  event.remove({
    output: ['hexerei:pestle_and_mortar', 'eidolon_repraised:pewter_blend', 'waystones:warp_stone', 'irons_spellbooks:magic_cloth', 'waystones:warp_dust', 'forbidden_arcanus:dark_nether_star', 'ars_nouveau:magebloom_crop', 'hexerei:herb_jar', 'forbidden_arcanus:corrupti_dust'],
  });

  event.recipes.create.filling('irons_spellbooks:blood_vial', [Fluid.of('hexerei:blood_fluid'), 'minecraft:glass_bottle']);

  event.custom({
    id: 'hexerei:mix_mundabitur',
    type: 'hexerei:pestle_and_mortar',
    ingredients: [
      {
        item: 'minecraft:blaze_powder',
      },
      {
        item: 'forbidden_arcanus:arcane_crystal_dust',
      },
      {
        item: 'iceandfire:pixie_dust',
      },
      {
        item: 'minecraft:redstone',
      },
      {
        item: 'minecraft:gunpowder',
      },
    ],
    output: {
      id: 'forbidden_arcanus:mundabitur_dust',
      count: 2,
    },
    grindingTime: 60,
  });
  event.custom({
    type: 'hexerei:mixingcauldron',
    fluid: {
      fluid: 'minecraft:water',
      id: 'minecraft:water',
      amount: 500,
    },
    ingredients: [
      { item: 'ars_nouveau:magebloom_fiber' },
      { item: 'irons_spellbooks:arcane_essence' },
      { item: 'ars_nouveau:magebloom_fiber' },
      { item: 'forbidden_arcanus:arcane_crystal_dust' },
      { item: 'irons_spellbooks:arcane_essence' },
      { item: 'forbidden_arcanus:arcane_crystal_dust' },
      { item: 'ars_nouveau:magebloom_fiber' },
      { item: 'irons_spellbooks:arcane_essence' },
    ],
    output: {
      id: 'irons_spellbooks:magic_cloth',
      count: 1,
    },
    liquidOutput: {
      fluid: 'minecraft:water',
      amount: 0,
    },
    fluidLevelsConsumed: 500,
  });

  event.custom({
    type: 'hexerei:mixingcauldron',
    fluid: {
      fluid: 'minecraft:water',
      id: 'minecraft:water',
      amount: 500,
    },
    ingredients: [
      { item: 'ars_nouveau:source_gem' },
      { item: 'ars_nouveau:source_gem' },
      { item: 'forbidden_arcanus:arcane_crystal_dust' },
      { item: 'forbidden_arcanus:arcane_crystal_dust' },
      { item: 'forbidden_arcanus:arcane_crystal_dust' },
      { item: 'forbidden_arcanus:arcane_crystal_dust' },
      { item: 'minecraft:ender_pearl' },
      { item: 'minecraft:ender_pearl' },
    ],
    output: {
      id: 'waystones:warp_dust', // Replace with real item
      count: 1,
    },
    liquidOutput: {
      fluid: 'minecraft:water',
      amount: 0,
    },
    fluidLevelsConsumed: 500,
  });

  event.custom({
    type: 'hexerei:mixingcauldron',
    fluid: {
      fluid: 'minecraft:water',
      id: 'minecraft:water',
      amount: 500,
    },
    ingredients: [
      { item: 'ars_nouveau:source_gem' },
      { item: 'hexerei:belladonna_flowers' },
      { item: 'ars_nouveau:source_gem' },
      { item: 'hexerei:belladonna_flowers' },
      { item: 'ars_nouveau:source_gem' },
      { item: 'hexerei:belladonna_flowers' },
      { item: 'ars_nouveau:source_gem' },
      { item: 'hexerei:belladonna_flowers' },
    ],
    output: {
      id: 'ars_nouveau:magebloom_crop', // Replace with real item
      count: 1,
    },
    liquidOutput: {
      fluid: 'minecraft:water',
      amount: 0,
    },
    fluidLevelsConsumed: 500,
  });
  event.shapeless(Item.of('hexerei:herb_jar'), ['supplementaries:jar', 'iceandfire:manuscript']);

  event.custom({
    type: 'hexerei:mixingcauldron',
    fluid: {
      fluid: 'minecraft:water',
      id: 'minecraft:water',
      amount: 500,
    },
    ingredients: [
      { item: 'ars_nouveau:source_gem' },
      { item: 'ars_nouveau:source_gem' },
      { item: 'forbidden_arcanus:arcane_crystal_dust' },
      { item: 'forbidden_arcanus:arcane_crystal_dust' },
      { item: 'forbidden_arcanus:arcane_crystal_dust' },
      { item: 'forbidden_arcanus:arcane_crystal_dust' },
      { item: 'minecraft:ender_pearl' },
      { item: 'minecraft:ender_pearl' },
    ],
    output: {
      id: 'waystones:warp_dust', // Replace with real item
      count: 1,
    },
    liquidOutput: {
      fluid: 'minecraft:water',
      amount: 0,
    },
    fluidLevelsConsumed: 500,
  });
  event.custom({
    type: 'hexerei:mixingcauldron',
    fluid: {
      fluid: 'minecraft:water',
      id: 'minecraft:water',
      amount: 1000,
    },
    ingredients: [
      { item: 'apotheosis:common_material' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'apotheosis:common_material' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
    ],
    output: {
      id: 'irons_spellbooks:common_ink', // Replace with real item
      count: 1,
    },
    liquidOutput: {
      fluid: 'minecraft:water',
      amount: 0,
    },
    fluidLevelsConsumed: 1000,
  });

  event.custom({
    type: 'hexerei:mixingcauldron',
    fluid: {
      fluid: 'minecraft:lava',
      id: 'minecraft:lava',
      amount: 1000,
    },
    ingredients: [
      { item: 'apotheosis:uncommon_material' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'irons_spellbooks:common_ink' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
    ],
    output: {
      id: 'irons_spellbooks:uncommon_ink', // Replace with real item
      count: 1,
    },
    liquidOutput: {
      fluid: 'minecraft:water',
      amount: 0,
    },
    fluidLevelsConsumed: 1000,
  });

  event.custom({
    type: 'hexerei:mixingcauldron',
    fluid: {
      fluid: 'hexerei:blood_fluid',
      id: 'hexerei:blood_fluid',
      amount: 1000,
    },
    ingredients: [
      { item: 'apotheosis:rare_material' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'irons_spellbooks:uncommon_ink' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
    ],
    output: {
      id: 'irons_spellbooks:rare_ink', // Replace with real item
      count: 1,
    },
    liquidOutput: {
      fluid: 'minecraft:water',
      amount: 0,
    },
    fluidLevelsConsumed: 1000,
  });

  event.custom({
    type: 'hexerei:mixingcauldron',
    fluid: {
      fluid: 'eternal_starlight:ether',
      id: 'eternal_starlight:ether',
      amount: 1000,
    },
    ingredients: [
      { item: 'apotheosis:epic_material' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'irons_spellbooks:rare_ink' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
      { item: 'minecraft:glow_ink_sac' },
    ],
    output: {
      id: 'irons_spellbooks:epic_ink', // Replace with real item
      count: 1,
    },
    liquidOutput: {
      fluid: 'minecraft:water',
      amount: 0,
    },
    fluidLevelsConsumed: 1000,
  });
  event.custom({
    type: 'hexerei:mixingcauldron',
    fluid: {
      fluid: 'minecraft:lava',
      id: 'minecraft:lava',
      amount: 1000,
    },
    ingredients: [
      { item: 'forbidden_arcanus:arcane_crystal_dust' },
      { item: 'create:powdered_obsidian' },
      { item: 'mythsandlegends:cursed_core' },
      { item: 'hexerei:dried_sage' },
      { item: 'mythsandlegends:cursed_core' },
      { item: 'hexerei:dried_sage' },
      { item: 'mythsandlegends:cursed_core' },
      { item: 'create:powdered_obsidian' },
    ],
    output: {
      id: 'forbidden_arcanus:corrupti_dust', // Replace with real item
      count: 1,
    },
    liquidOutput: {
      fluid: 'minecraft:lava',
      amount: 0,
    },
    fluidLevelsConsumed: 1000,
  });
  event.shaped(Item.of('waystones:warp_stone'), ['ABA', 'ACA', 'AAA'], {
    C: 'mythsandlegends:cursed_core',
    B: 'irons_spellbooks:divine_soulshard',
    A: 'waystones:warp_dust',
  });
  event.shaped(Item.of('hexerei:pestle_and_mortar'), [' I ', 'SIS', 'SSS'], {
    S: 'minecraft:stone',
    I: 'minecraft:iron_ingot',
  });
  event.custom({
    type: 'hexerei:mixingcauldron',
    fluid: {
      fluid: 'hexerei:blood_fluid',
      id: 'hexerei:blood_fluid',
      amount: 1000,
    },
    ingredients: [
      { item: 'minecraft:nether_star' },
      { item: 'forbidden_arcanus:corrupti_dust' },
      { item: 'forbidden_arcanus:corrupti_dust' },
      { item: 'forbidden_arcanus:corrupti_dust' },
      { item: 'unusualend:shiny_crystal' },
      { item: 'forbidden_arcanus:corrupti_dust' },
      { item: 'forbidden_arcanus:corrupti_dust' },
      { item: 'forbidden_arcanus:corrupti_dust' },
    ],
    output: {
      id: 'forbidden_arcanus:dark_nether_star',
      count: 1,
    },
    liquidOutput: {
      fluid: 'hexerei:blood_fluid',
      amount: 0,
    },
    fluidLevelsConsumed: 1000,
  });
  event.custom({
    id: 'hexerei:pewter_blend',
    type: 'hexerei:pestle_and_mortar',
    ingredients: [
      {
        item: 'unify:lead_ingot',
      },
      {
        item: 'minecraft:iron_ingot',
      },
    ],
    output: {
      id: 'eidolon_repraised:pewter_blend',
      count: 1,
    },
    grindingTime: 200,
  });
});
