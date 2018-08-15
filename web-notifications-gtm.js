 <script> 
  function sendNotification() {
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications");
    }
    else if (Notification.permission === "granted") {
      notificationBuilder();
    }
    else if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          notificationBuilder();
        }
      });
    }
    
    function notificationBuilder() {
      var notification = new Notification("INSERT_TITLE_HERE", {
        icon: "INSERT_ICON_URL_HERE",
        body: "INSERT_BODY_HERE",
      });

      notification.onclick = function () {
        window.open("INSERT_DESTINATION_URL_HERE");      
      };
      setTimeout(notification.close.bind(notification), 7000); 
    }
  }

  if (typeof {{Session Alive}} === "undefined"){
    sendNotification();
  }

  var d = new Date();
  d.setTime(d.getTime() + 1800000);
  var expires = "expires="+d.toUTCString();
  document.cookie = "session=1; "+expires+"; path=/";
</script>


