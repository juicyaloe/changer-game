import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styled from '@emotion/styled';

import DaumPostcode from 'react-daum-postcode';
import { useState } from 'react';

const NormalTextFieldWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 10px;
`;

const AddressPopup = styled.aside`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;

  z-index: 10;

  border: 1px solid gray;
`;

type NormalTextFieldMode = 'password' | 'address' | 'none';

interface NormalTextFieldType {
  id: string;
  text: string;
  value: string;
  onChangeValue: React.Dispatch<React.SetStateAction<string>>;
  mode?: NormalTextFieldMode;
}

export default function NormalTextField({
  id,
  text,
  value,
  onChangeValue,
  mode = 'none',
}: NormalTextFieldType) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const addressSelected = (data: any) => {
    const roadAddress = data.roadAddress;
    const zonecode = data.zonecode;
    const bildingName = data.buildingName;

    onChangeValue(`${roadAddress} (${bildingName}, ${zonecode})`);
    setOpen(false);
  };

  return (
    <NormalTextFieldWrap>
      <label htmlFor={id}>{text}:</label>
      <TextField
        hiddenLabel
        multiline={mode === 'address' ? true : false}
        disabled={mode === 'address' ? true : false}
        id={id}
        size="small"
        variant="standard"
        type={mode === 'password' ? 'password' : ''}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
      {mode === 'address' && (
        <Button variant="outlined" size="small" onClick={() => setOpen(true)}>
          주소 선택
        </Button>
      )}
      {isOpen && (
        <AddressPopup>
          <DaumPostcode
            onComplete={addressSelected}
            autoClose={false}
          ></DaumPostcode>
        </AddressPopup>
      )}
    </NormalTextFieldWrap>
  );
}
