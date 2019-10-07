
const initialState = {
	test: '',
};

export default (state = initialState, action) => {
	const {payload} = action;
	switch (action.type) {
		default:
			return state;
	}
};