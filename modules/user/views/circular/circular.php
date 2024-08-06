
<style>
	.flex-row {
		display: flex;
    width: 100%;
    padding: 12px;
    background: #fff;
    align-items: center;
    
    border-bottom: 1px solid #d0cdcd;
	}
	.letter-radius {
		width: 40px;
    height: 40px;
    background: #671f57;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 50%;
    font-size: 21px;
    color: #fff;
	}
	.span-1 {width:25%;}
	.span-2 {width:80%;}
</style>
	
	
	<div class="container">
	
			<div class="col-md-12 bg-info">
				<a class="btn btn-md btn-block btn-primary newAdministration pull-right"style="    width: fit-content;"href="<?php echo base_url('user/circular/add'); ?>"><i class="fa fa-plus"></i> &nbsp; Add Circular</a>
			</div>
			<div class="col-md-10" id="circular-data">
		
			</div>
		

	</div>
	
	<script>
	var admin_url   			= '<?php echo base_url()?>';
   var url        			= '';
   var keyword    			= null;
   var slug       			= '';
   var currentRequest   = null;

    
    
    function router () 
    {
      url       = location.hash.slice(1) || '/';
      
      
      switch(url)
      {
      	case '/' : {
      		slug = 'all';
      		
      		get_circulars();
      		break;
      	}
      	
      }
   
      
       console.log(url);
       
     
    }
    
    
   function get_circulars()
   {
   			$.ajax({
                    url: admin_url+'user/circular/get_circular',
                    type: "POST",
                    data: {'keyword':keyword,'slug':url},
                     beforeSend : function()    {           
        if(currentRequest != null) {
            currentRequest.abort();
        }
    },
                    success: function(response){
					   
					   
					                   var  data = JSON.parse(response,true);
					                   if (data.length > 0) {
					                   	var dataHtml = '';
					                   let dataME  = 	data.map(function(val,index) {
					                   
					                   		
	return`<div class="flex-row">
					                   		     					<span class="span-1"><div class="letter-radius">${val.c_title.charAt(0).toUpperCase()}</div></span>
					                   		     					<span class="span-2">${val.c_title} </span>
					                   		     					<span><div class="btn-group"><a class="btn btn-default btn-sm" href="http://kuzhithuraidiocese.com/user/administration/edit/1" data-push="tooltip" data-placement="top" title="" data-original-title="edit"><i class="btn-icon-only fa fa-pencil"> </i></a><a class="btn btn-default btn-sm" href="javascript:void(0)" onclick="confirm_modal('http://kuzhithuraidiocese.com/user/circular/remove/${val.id}', 'post1')" data-push="tooltip" data-placement="top" title="" data-original-title="Remove"><i class="btn-icon-only fa fa-times"> </i></a></div></span>
					                   								 </div>`;
					                   								
});
					                   	
					                   	$('#circular-data').html(dataME.join(''));
					                   	
					                   }
				                     
  
                    }
                });
   }
    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
	</script>