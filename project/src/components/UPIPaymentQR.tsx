import React, { useState, useEffect } from 'react';
import { QrCode, CreditCard, Smartphone, CheckCircle, X, Copy, Download } from 'lucide-react';
import QRCode from 'qrcode';

interface PaymentPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

interface UPIPaymentQRProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: PaymentPackage;
}

const UPIPaymentQR: React.FC<UPIPaymentQRProps> = ({ isOpen, onClose, selectedPackage }) => {
  const [qrCodeDataURL, setQrCodeDataURL] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentNote, setPaymentNote] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const upiId = '8799146289@paytm'; // UPI ID for Ayush Shah
  const merchantName = 'Web Booster';

  const predefinedPackages: PaymentPackage[] = [
    {
      id: 'consultation',
      name: 'Strategy Consultation',
      price: 2500,
      description: 'One-hour strategy session',
      features: ['60-minute consultation', 'Strategy roadmap', 'Action plan']
    },
    {
      id: 'starter',
      name: 'Starter Package',
      price: 50000,
      description: 'Basic digital marketing setup',
      features: ['Website audit', 'Basic SEO', 'Social media setup'],
      popular: true
    },
    {
      id: 'growth',
      name: 'Growth Package',
      price: 120000,
      description: 'Comprehensive marketing campaign',
      features: ['Full marketing strategy', 'Ad campaigns', 'Content creation']
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: 250000,
      description: 'Complete digital transformation',
      features: ['Website development', 'Advanced SEO', 'Video production']
    }
  ];

  const generateUPILink = (amount: number, note: string = '') => {
    // Use proper UPI format that payment apps recognize
    const upiParams = [
      `pa=${encodeURIComponent(upiId)}`,
      `pn=${encodeURIComponent(merchantName)}`,
      `am=${amount.toFixed(2)}`,
      `cu=INR`,
      `tn=${encodeURIComponent(note || `Payment to ${merchantName}`)}`
    ].join('&');
    
    return `upi://pay?${upiParams}`;
  };

  const generateQRCode = async (amount: number, note: string = '') => {
    setIsGenerating(true);
    try {
      const upiLink = generateUPILink(amount, note);
      const qrDataURL = await QRCode.toDataURL(upiLink, {
        width: 300,
        margin: 2,
        color: {
          dark: '#1f2937',
          light: '#ffffff'
        }
      });
      setQrCodeDataURL(qrDataURL);
    } catch (error) {
      console.error('Error generating QR code:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const amount = selectedPackage?.price || parseInt(customAmount) || 50000;
      const note = selectedPackage 
        ? `${selectedPackage.name} - ${merchantName}`
        : paymentNote || `Payment to ${merchantName}`;
      
      generateQRCode(amount, note);
    }
  }, [isOpen, selectedPackage, customAmount, paymentNote]);

  const copyUPILink = () => {
    const amount = selectedPackage?.price || parseInt(customAmount) || 50000;
    const note = selectedPackage 
      ? `${selectedPackage.name} - ${merchantName}`
      : paymentNote || `Payment to ${merchantName}`;
    
    const upiLink = generateUPILink(amount, note);
    navigator.clipboard.writeText(upiLink);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const downloadQR = () => {
    if (qrCodeDataURL) {
      const link = document.createElement('a');
      link.download = `payment-qr-${Date.now()}.png`;
      link.href = qrCodeDataURL;
      link.click();
    }
  };

  const sendPaymentDetails = () => {
    const amount = selectedPackage?.price || parseInt(customAmount) || 50000;
    const packageName = selectedPackage?.name || 'Custom Payment';
    
    const message = `💳 PAYMENT REQUEST GENERATED

📦 Package: ${packageName}
💰 Amount: ₹${amount.toLocaleString()}
💳 UPI ID: ${upiId}
🏢 Merchant: ${merchantName}

🔗 UPI Link: ${generateUPILink(amount, paymentNote)}

📱 How to Pay:
1. Open any UPI app (Google Pay, PhonePe, Paytm)
2. Scan the QR code OR click the UPI link
3. Verify amount and merchant name
4. Complete payment

Payment will be received by Ayush Shah (+91 8799146289)

Thank you for choosing Web Booster! 🚀`;

    const whatsappUrl = `https://wa.me/918799146289?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative animate-slide-in-up max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <QrCode className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">UPI Payment</h3>
          <p className="text-gray-600">Scan QR code or use UPI link to pay instantly</p>
        </div>

        {/* Package/Amount Selection */}
        {!selectedPackage && (
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              💰 Select Package or Enter Amount
            </label>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              {predefinedPackages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setCustomAmount(pkg.price.toString())}
                  className={`p-3 border-2 rounded-lg text-left transition-all ${
                    customAmount === pkg.price.toString()
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-gray-900 text-sm">{pkg.name}</div>
                  <div className="text-green-600 font-bold">₹{pkg.price.toLocaleString()}</div>
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter custom amount"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                min="1"
              />
              <input
                type="text"
                value={paymentNote}
                onChange={(e) => setPaymentNote(e.target.value)}
                placeholder="Payment note (optional)"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Selected Package Display */}
        {selectedPackage && (
          <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
            <h4 className="font-bold text-green-800 mb-2">{selectedPackage.name}</h4>
            <p className="text-green-700 text-sm mb-2">{selectedPackage.description}</p>
            <div className="text-2xl font-bold text-green-600">₹{selectedPackage.price.toLocaleString()}</div>
          </div>
        )}

        {/* QR Code Display */}
        <div className="bg-gray-50 p-6 rounded-xl mb-6 text-center">
          {isGenerating ? (
            <div className="py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-green-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Generating QR Code...</p>
            </div>
          ) : qrCodeDataURL ? (
            <div>
              <div className="mb-4">
                <img 
                  src="/AYUSH SHAH UPI SCANNER.jpg" 
                  alt="Ayush Shah UPI Scanner" 
                  className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-green-500 shadow-lg"
                />
                <p className="text-sm text-gray-600 mt-2 font-semibold">Scan with any UPI app</p>
              </div>
              <img 
                src={qrCodeDataURL} 
                alt="UPI Payment QR Code" 
                className="mx-auto mb-4 border border-gray-200 rounded-lg"
              />
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="text-sm text-gray-600 mb-2">Payment Details:</div>
                <div className="font-semibold text-gray-900">UPI ID: {upiId}</div>
                <div className="font-semibold text-gray-900">Merchant: {merchantName}</div>
                <div className="font-bold text-green-600 text-lg">
                  Amount: ₹{(selectedPackage?.price || parseInt(customAmount) || 50000).toLocaleString()}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-8">
              <QrCode className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Enter amount to generate QR code</p>
            </div>
          )}
        </div>

        {/* Payment Instructions */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
            <Smartphone className="w-5 h-5 mr-2" />
            How to Pay:
          </h4>
          <ol className="text-blue-700 text-sm space-y-1">
            <li>1. Open any UPI app (Google Pay, PhonePe, Paytm)</li>
            <li>2. Scan the QR code above</li>
            <li>3. Verify amount and merchant details</li>
            <li>4. Enter your UPI PIN to complete payment</li>
            <li>5. Screenshot the success message for confirmation</li>
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <div className="flex gap-3">
            <button
              onClick={copyUPILink}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              {copySuccess ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" />
                  Copy UPI Link
                </>
              )}
            </button>
            
            <button
              onClick={downloadQR}
              disabled={!qrCodeDataURL}
              className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center disabled:opacity-50"
            >
              <Download className="w-5 h-5 mr-2" />
              Download QR
            </button>
          </div>

          <button
            onClick={sendPaymentDetails}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            📱 Send Payment Details via WhatsApp
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            Secure UPI payment • Instant confirmation • No additional charges
          </p>
        </div>
      </div>
    </div>
  );
};

export default UPIPaymentQR;