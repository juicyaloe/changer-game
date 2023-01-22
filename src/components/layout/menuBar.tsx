import { useState } from "react";

import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import PC from "../responsive/pc";
import Mobile from "../responsive/mobile";
import Typography from "@mui/material/Typography";

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
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const MenuBarButtonData: MenuBarButtonDataType[] = [
    {
      title: "Game Changer",
      onClickFunc: () => {
        navigate("/gc");
      },
      detailData: [
        {
          title: "About us",
          onClickFunc: () => {
            navigate("/gc/aboutus");
          },
        },
        {
          title: "Look Book",
          onClickFunc: () => {
            navigate("/gc/lookbook");
          },
        },
      ],
    },
    {
      title: "Custom Uniform",
      onClickFunc: () => {
        navigate("/custom");
      },
      detailData: [
        {
          title: "uniform",
          onClickFunc: () => {
            navigate("/custom/uniform");
          },
        },
        {
          title: "windbreaker",
          onClickFunc: () => {
            navigate("/custom/wb");
          },
        },
        {
          title: "trainning",
          onClickFunc: () => {
            navigate("/custom/tranning");
          },
        },
        {
          title: "vest",
          onClickFunc: () => {
            navigate("/custom/vest");
          },
        },
        {
          title: "pinnie",
          onClickFunc: () => {
            navigate("/custom/pinnie");
          },
        },
      ],
    },
    {
      title: "Product",
      onClickFunc: () => {
        navigate("/product");
      },
      detailData: [
        {
          title: "top",
          onClickFunc: () => {
            navigate("/product/top");
          },
        },
        {
          title: "pants",
          onClickFunc: () => {
            navigate("/product/pants");
          },
        },
        {
          title: "outer",
          onClickFunc: () => {
            navigate("/product/outer");
          },
        },
        {
          title: "under",
          onClickFunc: () => {
            navigate("/product/under");
          },
        },
        {
          title: "etc",
          onClickFunc: () => {
            navigate("/product/etc");
          },
        },
      ],
    },
    {
      title: "Event",
      onClickFunc: () => {
        navigate("/event");
      },
      detailData: [],
    },
    {
      title: "Review",
      onClickFunc: () => {
        navigate("/review");
      },
      detailData: [],
    },
    {
      title: "Magazine",
      onClickFunc: () => {
        navigate("/magazine");
      },
      detailData: [],
    },
  ];

  return (
    <>
      <PC>
        <MenuBarWrap>
          {MenuBarButtonData.filter((_, i) => i < 3).map((item, i) => (
            <MenuBarButton
              sx={{
                "&:hover": {
                  background: "inherit",
                },
                "& > .MuiTouchRipple-root": {
                  display: "none",
                },
              }}
              key={i}
              onMouseEnter={() => setCurrentIndex(i)}
              onMouseLeave={() => setCurrentIndex(-1)}
            >
              <span onClick={item.onClickFunc}>{item.title}</span>

              {currentIndex === i && item.detailData.length !== 0 && (
                <Panel sx={{ width: "120%", bgcolor: "background.paper" }}>
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
          {MenuBarButtonData.filter((_, i) => i >= 3).map((item, i) => (
            <MenuBarButton
              key={i + 3}
              onClick={item.onClickFunc}
              // onMouseEnter={() => setCurrentIndex(i + 3)}
              // onMouseLeave={() => setCurrentIndex(-1)}
            >
              {item.title}
              {currentIndex === i && item.detailData.length !== 0 && (
                <Panel sx={{ width: "120%", bgcolor: "background.paper" }}>
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
