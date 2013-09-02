( function() {

    /**
     * You specify enemies for each overworld map node, but this is what tells
     * you how generators will choose which enemies to spawn.
     * @type {Object}
     */
    window.game.GeneratorEnemySpread = {
        ALL: 'randomly pull from all available monster types'
    };

    /**
     * You specify generators for each overworld map node, but this is what
     * tells you how those generators will be placed.
     * @type {Object}
     */
    window.game.GeneratorPlacement = {
        RANDOM: 'randomly place generators',
    };

    /**
     * You specify a minigame for each overworld map node, but this is what
     * tells you how the enemies are calculated for each option in the minigame.
     * @type {Object}
     */
    window.game.MinigameEnemySpread = {
        RANDOM: 'randomly pull from generators',
    };    

    window.game.OverworldMapData = {
        
        /**
         * The graphic indices for each tile.
         * @type {Array:Number}
         */
        overworldMapTileIndices: [
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,72,72,72,70,72,72,72,70,72,70,72,70,72,72,72,70,72,72,72,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,72,70,72,70,72,70,72,70,72,70,72,70,72,70,72,70,72,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,72,70,72,72,72,72,72,72,72,72,72,72,72,70,72,72,72,70,72,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,72,70,72,70,72,70,70,70,72,70,72,70,72,70,72,70,72,70,72,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,72,72,72,70,72,70,70,70,72,70,72,70,72,72,72,70,72,72,72,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,
            ],

        /**
         * The width of overworldMapTileIndices
         * @type {Number}
         */
        overworldMapWidth: 50,

        /**
         * Each node in this array is an Object with the following:
         *     x - Number - x coordinate in tiles
         *     y - Number - y coordinate in tiles
         *     description - String - this will show verbatim over the node
         *     difficulty - Number - difficulty of the map that will be generated
         *     clearFog - Array:Array - an array of patches of fog to clear. Each array is [tileX, tileY, radius].
         *
         *     enemies - Array:Object - an array of objects with the following:
         *         id - Number - the ID of the enemy (see UnitData.js)
         *         levelRange - Array[2] - an array of [minLevel, maxLevel].
         *             OR
         *             You could specify minLevel (Number) and maxLevel (Number)
         *             if you want
         *         relativeWeight - Number - optional (defaults to 1000). The 
         *             relative weight that this enemy will spawn.
         *     generators - Object - an object with the following;
         *         chancePerWalkableTile - Number - this is a way to specify the
         *             number of generators that will show on a map. This is the
         *             "chance" that a walkable tile will be a generator, so if
         *             you have 100 walkable tiles and you specify .05 for this
         *             number, you'll end up with 5 generators.
         *         spread - game.GeneratorEnemySpread - this tells the generator
         *             how to pick enemies
         *         placement - game.GeneratorPlacement - this tells the map how
         *             to lay out generators
         *         minDistanceFromSpawn - Number - optional (defaults to 7). The
         *             minimum distance that generators can appear to spawn points.
         *     boss - Object - an object with the following:
         *         id - Number - the ID of the boss (see UnitData.js)
         *         level - Number - the level of the boss
         *     tilesetID - Number - an ID defined in TilesetManager that corresponds
         *             to a tileset.
         *
         *
         * Error-checking and the insertion of default values are done in 
         * setupOverworldMapNodes.
         * @type {Array:Object}
         */
        overworldMapNodes: [
        {
            x: 1,
            y: 3,
            description: 'Green Hill Zone',
            difficulty: 1,
            clearFog: [[6,2,2], [2,7,3]],

            enemies: [
                {
                    id: game.UnitType.ORC.id,
                    levelRange: [1,1],
                },
                {
                    id: game.UnitType.SPIDER.id,
                    levelRange: [1,1],
                }
            ],

            generators: {
                chancePerWalkableTile: .02,
                spread: game.GeneratorEnemySpread.ALL,
                placement: game.GeneratorPlacement.RANDOM,
                minDistanceFromSpawn: 7
            },

            boss: {
                id: game.UnitType.TREE.id,
                level: 20
            },

            minigame: {
                baseCoins: 300,
                coinsPerLevel: 400,
                spread: game.MinigameEnemySpread.RANDOM
            },

            tilesetID: game.TilesetManager.MARSH_TILESET_ID
        },
        {
            x:7,
            y:1,
            description: 'Pumpkin Hill',
            difficulty: 2,
            clearFog: [[9,3,3]],

            enemies: [
                {
                    id: game.UnitType.ORC.id,
                    levelRange: [1,2],
                },
                {
                    id: game.UnitType.SPIDER.id,
                    levelRange: [1,2],
                },
                {
                    id: game.UnitType.SCORPION.id,
                    levelRange: [4,6],
                    relativeWeight: 250
                }
            ],

            generators: {
                chancePerWalkableTile: .02,
                spread: game.GeneratorEnemySpread.ALL,
                placement: game.GeneratorPlacement.RANDOM,
                minDistanceFromSpawn: 7
            },

            boss: {
                id: game.UnitType.TREE.id,
                level: 20
            },

            minigame: {
                baseCoins: 300,
                coinsPerLevel: 500,
                spread: game.MinigameEnemySpread.RANDOM
            },

            tilesetID: game.TilesetManager.LAVA_TILESET_ID
        },
        {
            x:9,
            y:5,
            description: 'Bot Land',
            difficulty: 3,
            clearFog: [[6,10,6]],

            enemies: [
                {
                    id: game.UnitType.ORC.id,
                    levelRange: [4,6],
                },
                {
                    id: game.UnitType.SPIDER.id,
                    levelRange: [4,6],
                }
            ],

            generators: {
                chancePerWalkableTile: .02,
                spread: game.GeneratorEnemySpread.ALL,
                placement: game.GeneratorPlacement.RANDOM,
                minDistanceFromSpawn: 7
            },

            boss: {
                id: game.UnitType.TREE.id,
                level: 20
            },

            minigame: {
                baseCoins: 400,
                coinsPerLevel: 400,
                spread: game.MinigameEnemySpread.RANDOM
            },

            tilesetID: game.TilesetManager.DESERT_TILESET_ID
        },
        {
            x:11,
            y:1,
            description: 'The Casino',
            difficulty: 4,
            clearFog: [[14,5,4]],

            enemies: [
                {
                    id: game.UnitType.ORC.id,
                    levelRange: [8,10],
                },
                {
                    id: game.UnitType.SPIDER.id,
                    levelRange: [8,10],
                }
            ],

            generators: {
                chancePerWalkableTile: .02,
                spread: game.GeneratorEnemySpread.ALL,
                placement: game.GeneratorPlacement.RANDOM,
                minDistanceFromSpawn: 7
            },

            boss: {
                id: game.UnitType.TREE.id,
                level: 20
            },

            minigame: {
                baseCoins: 400,
                coinsPerLevel: 500,
                spread: game.MinigameEnemySpread.RANDOM
            },

            tilesetID: game.TilesetManager.MARSH_TILESET_ID
        },
        {
            x:14,
            y:5,
            description: 'The Future',
            difficulty: 5,
            clearFog: [[19,3,12]],

            enemies: [
                {
                    id: game.UnitType.ORC.id,
                    levelRange: [10,15],
                },
                {
                    id: game.UnitType.SPIDER.id,
                    levelRange: [10,15],
                }
            ],

            generators: {
                chancePerWalkableTile: .02,
                spread: game.GeneratorEnemySpread.ALL,
                placement: game.GeneratorPlacement.RANDOM,
                minDistanceFromSpawn: 7
            },

            boss: {
                id: game.UnitType.TREE.id,
                level: 20
            },

            minigame: {
                baseCoins: 500,
                coinsPerLevel: 600,
                spread: game.MinigameEnemySpread.RANDOM
            },

            tilesetID: game.TilesetManager.MARSH_TILESET_ID
        },
        {
            x:19,
            y:3,
            description: 'Lazy Town',
            difficulty: 6,
            clearFog: [[19,3,9999]],

            enemies: [
                {
                    id: game.UnitType.CENTAUR.id,
                    levelRange: [20,25],
                },
                {
                    id: game.UnitType.DRAGON.id,
                    levelRange: [20,25],
                }
            ],

            generators: {
                chancePerWalkableTile: .02,
                spread: game.GeneratorEnemySpread.ALL,
                placement: game.GeneratorPlacement.RANDOM,
                minDistanceFromSpawn: 7
            },

            boss: {
                id: game.UnitType.TREE.id,
                level: 40
            },

            minigame: {
                baseCoins: 600,
                coinsPerLevel: 650,
                spread: game.MinigameEnemySpread.RANDOM
            },

            tilesetID: game.TilesetManager.MARSH_TILESET_ID
        }
        ],

        /**
         * Searches this.overworldMapNodes for a node whose x and y match the
         * specified coordinates.
         * @param  {Number} tileX - x, in tile coordinates
         * @param  {Number} tileY - y, in tile coordinates
         * @return {Object}       - an overworld map node. See
         * overworldMapNodes.
         */
        getOverworldNode: function(tileX, tileY) {
            for (var i = 0; i < this.overworldMapNodes.length; i++) {
                var node = this.overworldMapNodes[i];
                if ( node.x == tileX && node.y == tileY ) {
                    return node;
                }
            };
            return null;
        },

        /**
         * Calls getOverworldNode on the last tile you clicked on the overworld.
         * If you just clicked it, then it's technically the current map and not
         * the "last" map.
         * @return {Object} - an overworld map node. See overworldMapNodes.
         */
        getOverworldNodeOfLastMap: function() {
            // If this was null before calling this, it will be randomly set
            // now. The only way that would happen is if we got to this code via
            // a debug path, e.g. debugTransitionFromOverworldToNormalMap.
            var tileOfLastMap = game.overworldMap.getTileOfLastMap();

            // Get the node in the overworld map that the spawner we clicked
            // corresponds to.
            var nodeOfMap = this.getOverworldNode(tileOfLastMap.x, tileOfLastMap.y);
            if ( nodeOfMap == null ) {
                game.util.debugDisplayText('You moved to a normal map, but the tile doesn\' correspond to an overworldMapNode: ' + 
                    nodeOfMap.x + ', ' + nodeOfMap.y, 'no overworldMapNode');
            }

            return nodeOfMap;
        },

        /**
         * Clears fog on the overworld map according to the map we just beat.
         *
         * This only does something if clearFog was set for that node.
         *
         * See overworldMapNodes.
         */
        clearFog: function() {
            var nodeOfMap = this.getOverworldNodeOfLastMap();
            var fogToClear = nodeOfMap.clearFog;
            if ( fogToClear === undefined ) return;

            for (var i = 0; i < fogToClear.length; i++) {
                var fogData = fogToClear[i];
                game.overworldMap.setFog(fogData[0], fogData[1], fogData[2], false);
            };
        },

        /**
         * Initializes the overworld map. This should only be called once.
         */
        initializeOverworldMap: function() {
            var mapTileIndices = this.overworldMapTileIndices;

            // Put each node into the map
            for (var i = 0; i < this.overworldMapNodes.length; i++) {
                var node = this.overworldMapNodes[i];
                var index = node.y * this.overworldMapWidth + node.x;

                // Make them look like blue spawners
                mapTileIndices[index] = 65;
            };

            var doodadIndices = new Array(mapTileIndices.length);
            var tilesetID = game.TilesetManager.MARSH_TILESET_ID;
            game.overworldMap = new game.Map(mapTileIndices, doodadIndices, tilesetID, this.overworldMapWidth, 1, true);

            // Clear fog around the "first" node.
            game.overworldMap.setFog(1, 3, 3, false);
        }
    };
}());

/**
 * This function fills in any missing data from overworldMapNodes. It is called
 * immediately after it is defined (it's an IIFE).
 *
 * Any errors that print are considered to be programmer errors.
 */
( function setupOverworldMapNodes() {
    var nodes = game.OverworldMapData.overworldMapNodes;

    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var nodeDescription = (node.description === undefined) ? ('Node #' + i) : ('"' + node.description + '"');
        var error = false;
        var enemies = node.enemies;
        var boss = node.boss;
        var generators = node.generators;
        var tilesetID = node.tilesetID;

        if ( enemies === undefined ) {
            error = true;
            game.util.debugDisplayText(nodeDescription + ' does not have any enemies defined!', 'no enemies' + i);
        }

        if ( boss === undefined ) {
            error = true;
            game.util.debugDisplayText(nodeDescription + ' does not have a boss defined!', 'no boss' + i);
        }

        if ( generators === undefined ) {
            error = true;
            game.util.debugDisplayText(nodeDescription + ' does not have generators defined!', 'no generators' + i);
        }

        if ( tilesetID === undefined ) {
            error = true;
            game.util.debugDisplayText(nodeDescription + ' does not have a tilesetID defined!', 'no tilesetID' + i);
        }

        if ( error ) {
            continue;
        }

        for (var j = 0; j < enemies.length; j++) {
            var enemy = enemies[j];
            if ( enemy.id === undefined ) {
                game.util.debugDisplayText(nodeDescription + ' has an enemy with no id!', 'no id' + i + j);
                continue;
            }

            if ( enemy.levelRange !== undefined ) {
                if ( enemy.minLevel !== undefined || enemy.maxLevel !== undefined ) {
                    game.util.debugDisplayText(nodeDescription + ' specifies both a level range AND a min or max level!', 'range AND min or max' + i + j);
                    continue;
                }

                if ( enemy.levelRange.length != 2 ) {
                    game.util.debugDisplayText(nodeDescription + ' specifies a level range whose length is not 2!', 'level range wrong length' + i + j);
                    continue;   
                }

                enemy.minLevel = enemy.levelRange[0];
                enemy.maxLevel = enemy.levelRange[1];
            }

            if ( enemy.minLevel === undefined ) {
                game.util.debugDisplayText(nodeDescription + ' has an enemy with no minLevel!', 'no minLevel' + i + j);
                continue;
            }

            if ( enemy.maxLevel === undefined ) {
                game.util.debugDisplayText(nodeDescription + ' has an enemy with no maxLevel!', 'no maxLevel' + i + j);
                continue;
            }

            // Make sure maxLevel is always the bigger of the two values
            if ( enemy.maxLevel < enemy.minLevel ) {
                var temp = enemy.maxLevel;
                enemy.maxLevel = enemy.minLevel;
                enemy.minLevel = temp;
            }

            if ( enemy.relativeWeight === undefined ) {
                // Make the default 1000 so that you've got wiggle-room for
                // specifying rare enemies. For example, you could specify 10
                // enemies and give a single one an explicit relativeWeight of
                // 10, which would make it show up much less often.
                enemy.relativeWeight = 1000;
            }
        };

        for (var j = 0; j < generators.length; j++) {
            var generator = generators[j];
            if ( generator.chancePerWalkableTile === undefined ) {
                game.util.debugDisplayText(nodeDescription + ' has a generator with no chancePerWalkableTile!', 'no chancePerWalkableTile' + i + j);
                continue;
            }
            if ( generator.spread === undefined ) {
                game.util.debugDisplayText(nodeDescription + ' has a generator with no spread!', 'no spread' + i + j);
                continue;
            }
            if ( generator.placement === undefined ) {
                game.util.debugDisplayText(nodeDescription + ' has a generator with no placement!', 'no placement' + i + j);
                continue;
            }

            if ( generator.minDistanceFromSpawn === undefined ) {
                generator.minDistanceFromSpawn = 7;
            }
        };

        if ( boss.id === undefined ) {
            game.util.debugDisplayText(nodeDescription + ' has no boss ID!', 'no boss ID' + i);
            continue;
        }

        if ( boss.level === undefined ) {
            game.util.debugDisplayText(nodeDescription + ' has no boss level!', 'no boss level' + i);
            continue;
        }

    };

}());
