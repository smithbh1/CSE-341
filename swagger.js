const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Contacts API to perform CRUD operations in Mongodb database'
  },
  host: 'fathomless-peak-71807.herokuapp.com',
  basePath: "/",
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);

// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//        await import('index');
//      });