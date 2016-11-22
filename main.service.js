/**
 * Created by asensio on 11/20/16.
 */
export default ($http) => {

	let set = (key, value) => {
		localStorage.setItem(key, value);
	}
	let get = (key) => {
		return localStorage.getItem(key);
	}

	return {
		set: set,
		get: get
	}
	
}




