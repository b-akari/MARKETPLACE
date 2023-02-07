import { Container, Typography } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";

const Contacts = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#82AAE3",
        mt: "100px",
        p: "50px",
        borderRadius: "30px",
        width: "max-content",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
        GET IN TOUCH <br />
      </Typography>
      <EmailIcon fontSize="large" sx={{ color: "white", mt: 5 }} /> <br />
      <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
        EMAIL <br />
      </Typography>
      <Typography variant="h6" sx={{ color: "white" }}>
        segubananabridgete@gmail.com
      </Typography>
      
      <PhoneIcon fontSize="large" sx={{ color: "white", mt: 2 }} />
      <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
        PHONE NUMBER
        <br />
      </Typography>
      <Typography variant="h6" sx={{ color: "white" }}>
        09092874927
      </Typography>

      <MarkChatUnreadIcon fontSize="large" sx={{ color: "white", mt: 2 }} />
      <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
        MESSENGER LINK
        <br />
        <Typography variant="h6" sx={{ color: "white" }}>
          https://m.me/bridgete
        </Typography>
      </Typography>
    </Container>
  );
};

export default Contacts;
