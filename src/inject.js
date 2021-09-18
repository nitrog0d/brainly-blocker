// I swear. I tried every single way to listen to when local storage is changed in the same window but it doesn't work. This is my last idea, I tried.
Object.keys(localStorage).forEach((key) => {
  // Remove every entry that starts with "flexible-tunnel", that's part of the ads
  if (key.startsWith('flexible-funnel')) {
    localStorage.removeItem(key);
  }
  // Set these to a REALLY (I mean it) far timestamp so it doesn't annoy us with popups
  if (key === 'registration-toplayer/expires' || key === 'offer-modal/timestamp' || key === 'welcome-payment-form/timestamp') {
    localStorage.setItem(key, 2147483647000);
  }
});

// Remove annoying banner
const banner = document.getElementsByClassName('js-react-bottom-banner')[0];
if (banner) banner.parentNode.removeChild(banner);
