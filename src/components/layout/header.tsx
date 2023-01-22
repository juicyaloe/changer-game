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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <SideButtonWrap>
      <IconButton type='button' onClick={() => navigate("/mypage")}>
        <PersonIcon />
      </IconButton>
      <IconButton type='button' onClick={() => navigate("/cart")}>
        <ShoppingCartIcon />
      </IconButton>
    </SideButtonWrap>
  );
};

const MobileButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <SideButtonWrap>
      <IconButton type='button' onClick={() => dispatch(open())}>
        <SearchIcon />
      </IconButton>
      <IconButton type='button' onClick={() => navigate("/mypage")}>
        <PersonIcon />
      </IconButton>
      <IconButton type='button' onClick={() => navigate("/cart")}>
        <ShoppingCartIcon />
      </IconButton>
    </SideButtonWrap>
  );
};

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderWrap>
      <PC>
        <IconButton type='button'>
          <HeaderImg
            onClick={() => navigate("/")}
            src='/header/game_changer.png'
            alt='메인'
          />
        </IconButton>
        <SearchBarWrap>
          <SearchBar />
        </SearchBarWrap>
        <PCButton />
      </PC>

      <Mobile>
        <IconButton type='button'>
          <HeaderImg
            onClick={() => navigate("/")}
            src='/header/game_changer.png'
            alt='메인'
          />
        </IconButton>
        <MobileButton />
      </Mobile>
    </HeaderWrap>
  );
}
