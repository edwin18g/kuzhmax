
	<?php
		$totSegments = $this->uri->total_segments();
		$uriSegments = $this->uri->segment($totSegments);
		if(!is_numeric($uriSegments) || is_numeric($this->uri->segment(2)))
		{
			$offset = 0;
		} else if(is_numeric($uriSegments)){
			$offset = $this->uri->segment($totSegments);
		}
		
		$limit 	= 12;
	 function slugify($text)
{
  // replace non letter or digits by -
  $text = preg_replace('~[^\pL\d]+~u', '-', $text);

  // transliterate
  $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

  // remove unwanted characters
  $text = preg_replace('~[^-\w]+~', '', $text);

  // trim
  $text = trim($text, '-');

  // remove duplicate -
  $text = preg_replace('~-+~', '-', $text);

  // lowercase
  $text = strtolower($text);

  if (empty($text)) {
    return 'n-a';
  }

  return $text;
}
		
	?>
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
			<span class="Page-title">Commissions <i class="fa fa-angle-double-right"></i></span> 
		
		<input type="text" class="form-control serach-btn width-auto"  onkeyup="searchkey(this.value)" name="query" placeholder="<?php echo 'Search Commission'//echo phrase('search_user'); ?>"<?php echo ($keywords != null ? ' value="' . $keywords . '"' : 'test'); ?> />
			
  
 
  		<?php foreach($p_type as $key=>$pType): $pTypeurl = slugify($pType); ?>
  		
  	<a class="btn btn-link dropdown-toggle filter-content" href="#<?php echo $pTypeurl?>" data-id="<?php echo $key?>"><?php echo $pType ?></a>
  		
  		
									
										<?php endforeach;?>
										
   
  	
 
	
				
		</div>
	</div>
	<br /><br /><br />
	<div class="container">
		<div class="row">
			<div class="col-md-10 col-md-offset-1">
				<?php if($keywords): ?>
				<br />
				<div class="alert alert-<?php echo ($count > 0 ? 'info' : 'danger'); ?>"><?php echo phrase('showing'); ?> <b><?php echo $offset . ' - ' . ($count > $limit && $limit+$offset < $count ? $limit+$offset : $count) . ' ' . phrase('from') . ' ' . ($count > 0 ? $count : 0); ?></b> <?php echo phrase('results_for_keywords'); ?> <b>"<?php echo $keywords; ?>"</b></div>
				<?php endif; ?>
				
			
					
					<div class="row " id="priest-block">
				
				
<div class="loader"></div>
				</div>
				
				
			
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
                    url: admin_url+'commission',
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
  
  
  
  