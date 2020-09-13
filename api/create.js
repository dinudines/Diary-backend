import { v4 as uuidv4 } from 'uuid';
import handler from "../utils/handler";
import dynamoDb from "../utils/dynamodb";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        Item: {
            userId: event.requestContext.identity.cognitoIdentityId,
            contactId: uuidv4(),
            content: data.content,
            createdAt: Date.now()
        }
    };
    await dynamoDb.put(params);
    return params.Item;
});