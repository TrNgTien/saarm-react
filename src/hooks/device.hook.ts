import { DevicesBoundary } from '@/common/constants';
import { useWindowSize } from 'react-use';

export const useOnMobileDevice = () => {
  // taken from MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
  let hasTouchScreen = false;
  if ('maxTouchPoints' in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  } else if ('msMaxTouchPoints' in navigator) {
    // @ts-ignore
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
  } else {
    const mediaQuery = window.matchMedia('(pointer:coarse)');
    if (mediaQuery && mediaQuery.media === '(pointer:coarse)') {
      hasTouchScreen = !!mediaQuery.matches;
    } else if ('orientation' in window) {
      hasTouchScreen = true; // deprecated, but good fallback
    } else {
      // Only as a last resort, fall back to user agent sniffing
      const { userAgent } = navigator;
      hasTouchScreen =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(userAgent) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(userAgent);
    }
  }
  return hasTouchScreen;
};

export const useOnPhone = () => {
  const { width } = useWindowSize();
  return width < DevicesBoundary.TABLET_PORTRAIT_LOWER_BOUNDARY;
};

export const useOnPhoneAndTabletPortrait = () => {
  const { width } = useWindowSize();
  return width < DevicesBoundary.TABLET_LADNSCAPE_LOWER_BOUNDARY;
};

export const useOnDesktop = () => {
  const { width } = useWindowSize();
  return width >= DevicesBoundary.DESKTOP_LOWER_BOUNDARY;
};
