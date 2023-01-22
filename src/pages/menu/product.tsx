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

export default function Product() {
  const navigate = useNavigate();
  return (
    <MenuStructure>
      <CustomList>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/product/top")}>
            <ListItemIcon>
              <NavigateNextIcon />
            </ListItemIcon>
            <ListItemText primary='TOP' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/product/pants")}>
            <ListItemIcon>
              <NavigateNextIcon />
            </ListItemIcon>
            <ListItemText primary='PANTS' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/product/outer")}>
            <ListItemIcon>
              <NavigateNextIcon />
            </ListItemIcon>
            <ListItemText primary='OUTER' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/product/under")}>
            <ListItemIcon>
              <NavigateNextIcon />
            </ListItemIcon>
            <ListItemText primary='UNDER' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/product/etc")}>
            <ListItemIcon>
              <NavigateNextIcon />
            </ListItemIcon>
            <ListItemText primary='ETC' />
          </ListItemButton>
        </ListItem>
      </CustomList>
    </MenuStructure>
  );
}
