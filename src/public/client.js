const socket = new WebSocket("ws://dev.mndevs.host:80"); // Replace with your WebSocket server URL

socket.addEventListener("message", (event) => {
  const data = JSON.parse(event.data).data; // Received data from the WebSocket
    showNotification(data); // Call the function to show the notification
});

// Function to show the notification
function showNotification(message) {
  if (Notification.permission === "granted") {
    // If the browser supports notifications and permission is granted
    const notification = new Notification("Notification Title", {
      body: message,
      icon: "assets/logo.svg", // Replace with the path to your notification icon
    });

    notification.onclick = () => {
    };
  }
}

// Request permission for notifications (if not already granted)
if (Notification.permission !== "granted") {
  Notification.requestPermission().then((permission) => {
    if (permission !== "granted") {
      console.log("Notification permission denied.");
    }
  });
}


