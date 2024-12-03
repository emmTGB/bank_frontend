import "mdui/components/button-icon.js"
import '@mdui/icons/arrow-back.js';
import {useNavigate} from "react-router-dom";

export const NavBackButton = ({className, size}) => {
  const navigate = useNavigate();
  const handleBack = () => {
    if(window.history.length > 1){
      navigate(-1);
    }else{
      navigate('/');
    }
  }

  return (
    <div className={`nav-back-wrap ${className}`}>
      <mdui-button-icon onClick={handleBack} style={{fontSize: `${size}px`}}>
        <mdui-icon-arrow-back/>
      </mdui-button-icon>
    </div>
  )
}