import Categories from "../config/db"; 




   export const createCategory = async ({

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

}) => {
    

  try {

    const category = await Categories.create({
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

    return category;

  } 
  
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
}
};




  export const updateCategory = async (
  id,

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
  }

) => {
  try {

    const [updated] = await Categories.update(

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

      { where: { id: id } }
    );

    if (updated) {
      const updatedCategory = await Categories.findOne({ where: { id: id } });
      return updatedCategory;
    }

    throw new Error('Category not found');
  } 
  
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
}
  }





    export const deleteCategory = async (id) => {
  try {
    const deleted = await Categories.destroy({ where: { id: id } });
    if (deleted) {
      return { message: 'Category deleted successfully' };
    }
    throw new Error('Category not found');
  } 
  
  
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
}
};




        export const getCategory = async (id) => {
  try {
    const category = await Categories.findOne({ where: { id: id } });
    if (category) {
      return category;
    }
    throw new Error('Category not found');
  } 
  
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
}
}



      export const getAllCategories = async () => {
  try {
    const categories = await Categories.findAll();
    return categories;
  }  
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
}
  }

