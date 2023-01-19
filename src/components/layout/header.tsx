import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styled from '@emotion/styled';

import SearchBar from '../common/searchBar';

import PC from '../responsive/pc';
import Mobile from '../responsive/mobile';

const HeaderWrap = styled.div`
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderMainText = styled(Typography)`
  margin: 0 50px;
  white-space: nowrap;
`;

const SearchBarWrap = styled.div`
  flex-grow: 1;

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
      <IconButton type="button">
        <PersonIcon />
      </IconButton>
      <IconButton type="button">
        <ShoppingCartIcon />
      </IconButton>
    </SideButtonWrap>
  );
};

const MobileButton = () => {
  return (
    <SideButtonWrap>
      <IconButton type="button">
        <SearchIcon />
      </IconButton>
      <IconButton type="button">
        <PersonIcon />
      </IconButton>
      <IconButton type="button">
        <ShoppingCartIcon />
      </IconButton>
    </SideButtonWrap>
  );
};

export default function Header() {
  return (
    <HeaderWrap>
      <PC>
        <HeaderMainText variant="h6">Game Changer</HeaderMainText>
        <SearchBarWrap>
          <SearchBar />
        </SearchBarWrap>
        <PCButton />
      </PC>

      <Mobile>
        <HeaderMainText variant="subtitle1">Game Changer</HeaderMainText>
        <MobileButton />
      </Mobile>
    </HeaderWrap>
  );
}
