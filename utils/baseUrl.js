const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.footprynt.in"
    : "http://localhost:3000";

export const PrideBaseURL = "https://pride.footprynt.in/"
export const ServicesURL = "https://vdtteq14bc.execute-api.ap-south-1.amazonaws.com/"

export default baseUrl;