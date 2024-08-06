
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.6/css/selectize.bootstrap3.css" />
	<?php
	if(!$this->input->is_ajax_request()) echo '<br /><br />';
	if ($administration)
	{
	?>
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-sm-offset-3">
				<form action="<?php echo current_url(); ?>" method="post" class="form-horizontal submitForm" data-save="<?php echo phrase('update'); ?>" data-saving="<?php echo phrase('updating'); ?>" data-alert="<?php echo phrase('unable_to_update_article'); ?>">
				
					<?php if($this->input->is_ajax_request() && isset($modal)) { ?>
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3><i class="fa fa-edit"></i> &nbsp; <?php echo phrase('edit_article'); ?></h3>
					</div>
					<?php } ?>
					
					<div class="modal-body">
						<div class="row">
							<div class="col-sm-12 sticky">
								<h3>Adminstration Name :</h3>
								<div class="form-group">
									<div class="col-sm-12">
										
									<select id="select-repo" class="repositories selectized" placeholder="Select priest..."  name="user_id">
										<option value="<?=$administration['userID']?>" selected="true"><?=$administration['full_name']?></option>
									</select>
							
									</div>
								</div>
								<br />
							
		<h3>Administration Level:</h3>						
								<div class="form-group">
    	<div class="col-sm-12">
    						<select id="a_type" class="repositories selectized" id="select-beast" placeholder="Select role..." name="a_type" >
										<?php foreach($a_type as $key=>$aType):
										$selected = ($administration['a_type'] ==  $key)?'selected = "true"':'';
										?>
										
										<option value="<?php echo $key?>"  <?=$selected?> ><?php echo $aType ?></option>
										<?php endforeach;?>
										</select>
										</div>
				
  </div>
  <br>
  	<h3>Role:</h3>
  	<div class="form-group">
<div  class="col-sm-12">    
    								<input type="text" name="a_role" class=" form-control" placeholder="" value="<?=$administration['a_role']?>"></div>
  </div>
							</div>
							
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
									<a href="<?php echo base_url('user/posts'); ?>" class="btn btn-default btn-lg ajaxloads"><i class="fa fa-times"></i> <?php echo phrase('cancel'); ?></a>
								<?php } ?>
							</div>
							<div class="col-xs-6 nomargin">
								<input type="hidden" name="hash" value="<?php echo sha1(time()); ?>" />
								<button class="btn btn-success btn-lg submitBtn" type="submit"><i class="fa fa-save"></i> <?php echo phrase('update'); ?></button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
		
	<?php
	}
	?>
	
	<!--<script src="< ?php echo base_url('themes/' . $this->settings['theme'] . '/js/redactor.js'); ?>"></script>-->
	<!--<script src="< ?php echo base_url('themes/' . $this->settings['theme'] . '/js/tags.js'); ?>"></script>-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.2/js/standalone/selectize.min.js"></script>
	<script type="text/javascript">
		
		
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
    change:function(value){
    	console.log(value);
    	alert(value)
    },
    placeholder:'<?=$administration['full_name']?>',
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