var express = require('express');
var router = express.Router();
var mahasiswa = require("../models/mahasiswamodel");

router.get('/', function (req, res, next) {
    mahasiswa.findAndCountAll().then(data => {
        res.json({ status: true, pesan: "Data Ditampilkan", data: data.rows });
    }).catch(error => {
        res.json({
            status: false,
            pesan: "Error: " + error.message,
            data: []
        });
    })
});

router.post("/", function (req, res, next) {
    mahasiswa.create({ NIM: req.body.NIM, nama_mhs: req.body.nama_mhs, alamat: req.body.alamat, jenis_kelamin: req.body.jenis_kelamin }).then(data => {
        res.json({ status: true, pesan: "Data Mahasiswa Berhasil Ditambahkan", data: data });
    }).catch(error => {
        res.json({
            status: false,
            pesan: "Error: " + error.message,
            data: null
        });
    })
});

router.put("/:NIM", function (req, res, next) {
    mahasiswa.findOne({ where: { NIM: req.params.NIM } }).then((data) => {
        if (data == null)
            res.json({
                status: false,
                pesan: "Data Tidak Ditemukan",
                data: null,
            });
        else
            data.update({ nama_mhs: req.body.nama_mhs, alamat: req.body.alamat, jenis_kelamin: req.body.jenis_kelamin }).then(data => {
                res.json({ status: true, pesan: "Data Mahasiswa Berhasil Diubah", data: data });
            }).catch((error) => {
                res.json({
                    status: false,
                    pesan: "Error: " + error.message,
                    data: null
                });
            });
    }).catch((error) => {
        res.json({
            status: false,
            pesan: "Error: " + error.message,
            data: null
        });
    });
});

router.delete("/:NIM", function (req, res, next) {
    mahasiswa.findOne({ where: { NIM: req.params.NIM } }).then((data) => {
        if (data == null)
            res.json({
                status: false,
                pesan: "Data Tidak Ditemukan",
                data: null,
            });
        else
            data.destroy().then((data) => {
                res.json({
                    status: true,
                    pesan: "Data Berhasil Dihapus",
                    data: data,
                });
            }).catch((error) => {
                res.json({
                    status: false,
                    pesan: "Error: " + error.message,
                    data: null
                });
            });
    }).catch((error) => {
        res.json({
            status: false,
            pesan: "Error: " + error.message,
            data: null
        });
    });
});

module.exports = router;
