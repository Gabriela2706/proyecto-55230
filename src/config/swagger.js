import __dirname from "../dirname.js";

const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "ADOPT ME!",
      description: "API of Adop Me!",
    },
  },
  apis: [__dirname + "/docs/*yaml"],
};

export default options;
