import { FC } from "react";
import './MainLayout.css';
import backIcon from "../../assets/Images/headerChevron.svg"
import snappExpressLogo from "../../assets/Images/expressLogo.svg"
import { RouteEnums } from "../../utils/enums/routeEnum";
import { useNavigate } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header-container">
        <div className="back-icon" onClick={() => navigate(-1)}>
          <img src={backIcon} alt="back" />
        </div>
        <a className="express-logo" href={`${RouteEnums.SUPERMARKET}`}>
          <img src={snappExpressLogo} alt="snapp express" />
        </a>
      </div>
      <div className="children-container">{children}</div>
    </>
  );
};