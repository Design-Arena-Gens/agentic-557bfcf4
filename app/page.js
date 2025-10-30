'use client';

import { useState } from 'react';

export default function LoanHub() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
  const [activeWidget, setActiveWidget] = useState(null);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Phone Frame */}
      <div style={{
        width: '375px',
        height: '812px',
        background: '#000',
        borderRadius: '50px',
        padding: '12px',
        boxShadow: '0 30px 80px rgba(0,0,0,0.8), inset 0 0 0 2px #1a1a1a',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Screen */}
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%)',
          borderRadius: '40px',
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* Notch */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '150px',
            height: '30px',
            background: '#000',
            borderRadius: '0 0 20px 20px',
            zIndex: 1000,
          }} />

          {/* Status Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 24px',
            paddingTop: '12px',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '600',
            position: 'relative',
            zIndex: 999,
          }}>
            <div>{time}</div>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <div style={{ width: '16px', height: '11px', border: '1.5px solid #fff', borderRadius: '2px', position: 'relative' }}>
                <div style={{ position: 'absolute', right: '-3px', top: '3px', width: '2px', height: '4px', background: '#fff', borderRadius: '0 1px 1px 0' }} />
                <div style={{ position: 'absolute', left: '1.5px', top: '1.5px', width: '10px', height: '6px', background: '#fff', borderRadius: '1px' }} />
              </div>
            </div>
          </div>

          {/* Home Screen Content */}
          <div style={{ padding: '20px 24px', paddingTop: '8px' }}>
            {/* Date & Greeting */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ color: '#8b92b0', fontSize: '14px', marginBottom: '4px' }}>
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </div>
              <div style={{ color: '#fff', fontSize: '28px', fontWeight: '700' }}>
                Welcome Back
              </div>
            </div>

            {/* App Icon Section */}
            <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '90px',
                height: '90px',
                background: 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)',
                borderRadius: '22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 30px rgba(0, 102, 255, 0.4)',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                position: 'relative',
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {/* LoanHub Icon */}
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path d="M25 8L8 18v14c0 10.5 7.25 20.3 17 23 9.75-2.7 17-12.5 17-23V18L25 8z" fill="white" opacity="0.95"/>
                  <text x="25" y="32" fontSize="24" fontWeight="bold" fill="#0066ff" textAnchor="middle">L</text>
                </svg>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.15) 0%, rgba(0, 212, 255, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: '20px',
              marginBottom: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <div style={{ color: '#8b92b0', fontSize: '13px', marginBottom: '8px' }}>Active Loans</div>
              <div style={{ color: '#fff', fontSize: '32px', fontWeight: '700', marginBottom: '4px' }}>2</div>
              <div style={{ color: '#00d4ff', fontSize: '14px' }}>1 pending approval</div>
            </div>

            {/* Widget Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              {/* View Approvals Widget */}
              <div
                onClick={() => setActiveWidget('approvals')}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(0, 102, 255, 0.15) 100%)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  padding: '20px',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 212, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>📋</div>
                <div>
                  <div style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>View</div>
                  <div style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>Approvals</div>
                </div>
              </div>

              {/* Chat Widget */}
              <div
                onClick={() => setActiveWidget('chat')}
                style={{
                  background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2) 0%, rgba(75, 0, 130, 0.15) 100%)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  padding: '20px',
                  border: '1px solid rgba(138, 43, 226, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  minHeight: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(138, 43, 226, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>💬</div>
                <div>
                  <div style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>Chat with</div>
                  <div style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>Agent</div>
                  <div style={{ color: '#c77dff', fontSize: '11px', marginTop: '4px' }}>Available 24/7</div>
                </div>
              </div>
            </div>

            {/* Submit Documents Widget - Full Width */}
            <div
              onClick={() => setActiveWidget('documents')}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 152, 0, 0.15) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid rgba(255, 193, 7, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 193, 7, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '42px' }}>📄</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#fff', fontSize: '17px', fontWeight: '600', marginBottom: '4px' }}>
                  Submit Closing Documents
                </div>
                <div style={{ color: '#ffc107', fontSize: '13px' }}>Upload and track your documents</div>
              </div>
              <div style={{ color: '#ffc107', fontSize: '24px' }}>→</div>
            </div>
          </div>

          {/* Home Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '140px',
            height: '5px',
            background: '#fff',
            borderRadius: '3px',
            opacity: 0.5,
          }} />
        </div>
      </div>

      {/* Modal Overlays */}
      {activeWidget && (
        <div
          onClick={() => setActiveWidget(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%)',
              borderRadius: '24px',
              padding: '32px',
              maxWidth: '500px',
              width: '90%',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setActiveWidget(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                color: '#8b92b0',
                fontSize: '28px',
                cursor: 'pointer',
                lineHeight: 1,
              }}
            >×</button>

            {activeWidget === 'approvals' && (
              <div>
                <h2 style={{ color: '#00d4ff', marginTop: 0, marginBottom: '24px', fontSize: '24px' }}>Loan Approvals</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{
                    background: 'rgba(0, 212, 255, 0.1)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                  }}>
                    <div style={{ color: '#fff', fontWeight: '600', marginBottom: '8px' }}>Home Loan - Approved</div>
                    <div style={{ color: '#8b92b0', fontSize: '14px', marginBottom: '4px' }}>Amount: $450,000</div>
                    <div style={{ color: '#00d4ff', fontSize: '14px' }}>Rate: 6.5% APR</div>
                  </div>
                  <div style={{
                    background: 'rgba(255, 193, 7, 0.1)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 193, 7, 0.3)',
                  }}>
                    <div style={{ color: '#fff', fontWeight: '600', marginBottom: '8px' }}>Auto Loan - Pending</div>
                    <div style={{ color: '#8b92b0', fontSize: '14px', marginBottom: '4px' }}>Amount: $35,000</div>
                    <div style={{ color: '#ffc107', fontSize: '14px' }}>Under review</div>
                  </div>
                </div>
              </div>
            )}

            {activeWidget === 'chat' && (
              <div>
                <h2 style={{ color: '#c77dff', marginTop: 0, marginBottom: '24px', fontSize: '24px' }}>Chat with Agent</h2>
                <div style={{
                  background: 'rgba(138, 43, 226, 0.1)',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(138, 43, 226, 0.3)',
                  marginBottom: '16px',
                }}>
                  <div style={{ color: '#fff', marginBottom: '12px' }}>
                    <strong>Agent Sarah</strong> - Online
                  </div>
                  <div style={{ color: '#8b92b0', fontSize: '14px', lineHeight: '1.6' }}>
                    Hello! I'm here to help with your loan applications. How can I assist you today?
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Type your message..."
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '14px',
                  }}
                />
              </div>
            )}

            {activeWidget === 'documents' && (
              <div>
                <h2 style={{ color: '#ffc107', marginTop: 0, marginBottom: '24px', fontSize: '24px' }}>Submit Documents</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{
                    background: 'rgba(255, 193, 7, 0.1)',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '2px dashed rgba(255, 193, 7, 0.3)',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}>
                    <div style={{ fontSize: '48px', marginBottom: '12px' }}>📎</div>
                    <div style={{ color: '#fff', fontWeight: '600', marginBottom: '8px' }}>Upload Documents</div>
                    <div style={{ color: '#8b92b0', fontSize: '13px' }}>Drag and drop or click to browse</div>
                  </div>
                  <div style={{ color: '#8b92b0', fontSize: '13px' }}>
                    Required: Tax returns, Pay stubs, Bank statements
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
