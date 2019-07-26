.directive('spellCheck', function() {
    //Директива проверки орфографии  
    return {
      require: 'ngModel',
      link: function(scope, element, attributes, ngModelCtrl) {
        var div = document.createElement('div');
        var placeCaretAtEnd = createCaretPlacer(false);
        var caretPos = 0;           
                
        function spellCheck() {          
          var url = 'http://speller.yandex.net/services/spellservice.json/checkText?text=' + div.textContent + '&options=6';
          return fetch(url).then(response => {            
            return response.json()
          }).then(data => {                      
            var str = '';                                  
            if (data.length) {
              var array = [];              
              for (key in data) {                
                array.push(data[key].word);
              }              
              var k = array.length;
              while(k--){
                var re = new RegExp('(?:\\s|^)' + array[k] + '(?=\\s|$)','g');
                //Создаем регулярку на каждый элемент из массива со строками для поиска
                //Она ищет установленную строку, если перед ней *Пробел или Начало строки*
                //и после нее *Пробел, либо Конец строки*
                if (str.length) {                  
                  str = str.replace(re,' <span style="background: url(\'../images/wavyline.gif\') repeat-x 100% 100%; padding-bottom: 2px; text-decoration: none; white-space: nowrap">' + array[k] + '</span>');
                } else {                  
                  str = div.textContent.replace(re,' <span style="background: url(\'../images/wavyline.gif\') repeat-x 100% 100%; padding-bottom: 2px; text-decoration: none; white-space: nowrap">' + array[k] + '</span>');
                //Находим и заменяем их на них же, обрамленными в теги. Для остроты, можно
                //тег вынести в переменную в аргумент функции
                }
              }

              div.innerHTML = str;                    
            } else {                        
              div.innerHTML = div.textContent;              
            }

            element.value = div.textContent;          
            scope.$apply(function() {
              ngModelCtrl.$setViewValue(element.value);
            })                                      
          })        
        }
        
        function createCaretPlacer(atStart) {          
          return function(el) {
            el.focus();
            if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
              var range = document.createRange();              
              range.selectNodeContents(el);
              range.collapse(atStart);
              var sel = window.getSelection();
              sel.removeAllRanges();
              sel.addRange(range);
            } else if (typeof document.body.createTextRange != "undefined") {
              var textRange = document.body.createTextRange();
              textRange.moveToElementText(el);
              textRange.collapse(atStart);
              textRange.select();
            }
          };
        }
      
        function getCaretCharacterOffsetWithin(element) {
          var caretOffset = 0;
          if (typeof window.getSelection != "undefined") {
              var range = window.getSelection().getRangeAt(0);
              var preCaretRange = range.cloneRange();
              preCaretRange.selectNodeContents(element);
              preCaretRange.setEnd(range.endContainer, range.endOffset);
              caretOffset = preCaretRange.toString().length;
          } else if (typeof document.selection != "undefined" && document.selection.type != "Control") {
              var textRange = document.selection.createRange();
              var preCaretTextRange = document.body.createTextRange();
              preCaretTextRange.moveToElementText(element);
              preCaretTextRange.setEndPoint("EndToEnd", textRange);
              caretOffset = preCaretTextRange.text.length;
          }

          return caretOffset;
        }     
       
        function setCaretToPos(elem, pos) {
          console.log('Отрабатывает ф-ция setCaretToPos');
          console.log('POS', pos);
          console.log(elem.childNodes);             
          var range = document.createRange();
          var sel = window.getSelection();              
          range.setStart(elem, pos);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);          
        }
    
        element.on('focus', function() {                     
          var arr = element.context.value.split(' ');                
          var computedStyle = window.getComputedStyle(element.context, null);
          var cssText = '-webkit-user-modify: read-write !important; ' + computedStyle.cssText;    

          if (cssText.indexOf('webkit-text-fill-color')) {
            cssText = cssText.replace('webkit-text-fill-color', '');
          }

          div.contentEditable = 'true';                       
          div.style = cssText;        
          div.style.cursor = 'text';        
          element.context.parentNode.insertBefore(div, element.context);
          if (arr.length) {
            var str = '';
            for (word in arr) {
              str += arr[word] + ' ';
            }
            str = str.substring(0, str.length - 1);
            div.innerHTML = str;          
          } else div.innerHTML = '';        
                  
          element.context.style.display = 'none';
          element.context.style.visibility = 'hidden';              
        })
       
        div.addEventListener('input', function(e) {          
          if (div.textContent.length) {       
            spellCheck();
            caretPos = getCaretCharacterOffsetWithin(e.currentTarget);
          }                                    
        })
      
        $(div).on('DOMSubtreeModified', function(e) {
          placeCaretAtEnd(e.currentTarget);                                        
        })              
      }     
    }
  });