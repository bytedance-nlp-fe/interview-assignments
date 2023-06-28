import React, { forwardRef, useEffect, useState } from 'react';
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
    children?: SubItemProps[]
    onClick?: () => void
    checked?: boolean
    label: string
    key: string | number,
    render?: () => React.ReactNode
}

export type SubMenuProps = {
    parentRef: React.RefObject<HTMLLIElement>
    children: SubItemProps[]
}

const SubItem = forwardRef<HTMLLIElement, SubItemProps>(({ label, key, onClick, icon }, ref) => {
    return <li className="item" onClick={onClick} key={key} ref={ref}>
        <span className='item-inner'>
            <span className='item-leftIcon'>
                {icon}
            </span>
            {label}
        </span>
    </li>
})

const SubMenu = forwardRef<HTMLUListElement, SubMenuProps>(({ parentRef, children }, ref) => {
    const { x, y, width } = parentRef.current?.getBoundingClientRect() || { x: 0, y: 0, width: 0 }

    return <ul className="sub-item" style={{
        position: 'fixed',
        left: `${x + width + 1}px`,
        top: `${y}px`,
        display: 'block',
    }} ref={ref}>
        {children.map((item, index) => <SubItem {...item} key={item.key || index} />)}
    </ul>
})

const Item = ({ children, onClick, checked, label, key }: ItemProps) => {
    const [check, setCheck] = useState<boolean>(false);
    const [currentRef, isHovered] = useMouseHover<HTMLLIElement>();
    const [subMenuRef, isExpand] = useMouseHover<HTMLUListElement>();
    const [expand, setExpand] = useState<boolean>(false);
    const handleCheck = () => {
        onClick && onClick();
        setCheck(!check);
    }

    useEffect(() => {
        setExpand((isHovered || isExpand) && !!children)
    }, [isHovered, children, isExpand]);
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
            children && expand && <SubMenu ref={subMenuRef} parentRef={currentRef} children={children} />
        }
    </>;
}

export default Item;