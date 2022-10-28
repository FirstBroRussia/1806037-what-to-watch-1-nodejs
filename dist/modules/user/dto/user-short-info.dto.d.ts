export declare type UserShortInfoType = {
    name: string;
    email: string;
    avatar?: string;
};
export declare const userShortInfoDTO: (plainObject: Record<string, any>) => UserShortInfoType;
