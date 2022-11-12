import { IUserData } from ".";
import { nanoid } from "nanoid";
export const userListMockData:IUserData[] = [
    {   
        id : nanoid(6),
        username: "João Tavares",
        avatarImg : "jjkk",
        email : "joao@email.com",
        type:"admin",
        accessibilityUser: false,
        description: "adfgh"
    },
    {
        id: nanoid(6),
        username: "Maria Fernandes",
        avatarImg : "imgTesteOp",
        email : "maria@email.com",
        type : "user",
        accessibilityUser: true,
        description: ""

    }
    
]