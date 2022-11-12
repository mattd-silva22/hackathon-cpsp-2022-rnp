import { createContext, ReactNode, useState } from "react";
import { userListMockData } from "./mockUserData";

export interface IUserData {
    id: string;
    username: string;
    description: string;
    avatarImg: string;
    email: string;
    type: "admin" | "user";
    accessibilityUser: boolean;
};

interface IUserContext {
    addUser: (user:IUserData) => void;
    getUsers : ()=> IUserData[];
};

interface IUserContextProviderProps {
    children: ReactNode;
};

export const UserContext = createContext({} as IUserContext);

export function UserContextProvider(props:IUserContextProviderProps) {

    const [userList, setUserList] = useState<IUserData[]>(userListMockData)

    function getUsers() {
        return userList;
    };

    function addUser(user:IUserData){
        setUserList(userList.concat(user))
    };

    return (
        <UserContext.Provider
            value={{
                getUsers,
                addUser
            }

            }
        >
            {props.children}
        </UserContext.Provider>
    );

}