import { useState } from "react";

import { StyledUserMenuPanel } from "./Styled";
import ExitModal from "../ExitModal/ExitModal";

const UserMenuPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // const handleLogOut = () => {
  //   dispatch(logOut());
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <StyledUserMenuPanel>
      <div className="tablet_desktopUserMenu">
        <span className="userName">Mykyta</span>
        <div className="divider"></div>
        <button className="exitBtn" type="button" onClick={handleOpenModal}>
          Exit
        </button>
      </div>
      {isModalOpen && <ExitModal onCancel={handleCancel} />}
    </StyledUserMenuPanel>
  );
};

export default UserMenuPanel;
