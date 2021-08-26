import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

// eslint-disable-next-line
export default {
  sucess(text) {
    toast.success(text);
  },
  error(text) {
    toast.error(text);
  },
};
