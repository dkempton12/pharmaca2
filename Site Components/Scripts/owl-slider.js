// add this static block to any page that needs a single rotating slider
    // examples are custom category pages or brand pages
// to initialize an owl slider, give the parent row div an id of 'owl-slide'
        
        require(['jquery', 'underscore', 'owl_carousel', 'owl_config' ],
            function ($, _) {
                $(document).ready(function() {
                    if ($('.owl-slide')) {
                        $('.owl-slide').owlCarousel({
                            loop:true,
                            autoplay: 3000,
                            autoplayHoverPause: true,
                            margin:10,
                            nav:true,
                            items: 1,
                            addClassActive: true, // visible items have class active
                            onInitialized : function() { 
                        
                                $('.owl-slide .owl-item').attr('aria-selected','false');
                                $('.owl-slide .owl-item.active').attr('aria-selected','true'); // let screen readers know an item is active

                                // apply meta info to next and previous buttons and make them focusable
                                $('.owl-slide .owl-prev').attr('role','button').attr('title','Previous');
                                $('.owl-slide .owl-next').attr('role','button').attr('title','Next');
                                $('.owl-slide, .owl-prev, .owl-next').attr('tabindex','0');

                                // add instructions to keyboard users that are only visible when the carousel is focused
                                $('.owl-slide .owl-wrapper-outer').append('');

                                // listen for keyboard input
                                $(document).on('keydown', function(e){

                                    var $focusedElement = $(document.activeElement),
                                        singleOwl = $(".owl-slide").data('owlCarousel'),
                                        type = e.which == 39 ? 'next': null,
                                        type = e.which == 37 ? 'prev': type,
                                        type = e.which == 13 ? 'enter':type;
                                        
                                    // if the carousel is focused, use left and right arrow keys to navigate
                                    if($focusedElement.hasClass('owl-slide')){
                                        if (type == 'next') {
                                        singleOwl.next();
                                    } else if (type == 'prev') {
                                        singleOwl.prev();
                                        
                                    }

                                    // if the prev and next buttons are focused, catch "Enter" and navigate in the right direction
                                    } else if (type == 'enter') {
                                    if ($focusedElement.hasClass('owl-next')) {
                                    singleOwl.next();
                                    } else if ($focusedElement.hasClass('owl-prev')) {
                                    singleOwl.prev();
                                    }
                                }
                            });
                            },
                            // let screen readers know which slide is active after navigation or reinit
                            afterAction : function() {
                            $('.owl-slide .owl-item').attr('aria-selected','false');
                            $('.owl-slide .owl-item.active').attr('aria-selected','true');
                            }
                        })
                    }
                });
            }
        );