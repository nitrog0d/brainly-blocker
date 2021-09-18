// I swear. I tried every single way to listen to when local storage is changed in the same window but it doesn't work. This is my last idea, I tried.

// Set these to a REALLY (I mean it) far timestamp so it doesn't annoy us with popups
localStorage.setItem('registration-toplayer/expires', 2147483647000);
localStorage.setItem('offer-modal/timestamp', 2147483647000);
localStorage.setItem('welcome-payment-form/timestamp', 2147483647000);

// Loop through every key
Object.keys(localStorage).forEach((key) => {
  // Remove every entry that starts with "flexible-tunnel", that's part of the ads
  if (key.startsWith('flexible-funnel')) {
    localStorage.removeItem(key);
  }
});

// Remove annoying banner
const pathName = window.location.pathname;
if (pathName.startsWith('/tarefa') || pathName.startsWith('/question')) {
  const banner = document.getElementsByClassName('js-react-bottom-banner')[0];
  if (banner) banner.parentNode.removeChild(banner);
}
