// Implements InsertDynamicAppletControl() function. This is a generic function used to generate
// applet tags. It is used by higher level api functions.
			
function InsertDynamicAppletControl()
{  
  // Initialize variables
  var currArg = '';
  var closer = '>';
  var srcFound = false;
  var embedStr = '<applet';
  var paramStr = '';
  
  // Spin through all the argument pairs, assigning attributes and values to the object,
  // param, and embed tags as appropriate.
  for (var i=0; i < arguments.length; i=i+2)
  {
   currArg = arguments[i].toLowerCase();    

    if (currArg == "movie")
    {
        paramStr += '<param name="' + arguments[i] + '" value="' + arguments[i+1] + '"' + closer + '\n';
        srcFound = true;
    }
    else if (   currArg == "width" 
              || currArg == "height" 
              || currArg == "code" 
              || currArg == "archive" 
              || currArg == "align" 
              || currArg == "vspace" 
              || currArg == "hspace" 
              || currArg == "class" 
              || currArg == "title" 
              || currArg == "accesskey" 
              || currArg == "tabindex")
    {
      embedStr += ' ' + arguments[i] + '="' + arguments[i+1] + '"';
    }
    // This is an attribute we don't know about. Assume that we should add it to the 
    // param and embed strings.
    else
    {
      paramStr += '<param name="' + arguments[i] + '" value="' + arguments[i+1] + '"' + closer + '\n'; 
    }
  }
  
  // Tell the user that a src is required, if one was not passed in.
  if (!srcFound)
  {
    alert("The requires that a movie be passed in as one of the arguments.");
    return;
  }

  // Close off the object and embed strings
  embedStr += ' MAYSCRIPT>' + paramStr + '</applet>\n'; 
  
  document.write(embedStr);
}
