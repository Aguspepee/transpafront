import io from 'socket.io-client';

const createSocket = (token) => {
  const socket = io(process.env.REACT_APP_BACKEND_URL, {
    query: { token },
  });
  return socket;
};

export default createSocket;
