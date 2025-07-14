import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Select, Table, Button, Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content, Footer } = Layout;
const { Option } = Select;

const AdminControlPage = () => {
    const [accounts, setAccounts] = useState([]);  // 存储所有账户数据
    const [filteredAccounts, setFilteredAccounts] = useState([]);  // 存储已筛选的账户数据
    const [loading, setLoading] = useState(false);  // 加载状态
    const [selectedBank, setSelectedBank] = useState(null);  // 当前选择的银行
    const [selectedAccount, setSelectedAccount] = useState(null);  // 当前选择的账户
    const [accountAction, setAccountAction] = useState('');  // 当前选择的操作
    const [bankNames, setBankNames] = useState([]);  // 存储银行名称
    const navigate = useNavigate();

    // 获取账户数据和银行名称
    useEffect(() => {
        setLoading(true);
        axios.get('http://10.85.21.73:9009/api/employee/account/list')
            .then(response => {
                setAccounts(response.data);  // 存储所有账户数据
                // 提取所有银行名称
                const bankList = [...new Set(response.data.map(account => account.bankName))];
                setBankNames(bankList);
                setLoading(false);
            })
            .catch(err => {
                message.error('获取账户数据失败');
                setLoading(false);
            });
    }, []);

    // 当选择银行名称时，过滤出对应银行的账户
    const handleBankChange = (value) => {
        setSelectedBank(value);
        // 如果选择了银行，则过滤出对应银行的账户
        const bankAccounts = value ? accounts.filter(account => account.bankName === value) : accounts;
        setFilteredAccounts(bankAccounts);
        setSelectedAccount(null);  // 重置账户选择
    };

    // 处理账户选择
    const handleAccountChange = (value) => {
        const account = filteredAccounts.find(account => account.accountNumber === value);
        setSelectedAccount(account);
        // 重置操作选择
        setAccountAction('');
    };

    // 根据当前账户状态，过滤操作
    const getAvailableActions = () => {
        if (!selectedAccount) return [];

        const currentStatus = selectedAccount.status;
        const actions = {
            ACTIVE: ['freeze', 'close', 'reportLost'],   // 激活状态可选冻结、注销、挂失
            FROZEN: ['activate', 'close', 'reportLost'],  // 冻结状态可选激活、注销、挂失
            CLOSED: ['activate', 'freeze', 'reportLost'], // 注销状态可选激活、冻结、挂失
            LOST: ['activate', 'freeze', 'close'],        // 挂失状态可选激活、冻结、注销
        };

        return actions[currentStatus] || [];  // 返回对应状态下的可操作类型
    };

    // 处理操作选择
    const handleActionChange = (value) => {
        setAccountAction(value);
    };

    // 提交操作
    const handleSubmit = async () => {
        if (!selectedAccount || !accountAction) {
            message.error('请选择账户和操作!');
            return;
        }

        setLoading(true);

        // 确定要提交的账户状态
        let newStatus = '';
        switch (accountAction) {
            case 'activate':
                newStatus = 'ACTIVE';
                break;
            case 'freeze':
                newStatus = 'FROZEN';
                break;
            case 'close':
                newStatus = 'CLOSED';
                break;
            case 'reportLost':
                newStatus = 'FROZEN';  // 挂失的状态和冻结一样
                break;
            default:
                message.error('无效的操作');
                setLoading(false);
                return;
        }

        try {
            // 提交请求更新账户状态
            const response = await axios.post('http://10.85.21.73:9009/api/employee/account/status', {
                accountId: selectedAccount.id,
                accountStatus: newStatus,
            });

            // 更新账户状态
            const updatedAccounts = accounts.map(account =>
                account.id === selectedAccount.id ? { ...account, status: newStatus } : account
            );
            setAccounts(updatedAccounts);  // 更新账户数据
            setFilteredAccounts(updatedAccounts.filter(account => account.bankName === selectedBank));

            message.success(`账户 ${selectedAccount.accountNumber} 状态已更新为: ${newStatus}`);
            setLoading(false);
            setAccountAction('');
        } catch (error) {
            message.error('更新账户状态失败');
            setLoading(false);
        }
    };

    // 表格列配置
    const columns = [
        {
            title: '账户号码',
            dataIndex: 'accountNumber',
            key: 'accountNumber',
        },
        {
            title: '账户状态',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: '银行名称',
            dataIndex: 'bankName',
            key: 'bankName',
        },
        {
            title: '余额',
            dataIndex: 'balance',
            key: 'balance',
            render: (text) => `￥${text}`,  // 格式化余额
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 48px',
                    backgroundColor: '#f0f2f5',
                }}
            >
                <div
                    style={{
                        width: '80%',
                        padding: '40px 20px',
                        background: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>账户管理</h2>

                    {/* 选择银行 */}
                    <Form layout="inline" style={{ marginBottom: '20px' }}>
                        <Form.Item label="选择银行">
                            <Select
                                style={{ width: 200 }}
                                onChange={handleBankChange}
                                placeholder="请选择银行"
                                allowClear
                            >
                                {bankNames.map((bank, index) => (
                                    <Option key={index} value={bank}>
                                        {bank}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        {/* 选择账户 */}
                        <Form.Item label="选择账户">
                            <Select
                                style={{ width: 200 }}
                                onChange={handleAccountChange}
                                placeholder="请输入账户号码"
                                showSearch  // 启用搜索功能
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().includes(input.toLowerCase())  // 搜索过滤
                                }
                                disabled={!accounts.length}
                            >
                                {filteredAccounts.map(account => (
                                    <Option key={account.id} value={account.accountNumber}>
                                        {account.accountNumber}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        {/* 选择操作 */}
                        <Form.Item label="账户操作">
                            <Select
                                style={{ width: 200 }}
                                value={accountAction}
                                onChange={handleActionChange}
                                placeholder="请选择操作"
                                disabled={!selectedAccount}
                            >
                                {getAvailableActions().map(action => {
                                    let actionLabel = '';
                                    switch (action) {
                                        case 'activate':
                                            actionLabel = '激活';
                                            break;
                                        case 'freeze':
                                            actionLabel = '冻结';
                                            break;
                                        case 'close':
                                            actionLabel = '注销';
                                            break;
                                        case 'reportLost':
                                            actionLabel = '挂失';
                                            break;
                                        default:
                                            break;
                                    }
                                    return (
                                        <Option key={action} value={action}>
                                            {actionLabel}
                                        </Option>
                                    );
                                })}
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                onClick={handleSubmit}
                                loading={loading}
                                style={{
                                    width: '100%',
                                    backgroundColor: '#38B474',
                                    borderColor: '#38B474',
                                }}
                            >
                                提交
                            </Button>
                        </Form.Item>
                    </Form>

                    <Table
                        dataSource={accounts}
                        columns={columns}
                        rowKey="id"  // 使用唯一的 id 作为表格行的 key
                        pagination={false}  // 取消分页
                        style={{ marginBottom: '20px' }}
                    />
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    padding: '10px 0',
                    position: 'relative',
                    bottom: '0',
                    width: '100%',
                    backgroundColor: '#38B474',
                    color: '#fff',
                }}
            >
                银行管理系统——给您的财富一个家
            </Footer>
        </Layout>
    );
};

export default AdminControlPage;
