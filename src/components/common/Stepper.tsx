import React, { useState } from 'react';
import { Check, Circle, Loader2, Sparkles, ArrowRight } from 'lucide-react';

export type StepStatus = 'completed' | 'active' | 'upcoming' | 'error';

export interface Step {
  id: string;
  label: string;
  description?: string;
  status?: StepStatus;
  icon?: React.ReactNode;
  error?: string;
  optional?: boolean;
}

export interface StepperProps {
  steps: Step[];
  currentStep?: number;
  orientation?: 'horizontal' | 'vertical';
  showProgress?: boolean;
  className?: string;
  variant?: 'default' | 'gradient' | 'minimal' | 'cards';
  animated?: boolean;
  clickable?: boolean;
  onStepClick?: (stepIndex: number, step: Step) => void;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep = 0,
  orientation = 'horizontal',
  showProgress = true,
  className = '',
  variant = 'default',
  animated = true,
  clickable = false,
  onStepClick,
}) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [clickedStep, setClickedStep] = useState<number | null>(null);

  const getStepStatus = (index: number): StepStatus => {
    if (steps[index]?.status) return steps[index].status!;
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'active';
    return 'upcoming';
  };

  const handleStepClick = (index: number, step: Step) => {
    if (!clickable) return;
    setClickedStep(index);
    if (onStepClick) onStepClick(index, step);
    setTimeout(() => setClickedStep(null), 300);
  };

  const getStepIcon = (status: StepStatus, customIcon?: React.ReactNode, index: number) => {
    const isHovered = hoveredStep === index;
    const isClicked = clickedStep === index;
    
    if (customIcon) {
      return (
        <div className={`
          w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
          ${status === 'completed' ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg scale-110' :
            status === 'active' ? 'bg-gradient-to-br from-secondary to-primary text-white shadow-lg animate-pulse' :
            status === 'error' ? 'bg-red-500 text-white shadow-lg' :
            'bg-surface text-muted border-2 border-border/50'}
          ${isHovered ? 'scale-110 shadow-xl' : ''}
          ${isClicked ? 'scale-95' : ''}
        `}>
          {status === 'completed' ? <Check className="w-6 h-6" /> : customIcon}
        </div>
      );
    }

    switch (status) {
      case 'completed':
        return (
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg animate-bounce-slow">
              <Check className="w-6 h-6" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-2 h-2 text-white" />
            </div>
          </div>
        );
      case 'active':
        return (
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center shadow-lg animate-pulse">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
            <div className="absolute inset-0 rounded-full bg-secondary/20 animate-ping"></div>
          </div>
        );
      case 'error':
        return (
          <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg animate-shake">
            <Circle className="w-6 h-6" />
          </div>
        );
      case 'upcoming':
        return (
          <div className={`
            w-12 h-12 rounded-full bg-surface text-muted border-2 border-border/50 flex items-center justify-center
            transition-all duration-300
            ${isHovered ? 'border-primary/50 text-primary scale-105' : ''}
          `}>
            <Circle className="w-5 h-5" />
          </div>
        );
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-surface via-primary/5 to-secondary/5 backdrop-blur-sm';
      case 'minimal':
        return 'border-0 bg-transparent';
      case 'cards':
        return 'bg-white/80 backdrop-blur-md shadow-xl border border-border/20';
      default:
        return 'bg-surface/60 backdrop-blur-sm border border-border/30';
    }
  };

  const isHorizontal = orientation === 'horizontal';
  const containerClass = isHorizontal 
    ? 'flex items-center justify-between w-full relative' 
    : 'flex flex-col space-y-6 relative';

  return (
    <div className={`stepper ${getVariantClasses()} rounded-2xl p-8 ${className}`}>
      {/* Background decoration */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl"></div>
      )}
      
      <div className={containerClass + ' relative z-10'}>
        {steps.map((step, index) => {
          const status = getStepStatus(index);
          const isLast = index === steps.length - 1;
          const isHovered = hoveredStep === index;
          const canClick = clickable && status !== 'active';
          
          return (
            <React.Fragment key={step.id}>
              <div 
                className={`
                  flex ${isHorizontal ? 'flex-col items-center text-center' : 'items-start'} 
                  flex-1 relative cursor-pointer
                  transition-all duration-300
                  ${isHovered ? 'scale-105' : ''}
                  ${canClick ? 'hover:scale-102' : ''}
                `}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => handleStepClick(index, step)}
              >
                {/* Step content */}
                <div className="flex items-center space-x-4">
                  {getStepIcon(status, step.icon, index)}
                  <div className={isHorizontal ? 'flex-1' : ''}>
                    <div className="flex items-center space-x-2">
                      <h3 className={`
                        font-bold text-base transition-all duration-300
                        ${status === 'completed' || status === 'active' 
                          ? 'text-primary' 
                          : 'text-muted'}
                        ${isHovered ? 'scale-105' : ''}
                      `}>
                        {step.label}
                      </h3>
                      {step.optional && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-border/30 text-muted font-medium">
                          Optional
                        </span>
                      )}
                      {status === 'error' && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-red-500/20 text-red-500 font-medium">
                          Error
                        </span>
                      )}
                    </div>
                    
                    {step.description && (
                      <p className={`
                        text-sm mt-2 transition-all duration-300
                        ${status === 'active' ? 'text-text font-medium' : 'text-muted'}
                        ${isHovered ? 'text-text' : ''}
                      `}>
                        {step.description}
                      </p>
                    )}
                    
                    {step.error && (
                      <p className="text-sm mt-2 text-red-500 font-medium animate-shake">
                        {step.error}
                      </p>
                    )}
                    
                    {/* Click hint */}
                    {canClick && isHovered && (
                      <div className="flex items-center space-x-1 text-primary text-sm mt-2 animate-fade-in">
                        <span>Click to</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>{status === 'completed' ? 'review' : 'start'}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Hover effect */}
                {isHovered && (
                  <div className="absolute inset-0 bg-primary/5 rounded-xl -z-10 animate-fade-in"></div>
                )}
              </div>
              
              {/* Connector line */}
              {!isLast && (
                <div className={`
                  flex-1 relative z-0
                  ${isHorizontal ? 'flex items-center justify-center mx-4' : 'ml-16 mt-4'}
                `}>
                  <div className={`
                    relative w-full overflow-hidden
                    ${isHorizontal ? 'h-1' : 'w-1 h-12'}
                  `}>
                    <div className={`
                      absolute inset-0 transition-all duration-700 ease-out
                      ${status === 'completed' 
                        ? 'bg-gradient-to-r from-primary to-secondary' 
                        : status === 'error'
                        ? 'bg-red-500'
                        : 'bg-border/50'}
                    `}></div>
                    
                    {animated && status === 'completed' && (
                      <div className={`
                        absolute inset-0 bg-gradient-to-r from-primary to-secondary
                        ${isHorizontal ? 'animate-slide-right' : 'animate-slide-down'}
                      `}></div>
                    )}
                    
                    {animated && status === 'active' && (
                      <div className={`
                        absolute inset-0 bg-gradient-to-r from-secondary to-primary
                        ${isHorizontal ? 'animate-pulse-slow' : 'animate-pulse-slow'}
                      `}></div>
                    )}
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      
      {/* Enhanced progress bar */}
      {showProgress && isHorizontal && (
        <div className="mt-8 relative">
          <div className="w-full bg-border/30 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full rounded-full transition-all duration-700 ease-out relative overflow-hidden"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-shimmer"></div>
            </div>
          </div>
          
          <div className="flex justify-between mt-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-primary">Step {currentStep + 1}</span>
              <span className="text-sm text-muted">of {steps.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-primary">
                {Math.round(((currentStep + 1) / steps.length) * 100)}%
              </span>
              <span className="text-xs text-muted">Complete</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes slide-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        @keyframes slide-down {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-slide-right { animation: slide-right 1s ease-out; }
        .animate-slide-down { animation: slide-down 1s ease-out; }
        .animate-shimmer { 
          animation: shimmer 2s linear infinite;
          background-size: 200% 100%;
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Stepper;