import { func } from "prop-types";
import {useState, useEffect} from "react";

export default function useRightClickMenu(){
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const [showMenu,setShowMenu] = useState(false);


    const handleContextMenu = (e) =>{
        console.log("handleContextMenu");

        e.preventDefault();
        setX(500);
        setY(500);
        setShowMenu(true);
    };
    const handleClick = ()=>{
        showMenu && setShowMenu(false);
    };

    useEffect(()=>{
        document.addEventListener('click',handleClick);
        document.addEventListener('contextmenu',handleContextMenu);
        return ()=>{
            document.removeEventListener('click',handleClick);
            document.removeEventListener('contextmenu',handleContextMenu);
        };
    });

    return {x,y,showMenu};

}