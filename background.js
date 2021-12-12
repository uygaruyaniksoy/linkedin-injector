const fetchUserData = async () => {
  const response = await fetch('https://randomuser.me/api');
  const users = await response.json();

  return users.results[0];
}

const handleMessage = (message, sender, callback) => {
  if (message === 'FETCH_USER') {
    fetchUserData()
      .then(callback);
  }

  return true;
}

chrome.runtime.onMessage.addListener(handleMessage)
