<<<<<<< HEAD
const { DataTypes } = require('sequelize');


module.exports = (sequelize) => { 
sequelize.define(
  'bookings',
   {
  id_reservation: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  id_room: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  payment_reservation: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  transaction_number: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  reservation_code: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  reservation_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  admission_date: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  departure_date: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  reservation_date: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
}
=======
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "bookings",
    {
      // Define los atributos del modelo
      // ...
      id_reservation: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      // id_room: {
      //   type: DataTypes.TEXT,
      //   allowNull: false,
      // },
      // id_user: {
      //   type: DataTypes.TEXT,
      //   allowNull: false,
      // },
      payment_reservation: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      transaction_number: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reservation_code: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reservation_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      admission_date: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      departure_date: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reservation_date: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
>>>>>>> 6b3d96a525363a5d3491920ddc19de95deff531a
