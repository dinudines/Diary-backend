import AWS from "aws-sdk";

const db = new AWS.DynamoDB.DocumentClient();

export default {
  get : (params) => db.get(params).promise(),
  put : (params) => db.put(params).promise(),
  query : (params) => db.query(params).promise(),
  update : (params) => db.update(params).promise(),
  delete : (params) => db.delete(params).promise(),
};