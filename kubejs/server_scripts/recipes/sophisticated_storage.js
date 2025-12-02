ServerEvents.recipes((event) => {
  event.remove({ id: 'sophisticatedstorage:controller' });
  event
    .shaped('sophisticatedstorage:controller', [' M ', 'MCM', ' M '], {
      M: 'create:precision_mechanism',
      C: 'create:andesite_casing',
    })
    .id('sophisticatedstorage:storage_controller');
});
