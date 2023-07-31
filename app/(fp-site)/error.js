"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Error = ({ error, reset }) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Image
        loading="lazy"
        src={"/images/error/ErrorPage.avif"}
        alt="ErrorImg"
        width={500}
        height={500}
        // style={{ width: "350px" }}
      />
      <Typography
        style={{ fontSize: "1rem", textAlign: "center" }}
        variant="h3"
      >
        {error.message || "Something went wrong!!"}
      </Typography>
      <Container
        style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <Button
          sx={{ fontWeight: "500", fontSize: "1rem" }}
          onClick={reset}
          variant="contained"
          color="error"
          size="small"
        >
          Try Again
        </Button>
        <Button
          sx={{ fontWeight: "500", fontSize: "1rem", ml: 3 }}
          onClick={() => router.push("/")}
          variant="outlined"
          color="error"
          size="small"
        >
          Go Back To Home Page
        </Button>
      </Container>
    </Box>
  );
};

export default Error;
