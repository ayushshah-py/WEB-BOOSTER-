import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
  completedMessage?: string;
}

const ProgressBars: React.FC<ProgressBarProps> = ({ 
  currentStep, 
  totalSteps, 
  stepLabels, 
  completedMessage = "Process Complete!" 
}) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      {/* Main Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">
            Progress: {currentStep} of {totalSteps} steps
          </span>
          <span className="text-sm font-semibold text-blue-600">
            {Math.round(progressPercentage)}% Complete
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-700 ease-out relative"
            style={{ width: `${progressPercentage}%` }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex items-center justify-between">
        {stepLabels.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <div key={index} className="flex flex-col items-center flex-1">
              {/* Step Circle */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-all duration-300 ${
                isCompleted 
                  ? 'bg-green-600 text-white' 
                  : isCurrent 
                  ? 'bg-blue-600 text-white animate-pulse' 
                  : 'bg-gray-300 text-gray-600'
              }`}>
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  stepNumber
                )}
              </div>

              {/* Step Label */}
              <div className={`text-xs text-center font-medium transition-colors duration-300 ${
                isCompleted 
                  ? 'text-green-600' 
                  : isCurrent 
                  ? 'text-blue-600' 
                  : 'text-gray-500'
              }`}>
                {label}
              </div>

              {/* Connector Line */}
              {index < stepLabels.length - 1 && (
                <div className="hidden md:block absolute top-5 left-1/2 w-full h-0.5 -z-10">
                  <div className={`h-full transition-all duration-500 ${
                    stepNumber < currentStep ? 'bg-green-600' : 'bg-gray-300'
                  }`} style={{ width: '100%' }}></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Completion Message */}
      {currentStep >= totalSteps && (
        <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded-lg text-center">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
            <span className="font-bold text-green-800">{completedMessage}</span>
          </div>
          <p className="text-green-700 text-sm">
            Thank you for completing the process. We'll be in touch shortly!
          </p>
        </div>
      )}

      {/* Motivational Message */}
      {currentStep < totalSteps && (
        <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
          <div className="flex items-center justify-center mb-2">
            <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
            <span className="font-semibold text-blue-800">
              {totalSteps - currentStep} step{totalSteps - currentStep !== 1 ? 's' : ''} remaining
            </span>
          </div>
          <p className="text-blue-700 text-sm">
            You're doing great! Just a few more details and we'll have everything we need.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressBars;