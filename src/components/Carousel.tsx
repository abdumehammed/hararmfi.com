import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Carousel: React.FC = () => {
  const { t } = useLanguage();

  const slides = [
    {
      img: '/src/images/Carousel/carousal11.jpg',
      alt: t('slideAlt1'),
      title: t('slideTitle1'),
      subtitle: t('slideSubtitle1'),
      bg: 'bg-orange/50',
      align: 'items-end justify-end',
      cta: (
        <Link
          to="/about"
          className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          {t('learnMore')}
        </Link>
      ),
    },
    {
      img: '/src/images/Carousel/carousel2.png',
      alt: t('slideAlt2'),
      title: t('slideTitle2'),
      subtitle: t('slideSubtitle2'),
      bg: 'bg-black/50',
      align: 'items-center justify-center',
      cta: (
        <>
          <Link
            to="/services"
            className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
          >
            {t('getStarted')}
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
          >
            {t('learnMore')}
          </Link>
        </>
      ),
    },
    {
      img: '/src/images/Carousel/car3.svg',
      alt: t('slideAlt3'),
      title: t('slideTitle3'),
      subtitle: t('slideSubtitle3'),
      bg: 'bg-black/50',
      align: 'items-center justify-end',
      cta: (
        <>
          <Link
            to="/services"
            className="px-6 py-3 bg-yellow-500 text-blue-900 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            {t('getStarted')}
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
          >
            {t('learnMore')}
          </Link>
        </>
      ),
    },
  ];

  return (
    <section className="relative text-white overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 2000 }}
        navigation
        pagination={{ clickable: true }}
        loop={slides.length > 2}
        className="w-full h-[100px] md:h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className={`absolute inset-0  flex ${slide.align} px-6 pb-10 md:pb-16`}>
                <div className="max-w-3xl text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                    {/* {slide.title} */}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-blue-100">
                    {/* {slide.subtitle} */}
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    {/* {slide.cta} */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
