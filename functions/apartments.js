require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
})
  .base(process.env.REACT_APP_AIRTABLE_BASE)
  .table(process.env.REACT_APP_AIRTABLE_TABLE);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({
      maxRecords: 200,
    });
    console.log(response);
    const apartments = response.records.map((apartment) => {
      const { id, fields } = apartment;
      const {
        price,
        distance,
        name,
        description,
        rooms,
        location,
        image,
        adults,
        children,
      } = fields;
      return {
        id,
        price,
        distance,
        name,
        description,
        rooms,
        location,
        image,
        adults,
        children,
      };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(apartments),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: 'There was an error',
    };
  }
};
