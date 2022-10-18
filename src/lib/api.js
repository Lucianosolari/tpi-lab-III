const FIREBASE_DOMAIN = "https://db-lab-7ec57-default-rtdb.firebaseio.com/";

export async function getAllEvents() {
  const response = await fetch(`${FIREBASE_DOMAIN}/event.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedEvents = [];

  for (const key in data) {
    const eventObj = {
      id: key,
      ...data[key],
    };

    transformedEvents.push(eventObj);
  }

  return transformedEvents;
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
}

export async function addUser(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/user.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}

export async function addEvent(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/event.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}
