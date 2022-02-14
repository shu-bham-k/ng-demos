export interface AboutInterface {

    imgSrc: string;

    name: string;

    role: string;

    address: string;



}

export interface SocialMediaInterface extends Array<{ socialMediaValue: string; }> { }



export interface InformationInterface {

    fullName: String;

    email: string;

    phone: string;

    mobile: string;

    address: string;

}

export interface ProjectStatusInterface extends Array<{ label: string; progressValue: number }> { }