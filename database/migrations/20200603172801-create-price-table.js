'use strict';

var dbm;
var type;
var seed;

/**
* We receive the dbmigrate dependency from dbmigrate initially.
* This enables us to not have to rely on NODE_PATH.
*/
exports.setup = function(options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = async function(db, callback) {
    // create 'makes' table
    await db.createTable("makes", {
        id: {
            type: "int",
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            notNull: true
        },
        name: "string"
    });

    await db.createTable("models", {
        id: {
            type: "int",
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            notNull: true
        },
        make_id: {
            type: "int",
            unsigned: true,
            length: 10,
            notNull: true,
            foreignKey: {
                name: "models_make_id_fk",
                table: "makes",
                rules: {
                    onDelete: "CASCADE",
                    onUpdate: "RESTRICT"
                },
                mapping: {
                    make_id: "id"
                }
            }
        },
        code: "string",
        name: "string"
    });

    await db.createTable("prices", {
        id: {
            type: "int",
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
            notNull: true
        },
        model_id: {
            type: "int",
            unsigned: true,
            length: 10,
            notNull: true,
            foreignKey: {
                name: "prices_model_id_fk",
                table: "models",
                rules: {
                    onDelete: "CASCADE",
                    onUpdate: "RESTRICT"
                },
                mapping: {
                    model_id: "id"
                }
            }
        },
        is_unlocked: {
            type: "boolean"
        },
        network: "string",
        colour: "string",
        storage_gb: "int"
    });

    callback()
};

exports.down = async function(db, callback) {
    await db.dropTable("prices");
    await db.dropTable("models");
    await db.dropTable("makes");
    callback()
};

exports._meta = {
    "version": 1
};
