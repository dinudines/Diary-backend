import handler from "../utils/handler";
import dynamoDb from "../utils/dynamodb";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      contactId: event.pathParameters.id
    }
  };
  await dynamoDb.delete(params);
  return { status: true };
});