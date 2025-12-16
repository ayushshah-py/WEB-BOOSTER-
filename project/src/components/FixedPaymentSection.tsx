import React, { useState, useEffect } from 'react';
import { QrCode, CreditCard, Smartphone, CheckCircle, X, Copy, Download, Zap } from 'lucide-react';
import QRCode from 'qrcode';

interface FixedPaymentSectionProps {
  amount?: number;
}

const FixedPaymentSection: React.FC<FixedPaymentSectionProps> = ({ amount = 10 }) => {
  const [qrCodeDataURL, setQrCodeDataURL] = useState<string>('');
  const [showQRModal, setShowQRModal] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const upiId = '8799146289@paytm';
  const merchantName = 'Web Booster';

  const generateUPILink = (paymentAmount: number, note: string = '') => {
    // Use proper UPI format that payment apps recognize
    const upiParams = [
      `pa=${encodeURIComponent(upiId)}`,
      `pn=${encodeURIComponent(merchantName)}`,
      `am=${paymentAmount.toFixed(2)}`,
      `cu=INR`,
      `tn=${encodeURIComponent(note || `₹${paymentAmount} Payment to ${merchantName}`)}`
    ].join('&');
    
    return `upi://pay?${upiParams}`;
  };

  const generateQRCode = async (paymentAmount: number, note: string = '') => {
    setIsGenerating(true);
    try {
      const upiLink = generateUPILink(paymentAmount, note);
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
    if (showQRModal) {
      generateQRCode(amount, `₹${amount} Payment to Web Booster`);
    }
  }, [showQRModal, amount]);

  const copyUPILink = () => {
    const upiLink = generateUPILink(amount, `₹${amount} Payment to Web Booster`);
    navigator.clipboard.writeText(upiLink);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const downloadQR = () => {
    if (qrCodeDataURL) {
      const link = document.createElement('a');
      link.download = `payment-qr-${amount}-rupees.png`;
      link.href = qrCodeDataURL;
      link.click();
    }
  };

  const sendPaymentDetails = () => {
    const message = `💳 ₹${amount} PAYMENT REQUEST

💰 Amount: ₹${amount}
💳 UPI ID: ${upiId}
🏢 Merchant: ${merchantName}

🔗 UPI Link: ${generateUPILink(amount)}

📱 How to Pay:
1. Open any UPI app (Google Pay, PhonePe, Paytm)
2. Scan the QR code OR click the UPI link
3. Verify amount (₹${amount}) and merchant name
4. Complete payment

Payment will be received by Ayush Shah (+91 8799146289)

Thank you for choosing Web Booster! 🚀`;

    const whatsappUrl = `https://wa.me/918799146289?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePayNow = () => {
    setShowQRModal(true);
    
    // Track payment initiation
    const paymentLog = {
      amount: amount,
      timestamp: new Date().toISOString(),
      action: 'Fixed Payment Initiated',
      type: 'Fixed Amount Payment'
    };
    
    const existingLogs = JSON.parse(localStorage.getItem('paymentLogs') || '[]');
    existingLogs.push(paymentLog);
    localStorage.setItem('paymentLogs', JSON.stringify(existingLogs));
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-green-200">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-6 text-white">
              <div className="flex items-center justify-center">
                <Zap className="w-8 h-8 mr-4" />
                <div className="text-center">
                  <h2 className="text-3xl font-bold">Quick Payment</h2>
                  <p className="text-green-100">Instant UPI payment for small transactions</p>
                </div>
              </div>
            </div>

            <div className="p-8 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full mb-6">
                  <CreditCard className="w-6 h-6 mr-3" />
                  <span className="text-2xl font-bold">₹{amount} Fixed Payment</span>
                </div>
                
                <div className="mb-6">
                  <img 
                    src="/AYUSH SHAH UPI SCANNER.jpg" 
                    alt="Ayush Shah UPI Scanner" 
                    className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-green-500 shadow-lg"
                  />
                  <p className="text-sm text-gray-600 mt-2 font-semibold">Payment received by Ayush Shah</p>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quick & Easy UPI Payment
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Make a quick ₹{amount} payment using any UPI app. Perfect for consultations, 
                  small services, or advance payments.
                </p>
              </div>

              {/* Payment Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <QrCode className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Instant QR Code</h4>
                  <p className="text-gray-600 text-sm">Generate QR code instantly for ₹{amount}</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">All UPI Apps</h4>
                  <p className="text-gray-600 text-sm">Works with Google Pay, PhonePe, Paytm</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Instant Confirmation</h4>
                  <p className="text-gray-600 text-sm">Immediate payment verification</p>
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={handlePayNow}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-4 rounded-xl font-bold text-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-auto"
              >
                <QrCode className="w-6 h-6 mr-3" />
                Pay ₹{amount} Now with UPI
              </button>

              <p className="text-sm text-gray-500 mt-4">
                Secure payment • No additional charges • Instant processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-slide-in-up">
            <button
              onClick={() => setShowQRModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹{amount} UPI Payment</h3>
              <p className="text-gray-600">Scan QR code to pay instantly</p>
            </div>

            {/* QR Code Display */}
            <div className="bg-gray-50 p-6 rounded-xl mb-6 text-center">
              {isGenerating ? (
                <div className="py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-green-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Generating QR Code...</p>
                </div>
              ) : qrCodeDataURL ? (
                <div>
                  <img 
                    src={qrCodeDataURL} 
                    alt="UPI Payment QR Code" 
                    className="mx-auto mb-4 border border-gray-200 rounded-lg"
                  />
                  <div className="mb-4">
                    <img 
                      src="/AYUSH SHAH UPI SCANNER.jpg" 
                      alt="Ayush Shah UPI Scanner" 
                      className="w-20 h-20 object-cover rounded-full mx-auto border-4 border-green-500 shadow-lg"
                    />
                    <p className="text-sm text-gray-600 mt-2 font-semibold">Scan with any UPI app</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Payment Details:</div>
                    <div className="font-semibold text-gray-900">UPI ID: {upiId}</div>
                    <div className="font-semibold text-gray-900">Merchant: {merchantName}</div>
                    <div className="font-bold text-green-600 text-xl">Amount: ₹{amount}</div>
                  </div>
                </div>
              ) : (
                <div className="py-8">
                  <QrCode className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">QR code will appear here</p>
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
                <li>3. Verify amount (₹{amount}) and merchant details</li>
                <li>4. Enter your UPI PIN to complete payment</li>
                <li>5. Screenshot the success message</li>
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
                Secure UPI payment • No additional charges • Instant confirmation
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FixedPaymentSection;