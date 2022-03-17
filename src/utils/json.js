
export const newStruct = (obj) => {
	const fresh = JSON.parse(JSON.stringify(obj));
	return { ...obj };
};