module.exports = function(sequilize, DataTypes) {
  var Burger = sequilize.define("Burger", {
    bureger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};
