import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    // Add signup logic here (e.g., call API, etc.)
    console.log('Signup data:', formData);
    setError('');
    alert('Successfully Signed Up!');
    navigate('/login'); // Redirect to the login page after successful signup
  };

  return (
    <div style={styles.container}>
      <div style={styles.signupBox}>
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {error && <p style={styles.error}>{error}</p>}
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          
          <label style={styles.label}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />
          
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.loginLink}>
          Already have an account? <a href="/login" style={styles.link}>Login</a>
        </p>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  body: {
    fontFamily: "'Arial', sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundImage: 'url(https://positivepsychology.com.au/wp-content/uploads/2022/10/talent-developemnt-2-scaled.jpg)', // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
  },
  container: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://positivepsychology.com.au/wp-content/uploads/2022/10/talent-developemnt-2-scaled.jpg")', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
  },
 
  signupBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adding transparency for better visibility against the background
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '400px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    textAlign: 'left',
    fontSize: '14px',
    marginBottom: '5px',
    marginTop: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  loginLink: {
    marginTop: '20px',
    fontSize: '14px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default SignUp;