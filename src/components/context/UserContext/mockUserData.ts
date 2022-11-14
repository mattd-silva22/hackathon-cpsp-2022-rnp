import { IUserData } from ".";
import { nanoid } from "nanoid";
export const userListMockData:IUserData[] = [
    {   
        id : nanoid(6),
        username: "João Tavares",
        avatarImg : "https://f.i.uol.com.br/fotografia/2022/06/15/165531883262aa29301c1ff_1655318832_3x4_md.jpg",
        email : "joao@email.com",
        type:"admin",
        accessibilityUser: false,
        description: "adfgh"
    },
    {   
        id : nanoid(6),
        username: "Carlos Peixoto",
        avatarImg : "https://images.rtl.fr/~c/770v513/rtl/www/1446418-travis-bickle-robert-de-niro-dans-taxi-driver.jpg",
        email : "peixoto.carlos@email.com",
        type:"admin",
        accessibilityUser: false,
        description: "adfgh"
    },
    { 
        id: nanoid(6),
        username: "Maria Fernandes",
        avatarImg : "https://images.mubicdn.net/images/cast_member/170617/cache-174245-1659464131/image-w856.jpg?size=800x",
        email : "maria@email.com",
        type : "user",
        accessibilityUser: true,
        description: ""

    },

    {
        id: nanoid(6),
        username: "Guto Marcelo",
        avatarImg : "https://classic.exame.com/wp-content/uploads/2021/03/Irmao-Lazaro.jpg?quality=70&strip=info&w=718",
        email : "guto.marcelo@email.com",
        type : "user",
        accessibilityUser: true,
        description: ""

    },

    {
        id: nanoid(6),
        username: "Kira Santana",
        avatarImg : "https://i.pinimg.com/736x/69/81/0f/69810fe081bc7f91fc30b9e4474f93fd.jpg",
        email : "kira.santos@email.com",
        type : "user",
        accessibilityUser: true,
        description: ""

    },



    
    
]