import Diary from '../models/Diary'; 
import Bedrooms from '../models/Bedrooms'; 




export const createDiaryEntry = async ({
  id_room,
  admission_date,
  departure_date,
}) => {

  try {

    const bedroom = await Bedrooms.findOne({ where: { id_h: id_room } });

    if (!bedroom) {

        throw new Error('Bedroom not found');
    }

    const diaryEntry = await Diary.create({
      id_room,
      admission_date,
      departure_date,
    });

    return diaryEntry;

  } 
   catch(error){
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
   }
  }





export const updateDiaryEntry = async (
  id,
  {
    id_room,
    admission_date,
    departure_date,
  }
) => {
  try {

    const bedroom = await Bedrooms.findOne({ where: { id_h: id_room } });
    if (!bedroom) {

        throw new Error('Bedroom not found');
    }

    const [updated] = await Diary.update(
      {
        id_room,
        admission_date,
        departure_date,
      },
      { where: { id: id } }
    );
    if (updated) {
      const updatedDiaryEntry = await Diary.findOne({ where: { id: id } });
      return updatedDiaryEntry;
    }
    throw new Error('Diary entry not found');
  } 
  catch(error){
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
   }
  }





export const deleteDiaryEntry = async (id) => {

  try {

    const diaryEntry = await Diary.findOne({ where: { id: id } });

    if (!diaryEntry) {

        throw new Error('Diary entry not found');
    }

    const bedroom = await Bedrooms.findOne({ where: { id_h: diaryEntry.id_room } });

    if (!bedroom) {
        throw new Error('Bedroom not found');
    }

    const deleted = await Diary.destroy({ where: { id: id } });

    if (deleted) {
      return { message: 'Diary entry deleted successfully' };
    }

    throw new Error('Diary entry not found');
  } 
  catch(error){
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
   }
}




export const getDiaryEntry = async (id) => {
  try {

    const diaryEntry = await Diary.findOne({

        where: { id: id },
        include: Bedrooms
     });

    if (diaryEntry) {
      return diaryEntry;
    }

    throw new Error('Diary entry not found');
  } 
  catch(error){
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
   }
}

export const getAllDiaryEntries = async () => {
  try {

    const diaryEntries = await Diary.findAll({

        include: Bedrooms
     });

    return diaryEntries;

  }
  catch(error){
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
   }
};
