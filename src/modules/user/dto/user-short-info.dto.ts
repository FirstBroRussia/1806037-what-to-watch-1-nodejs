export type UserShortInfoType = {
    name: string;
    email: string;
    avatar?: string;
};

export const userShortInfoDTO = (plainObject: Record<string, any>): UserShortInfoType => {
    const {name, email, avatar} = plainObject;
    
    return {
        name,
        email,
        avatar
    }
};
