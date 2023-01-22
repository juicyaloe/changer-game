import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import type { RootState } from "../../store/store";
import { close } from "../../store/topBarSlice";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import SearchBar from "./searchBar";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 5px 0;
  gap: 10px;
`;

const SearchBarWrap = styled.span`
  width: 200px;

  white-space: nowrap;
`;

export default function TopBar() {
  const isActive = useSelector((state: RootState) => state.topBar.isActive);
  const dispatch = useDispatch();

  const closeDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.target && (event.target as any).type === "text") {
      return;
    }

    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    dispatch(close());
  };

  return (
    <Drawer anchor='top' open={isActive} onClose={closeDrawer}>
      <StyledBox
        role='presentation'
        onClick={closeDrawer}
        onKeyDown={closeDrawer}
      >
        <Typography sx={{ whiteSpace: "nowrap" }}>검색: </Typography>
        <SearchBarWrap>
          <SearchBar />
        </SearchBarWrap>
      </StyledBox>
    </Drawer>
  );
}
