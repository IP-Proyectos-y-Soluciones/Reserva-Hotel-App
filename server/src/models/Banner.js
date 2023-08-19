const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "banner",
     {
    // Define los atributos del modelo
    // ...
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  { timestamps: false }
  );
};
