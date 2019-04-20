import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useLayoutEffect, useRef, useState } from "react";
import { ButtonProps } from "./interface";

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

export function Button(props: ButtonProps) {
    const { prefixCls = "xy-button", className, style, children, type, shape, size, long, ghost, icon, loading, disabled, onClick } = props;
    const [hasTwoCNChar, setHasTwoCNChar] = useState(false);
    const ref = useRef();
    const classString = classNames(prefixCls, className, style, {
        [`${prefixCls}-type-${type}`]: !!type,
        [`${prefixCls}-shape-${shape}`]: !!shape,
        [`${prefixCls}-size-${size}`]: !!size,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-ghost`]: ghost,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-long`]: long,
        "two-chinese-chars": hasTwoCNChar,
    });

    useLayoutEffect(() => {
        const button = ref.current as HTMLButtonElement;
        if (!button) {
            return;
        }
        const text = button.textContent || button.innerText;
        if (isNeedInserted() && isTwoCNChar(text)) {
            if (!hasTwoCNChar) {
                setHasTwoCNChar(true);
            }
        } else {
            if (hasTwoCNChar) {
                setHasTwoCNChar(false);
            }
        }
    }, [ref.current]);

    function isNeedInserted() {
        return React.Children.count(children) === 1 && !icon;
    }

    function clickHandle(e: React.MouseEvent<HTMLButtonElement>) {
        if (!disabled && !loading && onClick) {
            onClick(e);
        }
    }

    return (
        <button ref={ref} className={classString} style={style} disabled={disabled} onClick={clickHandle}>
            {loading ? <FontAwesomeIcon className={`${prefixCls}-icon`} icon={faSpinner} spin={true} /> : icon && <FontAwesomeIcon className={`${prefixCls}-icon`} icon={icon} />}
            {children && <span>{children}</span>}
        </button>
    );
}

export default React.memo(Button);
