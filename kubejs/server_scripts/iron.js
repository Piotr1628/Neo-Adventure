// These two go in server_scripts
PlayerEvents.changeMana((event) => {
  // This makes it so that casting any spell consumes only 10 mana
  if (event.getMagicData().getCastSource() != 'SPELLBOOK') return;
  event.setNewMana(event.getOldMana() - 10);
});

// There is also spellPreCast, which is cancelable
PlayerEvents.spellOnCast((event) => {
  // Casting any spell kills the player who casted it
  event.player.kill();
});
