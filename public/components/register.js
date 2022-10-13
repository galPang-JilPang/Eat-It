const Register = () => `
  <form id="signup" class="signup-form">
    <label for="userid">이메일</label>
    <input type="email" name="userid" autocomplete="off" />
    <label for="password">비밀번호</label>
    <input type="password" name="password" autocomplete="off" />
    <label for="password-confirm">비밀번호 확인</label>
    <input type="password" name="password-confirm" autocomplete="off" />
    <a href="/welcome" class="signup-btn">회원가입</a>
    <div class="error-msg"></div>
  </form>
`;

export default Register;
