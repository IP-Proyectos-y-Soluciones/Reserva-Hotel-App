import controllerIndex from '../controllers';
import 'dotenv/config';
const { FRONT, BACKEND } = process.env;

const indexHandler = {
  routeFront: async (req, res) => {
    try {
      res.send(`${FRONT}`);
    } catch (error) {
      console.error("Error en la ruta front:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  routeBackend: async (req, res) => {
    try {
      res.send(`${BACKEND}`);
    } catch (error) {
      console.error("Error en la ruta backend:", error);
      res.status(500).send("Error interno del servidor");
    }
  }
};

export default indexHandler;
