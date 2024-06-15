import { Link } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.loginSection}>
          <div className={styles.titleAndSlogan}>
            <h1>GO-TO</h1>
            <p>
              BUILDING & CONSTRUCTION <br />
              <span className={styles.sizing}>MAINTENANCE LLC.</span>
            </p>
          </div>
          <div className={styles.inputs}>
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="password" name="password" />
          </div>
          <p className={styles.forgot}>Forgot password</p>
          <button>Login</button>
          <p>
            Dont have an account ?{" "}
            <Link to={"/register"}>
              <span className={styles.register}> Register </span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
