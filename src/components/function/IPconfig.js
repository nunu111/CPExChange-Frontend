export function IPconfig() {
  const IP = "http://10.121.36.217:8080";
  // const IP="http://localhost:8080";
  const getIP = () => {
    return IP;
  };
  return { getIP };
}
