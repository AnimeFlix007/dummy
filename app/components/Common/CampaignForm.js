"use client";

import { Button, MenuItem, TextField } from "@mui/material";
import React from "react";
import CookieIcon from "@mui/icons-material/Cookie";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import axios from "axios";
import baseUrl from "@/utils/baseUrl";

const today = new Date();

const alertContent = (title, text, icon) => {
  MySwal.fire({
    title,
    text,
    icon,
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const CampaignForm = () => {
  const router = useRouter();

  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  const socialMedia =
    query === "instagram" || query === "twitter" || query === "youtube"
      ? query
      : "";

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    values,
    touched,
    setFieldValue,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      campaignTitle: "",
      campaignHashtag: "",
      startDate: "",
      endDate: "",
      campaignObjective: "",
      campaignSocialMedia: socialMedia,
      campaignObjectiveDetail: "",
    },
    validationSchema: Yup.object({
      campaignTitle: Yup.string().required("Campaign Titile is required"),
      campaignHashtag: Yup.string().required("Campaign Hashtag is required"),
      startDate: Yup.date()
        .required("Start date is required")
        .typeError("Invalid start date format"),
      endDate: Yup.date()
        .when(
          "startDate",
          (startDate, schema) =>
            startDate &&
            schema?.min(startDate, "End date must be after start date")
        )
        .required("End date is required")
        .typeError("Invalid end date format"),
      campaignObjective: Yup.string().required(
        "Campaign Objective is required"
      ),
      campaignObjectiveDetail: Yup.string(),
      campaignSocialMedia: Yup.string().required(
        "Campaign Social Media is required"
      ),
    }),
    onSubmit: async (values, action) => {
      try {
        const url = `${baseUrl}/api/inquiry/`;
        await axios.post(url, values);
        alertContent(
          "Congratulations!",
          "Your message was successfully. We will get back to you soon",
          "success"
        );
        action.resetForm();
        router.push("/");
      } catch (error) {
        alertContent(
          "Oops...",
          error.message ||
            "Your message was successfully. We will get back to you soon",
          "error"
        );
      }
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        padding: "2rem",
        overflowX: "hidden",
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          color: "rgb(56, 56, 56)",
          fontWeight: "600",
          marginLeft: ".9rem",
          marginBottom: ".5rem",
        }}
      >
        New Campaign
      </h3>

      <React.Fragment>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            width: "95%",
            gridGap: ".75rem",
            alignItems: "flex-start",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              margin: "1.5rem 0",
            }}
          >
            <TextField
              id="campaignTitle"
              name="campaignTitle"
              label="Campaign Name"
              variant="outlined"
              fullWidth
              helperText={touched.campaignTitle && errors.campaignTitle}
              error={errors.campaignTitle && touched.campaignTitle}
              value={values.campaignTitle}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              margin: "1.5rem 0",
              width: "100%",
            }}
          >
            <TextField
              id="campaignHashtag"
              name="campaignHashtag"
              label="Campaign Hashtag"
              helperText={touched.campaignHashtag && errors.campaignHashtag}
              error={errors.campaignHashtag && touched.campaignHashtag}
              value={values.campaignHashtag}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              fullWidth
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              margin: "1.5rem 0",
              width: "100%",
            }}
          >
            <LocalizationProvider
              fullWidth
              dateAdapter={AdapterDayjs}
              size="small"
            >
              <Stack style={{ width: "100%" }} spacing={3} size="small">
                <DesktopDatePicker
                  label="Start Date"
                  inputFormat="MM/DD/YYYY"
                  value={values.startDate}
                  onChange={(date) => setFieldValue("startDate", date)}
                  minDate={today}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      onBlur={() => ({ ...touched, ["startDate"]: true })}
                      error={touched.startDate && Boolean(errors.startDate)}
                      helperText={touched.startDate && errors.startDate}
                    />
                  )}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              margin: "1.5rem 0",
              width: "100%",
            }}
          >
            <LocalizationProvider
              fullWidth
              dateAdapter={AdapterDayjs}
              size="small"
            >
              <Stack style={{ width: "100%" }} spacing={3} size="small">
                <DesktopDatePicker
                  label="End Date"
                  inputFormat="MM/DD/YYYY"
                  value={values.endDate}
                  onChange={(date) => setFieldValue("endDate", date)}
                  minDate={today}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      onBlur={() => ({ ...touched, ["endDate"]: true })}
                      error={Boolean(touched.endDate && errors.endDate)}
                      helperText={touched.endDate && errors.endDate}
                    />
                  )}
                />
              </Stack>
            </LocalizationProvider>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "1.2rem",
              color: "rgb(125, 125, 125)",
              fontWeight: "600",
              margin: "2rem .5rem",
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <CookieIcon style={{ marginRight: ".25rem" }} />
            <h5>Objective</h5>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            width: "95%",
            gridGap: ".75rem",
            alignItems: "flex-start",
            margin: "0 auto",
          }}
        >
          <TextField
            id="campaignObjective"
            name="campaignObjective"
            label="Campaign Objective"
            select
            helperText={touched.campaignObjective && errors.campaignObjective}
            error={
              Boolean(errors.campaignObjective) && touched.campaignObjective
            }
            value={values.campaignObjective}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            fullWidth
          >
            <MenuItem value={"Sales"}>Sales</MenuItem>
            <MenuItem value={"Product"}>Product/Service Promotion</MenuItem>
            <MenuItem value={"Brand Awareness"}>Brand Awareness</MenuItem>
            <MenuItem value={"Others"}>Others</MenuItem>
          </TextField>
          <TextField
            id="campaignSocialMedia"
            name="campaignSocialMedia"
            label="Social Media"
            select
            helperText={
              touched.campaignSocialMedia && errors.campaignSocialMedia
            }
            error={
              Boolean(errors.campaignSocialMedia) && touched.campaignSocialMedia
            }
            value={values.campaignSocialMedia}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="outlined"
            fullWidth
          >
            <MenuItem value={"instagram"}>Instagram</MenuItem>
            <MenuItem value={"twitter"}>Twitter</MenuItem>
            <MenuItem value={"youtube"}>Youtube</MenuItem>
          </TextField>
        </div>
        <TextField
          name="campaignObjectiveDetail"
          error={Boolean(
            errors.campaignObjectiveDetail && touched.campaignObjectiveDetail
          )}
          placeholder="Please Explain what you want to Accomplish"
          value={values.campaignObjectiveDetail}
          onChange={handleChange}
          onBlur={handleBlur}
          id="campaignObjectiveDetail"
          fullWidth
          multiline
          rows={5}
          style={{ width: "95%", margin: "1.5rem", marginLeft: "1.75rem" }}
          helperText={
            touched.campaignObjectiveDetail && errors.campaignObjectiveDetail
          }
        />
      </React.Fragment>

      <div
        style={{
          display: "flex",
          flexDirection: " row",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          paddingRight: "1rem",
        }}
      >
        <Button
          onClick={handleSubmit}
          style={{ marginRight: ".75rem" }}
          variant="contained"
        >
          Save
        </Button>
        <Button
          onClick={() => router.back()}
          style={{ marginRight: ".75rem" }}
          variant="contained"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CampaignForm;
