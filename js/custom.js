/** 
  * Template Name: Daily Shop
  * Version: 1.0  
  * Template Scripts
  * Author: MarkUps
  * Author URI: http://www.markups.io/

  Custom JS
  

  1. CARTBOX
  2. TOOLTIP
  3. PRODUCT VIEW SLIDER 
  4. POPULAR PRODUCT SLIDER (SLICK SLIDER) 
  5. FEATURED PRODUCT SLIDER (SLICK SLIDER)
  6. LATEST PRODUCT SLIDER (SLICK SLIDER) 
  7. TESTIMONIAL SLIDER (SLICK SLIDER)
  8. CLIENT BRAND SLIDER (SLICK SLIDER)
  9. PRICE SLIDER  (noUiSlider SLIDER)
  10. SCROLL TOP BUTTON
  11. PRELOADER
  12. GRID AND LIST LAYOUT CHANGER 
  13. RELATED ITEM SLIDER (SLICK SLIDER)

  
**/

jQuery(function($){


  /* ----------------------------------------------------------- */
  /*  1. CARTBOX 
  /* ----------------------------------------------------------- */
    
     jQuery(".aa-cartbox").hover(function(){
      jQuery(this).find(".aa-cartbox-summary").fadeIn(500);
    }
      ,function(){
          jQuery(this).find(".aa-cartbox-summary").fadeOut(500);
      }
     );   
  
  /* ----------------------------------------------------------- */
  /*  2. TOOLTIP
  /* ----------------------------------------------------------- */    
    jQuery('[data-toggle="tooltip"]').tooltip();
    jQuery('[data-toggle2="tooltip"]').tooltip();

  /* ----------------------------------------------------------- */
  /*  3. PRODUCT VIEW SLIDER 
  /* ----------------------------------------------------------- */    

    jQuery('#demo-1 .simpleLens-thumbnails-container img').simpleGallery({
        loading_image: 'demo/images/loading.gif'
    });

    jQuery('#demo-1 .simpleLens-big-image').simpleLens({
        loading_image: 'demo/images/loading.gif'
    });

  /* ----------------------------------------------------------- */
  /*  4. POPULAR PRODUCT SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */      

    jQuery('.aa-popular-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }); 

  
  /* ----------------------------------------------------------- */
  /*  5. FEATURED PRODUCT SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */      

    jQuery('.aa-featured-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    
  /* ----------------------------------------------------------- */
  /*  6. LATEST PRODUCT SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */      
    jQuery('.aa-latest-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

  /* ----------------------------------------------------------- */
  /*  7. TESTIMONIAL SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */     
    
    jQuery('.aa-testimonial-slider').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

  /* ----------------------------------------------------------- */
  /*  8. CLIENT BRAND SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */  

    jQuery('.aa-client-brand-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

  /* ----------------------------------------------------------- */
  /*  9. PRICE SLIDER  (noUiSlider SLIDER)
  /* ----------------------------------------------------------- */        

    jQuery(function(){
      if($('body').is('.productPage')){
       var skipSlider = document.getElementById('skipstep');
        noUiSlider.create(skipSlider, {
            range: {
                'min': 0,
                '10%': 10,
                '20%': 20,
                '30%': 30,
                '40%': 40,
                '50%': 50,
                '60%': 60,
                '70%': 70,
                '80%': 80,
                '90%': 90,
                'max': 100
            },
            snap: true,
            connect: true,
            start: [20, 70]
        });
        // for value print
        var skipValues = [
          document.getElementById('skip-value-lower'),
          document.getElementById('skip-value-upper')
        ];

        skipSlider.noUiSlider.on('update', function( values, handle ) {
          skipValues[handle].innerHTML = values[handle];
        });
      }
    });


    
  /* ----------------------------------------------------------- */
  /*  10. SCROLL TOP BUTTON
  /* ----------------------------------------------------------- */

  //Check to see if the window is top if not then display button

    jQuery(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });
     
    //Click event to scroll to top

    jQuery('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
  
  /* ----------------------------------------------------------- */
  /*  11. PRELOADER
  /* ----------------------------------------------------------- */

    jQuery(window).load(function() { // makes sure the whole site is loaded      
      jQuery('#wpf-loader-two').delay(200).fadeOut('slow'); // will fade out      
    })

  /* ----------------------------------------------------------- */
  /*  12. GRID AND LIST LAYOUT CHANGER 
  /* ----------------------------------------------------------- */

  jQuery("#list-catg").click(function(e){
    e.preventDefault(e);
    jQuery(".aa-product-catg").addClass("list");
  });
  jQuery("#grid-catg").click(function(e){
    e.preventDefault(e);
    jQuery(".aa-product-catg").removeClass("list");
  });


  /* ----------------------------------------------------------- */
  /*  13. RELATED ITEM SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */      

    jQuery('.aa-related-item-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }); 
    
});

  // bucket carouseel
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
    var instance = M.Carousel.getInstance(elem);
instance.numVisible(8);
  });

  // Or with jQuery



// A Carousel Object will have a .carousel html element associated with it with the car parameter
// At the end of this document, all .carousel elements are assigned to a Carousel Object
function Carousel(car){
	// this will be our Carousel object, which will be referred to as carousel
	var carousel = this;

	// PROPERTIES

	// carousel.element is a jquery object of the car element passed into the Carousel constructor
	carousel.element = $(car);
	carousel.currentSlide = 0;
	carousel.previousSlide = 0;
	carousel.numberOfSlides = 0;
	// timer will be the timer object
	carousel.timer = false;
	// timerLength is the time between slideshow switches
	carousel.timerLength = 5000;
	// timerPause is the time between clicking a button and the slideshow starting again
	carousel.timerPause = 10000;
	// timing will stop button clicks if it is true
	carousel.timing = false;



	// METHODS

	// .changePosition() is a method for altering the carousel's data
	// It gets passed true, false, or a number
	// It makes sure that the slides always stay within available parameters
	// It calls the .showPosition() method at the end
	carousel.changePosition = function(direction){
		// Don't do anything if you're already moving
		if(carousel.timing) return;

		carousel.previousSlide = carousel.currentSlide;
		// If moving to the left, decrement currentSlide
		if(direction === false) {
			carousel.currentSlide--;
		} else
		// If moving to the right, increment currentSlide
		if(direction === true) {
			carousel.currentSlide++;
		} else
		// If direction is a number
		{
			if(carousel.currentSlide<direction) {
				carousel.currentSlide = direction;
				// return will stop the current function from doing anything else, and switch straight to .showPosition()
				return carousel.showPosition(true,true);
			} else if (carousel.currentSlide>direction) {
				carousel.currentSlide = direction;
				return carousel.showPosition(false,true);
			}
		}

		if(carousel.currentSlide == carousel.previousSlide) return;

		if(carousel.currentSlide < 0){
			carousel.currentSlide = carousel.numberOfSlides-1;
		} else if(carousel.currentSlide >= carousel.numberOfSlides){
			carousel.currentSlide = 0;
		}

		carousel.showPosition(direction,false);
	};

	// .showPosition() will
	carousel.showPosition = function(direction,placed){
		// Clear the changeTimer if it's currently running
		clearTimeout(carousel.changeTimer);
		carousel.changeTimer = false;

		var leftposition, rightposition;
		if(carousel.currentSlide == 0){
			leftposition = carousel.numberOfSlides-1;
		} else leftposition = carousel.currentSlide-1;

		if(carousel.currentSlide == carousel.numberOfSlides-1){
			rightposition = 0;
		} else rightposition = carousel.currentSlide+1;


		// Select all the slides, remove any odd classes from them, and then set them back to carousel-slide
		var cs = carousel.element.find(".carousel-slide")
			.removeClass("atLeft atRight atCenter moving");

		cs.eq(carousel.previousSlide).addClass("atCenter")
		if(direction===true){
			cs.eq(carousel.currentSlide).addClass("atRight");
			cs.eq(rightposition).addClass("atRight");
		} else if(direction===false){
			cs.eq(carousel.currentSlide).addClass("atLeft");
			cs.eq(leftposition).addClass("atLeft");
		}

		// Set timing to true so that no button clicks will work while a slide is happening
		carousel.timing = true;

		// Wait some milliseconds for the computer to render the slides into their starting positions
		// Then move the correct slides to their new positions
		carousel.changeTimer = setTimeout(function(){
			carousel.element.find(".carousel-paginate")
				.eq(carousel.currentSlide).addClass("active")
				.siblings().removeClass("active");
			cs.eq(carousel.currentSlide)
				.removeClass("atLeft atRight").addClass("moving atCenter");
			cs.eq(carousel.previousSlide)
				.removeClass("atLeft atRight atCenter").addClass("moving at"+
					(direction===true ? "Left" : "Right"));

			// Wait a second and let the button be clicked again
			setTimeout(function(){carousel.timing = false;},400);
		// The number here can be adjusted if you have too many glitches
		},50);
	};


	// Slideshow Methods
	// .startTimer() starts a repeating interval timer which calls .tick() every timerLength
	carousel.startTimer = function(){
		// No slideshow if the timerLength is 0
		if(carousel.timerLength === 0) return;
		carousel.timer = setInterval(carousel.tick, carousel.timerLength);
	};
	// .stopTimer() clears the interval and resets the timer to false
	carousel.stopTimer = function(){
		clearInterval(carousel.timer);
		carousel.timer = false;
	};
	// .pauseTimer() calls the .stopTimer() and then starts a single use timer to call .startTimer() again
	carousel.pauseTimer = function(){
		carousel.stopTimer();
		carousel.timer = setTimeout(carousel.startTimer, carousel.timerPause);
	};
	// .tick() will call the .changePosition() function and move to the right
	carousel.tick = function(){
		carousel.changePosition(true);
	};



	// This function will create a series of buttons to a new div and append that
	// div to the controls div
	carousel.makeButtons = function(){
		// Passing a string of an html tag into jquery returns a new element
		var button,buttondiv = $("<div class='carousel-pagination'>");
		// New elements can be appended, prepended, and more to other elements
		for(var i=0; i<carousel.numberOfSlides; i++) {
			// Make a new button element
			btn = $("<button class='carousel-paginate'>").html("&#x25cf;");
			// If it's the first button, add an active class to it.
			if(i==0) btn.addClass("active");
			// Add the button to the buttondiv
			buttondiv.append(btn);
		}
		// Add the buttondiv to the carousel controls
		carousel.element.append(
			$("<div class='carousel-controls'>").html(
				"<div class='carousel-move-left'>&lt;</div>"+
				"<div class='carousel-move-right'>&gt;</div>"
				).append(buttondiv)
			);
	};



	carousel.init = function(){

		// If a timer attribute has been given, set the timer values
		if(carousel.element.data("timer")=="none") {
			carousel.timerLength = 0;
		} else if(carousel.element.data("timer")!=undefined) {
			carousel.timerLength = +carousel.element.data("timer")*1000;
		}
		carousel.timerPause = carousel.timerLength*2;

		// Find the number of slides from the html carousel-deck
		carousel.numberOfSlides = carousel.element.find(".carousel-slide").length;
		// Show the first slide
		carousel.element.find(".carousel-slide").eq(0).addClass("atCenter");

		// Create all the buttons
		carousel.makeButtons();
		// Start the slideshow
		carousel.startTimer();
	};





	// EVENT HANDLERS
	carousel.element.on("click",".carousel-move-left",function(){
		carousel.changePosition(false);
		carousel.pauseTimer();
	});
	carousel.element.on("click",".carousel-move-right",function(){
		carousel.changePosition(true);
		carousel.pauseTimer();
	});
	carousel.element.on("click",".carousel-paginate",function(){
		carousel.changePosition($(this).index());
		carousel.pauseTimer();
	});



	// Call a function called .init() to start anything that needs to be started
	carousel.init();
}

$(function(){ // document ready
	// Find all the .carousel elements and assign them to a Carousel Object
	$(".carousel").each(function(){
		new Carousel(this);
	});
});



 //Carousel Main



     const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

 //Carousel Main ended




const cardsContainer = document.querySelector(".card-carousel");
const cardsController = document.querySelector(".card-carousel + .card-controller")

class DraggingEvent {
  constructor(target = undefined) {
    this.target = target;
  }

  event(callback) {
    let handler;

    this.target.addEventListener("mousedown", e => {
      e.preventDefault()

      handler = callback(e)

      window.addEventListener("mousemove", handler)

      document.addEventListener("mouseleave", clearDraggingEvent)

      window.addEventListener("mouseup", clearDraggingEvent)

      function clearDraggingEvent() {
        window.removeEventListener("mousemove", handler)
        window.removeEventListener("mouseup", clearDraggingEvent)

        document.removeEventListener("mouseleave", clearDraggingEvent)

        handler(null)
      }
    })

    this.target.addEventListener("touchstart", e => {
      handler = callback(e)

      window.addEventListener("touchmove", handler)

      window.addEventListener("touchend", clearDraggingEvent)

      document.body.addEventListener("mouseleave", clearDraggingEvent)

      function clearDraggingEvent() {
        window.removeEventListener("touchmove", handler)
        window.removeEventListener("touchend", clearDraggingEvent)

        handler(null)
      }
    })
  }

  // Get the distance that the user has dragged
  getDistance(callback) {
    function distanceInit(e1) {
      let startingX, startingY;

      if ("touches" in e1) {
        startingX = e1.touches[0].clientX
        startingY = e1.touches[0].clientY
      } else {
        startingX = e1.clientX
        startingY = e1.clientY
      }


      return function(e2) {
        if (e2 === null) {
          return callback(null)
        } else {

          if ("touches" in e2) {
            return callback({
              x: e2.touches[0].clientX - startingX,
              y: e2.touches[0].clientY - startingY
            })
          } else {
            return callback({
              x: e2.clientX - startingX,
              y: e2.clientY - startingY
            })
          }
        }
      }
    }

    this.event(distanceInit)
  }
}


class CardCarousel extends DraggingEvent {
  constructor(container, controller = undefined) {
    super(container)

    // DOM elements
    this.container = container
    this.controllerElement = controller
    this.cards = container.querySelectorAll(".card")

    // Carousel data
    this.centerIndex = (this.cards.length - 1) / 2;
    this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
    this.xScale = {};

    // Resizing
    window.addEventListener("resize", this.updateCardWidth.bind(this))

    if (this.controllerElement) {
      this.controllerElement.addEventListener("keydown", this.controller.bind(this))
    }


    // Initializers
    this.build()

    // Bind dragging event
    super.getDistance(this.moveCards.bind(this))
  }

  updateCardWidth() {
    this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100

    this.build()
  }

  build(fix = 0) {
    for (let i = 0; i < this.cards.length; i++) {
      const x = i - this.centerIndex;
      const scale = this.calcScale(x)
      const scale2 = this.calcScale2(x)
      const zIndex = -(Math.abs(i - this.centerIndex))

      const leftPos = this.calcPos(x, scale2)


      this.xScale[x] = this.cards[i]

      this.updateCards(this.cards[i], {
        x: x,
        scale: scale,
        leftPos: leftPos,
        zIndex: zIndex
      })
    }
  }


  controller(e) {
    const temp = {...this.xScale};

      if (e.keyCode === 39) {
        // Left arrow
        for (let x in this.xScale) {
          const newX = (parseInt(x) - 1 < -this.centerIndex) ? this.centerIndex : parseInt(x) - 1;

          temp[newX] = this.xScale[x]
        }
      }

      if (e.keyCode == 37) {
        // Right arrow
        for (let x in this.xScale) {
          const newX = (parseInt(x) + 1 > this.centerIndex) ? -this.centerIndex : parseInt(x) + 1;

          temp[newX] = this.xScale[x]
        }
      }

      this.xScale = temp;

      for (let x in temp) {
        const scale = this.calcScale(x),
              scale2 = this.calcScale2(x),
              leftPos = this.calcPos(x, scale2),
              zIndex = -Math.abs(x)

        this.updateCards(this.xScale[x], {
          x: x,
          scale: scale,
          leftPos: leftPos,
          zIndex: zIndex
        })
      }
  }

  calcPos(x, scale) {
    let formula;

    if (x < 0) {
      formula = (scale * 100 - this.cardWidth) / 2

      return formula

    } else if (x > 0) {
      formula = 100 - (scale * 100 + this.cardWidth) / 2

      return formula
    } else {
      formula = 100 - (scale * 100 + this.cardWidth) / 2

      return formula
    }
  }

  updateCards(card, data) {
    if (data.x || data.x == 0) {
      card.setAttribute("data-x", data.x)
    }

    if (data.scale || data.scale == 0) {
      card.style.transform = `scale(${data.scale})`

      if (data.scale == 0) {
        card.style.opacity = data.scale
      } else {
        card.style.opacity = 1;
      }
    }

    if (data.leftPos) {
      card.style.left = `${data.leftPos}%`
    }

    if (data.zIndex || data.zIndex == 0) {
      if (data.zIndex == 0) {
        card.classList.add("highlight")
      } else {
        card.classList.remove("highlight")
      }

      card.style.zIndex = data.zIndex
    }
  }

  calcScale2(x) {
    let formula;

    if (x <= 0) {
      formula = 1 - -1 / 5 * x

      return formula
    } else if (x > 0) {
      formula = 1 - 1 / 5 * x

      return formula
    }
  }

  calcScale(x) {
    const formula = 1 - 1 / 5 * Math.pow(x, 2)

    if (formula <= 0) {
      return 0
    } else {
      return formula
    }
  }

  checkOrdering(card, x, xDist) {
    const original = parseInt(card.dataset.x)
    const rounded = Math.round(xDist)
    let newX = x

    if (x !== x + rounded) {
      if (x + rounded > original) {
        if (x + rounded > this.centerIndex) {

          newX = ((x + rounded - 1) - this.centerIndex) - rounded + -this.centerIndex
        }
      } else if (x + rounded < original) {
        if (x + rounded < -this.centerIndex) {

          newX = ((x + rounded + 1) + this.centerIndex) - rounded + this.centerIndex
        }
      }

      this.xScale[newX + rounded] = card;
    }

    const temp = -Math.abs(newX + rounded)

    this.updateCards(card, {zIndex: temp})

    return newX;
  }

  moveCards(data) {
    let xDist;

    if (data != null) {
      this.container.classList.remove("smooth-return")
      xDist = data.x / 250;
    } else {


      this.container.classList.add("smooth-return")
      xDist = 0;

      for (let x in this.xScale) {
        this.updateCards(this.xScale[x], {
          x: x,
          zIndex: Math.abs(Math.abs(x) - this.centerIndex)
        })
      }
    }

    for (let i = 0; i < this.cards.length; i++) {
      const x = this.checkOrdering(this.cards[i], parseInt(this.cards[i].dataset.x), xDist),
            scale = this.calcScale(x + xDist),
            scale2 = this.calcScale2(x + xDist),
            leftPos = this.calcPos(x + xDist, scale2)


      this.updateCards(this.cards[i], {
        scale: scale,
        leftPos: leftPos
      })
    }
  }
}

const carousel = new CardCarousel(cardsContainer)