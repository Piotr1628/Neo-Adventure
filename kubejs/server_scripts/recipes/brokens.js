ServerEvents.generateData('after_mods', (event) => {
  let brokenrecipes = [
    'garnished:recipe/pecan_pie',
    'farmersdelight:recipe/cutting/echo_door',
    'farmersdelight:recipe/cutting/echo_trapdoor',
    'farmersdelight:recipe/cutting/echo_log',
    'farmersdelight:recipe/cutting/echo_wood',
    'farmersdelight:recipe/cutting/echo_sign',
    'farmersdelight:recipe/cutting/echo_hanging_sign',
    'dungeonsdelight:recipe/cooking/snifferwurst',
    'unusualend:recipe/chorus_planks_via_cutting',
    'unusualend:recipe/chorus_stairs_via_cutting',
    'unusualend:recipe/chorus_slab_via_cutting',
    'unusualend:recipe/chorus_petals_via_cutting',
    'unusualend:recipe/stripped_chorus_cane_block_compa',
    'unusualend:recipe/blob_stew_farmer_delight',
    'unusualend:recipe/chorus_juice_farming_delight',
    'unusualend:recipe/ender_stew_farming_delight',
    'unusualend:recipe/chorus_tea_farming_delight',
    'unusualend:recipe/small_squash_farming_delight',
    'unusualend:recipe/small_squash_farmer_delight',
    'unusualend:recipe/warped_stew_farming_delight',
    'unusualend:recipe/warped_squash_farmer_delight',
    'unusualend:recipe/carved_squash_farmer_delight',
    'dungeonsdelight:recipe/integration/twilightforest/crafting_table/wilderness_luncheon',
    'someassemblyrequired:recipe/crafting_shapeless/raw_burger_bun',
    'createaddition:create/recipes/crushing/ochrum',
    'createaddition:create/recipes/crushing/ochrum_recycling',
    'createaddition:create/recipes/crushing/tuff',
    'createaddition:create/recipes/crushing/tuff_recycling',
  ];

  for (let id of brokenrecipes) {
    event.json(`${id}.json`, {
      'neoforge:conditions': [
        {
          type: 'neoforge:false',
        },
      ],
    });
  }
});
