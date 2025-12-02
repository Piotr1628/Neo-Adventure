ServerEvents.recipes((event) => {
  const itemsToRemove = ['forbidden_arcanus:mundabitur_dust', 'deeperdarker:resonarium_plate', 'forbidden_arcanus:deorum_ingot'];
  itemsToRemove.forEach((item) => {
    event.remove({ id: item });
  });

  // Control Chip
  event.replaceInput({ input: 'create_connected:control_chip' }, 'create_connected:control_chip', 'create:precision_mechanism');

  // === MIXING: MUNDABITUR DUST ===
  event.recipes.create.mixing('2x forbidden_arcanus:mundabitur_dust', ['forbidden_arcanus:mundabitur_dust', 'forbidden_arcanus:arcane_crystal_dust', 'iceandfire:pixie_dust']).superheated();
  event.recipes.create.mixing('eidolon_repraised:pewter_ingot', ['minecraft:iron_ingot', 'unify:lead_ingot']).heated();

  // === HEATED COMPACTING: DEORUM INGOT ===
  event.recipes.create.mixing('forbidden_arcanus:deorum_ingot', ['forbidden_arcanus:mundabitur_dust', 'forbidden_arcanus:mundabitur_dust', 'iceandfire:silver_ingot']).superheated().id('compact_deorum');

  // === RESONARIUM PLATE ===
  event.recipes.create.compacting('deeperdarker:resonarium_plate', ['deeperdarker:resonarium', 'mythsandlegends:ethereal_flame']).heated().id('compat_resonarium');
});
