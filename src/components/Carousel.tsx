// for slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';



//
const Carousel: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      {/* Slider Section (carousel) */}
      <section className="relative  text-white overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000 }}
          navigation
          pagination={{ clickable: true }}
          loop
          className="w-full h-[500px] md:h-[600px]"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="src/images/aaa.png"
                alt={t('slideAlt1')}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange/50 flex items-end justify-end px-6 pb-10">
                <div className="max-w-3xl text-center">
                  <h1 className="text-4xl md:text-5xl text-blue-900font-bold mb-4">
                    {t('slideTitle1')}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-blue-100">
                    {t('slideSubtitle1')}
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <Link
                      to="/about"
                      className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
                    >
                      {t('learnMore')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="src/images/aaa.png"
                alt={t('slideAlt2')}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
                <div className="max-w-3xl text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {t('slideTitle2')}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-blue-100">
                    {t('slideSubtitle2')}
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <Link to="/services" className="px-6 py-3 bg-yellow-500 text-blue-900 rounded-lg font-semibold hover:bg-yellow-400 transition">
                      {t('getStarted')}
                    </Link>
                    <Link to="/about" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
                      {t('learnMore')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="src/images/bb.jpg"
                alt={t('slideAlt3')}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-end px-6">
                <div className="max-w-3xl text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {t('slideTitle3')}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-blue-100">
                    {t('slideSubtitle3')}
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <Link to="/services" className="px-6 py-3 bg-yellow-500 text-blue-900 rounded-lg font-semibold hover:bg-yellow-400 transition">
                      {t('getStarted')}
                    </Link>
                    <Link to="/about" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
                      {t('learnMore')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* end(carousel) */}
    </>

  );
};

export default Carousel;
