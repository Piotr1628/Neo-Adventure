ServerEvents.recipes((event) => {
  event.recipes.forbidden_arcanus
    .clibano_combustion(
      Item.of('forbidden_arcanus:deorum_ingot') // Output
    )
    .inputs('forbidden_arcanus:mundabitur_dust', 'iceandfire:silver_ingot') // Second input
    .fireType('fire') // Default fire type
    .cookingTime(400) // Default reasonable time (must be > 1)
    .experience(8.0) // Optional XP
    .cookingBookCategory('misc')
    .group('random'); // Optional grouping
});
