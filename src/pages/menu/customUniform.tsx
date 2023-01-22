import MenuStructure from "../../components/structure/menuStructure";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const CustomList = styled(List)``;

export default function CustomUniform() {
  const navigate = useNavigate();
  return (
    <MenuStructure>
      <CustomList>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/custom/uniform")}>
            <ListItemIcon>
              <NavigateNextIcon />
            </ListItemIcon>
            <ListItemText primary='UNIFORM' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/custom/wb")}>
            <ListItemIcon>
              <NavigateNextIcon />
            </ListItemIcon>
            <ListItemText primary='WINDBREAKER' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/custom/tranning")}>
            <ListItemIcon>
              <NavigateNextIcon />
            </ListItemIcon>
            <ListItemText primary='TRAINNING' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/custom/vest")}>
            <ListItemIcon>
              <NavigateNextIcon />
            </ListItemIcon>
            <ListItemText primary='VEST' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/custom/pinnie")}>
            <ListItemIcon>
              <NavigateNextIcon />
            </ListItemIcon>
            <ListItemText primary='PINNIE' />
          </ListItemButton>
        </ListItem>
      </CustomList>
    </MenuStructure>
  );
}
