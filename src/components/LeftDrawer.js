import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Drawer,
  IconButton,
  Box,
  Container,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

export function LeftDrawer({ isOpen, onClose }) {
  return (
    <Drawer variant="temporary" open={isOpen} onClose={() => onClose()}>
      <Box sx={{ width: "240px" }}>
        <Container>
          <IconButton edge="start" sx={{ mr: 2 }} onClick={() => onClose()}>
            <KeyboardArrowLeft />
          </IconButton>
        </Container>
      </Box>
      <Box sx={{ height: "100%" }}>
        <ListItemButton
          component="a"
          href="#simple-list"
          sx={{ textAlign: "center", backgroundColor: "lightgray" }}
        >
          <ListItemText primary="Welcome" />
        </ListItemButton>
        <Divider />
        <ListItemButton component="a" href="#simple-list">
          <ListItemText secondary="Parcelles" />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText secondary="Apporteurs d'affaires" />
        </ListItemButton>
      </Box>
    </Drawer>
  );
}
