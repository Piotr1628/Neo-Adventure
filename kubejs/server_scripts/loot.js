LootJS.modifiers((event) => {
  /// Adding
  event.addTableModifier('deeperdarker:chests/ancient_temple_secret').addLoot('discerning_the_eldritch:amulet_of_sculk_treasure').randomChance(0.3);
  event.addTableModifier('dungeons_arise:chests/aviary/aviary_treasure').addLoot('simplyswords:shadowsting').randomChance(0.3);
  event.addTableModifier('dungeons_arise:chests/shiraz_palace/shiraz_palace_elite').addLoot('simplyswords:caelestis').randomChance(0.3);
  event.addTableModifier('discerning_the_eldritch:chests/cultist_base/treasure_loot').addLoot('simplyswords:ribboncleaver').randomChance(0.08);
  event.addTableModifier('irons_spellbooks:entities/cultist').addLoot(LootEntry.of('discerning_the_eldritch:razor_sheath')).randomChance(0.05);
  event.addTableModifier('deeperdarker:chests/ancient_temple_secret').addLoot('simplyswords:soulkeeper').randomChance(0.3);
  event.addTableModifier('deeperdarker:chests/aviary/aviary_treasure').addLoot('simplyswords:soulrender').randomChance(0.3);
  event.addTableModifier('deeperdarker:chests/ancient_temple_secret').addLoot('simplyswords:soulpyre').randomChance(0.3);
  event.addTableModifier('deeperdarker:chests/ancient_temple_secret').addLoot('simplyswords:soulstealer').randomChance(0.05);
  event.addTableModifier('dungeons_arise:chests/plague_asylum/plague_asylum_treasure').addLoot('simplyswords:toxic_longsword').randomChance(0.01);
  event.addTableModifier('cataclysm:entities/the_harbinger').addLoot('simplyswords:whisperwind').randomChance(0.3);
  event.addTableModifier('bosses_of_mass_destruction:entities/lich').addLoot('simplyswords:slumbering_lichblade').randomChance(0.33);
  event.addTableModifier('bosses_of_mass_destruction:entities/void_blossom').addLoot('simplyswords:bramblethorn').randomChance(0.33);
  event.addTableModifier('cataclysm:chests/frosted_prison_treasure').addLoot('simplyswords:icewhisper').randomChance(0.05);
  event.addTableModifier('cataclysm:chests/frosted_prison_treasure').addLoot('simplyswords:frostfall').randomChance(0.05);
  event.addTableModifier('the_bumblezone:structures/bee_dungeon').addLoot('simplyswords:hiveheart').randomChance(0.01);
  event.addTableModifier('the_bumblezone:structures/bee_dungeon').addLoot('simplyswords:waxweaver').randomChance(0.01);
  event.addTableModifier('the_bumblezone:structures/bee_dungeon').addLoot('simplyswords:wickpiercer').randomChance(0.01);
  event.addTableModifier('dungeons_arise:chests/mechanical_nest_treasure').addLoot('simplyswords:enigma').randomChance(0.01);
  event.addTableModifier('cataclysm:entities/scylla').addLoot('simplyswords:mjolnir').randomChance(0.3);
  event.addTableModifier('cataclysm:entities/scylla').addLoot('simplyswords:livyatan').randomChance(0.3);
  event.addTableModifier('dungeons_arise:chests/plague_asylum/plague_asylum_treasure').addLoot('simplyswords:watcher_claymore').randomChance(0.3);
  event.addTableModifier('cataclysm:entities/the_leviathan').addLoot('simplyswords:watching_warglaive').randomChance(0.3);
  event.addTableModifier('dungeons_arise:chests/kisegi_sanctuary/kisegi_sanctuary_treasure').addLoot('simplyswords:stars_edge').randomChance(0.3);
  event.addTableModifier('minecraft:entities/axolotl').addLoot('simplyswords:chompolotl').randomChance(0.0024); // Weight 0.24 = ~0.24% chance
  event.addTableModifier('dungeons_arise:chests/typhon/typhon_treasure').addLoot('simplyswords:brimstone_claymore').randomChance(0.03);
  event.addTableModifier('dungeons_arise:chests/keep_kayra/keep_kayra_treasure').addLoot('simplyswords:emberblade').randomChance(0.03);
  event.addTableModifier('dungeons_arise:chests/bandit_towers/bandit_towers_treasure').addLoot('simplyswords:emberlash').randomChance(0.03);
  event.addTableModifier('dungeons_arise:chests/foundry/foundry_treasure').addLoot('simplyswords:hearthflame').randomChance(0.03);
  event.addTableModifier('dungeons_arise:chests/mining_system/mining_system_treasure').addLoot('simplyswords:molten_edge').randomChance(0.03);
  event.addTableModifier('dungeons_arise:chests/illager_fort/illager_fort_treasure').addLoot('simplyswords:flamewind').randomChance(0.01);
  event.addTableModifier('irons_spellbooks:chests/citadel/citadel_vault').addLoot('simplyswords:decaying_relic').randomChance(0.01);
  event.addTableModifier('ribbits:chests/sorcerer').addLoot('naturescompass:naturescompass').randomChance(0.4);
  event.addTableModifier('irons_spellbooks:entities/priest').addLoot('forbidden_arcanus:divine_pact').randomChance(0.3);
});
LootJS.lootTables((event) => {
  /// Adding

  /// Removing
  event.getLootTable('discerning_the_eldritch:chests/amulet_of_sculk').firstPool().removeItem('discerning_the_eldritch:amulet_of_sculk_treasure');
  event.getLootTable('irons_spellbooks:entities/additional_hoglin_loot').firstPool().removeItem('irons_spellbooks:hogskin');
  event.getLootTable('irons_spellbooks:chests/citadel/citadel_vault').firstPool().removeItem('irons_spellbooks:decrepit_scythe');
});
