import React, {useState} from 'react';

const CreateAccountForm = ({ onSubmit }) => {
  const [accountType, setAccountType] = useState('CHECKING');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem('id');

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();

    // 封装请求体
    console.log(userId)
    const requestBody = {
      userId: parseInt(userId),
      accountType,
      authRequest: {
        id: parseInt(userId),
        password,
      },
    };

    setLoading(true);
    setError('');

    // 调用父组件传递的 onSubmit 方法
    onSubmit(requestBody, setLoading, setError);
  };

  return (
    <div className="create-account-form">
      <h2>Create New Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="accountType">Account Type</label>
          <select
            id="accountType"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            required
          >
            <option value="CHECKING">Checking</option>
            <option value="SAVINGS">Savings</option>
            <option value="LOAN">Loan</option>
          </select>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </div>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CreateAccountForm;
