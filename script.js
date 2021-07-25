(function () {
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        list.innerHTML += '<li>' + item.value + '</li>';
        store();
        item.value = ''
    }, false)
    list.addEventListener('click', function (e) {
        var t = e.target;
        if (t.classList.contains('checked')) {
            t.parentNode.removeChild(t);
        } else {
            t.classList.add('checked');
        }
        store();
    }, false)



    function store() {
        window.localStorage.Todo = list.innerHTML
    }

    function getValues() {
        var storeValues = window.localStorage.Todo
        if (!storeValues) {
            list.innerHTML = '<li>Make a to do list</li>' +
                '<li>Check off first thing on the to do list</li>'
        } else {
            list.innerHTML = storeValues;

        }
    }
    getValues();
})();
(function(){

    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');

    form.addEventListener('submit',function(e){
      e.preventDefault();
      list.innerHTML += '<li>' + item.value + '</li>' ;
      store();
      item.value = "";
    },false)

    list.addEventListener('click',function(e){
      var t = e.target;
      if(t.classList.contains('checked')){
        t.parentNode.removeChild(t);
      } else {
        t.classList.add('checked');
      }
      store();
    },false)

    function store() {
      window.localStorage.myitems = list.innerHTML;
    }

    function getValues() {
      var storedValues = window.localStorage.myitems;
      if(!storedValues) {

      }
      else {
        list.innerHTML = storedValues;
      }
    }
    getValues();
  })();