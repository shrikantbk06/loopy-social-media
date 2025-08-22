
export interface RandomUsers{
    id: string;
    name: string;
    image: string;
}

// LAYOUT INCLUDE TYPES
export type MenuItemsTypes = {
    iconString: string;
    colorString: string;
    sizeString: string;
}

export interface MenuItemFollowCompTypes {
    user: RandomUsers
}