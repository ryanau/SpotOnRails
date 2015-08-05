//   login: function(email, password) {
//     SmallAppDispatcher.handleViewAction({
//       type: ActionTypes.LOGIN_REQUEST,
//       email: email,
//       password: password
//     });
//     WebAPIUtils.login(email, password);
//   },


// var SmallAppDispatcher = assign(new Dispatcher(), {

//   handleServerAction: function(action) {
//     var payload = {
//       source: PayloadSources.SERVER_ACTION,
//       action: action
//     };
//     this.dispatch(payload);
//   },

//   handleViewAction: function(action) {
//     var payload = {
//       source: PayloadSources.VIEW_ACTION,
//       action: action
//     };
//     this.dispatch(payload);
//   }
// });