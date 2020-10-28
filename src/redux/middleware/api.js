import { FAILURE, REQUEST, SUCCESS } from '../constants';

const requestOptions = {
  method: 'GET',
  json: true,
  gzip: true
};


export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, postData, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {

    const response = await fetch(CallAPI,  requestOptions).then(async (result) => {
      const res = await result.json();
      if (res.data ) return res.data;
      throw res;
    }).catch((err) => {
      console.log('API call error:', err.message);
      throw  err.message;
    })

    return next({ ...rest, type: type + SUCCESS, response });
  } catch (err) {

    return  next({ ...rest, type: type + FAILURE, err });
  }
};
