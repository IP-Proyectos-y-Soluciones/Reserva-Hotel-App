const { Notifications } = require('../config/db')
const fs = require('fs')

const createNotification = async (kind, amount) => {
  try {

    const notification = await Notifications.create({
      kind,
      amount,
    });
    return notification;
  }

  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};

const updateNotification = async (id, kind, amount) => {
  try {

    const [updated] = await Notifications.update(
      {
        kind,
        amount,
      },
      { where: { id: id } }
    );

    if (updated) {

      const updatedNotification = await Notifications.findOne({ where: { id: id } });

      return updatedNotification;
    }

    throw new Error('Notification not found');
  }

  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }

};

const deleteNotification = async (id) => {

  try {

    const deleted = await Notifications.destroy({ where: { id: id } });
    if (deleted) {

      return { message: 'Notification deleted successfully!' };
    }

    throw new Error('Notification not found');

  }
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }


}

const getNotification = async (id) => {

  try {

    const notification = await Notifications.findOne({ where: { id: id } });

    if (notification) {

      return notification;

    }
    throw new Error('Notification not found');
  }
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }

}

const getAllNotifications = async () => {

  try {

    const notifications = await Notifications.findAll();

    return notifications;

  }
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
}

module.exports = {
  getAllNotifications,
  getNotification,
  deleteNotification,
  updateNotification,
  createNotification
}