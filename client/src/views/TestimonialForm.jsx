
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTestimonials } from "../redux/actions/testimonialsActions";
import { getBedroom } from "../redux/actions/bedroomsActions";

const TestimonialForm = () => {
  const dispatch = useDispatch();
  const [testimonial, setTestimonial] = useState({
    testimony: "",
    bedroomId: "",
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false); // Estado para el mensaje de éxito

  const { bedrooms } = useSelector((state) => state.bedrooms);

  useEffect(() => {
    dispatch(getBedroom());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial({
      ...testimonial,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const testimonialToSend = {
        ...testimonial,
        approved: false,
      };

      await dispatch(postTestimonials(testimonialToSend));

      setTestimonial({
        testimony: "",
        bedroomId: "",
      });

      // Mostrar el mensaje de éxito
      setIsSubmitSuccess(true);
    } catch (error) {
      console.error("Error al agregar el testimonio:", error);
    }
  };

  return (
    <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
      <h2 className="mb-4 text-xl font-bold">Agregar Testimonio</h2>
      {isSubmitSuccess && (
        <div className="mb-4 font-bold text-green-600">Testimonio enviado con éxito.</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="testimony"
          >
            Testimonio:
          </label>
          <textarea
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            name="testimony"
            id="testimony"
            value={testimonial.testimony}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="bedroomId"
          >
            Habitación:
          </label>
          <select
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            name="bedroomId"
            id="bedroomId"
            value={testimonial.bedroomId}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una habitación</option>
            {bedrooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.kind_h}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6 text-center">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Agregar Testimonio
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestimonialForm;
