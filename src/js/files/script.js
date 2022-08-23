// Подключение функционала "Чертогов Фрилансера"
import { bodyUnlock, isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";





window.addEventListener("DOMContentLoaded", function() {

    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

    const search = document.querySelector(".search");
	const body = document.querySelector("body");
	search.addEventListener('click', function(e) {
		e.stopPropagation();
		search.classList.add("search-open");
	});
	body.addEventListener('click', function(e) {
		search.classList.remove("search-open");
	});


	const addIcon = document.querySelectorAll('.goods-card__add-icon');
	addIcon.forEach(element => element.addEventListener('click', function(e){
		    e.preventDefault();
		    element.classList.toggle('red');
	    })
	);

    const closeButtons = document.querySelectorAll('.shopping-list__close'),
          shoppingListItems = document.querySelectorAll('.shopping-list__item'),
          shoppingList = document.querySelector('.shopping-list__items');  

    shoppingList.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('shopping-list__close')) {
            closeButtons.forEach((item, i) => {
                if (e.target == item) {
                    shoppingListItems[i].remove();
                }
            })
        }
    })

});
