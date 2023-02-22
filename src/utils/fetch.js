const axios = require('axios');

const options = {
	method: 'GET',
	url: 'https://timetable-lookup.p.rapidapi.com/TimeTable/BOS/LAX/20191217/',
	headers: {
		'X-RapidAPI-Key': 'a7442bd0c0msh4cd393c1bc1b395p166015jsn8d48826c258d',
		'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com',
	},
};

axios
	.request(options)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});
