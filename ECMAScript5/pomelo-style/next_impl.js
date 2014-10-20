/**
 * Do the before filter.
 * Fail over if any filter pass err parameter to the next function.
 *
 * @param msg {Object} clienet request msg
 * @param session {Object} a session object for current request
 * @param cb {Function} cb(err) callback function to invoke next chain node
 */
Service.prototype.beforeFilter = function(msg, session, cb) {
  var index = 0,
    self = this;
  var next = function(err, resp, opts) {
    if (err || index >= self.befores.length) {
      cb(err, resp, opts);
      return;
    }

    var handler = self.befores[index++];
    if (typeof handler === 'function') {
      handler(msg, session, next);
    } else if (typeof handler.before === 'function') {
      handler.before(msg, session, next);
    } else {
      logger.error('meet invalid before filter, handler or handler.before should be function.');
      next(new Error('invalid before filter.'));
    }
  }; //end of next

  next();
};
