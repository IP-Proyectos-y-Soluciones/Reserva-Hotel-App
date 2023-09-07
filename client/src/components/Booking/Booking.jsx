import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postBookings } from '../../redux/actions/bookingActions';
import { getBedroom } from '../../redux/actions/bedroomsActions';
import { getAllBookings } from '../../redux/actions/bookingActions';
import Loading from '../Loading/Loading';
import Calendar from '../Calendar/Calendar';
import PaypalPayment from '../Paypal/Paypal';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setPrice(0.0);
  // }, []);
  useEffect(() => {
    dispatch(getBedroom());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  // const targetId = '7af2e57b-1274-45f2-8c97-adc51a9e9915';
  // const targetBedroom = bedrooms.find((bedroom) => bedroom.id === targetId);
  // console.log(targetBedroom);
  const allBedrooms = useSelector((state) => state.bedrooms);
  console.log(allBedrooms);

  //const userId = useSelector((state) => state.users.loggedInUserId);
  const bedroomID = '7af2e57b-1274-45f2-8c97-adc51a9e9915';

  // const updatedBedrooms = allBedrooms.map((bedroom) => ({ id: bedroom.id }));
  // console.log(updatedBedrooms);
  //const bedrooms = useSelector((state) => state.bedrooms);
  //console.log(bedrooms);
  //const userId = useSelector((state) => state.users.loggedInUserId);
  //const userId = useSelector((state) => state.users.loggedInUserId);
  const userId = localStorage.getItem('userId');
  console.log(userId);
  const getAllBookingsState = useSelector((state) => state.bookings);
  console.log(getAllBookingsState);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id_room: bedroomID,
    id: userId,
    payment_reservation: '',
    transaction_number: '',
    reservation_code: '',
    reservation_description: '',
    admission_date: '',
    departure_date: '',
    reservation_date: '',
  });
  const [errors, setErrors] = useState({});
  const [bedroom, setBedroom] = useState({
    kind: '',
  });
  const [plans, setPlans] = useState({});
  console.log(plans);

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const postTomorrow = new Date();
  postTomorrow.setDate(today.getDate() + 2);
  const shortToday = today.toJSON().slice(0, 10);
  const shortTomorrow = tomorrow.toJSON().slice(0, 10);
  const shortPostTomorrow = postTomorrow.toJSON().slice(0, 10);
  const randomGuid = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const validation = (form) => {
    const errors = {};
    if (!form.admission_date) {
      errors.admission_date = 'Ingrese fecha de ingreso';
    }
    if (!form.departure_date) {
      errors.departure_date = 'Ingrese fecha de salida';
    }
    if (!form.id_room) {
      errors.duration = 'Ingrese tipo de habitacion';
    }
    return errors;
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    //validate({ ...form, [property]: value });
    setForm({
      ...form,
      [property]: value,
      id_room: bedroomId(),
      id: userId,
      payment_reservation: priceValue(),
      transaction_number: randomGuid(),
      reservation_code: randomGuid(),
      reservation_date: shortToday,
    });
    //console.log(form);
    // setBedroom({
    //   ...bedroom,
    //   bedroom: form.id_room,
    // });
    //console.log(bedroom);
    // setPlans({
    //   ...bedroom,
    //   plan: form.id_room,
    // });
    //console.log(bedroom);
    // setPrice(price);
    // console.log(price);
    // setPrice({
    //   ...price,
    //   price: 100,
    // });
    // console.log(price);
    setErrors(
      validation({
        ...form,
        [property]: value,
      }),
    );
  };
  console.log(form);

  const handlePlan = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setPlans({
      ...plans,
      [property]: value,
    });
  };

  const bedroomImg = () => {
    if (bedroom.kind == 'Estandar') {
      return 'https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802654/PF-HOTEL-APP/Bedrooms/SINGLE%20ROOM/2_mnvvzj.jpg';
    }
    if (bedroom.kind == 'Especial') {
      return 'https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802640/PF-HOTEL-APP/Bedrooms/DOUBLE%20ROOM/2_vhwjbr.jpg';
    }
    if (bedroom.kind == 'Suite') {
      return 'https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802573/PF-HOTEL-APP/Bedrooms/PREMIUM%20LOFT/3_lv73fo.jpg';
    }
  };

  const bedroomId = () => {
    if (bedroom.kind == 'Estandar') {
      // const bedroomFiltered = allBedrooms.bedrooms;
      // console.log(bedroomFiltered);
      // return bedroomFiltered;
      return '565e87c5-15ac-4b09-8bcc-8f866a8a69a9';
    }
    if (bedroom.kind == 'Especial') {
      // return 'https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802640/PF-HOTEL-APP/Bedrooms/DOUBLE%20ROOM/2_vhwjbr.jpg';
      return '0ca85136-9cf0-4088-8d20-f53ab80f16cb';
    }
    if (bedroom.kind == 'Suite') {
      // return 'https://res.cloudinary.com/dm9glx5a7/image/upload/v1692802573/PF-HOTEL-APP/Bedrooms/PREMIUM%20LOFT/3_lv73fo.jpg';
      return '4a1d01ae-c92c-439d-a2f8-72e4722ac99e';
    }
  };
  console.log(bedroomId());

  const priceValue = () => {
    if (bedroom.kind == 'Estandar') {
      return 100;
    }
    if (bedroom.kind == 'Especial') {
      return 150;
    }
    if (bedroom.kind == 'Suite') {
      return 200;
    }
  };

  const handleBedroom = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setBedroom({
      ...bedroom,
      kind: value,
    });
  };
  console.log(bedroom);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userId) {
      alert('Por favor inicie sesion');
      return navigate('/users/login');
    }
    if (!form.admission_date || !form.departure_date || !form.id) {
      return alert('Completar campos obligatorios');
    }
    if (errors.admission_date || errors.departure_date || errors.id) {
      return alert('Wrong input, please fill only with valid data');
    }

    dispatch(postBookings(form));
    alert('Booking created succesfully!');
    setForm({
      id_room: '',
      id: '',
      payment_reservation: '',
      transaction_number: '',
      reservation_code: '',
      reservation_description: '',
      admission_date: '',
      departure_date: '',
      reservation_date: '',
    });
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="h-full leading-8 text-center shadow-lg">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap shadow-lg">
            <h2 className="flex-auto border-2 border-black"></h2>
            <div className="border-2 border-black w-96"></div>
          </div>
          <div className="flex flex-wrap leading-10 text-center shadow-lg">
            <div className="flex-auto border-2 border-black">
              <Calendar />
            </div>
            <div className="border-2 ">
              <form
                className="flex flex-col gap-1 px-6 py-0 border-2 border-black w-96"
                onSubmit={(event) => handleSubmit(event)}
              >
                <label className="leading-6 text-left ">Check-in</label>
                <input
                  className="border-2 h-12"
                  name="admission_date"
                  value={form.admission_date}
                  type="date"
                  min={shortTomorrow}
                  onChange={handleChange}
                ></input>
                <label className="leading-6 text-left">Check-out</label>
                <input
                  className="border-2 h-12"
                  name="departure_date"
                  value={form.departure_date}
                  type="date"
                  min={shortPostTomorrow}
                  onChange={handleChange}
                ></input>
                <label className="leading-6 text-left">Habitación</label>
                <select
                  className="border-2 rounded-md h-12"
                  name="id_room"
                  value={bedroom.kind}
                  placeholder="Selecciona la habitación..."
                  onChange={handleBedroom}
                >
                  <option name="Habitacion" value="Estandar">
                    Estandar
                  </option>
                  <option name="Habitacion" value="Especial">
                    Especial
                  </option>
                  <option name="Habitacion" value="Suite">
                    Suite
                  </option>
                </select>
                <img src={bedroomImg()} />
                {/* <label className="leading-6 text-left">Plan</label>
                <select
                  className="border-2 rounded-md h-12"
                  name="planes"
                  value={plans.id_plan}
                  placeholder="Selecciona el plan..."
                  onChange={handlePlan}
                >
                  <option name="Personal" value="Personal">
                    Personal
                  </option>
                  <option name="Familiar" value="Familiar">
                    Familiar
                  </option>
                  <option name="Travel" value="Travel">
                    Travel
                  </option>
                </select> */}
                {/* <label className="leading-6 text-left">Personas</label>
                <select className="border-2">
                  <option>2</option>
                  <option>4</option>
                </select> */}
                <div className="flex flex-col gap-1">
                  <div className="w-full font-medium">Total: $ {priceValue()}</div>
                  <button className="w-full bg-[#B99768] py-2 rounded-md font-medium text-white" type="submit">
                    Reservar
                  </button>
                  <div>
                    <PaypalPayment price={priceValue()} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Booking;
