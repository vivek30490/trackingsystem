import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the values for now (you can later replace this with API call logic)
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Navigate to the dashboard after successful login
    navigate('/dashboard');

    // Optionally, reset the form (this is just a placeholder)
    setEmail('');
    setPassword('');
    setError('');
  };

  const styles = {
    body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url("https://www.resourceondemand.com/wp-content/uploads/2021/12/salesforce-skills-ROD-768x409.jpg")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      backgroundColor: '#f0f2f5',
      fontFamily: "'Arial', sans-serif",
    },
    formContainer: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.formContainer}>
        <h2>Login</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Log In</button>
        </form>
        <p style={{ marginTop: '10px' }}>
          Don't have an account? <Link to="/signup" style={{ color: '#007BFF' }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
