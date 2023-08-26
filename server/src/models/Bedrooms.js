const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "bedrooms",
    {
      // Define los atributos del modelo
      // ...
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      kind_h: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      style: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      gallery: { 
        type: DataTypes.ARRAY(DataTypes.STRING), 
        allowNull: false,
      },
      description_h: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date_h: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
