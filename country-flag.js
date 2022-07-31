const parentDiv = document.createElement('div');
parentDiv.style.display = 'flex';
parentDiv.style.flexWrap = 'wrap';
parentDiv.style.justifyContent = 'space-between';



const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const responseJson = await response.json();
  responseJson.forEach((country) => {
    if (country.flag) {
      const countryDiv = document.createElement('div');
      countryDiv.style.height = '200px';
      countryDiv.style.width = '250px';
      countryDiv.style.margin = '8px';
      countryDiv.style.position = 'relative';
      countryDiv.setAttribute('class', 'country-div')
      const labelDiv = document.createElement('div');
      labelDiv.setAttribute('class', 'label-div');
      labelDiv.innerHTML = `
      Name: ${country.name.common}<br />
      Population: ${country.population}<br />
      Capital: ${country.capital[0]}<br />
      `
      const imgEle = document.createElement('img');
      imgEle.setAttribute('src', country.flags.png);
      imgEle.style.width = '100%';
      imgEle.style.height = '100%';
      countryDiv.append(labelDiv, imgEle);
      parentDiv.append(countryDiv);
    }
  });
}

fetchCountries();


document.body.append(parentDiv);

