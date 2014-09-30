var salesLeft = $('.sales_left');
var detailsLeft = $('.details_left');


var buttonClickHandler1 = function () {
    var isActive = detailsLeft.attr('data-state');
    
    if (isActive == 'active') {
        detailsLeft.attr('data-state', 'inactive');
    }
    else  {
        detailsLeft.attr('data-state', 'active');
    }
}

salesLeft.on('click', buttonClickHandler1);

var salesRight = $('.sales_right');
var detailsRight = $('.details_right');


var buttonClickHandler2 = function () {
    var isActive = detailsRight.attr('data-state');
    
    if (isActive == 'active') {
        detailsRight.attr('data-state', 'inactive');
    }
    else  {
        detailsRight.attr('data-state', 'active');
    }
}

salesRight.on('click', buttonClickHandler2);