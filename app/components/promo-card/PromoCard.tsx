import { LocalActivity, LocationOn, StarBorder } from "@mui/icons-material";
import {
  Box,
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardMedia,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function PromoCard({ data }: { data: any }) {
  return (
    <MuiCard
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <CardMedia sx={{ height: 200 }} className="relative rounded-3xl" image={data.image} title={data.alt}>
        {data.badge && (
          <span className="absolute top-2 text-xs text-white bg-[#B19858] px-2 py-1 rounded-full left-2">
            <StarBorder sx={{ fontSize: "14px" }} /> Most View
          </span>
        )}
      </CardMedia>
      <CardContent>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          className="flex items-center gap-2 text-xs mb-4 font-lighter"
        >
          <LocationOn sx={{ fontSize: "14px" }} />
          {data.location}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} className="line-clamp-4">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-end  self-stretch flex-auto items-end">
        <Button size="small">Learn More</Button>
      </CardActions>
    </MuiCard>
  );
}
