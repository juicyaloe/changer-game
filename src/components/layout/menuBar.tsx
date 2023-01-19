import { useState } from 'react';

import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import PC from '../responsive/pc';
import Mobile from '../responsive/mobile';

const MenuBarWrap = styled.div`
  height: 50px;

  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const MenuBarButton = styled(Button)`
  position: relative;

  color: black;
  padding: 0 30px;

  height: 50px;
  white-space: nowrap;

  z-index: 1;
`;

const MobileWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Panel = styled(List)`
  position: absolute;

  left: 0%;
  top: 40px;

  border: 1px solid gray;
`;

const PanelButton = styled(ListItemButton)`
  font-size: 0.75rem;
`;

interface MenuBarButtonDataType {
  title: string;
  onClickFunc: () => void;
  detailData: MenuBarDetailButtonDataType[];
}

interface MenuBarDetailButtonDataType {
  title: string;
  onClickFunc: () => void;
}

export default function MenuBar() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const MenuBarButtonData: MenuBarButtonDataType[] = [
    {
      title: 'Game Changer',
      onClickFunc: () => {},
      detailData: [
        { title: 'About us', onClickFunc: () => {} },
        {
          title: 'Look Book',
          onClickFunc: () => {},
        },
      ],
    },
    {
      title: 'Custom Uniform',
      onClickFunc: () => {},
      detailData: [
        { title: 'uniform', onClickFunc: () => {} },
        { title: 'windbreaker', onClickFunc: () => {} },
        { title: 'trainning', onClickFunc: () => {} },
        { title: 'vest', onClickFunc: () => {} },
        { title: 'pinnie', onClickFunc: () => {} },
      ],
    },
    {
      title: 'Product',
      onClickFunc: () => {},
      detailData: [
        { title: 'top', onClickFunc: () => {} },
        { title: 'pants', onClickFunc: () => {} },
        { title: 'outer', onClickFunc: () => {} },
        { title: 'under', onClickFunc: () => {} },
        { title: 'etc', onClickFunc: () => {} },
      ],
    },
    { title: 'Event', onClickFunc: () => {}, detailData: [] },
    { title: 'Review', onClickFunc: () => {}, detailData: [] },
    { title: 'Magazine', onClickFunc: () => {}, detailData: [] },
  ];

  return (
    <>
      <PC>
        <MenuBarWrap>
          {MenuBarButtonData.map((item, i) => (
            <MenuBarButton
              sx={{
                '&:hover': {
                  background: 'inherit',
                },
                '& > .MuiTouchRipple-root': {
                  display: 'none',
                },
              }}
              key={i}
              onClick={item.onClickFunc}
              onMouseEnter={() => setCurrentIndex(i)}
              onMouseLeave={() => setCurrentIndex(-1)}
            >
              {item.title}
              {currentIndex === i && item.detailData.length !== 0 && (
                <Panel sx={{ width: '120%', bgcolor: 'background.paper' }}>
                  {item.detailData.map((detailItem, i) => (
                    <>
                      <PanelButton onClick={detailItem.onClickFunc}>
                        {detailItem.title}
                      </PanelButton>
                      {i + 1 !== item.detailData.length && <Divider />}
                    </>
                  ))}
                </Panel>
              )}
            </MenuBarButton>
          ))}
        </MenuBarWrap>
      </PC>
      <Mobile>
        <MobileWrap>
          <MenuBarWrap>
            {MenuBarButtonData.filter((_, i) => i % 2 === 0).map((item, i) => (
              <MenuBarButton key={i} onClick={item.onClickFunc}>
                {item.title}
              </MenuBarButton>
            ))}
          </MenuBarWrap>
          <Divider />
          <MenuBarWrap>
            {MenuBarButtonData.filter((_, i) => i % 2 === 1).map((item, i) => (
              <MenuBarButton key={i} onClick={item.onClickFunc}>
                {item.title}
              </MenuBarButton>
            ))}
          </MenuBarWrap>
        </MobileWrap>
      </Mobile>
    </>
  );
}
