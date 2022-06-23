const getDatos = async () => {
	const userId = Math.floor(Math.random() * 10 + 1);
	try {
		const url = 'https://jsonplaceholder.typicode.com/users/' + userId;
		const results = await fetch(url);
		const users = results.json();

		return users;
	} catch (e) {
		console.log(e);
	}
};

export { getDatos };
