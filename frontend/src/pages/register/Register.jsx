import styles from "./register.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const Register = ({ services }) => {
  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          {services && (
            <div className={styles.services}>
              <h1>Service features</h1>
              {services.map((service) => (
                <Service individualService={service} />
              ))}
            </div>
          )}
        </div>
        <div className={styles.registerSection}>
          <div className={styles.titleAndSlogan}>
            <h1>Sign Up</h1>
            <p>Quick and easy.</p>
          </div>
          <div className={styles.inputs}>
            <div className={styles.fullName}>
              <input type="text" placeholder="First name" name="First name" />
              <input type="text" placeholder="Last name" name="Last name" />
            </div>
            <input
              type="text"
              placeholder="Mobile number or email"
              name="Mobile number or email"
            />
            <input type="text" placeholder="New password" name="New password" />
          </div>
          <button>Register</button>
          <p>
            Have an account?{"  "}
            <Link to={"/login"}>
              <span className={styles.login}> Login </span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

function Service({ individualService }) {
  return (
    <div className={styles.service}>
      <span>{<CheckCircleIcon sx={{ fontSize: "16px" }} />}</span>
      <p>{individualService}</p>
    </div>
  );
}

export default Register;
