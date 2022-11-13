import { createContext, ReactNode, useState } from "react";


interface IFontSizeContext {
    getFontSize : ()=> string;
    setFontSize : (fontSize:number) => void;
}
interface IFontSizeContextProviderProps {
    children: ReactNode;
}

export const FontSizeContext = createContext({} as IFontSizeContext);


export function FontSizeContextProvider(props:IFontSizeContextProviderProps) {

    const [fontSizeState, setFontSizeState] = useState<string>("1.6rem")

    function setFontSize(fontSize:number) {
        switch (fontSize) {
            case 100:
                setFontSizeState("1.6rem")
                break;
            case 110:
                setFontSizeState("1.8rem")
                break;
            case 120:
                setFontSizeState("2.0rem")
                break
            case 130:
                setFontSizeState("2.2rem")
            case 140:
                setFontSizeState("2.4rem")
            case 150:
                setFontSizeState("2.6rem")
            default:
                break;
        }
    }

    function getFontSize() {
        return fontSizeState
    }

    return (
        <FontSizeContext.Provider
            value={{
                setFontSize,
                getFontSize 
            }

            }
        >
            {props.children}
        </FontSizeContext.Provider>
    );
}