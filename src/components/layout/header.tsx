import { open } from "../../store/topBarSlice";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styled from "@emotion/styled";

import SearchBar from "../common/searchBar";

import PC from "../responsive/pc";
import Mobile from "../responsive/mobile";
import { useDispatch } from "react-redux";

const HeaderWrap = styled.div`
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderImg = styled.img`
  align-self: flex-start;

  padding: 0 50px;
`;

const SearchBarWrap = styled.div`
  flex-grow: 1;

  margin-left: 25px;

  align-self: flex-end;
  white-space: nowrap;
`;

const SideButtonWrap = styled.div`
  flex-grow: 1;
  text-align: right;

  & .MuiButtonBase-root {
    margin: 5px;
  }

  white-space: nowrap;
`;

const PCButton = () => {
  return (
    <SideButtonWrap>
      <IconButton type='button'>
        <PersonIcon />
      </IconButton>
      <IconButton type='button'>
        <ShoppingCartIcon />
      </IconButton>
    </SideButtonWrap>
  );
};

const MobileButton = () => {
  const dispatch = useDispatch();

  return (
    <SideButtonWrap>
      <IconButton type='button' onClick={() => dispatch(open())}>
        <SearchIcon />
      </IconButton>
      <IconButton type='button'>
        <PersonIcon />
      </IconButton>
      <IconButton type='button'>
        <ShoppingCartIcon />
      </IconButton>
    </SideButtonWrap>
  );
};

export default function Header() {
  return (
    <HeaderWrap>
      <PC>
        <HeaderImg src='/header/game_changer.png' alt='메인' />
        <SearchBarWrap>
          <SearchBar />
        </SearchBarWrap>
        <PCButton />
      </PC>

      <Mobile>
        <HeaderImg src='/header/game_changer.png' alt='메인' />
        <MobileButton />
      </Mobile>
    </HeaderWrap>
  );
}
