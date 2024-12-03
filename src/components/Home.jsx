import {getUserId} from "../services/authService";
import {Navigate} from "react-router-dom";


const Home = () => {
  const userId = getUserId()

  if (userId) {
    return (
      <Navigate to={`/dashboard/${userId}`} replace={true}/>
    )
  }else{
    return (
      <Navigate to={'/auth/login'} replace={true}/>
    )
  }
}

export default Home;