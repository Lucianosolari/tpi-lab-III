import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import useHttp from "../hooks/use-http";
import { getAllEvents } from "../lib/api";

export const EventsContext = createContext();

export const EventsContextProvider= ({ children }) => {
    const [dataEventsContext, setDataEventsContext] = useState([]);

    const {
      sendRequest,
      status,
      data: loadedEvents,
      error,
    } = useHttp(getAllEvents, true);

    useEffect(() => {
      sendRequest();
      setDataEventsContext(loadedEvents)
    }, []);

    console.log(dataEventsContext);

    return (
        <EventsContext.Provider value={{
            dataEventsContext,
        }}>
            {children}
        </EventsContext.Provider>
    )
}

export const useAuth = () => {
  const context = useContext(EventsContext);
  return context;
};