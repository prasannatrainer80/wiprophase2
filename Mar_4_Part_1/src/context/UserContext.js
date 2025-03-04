import { createContext } from "react"

export const UserData = {
  userName : "Prasanna",
  company : "Wipro",
  topic : "React Training"   
}

export const UserConText = createContext(UserData);