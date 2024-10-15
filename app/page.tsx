"use client";

import Image from "next/image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import {
  AccountCircle,
  ArrowDownward,
  ArrowDropDown,
  ArrowDropDownCircleOutlined,
  CalendarMonth,
  Search,
  SearchOffOutlined,
  StarBorder,
} from "@mui/icons-material";
import EachUtils from "./components/EachUtils";
import { cardsData, gridItems } from "./utils/data";
import PromoCard from "./components/promo-card/PromoCard";
import GridCard from "./components/grid-card/GridCard";
import CarouselCard from "./components/carousel/carousel-promo/CarouselCard";
import Hero from "./components/hero/Hero";

export default function Home() {
  // const res = fetch("https://restaurant-api.dicoding.dev/list");
  // const data = res.json();

  return (
    <main className="flex  flex-col items-center justify-center w-100 ">
      {/* <div className="bg-[url('/image/bg-image.jpg')] w-full bg-cover bg-no-repeat bg-top  flex-col text-white justify-center items-center flex h-[100vh] flex-1 p-24"> */}
      <Box className=" bg-fixed w-full bg-cover bg-no-repeat bg-top  flex-col text-white justify-center items-center flex flex-1 bg-[#f8f8f8]">
        <Hero />

        <Box className="px-48 py-20">
          {/* promo card section*/}
          <section className="w-full flex flex-col p-20 rounded-xl bg-white justify-center items-stretch card shadow-md">
            <Box className="flex gap-5  bg-white rounded-xl w-full justify-start ">
              <h4 className="text-gray-600 text-2xl self-start text-left">
                Popular <span className="text-[#B19858] font-bold">Destination</span>{" "}
              </h4>
            </Box>
            <Box className="flex gap-10 mt-10  rounded-lg w-full justify-center">
              <EachUtils data={cardsData} render={(item: any, index: any) => <PromoCard key={index} data={item} />} />
            </Box>
          </section>
        </Box>

        <section className="w-full flex flex-col p-20 rounded-xl justify-center items-stretch">
          <div className="grid-container">
            <EachUtils
              data={gridItems}
              render={(item: any, index: any) => (
                <div className={`${item.className}`}>
                  <GridCard data={item} key={index} />
                </div>
              )}
            />
          </div>
        </section>
        <section className="w-full flex justify-center px-20">
          <CarouselCard />
        </section>
      </Box>
    </main>
  );
}
