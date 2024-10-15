import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function GridCard({ data }: any) {
  return (
    <Box className="relative h-full shadow-xl rounded-2xl group bg-transparent">
      <Image
        src={data.src}
        layout="fill"
        className="object-cover rounded-2xl" // Cover the container while maintaining aspect ratio
        alt={data.alt}
      />
      <div className="absolute inset-0 bg-black opacity-20 rounded-2xl" />
      <Box
        className="absolute z-50 text-white bottom-0 left-0 px-4 py-2  rounded-2xl rounded-tl-lg rounded-tr-lg w-full box-border h-10 group-hover:h-[60%] transition-all duration-300"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          backgroundColor: "rgba(0, 128, 128, 0.5)",
        }}
      >
        <Typography className="font-light text-md">{data.title}</Typography>
        <Typography className="mt-4 text-xs line-clamp-3">{data.description}</Typography>
      </Box>
    </Box>
  );
}
