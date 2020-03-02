import axios from 'axios';

const get = async (url, throwIfErr = false) => {
	try {
		const res = await axios.get(url)
		return res;
	} catch(e) {
		if(throwIfErr) {
			throw new Error(e);
		}
		return get(url, true);
	}
};

export const fetch = {
	get: get,
};