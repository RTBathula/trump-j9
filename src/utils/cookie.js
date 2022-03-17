import Cookies from 'js-cookie';

const CookieKeys = {
	CURRENT_USER: 'CURRENT_USER'
};

export const setCurrentUser = (userName) => {		
	Cookies.set(CookieKeys.CURRENT_USER, userName);	
};

export const getCurrentUser = () => {
	return Cookies.get(CookieKeys.CURRENT_USER);	
};
