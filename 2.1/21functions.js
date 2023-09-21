function countryInfo(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}
spainInfo = countryInfo("Spain", "47 million", "Madrid");
console.log(spainInfo);

russiaInfo = countryInfo("Russia", "143 million", "Moscow");
console.log(russiaInfo);

usaInfo = countryInfo("United States", "332 million", "Washington D.C.");
console.log(usaInfo);
