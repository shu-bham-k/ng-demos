import { TableData, PollsData, GroupsData } from './table-data';

export const today : number[] = 
[
    8590,2800,3890,1590,1500,9990
]

export const header:string[] =
[
    'S.no','Username','Full Name', 'Email Id', 'Date of Joining', 'Status'
]

export const tableData:TableData[] = 
[
    {
        sno:1,username:'jack',fullName:'Jack Palmer', emailId:'Jack.P@gmail.com',doj:'2 Feb, 2022', status:'Active',
        groups:
        {
            groupName:['Mia Group','Joe Group','Emily','June','Smith','Tora'],
            admin:['Jack Group','Palmer Group','Dyer Group','Nick Group','Jack.P Group','JP Group'],
            totalMembers:[200,160,114,142,123,112]
        }
    },
    {
        sno:2,username:'mia',fullName:'Mia Dyer', emailId:'Mia.D@gmail.com',doj:'27 Jan, 2022', status:'Inactive',
        groups:
        {
            groupName:['Ashirbad Group','Joe Group','Emily','June','Smith','Tora'],
            admin:['Jack Group','Palmer Group','Dyer Group','Nick Group','Jack.P Group','JP Group'],
            totalMembers:[200,160,114,142,123,112]
        }
    },
    {
        sno:3,username:'emily',fullName:'Emily Manis', emailId:'Emily.M@gmail.com',doj:'20 Jan, 2022', status:'Active',
        groups:
        {
            groupName:['Mia Group','Joe Group','Emily','June','Smith','Tora'],
            admin:['Jack Group','Palmer Group','Dyer Group','Nick Group','Jack.P Group','JP Group'],
            totalMembers:[200,160,114,142,123,112]
        }
    },
    {
        sno:4,username:'lucas',fullName:'Lucas Tora', emailId:'Lucas.T@gmail.com',doj:'17 Jan, 2022', status:'Active',
        groups:
        {
            groupName:[],
            admin:[],
            totalMembers:[]
        }
    },
    {
        sno:5,username:'james',fullName:'James Nick', emailId:'James.N@gmail.com',doj:'11 Jan, 2022', status:'Inactive',
        groups:
        {
            groupName:['Mia Group','Joe Group','Emily','June','Smith','Tora'],
            admin:['Jack Group','Palmer Group','Dyer Group','Nick Group','Jack.P Group','JP Group'],
            totalMembers:[200,160,114,142,123,112]
        }
    },
    {
        sno:6,username:'brian',fullName:'Brian Lora', emailId:'Brain.L@gmail.com',doj:'16 Dec, 2022', status:'Inactive',
        groups:
        {
            groupName:['Mia Group','Joe Group','Emily','June','Smith','Tora'],
            admin:['Jack Group','Palmer Group','Dyer Group','Nick Group','Jack.P Group','JP Group'],
            totalMembers:[200,160,114,142,123,112]
        }
    },
    {
        sno:7,username:'harry',fullName:'Harry Joe', emailId:'Harry.J@gmail.com',doj:'07 Dec, 2021', status:'Active',
        groups:
        {
            groupName:['Mia Group','Joe Group','Emily','June','Smith','Tora'],
            admin:['Jack Group','Palmer Group','Dyer Group','Nick Group','Jack.P Group','JP Group'],
            totalMembers:[200,160,114,142,123,112]
        }
    },
    {
        sno:8,username:'sarah',fullName:'Sarah June', emailId:'Sarah.J@gmail.com',doj:'28 Nov, 2021', status:'Active',
        groups:
        {
            groupName:['Mia Group','Joe Group','Emily','June','Smith','Tora'],
            admin:['Jack Group','Palmer Group','Dyer Group','Nick Group','Jack.P Group','JP Group'],
            totalMembers:[200,160,114,142,123,112]
        }
    },
    {
        sno:9,username:'jake',fullName:'Jake Smith', emailId:'Jake.S@gmail.com',doj:'13 Nov, 2021', status:'Inactive',
        groups:
        {
            groupName:['Mia Group','Joe Group','Emily','June','Smith','Tora'],
            admin:['Jack Group','Palmer Group','Dyer Group','Nick Group','Jack.P Group','JP Group'],
            totalMembers:[200,160,114,142,123,112]
        }
    },
    {sno:10,username:'kevin',fullName:'Kevin Joe', emailId:'Kevin.J@gmail.com',doj:'03 Nov, 2021', status:'Active',groups:
    {
        groupName:['Mia Group','Joe Group','Emily','June','Smith','Tora'],
        admin:['Jack Group','Palmer Group','Dyer Group','Nick Group','Jack.P Group','JP Group'],
        totalMembers:[200,160,114,142,123,112]
    }},
    {sno:11,username:'jack',fullName:'Jack Tora', emailId:'Jack.T@gmail.com',doj:'28 Oct, 2021', status:'Inactive',
    groups:
    {
        groupName:['Mia Group','Joe Group','Emily','June','Smith','Tora'],
        admin:['Jack Group','Palmer Group','Dyer Group','Nick Group','Jack.P Group','JP Group'],
        totalMembers:[200,160,114,142,123,112]
    }},

]


export const pollsData:PollsData[]=[
    {fullName:'Jack Palmer',doj:'2 Feb, 2022', image: 'profile pic1.svg',totalVotes:'912'},
    {fullName:'Mia Dyer',doj:'5 Feb, 2022', image: 'profile pic2.svg',totalVotes:'210'},
    {fullName:'Harry Joe',doj:'3 Feb, 2022', image: 'profile pic1.svg',totalVotes:'501'},
    {fullName:'Kevin Joe',doj:'5 Feb, 2022', image: 'profile pic1.svg',totalVotes:'912'},
    {fullName:'Harry Joe',doj:'11 Feb, 2022', image: 'profile pic2.svg',totalVotes:'602'},
    {fullName:'Jake Smith',doj:'10 Feb, 2022', image: 'profile pic1.svg',totalVotes:'700'},
    {fullName:'Brian Lora',doj:'6 Feb, 2022', image: 'profile pic2.svg',totalVotes:'800'},
    {fullName:'Jack Tora',doj:'2 Feb, 2022', image: 'profile pic1.svg',totalVotes:'912'},
    {fullName:'Kevin Joe',doj:'14 Feb, 2022', image: 'profile pic2.svg',totalVotes:'900'},
]



