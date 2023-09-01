import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, clearFilters, searchBooking } from '../../redux/features/bookingSlice';

const Booking = () => {
  const dispatch = useDispatch();
  const reservationDates = useSelector((resDates) => resDates.checkinDate);

  const [form, setForm] = useState({
    check_in: '',
    check_out: '',
    h_kind: '',
    plan: '',
    people_quantity: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.difficulty || !form.duration || !form.season || !form.countries) {
      return alert('Complete mandatory fields');
    }
    if (errors.name || errors.difficulty || errors.duration || errors.season || errors.countries) {
      return alert('Wrong input, please fill only with valid data');
    }
    dispatch(postActivity(form));
    alert('Activity created succesfully!');
    setForm({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: [],
    });
  };

  return (
    <div className="leading-8 text-center shadow-lg">
      <div className="flex flex-wrap shadow-lg">
        <h2 className="flex-auto border-2">Esta disponible!</h2>
        <div className="w-96 border-2">Simbologia</div>
      </div>
      <div className="flex flex-wrap leading-10  text-center shadow-lg">
        <div className="flex-auto border-2">Calendario</div>
        <div className="border-2">
          <form
            className="flex flex-col w-96 border-2 gap-1 px-6
           py-0"
            onSubmit={(event) => handleSubmit(event)}
          >
            <label className="leading-6 text-left">Check-in</label>
            <input className="border-2" type="date"></input>
            <label className="leading-6 text-left">Check-out</label>
            <input className="border-2" type="date"></input>
            <label className="leading-6 text-left">Habitación</label>
            <select className="border-2 rounded-md">
              <option>Estandar</option>
              <option>Especial</option>
              <option>Suite</option>
            </select>
            <img src="https://picsum.photos/300/168" />
            <label className="leading-6 text-left">Plan</label>
            <select className="border-2">
              <option>Personal</option>
              <option>Familiar</option>
              <option>Travel</option>
            </select>
            <label className="leading-6 text-left">Personas</label>
            <select className="border-2">
              <option>2</option>
              <option>4</option>
            </select>
            <div className="flex gap-1">
              <div className="w-1/2">Total $00.00</div>
              <button className="w-1/2 bg-zinc-900 text-white" type="submit">
                Reservar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
