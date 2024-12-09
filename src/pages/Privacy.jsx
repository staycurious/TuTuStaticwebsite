import React from 'react';

function Privacy() {
  return (
    <div className="legal-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <div className="legal-content">
          <p>Last updated: [Date]</p>
          
          <section>
            <h2>1. Information We Collect</h2>
            <p>We do not collect any personal information from our users. However, the game may collect anonymous usage data to improve game experience.</p>
          </section>

          <section>
            <h2>2. How We Use Information</h2>
            <p>Any collected anonymous data is used solely for:</p>
            <ul>
              <li>Game improvement and optimization</li>
              <li>Bug fixing and technical issues resolution</li>
              <li>Understanding game usage patterns</li>
            </ul>
          </section>

          <section>
            <h2>3. Data Security</h2>
            <p>We implement appropriate security measures to protect any information collected through the game.</p>
          </section>

          <section>
            <h2>4. Third-Party Services</h2>
            <p>Our game may use third-party services that collect information. These services include:</p>
            <ul>
              <li>App Store analytics</li>
              <li>Google Play analytics</li>
            </ul>
          </section>

          <section>
            <h2>5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at: [Your Contact Email]</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Privacy; 