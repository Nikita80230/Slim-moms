import { FC } from "react";

import { StyledExitModal } from "./Styled";

import MobileCloseBtnIcon from "@/assets/images/mobileCloseBtnSvg.svg?react";

type Props = {
  onCancel: () => void;
};

const ExitModal: FC<Props> = ({ onCancel }) => {
  const handleOverlayClick = (event: { currentTarget: any; target: any }) => {
    if (event.currentTarget === event.target) {
      onCancel();
    }
  };

  return (
    <StyledExitModal onClick={handleOverlayClick}>
      <div className="modal">
        <button type="button" className="closeBtn" onClick={onCancel}>
          <MobileCloseBtnIcon />
        </button>
        <p className="text">Do you really want to leave?</p>
        <div className="buttonsWrapper">
          <button type="button" className="btn acceptBtn">
            Yes
          </button>
          <button type="button" className="btn cancelBtn" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </StyledExitModal>
  );
};

export default ExitModal;
