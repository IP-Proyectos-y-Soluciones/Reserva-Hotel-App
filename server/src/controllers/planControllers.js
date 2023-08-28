const { Plan } = require('../config/db')
const fs = require('fs')



const createPlan = async ( kind, img, description, hight_price, low_price ) => {
  try {
    const plan = await Plan.create({
      kind,
      img,
      description,
      hight_price,
      low_price,
    });

    return plan;
  }
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }

}

const updatePlan = async (id, kind, img, description, hight_price, low_price ) => {
  try {
    const [updated] = await Plan.update(
      {
        kind,
        img,
        description,
        hight_price,
        low_price,
      },
      { where: { id: id } }
    );

    if (updated) {

      const updatedPlan = await Plan.findOne({ where: { id: id } });
      return updatedPlan;
    }
    throw new Error('Plan not found');
  }
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }

}

const deletePlan = async (id) => {
  try {
    const deleted = await Plan.destroy({ where: { id: id } });
    if (deleted) {
      return { message: 'Plan deleted successfully' };
    }
    throw new Error('Plan not found');
  }

  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
}

const getPlan = async (id) => {
  try {

    const plan = await Plan.findOne({ where: { id: id } });

    if (plan) {

      return plan;
    }
    throw new Error('Plan not found');
  }

  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
}

const getAllPlans = async () => {
  try {

    const plans = await Plan.findAll();
    return plans;
  }

  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
}

module.exports = {
  getAllPlans,
  getPlan,
  deletePlan,
  updatePlan,
  createPlan
}