const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '647f87cbfcmsh2e645e30b769e02p167d53jsn16d4a359603a',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};
function countryInput(){
	let cInput = document.getElementById('countryinput').value;
	document.getElementById('country').innerHTML = cInput;
	fetch('https://covid-193.p.rapidapi.com/statistics?country=' + cInput, options)
	.then((response) => {return response.json()})
	.then((data) => {
		console.log(data);
		document.getElementById('totaldeath').innerHTML = data.response[0].deaths.total;
		document.getElementById('totalcase').innerHTML = data.response[0].cases.total;
		document.getElementById('totaltest').innerHTML = data.response[0].tests.total;
		document.getElementById('caseactive').innerHTML = data.response[0].cases.active;
		document.getElementById('casenew').innerHTML = data.response[0].cases.new;
		document.getElementById('caserecover').innerHTML = data.response[0].cases.recovered;
    })
	.catch(err => console.log('err'));
}

// fetch('https://covid-193.p.rapidapi.com/statistics?country=' + cInput, options)
// 	.then((response) => {return response.json()})
// 	.then((data) => {
// 		console.log(data);
// 		document.getElementById('totaldeath').innerHTML = data.response[0].deaths.total;
//     })
// 	.catch(err => console.log('err'));