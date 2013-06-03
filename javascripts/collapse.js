document.onreadystatechange = function() {
	var stepTittles = document.getElementsByClassName('stepTittle');
	for (var i = 0; i < stepTittles.length; i++) {
		var stepTittle = stepTittles[i];
		stepTittle.addEventListener("click",openStep);
	}
	var dropDownButtons = document.getElementsByClassName('download');
	for (var i = 0; i < dropDownButtons.length; i++) {
		var dropDownButton = dropDownButtons[i];
		dropDownButton.addEventListener("click",openDropDownList);
	}
	var dropDownLists = document.getElementsByClassName('dropDownList'); 
	for (var i = 0; i < dropDownLists.length; i++) {
		var dropDownList = dropDownLists[i];
		dropDownList.addEventListener('conmouseou', setTimeout(openDropDownList, 1000));
	}
}

function openStep(){
	var idToOpen = this.id,
		objToOpen = document.getElementsByClassName(idToOpen + ' stepText')[0];
	if(hasClass(objToOpen, "closed")){
		objToOpen.className = objToOpen.className.replace("closed", '');
		objToOpen.className +="open";
	} else {
		objToOpen.className = objToOpen.className.replace("open", '');
		objToOpen.className +="closed";
	}
};

function openDropDownList(){
	var wrapper = this.parentNode.parentNode;
		//objToOpen = document.getElementsByClassName(idToOpen + ' dropDownList')[0];
	if(hasClass(wrapper, "closed")){
		wrapper.className = wrapper.className.replace("closed", '');
		wrapper.className +="open";
	} else {
		wrapper.className = wrapper.className.replace("open", '');
		wrapper.className +="closed";
	}
};

function hasClass(element, classNameToTestFor) {
    var classNames = element.className.split(' ');
    for (var i = 0; i < classNames.length; i++) {
        if (classNames[i].toLowerCase() == classNameToTestFor.toLowerCase()) {
            return true;
        }
    }
    return false;
}