import "./register.css";

const Register = () => {
  return (
    <section className="register-container">
      <form className="register-form">
        <h2>Register</h2>
        
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Repeat password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>

        <button type="submit">Create account</button>
        
        <p className="login-link">
          Already have profile? <a href="/login">Login here</a>
        </p>
      </form>
    </section>

  );
};

export default Register;
