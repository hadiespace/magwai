export const createLoader = (link, onSuccess, onError) => () => fetch(
	link,
	{
		method: 'GET',
		credentials: 'same-origin',
	},
)
	.then((response) => {
		if (response.ok) {
			return response.json();
		}

		throw new Error(`${response.status} ${response.statusText}`);
	})
	.then((data) => {
		onSuccess(data);
	})
	.catch((err) => {
		onError(err);
	});
