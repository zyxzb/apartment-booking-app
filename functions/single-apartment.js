require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
})
  .base(process.env.REACT_APP_AIRTABLE_BASE)
  .table(process.env.REACT_APP_AIRTABLE_TABLE);

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters;

  if (id) {
    try {
      let apartment = await airtable.retrieve(id);
      if (apartment.error) {
        return {
          statusCode: 404,
          body: `No product with id ${id}`,
        };
      }
      apartment = {
        id: apartment.id,
        ...apartment.fields,
      };
      return {
        statusCode: 200,
        body: JSON.stringify(apartment),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Server error',
      };
    }
  }

  return {
    statusCode: 400,
    body: 'Provide single apartment ID',
  };
};
