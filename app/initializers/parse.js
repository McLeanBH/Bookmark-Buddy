import Ember from 'ember';


export function initialize(/* container, application */) {
  Ember.$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "k217Jo0x96bF1yzLFkW9kSsOGLQOGiAZgvjcHTlL",
      "X-Parse-REST-API-Key": "GkMO890v6Jw1iuDbeopGEsBj3FUMcnba5IKqtAcq"
    }
  });
}

export default {
  name: 'parse',
  initialize: initialize
};
