
<style>
* {
  box-sizing: border-box;
}

#myInput {
  background-image: url('https://www.w3schools.com/css/searchicon.png');
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 0px;
}

#myUL {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
      width: 95%;
    z-index: 9999;
    height:200px;
    overflow:auto;
}

#myUL li a {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block
}

#myUL li a:hover:not(.header) {
  background-color: #eee;
}
.courses-tab {
   
    z-index: 110;
    top: 80px;
    width: 100%;
    background: #e8e8e8;
}

.offa-tab {
    width: 100%;
    bottom: 0px;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    padding: 12px;
    background: #fff;
    border-top: 1px solid #c7c7c7;
}
.courses-tab ol.nav li {
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 14px;
    border-bottom: 1px solid #e4e4e4;
}
.custom-sidemenu li {
    width: 100%;
    padding-left: 30px;
    font-size: 13px !important;
}
.courses-tab ol.nav li a {
    padding: 9px 15px 10px;
}
.courses-tab a {
    color: #2e3e4e;
}
.custom-sidemenu li.active {
    background-color: #f6f8fa;
}
.custom-sidemenu li:hover {
    background-color: #f6f8fa;
}
.pattern-bg {
   background:#fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
 .faculty-img {
    width: 150px;
}
.faculty-info {
    width: calc(100% - 210px);
    padding-bottom: 15px;
}
 .icon-wrap-round {
    height: 80px;
    width: 80px;
    margin: 20px auto;
    display: block;
}
.img.icon-wrap-round img {
    width: 100%;
    border-radius: 50%;
    height: 100%;
}
.center-block {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.pattern-bg h1 {
    color: #434343;
    font-size: 24px;
    font-weight: 600;
}
.flex-row{
	display: flex;
    align-items: center;
}
.padding-zero {padding:0px;}
.zero-both {    padding: 0px;
    margin: 0px;}
    .modal-body {
    position: relative;
    padding: 10px;
    background: #fff;
     border: none !important;
}
</style>
	<?php
	if(!$this->input->is_ajax_request()) echo '';
	?>
	<div class="container">
		<div class="row">
		
			
			<div class="col-sm-8   col-sm-offset-2 padding-zero">
  			<div class="row pattern-bg flex-row zero-both">    
  					<div class="faculty-img pull-left">
  							<span class="icon-wrap-round img">
  							<form id="photoUpload-1" class="profileupload" action="<?php echo base_url('user/uploads/photo/commissions'); ?>" method="post" enctype="multipart/form-data"><div style=" position:relative; display:block">
  										<img id="userfile_preview-1" src="<?php echo imageUrlCheck('uploads/commissions/'.$commission['c_img']); ?>" class="img-rounded img-bordered" style="height: 85px;
      width: 85px;
      object-fit: cover;
      border-radius: 50%;" alt="">
  										<input onchange="readPhotos(this, 'userfile_preview','1');" type="file" name="userfile" style="    width: 60px;
      height: 60px;
      position: absolute;
      top: 0px;
      background: aqua;
      opacity: 0;
      cursor: pointer;" accept="image/*"></div>
      	<input type="hidden"  value ="<?php echo $commission['id'] ?>" name="commission_id" >
      </form>
  							</span>
  					</div> 
  					<div class="faculty-info pull-left">     
  						<span class="center-block faculty-name wrap">
  							<h1><?php echo $commission['c_name']; ?> <span> - (<?php echo $commission['slug']; ?>)</span></h1>
  						</span>
  					</div>
  				
  				</div>
  				<div class="tabs">
  				  <ol class="nav offa-tab custom-sidemenu">
              <li class="active">
                <a href="#overview"> OVERVIEW</a>
              </li>
              <li>
                <a href="#article">Article</a>
              </li>
              <li class="">
                <a href="#setting">SETTING</a>
              </li>
              <li class="">
                <a href="#Gallerys">Gallerys</a>
              </li>
            </ol>
  				</div>
  					<div class="view"></div>
			</div>
		
		</div>
	</div>
	
	<script src="<?php echo base_url('themes/' . $this->settings['theme'] . '/js/redactor.js'); ?>"></script>
	<script src="<?php echo base_url('themes/' . $this->settings['theme'] . '/js/tags.js'); ?>"></script>


	<script type="text/javascript">
	var base_url  = '<?php echo base_url()?>';
		if($(window).width() > 768)
		{
			$('.redactor').redactor({
				buttons:["formatting","|","bold","italic","deleted","|","unorderedlist","orderedlist","outdent","indent","|","image", "video", "link", "table","|","alignment","|","horizontalrule"],
				plugins: ['fontcolor'],
				minHeight: 200,
				imageUpload: '<?php echo base_url('user/upload/images/posts');?>',
				imageGetJson: '<?php echo base_url('user/upload/choose/posts');?>',
				imageUploadErrorCallback: function(response)
				{
					alert(response.error);
				}
			});
		}
		


var currentRequest = null;

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value;
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
   
   document.getElementById("myUL").innerHTML= ' <li><a href="#">Loading.... please type slow</a></li>';
    
         currentRequest =	$.ajax({
                    url: base_url+'user/commissions/user_filter_select',
                    type: "POST",
                    data: {'keyword':filter,'slug':filter},
                     beforeSend : function()    {           
        if(currentRequest != null) {
            currentRequest.abort();
        }
    },
                    success: function(response){
					
					$('#myUL').html(response);
                    }
                });
   
}
var CommissUser = null;
function selectFilterId(id,name)
{
	CommissUser = id;
	 ul = document.getElementById("myInput");
	 ul.value = name ;
	 document.getElementById("myUL").style.display = 'none';
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
      
      switch(url){
        case '/':
          {
            $('.view').html(render_home());
            break;
          }
        case 'overview':
          {
             $('.view').html(render_home());
            break;
          }
          
        case 'article': {
              $('.view').html(render_article());
             
          break;
        }
         case 'setting': {
              $('.view').html(render_settings());
             
          break;
        }
        
      }
       
		
       
     
    }
    
 
   
    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
    
    function render_home(){
      return ``;
    }
    
    
    function render_article(){
      
       $.ajax({
        type : "POST",
        url : admin_url+'user/commissions/article',
        enctype: 'multipart/form-data',
        data :{},
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
      
      return 'aritcle empty'
    }
  
    function render_settings(){
      return `<form action="<?php echo current_url(); ?>" method="post" class="form-horizontal submitForm" data-save="<?php echo phrase('save'); ?>" data-saving="<?php echo phrase('saving'); ?>" data-alert="<?php echo phrase('unable_to_add_article'); ?>">
				
					<?php if($this->input->is_ajax_request() && isset($modal)) { ?>
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3><i class="fa fa-plus"></i> &nbsp; Edit Commission</h3>
					</div>
					<?php } ?>
					
					<div class="modal-body">
						<div class="row">
						  <div class="col-sm-9">
  						  <div class="col-sm-12 sticky">
    								<h5><?php echo 'Commission Name'//phrase('title_and_content'); ?></h5>
    								<div class="form-group">
    									<div class="col-sm-12">
    										<input type="text" name="title" class="form-control input-lg" placeholder="" value="<?php echo $commission['c_name']; ?>" />
    									</div>
    								</div>
    								<h5><?php echo 'Commission URl'//phrase('title_and_content'); ?></h5>
    								<div class="form-group">
    									<div class="col-sm-12">
    										<input type="text" name="title" class="form-control input-lg" placeholder="" value="<?php echo $commission['slug']; ?>" />
    									</div>
    								</div>
    							</div>
						  </div>
						   <div class="col-sm-3">
						   	<input type="hidden" name="hash" value="<?php echo sha1(time()); ?>" />
								<button class="btn btn-success btn-lg submitBtn" type="submit"><i class="fa fa-save"></i> <?php echo phrase('save'); ?></button>
						  </div>
							
  							
							
						</div>
				
					</div>
			
				</form>`;
    }
  </script>