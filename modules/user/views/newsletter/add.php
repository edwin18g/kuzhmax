<style>
	.fle-upload {
    margin-bottom: 10px;
    position: relative;
    float: left;
    cursor: pointer;
    border: 1px solid #ccc;
    width: 100%;
    border-radius: 3px;
    background: #fff;
}
label.fle-lbl {
    background: #096cbf !important;
    color: #fff;
    font-size: 13px;
    line-height: 35px;
    position: relative;
    text-transform: uppercase;
    width: auto;
    float: right;
    text-align: center;
    padding: 0px 35px;
    border-radius: 0 3px 3px 0;
}

.upload-file-name {
    background: rgb(255, 255, 255) none repeat scroll 0 0;
    border: 0 none;
    cursor: pointer;
    height: 100%;
    left: 0;
    margin: 0;
    padding: 8px 12px;
    position: absolute;
    width: calc(100% - 124px);
    z-index: 0;
}
.upload {
    opacity: 0;
    position: absolute !important;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    height: 100%;
    cursor: pointer;
    z-index: 1;
    width: 100%;
}
</style>
	
	<div class="bg-info">
		<div class="container-fluid first-child">
			<div class="row">
			
				<div class="col-sm-2">
					<div class="col-12-xs">
						<a href="<?php echo base_url('user/openletters/add'); ?>" class="btn btn-md btn-block btn-primary newAdministration"><i class="fa fa-plus"></i> &nbsp; Add Newsletters</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-2 hidden-xs hidden-sm sticky" style="background: #fff;margin: 0px;position: static;">
			
				<?php echo ($this->input->is_ajax_request() ? $this->load->view('dashboard_navigation') : $template['partials']['navigation']); ?>
				
			</div>
			<div class="col-md-7 sticky">
			
				
				<hr/>
				<div class="row">
					<div class="col-sm-12 ">
						<section class="form-horizontal" >
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Newsletters Title:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="circular_title" placeholder="Title">
    </div>
  </div>
  
  <div class="form-group clearfix">
  	<div class="col-sm-10 col-sm-offset-2"> 
                      <div class="fle-upload">
                        <label class="fle-lbl">BROWSE PDF </label>
                        <input type="file" class="form-control upload" id="file">
                        <input value="" readonly="" class="form-control upload-file-name" id="upload_user_file" type="text">
                      </div>
                      </div>
                                            </div>
  <div class="form-group"> 
   <div class="clearfix progress-custom  col-sm-10 col-sm-offset-2" id="percentage_bar" style="display: none">
                        <div class="progress width100 ">
                            <div style="width: 10%;" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" role="progressbar" class="progress-bar progress-bar-success">
                                <span class="sr-only">10% Complete</span>
                            </div>
                        </div>
                        <span class="">Uploading...<b class="percentage-text">10%</b></span>
                    </div>
  </div>
  <div class="form-group"> 
    <div class="col-sm-offset-2 col-sm-10">
      <a onclick="newsletters_save()" class="btn btn-default">Submit</a>
    </div>
  </div>
</section>
					
  
					
                                           
						
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modal fade alert-modal-new  success-alert" data-keyboard="false" id="common_message_advanced" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-small" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">×</button>
                    </div>
                    <div class="modal-body">
                        <div class="icon-align text-center">
                            <span class="alert-icon"></span>
                        </div>
                        <p class="message-body"></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-green" id="advanced_confirm_box_cancel" data-dismiss="modal" style="display: none;">CANCEL<ripples></ripples></button>
                        <button type="button" class="btn btn-red" id="advanced_confirm_box_ok" data-dismiss="modal">OK<ripples></ripples></button>
                    </div>
                </div>
            </div>
        </div>
	
	<script>
	  
var admin_url = '<?php echo base_url()?>';


	</script>
