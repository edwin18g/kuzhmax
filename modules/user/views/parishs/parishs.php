<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/css/selectize.bootstrap3.css" />
<style>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 80px;
  height: 80px;
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

.pagination-body{
  
  min-height: 650px;
    overflow: auto;
    background: #fff;
    margin-top: 0px;
}
.flex-row {
     width: 100%;
    /* background: aliceblue; */
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #c7c7c7;
}
.min-height {
  min-height: 450px;
}
</style>
	<?php 
		$totSegments = $this->uri->total_segments();
		$uriSegments = $this->uri->segment($totSegments);
		if(!is_numeric($uriSegments)){
			$offset = 0;
		} else if(is_numeric($uriSegments)){
			$offset = $this->uri->segment($totSegments);
		}
		$limit = 12;
	?>
	
	
	
	<div class="container-fluid">
		<div class="row">
			
			<div class="col-md-9 pagination-body   " >
			  	<div class="page-name-block" >
	  
		<div class="page-content-block ">
			<span class="Page-title">Parish List <i class="fa fa-angle-double-right"></i></span> 
		
		<input type="text" class="form-control serach-btn width-auto"  onkeyup="searchkey(this.value)" name="query" placeholder="<?php echo 'Search Parish'//echo phrase('search_user'); ?>" />
			
  
 
  	
										
   
  	
 
	
				
		</div>
	</div>
				<div class="table table-hover min-height" style="margin-top: 60px;">
								<?php
						$n = 1;
						$p_type = array(0 =>'Not Assign',1=>'Diocesan Priests',2=>'Priests on Contract',3=>'Religious Priests',4=>'Religious Men');
				
					
					?>
					<div id="priest-block">
						
						</div>
					
				</div>
				
				<hr/>
			
			</div>
			<div class="col-sm-3">
			  <h3>Add New Commission</h3>
			  <form action="<?=base_url('user/commissions/add')?>" method="post">
  <div class="form-group">
    <label for="email">Commission Name:</label>
    <input type="text" class="form-control" id="comName" name="cc_name">
  </div>
  <div class="form-group">
    <label for="pwd">Commission URl:</label>
    <input type="text" class="form-control" id="pwd" name="cc_url">
  </div>
   <div class="form-group">
    <label for="pwd">Commission Adminl:</label>

    <select id="select-repo" class="repositories selectized" placeholder="Select priest..." name="cc_admin"></select>
  </div>
  <div class="form-group">
    <label for="pwd">Commission Address:</label>
    <input type="text" class="form-control" id="pwd" name="cc_address">
  </div>
  <div class="form-group">
    <label for="pwd">Commission Phone:</label>
    <input type="text" class="form-control" id="pwd" name="cc_phone">  </div>
  <input type="hidden" name="hash" value="d">
  <div id="customField"> </div>
  <div class="checkbox">
    <!--<a onclick ="create_input()" class="btn btn-default" href="javascript:void(0)" >custom Field</a>-->
  </div>
  <button type="submit" class="btn btn-default">Add</button>
</form>
			</div>
		</div>
	</div>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.2/js/standalone/selectize.min.js"></script>
	<script>
	function create_input(modal = true)
	{
	  if(modal)
	  {
	  $('#commission_custom').modal('show');
	  $('#commission_custom #create_custom').unbind();
	 $('#commission_custom #create_custom').attr('onclick','create_input(modal = false)');
	  return false;
	  }
	  var fiellName =  $('#commission_custom #custom_field_name').val()
	  if(fiellName != '')
	  {
	    $('#customField').append(` <div class="form-group customData">
    <label for="pwd">`+fiellName+`:</label>
    <input type="text" class="form-control customName" id="" name="custom_name[]" >
    <input type="text" class="form-control customValue" id=""  name="custom_value[]">
  </div>`);
	  }
	    

	}
		function searchkey(key)
		{
			
		}
		function readPhotos(event, subName, id) {
  if (event.files && event.files[0]) {
    $("#modal_ajax_sm .modal-body").addClass("preloader");
    $("#modal_ajax_sm").modal({
      backdrop : "static",
      keyboard : false
    });
    /** @type {!FileReader} */
    var fileReader = new FileReader;
    /**
     * @param {!Event} fileLoadedEvent
     * @return {undefined}
     */
    fileReader.onload = function(fileLoadedEvent) {
      $("#userfile_preview-"+id).attr("src", fileLoadedEvent.target.result);
    };
    fileReader.readAsDataURL(event.files[0]);
    var form = $('#photoUpload-'+id)[0];
var data = new FormData(form);
      
      $.ajax({
        type : "POST",
        url : $('#photoUpload-'+id).attr("action"),
        enctype: 'multipart/form-data',
        data :data,
        contentType : false,
        cache : false,
        processData : false,
        success : function(data) {
          try {
            var op = $.parseJSON(data);
            if (403 == op.status) {
              $(".modal").modal("hide");
              $("#login").modal();
            } else {
              if (200 == op.status) {
                $("*").modal("hide");
                $("#modal_success .modal-body").removeClass("preloader").html(op.messages);
                $("#modal_success").modal();
              } else {
                $("#modal_alert .modal-body").removeClass("preloader").html(op.messages);
              }
            }
          } catch (a) {
            $("#modal_alert .modal-body").removeClass("preloader").html(data);
          }
        }
      }).fail(function() {
        $("#modal_alert .modal-body").html(fail_alert);
        $("#modal_alert").appendTo("body").modal();
      });
    
  }
}

    
	</script>
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
                    url: admin_url+'user/parishs',
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
    $('#select-repo').selectize({
    valueField: 'userID',
    labelField: 'full_name',
    searchField: 'full_name',
    create: false,
    render: {
        option: function(item, escape) {
            return `<div class="media">
  						<div class="media-left">
    						<img src="`+ base_url+`uploads/users/thumbs/`+item.photo + `" class="media-object" style="width:60px">
  						</div>
  						<div class="media-body">
    						<h4 class="media-heading">` + escape(item.full_name) + `</h4>
    						
  						</div>
					</div>`;
        }
    },
    
    load: function(query, callback) {
        if (!query.length) return callback();
        $.ajax({
            url: '<?php echo base_url('user/administration/get_user'); ?>',
            type: 'Post',
			data: {'search':query},
            error: function() {
                callback();
            },
            success: function(res) {
                callback(res.response);
            }
        });
    }
});
  </script>