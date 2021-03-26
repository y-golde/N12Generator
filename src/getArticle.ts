import * as WordGroups from './Groups';

const getArticle = () => {
    const rndString = `<strong>${getRandMember(WordGroups.DRAMATIC_TITLES)}:</strong>  
                        ${getRandMember(WordGroups.MEET_CONNECTORS)} 
                        ${getRandMember(WordGroups.GROUPS_OF_PEOPLE)}
                        ש${getRandMember(WordGroups.SINGLE_PERSON_ACTIONS)}
                        ${Math.random() > 0.5 ? getRandMember(WordGroups.TIMES) : ''}
    `;

    return rndString;
}

const getRandMember = (group : string[]) => {
    return group[Math.floor(Math.random() * group.length)];
}

export default getArticle;