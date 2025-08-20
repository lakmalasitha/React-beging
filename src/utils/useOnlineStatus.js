const { useEffect, useState } = require("react");

const useOnlineStatus = () => {
  const [OnlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  //boolean value
  return OnlineStatus;
};
export default useOnlineStatus;
