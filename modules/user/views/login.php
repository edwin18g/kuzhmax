
	<div class="gap-sm"></div>
		<div class="gap-sm"></div>
	<div class="container">
	
		<?php if($this->session->flashdata('error')) { ?>
		<div class="row">
			<div class="col-sm-6 col-sm-offset-3">
				<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><?php echo $this->session->flashdata('error'); ?></div>
			</div>
		</div>
		<?php } ?>
		<div class="row" style="    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;">
			<div class="col-sm-5 col-xs-12 text-center">
				
				<!--<div class="image-placeholder-sm">-->
					<div class="" style="display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;">
						
								<a class="navbar-brand ajaxloads" href="<?php echo base_url(); ?>"> <img src="<?php echo base_url('themes/default/images/logo.png?1234'); ?>" alt="logo" /></a>
				
						<div class="gap-sm"></div>
						<form action="<?php echo base_url('user/login'); ?>" method="post" style="width:100%;" class="submitForms" data-save="<?php echo phrase('sign_in'); ?>" data-saving="<?php echo phrase('signing_in'); ?>" data-alert="<?php echo phrase('unable_to_signing_in'); ?>">
							<div class="input-group col-sm-12">
								<span class="input-group-addon"><i class="fa fa-at"></i></span>
								<input type="text" class="form-control input-lg" name="username" value="<?php echo set_value('username'); ?>" placeholder="<?php echo phrase('username_or_email'); ?>" />
							</div>
							<div class="input-group col-sm-12">
								<span class="input-group-addon"><i class="fa fa-qrcode"></i></span>
								<input type="password" class="form-control input-lg" name="password" value="<?php echo set_value('password'); ?>" placeholder="<?php echo phrase('type_your_password'); ?>" />
							</div>
							<div class="statusHolder"></div>
							<input type="hidden" name="hash" value="<?php echo sha1(time()); ?>" />
							<button class="btn btn-primary btn-lg btn-block submitBtn" type="submit"><i class="fa fa-key"></i> <?php echo phrase('login'); ?></button>
						</form>
						<div class="gap-sm"></div>
					</div>
				
					<div class="clearfix"></div>
				</div>
			</div>
		<!--</div>-->
		<!--<div class="row">-->
		<!--	<div class="text-center">-->
		<!--		<div class="col-sm-6 col-sm-offset-3">< ?php echo phrase('login_description'); ?></div>-->
		<!--	</div>-->
		<!--</div>-->
	</div>
	<div class="gap-sm"></div>