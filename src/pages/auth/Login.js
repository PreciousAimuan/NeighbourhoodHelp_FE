import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/CSS/login.css";
import formImage from "../../assets/images/bg.svg";
import googleIcon from "../../assets/images/Google.svg";
import line from "../../assets/images/line.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    try {
      const response = await axios.post(
        `https://localhost:7198/api/User/login`,
        { email, password }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("role", response.data.role);
        setRole(response.data.role);
      } else {
        setError("Incorrect username or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
    }
  };

  useEffect(() => {
    if (role === "User") {
      navigate(`/user-dashboard`);
    } else if (role === "Agent") {
      navigate(`/agent-dashboard`);
    }
  }, [role]);

  return (
    <div className="loginContainer">
      <img src={formImage} alt="delivery-guy" />
      <div className="loginForm">
        <div className="loginHeader">
          <h1>Neighbourhood Help</h1>
          <h2>Welcome Back</h2>
          <button className="googleSearch">
            <img src={googleIcon} alt="google-icon" />{" "}
            <span>Sign in with Google</span>
          </button>
          <div className="oR">
            <img src={line} alt="line" className="lineImage" />
            <span>OR </span>
            <img src={line} alt="line" className="lineImage" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputFields">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ paddingLeft: "15px" }}
            />
            {error && !email && (
              <p className="error">Please enter your email address</p>
            )}

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingLeft: "15px" }}
            />
            {error && !password && (
              <p className="error">Please enter your password</p>
            )}
            <Link
              to="/resetinstruction"
              style={{ textDecoration: "none", color: "#000080" }}
            >
              Reset Password
            </Link>
          </div>

          <button
            type="submit"
            className="loginbtn"
            style={{ marginLeft: "15%" }}
          >
            Sign In
          </button>
          <p>
            <span className="paragraph" style={{ marginLeft: "30%" }}>
              Don't have an account?
            </span>{" "}
            <Link to="/signup">Sign Up here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export { Login };

// import React, { useState } from "react";
// import "../../assets/CSS/login.css";
// import formImage from "../../assets/images/bg.svg";
// import googleIcon from "../../assets/images/Google.svg";
// import line from "../../assets/images/line.svg";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please fill in all fields");
//       return;
//     }

//     setError("");
//     try {
//       const response = await axios.post(
//         `https://localhost:7198/api/User/login`,
//         {
//           email,
//           password,
//         }
//       );
//       if (response.status !== 200) {
//         alert("Incorrect username or password");
//       } else {
//         // Handle the response, maybe set user authentication token or redirect
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("userId", response.data.id);
//         localStorage.setItem("role", response.data.role);
//         console.log(response.data);
//         if (response.data.role === "user") {
//         navigate(`/user-dashboard`);
//       }
//     }
//       //window.location.reload();
//     } catch (error) {
//       // Handle errors, display error message, etc.
//       console.error("Login failed:", error);
//       setError("Login failed. Please try again.");
//     }
//   };

//   return (
//     <div className="loginContainer">
//       <img src={formImage} alt="delivery-guy" />
//       <div className="loginForm">
//         <div className="loginHeader">
//           <h1>Neighbourhood Help</h1>
//           <h2>Welcome Back</h2>
//           <button className="googleSearch">
//             <img src={googleIcon} alt="google-icon" />{" "}
//             <span>Sign in with Google</span>
//           </button>
//           <div className="oR">
//             <img src={line} alt="line" className="lineImage" />
//             <span>OR </span>
//             <img src={line} alt="line" className="lineImage" />
//           </div>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="inputFields">
//             <label htmlFor="email">Email Address:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{ paddingLeft: "15px" }}
//             />
//             {error && !email && (
//               <p className="error">Please enter your email address</p>
//             )}

//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={{ paddingLeft: "15px" }}
//             />
//             {error && !password && (
//               <p className="error">Please enter your password</p>
//             )}
//             <Link
//               to="/resetinstruction"
//               style={{ textDecoration: "none", color: "#000080" }}
//             >
//               Reset Password
//             </Link>
//           </div>

//           <button
//             type="submit"
//             className="loginbtn"
//             style={{ marginLeft: "15%" }}
//           >
//             Sign In
//           </button>
//           <p>
//             <span className="paragraph" style={{ marginLeft: "30%" }}>
//               Don't have an account?
//             </span>{" "}
//             <Link to="/signup">Sign Up here</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export { Login };
