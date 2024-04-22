// Put your application javascript here
function filterClickLabel() {
  jQuery('body').find('.label-filter').on('click', function(e){
    e.preventDefault();
    let data_id = jQuery(this).data('id');
    jQuery('input#'+data_id).trigger('click'); 
    console.log('clicked!');
  });
}

function matchHeight(el){
  //Grab divs with the class name 'match-height'
  var getDivs = document.getElementsByClassName(el);

  //Find out how my divs there are with the class 'match-height' 
  var arrayLength = getDivs.length;
  var heights = [];

  //Create a loop that iterates through the getDivs variable and pushes the heights of the divs into an empty array
  for (var i = 0; i < arrayLength; i++) {
      heights.push(getDivs[i].offsetHeight);
  }

  //Find the largest of the divs
  function getHighest() {
    return Math.max(...heights);
  }

  //Set a variable equal to the tallest div
  var tallest = getHighest();

  //Iterate through getDivs and set all their height style equal to the tallest variable
  for (var i = 0; i < getDivs.length; i++) {
      getDivs[i].style.height = tallest + "px";
  }

}

let Clobber = {
  updateQuantity(line, qty) {
    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: qty, line: line })
    }).then(response => response.json())
    .then(data => {
      //fire js event on window
      window.dispatchEvent(new Event('cart-updated'))
    })
    .catch((error) => {
      console.log('Error:', error)
    })
  }
}


window.Clobber = Clobber;

filterClickLabel();
matchHeight("each-cat");
matchHeight('product-details');
