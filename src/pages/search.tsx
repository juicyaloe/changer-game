import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const [searchParams] = useSearchParams();

  const word = searchParams.get('w');

  const navigate = useNavigate();

  return (
    <div>
      {word}를 검색하셨네요.
      <Button onClick={() => navigate('/')}>메인으로</Button>
    </div>
  );
}
