import React from "react";
import "./Testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import { Pagination,Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Jack",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quis eveniet, itaque eius quam, molestiae rerum dolor officia quibusdam repellendus reprehenderit iusto. Quibusdam ipsa ut quas ratione sed quos esse?",
  },
  {
    avatar: AVATAR2,
    name: "Jack",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quis eveniet, itaque eius quam, molestiae rerum dolor officia quibusdam repellendus reprehenderit iusto. Quibusdam ipsa ut quas ratione sed quos esse?",
  },
  {
    avatar: AVATAR3,
    name: "Jack",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quis eveniet, itaque eius quam, molestiae rerum dolor officia quibusdam repellendus reprehenderit iusto. Quibusdam ipsa ut quas ratione sed quos esse?",
  },
  {
    avatar: AVATAR4,
    name: "Jack",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quis eveniet, itaque eius quam, molestiae rerum dolor officia quibusdam repellendus reprehenderit iusto. Quibusdam ipsa ut quas ratione sed quos esse?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination,Navigation, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
