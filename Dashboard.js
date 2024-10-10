import React from 'react';
import { useNavigate } from 'react-router-dom'; // To handle logout navigation

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens if necessary
    // Example: localStorage.removeItem('token');
    // Redirect to login page
    navigate('/Login');
  };

  const styles = {
    body: {
      fontFamily: "'Arial', sans-serif",
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      backgroundImage: 'url(https://image.freepik.com/free-vector/skill-levels-knob-button-increasing-skills-level_127544-130.jpg)', // Replace with your background image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      color: 'white',
    },
    header: {
      backgroundColor: 'rgba(40, 44, 52, 0.8)', // Semi-transparent background for header
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    navTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
    },
    navLinks: {
      display: 'flex',
      gap: '15px',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    logoutButton: {
      padding: '10px 20px',
      margin: '0',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: '#ff4757',
      color: 'white',
      transition: 'background-color 0.3s',
    },
    hero: {
      padding: '50px',
      display: 'flex',
      justifyContent: 'flex-start', // Align content to the left
      alignItems: 'flex-start', // Align to the top left
      height: 'calc(100vh - 100px)', // Ensures the content takes the remaining space
    },
    mainContent: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      maxWidth: '600px',
      textAlign: 'left', // Align the text to the left
      color: 'black',
    },
    footer: {
      backgroundColor: 'rgba(40, 44, 52, 0.8)', // Semi-transparent footer
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
    },
  };

  return (
    <div style={styles.body}>
      {/* Navbar */}
      <header style={styles.header}>
        <h1 style={styles.navTitle}>Dashboard</h1>
        <button
          style={styles.logoutButton}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#e63946')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff4757')}
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <div style={styles.hero}>
        <div style={styles.mainContent}>
          <h2>Welcome to your dashboard</h2>
          <p>Here you can manage your certifications and track your progress.</p>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="/about" style={styles.navLink}>About Us</a>
          <a href="/contact" style={styles.navLink}>Contact</a>
          <a href="/help" style={styles.navLink}>Help</a>
        </div>
        <div>© 2024 Certification Tracker, Inc.</div>
      </footer>
    </div>
  );
};

export default Dashboard;