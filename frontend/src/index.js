import React from 'react';
import ReactDOM from 'react-dom/client';

// You can split these into separate files for better organization
function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
        {/* ...navbar content from your HTML, converted to JSX... */}
      </nav>

      {/* Home Section */}
      <section id="home" className="intro-section">
        {/* ...home section content from your HTML, converted to JSX... */}
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        {/* ...services section content from your HTML, converted to JSX... */}
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* ...footer content from your HTML, converted to JSX... */}
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
