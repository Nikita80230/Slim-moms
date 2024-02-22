import { StyledUserMenuPanel } from "./Styled";

const UserMenuPanel = () => {
  return (
    <StyledUserMenuPanel>
      <div className="tablet_desktopUserMenu">
        <span className="userName">Mykyta</span>
        <div className="divider"></div>
        <button className="exitBtn" type="button">
          Exit
        </button>
      </div>
    </StyledUserMenuPanel>
  );
};

export default UserMenuPanel;
