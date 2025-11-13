import { StreamChat } from 'stream-chat';
import { ENV } from './env.js';

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error('Stream API key and secret must be provided in environment variables.');
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async(userData) => {
    try {
        await chatClient.upsertUser(userData);
        console.log('Stream user upserted:', userData);
        return userData
    } catch (error) {
        console.error('Error upserting Stream user:', error);
    }
}

export const deleteStreamUser = async(userData) => {
    try {
        await chatClient.deleteUser(userData);
        return userData
    } catch (error) {
        console.error('Error deleting Stream user:', error);
    }
}