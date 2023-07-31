"use client";

import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Link from "next/link";
import Image from "next/image";
import { ListItemButton } from "@mui/material";

const style1 = {
  width: "100%",
  maxWidth: 500,
  bgcolor: "background.paper",
  borderRadius: "2rem",
};
const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
  height: "50vh",
  overflowY: "scroll",
  overflowX: "hidden",
};

const SuggestedModal = ({
  handleClose,
  text,
  suggestions,
  SmallAvatar,
  open,
  SearchNavigatehandler,
  onChangeHandler,
  NavigateInfluencerHandler,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <IconButton
            sx={{ p: "10px" }}
            aria-label="menu"
            // onClick={SearchNavigatehandler}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Analyse any influencer..."
            inputProps={{
              "aria-label": "search google maps",
            }}
            value={text}
            onChange={(e) => onChangeHandler(e.target.value)}
          />
        </Box>

        <Divider sx={{ width: 450, marginTop: "1rem" }} />
        {text.length >= 0 &&
          suggestions.length > 0 &&
          suggestions.map((suggestion, i) => (
            <List
              key={i}
              hover
              onClick={() => NavigateInfluencerHandler(suggestion)}
              sx={style1}
              component="nav"
              aria-label="mailbox folders"
            >
              <ListItemButton
                sx={{
                  borderRadius: "1rem",
                  // backgroundColor: "#F9F9F9",
                }}
              >
                <ListItemAvatar>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    badgeContent={
                      suggestion.influencer_social_media === "twitter" ? (
                        <Image
                          width={30}
                          height={30}
                          loading="lazy"
                          alt="logo"
                          src="/images/icons/TwitterIcon.png"
                          style={{ borderRadius: "50%" }}
                        />
                      ) : suggestion.influencer_social_media === "youtube" ? (
                        <Image
                          width={30}
                          height={30}
                          loading="lazy"
                          alt="logo"
                          src="/images/icons/youtube-icon.jpg"
                          style={{ borderRadius: "50%" }}
                        />
                      ) : suggestion.influencer_social_media === "instagram" ? (
                        <Image
                          width={30}
                          height={30}
                          loading="lazy"
                          alt="logo"
                          src="/images/icons/instagram.png"
                          style={{ borderRadius: "50%", width: "auto", height: "auto" }}
                        />
                      ) : null
                    }
                  >
                    <Image
                      quality={90}
                      height={40}
                      width={40}
                      loading="lazy"
                      alt={suggestion.influencer_name}
                      src={suggestion.influencer_profile_link}
                    />
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={suggestion.influencer_handle_name}
                  secondary={suggestion.influencer_name}
                />
              </ListItemButton>
            </List>
          ))}
        {text.length > 0 && suggestions.length === 0 && (
          <>
            <h6
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "400",
                marginTop: "4rem",
              }}
            >
              {"Sorry!! Currently there is no Influencer named" +
                " " +
                text +
                " " +
                "in our database but we would like you to fill this form by clicking the buttion below !"}
            </h6>
            <div className="banner-btn">
              <center>
                {" "}
                <Link href={`/error_page/${text}`}>
                  <PersonSearchIcon />
                  Click Here to Request
                </Link>
              </center>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default SuggestedModal;
