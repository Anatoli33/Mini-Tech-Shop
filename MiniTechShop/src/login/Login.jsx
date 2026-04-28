import "./login.css";

const Login = () => {
  return (
    <section className="login-container">
      <form className="login-form">
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <button type="submit">Login</button>
        
        <p className="register-link">
          Do not have profile? <a href="/register">Register here</a>
        </p>
      </form>
    </section>

  );
};

export default Login;
