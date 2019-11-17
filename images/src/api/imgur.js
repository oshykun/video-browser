import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = process.env.IMGUR_CLIENT_ID || 'fbb60590d660043';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token',
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
        queryString,
    )}`;
  },

  async fetchImages(token) {
    const imagesUrl = `${ROOT_URL}/3/account/me/images`;
    try {
      const { data: { data } } = await axios.get(imagesUrl, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  },

  uploadImages(images, token) {
    // images it's an array like object, so creating an array out of it
    return Promise.all(Array.from(images).map(image => {
      const formData = new FormData();
      formData.append('image', image);
      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    })).catch(console.error);
  },

  deleteImage(image, token) {
    const { deletehash } = image;
    const deleteUrl = `${ROOT_URL}/3/image/${deletehash}`;
    return axios.delete(deleteUrl, {
      headers: { 'Authorization': `Bearer ${token}` },
    }).catch(console.error);
  },
};
