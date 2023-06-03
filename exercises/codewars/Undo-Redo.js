function undoRedo(object) {
  const pastActions = [];
  const forwardActions = [];
  return {
    set: function(key, value) {
      if (object.hasOwnProperty(key)) {
        pastActions.push(['edit', key, object[key], value]);
      } else {
        pastActions.push(['set', key, value]);
      }
      object[key] = value;
      forwardActions.length = 0;
    },
    get: function(key) {
      return object[key];
    },
    del: function(key) {
      if (object.hasOwnProperty(key)) {
        pastActions.push(['del', key, object[key]]);
        delete object[key];
        forwardActions.length = 0;
      }
    },
    undo: function() {
      if (pastActions.length === 0) {
        throw new Error('Nothing to undo');
      }
      const action = pastActions.pop();
      switch (action[0]) {
        case 'set':
          delete object[action[1]];
          break;
        case 'edit':
        case 'del':
          object[action[1]] = action[2];
          break;
      }
      forwardActions.length = 0;
    },
    redo: function() {
      if (forwardActions.length === 0) {
        throw new Error('Nothing to redo');
      }
      const action = forwardActions.pop();
      switch (action[0]) {
        case 'set':
          object[action[1]] = action[2];
          break;
        case 'edit':
          object[action[1]] = action[3];
          break;
        case 'del':
          delete object[action[1]];
          break;
      }
      pastActions.push(action);
    }
  };
}
