import { Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { plans } from "../../lib/data/plans";

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function OurStore() {
  return (
    <div className={'our'}>
      <Typography className={'name'}>
        Our Store
      </Typography>
      <Stack className={'our-store'}>
        <Stack className={'main-text'}>
          <Typography className={'title'}>Jacob Arabo</Typography>
          <Typography className={'context'}>
            Jacob Arabo is an award-winning diamond jewelry designer,
            and founder of Jacob & Co. When he was 14, he emigrated with his family to the United States
            and adopted the American version of his name: Jacob Arabo.
            At the age of 16, he transferred from high school and enrolled in a jewelry design course in New York.
            Quickly becoming the star pupil in class, Jacob's design work got noticed by his professors, who advised him to make this field his career.
            He left the school after only 4 months and opened his own small kiosk in the Kaplan Jewelry Exchange (the heart of New York City's jewelry district).
            Five years later in 1986, at the age of 21, he officially started his own company, called Diamond Quasar, and began designing his own Jacob & Co. branded jewelry.
            Jacob Arabo began designing for a number of jewelry labels and private clients, before becoming popular in the sports and entertainment world for his designer jewelry.
            Arabo's design sense caught the eyes of celebrities, singers, and screen stars. By the early 1990s, his clientèle and business grew, and Arabo became known as "Jacob the Jeweler".
            His client list includes Jessica Simpson, Nick Lachey, Sean "P. Diddy" Combs, Mary J. Blige, Janet Jackson, Christy Turlington, Beyoncé and David Beckham.
          </Typography>
        </Stack>
        <Stack className={'main-img'}>
          <img src="/img/Jacob_Arabo.webp" className={'img'} alt="" />
        </Stack>
      </Stack>
    </div>
  );
}
