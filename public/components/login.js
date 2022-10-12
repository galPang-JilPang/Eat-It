const Login = () => `
  <form id="signin" class="signin-form">
    <label for="userid">이메일</label>
    <input type="email" name="userid" autocomplete="off" />
    <label for="password">비밀번호</label>
    <input type="password" name="password" autocomplete="off" />
    <button class="signin">로그인</button>
    <div class="error-msg"></div>
  </form>
`;

export default Login;
