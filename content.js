// Properties to display in the details card with formatter functions
const propsToDisplay = [
  ['Name', ({name: {title, first, last}}) =>
    `${title}. ${first} ${last}`],
  ['Email', ({email}) => email],
  ['Gender', ({gender}) => gender],
  ['Address', ({location: {street, postcode, country, city}}) =>
    `${street.name} ${street.number}, ${postcode}, ${city}, ${country}`],
]

const setUserDetails = (user) => {
  const topCard = document.querySelector('section.pv-top-card')

  if (!topCard) {
    return console.error('Cannot find the top card in the profile');
  }

  const detailsCard = document.createElement('section');
  detailsCard.classList = ['artdeco-card artdeco-container-card leadjet-details-card'];

  const title = document.createElement('h2');
  title.textContent = 'User Details';
  detailsCard.appendChild(title);

  for (const [title, formatter] of propsToDisplay) {
    const prop = document.createElement('h3');
    const value = document.createElement('span');
    prop.textContent = title;
    value.textContent = formatter(user);

    detailsCard.appendChild(prop);
    detailsCard.appendChild(value);
  }

  topCard.parentElement.insertBefore(detailsCard, topCard.nextSibling)
}

chrome.runtime.sendMessage('FETCH_USER', setUserDetails);
