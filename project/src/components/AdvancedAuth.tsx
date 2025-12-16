import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { LinkedinLogin } from 'react-linkedin-login-oauth2';
import { User, Shield, Lock, Mail, Phone, Building, MapPin, Globe } from 'lucide-react';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  role: 'admin' | 'team' | 'client';
  avatar?: string;
  location?: string;
  completionPercentage: number;
  twoFactorEnabled: boolean;
  lastLogin?: string;
  accountHistory: Array<{
    date: string;
    action: string;
    details: string;
  }>;
}

interface AdvancedAuthProps {
  onLogin: (user: UserProfile) => void;
}

const AdvancedAuth: React.FC<AdvancedAuthProps> = ({ onLogin }) => {
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [otpMethod, setOtpMethod] = useState<'email' | 'sms' | 'whatsapp'>('email');
  const [otpCode, setOtpCode] = useState('');
  const [pendingUser, setPendingUser] = useState<Partial<UserProfile> | null>(null);

  const calculateCompletionPercentage = (user: Partial<UserProfile>) => {
    const fields = ['name', 'email', 'phone', 'company', 'location'];
    const completed = fields.filter(field => user[field as keyof UserProfile]).length;
    return Math.round((completed / fields.length) * 100);
  };

  const handleGoogleSuccess = (credentialResponse: any) => {
    // Decode JWT token (in production, verify on server)
    const decoded = JSON.parse(atob(credentialResponse.credential.split('.')[1]));
    
    const user: UserProfile = {
      id: decoded.sub,
      name: decoded.name,
      email: decoded.email,
      avatar: decoded.picture,
      role: 'client',
      completionPercentage: calculateCompletionPercentage({
        name: decoded.name,
        email: decoded.email
      }),
      twoFactorEnabled: false,
      accountHistory: [{
        date: new Date().toISOString(),
        action: 'Google Login',
        details: 'Signed in via Google OAuth'
      }]
    };

    // Store user data
    localStorage.setItem('userProfile', JSON.stringify(user));
    
    // Send notification to admins
    sendAdminNotification('Google Login', user);
    
    if (user.twoFactorEnabled) {
      setPendingUser(user);
      setShowTwoFactor(true);
    } else {
      onLogin(user);
    }
  };

  const handleLinkedInSuccess = (code: string) => {
    // In production, exchange code for access token on server
    const user: UserProfile = {
      id: `linkedin_${Date.now()}`,
      name: 'LinkedIn User',
      email: 'user@linkedin.com',
      role: 'client',
      completionPercentage: 40,
      twoFactorEnabled: false,
      accountHistory: [{
        date: new Date().toISOString(),
        action: 'LinkedIn Login',
        details: 'Signed in via LinkedIn OAuth'
      }]
    };

    localStorage.setItem('userProfile', JSON.stringify(user));
    sendAdminNotification('LinkedIn Login', user);
    onLogin(user);
  };

  const sendAdminNotification = (action: string, user: UserProfile) => {
    const message = `🔐 NEW ${action.toUpperCase()}!

👤 Name: ${user.name}
📧 Email: ${user.email}
🏢 Company: ${user.company || 'Not specified'}
📱 Phone: ${user.phone || 'Not provided'}
🌍 Location: ${user.location || 'Not specified'}
📊 Profile: ${user.completionPercentage}% complete
🔒 2FA: ${user.twoFactorEnabled ? 'Enabled' : 'Disabled'}

Time: ${new Date().toLocaleString()}

Please follow up with this user!`;

    // WhatsApp notifications to both admins
    const whatsappAyush = `https://wa.me/918799146289?text=${encodeURIComponent(message)}`;
    const whatsappShivam = `https://wa.me/919974311903?text=${encodeURIComponent(message)}`;
    
    // Open both WhatsApp chats (user can choose which to send)
    window.open(whatsappAyush, '_blank');
    setTimeout(() => window.open(whatsappShivam, '_blank'), 1000);
  };

  const handleTwoFactorSubmit = () => {
    if (otpCode === '123456' && pendingUser) { // Demo OTP
      onLogin(pendingUser as UserProfile);
      setShowTwoFactor(false);
      setPendingUser(null);
      setOtpCode('');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const sendOTP = () => {
    const methods = {
      email: 'Email',
      sms: 'SMS',
      whatsapp: 'WhatsApp'
    };
    
    alert(`OTP sent via ${methods[otpMethod]}! Use 123456 for demo.`);
  };

  if (showTwoFactor) {
    return (
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-6">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">Two-Factor Authentication</h2>
          <p className="text-gray-600">Enter the verification code to continue</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Verification Method
            </label>
            <select
              value={otpMethod}
              onChange={(e) => setOtpMethod(e.target.value as 'email' | 'sms' | 'whatsapp')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
            >
              <option value="email">Email OTP</option>
              <option value="sms">SMS OTP</option>
              <option value="whatsapp">WhatsApp OTP</option>
            </select>
          </div>

          <button
            onClick={sendOTP}
            className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Send OTP via {otpMethod.toUpperCase()}
          </button>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter OTP Code
            </label>
            <input
              type="text"
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value)}
              placeholder="123456"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              maxLength={6}
            />
          </div>

          <button
            onClick={handleTwoFactorSubmit}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Verify & Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl">
      <div className="text-center mb-8">
        <User className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-600">Sign in to access your dashboard</p>
      </div>

      <div className="space-y-4">
        <GoogleOAuthProvider clientId="demo_google_client_id">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.log('Google Login Failed')}
            theme="outline"
            size="large"
            width="100%"
          />
        </GoogleOAuthProvider>

        <LinkedinLogin
          clientId="demo_linkedin_client_id"
          redirectUri={`${window.location.origin}/auth/linkedin`}
          onSuccess={handleLinkedInSuccess}
          onFailure={(error) => console.log('LinkedIn Login Failed', error)}
          scope="r_liteprofile r_emailaddress"
        >
          <button className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Continue with LinkedIn
          </button>
        </LinkedinLogin>

        <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Continue with GitHub
        </button>

        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Continue with Facebook
        </button>

        <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
          </svg>
          Continue with Apple ID
        </button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          By signing in, you agree to our{' '}
          <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default AdvancedAuth;