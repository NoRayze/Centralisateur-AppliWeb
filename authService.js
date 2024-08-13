import axios from 'axios';

const clientId = process.env.REACT_APP_SAGE_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SAGE_CLIENT_SECRET;
const authUrl = `https://${process.env.REACT_APP_CLOUDID_DOMAIN}/oauth/token`;

export const getToken = async () => {
  try {
    const response = await axios.post(authUrl, {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error getting token:', error);
    throw error;
  }
};
