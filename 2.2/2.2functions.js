function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  return `‘You will be a ${jobTitle} in ${location} married to ${partnerName}
  with ${numberOfChildren} children’.`;
}
tell = tellFortune("Billionaire", "Monaco", "Gal Gadot", "seven");
console.log(tell);
