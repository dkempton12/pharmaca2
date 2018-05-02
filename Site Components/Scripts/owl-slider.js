// add this static block to any page that needs a single rotating slider
        // examples are custom category pages or brand pages
        
        require(['jquery', 'underscore', 'owl_carousel', 'owl_config' ],
            function ($, _) {
                $(document).ready(function() {
                    if ($('#owl-slide')) {
                        $('#owl-slide').owlCarousel({
                            loop:true,
                            margin:10,
                            nav:true,
                            items: 1
                        })
                    }
                });
            }
        );