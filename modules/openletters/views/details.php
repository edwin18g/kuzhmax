
<link rel="stylesheet" href="<?=base_url('assests/css/style.css')?>">
	 <style>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
	<div class="page-name-block" >
	  
		<div class="page-content-block ">
			<span class="Page-title"><?=$circular['n_title']?></span> 
		</div>
	</div>
	<br /><br /><br />
	<div class="container">
		<div class="row">
			<div class="col-md-10 col-md-offset-1">
			
			 <div class="">
      <div class="content">
        

<div class="sample-container">
  <!--<div class="flip-book-container" src="<?=$circular['n_file_path']?>">-->
    <iframe src="http://docs.google.com/gview?url=<?=$circular['n_file_path']?>&embedded=true" style="width:600px; height:500px;" frameborder="0"></iframe>

  </div>
</div>
<script src="<?=base_url('assests/js/html2canvas.min.js')?>"></script>
<script src="<?=base_url('assests/js/three.min.js')?>"></script>
<script src="<?=base_url('assests/js/pdf.min.js')?>"></script>
<script src="<?=base_url('assests/js/3dflipbook.min.js')?>"></script>
      </div>
    
    </div>
    <script src="<?=base_url('assests/js/script.js')?>"></script>
   
   
    <script type="text/javascript">
      // window.dataLayer = window.dataLayer || [];
      // function gtag(){dataLayer.push(arguments);}
      // gtag('js', new Date());

      // gtag('config', 'AW-860004561');

      // (function() {
      //   function setCookie(name, value) {
      //     var date = new Date();
      //     date.setDate(date.getDate() + 100);
      //     document.cookie = name+'='+value+'; path=/; expires=' + date.toUTCString();
      //     return value;
      //   }
      //   function getCookie(name) {
      //     var matches = document.cookie.match(new RegExp(
      //       '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
      //     ));
      //     return matches ? decodeURIComponent(matches[1]) : undefined;
      //   }
      //   var transaction_id = getCookie('conversion-id') || setCookie('conversion-id', 'id-'+Date.now());
      //   $('.conversion').on('click', function() {
      //     gtag('event', 'conversion', {
      //       'send_to': 'AW-860004561/BG6vCO_gqIEBENHBipoD',
      //       'transaction_id': transaction_id
      //     });
      //   });
      // })();
    </script>
			
			</div>
		</div>
	</div>
	
	<script>
	var admin_url   = '<?php echo base_url()?>';
   var url        = '';
   var keyword    = null;
   var slug       = '';
    var currentRequest = null;   
    function router () 
    {
      url       = location.hash.slice(1) || '/';
      
      
       	$('#priest-block').html(' <div class="loader"></div>');
     currentRequest =	$.ajax({
                    url: admin_url+'priest',
                    type: "POST",
                    data: {'keyword':keyword,'slug':url},
                     beforeSend : function()    {           
        if(currentRequest != null) {
            currentRequest.abort();
        }
    },
                    success: function(response){
					
					$('#priest-block').html(response)
                    }
                });
		
       
     
    }
    
    function searchkey(serchkey)
    {
      keyword = serchkey;
      router();
    }
   
    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
  </script>
  
  
  
  