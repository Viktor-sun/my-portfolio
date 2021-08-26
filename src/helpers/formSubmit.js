import axios from 'axios';
import notifications from './reactToastify';

export default function formSubmit(data) {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios
    .post('https://formsubmit.co/ajax/bobick.zdoh@gmail.com', {
      ...data,
    })
    .then(() => notifications.sucess('Data sent successfully.'))
    .catch(error => {
      notifications.error('Something went wrong!');
      console.log(error);
    });
}
