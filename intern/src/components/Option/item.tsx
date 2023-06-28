import React from 'react';
import './item.less';
import Expand from '../../assets/expand.svg?component';
import TrueIcon from '../../assets/true.svg?component';

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
    return <>
        <li className="item" onClick={onClick} key={key}>
            <span className='item-inner'>
                <span className='item-leftIcon'>
                    {checked && <TrueIcon />}
                </span>
                {label}
                {children && <span className='item-expand'><Expand /></span>}
            </span>
        </li>
    </>;
}
export default Item;