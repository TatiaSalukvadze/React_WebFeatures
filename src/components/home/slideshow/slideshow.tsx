import "./slideshow.css";
import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function slideshow() {
  const [slnum, setslnum] = useState(3);
  const [w, setw] = useState<number>(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setw(Number(window.innerWidth));
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  if (w > 762 && slnum !== 3) {
    setslnum(3);
  } else if (w < 762 && w > 450 && slnum !== 2) {
    setslnum(2);
  } else if (w < 450 && slnum !== 1) {
    setslnum(1);
  }

  return (
    <div className="slideshow">
      <p className="uperp">COMPLETED PROJECTS</p>
      <h1 className="uperh">
        Projects that are a sign of our <span>Experience</span>
      </h1>
      <Swiper
        slidesPerView={slnum}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="sl1">
          <div className="innerd">
            <p>Ronix</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sl2">
          <div className="innerd">
            <p>NewHospitals</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sl3">
          <div className="innerd">
            <p>DAILY</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sl4">
          <div className="innerd">
            <p>PUFI</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sl5">
          <div className="innerd">
            <p>Zhordania clinic</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sl6">
          <div className="innerd">
            <p>Ergonomics</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sl7">
          <div className="innerd">
            <p>City Mall</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sl8">
          <div className="innerd">
            <p>shuaguli</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sl9">
          <div className="innerd">
            <p>Pullman</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sl10">
          <div className="innerd">
            <p>innova</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sl11">
          <div className="innerd">
            <p>we care</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sl12">
          <div className="innerd">
            <p>ereta</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default slideshow;
