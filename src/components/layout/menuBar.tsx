import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

const MenuBarWrap = styled.div`
  height: 50px;

  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const MenuBarButton = styled(Button)`
  color: black;
  padding: 0 30px;

  height: 50px;
  white-space: nowrap;
`;

export default function MenuBar() {
  return (
    <MenuBarWrap>
      {true && (
        <>
          <MenuBarButton>Game Changer</MenuBarButton>
          <MenuBarButton>Best</MenuBarButton>
          <MenuBarButton>Custom Uniform</MenuBarButton>
          <MenuBarButton>Product</MenuBarButton>
          <MenuBarButton>Sale</MenuBarButton>
          <MenuBarButton>Event</MenuBarButton>
          <MenuBarButton sx={{ color: 'blue !important' }}>
            Review
          </MenuBarButton>
          <MenuBarButton>Magazine</MenuBarButton>
        </>
      )}
      {false && (
        <>
          <MenuBarButton>Best</MenuBarButton>
          <MenuBarButton>Custom Uniform</MenuBarButton>
          <IconButton type="button" sx={{ p: '10px', px: '20px' }}>
            <MenuIcon />
          </IconButton>
        </>
      )}
    </MenuBarWrap>
  );
}
