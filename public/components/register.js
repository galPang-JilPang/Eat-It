const Register = () => `
  <form id="signup" class="signup-form">
    <label for="username">닉네임</label>
    <input type="text" name="username" autocomplete="off" />
    <label for="userid">이메일</label>
    <input type="email" name="userid" autocomplete="off" />
    <label for="password">비밀번호</label>
    <input type="password" name="password" autocomplete="off" />
    <label for="password-confirm">비밀번호 확인</label>
    <input type="password-confirm" name="password-confirm" autocomplete="off" />
    <button class="signup">회원가입</button>
    <div class="error-msg"></div>
  </form>
`;

export default Register;
