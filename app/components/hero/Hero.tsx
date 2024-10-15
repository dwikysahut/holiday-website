import { ArrowDropDown, CalendarMonth, Search } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Hero() {
  const onClickExploreHandler = () => {
    window.scrollTo({
      top: window.innerHeight, // Scrolls to 100vh
      behavior: "smooth", // Smooth scroll effect
    });
  };
  return (
    <Box className="bg-[url('/image/hero.jpg')] bg-fixed w-full bg-cover bg-no-repeat bg-bottom  flex-col text-white justify-center items-center flex   flex-1  ">
      {/* <div className="absolute bg-black opacity-40 w-100 max-w-[800px] max-h-[400px] rounded-lg"></div> */}
      <Box className=" w-full rounded-xl bg-transparent h-auto ">
        <Box className="z-30 flex flex-col items-center ">
          <Box
            className=" flex flex-col items-center gap-20 py-20 px-40 w-full h-screen justify-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <h1 className="text-8xl font-bold">Try Journey&apos;s</h1>
            <h2 className="text-4xl font-lighter text-white">Lorem ipsum dolor sit amet consectetur,</h2>
            <Box className="p-2 rounded-md">
              <Box
                className="flex rounded-sm gap-8 items-stretch
              md:flex-row flex-col px-12 py-8 w-100"
              >
                <TextField
                  label="Tanggal Check In"
                  type="date"
                  id="input-with-icon-textfield"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "white", // default label color
                      fontWeight: "bold",
                    },

                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white", // default color
                    },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "gray", // hover color
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "white", // focused color
                    },
                    "& input": {
                      color: "white", // change input text color (including the date placeholder)
                    },
                    "& input[type='date']::-webkit-calendar-picker-indicator": {
                      filter: "invert(1)", // changes the calendar icon color to white
                    },
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start" sx={{ color: "white" }}>
                          <CalendarMonth />
                        </InputAdornment>
                      ),
                    },
                  }}
                  variant="standard"
                />

                <TextField
                  label="Tanggal Check Out"
                  type="date"
                  id="input-with-icon-textfield"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "white", // default label color
                      fontWeight: "bold",
                    },

                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white", // default color
                    },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "gray", // hover color
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "white", // focused color
                    },
                    "& input": {
                      color: "white", // change input text color (including the date placeholder)
                    },
                    "& input[type='date']::-webkit-calendar-picker-indicator": {
                      filter: "invert(1)", // changes the calendar icon color to white
                    },
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start" sx={{ color: "white" }}>
                          <CalendarMonth />
                        </InputAdornment>
                      ),
                    },
                  }}
                  variant="standard"
                />

                <button className=" px-4  py-2 bg-transparent border border-white rounded-lg text-white-500 hover:bg-white hover:text-gray-600 transition-all duration-300 flex gap-2 justify-between items-center">
                  <div className="flex justify-between items-stretch gap-2">
                    <Search />
                  </div>
                </button>
              </Box>
            </Box>
            <Button
              className="flex gap-2 group text-gray-400  hover:bg-black rounded-full border-0 w-80"
              sx={{ backgroundColor: "white" }}
              onClick={onClickExploreHandler}
              variant="outlined"
            >
              <span className="group-hover:bg-transparent origin-center transition-all duration-300 border border-transparent border-b-2">
                {" "}
                Explore
              </span>
              <ArrowDropDown />
            </Button>
          </Box>
        </Box>
        <Box className="bg-white w-full flex relative overflow-hidden rounded-br-lg rounded-bl-lg">
          <Box className="px-20 py-36 flex relative text-black flex-col gap-5 flex-2 w-100 flex-1">
            <p className="font-bold text-2xl text-[#0B72AD]">Visit Your Destination</p>
            <hr className="border-[#B19858]" />
            <p className="font-light text-sm leading-relaxed z-30">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit harum incidunt ad, vero consectetur dolore
              itaque reiciendis cum quo tempora, ullam delectus eum, necessitatibus nulla quasi perspiciatis non quidem
              nesciunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique odio quod, hic rem commodi
              laudantium in distinctio earum sit repudiandae consectetur iste ducimus illo ipsa itaque sunt facilis
              ratione magni? <span className="text-[#B19858] cursor-pointer">Read More ...</span>
            </p>
            <Box className="bg-white h-[130%] w-72 rotate-[20deg] absolute top-[-70px] right-[-90px]  z-10"></Box>
          </Box>
          <Box className="relative flex-1 ">
            {/* Set a fixed height for the container */}
            <Image
              src="/image/bg-mage.jpg"
              layout="fill"
              className="object-cover" // Cover the container while maintaining aspect ratio
              alt="gambar pantai"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
