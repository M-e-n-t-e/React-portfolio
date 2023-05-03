import React from "react";
import "./testimonials.css";
import AVTR1 from "../../asset/avatar1.jpg";
import AVTR2 from "../../asset/avatar2.jpg";
import AVTR3 from "../../asset/avatar3.jpg";
import AVTR4 from "../../asset/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
    {
        avater: AVTR1,
        name: "Tina Snow",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A fugiat quis quaerat suscipit temporibus iste qui tempore amet blanditiis atque voluptas quaerat suscipit temporibus iste qui tempore natus dicta assumenda aliquam id tempora, officia magni consequatur!",
    },
    {
        avater: AVTR2,
        name: "Shatta Wale",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A fugiat quis quaerat suscipit temporibus iste qui tempore amet blanditiis atque voluptas quaerat suscipit temporibus iste qui tempore natus dicta assumenda aliquam id tempora, officia magni consequatur!",
    },
    {
        avater: AVTR3,
        name: "Kwame Daspite",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A fugiat quis quaerat suscipit temporibus iste qui tempore amet blanditiis atque voluptas quaerat suscipit temporibus iste qui tempore natus dicta assumenda aliquam id tempora, officia magni consequatur!",
    },
    {
        avater: AVTR4,
        name: "Nana Ana",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A fugiat quis quaerat suscipit temporibus iste qui tempore amet blanditiis atque voluptas quaerat suscipit temporibus iste qui tempore natus dicta assumenda aliquam id tempora, officia magni consequatur!",
    },
];

const testimonials = () => {
    return (
        <div>
            <section id='testimonials'>
                <h5>Review from clients</h5>
                <h2>Testimonials</h2>
                <Swiper
                    className='container testimonials__container'
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {data.map(({ avater, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client__avater'>
                                    <img src={avater} alt='Avater one' />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </section>
        </div>
    );
};

export default testimonials;
