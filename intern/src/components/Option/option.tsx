import './option.less';
import React, { ReactNode, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import DropDownIcon from '../../assets/dropdown.svg?component';
import Up from '../../assets/up.svg?component';
import Down from '../../assets/down.svg?component';
import Left from '../../assets/left.svg?component';
import Right from '../../assets/right.svg?component';
import Back from '../../assets/back.svg?component';
import Item, { ItemProps, SubItemProps } from './item';

export type OptionProps = {
    children: string | React.ReactNode
    items?: ItemProps[]
    openCallback?: () => void;
    hiddenQueue?: boolean
    queueTime?: number
}

export type MenuListProps = {
    arrowQueueRef: React.RefObject<ArrowQueueRef>
    items?: ItemProps[]
}

export type SubMenuProps = {
    items?: SubItemProps[]
}

export type ArrowQueueProps = {
    queueTime: number
}

export type ArrowQueueRef = HTMLUListElement & { push: (el: ReactNode) => void };

const disPatchKeyBoard = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Enter', 'Escape'];

const TimeOutElement = ({ queueTime, children }: { queueTime: number, children: ReactNode }) => {
    const [show, setShow] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => { setShow(false) }, queueTime)
    });
    if (!show) return null;
    return <>{children}</>
}

const ArrowQueue = forwardRef<ArrowQueueRef, ArrowQueueProps>(({ queueTime }, ref) => {
    const [queue, setQueue] = useState<ReactNode[]>([]);
    const push = ((el: ReactNode) => setQueue([...queue, <TimeOutElement queueTime={queueTime} >{el}</TimeOutElement>]))
    useImperativeHandle(ref, () => ({ push } as ArrowQueueRef));
    return <ul className="arrow" ref={ref}>
        {
            queue.map((el, index) => <li key={index}>{el}</li>)
        }
    </ul>;
})

const MenuList = forwardRef<HTMLUListElement, MenuListProps>(({ arrowQueueRef, items }, ref) => {
    const [activeIndex] = useState<ItemProps['key']>(items?.length ? items[0].key : 0);
    const handleKeyDown = (e: KeyboardEvent) => {
        if (arrowQueueRef.current) {
            if (disPatchKeyBoard.includes(e.key)) {
                e.preventDefault();
            }
            switch (e.key) {
                case 'ArrowDown':
                    console.log('down');
                    arrowQueueRef.current.push(<Down width='20px' height='20px' />);
                    break;
                case 'ArrowUp':
                    console.log('up');
                    arrowQueueRef.current.push(<Up width='20px' height='20px' />);
                    break;
                case 'ArrowLeft':
                    console.log('left');
                    arrowQueueRef.current.push(<Left width='20px' height='20px' />);
                    break;
                case 'ArrowRight':
                    console.log('right');
                    arrowQueueRef.current.push(<Right width='20px' height='20px' />);
                    break;
                case 'Enter':
                    items?.find((item) => item.key === activeIndex)?.onClick?.();
                    break;
                case 'Escape':
                    arrowQueueRef.current.push(<Back width='20px' height='20px' />);
                    break;
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    })
    return <>
        <ul className="option-list" ref={ref}>
            {items?.map((item, index) => <Item {...item} key={item.key || index} />)}
        </ul>
    </>
})

const Option = ({ children, openCallback, hiddenQueue, items, queueTime }: OptionProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const arrowQueueRef = useRef<ArrowQueueRef>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const handleListPosition = (open: boolean) => {
        const { x, y, height, width } = buttonRef.current?.getBoundingClientRect() || { x: 0, y: 0, height: 0, width: 0 };
        console.log(height, width);
        listRef.current?.style.setProperty('position', 'fixed');
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
        <MenuList arrowQueueRef={arrowQueueRef} ref={listRef} items={items} />
        {!hiddenQueue && <ArrowQueue ref={arrowQueueRef} queueTime={queueTime || 1000} />}
    </>
}
export default Option;