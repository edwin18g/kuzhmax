<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>Default Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content=""> 
    
   
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" type="text/css" />       
    <link href="<?php echo base_url('box/box.css')?>" rel="stylesheet" type="text/css" /> 
    <link href="<?php echo base_url('assets/minimalist-blocks/content.css')?>" rel="stylesheet" type="text/css" /> 

    <script>
        
        if (localStorage.getItem('maincss-bootstrap') != null) {
            document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', localStorage.getItem('maincss-bootstrap'));
        }
        if (localStorage.getItem('sectioncss-bootstrap') != null) {
            document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', localStorage.getItem('sectioncss-bootstrap'));
        }
    </script>

    <link href="<?php echo base_url('assets/scripts/simplelightbox/simplelightbox.css')?>" rel="stylesheet" type="text/css" /> 
    
      
    <link href="<?php echo base_url('contentbuilder/contentbuilder.css')?>" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url('contentbox/contentbox.css')?>" rel="stylesheet" type="text/css" />

</head>
<body>

<div class="is-wrapper">

    
    <div class="is-section is-section-100 is-shadow-1 is-bg-grey">
        <div class="is-boxes">
            <div class="is-box-img is-box is-box-5">
                <div class="is-boxes ">
                    <div class="is-overlay">
                        <div class="is-overlay-bg" style="background-image: url('assets/designs/images/AYIZz231214.jpg'); background-position: 0% 60%; transform: translateY(-13.8583px) scale(1.05);" data-bottom-top="transform:translateY(-120px) scale(1.05);" data-top-bottom="transform:translateY(120px) scale(1.05)"></div>
                    </div>
                </div>
            </div>
            <div class="is-box is-dark-text is-bg-light is-box-7">
                <div class="is-boxes">
                    <div class="is-box-centered">

                        <div class="is-container is-builder container-fluid" style="max-width: 480px;">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1 style="text-align: left;" class="">Give.</h1>
                                    <p style="text-align: left;" class=""><i><span style="color: rgb(136, 136, 136);">"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."<br>Sarah Williams</span></i></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="spacer height-40"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p style="text-align: justify;" class="">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante, sit amet.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript"></script>  
<script src="<?php echo base_url('assets/scripts/simplelightbox/simple-lightbox.min.js')?>" type="text/javascript"></script>


<script src="<?php echo base_url('assets/minimalist-blocks/content.js')?>" type="text/javascript"></script> 
<script src="<?php echo base_url('contentbuilder/contentbuilder.min.js')?>" type="text/javascript"></script>
<script src="<?php echo base_url('contentbox/contentbox.min.js')?>" type="text/javascript"></script>

<script type="text/javascript">

    var timeoutId; 
var siteUrl = 'https://kuzhithuraidiocese.com/';
    jQuery(document).ready(function ($) {

        
        if (localStorage.getItem('mypage-bootstrap') != null) {
            $(".is-wrapper").html(localStorage.getItem('mypage-bootstrap'));
        }

        
        $(".is-wrapper").contentbox({
        
            assetPath: siteUrl+'assets/',
            framework: 'bootstrap', 
            coverImageHandler: 'savecover.php', 
            largerImageHandler: 'saveimage-large.php', 
            moduleConfig: [{
                "moduleSaveImageHandler": "saveimage-module.php" 
            }],
            onRender: function () {
              
                $('a.is-lightbox').simpleLightbox({ closeText: '<i style="font-size:35px" class="icon ion-ios-close-empty"></i>', navText: ['<i class="icon ion-ios-arrow-left"></i>', '<i class="icon ion-ios-arrow-right"></i>'], disableScroll: false });
            },
            onChange: function () {
                
                var timeoutId;
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                    save();                    
                }, 1000);
            },
             designPath: siteUrl+'assets/designs/',
               modulePath: siteUrl+'assets/modules/',
        assetPath: siteUrl+'assets/',
        fontAssetPath: siteUrl+'assets/fonts/',
       
        contentStylePath: siteUrl+'assets/styles/',
        snippetData: siteUrl+'assets/minimalist-blocks/snippetlist.html',
        });

        $('a.is-lightbox').simpleLightbox({ closeText: '<i style="font-size:35px" class="icon ion-ios-close-empty"></i>', navText: ['<i class="icon ion-ios-arrow-left"></i>', '<i class="icon ion-ios-arrow-right"></i>'], disableScroll: false });

    });

    function save() {
        
        $('.is-wrapper').data('contentbox').saveImages('saveimage.php', function(){

          
            var sHTML = $('.is-wrapper').data('contentbox').html();
            localStorage.setItem('mypage-bootstrap', sHTML); 

        
            var sMainCss = $('.is-wrapper').data('contentbox').mainCss(); 
            localStorage.setItem('maincss-bootstrap', sMainCss);
            var sSectionCss = $('.is-wrapper').data('contentbox').sectionCss(); 
            localStorage.setItem('sectioncss-bootstrap', sSectionCss); 

        });
    }

</script>

<script src="<?php echo base_url('box/box.js')?>" type="text/javascript"></script>

</body>
</html>