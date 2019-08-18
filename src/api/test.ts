import axios from 'axios';

export const testApi = async () => {
    const result = await axios.get('/api/v1/test');
    console.log(result);
}