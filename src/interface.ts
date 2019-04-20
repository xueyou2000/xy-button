import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
export type ButtonType = "primary" | "dashed" | "text" | "danger";

export interface ButtonGeneric {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 形状
     */
    shape?: "circle";
    /**
     * 尺寸
     */
    size?: "small" | "large";
}

export interface ButtonProps extends ButtonGeneric {
    /**
     * 按钮类型
     */
    type?: ButtonType;
    /**
     * 是否长按钮
     */
    long?: boolean;
    /**
     * 是否为幽灵按钮
     */
    ghost?: boolean;
    /**
     * 图标
     */
    icon?: IconDefinition;
    /**
     * 等待状态
     */
    loading?: boolean;
    /**
     * 禁用状态
     */
    disabled?: boolean;
    /**
     * click事件
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonGroupProps extends ButtonGeneric {
    /**
     * 是否垂直
     */
    vertical?: boolean;
}
