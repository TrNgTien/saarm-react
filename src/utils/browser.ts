export const USER_AGENT = window.navigator.userAgent;

export function isIOS() {
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (USER_AGENT.includes('Mac') && 'ontouchend' in document)
  );
}

export function isIe() {
  return (
    USER_AGENT.indexOf('MSIE') !== -1 || USER_AGENT.indexOf('Trident/') !== -1
  );
}

export function isEdge() {
  return USER_AGENT.indexOf('Edge/') !== -1;
}

export function isFirefox() {
  return USER_AGENT.indexOf('Firefox/') !== -1;
}

export function isSafari() {
  return USER_AGENT.includes('Safari') && !USER_AGENT.includes('Chrome');
}

export function isChrome() {
  return /Chrome/.test(USER_AGENT) && /Google Inc/.test(navigator.vendor);
}
