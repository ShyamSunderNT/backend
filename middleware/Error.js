const asyncMiddleware = (fn) => {
    return (req, res, next) => {
      fn(req, res, next).catch(next);
    };
  };
  
  export default asyncMiddleware;