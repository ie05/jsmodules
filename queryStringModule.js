    var Module = (function () {
                
        var queryStringParser = {
              url: '',
              params: [],
              removeDomainAndPathFromUrl: function(){
                  this.url = this.url.replace(window.location,'');
                  return this;
              },
              urIDecodeUrl: function(){
                  this.url = decodeURI(this.url);
                  return this;
              },
              removeMalChars: function(){
               // remove mal characters
               // remove '?'
               this.url = this.url.replace(/[<>{}()[\]"|^%\\/?]/g,"");
               return this;
              },
              splitIntoArray: function(splitChar){
                  this.params = this.url.split(splitChar);
                  return this;
              },
              returnArrayOfObjects: function(){
                  var tmpArr = [];
                  this.params.forEach(function(item,index,arr){
                      // store array of key val pairs
                      // in tmp array
                      var tmp = item.split('=');
                      // create an obj to hold key val pairs
                      var obj = {};
                      // add tmp vals to obj
                      obj[tmp[0]] = tmp[1];
                      // add the obj to the arr array
                      tmpArr[index] = obj;
                  });
                  this.params = tmpArr;
                  return this;
              }

        }; // end module
        
        return queryStringParser;

    })(); // end module export

    // fiddle @ https://jsfiddle.net/handshy_proj/mse1mv1t/59/