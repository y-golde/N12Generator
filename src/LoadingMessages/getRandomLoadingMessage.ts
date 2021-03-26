import LOADING_MESSAGES from './loadingMessages';
import { getRandMember } from '../Formats/formats';

const getRandomLoadingMessage = () => {
    return getRandMember(LOADING_MESSAGES);
}

export default getRandomLoadingMessage;