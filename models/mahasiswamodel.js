const {Sequelize, DataTypes} = require('sequelize');
var connection = require("../connection.js");

const mahasiswa = connection.define('mahasiswa', { // Model attributes are defined here
    NIM: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    nama_mhs: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {freezeTableName: true});

module.exports = mahasiswa;
