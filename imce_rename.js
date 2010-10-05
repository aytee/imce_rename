//implementation of imce.hookOpSubmit
imce.renameOpSubmit = function(dop) {
  if (imce.fopValidate('rename')) {
    imce.fopLoading('rename', true);
    $.ajax($.extend(imce.fopSettings('rename'), {success: imce.renameResponse}));  
  }
};

//custom response. keep track of overwritten files.
imce.renameResponse = function(response) {
  imce.processResponse(response);
  $('#op-close-link').click(); //there is probably a better way to close the dialog than this.
};

//implementation of imce.hookOpValidate
imce.renameOpValidate = function() {
  return true;
};
