import useDeviceDetect from "./../hooks/useDeviceDetect ";

function UserInfo() {
  let userInfo = useDeviceDetect();

  return (
    <div>
      <div>UserAgent: {userInfo.userAgent}</div>
      <div>Browser Info: {userInfo.browserInfo}</div>
      <div>Mobile device: {userInfo.isMobile ? "Yes" : "No"}</div>
    </div>
  );
}

export default UserInfo;
