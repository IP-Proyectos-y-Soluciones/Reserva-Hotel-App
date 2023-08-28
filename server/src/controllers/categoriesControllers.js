const { Categories, Plan, Banner, Restaurant, Travel } = require('../config/db');

// Obtener todas las categorías
async function getAllCategories() {
  try {
    const categories = await Categories.findAll();
    return categories;
  } catch (err) {
    console.error(err)
  }
}

// Crear una nueva categoría
async function createCategory( route,
    color,
    kind,
    img,
    description,
    includes,
    continental_alta,
    continental_baja,
    americano_alta,
    americano_baja,) {
  try {
    
    const newCategory = await Categories.create({
      route,
      color,
      kind,
      img,
      description,
      includes,
      continental_alta,
      continental_baja,
      americano_alta,
      americano_baja,
    });
    return newCategory;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Actualizar una categoría existente
async function updateCategory(id, route,
    color,
    kind,
    img,
    description,
    includes,
    continental_alta,
    continental_baja,
    americano_alta,
    americano_baja) {
  try {
    
    const updated = await Categories.update(
      {
        route,
        color,
        kind,
        img,
        description,
        includes,
        continental_alta,
        continental_baja,
        americano_alta,
        americano_baja,
      },
      { where: { id } }
    );
    return updated;
  } catch (error) {
    throw new Error(error.message);
  }
}


async function deleteCategory(id) {
  try {
    await Categories.destroy({ where: { id } });
  
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
