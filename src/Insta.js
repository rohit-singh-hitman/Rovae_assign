import React from "react";

const Insta = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class=""
              src="https://getwallpapers.com/wallpaper/full/7/1/3/1017956-amazing-friends-tv-show-wallpapers-1920x1080.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class=""
              src="https://media.glamour.com/photos/5696373593ef4b09520fc68d/master/w_1280,c_limit/entertainment-2013-04-friends-cast-1-main.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class=""
              src="https://media.gettyimages.com/photos/matt-leblanc-who-plays-joey-on-the-hit-nbc-series-friends-makes-a-picture-id2575772?k=6&m=2575772&s=612x612&w=0&h=as1GiRVKPvxSaAnycDeZtr7Uo0ThYSjc_FHadRXFuXo="
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};
export default Insta;
