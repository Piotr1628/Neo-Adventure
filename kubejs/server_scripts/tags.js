ServerEvents.tags('item', (event) => {
  event.add('c:foods/dough', 'create:dough');
  event.add('neoadv:opac_whitelist', ['#waystones:waystones']);
  event.add('numismatics:coins', ['magic_coins:gold_coin']);
});

ServerEvents.tags('block', (event) => {
  event.add('irons_spellbooks:spectral_hammer_mineable', ['#eternal_starlight:base_stone_starlight', '#iceandfire:charred_blocks']);
  event.add('neoadv:opac_whitelist', ['#waystones:waystones', 'numismatics:vendor', 'numismatics:bank_terminal', 'create:contraption_controls']);
});

ServerEvents.tags('entity_type', (event) => {
  event.add('neoadv:cataclysm_entities', ['#cataclysm:team_scylla', '#cataclysm:team_the_harbinger', '#cataclysm:team_ender_guardian', '#cataclysm:team_the_harbinger', '#cataclysm:team_ignis', '#cataclysm:team_maledictus', '#cataclysm:team_monstrosity', '#cataclysm:team_ancient_remnant']);
  event.add('neoadv:summons', [
    'ars_nouveau:summon_wolf',
    'ars_nouveau:summoned_skeleton',
    'irons_spellbooks:summmoned_sword',
    'irons_spellbooks:summmoned_rapier',
    'irons_spellbooks:summmoned_vex',
    'irons_spellbooks:summmoned_claymore',
    'irons_spellbooks:summmoned_sword',
    'irons_spellbooks:summmoned_polar_bear',
    'irons_spellbooks:summmoned_sword',
    'cataclysm_spellooks:summoned_ignited_berserker',
    'cataclysm_spellooks:summoned_ignited_revenant',
    'cataclysm_spellooks:summoned_royal_draugur',
    'cataclysm_spellooks:summoned_elite_draugur',
    'cataclysm_spellooks:summoned_amethyst_crab',
    'cataclysm_spellooks:summoned_koboldiator',
    'cataclysm_spellooks:summoned_koboleton',
    'cataclysm_spellooks:summoned_aptrgangr',
    'cataclysm_spellooks:summoned_draugur',
    'gtbcs_geomacy_plus:summoned_naga',
  ]);
  event.add('neoadv:scaling_blacklist', [
    '#neoadv:summons',
    '#neoadv:cataclysm_entities',
    'irons_spellbooks:fire_boss',
    'cataclysm:netherite_monstrosity',
    'eternal_starlight:starlight_golem',
    'eternal_starlight:lunar_monstrosity',
    'bosses_of_mass_destruction:lich',
    'bosses_of_mass_destruction:obsidilith',
    'irons_spellbooks:dead_king',
    'discerning_the_eldritch:ascended_one',
    'ars_nouveau:wilden_boss',
    'born_in_chaos_v1:maggot',
    'born_in_chaos_v1:corpse_fly',
    'discerning_the_eldritch:gaoler',
  ]);

  event.add('forbidden_arcanus:quantum_catcher_blacklisted', ['#neoadv:scaling_blacklist']);
  event.add('iceandfire:immune_to_gorgon_stone', ['#discerning_the_eldritch:apothic_allies', 'forbidden_arcanus:quantum_catcher_blacklisted']);
  event.add('respawninganimals:persistent_animals', ['ars_nouveau:drygmy']);
  event.add('ars_nouveau:drygmy_blacklist', [
    'ars_nouveau:wilden_boss',
    '#neoadv:cataclysm_entities',
    'eternal_starlight:starlight_golem',
    'eternal_starlight:lunar_monstrosity',
    'bosses_of_mass_destruction:lich',
    'bosses_of_mass_destruction:obsidilith',
    'irons_spellbooks:dead_king',
    'irons_spellbooks:citadel_keeper',
    'irons_spellbooks:fire_boss',
    'irons_spellbooks:pyromancer',
    'irons_spellbooks:archevoker',
    'irons_spellbooks:cryomancer',
    'irons_spellbooks:priest',
    'irons_spellbooks:apothecarist',
    'irons_spellbooks:necromancer',
    'golemsoverhaul:netherite_golem',
    'discerning_the_eldritch:ascended_one',
  ]);
  event.add('ars_nouveau:drygmy_blacklist', ['#ars_nouveau:jar_blacklist']);
});

ServerEvents.tags('worldgen/structure', (event) => {
  event.add('dungeon_difficulty:level_3', [
    'dungeons_arise:bandit_village',
    'dungeons_arise:illager_galley',
    'dungeons_arise:illager_corsair',
    'dungeons_arise:abandoned_temple',
    'dungeons_arise:jungle_tree_house',
    'dungeons_arise:undead_pirate_ship',
    'irons_spellbooks:evoker_fort',
    'create_pillagers_arise:createpillagersmallhouse',
    'create_pillagers_arise:createpillagerhousesmall',
    'create_pillagers_arise:createpillagerfortgate',
    'create_pillagers_arise:createpillagervillage',
    'create_pillagers_arise:createpillageroutpost',
    'create_pillagers_arise:cathedral_create',
    'create_pillagers_arise:pillagercreatetower',
    'create_pillagers_arise:createpillagerblimp',
    'create_pillagers_arise:createpillagercamp',
    'create_pillagers_arise:createchinatower',
  ]);
  event.add('dungeon_difficulty:level_4', [
    'dungeons_arise:coliseum',
    'dungeons_arise:plague_asylum',
    'dungeons_arise:mining_system',
    'dungeons_arise:heavenly_rider',
    'dungeons_arise:mushroom_house',
    'dungeons_arise:mushroom_mines',
    'dungeons_arise:illager_campsite',
    'dungeons_arise:illager_windmill',
    'dungeons_arise:mushroom_village',
    'irons_spellbooks:ice_spider_den',
    'ars_nouveau:hunter_wilden_den',
    'ars_nouveau:stalker_wilden_den',
    'ars_nouveau:guardian_wilden_den',
  ]);

  event.add('dungeon_difficulty:level_5', [
    'dungeons_arise:foundry',
    'dungeons_arise:bathhouse',
    'dungeons_arise:keep_kayra',
    'dungeons_arise:illager_fort',
    'dungeons_arise:bandit_towers',
    'dungeons_arise:shiraz_palace',
    'dungeons_arise:giant_mushroom',
    'dungeons_arise:infested_temple',
    'dungeons_arise:scorched_mines',
    'dungeons_arise:mechanical_nest',
    'dungeons_arise:kisegi_sanctuary',
    'dungeons_arise:thornborn_towers',
    'dungeons_arise:heavenly_challenger',
    'dungeons_arise:heavenly_conqueror',
    'ati_structures:herobrine_stronghold',
  ]);
  event.add('neoadv:boss_structure', [
    'bosses_of_mass_destruction:lich_tower',
    'bosses_of_mass_destruction:void_blossom',
    'bosses_of_mass_destruction:gauntlet_arena',
    'bosses_of_mass_destruction:obsidilith_arena',
    'irons_spellbooks:catacombs',
    'irons_spellbooks:citadel',
    'cataclysm:ancient_factory',
    'cataclysm:ruined_citadel',
    'cataclysm:frosted_prison',
    'cataclysm:cursed_pyramid',
    'cataclysm:burning_arena',
    'cataclysm:sunken_city',
    'cataclysm:acropolis',
    'cataclysm:soul_black_smith',
    'discerning_the_eldritch:cultist_base',
  ]);
});
