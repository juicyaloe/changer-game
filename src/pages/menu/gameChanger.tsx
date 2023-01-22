import MenuStructure from "../../components/structure/menuStructure";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BookIcon from "@mui/icons-material/Book";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const CustomList = styled(List)``;

export default function GameChanger() {
  const navigate = useNavigate();
  return (
    <MenuStructure>
      <CustomList>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/gc/aboutus")}>
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary='ABOUT US' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/gc/lookbook")}>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary='LOOK BOOK' />
          </ListItemButton>
        </ListItem>
      </CustomList>
    </MenuStructure>
  );
}
