import { useNavigate } from "react-router";
import { Button, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import BasicStructure from "../components/structure/basicStructure";

export default function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const word = searchParams.get("w");

  return (
    <BasicStructure>
      <Typography>{word}에 대한 검색 결과:</Typography>
      <Button onClick={() => navigate("/")}>메인으로</Button>
    </BasicStructure>
  );
}
