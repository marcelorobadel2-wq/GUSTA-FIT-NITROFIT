import { useState, useEffect } from 'react';

interface UseCookieConsentReturn {
  hasConsented: boolean;
  acceptCookies: () => void;
}

export const useCookieConsent = (): UseCookieConsentReturn => {
  const [hasConsented, setHasConsented] = useState(true); // Default true to avoid flash, then check effect

  useEffect(() => {
    const consent = localStorage.getItem('gusta_cookie_consent');
    if (!consent) {
      setHasConsented(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('gusta_cookie_consent', 'true');
    setHasConsented(true);
  };

  return { hasConsented, acceptCookies };
};