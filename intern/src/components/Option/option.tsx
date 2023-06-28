import './option.less';
import React, { Ref, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import DropDownIcon from '../../assets/dropdown.svg?component';
import Item, { ItemProps } from './item';
export type OptionProps = {
    children: string | React.ReactNode
    items?: ItemProps[]
    openCallback?: () => void;
    hiddenQueue?: boolean
}

export type MenuListProps = {
    items?: ItemProps[]
}

export type ArrowQueueProps = {
}

const ArrowQueue = forwardRef<HTMLDivElement, ArrowQueueProps>(({ }, ref) => {
    useImperativeHandle(ref, () => ({}));
    return <div className="arrow" ref={ref}></div>;
})

const MenuList = forwardRef<HTMLUListElement, MenuListProps>(({ items }, ref) => {
    const [activeIndex, setActiveIndex] = useState<ItemProps['key']>(items?.length ? items[0].key : 0);
    const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
        switch (e.key) {
            case 'ArrowDown':
                console.log('down');
                break;
            case 'ArrowUp':
                console.log('up');
                break;
            case 'ArrowLeft':
                console.log('left');
                break;
            case 'ArrowRight':
                console.log('right');
                break;
            case 'Enter':
                items?.find((item) => item.key === activeIndex)?.onClick?.();
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    })
    return <ul className="option-list" ref={ref}>
        {items?.map((item, index) => <Item {...item} key={item.key || index} />)}
    </ul>
})

const Option = ({ children, openCallback, hiddenQueue, items }: OptionProps) => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const arrowQueueRef = useRef<ArrowQueueProps>(null) as Ref<HTMLDivElement>;
    const listRef = useRef<HTMLUListElement>(null);

    const handleListPosition = (open: boolean) => {
        const { x, y, height, width } = buttonRef.current?.getBoundingClientRect() || { x: 0, y: 0, height: 0, width: 0 };
        console.log(height, width);
        listRef.current?.style.setProperty('position', 'absolute');
        listRef.current?.style.setProperty('left', `${x}px`);
        listRef.current?.style.setProperty('top', `${y + height / 2}px`);
        listRef.current?.style.setProperty("display", open ? "block" : "none");
    }

    const handleOpen = () => {
        if (!open && openCallback) {
            openCallback();
        }
        handleListPosition(!open);
        setOpen(!open);
    }
    return <>
        <div className="option" onClick={handleOpen} ref={buttonRef}>
            {children}
            <DropDownIcon />
        </div>
        <MenuList ref={listRef} items={items} />
        {hiddenQueue && <ArrowQueue ref={arrowQueueRef} />}
    </>
}

export default Option;