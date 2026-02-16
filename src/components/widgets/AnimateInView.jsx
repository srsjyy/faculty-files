// src/components/widgets/AnimateInView.jsx (Updated)
import { useInView } from 'react-intersection-observer';

export default function AnimateInView({ children, animation = "fade-in-up", duration = 500, delay = 0, threshold = 0.1, triggerOnce = false }) {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: triggerOnce, 
  });

  // Define your animation styles here
  const animations = {
    'fade-in-up': {
      initial: 'opacity-0 translate-y-10',
      final: 'opacity-100 translate-y-0',
    },
    // --- ADD THIS NEW ONE ---
    'fade-in-left': {
      initial: 'opacity-0 -translate-x-10', // Start invisible and moved to the LEFT
      final: 'opacity-100 translate-x-0',   // End visible and in its normal position
    },
    // --- AND ADD THIS ONE ---
    'fade-in-right': {
        initial: 'opacity-0 translate-x-10', // Start invisible and moved to the RIGHT
        final: 'opacity-100 translate-x-0',  // End visible and in its normal position
    },
    'zoom-in': {
        initial: 'opacity-0 scale-90',
        final: 'opacity-100 scale-100',
    }
  };

  const selectedAnimation = animations[animation] || animations['fade-in-up'];

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out
        ${inView ? selectedAnimation.final : selectedAnimation.initial}
      `}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}