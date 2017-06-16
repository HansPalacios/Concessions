// Hover to slide down/up
$(document).ready(function(){
  slideDown('#bunny','#svbox');
 });

$(document).ready(function(){
  slideDown('#taz','#brbox');
 });

$(document).ready(function(){
  slideDown('#lola','#fdbox');
 });

function slideUp( el1, el2 ){
  $(el2).mouseout(function(){
    $(el2).stop().slideUp(500,function(){
      slideDown(el1,el2);
    });
  });
}

function slideDown( el1, el2 ) {
  console.log( 'in slideDown' );
  $(el2).off('mouseout');
  $(el1).mouseover(function(){
    slideUp(el1,el2);
    $(el2).stop().slideDown(500,function(){
    })
  })
}

// getCookie
document.getElementById("corona").onclick = function getCookie(){
  Cookies.set( "name", 'Corona' );
  addItem('Corona');
  updateUI();
};

document.getElementById("budweiser").onclick = function getCookie(){
  Cookies.set( "name", 'Budweiser' );
  addItem('Budweiser');
  updateUI();
};

document.getElementById("heineken").onclick = function getCookie(){
  Cookies.set( "name", 'Heineken' );
  addItem('Heineken');
  updateUI();
};

document.getElementById("brick").onclick = function getCookie(){
  Cookies.set( "name", 'Brick' );
  addItem('Brick');
  updateUI();
};

document.getElementById("football").onclick = function getCookie(){
  Cookies.set( "name", 'Football' );
  addItem('Football');
  updateUI();
};

document.getElementById("baseball").onclick = function getCookie(){
  Cookies.set( "name", 'Baseball' );
  addItem('Baseball');
  updateUI();
};

document.getElementById("hotdog").onclick = function getCookie(){
  Cookies.set( "name", 'Hot Dog' );
  addItem('Hot Dog');
  updateUI();
};

document.getElementById("fries").onclick = function getCookie(){
  Cookies.set( "name", 'Fries' );
  addItem('Fries');
  updateUI();
};

document.getElementById("rotten").onclick = function getCookie(){
  Cookies.set( "name", 'Rotten Tomato' );
  addItem('Rotten Tomato');
  updateUI();
};



// Shopping cart-show cookies 

function addItem( item ){
  let cart = JSON.parse(Cookies.get('cart')||'{}');
  cart[item] = ~~cart[item] + 1;
  Cookies.set("cart",JSON.stringify(cart));
}
function updateUI(){
  document.querySelector("h6").innerHTML = '';
  var cart = JSON.parse(Cookies.get('cart')||'{}');
  for( item in cart ) {
    document.querySelector("h6").innerHTML += `${item}: ${cart[item]}<br><br>`;
  }
}


document.getElementById("order").onclick = function(){
  Cookies.expire( "cart" );
  updateUI();
};


document.getElementById("complaints").addEventListener("click", function(){
    $("#ted").animate({"width": "600px"}, 1000)
  });
document.getElementById("ted").addEventListener("click", function(){
    $("#ted").fadeOut(1000);
    $("#ted").fadeIn(1000);
    $("#ted").animate({right: "600"}, 300);
    $("#ted").animate({top: "300"}, 300);
    $("#ted").animate({right: "20"}, 300);
    $("#ted").animate({top: "50"}, 300);
    $("#ted").animate({top: "300"}, 300);
    $("#ted").animate({right: "600"}, 300);
    $("#ted").animate({top: "50"}, 300);
    $("#ted").animate({right: "20"}, 300);
    $("#ted").animate({"width": "60px"}, 500)
    $("#ted").animate({"width": "1000px"}, 1000)
    $("#ted").animate({"width": "60px"}, 500)
    $("#ted").animate({"width": "1000px"}, 1000)
    $("#ted").animate({"width": "0"}, 1000)
  });






