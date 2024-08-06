

	<link href="<?php echo base_url('themes/' . $this->settings['theme'] . '/css/redactor.css'); ?>" rel="stylesheet">
	<link href="<?php echo base_url('themes/' . $this->settings['theme'] . '/css/tags.css'); ?>" rel="stylesheet">
	<style>
		.logo-image-upload-btn{
			position: relative;
    top: 0;
    width: 300px;
    height: 205px;
    z-index: 94;
    background: #ffff;
    opacity: 0;
    cursor: pointer;
		}
		#site_logo{
			width: auto;
    height: 200px;
    object-fit: cover;
		}
		.settings-logo{
			height: 205px;
    position: absolute;
    width: 300px;
    margin-top: 15px;
		}

	</style>
	<?php
	if(!$this->input->is_ajax_request()) echo '<br /><br />';
	?>
	<div class="container-fluid">
		<form action="<?php echo current_url(); ?>" method="post"  enctype="multipart/form-data" class="form-horizontal submitForm" data-save="<?php echo phrase('save'); ?>" data-saving="<?php echo phrase('saving'); ?>" data-alert="<?php echo phrase('unable_to_add_article'); ?>">
		<div class="row">
			<div class="col-sm-8">
					<div class="modal-body">
						<div class="row">
							<div class="col-sm-12">
								<div class="form-group">
							<div class="col-sm-12 statusHolder">
							</div>
						</div>
								<div class="form-group">
									<div class="col-sm-12">
										<input type="text" name="postTitle" class="form-control input-lg" value="<?php echo htmlspecialchars(set_value('postTitle')); ?>" placeholder="<?php echo phrase('post_title'); ?>" />
									</div>
								</div>
								<br />
								<div class="form-group">
									<div class="col-sm-12">
										<textarea name="content" class="redactor form-control" placeholder="<?php echo phrase('write_article_here'); ?>"><?php echo set_value('content'); ?></textarea>
									</div>
								</div>
								<br />
								<div class="form-group">
									<div class="col-sm-12">
										<h4><?php echo phrase('tags'); ?></h4>
										<input name="tags"  data-role="tagsinput" class="form-control" type="text" value="<?php echo set_value('tags'); ?>" />
									</div>
								</div>
							</div>
				
						</div>
					
					</div>
					<input type="hidden" name="hash" value="<?php echo sha1(time()); ?>" />
			
			
			</div>
			<div class="col-sm-3 " style="
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background: #fff;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border: 1px dashed #d2d2d2;
    font-size: 12px;
">
				<div class="form-group">
				<button class="btn btn-success btn-lg submitBtn" type="submit"><i class="fa fa-save"></i> Publish</button>
				</div>
				
				<div class="course-info-left">
                           
                           <div class="upload-prieview course-image-preview">
                              <div class="course-card-placeholder">
                                 <div class="settings-logo" style="height: 205px;">
                                                                        <img id="site_logo" data-id="268.webp?v=18" class="img-responsive" src="https://i.stack.imgur.com/y9DpT.jpg">
                                 </div>
                                 <input name="userfile" class="fileinput logo-image-upload-btn" onchange="readURL(this);" id="site_logo_btn" accept="image/*" type="file">
                                
                              </div>
                           </div>
                           
                        </div>
				<div class="form-group">
  <label for="sel1">Select Category:</label>
  <select class="form-control" id="sel1" name="categoryID">
  											<?php
										if(!empty($categories)){	foreach ($categories as $c)
											{
												
												echo '<option value="'.$c['categoryID'].'">'.$c['categoryTitle'].'</option>';
											
											}}
										?>
   
  </select>
</div>
	
								
									
								
				
								
							</div>
		</div>
			</form>
	</div>
	
	<script src="<?php echo base_url('themes/' . $this->settings['theme'] . '/js/redactor.js?v=45555654'); ?>"></script>
	<script src="<?php echo base_url('themes/' . $this->settings['theme'] . '/js/tags.js'); ?>"></script>
	
	<script type="text/javascript">
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
				$('.redactor_toolbar').append(`
            													<li>
																				<a href="javascript:;" title="Insert Horizontal Rule" tabindex="-1" class="redactor_btn btn-custom-redactor" data-toggle="modal" data-target="#converter">
																				Type Bamini
            														</a>
            													</li>
            													<li>
																				<p  title="Insert Horizontal Rule"  class="redactor_btn btn-custom-redactor" style="
    position: absolute;
">
																			<i class="fa fa-upload" aria-hidden="true" style="position: absolute;"></i>
																			<input name="userfile" style="
    position: relative;
    top: 0;
    width: 37px;
    height: 27px;
    z-index: 94;
    background: #c53f3f80;
    opacity: 0;
    cursor: pointer;
    margin-top: -14px;
    margin-bottom: 0;
" class="fileinput logo-image-upload-btn" onchange="readFile(this);" id="site_logo_btn"  type="file">
            														</p>
            													</li>
            													`);
		}
		
		 function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#site_logo')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
        
        function readFile(input){
   	if (input.files && input.files[0]) {
   
   var form_data = new FormData();
   	   form_data.append("userfile",  input.files[0]);
   $.ajax({
    url:'<?php echo site_url("user/posts/redactor_doc")?>',
    method:"POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    beforeSend:function(){
     $('#uploaded_image').html("<label class='text-success'>Image Uploading...</label>");
    },   
    success:function(data)
    {
    	if(data  != 'error')
    	{
    	$('.redactor_editor').append(data);	
    	}
    
    
    }
   });
   	}
   }
	</script>