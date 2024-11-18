"use client";
// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// // import required modules
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      photo:
        "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "আমন ধান",
      price: "৪০",
    },
    {
      id: 2,
      photo:
        "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "২৮ ধান",
      price: "৫০",
    },
    {
      id: 3,
      photo:
        "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "মিনিকেট চাল",
      price: "৮০",
    },
  ];
  return (
    <div className="md:w-6/12 w-11/12 mx-auto mt-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold ">ব্যাবহার কারির মতামত</h1>
        <p className="my-3 text-slate-500 md:w-5/6 w-full text-center mx-auto">
          ব্যাবহার কারির মতামতব্যাবহার কারির মতামতব্যাবহার কারির মতামতব্যাবহার
          কারির মতামতব্যাবহার কারির মতামতব্যাবহার কারির মতামতব্যাবহার কারির
          মতামত
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="mb-20">
              <div>
                <Image
                  className="mx-auto w-32 h-32 rounded-full "
                  width={500}
                  height={500}
                  src={testimonial.photo}
                  alt={testimonial.title}
                ></Image>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold">harshad meheta</h3>
                <p className="w-2/4 mx-auto text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores magni est placeat autem molestiae laboriosam! Sapiente
                  cumque rerum non voluptatem.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
