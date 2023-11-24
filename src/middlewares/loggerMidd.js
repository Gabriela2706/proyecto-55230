import configWisnton from "./../config/loggers/loggerDEV.js";

export default (req, res, next) => {
  req.logger = configWisnton;

  req.logger.WARN(
    //que metodo?    que URL?    que codigo de status?   Fecha en que se ejecuto
    `${req.method} ${req.url} - ${new Date().toLocaleDateString()}`
  );

  req.logger.DANGER(
    `${req.method} ${req.url} - ${new Date().toLocaleDateString()}`
  );
  return next();
};
