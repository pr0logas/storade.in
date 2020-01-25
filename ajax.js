
var ajaxSettingss = {
  url: "https://api.adeptio.cc/api/v1/dayRange?startDate=2019-04-27&endDate=2019-05-28",
  type: "GET",
  method: "GET",
  //data: "{}",
  // Expect a `storade` back from server
  dataType: 'json',
  contentType: "application/x-www-form-urlencoded; charset=UTF-8",
  //context: this,
  //timeout: 8000,
  cache: true,
  global: true,
  ifModified: true,
  traditional: true,
  crossDomain: true,
  processData: false,
  /*xhrFields: {
    withCredentials: true,
  },*/
  headers: {
    //'API_KEY': 2653
  },
  accepts: ajaxAccepts(),
  contents: ajaxContents(),
  converters: ajaxConverters(),
  statusCode: ajaxStatusCode(),

}

var ajaxCallback = {
  dataFilter: ajaxDataFilter,
  beforeSend: ajaxBeforeSend,
  complete: ajaxComplete,
  success: ajaxSuccess,
  error: ajaxError
}

$.ajaxSetup($.extend({}, ajaxSettingss, ajaxCallback));

function get(settings) {
  if( settings.progress != undefined )
    settings.xhr =  function(){

      var xhr = $.ajaxSettings.xhr();

      xhr.onprogress = settings.progress

      //xhr.upload.onprogress = settings.progress

      return xhr;
  }

  $.ajax($.extend({settings: settings}, settings, ajaxCallback))
}

function log(text) {
  console.log(text);
}

function ajaxCheck(func) {
  log(func + ': ');
}

// Instructions for how to deserialize a `storade`
function ajaxConverters() {
  ajaxCheck(arguments.callee.name)

  return {
    'text storade': function(result) {
      // Do Stuff
      return newresult;
    },
    "mycustomtype json": function ( result ) {
      // do stuff
      return newresult;
    },
    "csv json": function (result) {
      // parse csv here
      return jsonresult;
    }
  }
}

function ajaxContents() {
  ajaxCheck(arguments.callee.name)

  return {
    mycustomtype: /mycustomtype/,
    csv: /csv/
  }
}

function ajaxAccepts() {
  ajaxCheck(arguments.callee.name)

  return {
    storade: 'application/x-storade'
  }
}

function ajaxStatusCode() {
  ajaxCheck(arguments.callee.name)

  return {
    404: function() {
      //alert( "page not found" );
    },
    405: function() {
      log("405 - statuys");
    },
    200: function() {
      log("200 - Success");
    },
  }
}

function ajaxBeforeSend(xhr, settings) {
  ajaxCheck(arguments.callee.name)

 //log(this.xhr())

  //log(this)

  //log(xhr)

  xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
  //xhr.setRequestHeader("token", "2555fsd5")

  if( this.settings.beforeSend != undefined )
    
    this.settings.beforeSend(xhr, settings)
}

function ajaxDataFilter(data, type) {
  ajaxCheck(arguments.callee.name)

  if( this.settings.dataFilter != undefined )
    
    return this.settings.dataFilter(data, type)

  return data
}

function ajaxError(xhr, status, error) { // if error occured
    ajaxCheck(arguments.callee.name)

    //alert("Error occured.please try again" + xhr.statusText + xhr.responseText);
    
    //$("#placeholder").append(xhr.statusText + xhr.responseText);
    //$("#placeholder").removeClass('loading');

  if( this.settings.error != undefined )
    
    this.settings.error(xhr, status, error)
}

function ajaxSuccess(data, status, xhr) {
    ajaxCheck(arguments.callee.name)

    if (status === "success") {
        // New data received, do what you want
    } else {
        // Old data received, ignore or similar
    }

  if( this.settings.success != undefined )
    
    this.settings.success(data, status, xhr)
}

function ajaxComplete(xhr, status) {
  ajaxCheck(arguments.callee.name)

  if( this.settings.complete != undefined )
    
    this.settings.complete(xhr, status)
}