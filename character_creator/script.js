const gameData = {
    "point_buy": {
        "standard_points": 15,
        "campaign_types": {
            "Low Fantasy": 10,
            "Standard Fantasy": 15,
            "High Fantasy": 20,
            "Epic Fantasy": 25
        },
        "costs": {
            "7": -4,
            "8": -2,
            "9": -1,
            "10": 0,
            "11": 1,
            "12": 2,
            "13": 3,
            "14": 5,
            "15": 7,
            "16": 10,
            "17": 13,
            "18": 17
        }
    },
    "ability_modifiers": {
        "1": -5,
        "2": -4,
        "3": -4,
        "4": -3,
        "5": -3,
        "6": -2,
        "7": -2,
        "8": -1,
        "9": -1,
        "10": 0,
        "11": 0,
        "12": 1,
        "13": 1,
        "14": 2,
        "15": 2,
        "16": 3,
        "17": 3,
        "18": 4,
        "19": 4,
        "20": 5,
        "21": 5,
        "22": 6,
        "23": 6,
        "24": 7,
        "25": 7
    },
    "races": {
        "Human": {
            "size": "Medium",
            "speed": 30,
            "traits": [
                "20 extra Experience Rolls at creation"
            ],
            "languages": [
                "Common"
            ],
            "bonus_languages": "Any (except secret)"
        },
        "Dwarf": {
            "size": "Medium",
            "speed": 20,
            "speed_notes": "Not reduced by armor/load",
            "traits": [
                "Darkvision 60 ft.",
                "Stonecunning (+2 Perception for stonework)",
                "Stability (+4 vs bull rush/trip on ground)",
                "+2 Fortitude vs poison",
                "+2 Craft/Appraise for metal/stone"
            ],
            "skill_bonuses": {
                "Battleaxe": 2,
                "Warhammer": 2
            },
            "languages": [
                "Common",
                "Dwarven"
            ],
            "bonus_languages": [
                "Giant",
                "Gnome",
                "Goblin",
                "Orc",
                "Terran",
                "Undercommon"
            ]
        },
        "Elf": {
            "size": "Medium",
            "speed": 30,
            "traits": [
                "Immunity to magic sleep",
                "+2 save vs enchantment",
                "Low-Light Vision"
            ],
            "skill_bonuses": {
                "Longsword": 2,
                "Rapier": 2,
                "Longbow": 2,
                "Shortbow": 2,
                "Perception": 2
            },
            "languages": [
                "Common",
                "Elven"
            ],
            "bonus_languages": [
                "Draconic",
                "Gnoll",
                "Gnome",
                "Goblin",
                "Orc",
                "Sylvan"
            ]
        },
        "Gnome": {
            "size": "Small",
            "speed": 20,
            "traits": [
                "Low-Light Vision",
                "+2 saves vs spells/effects",
                "Small size bonuses (+1 AC, +4 Stealth starting score)",
                "Speak with burrowing mammals (innate)"
            ],
            "skill_bonuses": {
                "Perception": 2,
                "Craft (alchemy)": 2,
                "Speak with animals (burrowing)": 1
            },
            "magical_skill_bonuses": {
                "dancing lights": 1,
                "ghost sound": 1,
                "prestidigitation": 1,
                "minor image": 1
            },
            "languages": [
                "Common",
                "Gnome"
            ],
            "bonus_languages": [
                "Draconic",
                "Dwarven",
                "Elven",
                "Giant",
                "Goblin",
                "Orc"
            ]
        },
        "Half-Elf": {
            "size": "Medium",
            "speed": 30,
            "traits": [
                "Immunity to magic sleep",
                "+2 save vs enchantment",
                "Low-Light Vision",
                "Elven Blood (treated as elf)"
            ],
            "skill_bonuses": {
                "Perception": 4,
                "Investigate": 4,
                "Persuasion": 4
            },
            "languages": [
                "Common",
                "Elven"
            ],
            "bonus_languages": "Any (except secret)"
        },
        "Half-Orc": {
            "size": "Medium",
            "speed": 30,
            "traits": [
                "Savage Attacks (extra crit die)",
                "Relentless Endurance (1hp instead of 0 once/long rest)",
                "Darkvision 60 ft.",
                "Orc Blood (treated as orc)"
            ],
            "skill_bonuses": {
                "Intimidation": 2,
                "Survival": 3,
                "Greataxe": 2,
                "Falchion": 2
            },
            "languages": [
                "Common",
                "Orc"
            ],
            "bonus_languages": [
                "Draconic",
                "Giant",
                "Gnoll",
                "Goblin",
                "Abyssal"
            ]
        },
        "Halfling": {
            "size": "Small",
            "speed": 20,
            "traits": [
                "Move through space of larger creatures",
                "+2 Will vs fear",
                "Small size bonuses (+1 AC, +4 Stealth starting score)"
            ],
            "skill_bonuses": {
                "Athletics": 2,
                "Perception": 2,
                "Stealth": 2,
                "Fortitude": 1,
                "Reflexes": 1,
                "Will": 1
            },
            "languages": [
                "Common",
                "Halfling"
            ],
            "bonus_languages": [
                "Dwarven",
                "Elven",
                "Gnome",
                "Goblin",
                "Orc"
            ]
        }
    },
    "core_skills": {
        "Ability Score Increase": {
            "cost_xr": 3,
            "increasable": true
        },
        "Hit Dice (HD)": {
            "cost_xr": 2,
            "increasable": true
        },
        "Dodge": {
            "cost_xr": 2,
            "increasable": true
        },
        "Fortitude": {
            "cost_xr": 2,
            "increasable": true
        },
        "Reflexes": {
            "cost_xr": 2,
            "increasable": true
        },
        "Will": {
            "cost_xr": 2,
            "increasable": true
        }
    },
    "ordinary_skills": {
        "Acrobatics": {
            "ability": "Dex",
            "cost_xr": 1
        },
        "Appraise": {
            "ability": "Int",
            "cost_xr": 1
        },
        "Athletics": {
            "ability": "Str",
            "cost_xr": 1
        },
        "Craft": {
            "ability": "Int",
            "cost_xr": 1
        },
        "Deception": {
            "ability": "Cha",
            "cost_xr": 1
        },
        "Intimidation": {
            "ability": "Cha",
            "cost_xr": 1
        },
        "Investigation": {
            "ability": "Int",
            "cost_xr": 1
        },
        "Knowledge": {
            "ability": "Int",
            "cost_xr": 1
        },
        "Lockpicking": {
            "ability": "Dex",
            "cost_xr": 1
        },
        "Medicine": {
            "ability": "Wis",
            "cost_xr": 1
        },
        "Perception": {
            "ability": "Wis",
            "cost_xr": 1
        },
        "Persuasion": {
            "ability": "Cha",
            "cost_xr": 1
        },
        "Sense Motive": {
            "ability": "Wis",
            "cost_xr": 1
        },
        "Sleight of Hand": {
            "ability": "Dex",
            "cost_xr": 1
        },
        "Spellcraft": {
            "ability": "Int",
            "cost_xr": 1
        },
        "Stealth": {
            "ability": "Dex",
            "cost_xr": 1
        },
        "Survival": {
            "ability": "Wis",
            "cost_xr": 1
        },
        "Use Magic Device": {
            "ability": "Cha",
            "cost_xr": 1
        },
        "Dagger": {
            "ability": "Dex",
            "category": "simple",
            "cost_xr": 1
        },
        "Club": {
            "ability": "Str",
            "category": "simple",
            "cost_xr": 1
        },
        "Sickle": {
            "ability": "Str",
            "category": "simple",
            "cost_xr": 1
        },
        "Mace": {
            "ability": "Str",
            "category": "simple",
            "cost_xr": 1
        },
        "Morningstar": {
            "ability": "Str",
            "category": "simple",
            "cost_xr": 1
        },
        "Shortspear": {
            "ability": "Str",
            "category": "simple",
            "cost_xr": 1
        },
        "Quarterstaff": {
            "ability": "Str",
            "category": "simple",
            "cost_xr": 1
        },
        "Spear": {
            "ability": "Str",
            "category": "simple",
            "cost_xr": 1
        },
        "Crossbow, light": {
            "ability": "Dex",
            "category": "simple",
            "cost_xr": 1
        },
        "Shortbow": {
            "ability": "Dex",
            "category": "simple",
            "cost_xr": 1
        },
        "Dart": {
            "ability": "Dex",
            "category": "simple",
            "cost_xr": 1
        },
        "Javelin": {
            "ability": "Str",
            "category": "simple",
            "cost_xr": 1
        },
        "Sling": {
            "ability": "Dex",
            "category": "simple",
            "cost_xr": 1
        },
        "Hammer, light": {
            "ability": "Str",
            "category": "simple",
            "cost_xr": 1
        },
        "Handaxe": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Kukri": {
            "ability": "Dex",
            "category": "martial",
            "cost_xr": 1
        },
        "Pick, light": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Shield, light": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Shortsword": {
            "ability": "Dex",
            "category": "martial",
            "cost_xr": 1
        },
        "Battleaxe": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Flail": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Longsword": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Pick, heavy": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Rapier": {
            "ability": "Dex",
            "category": "martial",
            "cost_xr": 1
        },
        "Shield, heavy": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Scimitar": {
            "ability": "Dex",
            "category": "martial",
            "cost_xr": 1
        },
        "Trident": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Warhammer": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Falchion": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Glaive": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Greataxe": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Greatclub": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Flail, heavy": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Greatsword": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Halberd": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Lance": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Scythe": {
            "ability": "Str",
            "category": "martial",
            "cost_xr": 1
        },
        "Whip": {
            "ability": "Dex",
            "category": "martial",
            "cost_xr": 1
        },
        "Crossbow, heavy": {
            "ability": "Dex",
            "category": "martial",
            "cost_xr": 1
        },
        "Longbow": {
            "ability": "Dex",
            "category": "martial",
            "cost_xr": 1
        }
    },
    "extraordinary_skills": {
        "Animal Companion": {
            "cost_xr": 3,
            "increasable": true
        },
        "Camouflage": {
            "cost_xr": 3,
            "increasable": false,
            "prerequisites": [
                "Favored Terrain 1"
            ]
        },
        "Crippling Strike": {
            "cost_xr": 3,
            "increasable": false,
            "prerequisites": [
                "Sneak Attack 10"
            ]
        },
        "Darkvision": {
            "cost_xr": 5,
            "increasable": false
        },
        "Disease Immunity": {
            "cost_xr": 5,
            "increasable": false
        },
        "Evasion": {
            "cost_xr": 5,
            "increasable": false
        },
        "Evasion, Improved": {
            "cost_xr": 5,
            "increasable": false,
            "prerequisites": [
                "Evasion"
            ]
        },
        "Fast Movement": {
            "cost_xr": 2,
            "increasable": true
        },
        "Favored Enemy": {
            "cost_xr": 2,
            "increasable": true
        },
        "Favored Terrain": {
            "cost_xr": 2,
            "increasable": true
        },
        "Flurry of Blows": {
            "cost_xr": 3,
            "increasable": false
        },
        "Flurry of Blows, Improved": {
            "cost_xr": 3,
            "increasable": false,
            "prerequisites": [
                "Flurry of Blows"
            ]
        },
        "Hide in Plain Sight": {
            "cost_xr": 4,
            "increasable": false,
            "prerequisites": [
                "Favored Terrain 1",
                "Camouflage"
            ]
        },
        "Low-Light Vision": {
            "cost_xr": 3,
            "increasable": false
        },
        "Unarmed Combat": {
            "cost_xr": 2,
            "increasable": true
        },
        "Skill Mastery": {
            "cost_xr": 4,
            "increasable": false
        },
        "Slippery Mind": {
            "cost_xr": 3,
            "increasable": false
        },
        "Rage": {
            "cost_xr": 2,
            "increasable": true
        },
        "Slow Fall": {
            "cost_xr": 1,
            "increasable": true
        },
        "Sneak Attack": {
            "cost_xr": 2,
            "increasable": true
        },
        "Swift Tracker": {
            "cost_xr": 2,
            "increasable": false,
            "prerequisites": [
                "Woodland Stride"
            ]
        },
        "Trap Sense": {
            "cost_xr": 1,
            "increasable": true
        },
        "Unarmored": {
            "cost_xr": 2,
            "increasable": true
        },
        "Uncanny Dodge": {
            "cost_xr": 3,
            "increasable": false
        },
        "Venom Immunity": {
            "cost_xr": 5,
            "increasable": false
        },
        "Wild Empathy": {
            "cost_xr": 2,
            "increasable": false
        },
        "Woodland Stride": {
            "cost_xr": 3,
            "increasable": false
        }
    },
    "supernatural_skills": {
        "Countersong": {
            "cost_xr": 2,
            "increasable": false,
            "prerequisites": [
                "Perform 3"
            ]
        },
        "Fascinate": {
            "cost_xr": 1,
            "increasable": true,
            "prerequisites": [
                "Perform 3"
            ]
        },
        "Familiar": {
            "cost_xr": 3,
            "increasable": true
        },
        "Grace": {
            "cost_xr": 5,
            "increasable": false
        },
        "Improved Familiar": {
            "cost_xr": 2,
            "increasable": false
        },
        "Inspire Competence": {
            "cost_xr": 2,
            "increasable": false,
            "prerequisites": [
                "Perform 6"
            ]
        },
        "Inspire Courage": {
            "cost_xr": 1,
            "increasable": true,
            "prerequisites": [
                "Perform 3"
            ]
        },
        "Inspire Greatness": {
            "cost_xr": 5,
            "increasable": false,
            "prerequisites": [
                "Perform 12"
            ]
        },
        "Inspire Heroics": {
            "cost_xr": 7,
            "increasable": false,
            "prerequisites": [
                "Perform 18"
            ]
        },
        "Timeless Body": {
            "cost_xr": 5,
            "increasable": false
        },
        "Trackless Step": {
            "cost_xr": 3,
            "increasable": false
        },
        "Turn Undead": {
            "cost_xr": 3,
            "increasable": true
        },
        "Unarmed Strike (adamantine)": {
            "cost_xr": 3,
            "increasable": false,
            "prerequisites": [
                "Unarmed Combat 16"
            ]
        },
        "Unarmed Strike (magic)": {
            "cost_xr": 3,
            "increasable": false,
            "prerequisites": [
                "Unarmed Combat 4"
            ]
        },
        "Wild Shape": {
            "cost_xr": 3,
            "increasable": true
        }
    },
    "spells": [
        {
            "name": "Acid Splash",
            "school": "Conjuration (Creation) [Acid]",
            "tier": 0
        },
        {
            "name": "Alarm",
            "school": "Abjuration",
            "tier": 1
        },
        {
            "name": "Alter Self",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Antimagic Field",
            "school": "Abjuration",
            "tier": 6
        },
        {
            "name": "Arcane Sight",
            "school": "Divination",
            "tier": 3
        },
        {
            "name": "Augury",
            "school": "Divination",
            "tier": 2
        },
        {
            "name": "Awaken",
            "school": "Transmutation",
            "tier": 5
        },
        {
            "name": "Baleful Polymorph",
            "school": "Transmutation",
            "tier": 5
        },
        {
            "name": "Barkskin",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Bear's Endurance",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Bestow Curse",
            "school": "Necromancy",
            "tier": 3
        },
        {
            "name": "Blindness/Deafness",
            "school": "Necromancy",
            "tier": 2
        },
        {
            "name": "Break Enchantment",
            "school": "Abjuration",
            "tier": 5
        },
        {
            "name": "Bull's Strength",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Burning Hands",
            "school": "Evocation [Fire]",
            "tier": 1
        },
        {
            "name": "Cat's Grace",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Chain Lightning",
            "school": "Evocation [Electricity]",
            "tier": 6
        },
        {
            "name": "Charm",
            "school": "Enchantment (Charm) [Mind-Affecting]",
            "tier": 1
        },
        {
            "name": "Cloudkill",
            "school": "Conjuration (Creation)",
            "tier": 5
        },
        {
            "name": "Color Spray",
            "school": "Illusion (Pattern) [Mind-Affecting]",
            "tier": 1
        },
        {
            "name": "Command",
            "school": "Enchantment (Compulsion) [Language-Dependent, Mind-Affecting]",
            "tier": 1
        },
        {
            "name": "Cone of Cold",
            "school": "Evocation [Cold]",
            "tier": 5
        },
        {
            "name": "Confusion",
            "school": "Enchantment (Compulsion) [Mind-Affecting]",
            "tier": 1
        },
        {
            "name": "Control Undead",
            "school": "Necromancy",
            "tier": 7
        },
        {
            "name": "Control Weather",
            "school": "Transmutation",
            "tier": 7
        },
        {
            "name": "Control Winds",
            "school": "Transmutation [Air]",
            "tier": 5
        },
        {
            "name": "Create Undead",
            "school": "Necromancy [Evil]",
            "tier": 6
        },
        {
            "name": "Cure Wounds",
            "school": "Conjuration (Healing)",
            "tier": 1
        },
        {
            "name": "Darkness",
            "school": "Evocation [Darkness]",
            "tier": 2
        },
        {
            "name": "Darkvision",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Daylight",
            "school": "Evocation [Light]",
            "tier": 3
        },
        {
            "name": "Death Ward",
            "school": "Necromancy",
            "tier": 4
        },
        {
            "name": "Detect Magic",
            "school": "Divination",
            "tier": 0
        },
        {
            "name": "Detect Thoughts",
            "school": "Divination [Mind-Affecting]",
            "tier": 2
        },
        {
            "name": "Dimension Door",
            "school": "Conjuration (Teleportation)",
            "tier": 4
        },
        {
            "name": "Disguise",
            "school": "Illusion (Glamer)",
            "tier": 1
        },
        {
            "name": "Disjunction",
            "school": "Abjuration",
            "tier": 9
        },
        {
            "name": "Dispel Magic",
            "school": "Abjuration",
            "tier": 3
        },
        {
            "name": "Dominate Person",
            "school": "Enchantment (Compulsion) [Mind-Affecting]",
            "tier": 5
        },
        {
            "name": "Eagle's Splendor",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Endure Elements",
            "school": "Abjuration",
            "tier": 1
        },
        {
            "name": "Enervation",
            "school": "Necromancy",
            "tier": 4
        },
        {
            "name": "Enlarge Person",
            "school": "Transmutation",
            "tier": 1
        },
        {
            "name": "Expeditious Retreat",
            "school": "Transmutation",
            "tier": 1
        },
        {
            "name": "Fabricate",
            "school": "Transmutation",
            "tier": 5
        },
        {
            "name": "Feather Fall",
            "school": "Transmutation",
            "tier": 1
        },
        {
            "name": "Find the Path",
            "school": "Divination",
            "tier": 6
        },
        {
            "name": "Fire Shield",
            "school": "Evocation [Fire or Cold]",
            "tier": 4
        },
        {
            "name": "Fireball",
            "school": "Evocation [Fire]",
            "tier": 3
        },
        {
            "name": "Flesh to Stone",
            "school": "Transmutation",
            "tier": 6
        },
        {
            "name": "Fly",
            "school": "Transmutation",
            "tier": 3
        },
        {
            "name": "Forcecage",
            "school": "Evocation [Force]",
            "tier": 7
        },
        {
            "name": "Foresight",
            "school": "Divination",
            "tier": 9
        },
        {
            "name": "Fox's Cunning",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Freedom of Movement",
            "school": "Abjuration",
            "tier": 4
        },
        {
            "name": "Gaseous Form",
            "school": "Transmutation",
            "tier": 3
        },
        {
            "name": "Gate",
            "school": "Conjuration (Creation or Calling)",
            "tier": 9
        },
        {
            "name": "Geas",
            "school": "Enchantment (Compulsion) [Language-Dependent, Mind-Affecting]",
            "tier": 4
        },
        {
            "name": "Ghost Sound",
            "school": "Illusion (Figment)",
            "tier": 0
        },
        {
            "name": "Ghoul Touch",
            "school": "Necromancy",
            "tier": 2
        },
        {
            "name": "Glitterdust",
            "school": "Conjuration (Creation)",
            "tier": 2
        },
        {
            "name": "Globe of Invulnerability",
            "school": "Abjuration",
            "tier": 4
        },
        {
            "name": "Grease",
            "school": "Conjuration (Creation)",
            "tier": 1
        },
        {
            "name": "Gust of Wind",
            "school": "Evocation [Air]",
            "tier": 2
        },
        {
            "name": "Harm",
            "school": "Necromancy",
            "tier": 6
        },
        {
            "name": "Haste",
            "school": "Transmutation",
            "tier": 3
        },
        {
            "name": "Heal",
            "school": "Conjuration (Healing)",
            "tier": 6
        },
        {
            "name": "Heroes' Feast",
            "school": "Conjuration (Creation)",
            "tier": 6
        },
        {
            "name": "Hideous Laughter",
            "school": "Enchantment (Compulsion) [Mind-Affecting]",
            "tier": 2
        },
        {
            "name": "Hold",
            "school": "Enchantment (Compulsion) [Mind-Affecting]",
            "tier": 2
        },
        {
            "name": "Hypnotism",
            "school": "Enchantment (Compulsion) [Mind-Affecting]",
            "tier": 1
        },
        {
            "name": "Ice Storm",
            "school": "Evocation [Cold]",
            "tier": 4
        },
        {
            "name": "Identify",
            "school": "Divination",
            "tier": 1
        },
        {
            "name": "Inflict Wounds",
            "school": "Necromancy",
            "tier": 1
        },
        {
            "name": "Insect Plague",
            "school": "Conjuration (Summoning)",
            "tier": 5
        },
        {
            "name": "Invisibility",
            "school": "Illusion (Glamer)",
            "tier": 2
        },
        {
            "name": "Invisibility Purge",
            "school": "Evocation",
            "tier": 3
        },
        {
            "name": "Iron Body",
            "school": "Transmutation",
            "tier": 8
        },
        {
            "name": "Knock",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Legend Lore",
            "school": "Divination",
            "tier": 6
        },
        {
            "name": "Levitate",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Light",
            "school": "Evocation [Light]",
            "tier": 0
        },
        {
            "name": "Lightning Bolt",
            "school": "Evocation [Electricity]",
            "tier": 3
        },
        {
            "name": "Limited Wish",
            "school": "Universal",
            "tier": 7
        },
        {
            "name": "Locate",
            "school": "Divination",
            "tier": 2
        },
        {
            "name": "Mage Armor",
            "school": "Conjuration (Creation) [Force]",
            "tier": 1
        },
        {
            "name": "Mage Hand",
            "school": "Transmutation",
            "tier": 0
        },
        {
            "name": "Magic Fang",
            "school": "Transmutation",
            "tier": 1
        },
        {
            "name": "Magic Missile",
            "school": "Evocation [Force]",
            "tier": 1
        },
        {
            "name": "Magic Weapon",
            "school": "Transmutation",
            "tier": 1
        },
        {
            "name": "Magnificent Mansion",
            "school": "Conjuration (Creation)",
            "tier": 7
        },
        {
            "name": "Mending",
            "school": "Transmutation",
            "tier": 0
        },
        {
            "name": "Message",
            "school": "Transmutation [Language-Dependent]",
            "tier": 0
        },
        {
            "name": "Meteor Swarm",
            "school": "Evocation [Fire]",
            "tier": 9
        },
        {
            "name": "Mind Blank",
            "school": "Abjuration",
            "tier": 8
        },
        {
            "name": "Creation",
            "school": "Conjuration (Creation)",
            "tier": 4
        },
        {
            "name": "Miracle",
            "school": "Evocation",
            "tier": 9
        },
        {
            "name": "Mirror Image",
            "school": "Illusion (Figment)",
            "tier": 2
        },
        {
            "name": "Modify Memory",
            "school": "Enchantment (Compulsion) [Mind-Affecting]",
            "tier": 5
        },
        {
            "name": "Moment of Prescience",
            "school": "Divination",
            "tier": 8
        },
        {
            "name": "Nondetection",
            "school": "Abjuration",
            "tier": 3
        },
        {
            "name": "Obscuring Mist",
            "school": "Conjuration (Creation)",
            "tier": 1
        },
        {
            "name": "Open/Close",
            "school": "Transmutation",
            "tier": 0
        },
        {
            "name": "Owl's Wisdom",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Passwall",
            "school": "Transmutation",
            "tier": 5
        },
        {
            "name": "Phantasmal Killer",
            "school": "Illusion (Phantasm) [Fear, Mind-Affecting]",
            "tier": 4
        },
        {
            "name": "Planar Binding",
            "school": "Conjuration (Calling) [see text]",
            "tier": 5
        },
        {
            "name": "Plane Shift",
            "school": "Conjuration (Teleportation)",
            "tier": 5
        },
        {
            "name": "Poison",
            "school": "Necromancy",
            "tier": 3
        },
        {
            "name": "Polymorph",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Killing Curse",
            "school": "Necromancy [Death]",
            "tier": 9
        },
        {
            "name": "Prestidigitation",
            "school": "Universal",
            "tier": 0
        },
        {
            "name": "Protection from Energy",
            "school": "Abjuration",
            "tier": 3
        },
        {
            "name": "Protection",
            "school": "Abjuration [Aligned: Good, Evil, Lawful, or Chaotic]",
            "tier": 1
        },
        {
            "name": "Pyrotechnics",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Raise Dead",
            "school": "Conjuration (Healing)",
            "tier": 5
        },
        {
            "name": "Ray of Enfeeblement",
            "school": "Necromancy",
            "tier": 1
        },
        {
            "name": "Ray of Exhaustion",
            "school": "Necromancy",
            "tier": 3
        },
        {
            "name": "Ray of Frost",
            "school": "Evocation [Cold]",
            "tier": 0
        },
        {
            "name": "Reduce",
            "school": "Transmutation",
            "tier": 1
        },
        {
            "name": "Remove Curse",
            "school": "Abjuration",
            "tier": 3
        },
        {
            "name": "Resist Energy",
            "school": "Abjuration",
            "tier": 2
        },
        {
            "name": "Restoration",
            "school": "Conjuration (Healing)",
            "tier": 3
        },
        {
            "name": "Reverse Gravity",
            "school": "Transmutation",
            "tier": 4
        },
        {
            "name": "Rope Trick",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Scorching Ray",
            "school": "Evocation [Fire]",
            "tier": 2
        },
        {
            "name": "Scrying",
            "school": "Divination",
            "tier": 4
        },
        {
            "name": "See Invisibility",
            "school": "Divination",
            "tier": 2
        },
        {
            "name": "Sending",
            "school": "Evocation",
            "tier": 4
        },
        {
            "name": "Shatter",
            "school": "Evocation [Sonic]",
            "tier": 2
        },
        {
            "name": "Shield",
            "school": "Abjuration [Force]",
            "tier": 1
        },
        {
            "name": "Shocking Grasp",
            "school": "Evocation [Electricity]",
            "tier": 1
        },
        {
            "name": "Shout",
            "school": "Evocation [Sonic]",
            "tier": 4
        },
        {
            "name": "Shrink Item",
            "school": "Transmutation",
            "tier": 3
        },
        {
            "name": "Silence",
            "school": "Illusion (Glamer)",
            "tier": 2
        },
        {
            "name": "Silent Image",
            "school": "Illusion (Figment)",
            "tier": 1
        },
        {
            "name": "Simulacrum",
            "school": "Illusion (Shadow)",
            "tier": 7
        },
        {
            "name": "Sleep",
            "school": "Enchantment (Compulsion) [Mind-Affecting]",
            "tier": 1
        },
        {
            "name": "Sleet Storm",
            "school": "Conjuration (Creation) [Cold]",
            "tier": 3
        },
        {
            "name": "Slow",
            "school": "Transmutation",
            "tier": 3
        },
        {
            "name": "Speak with Animals",
            "school": "Divination",
            "tier": 1
        },
        {
            "name": "Speak with Dead",
            "school": "Necromancy [Language-Dependent]",
            "tier": 3
        },
        {
            "name": "Spell Turning",
            "school": "Abjuration",
            "tier": 7
        },
        {
            "name": "Spider Climb",
            "school": "Transmutation",
            "tier": 2
        },
        {
            "name": "Stabilize",
            "school": "Conjuration (Healing)",
            "tier": 0
        },
        {
            "name": "Stoneskin",
            "school": "Abjuration",
            "tier": 4
        },
        {
            "name": "Stone to Flesh",
            "school": "Transmutation",
            "tier": 6
        },
        {
            "name": "Suggestion",
            "school": "Enchantment (Compulsion) [Language-Dependent, Mind-Affecting]",
            "tier": 3
        },
        {
            "name": "Summon Monster",
            "school": "Conjuration (Summoning) [see text]",
            "tier": 1
        },
        {
            "name": "Summon Nature's Ally",
            "school": "Conjuration (Summoning)",
            "tier": 1
        },
        {
            "name": "Telekinesis",
            "school": "Transmutation",
            "tier": 5
        },
        {
            "name": "Teleport",
            "school": "Conjuration (Teleportation)",
            "tier": 5
        },
        {
            "name": "Time Stop",
            "school": "Transmutation",
            "tier": 9
        },
        {
            "name": "True Seeing",
            "school": "Divination",
            "tier": 5
        },
        {
            "name": "True Strike",
            "school": "Divination",
            "tier": 1
        },
        {
            "name": "Vampiric Touch",
            "school": "Necromancy",
            "tier": 3
        },
        {
            "name": "Wall",
            "school": "Evocation/Conjuration [Fire, Cold]",
            "tier": 4
        },
        {
            "name": "Water Breathing",
            "school": "Transmutation",
            "tier": 3
        },
        {
            "name": "Water Walk",
            "school": "Transmutation [Water]",
            "tier": 3
        },
        {
            "name": "Waves of Fatigue",
            "school": "Necromancy",
            "tier": 5
        },
        {
            "name": "Web",
            "school": "Conjuration (Creation)",
            "tier": 2
        },
        {
            "name": "Whispering Wind",
            "school": "Transmutation [Air]",
            "tier": 2
        },
        {
            "name": "Wish",
            "school": "Universal",
            "tier": 9
        },
        {
            "name": "Zone of Truth",
            "school": "Enchantment [Mind-Affecting, Compulsion]",
            "tier": 2
        }
    ],
    "average_xr_progression": {
        "d20_based_skill": {
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 8,
            "8": 9,
            "9": 11,
            "10": 13,
            "11": 15,
            "12": 17,
            "13": 20,
            "14": 22,
            "15": 26,
            "16": 30,
            "17": 35,
            "18": 42,
            "19": 52,
            "20": 72
        },
        "simple_weapons": {
            "1": 1,
            "2": 1,
            "3": 2,
            "4": 2,
            "5": 3,
            "6": 4,
            "7": 5,
            "8": 6,
            "9": 7,
            "10": 9,
            "11": 10,
            "12": 11,
            "13": 13,
            "14": 15,
            "15": 17,
            "16": 19,
            "17": 23,
            "18": 27,
            "19": 33,
            "20": 44
        },
        "spells": {
            "1": 1,
            "2": 2,
            "3": 2,
            "4": 2,
            "5": 3,
            "6": 3,
            "7": 4,
            "8": 4,
            "9": 5,
            "10": 6,
            "11": 7,
            "12": 7,
            "13": 8,
            "14": 10,
            "15": 11,
            "16": 12,
            "17": 14,
            "18": 16,
            "19": 20,
            "20": 26
        },
        "spells_only_on_self": {
            "1": 1,
            "2": 2,
            "3": 2,
            "4": 2,
            "5": 2,
            "6": 2,
            "7": 3,
            "8": 4,
            "9": 4,
            "10": 4,
            "11": 5,
            "12": 5,
            "13": 6,
            "14": 7,
            "15": 8,
            "16": 9,
            "17": 11,
            "18": 12,
            "19": 14,
            "20": 18
        }
    },
    "feats": [
        {
            "name": "Armor Proficiency (Heavy)",
            "cost_xr": 2,
            "prerequisites": "Armor Proficiency (light), Armor Proficiency (medium)."
        },
        {
            "name": "Armor Proficiency (Light)",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Armor Proficiency (Medium)",
            "cost_xr": 2,
            "prerequisites": "Armor Proficiency (light)."
        },
        {
            "name": "Augment Summoning",
            "cost_xr": 2,
            "prerequisites": "Spell Focus (conjuration)."
        },
        {
            "name": "Blind Fight",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Brew Potions",
            "cost_xr": 2,
            "prerequisites": "Spellcraft 3"
        },
        {
            "name": "Cleave",
            "cost_xr": 2,
            "prerequisites": "Str 13, Power Attack."
        },
        {
            "name": "Cleave, Great",
            "cost_xr": 2,
            "prerequisites": "Str 13, Power Attack, Cleave."
        },
        {
            "name": "Combat Expertise",
            "cost_xr": 2,
            "prerequisites": "Int 13."
        },
        {
            "name": "Combat Reflexes",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Counterspell",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Craft Magic Arms and Armors",
            "cost_xr": 2,
            "prerequisites": "Spellcraft 5"
        },
        {
            "name": "Craft Rod",
            "cost_xr": 2,
            "prerequisites": "Spellcraft 9"
        },
        {
            "name": "Craft Staff",
            "cost_xr": 2,
            "prerequisites": "Spellcraft 12"
        },
        {
            "name": "Craft Wand",
            "cost_xr": 2,
            "prerequisites": "Spellcraft 5"
        },
        {
            "name": "Craft Wondrous Item",
            "cost_xr": 2,
            "prerequisites": "Spellcraft 3"
        },
        {
            "name": "Deflect Arrows",
            "cost_xr": 2,
            "prerequisites": "Dex 13."
        },
        {
            "name": "Far Shot",
            "cost_xr": 2,
            "prerequisites": "Point Blank Shot."
        },
        {
            "name": "Forge Ring",
            "cost_xr": 2,
            "prerequisites": "Spellcraft 12"
        },
        {
            "name": "Improved Critical",
            "cost_xr": 2,
            "prerequisites": "skill score 8 in the selected weapon."
        },
        {
            "name": "Improved Disarm",
            "cost_xr": 2,
            "prerequisites": "Int 13, Combat Expertise."
        },
        {
            "name": "Improved Familiar",
            "cost_xr": 2,
            "prerequisites": "Ability to acquire a new familiar, sufficiently high skill score (see below)."
        },
        {
            "name": "Feint",
            "cost_xr": 2,
            "prerequisites": "Int 13, Combat Expertise."
        },
        {
            "name": "Improved Grapple",
            "cost_xr": 2,
            "prerequisites": "Dex 13."
        },
        {
            "name": "Improved Initiative",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Precise Shot, Improved",
            "cost_xr": 2,
            "prerequisites": "Point Blank Shot, Precise Shot."
        },
        {
            "name": "Improved Sunder",
            "cost_xr": 2,
            "prerequisites": "Str 13. Power Attack."
        },
        {
            "name": "Manyshot",
            "cost_xr": 2,
            "prerequisites": "Point Blank Shot, Precise Shot."
        },
        {
            "name": "Mobile",
            "cost_xr": 2,
            "prerequisites": "Dex 13, Dodge."
        },
        {
            "name": "Natural Spell",
            "cost_xr": 2,
            "prerequisites": "Wis 13, Wild Shape."
        },
        {
            "name": "Point Blank Shot",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Power Attack",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Precise Shot",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Quick Draw",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Rapid Reload",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Rapid Shot",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Scribe Scroll",
            "cost_xr": 2,
            "prerequisites": "Spellcraft 1"
        },
        {
            "name": "Shield Proficiency",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Snatch Arrows",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Spell Focus</B>",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Spell Focus, Greater",
            "cost_xr": 2,
            "prerequisites": "Spell Focus."
        },
        {
            "name": "Spell Penetration",
            "cost_xr": 2,
            "prerequisites": "Spell Focus."
        },
        {
            "name": "Spell Penetration, Greater",
            "cost_xr": 2,
            "prerequisites": "Spell Focus."
        },
        {
            "name": "Stunning Fist",
            "cost_xr": 2,
            "prerequisites": "Dex 13, Wis 13, Unarmed Strike [8]."
        },
        {
            "name": "Tower Shield Proficiency",
            "cost_xr": 2,
            "prerequisites": "Shield Proficiency."
        },
        {
            "name": "Two-weapon Defense",
            "cost_xr": 2,
            "prerequisites": "Dex 15, Two-Weapon Fighting."
        },
        {
            "name": "Two Weapon Fighting",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Two Weapon Fighting, Improved",
            "cost_xr": 2,
            "prerequisites": "Two-Weapon Fighting."
        },
        {
            "name": "Two Weapon Fighting, Greater",
            "cost_xr": 2,
            "prerequisites": "Two-Weapon Fighting, Improved Two-Weapon Fighting."
        },
        {
            "name": "Wand Expertise",
            "cost_xr": 2,
            "prerequisites": ""
        },
        {
            "name": "Whirlwind Attack",
            "cost_xr": 2,
            "prerequisites": "Dex 13, Int 13, Combat Expertise, Dodge, Mobility."
        }
    ],
    "weapons": [
        {
            "name": "Dagger",
            "cost": "2 gp",
            "dmg_m": "1d4",
            "weight": "1 lb.",
            "tags": "Finesse, Bleed, Thrown"
        },
        {
            "name": "Club",
            "cost": "-",
            "dmg_m": "1d4",
            "weight": "3 lb.",
            "tags": "Stagger, Thrown"
        },
        {
            "name": "Sickle",
            "cost": "6 gp",
            "dmg_m": "1d6",
            "weight": "2 lb.",
            "tags": "Bleed"
        },
        {
            "name": "Mace",
            "cost": "12 gp",
            "dmg_m": "1d6",
            "weight": "8 lb.",
            "tags": "Stagger"
        },
        {
            "name": "Hammer, light",
            "cost": "1 gp",
            "dmg_m": "1d4",
            "weight": "2 lb.",
            "tags": "Thrown, Stagger"
        },
        {
            "name": "Morningstar",
            "cost": "8 gp",
            "dmg_m": "1d8",
            "weight": "6 lb.",
            "tags": "Stagger"
        },
        {
            "name": "Shortspear",
            "cost": "1 gp",
            "dmg_m": "1d6",
            "weight": "3 lb.",
            "tags": "Impale, Thrown"
        },
        {
            "name": "Quarterstaff",
            "cost": "-",
            "dmg_m": "1d6/1d6",
            "weight": "4 lb.",
            "tags": "Two-Handed, Stagger"
        },
        {
            "name": "Spear",
            "cost": "2 gp",
            "dmg_m": "1d8",
            "weight": "6 lb.",
            "tags": "Two-Handed, Reach, Impale, Thrown"
        },
        {
            "name": "Crossbow, light",
            "cost": "35 gp",
            "dmg_m": "1d8",
            "weight": "4 lb.",
            "tags": "Two-Handed, Loading, Piercing(2)"
        },
        {
            "name": "Shortbow",
            "cost": "30 gp",
            "dmg_m": "1d6",
            "weight": "2 lb.",
            "tags": "Two-Handed, Piercing(0)"
        },
        {
            "name": "Longsword",
            "cost": "15 gp",
            "dmg_m": "1d8",
            "weight": "4 lb.",
            "tags": "Reliable, Bleed"
        },
        {
            "name": "Rapier",
            "cost": "20 gp",
            "dmg_m": "1d6",
            "weight": "2 lb.",
            "tags": "Finesse, Impale"
        },
        {
            "name": "Greataxe",
            "cost": "20 gp",
            "dmg_m": "1d12",
            "weight": "12 lb.",
            "tags": "Two-Handed, Brutal, Bleed, Sunder"
        },
        {
            "name": "Battleaxe",
            "cost": "10 gp",
            "dmg_m": "1d8",
            "weight": "6 lb.",
            "tags": "Brutal, Bleed, Sunder"
        },
        {
            "name": "Warhammer",
            "cost": "12 gp",
            "dmg_m": "1d8",
            "weight": "5 lb.",
            "tags": "Bash, Stagger"
        },
        {
            "name": "Longbow",
            "cost": "75 gp",
            "dmg_m": "1d8",
            "weight": "3 lb.",
            "tags": "Two-Handed, Impale, Piercing(2)"
        },
        {
            "name": "Shortsword",
            "cost": "10 gp",
            "dmg_m": "1d6",
            "weight": "2 lb.",
            "tags": "Finesse, Reliable, Bleed, Impale"
        },
        {
            "name": "Handaxe",
            "cost": "6 gp",
            "dmg_m": "1d6",
            "weight": "3 lb.",
            "tags": "Thrown, Bleed"
        },
        {
            "name": "Greatclub",
            "cost": "5 gp",
            "dmg_m": "1d10",
            "weight": "8 lb.",
            "tags": "Two-Handed, Bash, Stagger"
        },
        {
            "name": "Halberd",
            "cost": "10 gp",
            "dmg_m": "1d10",
            "weight": "12 lb.",
            "tags": "Two-Handed, Reach, Piercing(2), Bleed, Impale, Sunder"
        },
        {
            "name": "Glaive",
            "cost": "8 gp",
            "dmg_m": "1d10",
            "weight": "10 lb.",
            "tags": "Two-Handed, Reach, Bleed, Sunder"
        },
        {
            "name": "Falchion",
            "cost": "75 gp",
            "dmg_m": "2d4",
            "weight": "8 lb.",
            "tags": "Two-Handed, Bleed"
        },
        {
            "name": "Scythe",
            "cost": "18 gp",
            "dmg_m": "2d4",
            "weight": "10 lb.",
            "tags": "Two-Handed, Bleed, Sunder, Trip"
        },
        {
            "name": "Leather Armor",
            "cost": "10 gp",
            "dmg_m": "+2 AC",
            "weight": "15 lb.",
            "tags": "Light Armor"
        },
        {
            "name": "Chain shirt",
            "cost": "100 gp",
            "dmg_m": "+4 AC",
            "weight": "25 lb.",
            "tags": "Light Armor"
        },
        {
            "name": "Studded leather",
            "cost": "25 gp",
            "dmg_m": "+3 AC",
            "weight": "20 lb.",
            "tags": "Light Armor"
        },
        {
            "name": "Breastplate",
            "cost": "200 gp",
            "dmg_m": "+5 AC",
            "weight": "30 lb.",
            "tags": "Medium Armor"
        },
        {
            "name": "Full plate",
            "cost": "1500 gp",
            "dmg_m": "+8 AC",
            "weight": "50 lb.",
            "tags": "Heavy Armor"
        },
        {
            "name": "Shield, light steel",
            "cost": "9 gp",
            "dmg_m": "+1 AC",
            "weight": "6 lb.",
            "tags": "Shield"
        },
        {
            "name": "Shield, heavy steel",
            "cost": "20 gp",
            "dmg_m": "+2 AC",
            "weight": "15 lb.",
            "tags": "Shield"
        },
        {
            "name": "Backpack",
            "cost": "2 gp",
            "dmg_m": "-",
            "weight": "2 lb.",
            "tags": "Gear"
        }
    ]
};
let character = {
    race: null,
    abilities: {
        STR: 10, DEX: 10, CON: 10,
        INT: 10, WIS: 10, CHA: 10
    },
    skills: [],
    spells: [],
    spentXR: 0,
    totalXR: 30,
    spentPoints: 0,
    totalPoints: 15
};


function init() {
    populateRaces();
    populateSkills();
    populateCoreSkills();
    populateFeats();
    populateEquipment();
    updateUI();
}

function populateRaces() {
    const container = document.getElementById('race-selection');
    container.innerHTML = '';
    Object.keys(gameData.races).forEach(raceName => {
        const btn = document.createElement('button');
        btn.className = 'race-btn';
        btn.textContent = raceName;
        btn.onclick = () => selectRace(raceName);
        container.appendChild(btn);
    });
}

function selectRace(raceName) {
    character.race = raceName;
    const race = gameData.races[raceName];

    // UI Update
    document.querySelectorAll('.race-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.textContent === raceName);
    });

    const details = document.getElementById('race-details');
    details.classList.remove('hidden');
    document.getElementById('selected-race-name').textContent = raceName;

    const traitsList = document.getElementById('race-traits-list');
    traitsList.innerHTML = '';
    race.traits.forEach(trait => {
        const li = document.createElement('li');
        li.textContent = trait;
        traitsList.appendChild(li);
    });

    // Special case for Humans (Extra XR)
    if (raceName === 'Human') {
        character.totalXR = 50; // 30 + 20
    } else {
        character.totalXR = 30;
    }

    updateUI();
}

function adjustAbility(ab, amount) {
    const current = character.abilities[ab];
    const next = current + amount;

    if (next < 7 || next > 18) return;

    const oldCost = gameData.point_buy.costs[current.toString()];
    const newCost = gameData.point_buy.costs[next.toString()];
    const diff = newCost - oldCost;

    character.abilities[ab] = next;
    character.spentPoints += diff;
    updateUI();
}

function calculateSpellXR(tier) {
    if (tier === 0) return 1;
    return tier * 2; // Simple approximation for now
}

// createSkillItem is defined lower down to include leveling logic.

function populateSkills() {
    const ordList = document.getElementById('ordinary-list');
    const extList = document.getElementById('extraordinary-list');
    const supSpellsList = document.getElementById('supernatural-spells-list');

    ordList.innerHTML = '';
    extList.innerHTML = '';
    supSpellsList.innerHTML = '';

    // Ordinary
    Object.entries(gameData.ordinary_skills).forEach(([name, skill]) => {
        const existing = character.skills.find(s => s.name === name);
        const nextLevel = existing ? existing.level + 1 : 1;
        const cost = getSkillCost(name, 'ordinary', nextLevel);
        ordList.appendChild(createSkillItem(name, cost, 'ordinary'));
    });

    // Extraordinary
    Object.entries(gameData.extraordinary_skills).forEach(([name, skill]) => {
        const existing = character.skills.find(s => s.name === name);
        const nextLevel = existing ? existing.level + 1 : 1;
        const cost = getSkillCost(name, 'extraordinary', nextLevel);
        if (!existing || skill.increasable) {
            extList.appendChild(createSkillItem(name, cost, 'extraordinary'));
        }
    });

    // Supernatural
    Object.entries(gameData.supernatural_skills).forEach(([name, skill]) => {
        const existing = character.skills.find(s => s.name === name);
        const nextLevel = existing ? existing.level + 1 : 1;
        const cost = getSkillCost(name, 'supernatural', nextLevel);
        if (!existing || skill.increasable) {
            supSpellsList.appendChild(createSkillItem(name, cost, 'supernatural'));
        }
    });

    // Spells
    gameData.spells.forEach(spell => {
        const existing = character.skills.find(s => s.name === spell.name);
        const nextLevel = existing ? existing.level + 1 : 1;
        const cost = getSkillCost(spell.name, 'spell', nextLevel);
        supSpellsList.appendChild(createSkillItem(spell.name, cost, 'spell', spell.tier));
    });
}

function populateCoreSkills() {
    const coreList = document.getElementById('core-list');
    coreList.innerHTML = '';
    Object.entries(gameData.core_skills).forEach(([name, skill]) => {
        const existing = character.skills.find(s => s.name === name);
        const nextLevel = existing ? existing.level + 1 : 1;
        const cost = getSkillCost(name, 'core', nextLevel);
        coreList.appendChild(createSkillItem(name, cost, 'core'));
    });
}

function populateFeats() {
    const featList = document.getElementById('feats-list');
    featList.innerHTML = '';
    gameData.feats.forEach(feat => {
        const existing = character.skills.find(s => s.name === feat.name);
        const div = document.createElement('div');
        div.className = 'skill-item';
        div.innerHTML = `
            <div class="skill-info">
                <span class="skill-name">${feat.name}</span>
                <span class="skill-cost">Cost: ${feat.cost_xr} XR</span>
                ${feat.prerequisites ? `<small class="prereq">Prereq: ${feat.prerequisites}</small>` : ''}
            </div>
            <div class="skill-actions">
                ${existing ? `<button class="btn-sell" onclick="sellSkill('${feat.name}', 'feat')">-</button>` : ''}
                <button class="btn-buy" onclick="buySkill('${feat.name}', ${feat.cost_xr}, 'feat')">${existing ? '+' : 'Add'}</button>
            </div>
        `;
        featList.appendChild(div);
    });
}

function populateEquipment() {
    const equipList = document.getElementById('equipment-list');
    equipList.innerHTML = '';
    gameData.weapons.forEach(w => {
        if (!w.name || w.name.includes('<B>')) return;
        const existingIndex = character.skills.findIndex(s => s.name === w.name && s.type === 'equipment');
        const div = document.createElement('div');
        div.className = 'skill-item';
        div.innerHTML = `
            <div class="skill-info">
                <span class="skill-name">${w.name}</span>
                <span class="skill-cost">${w.cost} | ${w.dmg_m} | ${w.weight}</span>
                <small class="tags">${w.tags}</small>
            </div>
            <div class="skill-actions">
                ${existingIndex !== -1 ? `<button class="btn-sell" onclick="sellEquipment(${existingIndex})">-</button>` : ''}
                <button class="btn-buy" onclick="buyEquipment('${w.name}', '${w.cost}', '${w.weight}')">${existingIndex !== -1 ? '+' : 'Buy'}</button>
            </div>
        `;
        equipList.appendChild(div);
    });
}

function buyEquipment(name, cost, weight) {
    const item = gameData.weapons.find(w => w.name === name);
    if (item && item.tags) {
        if (item.tags.includes('Light Armor') && !character.skills.some(s => s.name === "Armor Proficiency (Light)")) {
            alert("You need the feat 'Armor Proficiency (Light)' to use this armor.");
            return;
        }
        if (item.tags.includes('Medium Armor') && !character.skills.some(s => s.name === "Armor Proficiency (Medium)")) {
            alert("You need the feat 'Armor Proficiency (Medium)' to use this armor.");
            return;
        }
        if (item.tags.includes('Heavy Armor') && !character.skills.some(s => s.name === "Armor Proficiency (Heavy)")) {
            alert("You need the feat 'Armor Proficiency (Heavy)' to use this armor.");
            return;
        }
    }

    character.skills.push({ name, cost, weight, type: 'equipment' });
    populateEquipment();
    updateUI();
}

function sellEquipment(index) {
    character.skills.splice(index, 1);
    populateEquipment();
    updateUI();
}

function parseGold(costStr) {
    if (!costStr || costStr === '-' || costStr === '&nbsp;') return 0;
    const parts = costStr.split(' ');
    const amount = parseFloat(parts[0].replace(',', '')) || 0;
    const unit = parts[1] || 'gp';
    if (unit === 'pp') return amount * 10;
    if (unit === 'gp') return amount;
    if (unit === 'sp') return amount * 0.1;
    if (unit === 'cp') return amount * 0.01;
    return amount;
}

function createSkillItem(name, cost, type, tier = null) {
    const div = document.createElement('div');
    div.className = 'skill-item';

    const existing = character.skills.find(s => s.name === name);
    const levelStr = existing && existing.level ? ` (Level ${existing.level})` : '';

    div.innerHTML = `
        <div class="skill-info">
            <span class="skill-name">${name}${levelStr}${tier !== null ? ` (Tier ${tier})` : ''}</span>
            <span class="skill-cost">Cost: ${cost} XR</span>
        </div>
        <div class="skill-actions">
            ${existing ? `<button class="btn-sell" onclick="sellSkill('${name}', '${type}')">-</button>` : ''}
            <button class="btn-buy" onclick="buySkill('${name}', ${cost}, '${type}')">${existing ? '+' : 'Add'}</button>
        </div>
    `;
    return div;
}

function getSkillCost(name, type, nextLevel) {
    let progressionType = 'd20_based_skill';
    let multiplier = 1;

    if (type === 'spell') {
        progressionType = 'spells';
        const spell = gameData.spells.find(s => s.name === name);
        multiplier = spell ? (spell.tier === 0 ? 1 : spell.tier * 2) : 1;
    } else if (type === 'core') {
        progressionType = 'd20_based_skill';
        multiplier = gameData.core_skills[name].cost_xr;
    } else if (type === 'extraordinary') {
        progressionType = 'd20_based_skill';
        multiplier = gameData.extraordinary_skills[name].cost_xr;
    } else if (type === 'supernatural') {
        progressionType = 'd20_based_skill';
        multiplier = gameData.supernatural_skills[name].cost_xr;
    } else if (type === 'feat') {
        const feat = gameData.feats.find(f => f.name === name);
        return feat ? feat.cost_xr : 2;
    } else if (gameData.ordinary_skills[name]) {
        const skill = gameData.ordinary_skills[name];
        if (skill.category === 'simple') {
            progressionType = 'simple_weapons';
        }
    }

    const progression = gameData.average_xr_progression[progressionType];
    const currentVal = progression[nextLevel] || progression[Object.keys(progression).length];
    const prevVal = nextLevel > 1 ? (progression[nextLevel - 1] || progression[Object.keys(progression).length]) : 0;

    return (currentVal - prevVal) * multiplier;
}

function buySkill(name, cost, type) {
    const existingIndex = character.skills.findIndex(s => s.name === name);

    if (type === 'core' || type === 'ordinary' || type === 'extraordinary' || type === 'supernatural' || type === 'feat' || type === 'spell') {
        if (existingIndex !== -1) {
            const existing = character.skills[existingIndex];
            existing.level = (existing.level || 1) + 1;
            const nextCost = getSkillCost(name, type, existing.level);
            existing.cost += nextCost;
            character.spentXR += nextCost;
        } else {
            character.skills.push({ name, cost, type, level: 1 });
            character.spentXR += cost;
        }
    } else {
        character.skills.push({ name, cost, type });
        character.spentXR += cost;
    }

    populateSkills();
    populateCoreSkills();
    populateFeats();
    updateUI();
}

function sellSkill(name, type) {
    const existingIndex = character.skills.findIndex(s => s.name === name);
    if (existingIndex === -1) return;

    const existing = character.skills[existingIndex];
    if (existing.level > 1) {
        const refundCost = getSkillCost(name, type, existing.level);
        existing.level -= 1;
        existing.cost -= refundCost;
        character.spentXR -= refundCost;
    } else {
        // Level 1 or un-leveled item
        const refundCost = existing.cost;
        character.skills.splice(existingIndex, 1);
        character.spentXR -= refundCost;
    }

    populateSkills();
    populateCoreSkills();
    populateFeats();
    updateUI();
}

function updateUI() {
    // Ability Values & Modifiers
    Object.entries(character.abilities).forEach(([ab, val]) => {
        document.getElementById(`val-${ab}`).textContent = val;
        const mod = Math.floor((val - 10) / 2);
        document.getElementById(`mod-${ab}`).textContent = (mod >= 0 ? '+' : '') + mod;
    });

    // Budget Tags
    document.getElementById('points-spent').textContent = character.spentPoints;
    document.getElementById('xr-spent').textContent = character.spentXR;
    document.getElementById('total-spent').textContent = character.spentXR;

    let totalGold = 0;
    character.skills.forEach(s => {
        if (s.type === 'equipment') {
            totalGold += parseGold(s.cost);
        }
    });
    document.getElementById('gold-spent').textContent = totalGold.toFixed(2);

    // Summary Sheet
    document.getElementById('summary-race').textContent = character.race || 'None';

    if (character.race && gameData.races[character.race]) {
        const r = gameData.races[character.race];
        document.getElementById('summary-size').textContent = r.size || 'Medium';
        document.getElementById('summary-speed').textContent = r.speed || '30';
    } else {
        document.getElementById('summary-size').textContent = 'Medium';
        document.getElementById('summary-speed').textContent = '30';
    }

    const purchasedList = document.getElementById('purchased-list');
    purchasedList.innerHTML = '';

    const categories = {
        'Skills': [],
        'Feats': [],
        'Equipment': [],
        'Core/Other': []
    };

    let totalWeight = 0;
    character.skills.forEach((s, index) => {
        let label = s.name;
        let bonusInfo = '';
        let targetCategory = 'Core/Other';

        if (s.type === 'ordinary' || s.type === 'extraordinary' || s.type === 'supernatural' || s.type === 'spell') {
            targetCategory = 'Skills';
            const level = s.level || 0;
            let abilityMod = 0;
            let racialBonus = 0;

            // Resolve Ability Mod
            let abName = '';
            if (gameData.ordinary_skills[s.name]) {
                abName = gameData.ordinary_skills[s.name].ability;
            }

            if (abName && character.abilities[abName.toUpperCase()]) {
                abilityMod = Math.floor((character.abilities[abName.toUpperCase()] - 10) / 2);
            }

            // Resolve Racial Bonus
            if (character.race && gameData.races[character.race].skill_bonuses) {
                racialBonus = gameData.races[character.race].skill_bonuses[s.name] || 0;
            }

            const totalBonus = level + abilityMod + racialBonus;
            const sign = totalBonus >= 0 ? '+' : '';
            bonusInfo = ` [Tot: ${sign}${totalBonus}] (Score ${level})`;

            // Add Damage if it's a weapon
            const weaponData = gameData.weapons.find(w => w.name === s.name);
            if (weaponData) {
                label += ` (${weaponData.dmg_m})`;
            }

            if (s.level > 1) label += ` x${s.level}`;
        } else if (s.type === 'feat') {
            targetCategory = 'Feats';
        } else if (s.type === 'equipment') {
            targetCategory = 'Equipment';
            if (s.weight) {
                const w = parseFloat(s.weight.replace(' lb.', '')) || 0;
                totalWeight += w;
            }
        }

        const li = document.createElement('li');
        li.innerHTML = `${label}${bonusInfo}${s.type === 'equipment' ? ` (${s.cost || s.weight || ''})` : ''} <button onclick="removeSkill(${index})" style="background:none; border:none; color:var(--danger); cursor:pointer;">&times;</button>`;
        categories[targetCategory].push(li);
    });

    // Populate the list by categories
    Object.keys(categories).forEach(catName => {
        if (categories[catName].length > 0) {
            const header = document.createElement('li');
            header.style.fontWeight = 'bold';
            header.style.marginTop = '10px';
            header.style.color = 'var(--accent)';
            header.textContent = catName;
            purchasedList.appendChild(header);
            categories[catName].forEach(li => purchasedList.appendChild(li));
        }
    });

    // Derived Stats
    const conMod = Math.floor((character.abilities.CON - 10) / 2);
    const dexMod = Math.floor((character.abilities.DEX - 10) / 2);
    const wisMod = Math.floor((character.abilities.WIS - 10) / 2);

    // HP calculation: Base 8 + (HD-1)*4.5? Or just simplified 8 + Con + (HD-1)*8?
    // SRD: "At 1st level, a character has 1 Hit Die... HP equals the maximum possible roll..."
    // Let's assume HD core skill adds more hit dice.
    let hdCount = 1;
    character.skills.forEach(s => { if (s.name === 'Hit Dice (HD)') hdCount += (s.level || 0); });

    // HP = Max first HD (8) + (additional HD * 8) + (Total HD * Con Mod)
    document.getElementById('summary-hp').textContent = (hdCount * 8) + (hdCount * conMod);

    // AC Calculation (Relative Bonus)
    let dodgeValue = 0;
    character.skills.forEach(s => { if (s.name === 'Dodge') dodgeValue += (s.level || 1); });

    let sizeBonus = 0;
    if (character.race && gameData.races[character.race].size === 'Small') {
        sizeBonus = 1;
    }

    let armorBonus = 0;
    character.skills.forEach(s => {
        if (s.type === 'equipment') {
            const item = gameData.weapons.find(w => w.name === s.name);
            if (item && item.tags && item.tags.includes('Armor')) {
                // Extract bonus from dmg_m (e.g. "+2 AC")
                const bonusMatch = item.dmg_m.match(/\+(\d+)/);
                if (bonusMatch) {
                    const bonus = parseInt(bonusMatch[1]);
                    if (bonus > armorBonus) armorBonus = bonus;
                }
            }
        }
    });

    let shieldBonus = 0;
    character.skills.forEach(s => {
        if (s.name.includes('Shield')) {
            if (s.name.includes('heavy')) {
                if (2 > shieldBonus) shieldBonus = 2;
            } else if (s.name.includes('light')) {
                if (1 > shieldBonus) shieldBonus = 1;
            }
        }
    });

    const acBonus = dexMod + dodgeValue + sizeBonus + shieldBonus + armorBonus;
    document.getElementById('summary-ac').textContent = (acBonus >= 0 ? '+' : '') + acBonus;

    // Defences
    let fortBonus = 0, refBonus = 0, willBonus = 0;
    character.skills.forEach(s => {
        if (s.name === 'Fortitude') fortBonus += (s.level || 1);
        if (s.name === 'Reflexes') refBonus += (s.level || 1);
        if (s.name === 'Will') willBonus += (s.level || 1);
    });

    // Racial Defence Bonuses
    if (character.race && gameData.races[character.race].skill_bonuses) {
        const raceBonuses = gameData.races[character.race].skill_bonuses;
        if (raceBonuses['Fortitude']) fortBonus += raceBonuses['Fortitude'];
        if (raceBonuses['Reflexes']) refBonus += raceBonuses['Reflexes'];
        if (raceBonuses['Will']) willBonus += raceBonuses['Will'];
    }

    document.getElementById('summary-for').textContent = (conMod + fortBonus >= 0 ? '+' : '') + (conMod + fortBonus);
    document.getElementById('summary-ref').textContent = (dexMod + refBonus >= 0 ? '+' : '') + (dexMod + refBonus);
    document.getElementById('summary-wil').textContent = (wisMod + willBonus >= 0 ? '+' : '') + (wisMod + willBonus);
    document.getElementById('summary-dodge').textContent = (dodgeValue >= 0 ? '+' : '') + dodgeValue;
}

function removeSkill(index) {
    const s = character.skills[index];
    if (s.type === 'core' && s.level > 1) {
        // Decrease cost by 1 unit
        const unitCost = gameData.core_skills[s.name].cost_xr;
        s.level -= 1;
        s.cost -= unitCost;
        character.spentXR -= unitCost;
    } else {
        character.skills.splice(index, 1);
        character.spentXR -= (s.cost || 0);
    }
    updateUI();
}

function openTab(evt, tabName) {
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) contents[i].classList.remove("active");

    const links = document.getElementsByClassName("tab-link");
    for (let i = 0; i < links.length; i++) links[i].classList.remove("active");

    // Fix for case sensitivity if needed
    const target = document.getElementById(tabName) || document.getElementById(tabName.toLowerCase() + '-skills') || document.getElementById(tabName.toLowerCase());
    if (target) target.classList.add("active");
    evt.currentTarget.classList.add("active");
}

function filterList(listId, query) {
    const list = document.getElementById(listId);
    const items = list.getElementsByClassName('skill-item');
    query = query.toLowerCase();

    for (let item of items) {
        const name = item.querySelector('.skill-name').textContent.toLowerCase();
        item.style.display = name.includes(query) ? 'flex' : 'none';
    }
}

function filterSpells(tier) {
    const list = document.getElementById('supernatural-spells-list');
    const items = list.getElementsByClassName('skill-item');

    // Update button states
    document.querySelectorAll('.tier-btn').forEach(btn => {
        btn.classList.toggle('active', (btn.textContent === (tier === null ? 'All' : tier.toString())));
    });

    for (let item of items) {
        if (tier === null) {
            item.style.display = 'flex';
        } else {
            const name = item.querySelector('.skill-name').textContent;
            // Spells have (Tier X) in their name, while supernatural skills don't
            if (name.includes(`(Tier ${tier})`)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        }
    }
}

function resetCharacter() {
    character = {
        race: null,
        abilities: { STR: 10, DEX: 10, CON: 10, INT: 10, WIS: 10, CHA: 10 },
        skills: [],
        spells: [],
        spentXR: 0,
        totalXR: 30,
        spentPoints: 0,
        totalPoints: 15
    };
    document.querySelectorAll('.race-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById('race-details').classList.add('hidden');
    updateUI();
}

window.onload = init;
