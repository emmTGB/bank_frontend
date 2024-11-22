import React from 'react';
import CreateAccountForm from '../components/CreateAccountForm';
import {createAccount} from "../services/accountService";

const CreateAccountPage = () => {
  const handleAccountCreation = async (requestBody, setLoading, setError) => {
    try {
      const response = await createAccount(requestBody)
      console.log('Account created:', response.data);
      // 可以在这里根据需求做其他操作，例如跳转到其他页面，显示成功消息等
    } catch (err) {
      console.error('Error creating account:', err);
      setError('Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create New Account</h1>
      <CreateAccountForm onSubmit={handleAccountCreation} />
    </div>
  );
};

export default CreateAccountPage;
