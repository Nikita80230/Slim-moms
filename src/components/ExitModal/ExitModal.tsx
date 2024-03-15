import { FC } from "react";
import { createPortal } from "react-dom";

import CloseModalIcon from "@/assets/images/closeModalImg.svg?react";

import { StyledExitModal } from "./Styled";

type Props = {
  onCancel: () => void;
  onLogOut: () => void;
};

const ExitModal: FC<Props> = ({ onCancel, onLogOut }) => {
  const handleOverlayClick = (event: { currentTarget: any; target: any }) => {
    if (event.currentTarget === event.target) {
      onCancel();
    }
  };

  return createPortal(
    <StyledExitModal onClick={handleOverlayClick}>
      <div className="modal">
        <button type="button" className="closeBtn" onClick={onCancel}>
          <CloseModalIcon />
        </button>
        <p className="text">Do you really want to leave?</p>
        <div className="buttonsWrapper">
          <button type="button" className="btn acceptBtn" onClick={onLogOut}>
            Yes
          </button>
          <button type="button" className="btn cancelBtn" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </StyledExitModal>,
    document.getElementById("root") as HTMLDivElement
  );
};

export default ExitModal;
