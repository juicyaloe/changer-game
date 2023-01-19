import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  const navigate = useNavigate();

  const [currentText, setText] = useState<string>('');

  return (
    <Fragment>
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
    </Fragment>
  );
}
