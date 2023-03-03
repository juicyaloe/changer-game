import { useState, forwardRef, useImperativeHandle } from 'react';
import DaumPostCode from 'react-daum-postcode';
import styled from '@emotion/styled';
import Optional from '../react/optional';
import Button from '@mui/material/Button';

const AddressPopupWrap = styled.aside`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  margin: 50px 10px;
  border: 1px solid black;

  z-index: 10;
`;

const AddressPopup = forwardRef<
  { open: () => void },
  { choiceButtonClicked: (data: string) => void }
>(({ choiceButtonClicked }, ref) => {
  const [isOpen, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({ open: () => setOpen(true) }), []);

  const addressSelected = (data: any) => {
    const roadAddress = data.roadAddress;
    const zonecode = data.zonecode;
    const bildingName = data.buildingName;

    setOpen(false);
    choiceButtonClicked(`${roadAddress} (${bildingName}, ${zonecode})`);
  };

  return (
    <Optional condition={isOpen}>
      <AddressPopupWrap>
        <DaumPostCode
          onComplete={addressSelected}
          autoClose={false}
        ></DaumPostCode>
        <Button
          variant="contained"
          style={{ position: 'absolute', left: 0, top: '46px' }}
          onClick={() => setOpen(false)}
        >
          닫기
        </Button>
      </AddressPopupWrap>
    </Optional>
  );
});

export default AddressPopup;
