"use client"

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import VerifiedIcon from "@mui/icons-material/Verified";
import Head from "next/head";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, CircularProgress } from "@mui/material";
import { ServicesURL } from "@/utils/baseUrl";
import Image from "next/image";

const tablehead = {
  padding: "20px",
  textAlign: "center",
  borderBottom: "1px solid #ddd",
  fontSize: "1rem",
  color: "white",
};
const tabledata = {
  padding: "8px",
  textAlign: "center",
  borderBottom: "1px solid #ddd",
  cursor: "pointer",
};
const InfluencerData = () => {

  const searchParams = useSearchParams()
  const content = searchParams.get("content")
  const socialmedia = searchParams.get("socialmedia")
  const title = searchParams.get("title")
  const [loading, setLoading] = useState(false);
  const [instagram, setInstagram] = useState([]);
  const router = useRouter();

  const NavigateInfluencerHandler = (instagram) => {
    router.push(
      `/topinfluencerdetail/?rank=${instagram?.influencer_rank}&name=${instagram?.influencer_name}&handlename=${instagram?.influencer_handle_name}&profile=${instagram?.influencer_profile_picture}&media=${instagram?.influencer_social_media}&followers=${instagram?.follower_count}&er=${instagram?.engagement_rate}&country=${instagram?.influencer_country}`
    );
  };

  useEffect(() => {
    const fetchTop = async () => {
      setLoading(true);
      try {
        let response = [];

        if (content === "toptwitter") {
          response = await axios.get(`${ServicesURL}dev/?filter=toptwitter`);
        } else if (content === "globaltwitter") {
          response = await axios.get(`${ServicesURL}dev/?filter=globaltwitter`);
        } else if (content === "topyoutube") {
          response = await axios.get(`${ServicesURL}dev/?filter=topyoutube`);
        } else if (content === "globalyoutube") {
          response = await axios.get(`${ServicesURL}dev/?filter=globalyoutube`);
        } else if (content === "gamingyoutube") {
          response = await axios.get(`${ServicesURL}dev/?filter=gamingyoutube`);
        } else if (content === "comedyyoutube") {
          response = await axios.get(`${ServicesURL}dev/?filter=comedyyoutube`);
        } else if (content === "topinstagram") {
          response = await axios.get(`${ServicesURL}dev/?filter=topinstagram`);
        } else if (content === "globalinstagram") {
          response = await axios.get(
            `${ServicesURL}dev/?filter=globalinstagram`
          );
        } else if (content === "fashioninsta") {
          response = await axios.get(`${ServicesURL}dev/?filter=fashioninsta`);
        } else if (content === "comedyinsta") {
          response = await axios.get(`${ServicesURL}dev/?filter=comedyinsta`);
        }
        setInstagram(JSON.parse(response.data));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTop();
  }, [content]);

  return (
    <>
      <Head>
        <title>Influencer Discovery</title>
        <meta
          name="description"
          content="Increases brand awareness & reach, Builds credibility & trust, Saves cost & time, Improves sales & marketing,
            Boosts sharing potential on SM, Enriches content strategy, Track prospective influencers, Get your message across your target audience, Niche & Trending influencers,
            Partner only with quality and authentic influencers, Find creators similar to top influencers"
        />
        <meta
          name="og:title"
          property="og:title"
          content="social media marketing,social media marketing agency,social media marketing platforms,best social media marketing agency,influencer discovery platform,
            influencer collaboration platform,influencer analytics platform,influencer brand analysis,influencer campaign analytics,social media influencer analytics platform,campaign management in digital marketing,
            campaign management digital marketing,campaign management platform,marketing automation platforms,marketing campaign management software open source"
        />
      </Head>

      <div
        className="home-service-area pt-100 pb-70"
        style={{ backgroundColor: "#E8EEF1" }}
      >
        <div className="container">
          <center>
            {socialmedia === "twitter" && (
              <Image
                quality={90}
                width={60}
                height={60}
                loading="lazy"
                src="/images/icons/TwitterIcon.png"
                style={{ borderRadius: "50%" }}
                alt="twitter"
              />
            )}
            {socialmedia === "youtube" && (
              <Image
                quality={90}
                width={60}
                alt="youtube"
                height={60}
                loading="lazy"
                src="/images/icons/youtube-icon.jpg"
                style={{ borderRadius: "50%" }}
              />
            )}
            {socialmedia === "instagram" && (
              <Image
                quality={90}
                alt="instagram"
                width={60}
                height={60}
                loading="lazy"
                src="/images/icons/instagram.png"
                style={{ borderRadius: "50%" }}
              />
            )}
            <h2>{title}</h2>
          </center>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          marginLeft: "3rem",
          marginRight: "3rem",
          marginBottom: "5rem",
        }}
      >
        {loading && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress sx={{ width: "40px", height: "40px" }} />
          </Box>
        )}
        {!loading && (
          <div
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr style={{ backgroundColor: "#051242" }}>
                  <th style={tablehead}>Rank</th>
                  <th style={tablehead}>Influencer</th>
                  <th style={tablehead}>Followers</th>
                  <th style={tablehead}>Country</th>
                  <th style={tablehead}>Eng. (Avg.)</th>
                </tr>
              </thead>
              <tbody>
                {instagram &&
                  instagram.map((i) => (
                    <tr
                      key={i.influencer_name + i.influencer_handle_name}
                      onClick={() => NavigateInfluencerHandler(i)}
                    >
                      <td style={tabledata}>{i.influencer_rank}</td>
                      <td style={tabledata}>
                        <div
                          className="container"
                          style={{ display: "flex", textAlign: "center" }}
                        >
                          <div className="image">
                            <Image
                              quality={90}
                              alt={i.influencer_handle_name || "influencer"}
                              width={50}
                              height={50}
                              loading="lazy"
                              src={i.influencer_profile_picture}
                              style={{
                                borderRadius: "50%",
                                width: "50px",
                                height: "50px",
                              }}
                            />
                          </div>
                          <div
                            className="text"
                            style={{ paddingLeft: "20px", textAlign: "left" }}
                          >
                            <h6>
                              {i.influencer_handle_name}
                              <VerifiedIcon
                                style={{ color: "#0081C9", fontSize: "15px" }}
                              />
                            </h6>
                            <p>{i.influencer_name}</p>
                          </div>
                        </div>
                      </td>
                      <td style={tabledata}>{i.follower_count}</td>
                      <td style={tabledata}>{i.influencer_country}</td>
                      <td style={tabledata}>{i.engagement_rate}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default InfluencerData;
