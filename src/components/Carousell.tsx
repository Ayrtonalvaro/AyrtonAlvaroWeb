import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Key } from 'react';
import { imageProject } from '../interface/ImageProject';

const Carousell = ({ imagesProject }: { imagesProject: imageProject[] }) => {
  return (
    <div className='shadow-2xl'>
      <Swiper
        className="cursor-pointer"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="fade"
      >
        {imagesProject.map(image => {
          return (
            <SwiperSlide key={image.src}>
              <img className='rounded-md' src={image.src} alt="Image project" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousell;
