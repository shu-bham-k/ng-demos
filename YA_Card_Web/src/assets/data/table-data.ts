export interface TableData 
{
    sno:number,
    username:string,
    fullName:string,
    emailId:string,
    doj:string,
    status:string,
    groups: 
    {
        groupName:string[],
        admin:string[],
        totalMembers:number[]
    }
}


export interface PollsData 
{
    fullName:string,
    doj:string,
    image: string,
    totalVotes:string
}



export interface TableRows
{
    userName : string,
    firstName : string,
    lastName : string,
    email : string,
    createdOn : string,
    status : boolean  
}

export interface GroupsData
{
    sno:number,
    name : string,
    createdOn : string,
    createdBy : string,
    totalMembers : string,
    totalSubgroup : string 
}

export interface SettingsData
{
    qr_timer:number,
    terms_and_condition:string,
    privacy:string,
    about:string
}

export interface GroupsMember
{
    sno:number,
    username:string,
    emailId:string,
    
}
