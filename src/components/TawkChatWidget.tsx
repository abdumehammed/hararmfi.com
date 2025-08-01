// src/App.tsx or src/components/TawkChatWidget.tsx
import React from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  // You can get the propertyId and widgetId from your Tawk.to script:
  // https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID
  const propertyId = '6811eb2400e88619103f2de7'; // From your script
  const widgetId = '1iq2vt1rr';         // From your script

  // Optional: If you want to access the Tawk.to API (e.g., minimize, maximize)
  const tawkMessengerRef = React.useRef(null);

  // Optional: Callback when the widget loads
  const onLoad = () => {
    console.log("Tawk.to widget loaded!");
    // Example: tawkMessengerRef.current.minimize();
  };

  return (
    <div>
      {/* Your other application content */}
      <h1>Welcome to my React App!</h1>

      <TawkMessengerReact
        propertyId={propertyId}
        widgetId={widgetId}
        onLoad={onLoad}
        ref={tawkMessengerRef} // Attach ref if you need to access API methods
      />
    </div>
  );
}

export default App;