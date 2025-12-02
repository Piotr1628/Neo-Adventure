ServerEvents.recipes((event) => {
  event.remove({
    id: 'fdbosses:eye_of_malkuth',
  }),
    event.shaped(Item.of('fdbosses:eye_of_malkuth'), ['IWM', 'IEM', 'IWM'], {
      W: 'hexerei:wax_blend',
      I: 'cataclysm:ignitium_ingot',
      M: 'cataclysm:cursium_ingot',
      E: 'minecraft:ender_eye',
    });

  event.recipes.farmersdelight.cutting('mynethersdelight:hoglin_hide', '#farmersdelight:tools/knives', ['2x irons_spellbooks:hogskin', ChanceResult.of('irons_spellbooks:hogskin', 0.75)]);
});
