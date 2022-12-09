import { createContext, useContext, useReducer } from "react";
import { UserAuth } from "./AuthContext";

const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = UserAuth(); 

  const INITIAL_STATE = {
    chatID: 'null',
    user: {}
  }
  
  const chatReducer = (state, action) => {
    console.log(action.payload);
    switch(action.type) {
      case 'CHANGE_USER':
        return {
          user: action.payload,
          chatID: 
            currentUser.uid > action.payload.uid 
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
      default: 
        return state;
    }
  }

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)
 
  return(
    <ChatContext.Provider value={{ data: state, dispatch }}>
      { children }
    </ChatContext.Provider>
  )
}

export function ChiChatContext() {
  return useContext(ChatContext)
}