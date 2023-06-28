import React, { useEffect, useRef, useState } from 'react';
import './item.less';
import Expand from '../../assets/expand.svg?component';
import TrueIcon from '../../assets/true.svg?component';
import useMouseHover from '../../util/mouse';

export type SubItemProps = {
    label: string
    key: string | number
    icon?: React.ReactNode
    onClick?: () => void
}

export type ItemProps = {
    icon?: React.ReactNode
    children?: SubItemProps[]
    onClick?: () => void
    checked?: boolean
    label: string
    key: string | number,
    render?: () => React.ReactNode
}


const Item = ({ icon, children, onClick, checked, label, key }: ItemProps) => {
    const [check, setCheck] = useState<boolean>(false);
    const [currentRef, isHovered] = useMouseHover<HTMLLIElement>();
    const handleCheck = () => {
        onClick && onClick();
        setCheck(!check);
    }

    const handleListPosition = (open: boolean) => {
        const { x, y, height, width } = selectedRef.current?.getBoundingClientRect() || { x: 0, y: 0, height: 0, width: 0 };
        console.log(x, y, height, width);
        selectedRef.current?.style.setProperty('position', 'absolute');
        selectedRef.current?.style.setProperty('left', `${width / 2}px`);
        selectedRef.current?.style.setProperty('top', `${y}px`);
        selectedRef.current?.style.setProperty("display", open ? "block" : "none");
    }

    const selectedRef = useRef<HTMLLIElement>(null);
    useEffect(() => {
        handleListPosition(isHovered && !!children);
    }, [isHovered, children]);

    return <>
        <li className="item" onClick={handleCheck} key={key} ref={currentRef}>
            <span className='item-inner'>
                <span className='item-leftIcon'>
                    {checked && check && <TrueIcon />}
                </span>
                {label}
                {children && <span className='item-expand'><Expand /></span>}
            </span>
        </li>
        {
            children && isHovered && <ul className="sub-item" >
                {children.map((item, index) => <Item {...item} key={item.key || index} />)}
            </ul>
        }
    </>;
}

export default Item;