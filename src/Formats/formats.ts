import * as WordGroups from '../Groups';

const formats = () => [
    `
        <strong>${getRandMember(WordGroups.DRAMATIC_TITLES)} - </strong>  
        ${getRandMember(WordGroups.MEET_CONNECTORS)} 
        ${getRandMember(WordGroups.GROUPS_OF_PEOPLE)}
        ש${getRandMember(WordGroups.SINGLE_PERSON_ACTIONS)}
        ${Math.random() > 0.3 ? getRandMember(WordGroups.TIMES) : ''}
    `,
    `
        <strong>${getRandMember(WordGroups.DRAMATIC_TITLES)} - </strong> 
        ${getRandMember(WordGroups.GROUPS_OF_PEOPLE)} 
        ש${getRandMember(WordGroups.TWO_PERSON_ACTIONS)}
        ${getRandMember(WordGroups.GROUPS_OF_PEOPLE)} 
        בגלל ${getRandMember(WordGroups.REASONS)}
    `,
    `
        <strong>ראיון ${getRandMember(WordGroups.INVERVIEW_TYPES)} עם ${Math.random() > 0.3 ? getRandMember(WordGroups.FAMILY_RELATIONS) + ' של ' : ''}${getRandMember(WordGroups.PERSONS)} - </strong> 
        ${getRandMember(WordGroups.CELEBRETY_INTERVIEW_ACTION)}
        ${getRandMember(WordGroups.GROUPS_OF_PEOPLE)} 
        - "${getRandMember(WordGroups.QUOTES)}"
    `,
]

export const getRandMember = (group : string[]) => {
    return group[Math.floor(Math.random() * group.length)];
}

const getRandomFormat = () => getRandMember(formats());

export default getRandomFormat;