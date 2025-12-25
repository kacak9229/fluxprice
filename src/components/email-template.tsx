import * as React from 'react';

interface EmailTemplateProps {
  firstName?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div
    style={{
      backgroundColor: '#f6f9fc',
      padding: '40px 0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }}
  >
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        margin: '0 auto',
        maxWidth: '600px',
        borderRadius: '8px',
        border: '1px solid #e1e1e1',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }}
    >
      {/* Logo Section - Replace src with your actual hosted logo URL if available */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#000000', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
          FluxPrice AI
        </h1>
      </div>

      {/* Main Content */}
      <h2 style={{ color: '#333333', fontSize: '20px', fontWeight: '600', marginBottom: '20px' }}>
        Welcome to the future of pricing, {firstName || 'there'}!
      </h2>

      <p style={{ color: '#555555', fontSize: '16px', lineHeight: '24px', marginBottom: '24px' }}>
        Thanks for joining the FluxPrice waitlist. We are thrilled to have you on board.
        Our team is working hard to bring you the most advanced AI-powered pricing optimization tool for Shopify.
      </p>

      <div style={{ backgroundColor: '#f0f7ff', borderRadius: '6px', padding: '20px', marginBottom: '24px', borderLeft: '4px solid #2563eb' }}>
        <p style={{ margin: 0, color: '#1e3a8a', fontSize: '14px' }}>
          <strong>Your spot is secured.</strong> You will be among the first to get access when we launch beta.
        </p>
      </div>

      <p style={{ color: '#555555', fontSize: '16px', lineHeight: '24px', marginBottom: '30px' }}>
        In the meantime, keep an eye on your inbox for exclusive updates and early-bird pricing strategies.
      </p>

      {/* Button */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <a
          href="https://fluxprice.com/thank-you"
          style={{
            backgroundColor: '#000000',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '16px',
            display: 'inline-block',
          }}
        >
          Confirm & Visit Website
        </a>
      </div>

      {/* Footer */}
      <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '30px 0' }} />
      
      <p style={{ color: '#8898aa', fontSize: '12px', textAlign: 'center', lineHeight: '18px' }}>
        © {new Date().getFullYear()} FluxPrice AI. All rights reserved.<br />
        You received this email because you signed up for the FluxPrice waitlist.
      </p>
    </div>
  </div>
);
