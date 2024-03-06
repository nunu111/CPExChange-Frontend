export function IPconfig() {
  const IP = "http://10.125.163.206:8080";
  // const IP="http://localhost:8080";
  const getIP = () => {
    return IP;
  };
  return { getIP };
}
