
	<!--<link href="< ?php echo base_url('themes/' . $this->settings['theme'] . '/css/redactor.css'); ?>" rel="stylesheet">-->
	<!--<link href="< ?php echo base_url('themes/' . $this->settings['theme'] . '/css/tags.css'); ?>" rel="stylesheet">-->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/css/selectize.bootstrap3.css" />

	<?php
	if(!$this->input->is_ajax_request()) echo '<br /><br />';
	?>
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-sm-offset-3">
				<form action="<?php echo current_url(); ?>" method="post" class="form-horizontal submitForm" data-save="<?php echo phrase('save'); ?>" data-saving="<?php echo phrase('saving'); ?>" data-alert="<?php echo phrase('unable_to_add_article'); ?>">
				
					<?php if($this->input->is_ajax_request() && isset($modal)) { ?>
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3><i class="fa fa-plus"></i> &nbsp; <?php echo phrase('write_article'); ?></h3>
					</div>
					<?php } ?>
					
					<div class="modal-body">
						<div class="">
							<div class="col-sm-12 clearfix">
								<div class="form-group">
    <label for="email">Select Priest:</label>
    <select id="select-repo" class="repositories selectized" placeholder="Select priest..."  name="user_id"></select>
  </div>
  <br>
  				<div class="form-group">
    <label for="email">Administration Level:</label>
    						<select id="a_type" class="repositories selectized" id="select-beast" placeholder="Select role..." name="a_type" >
										<?php foreach($a_type as $key=>$aType):?>
										<option value="<?php echo $key?>" ><?php echo $aType ?></option>
										<?php endforeach;?>
										</select>
				
  </div>
  <br>
  	<div class="form-group">
    <label for="email">Role:</label>
    								<input type="text" name="a_role" class=" form-control" placeholder="">
  </div>
  <br>
								
						</div>
						<div class="form-group">
							<div class="col-sm-12 statusHolder">
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<div class="form-group">
							<div class="col-xs-6 nomargin text-left">
								<?php if($this->input->is_ajax_request() && isset($modal)) { ?>
									<a href="javascript:void(0)" class="btn btn-default btn-lg" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i> <?php echo phrase('cancel'); ?></a>
								<?php } else { ?>
									<a href="<?php echo base_url('user/administration'); ?>" class="btn btn-default btn-lg ajaxloads"><i class="fa fa-times"></i> <?php echo phrase('cancel'); ?></a>
								<?php } ?>
							</div>
							<div class="col-xs-6 nomargin">
								<input type="hidden" name="hash" value="<?php echo sha1(time()); ?>" />
								<button class="btn btn-success btn-lg submitBtn" type="submit"><i class="fa fa-save"></i> <?php echo phrase('save'); ?></button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	
	<script src="<?php echo base_url('themes/' . $this->settings['theme'] . '/js/redactor.js'); ?>"></script>
	<script src="<?php echo base_url('themes/' . $this->settings['theme'] . '/js/tags.js'); ?>"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.2/js/standalone/selectize.min.js"></script>
	
	<script type="text/javascript">
	var base_url  = '<?php echo base_url()?>';
		// if($(window).width() > 768)
		// {
		// 	$('.redactor').redactor({
		// 		buttons:["formatting","|","bold","italic","deleted","|","unorderedlist","orderedlist","outdent","indent","|","image", "video", "link", "table","|","alignment","|","horizontalrule"],
		// 		plugins: ['fontcolor'],
		// 		minHeight: 200,
		// 		imageUpload: '<?php echo base_url('user/upload/images/posts');?>',
		// 		imageGetJson: '<?php echo base_url('user/upload/choose/posts');?>',
		// 		imageUploadErrorCallback: function(response)
		// 		{
		// 			alert(response.error);
		// 		}
		// 	});
		// }
		

$('#select-beast').selectize({
    create: true,
    sortField: 'text'
});
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