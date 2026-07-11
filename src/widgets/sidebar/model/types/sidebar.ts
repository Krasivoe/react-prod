import React from 'react';

export interface SidebarItemData {
    path: string;
    text: string;
    textNS: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
