import React, { createContext, useContext } from "react";

const EventHandlerContext = createContext();

export default function EventHandlerProvider({ children, handlers }) {
  return (
    <EventHandlerContext.Provider value={handlers}>
      {children}
    </EventHandlerContext.Provider>
  );
}

export function useEventHandlerContext() {
  return useContext(EventHandlerContext);
}
