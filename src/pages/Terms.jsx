import React from 'react';

function Terms() {
  return (
    <div className="legal-page">
      <div className="container">
        <h1>Terms of Service</h1>
        <div className="legal-content">
          <p>Last updated: [Date]</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By downloading and using Number Cross, you agree to these Terms of Service.</p>
          </section>

          <section>
            <h2>2. License</h2>
            <p>We grant you a limited, non-exclusive, non-transferable license to use Number Cross for personal, non-commercial purposes.</p>
          </section>

          <section>
            <h2>3. Restrictions</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Modify or create derivative works of the game</li>
              <li>Reverse engineer or decompile the game</li>
              <li>Remove any copyright or proprietary notices</li>
            </ul>
          </section>

          <section>
            <h2>4. Intellectual Property</h2>
            <p>All rights, title, and interest in Number Cross remain with us.</p>
          </section>

          <section>
            <h2>5. Contact</h2>
            <p>For any questions regarding these terms, please contact: [Your Contact Email]</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Terms; 