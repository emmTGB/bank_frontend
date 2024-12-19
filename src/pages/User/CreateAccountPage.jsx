import React from 'react';
import {CreateAccountCard} from "../../components/account/CreateAccountCard";


const CreateAccountPage = () => {


  return (
    <div className="create-account-page-wrap"
      style={{
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        height: '100vh', overflow: 'auto'
      }}>
      <CreateAccountCard />
    </div>
  );
};

export default CreateAccountPage;
