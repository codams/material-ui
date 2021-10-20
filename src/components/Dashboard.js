import { KeyboardArrowRight, WarningRounded } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  TextField,
  FormGroup,
  Stack,
  Checkbox,
  FormControlLabel,
  Button,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { LeftDrawer } from "./LeftDrawer";

export function Dashboard() {
  const [drawerStatus, setDrawerStatus] = useState(false);

  const handleDrawerStatusOpen = () => {
    setDrawerStatus(true);
  };

  const handleDrawerStatusClose = () => {
    setDrawerStatus(false);
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={handleDrawerStatusOpen}
          >
            {drawerStatus ? null : <KeyboardArrowRight />}
          </IconButton>
          <Typography variant="h4" color="inherit" component="div">
            Pierreval
          </Typography>
        </Toolbar>
      </AppBar>
      <LeftDrawer isOpen={drawerStatus} onClose={handleDrawerStatusClose} />

      <Box sx={{ width: "auto", height: "100%", ml: "240px", mt: "5%" }}>
        <form>
          <h3>Entrez vos informations</h3>
          <FormGroup sx={{ width: "33%", m: 2, pt: 3 }}>
            <Stack spacing={2}>
              <TextField id="surname" name="prenom" label="Prénom" value="" />
              <TextField id="name" name="name" label="Nom" value="" />
              <TextField type="email" name="email" label="Email" value="" />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Pierreval"
              />
              <Button variant="contained">Envoyer</Button>
              <Alert severity="warning">
                This is a warning alert — check it out!
              </Alert>
            </Stack>
          </FormGroup>
        </form>
      </Box>
      <Box
        sx={{
          mt: "50px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WarningRounded
          edge="start"
          color="warning"
          sx={{ fontSize: "10em" }}
        />
        <Box
          sx={{
            width: "30%",
            backgroundColor: "#ff9f50",
            padding: 4,
            borderRadius: 4,
          }}
        >
          <Typography variant="h4" component="h2">
            Attention
          </Typography>
          <Typography variant="body1" component="body">
            Chocolate chocolate chip dark chocolate, neopolitan coffee mint
            chocolate chip rocky road mint peanut butter strawberry pistachio.
            Rocky road dark chocolate Chocolate french vanilla dark chocolate
            cake batter peanut butter cookies and cream peanut butter pistachio
            french vanilla mint cake batter. Peanut butter cake batter chocolate
            chip chocolate chip cookie dough. Mint chocolate chip mint chocolate
            chip dark chocolate vanilla strawberry mint chocolate chip coffee
            coffee pistachio Chocolate chocolate chip cookie dough cake batter
            cake batter. Vanilla strawberry cake batter dark chocolate pistachio
            pistachio strawberry french vanilla.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
