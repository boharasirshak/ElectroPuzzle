import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="swiper hero__swiper">
          <div className="swiper-wrapper hero__swiper-wrapper">
            <div className="swiper-slide hero__swiper-slide">
              <div
                style={{
                  background: `url('/images/hero-img.webp') no-repeat center center`,
                  backgroundSize: `cover`,
                }}
                className="hero__background"
              ></div>
            </div>
            <div className="swiper-slide hero__swiper-slide">
              <div
                style={{
                  background:
                    'url("/images/professionally-work.webp") no-repeat center center cover', // Fix the syntax errors by enclosing the url value in quotes and adding a comma after the background property
                }}
                className="hero__background"
              ></div>
            </div>
            <div className="swiper-slide hero__swiper-slide">
              <div
                style={{
                  background:
                    "url('/images/main-photo.webp') no-repeat center center cover",
                }}
                className="hero__background"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrapper">
        <main className="main">
          <section className="projects">
            <div className="projects__head">
              <img
                src="/images/projects-icon.svg"
                alt=""
                className="projects__icon"
                width="46px"
                height="53px"
              />
              <h2 className="projects__title">НОВЫЕ ПРОЕКТЫ.</h2>
            </div>
            <div className="projects__content">
              <a href="/pedals" className="projects__item-link">
                <div className="projects__item">
                  <figure>
                    <img
                      className="projects__item-img"
                      src="/images/big-boss.webp"
                      alt=""
                    />
                    <figcaption>Big boss</figcaption>
                  </figure>
                </div>
              </a>

              <a href="/pedals" className="projects__item-link">
                <div className="projects__item">
                  <figure>
                    <img
                      className="projects__item-img"
                      src="/images/wings.webp"
                      alt=""
                    />
                    <figcaption>The wings</figcaption>
                  </figure>
                </div>
              </a>

              <a href="/pedals" className="projects__item-link">
                <div className="projects__item">
                  <figure>
                    <img
                      className="projects__item-img"
                      src="/images/dino-power.webp"
                      alt=""
                    />
                    <figcaption>Dino power</figcaption>
                  </figure>
                </div>
              </a>

              <a href="/pedals" className="projects__item-link">
                <div className="projects__item">
                  <figure>
                    <img
                      className="projects__item-img"
                      src="/images/radio-ray.webp"
                      alt=""
                    />
                    <figcaption>Radio ray</figcaption>
                  </figure>
                </div>
              </a>
            </div>


          </section>

          <section className="offers">
            <div className="offers__grid-block grid sm:grid-rows-4 grid-cols-4 gap-[8px]">
              <div className="sm:row-span-2 sm:col-span-2 minh-[58rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">OVERDRIVE</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/overdrive.webp"
                        alt=""
                        className="offers__img h-[40rem] w-[50rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="xl:col-span-1 sm:col-span-2 minh-[30rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">DISTORTION</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/distortion.webp"
                        alt=""
                        className="offers__img h-[16rem] w-[17rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="xl:col-span-1 sm:col-span-2 minh-[30rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">COMPRESSION</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/compression.webp"
                        alt=""
                        className="offers__img h-[16rem] w-[17rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div
                id="offers__extra"
                className="xl:row-span-2 xl:col-span-2 minh-[58rem]"
              >
                <div className="offers__extra">
                  <div className="offers__extra-block">
                    <h3 className="offers__extra-title">
                      Профессиональная работа со звуком
                    </h3>
                    <p className="offers__extra-text">
                      Адаптация классической схемы Dallas-Arbiter Fuzz Face,
                      выпущенной в 1966 году. Fuzz Face была скопирована
                      непосредственно с Tone Bender Mk. 1.5
                    </p>
                    <div className="offers__extra-block-img">
                      <img
                        src="/images/professionally-work.webp"
                        alt=""
                        className="offers__extra-img"
                      />
                    </div>
                    <a href="/pedals" className="offers__extra-btn">
                      ПОДРОБНЕЕ
                    </a>
                  </div>
                </div>
              </div>
              <div className="xl:col-span-1 sm:col-span-2 minh-[30rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">BOOST</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/boost.webp"
                        alt=""
                        className="offers__img h-[17rem] w-[17rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="xl:col-span-1 sm:col-span-2 minh-[30rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">FUZZ</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/fuzz.webp"
                        alt=""
                        className="offers__img h-[17rem] w-[18rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-2 minh-[30rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">MODULATION AND DELAY</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/delay.webp"
                        alt=""
                        className="offers__img h-[17rem] w-[19rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-2 minh-[30rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">FILTERS AND EQ</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/filters.webp"
                        alt=""
                        className="offers__img h-[17rem] w-[20rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="offers__grid">
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">COMPRESSION</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/compression.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">DISTORTION</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/distortion.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">OVERDRIVE</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/overdrive-mobile.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">BOOST</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/boost.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">FUZZ</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/fuzz.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">MODULATION AND DELAY</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/delay.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">FILTERS AND EQ</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/filters.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
            </div>
          </section>

        </main>

        <Footer />
      </div>

      
    </>
  );
}
