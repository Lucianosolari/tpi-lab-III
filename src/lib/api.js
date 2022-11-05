const FIREBASE_DOMAIN = "https://db-lab-7ec57-default-rtdb.firebaseio.com/";

export async function getAllEvents() {
  const response = await fetch(`${FIREBASE_DOMAIN}/event.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo cargar los eventos.");
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

export async function getAllUsers() {
  const response = await fetch(`${FIREBASE_DOMAIN}/user.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo cargar los usuarios.");
  }

  const transformedUsers = [];

  for (const key in data) {
    const eventObj = {
      id: key,
      ...data[key],
    };

    transformedUsers.push(eventObj);
  }

  return transformedUsers;
}

export async function getSingleEvent(eventId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/event/${eventId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo encontrar el evento.");
  }

  const loadedEvent = {
    id: eventId,
    ...data,
  };

  return loadedEvent;
}

export async function getEventsWithParticipants(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/user/${requestData.userId}/events.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo cargar los eventos del usuario.");
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

export async function getSingleUser(userId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/user/${userId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo encontrar el evento.");
  }

  const loadedUser = {
    id: userId,
    ...data,
  };

  return loadedUser;
}

export async function addUser(userData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/user.json`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo crear el usuario.");
  }

  return null;
}

export async function addUserWithEvent(userData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/user/${userData.userId}.json`, {
    method: "PUT",
    body: JSON.stringify(userData.userData, userData.userEventData,),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo cargar el usuario con evento.");
  }

  return null;
}

export async function modifyUser(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/user/${requestData.userId}.json`, {
    method: "PUT",
    body: JSON.stringify(requestData.userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo modificar el usuario.");
  }

  return null;
}

export async function removeUser(userId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/user/${userId}.json`, {
    method: "DELETE",
    body: JSON.stringify(userId),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo eliminar el usuario.");
  }

  return null;
}

export async function addEvent(eventData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/event.json`, {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "No se pudo crear el evento.");
  }
  return null;
}

export async function modifyEvent(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/event/${requestData.eventId}.json`, {
    method: "PUT",
    body: JSON.stringify(requestData.eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "No se pudo modificar el evento.");
  }
  return null;
}

export async function removeEvent(eventId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/event/${eventId}.json`, {
    method: "DELETE",
    body: JSON.stringify(eventId),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
if (!response.ok) {
  throw new Error(data.message ||'No se pudo borrar el evento.')
}
return null;
}

export async function accessToEvent(eventId, userData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/event/${eventId}/participants.json`,
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo acceder al evento.");
  }

  return null;
}

export async function addUserToEvent(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/eventParticipants/${requestData.eventId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo inscribir al usuario en el evento.");
  }

  return { userId: data.name };
}

export async function addEventToUser(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/user/${requestData.userId}/events/${requestData.eventId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.userEventData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo inscribir al usuario en el evento.");
  }

  return { userId: data.name };
}

export async function getUserEvents(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/user/${requestData.userId}/events.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.eventId),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo inscribir al usuario en el evento.");
  }

  return { userId: data.name };
}

export async function removeUserFromEvent(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/userEvent/${requestData.eventId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No se pudo borrar al usuario del evento.");
  }

  return { userId: data.name };
}