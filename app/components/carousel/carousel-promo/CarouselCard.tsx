import { Box, Button, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";

export default function CarouselCard() {
  var items = [
    {
      image: "/image/banner-1.jpg",
    },
    {
      image: "/image/banner-2.jpg",
    },
  ];

  return (
    <Carousel className="w-full">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }: { item: any }) {
  return (
    <Paper className="w-full h-[300px]">
      <Box className="w-full">
        <Image
          src={item.image}
          layout="fill" // Maintain fill layout
          className="object-fill" // Change to object-contain
          alt="gambar banner"
        />
      </Box>
    </Paper>
  );
}
