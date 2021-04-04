
// MIXITUP

var mixer = mixitup('.work-grid');

// Navigation

function openMenu() {
 document.getElementById('navbar').style.width = "100%";
}

function closeMenu() {
 document.getElementById('navbar').style.width = "0%";
}

// Smooth Scroll

$(function(){
    $('.menu-item a, .next-section a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
        
        return false
    });
    
});

// WOW ANIMATION

   wow = new WOW(
                      {
                      mobile:       false,       // default
                    }
                    )
                    wow.init();

