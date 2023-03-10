$(document).ready(function() {

        
    function on() {
        document.getElementById("overlay").style.display = "block";
      }
      
      function off() {
        document.getElementById("overlay").style.display = "none";
      }


      
    // functions go here

    // when click on 'a' that has class 'to-modal-image', then select next element (div) with the class 'modal-image'
    // and remove the class 'is-hidden'

    // second function that add the class 'is-hidden' to the image when you click on it



    // ADDED ON 2023-03-06 BY FRANÇOIS GM --->

    // FUNCTION TO OPEN THE MODAL IMAGE

    // first, I declare a constant (type of variable that stays 'constant') which is a collection of all my links to images
    const imageModalLinks = document.querySelectorAll('.to-modal-image')

    // then, I create a loop function for each of these links
    imageModalLinks.forEach(function(imageModalLink) {

        // then, inside this loop function (for each link, do this), I declare a 'click' event
        imageModalLink.addEventListener('click', function(e) {

            // each time I click on a image link, I catch, as variables, the 'data link id' of the link
            var imageModalLinkId = this.getAttribute('data-link-id')
            // then I use this variable to target the element that contains the full scale image
            var imageModalTarget = document.querySelectorAll('[data-target-id="'+imageModalLinkId+'"]');
            // then I pick the first item (well actually normally there's only one of them) by putting [0] after
            // then I remove the css class 'is-hidden' which makes the element appears
            imageModalTarget[0].classList.remove('is-hidden');
            // finally I declare 'e.preventDefault()' to 'cancel' the default behaviour of the link, which is to open the image in a new window
            e.preventDefault();

        })

    })

    // FUNCTION TO CLOSE THE MODAL IMAGE

    // first, I declare a constant (type of variable that stays 'constant') which is a collection of all my image modals
    const imageModals = document.querySelectorAll('.modal-image')

    // then, I create a loop function for each of these modals
    imageModals.forEach(function(imageModal) {

        // then, inside this loop function (for each modal, do this), I declare a 'click' event
        imageModal.addEventListener('click', function(e) {

            // then I add the css class 'is-hidden' which makes the element dissapear
            this.classList.add('is-hidden');

        })

    })



    let dir = 0
    window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    dir = this.oldScroll > this.scrollY ? 1 : -1;
    this.oldScroll = this.scrollY;
    }

    const divs = document.querySelectorAll('article');
    let callback = (entries, observer) => {
    entries.forEach(entry => {
        const targetDiv = document.querySelector(`[href="#${entry.target.id}"]`);
        if (entry.isIntersecting) targetDiv.classList.add('active')
        const active = [...document.querySelectorAll('.active')];
        if (active.length > 1) active[dir === 1 ? 1 : 0].classList.remove("active")
    });
    };

    const observer = new IntersectionObserver(callback);
    divs.forEach(div => observer.observe(div)); 


    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    // var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("sidenav").style.top = "0";
    //   } else {
    //     document.getElementById("sidenav").style.top = "-50px";
    //   }
    //   prevScrollpos = currentScrollPos;
    // }

});