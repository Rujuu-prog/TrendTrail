import React from "react";

export interface TabData {
    title: string;
    icon?: React.ElementType;
    iconStyle?: React.CSSProperties;
    content: React.ReactNode;
}
