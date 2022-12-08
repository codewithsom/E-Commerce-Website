import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an Order 😎 —{" "}
        <strong>Congratulations 🎉 on Making your Purchase! Happy Shopping 🙂</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;