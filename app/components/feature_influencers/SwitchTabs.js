"use client";

import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import { Tab } from "@mui/material";
import Influencers1 from "@/app/components/Common/InfluencerData";
import { useRouter, useSearchParams } from "next/navigation";

const Tablabel = {
  fontSize: "15px",
  fontWeight: "bold",
};

const SwitchTabs = () => {
  const searchParams = useSearchParams();
  const socialmedia = searchParams.get("socialmedia");
  
  const [value, setValue] = useState(searchParams.get("tab"));
  const router = useRouter();

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ float: "right" }}>
        {socialmedia === "twitter" && (
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              style={Tablabel}
              label="Top India"
              value="1"
              onClick={() =>
                router.push(
                  "/feature_influencer?title=Top 10 Twitter Influencers in India with most followers&content=toptwitter&socialmedia=twitter&tab=1"
                )
              }
            />
            <Tab
              style={Tablabel}
              label="Top Global"
              value="2"
              onClick={() =>
                router.push(
                  "/feature_influencer?title=Top 10 Global Twitter Influencers with most followers&content=globaltwitter&socialmedia=twitter&tab=2"
                )
              }
            />
          </TabList>
        )}
        {socialmedia === "youtube" && (
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              style={Tablabel}
              label="Top India"
              value="1"
              onClick={() =>
                router.push(
                  "/feature_influencer?title=Top 10 YouTube Channels in India with millions of Subscribers&content=topyoutube&socialmedia=youtube&tab=1"
                )
              }
            />
            <Tab
              style={Tablabel}
              label="Top Global"
              value="2"
              onClick={() =>
                router.push(
                  "/feature_influencer?title=Top 10 Global YouTube Channels with millions of Subscribers&content=globalyoutube&socialmedia=youtube&tab=2"
                )
              }
            />
            <Tab
              style={Tablabel}
              label="Gaming"
              value="3"
              onClick={() =>
                router.push(
                  "/feature_influencer?title=Top 10 Gaming YouTube Channels in India&content=gamingyoutube&socialmedia=youtube&tab=3"
                )
              }
            />
            <Tab
              style={Tablabel}
              label="Comedy"
              value="4"
              onClick={() =>
                router.push(
                  "/feature_influencer?title=Top 10 Comedy YouTube Channels in India&content=comedyyoutube&socialmedia=youtube&tab=4"
                )
              }
            />
          </TabList>
        )}
        {socialmedia === "instagram" && (
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              style={Tablabel}
              label="Top India"
              value="1"
              onClick={() =>
                router.push(
                  "/feature_influencer?title=Top 10 Instagram Influencers in India with most followers&content=topinstagram&socialmedia=instagram&tab=1"
                )
              }
            />
            <Tab
              style={Tablabel}
              label="Top Global"
              value="2"
              onClick={() =>
                router.push(
                  "/feature_influencer?title=Top 10 Global Instagram Influencers with most followers&content=globalinstagram&socialmedia=instagram&tab=2"
                )
              }
            />
            <Tab
              style={Tablabel}
              label="Fashion"
              value="3"
              onClick={() =>
                router.push(
                  "/feature_influencer?title=Top Gaming Instagram Influencers in India&content=fashioninsta&socialmedia=instagram&tab=3"
                )
              }
            />
            <Tab
              style={Tablabel}
              label="Comedy"
              value="4"
              onClick={() =>
                router.push(
                  "/feature_influencer?title=Top Comedy Instagram Influencers in India&content=comedyinsta&socialmedia=instagram&tab=4"
                )
              }
            />
          </TabList>
        )}
      </Box>

      <Influencers1 />
    </TabContext>
  );
};

export default SwitchTabs;
