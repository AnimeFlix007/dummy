"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import {
  purple,
  red,
  blue,
  green,
  pink,
  brown,
  grey,
  orange,
  yellow,
} from "@mui/material/colors";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx";

const colors = [
  red[500],
  blue[500],
  pink[500],
  yellow[900],
  green[500],
  purple[500],
  brown[500],
  grey[500],
  orange[500],
];
function generateRandomLetter() {
  let result = " ";
  const charactersLength = characters.length;

  result = characters.charAt(Math.floor(Math.random() * charactersLength));

  return result.toUpperCase();
}

export default function TotalAvatars() {
  return (
    <AvatarGroup total={12} style={{ justifyContent: "center" }}>
      <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random() * 9)] }}>
        {generateRandomLetter()}
      </Avatar>
      <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random() * 9)] }}>
        {generateRandomLetter()}
      </Avatar>
      <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random() * 9)] }}>
        {generateRandomLetter()}
      </Avatar>
      <Avatar sx={{ bgcolor: colors[Math.ceil(Math.random() * 9)] }}>
        {generateRandomLetter()}
      </Avatar>
    </AvatarGroup>
  );
}
