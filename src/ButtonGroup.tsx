import classNames from "classnames";
import React from "react";
import { ButtonGroupProps } from "./interface";

export function ButtonGroup(props: ButtonGroupProps) {
    const { prefixCls = "xy-button-group", className, style, children, shape, size, vertical } = props;
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-shape-${shape}`]: !!shape,
        [`${prefixCls}-size-${size}`]: !!size,
        [`${prefixCls}-vertical`]: vertical,
    });

    return (
        <div className={classString} style={style}>
            {children}
        </div>
    );
}

export default React.memo(ButtonGroup);
