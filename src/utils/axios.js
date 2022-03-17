import axios from 'axios';

const { BACKEND_URL } = window.J9_APPCONFIG;
export const router = axios.create({
  baseURL: BACKEND_URL
});

const errorInterceptor = async (request) => {
  const reply = { data: null, error: '', status: 0 };
  try {
    const data = await request;     
    reply.data = data.data;
  } catch (e) {  
    reply.error = (e.response && e.response.data) ? e.response.data : 'Something went wrong';
    reply.status = (e.response && e.response.status) ? e.response.status : 0;
  }

  return reply;
};

export const makeRequest = (reqConfig) => { 
  return errorInterceptor(router({
    ...reqConfig,
  }));
};

export default ({ Vue }) => {
  Vue.prototype.$axios = router;
};
