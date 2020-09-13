import handler from "../utils/handler";
import dynamoDb from "../utils/dynamodb";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": event.requestContext.identity.cognitoIdentityId
    }
  };
  const result = await dynamoDb.query(params);
  return result.Items;
});