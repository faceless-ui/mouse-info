import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import MouseInfoContext from '../MouseInfoContext';
import { IMouseInfoContext } from '../MouseInfoContext/types';

const reducer = (
  state: IMouseInfoContext,
  payload: {
    e?: MouseEvent,
    timestamp?: number,
    animationRef: React.MutableRefObject<number>
  },
) => {
  const {
    e,
    timestamp,
    animationRef,
  } = payload;

  animationRef.current = undefined;
  const {
    x: prevMouseX,
    y: prevMouseY,
    xDirection: prevXDirection,
    yDirection: prevYDirection,
    eventsFired,
  } = state;

  const currentMouseX = e.clientX;
  const currentMouseY = e.clientY;

  const xDifference = currentMouseX - prevMouseX;
  const yDifference = currentMouseY - prevMouseY;

  const xPercentage = (currentMouseX / window.innerWidth) * 100;
  const yPercentage = (currentMouseY / window.innerHeight) * 100;
  const totalPercentage = (xPercentage + yPercentage) / 2;

  const xDirection = xDifference > 0 ? 'right' : xDifference < 0 ? 'left' : prevXDirection; // eslint-disable-line no-nested-ternary
  const yDirection = yDifference > 0 ? 'down' : yDifference < 0 ? 'up' : prevYDirection; // eslint-disable-line no-nested-ternary

  return {
    x: currentMouseX,
    y: currentMouseY,
    xDifference,
    yDifference,
    xDirection,
    yDirection,
    xPercentage,
    yPercentage,
    totalPercentage,
    eventsFired: timestamp ? eventsFired + 1 : eventsFired,
  };
};

const MouseInfoProvider: React.FC = (props) => {
  const {
    children,
  } = props;

  const animationRef = useRef<number>(null);

  const [state, dispatch] = useReducer(reducer, {
    x: 0,
    y: 0,
    xDifference: 0,
    yDifference: 0,
    xDirection: undefined,
    yDirection: undefined,
    xPercentage: 0,
    yPercentage: 0,
    totalPercentage: 0,
    eventsFired: 0,
  });

  const [isInViewport, setIsInViewport] = useState(undefined);

  const requestAnimation = useCallback((e?: MouseEvent): void => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(
      (timestamp) => {
        dispatch({
          e,
          timestamp,
          animationRef,
        });
      },
    );
  }, []);

  const setViewportStatus = useCallback((status: MouseEvent | boolean): void => {
    setIsInViewport(Boolean(status));
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', requestAnimation);
    document.addEventListener('mouseenter', () => setViewportStatus(true));
    document.addEventListener('mouseleave', () => setViewportStatus(false));
    return () => {
      document.removeEventListener('mousemove', requestAnimation);
      document.removeEventListener('mouseenter', () => setViewportStatus);
      document.removeEventListener('mouseleave', () => setViewportStatus);
    };
  }, [
    requestAnimation,
    setViewportStatus,
  ]);

  return (
    <MouseInfoContext.Provider
      value={{
        ...state,
        isInViewport,
      }}
    >
      {children && children}
    </MouseInfoContext.Provider>
  );
};

export default MouseInfoProvider;
