const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json' // 輸出的文件名稱
const endpointsFiles = ['./app.js']

swaggerAutogen(outputFile, endpointsFiles)
