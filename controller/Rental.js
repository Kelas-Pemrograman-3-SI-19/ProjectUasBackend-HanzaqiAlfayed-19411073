const rentalModel = require ('../model/Rental')
const { requestResponse } = require('../config')
const objectId = require('mongoose').Types.ObjectId
const { deleteImage } = require('../uploadConfig')

exports.insertRental = (data) =>
  new Promise((resolve, reject) => {
    rentalModel.create(data)
    .then(() => resolve(requestResponse.sukses('Berhasil Input Rental')))
    .catch(() => reject(requestResponse.serverError))
  })

  exports.getAllRental = () =>
    new Promise((resolve, reject) => {
      rentalModel.find({})
           .then(rental => resolve(requestResponse.suksesWithData(rental)))
           .catch(error => resolve(requestResponse.serverError))
    })

    exports.getbyId = (id) =>
      new Promise((resolve, reject) => {
          rentalModel.findOne({
              _id: objectId(id)
          }).then(rental => resolve(requestResponse.suksesWithData(rental)))
          .catch(error => reject(requestResponse.serverError))
      })

exports.editRental = (data, id, changeImage) =>
  new Promise(async(resolve, reject) => {
    rentalModel.updateOne({
      _id: objectId(id)
    }, data)
      .then(() => {
        if (changeImage) {
          deleteImage(data.oldImage)
        }
        resolve(requestResponse.sukses('Berhasil Edit Daftar Rental'))
      }).catch(() => reject(requestResponse.serverError))
  })

  exports.delete = (id) =>
    new Promise((resolve, reject) => {
      rentalModel.findOne({
        _id: objectId(id)
      }).then(rental => {
        rentalModel.deleteOne({
          _id: objectId(id)
        }).then(() => {
          deleteImage(rental.image)
          resolve(requestResponse.sukses('Berhasil Hapus List Rental'))
        }).catch(() => reject(requestResponse.serverError))
      })
    })