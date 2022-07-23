function useDeviceDetect() {
  let userInfo = {};
  userInfo.userAgent = navigator.userAgent;
  userInfo.browserInfo = `${navigator.userAgentData.brands[2].brand}, version: ${navigator.userAgentData.brands[2].version}`;
  userInfo.isMobile = navigator.userAgentData.mobile;
  console.log(userInfo);
  return userInfo;
}

export default useDeviceDetect;
