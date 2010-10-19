//implementation of imce.hookOpSubmit
imce.renameOpSubmit = function(dop) {
  if (imce.fopValidate('rename')) {
    imce.fopLoading('rename', true);
    $.ajax($.extend(imce.fopSettings('rename'), {success: imce.renameResponse}));  
  }
};

//add hook.load
imce.hooks.load.push(function() {
  //set click function for rename tab to toggle crop UI
  imce.ops['rename'].func = imce.renamePrepare;
});

//populate the text box with the current file or dir name
imce.renamePrepare = function(response) {
  var i = 0;
  for (var fid in imce.selected) {
    $('#edit-new-name').val(imce.selected[fid].id);
    i++;
  }
  if (i == 0) {
    $('#edit-new-name').val(imce.conf.dir);
  }
  if (i > 1) {
    imce.setMessage(Drupal.t('Only one file can be renamed at a time.'), 'error');
    setTimeout(function() {$('#op-close-link').click();}, 5);
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
