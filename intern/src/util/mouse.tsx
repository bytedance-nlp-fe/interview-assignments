import { RefObject, useEffect, useRef, useState } from "react";

const useMouseHover = <T extends HTMLElement>(): [RefObject<T>, boolean] => {
    const [isHovered, setIsHovered] = useState(false);
    const currentRef = useRef<T>(null);
    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    useEffect(() => {
        const node = currentRef.current;
        if (!node) return;
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
            node.removeEventListener("mouseover", handleMouseOver);
            node.removeEventListener("mouseout", handleMouseOut);
        }
    });

    return [currentRef, isHovered];
}

export default useMouseHover;

