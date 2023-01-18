import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Pc from '../responsive/pc';
import Mobile from '../responsive/mobile';

const HeaderWrap = styled.div`
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;

const HeaderMainText = styled(Typography)`
  align-self: center;

  margin: 0 50px;

  white-space: nowrap;
`;

const SearchBarWrap = styled.div`
  white-space: nowrap;
`;

const SideButtonWrap = styled.div`
  margin-left: auto;
  margin-right: 10px;

  display: flex;
  gap: 10px;

  white-space: nowrap;
`;

export default function Header() {
  const navigate = useNavigate();
  const [currentText, setText] = useState<string>('');

  return (
    <HeaderWrap>
      <Pc>
        <HeaderMainText variant="h6">Game Changer</HeaderMainText>
      </Pc>
      <Mobile>
        <HeaderMainText variant="subtitle1">Game Changer</HeaderMainText>
      </Mobile>
      <Pc>
        <SearchBarWrap>
          <Input
            value={currentText}
            placeholder="검색"
            onChange={(e) => setText(e.target.value)}
          />

          <IconButton
            type="button"
            onClick={() => navigate(`/search?w=${currentText}`)}
          >
            <SearchIcon />
          </IconButton>
        </SearchBarWrap>
      </Pc>
      <SideButtonWrap>
        <IconButton type="button">
          <PersonIcon />
        </IconButton>
        <IconButton type="button">
          <ShoppingCartIcon />
        </IconButton>
      </SideButtonWrap>
    </HeaderWrap>
  );
}
