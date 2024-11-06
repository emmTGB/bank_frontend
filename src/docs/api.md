- 服务器端口
`9009`
- 用户登录
```
post /auth/login
{
    String username;
    String password;
}
```
- 用户注册
```
post /auth/register
{
    String username;
    String password;
    String fullName;  //不可空, 默认username, 后续实现
    String email;
    String phone;  // 可空
}
```