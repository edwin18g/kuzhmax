	<?php if(!empty($page['access_user'])){$parish_access = explode(',',$page['access_user']);} ?>
	<?php if(isset($parish_access) && in_array($this->session->userdata('userID'), $parish_access) ) { ?>

	<form id="coverUpload" action="<?php echo base_url('user/uploads/cover/commission'); ?>" method="post" enctype="multipart/form-data">
		<div data-provides="fileupload" id="cover_preview" class="btn btn-file fileupload fileupload-cover jumbotron noborder roundless" style="background:url(<?php echo imageUrlCheck('uploads/commissions/'.$page['c_img']); ?>) center center no-repeat;background-size:cover;-webkit-background-size:cover;background-position:fixed;padding-top:240px;padding-bottom:0;width:100%">
			<input onchange="readCover(this, 'cover_preview');" type="file" name="userfile" accept="image/*" />
			<div class="fileupload-cover"></div>
		</div>
	</form>
	
	<?php } else { ?>

	<div class="jumbotron" style="background:url(<?php echo imageUrlCheck('uploads/commissions/'.$page['c_img']); ?>) center center no-repeat;background-size:cover;-webkit-background-size:cover;background-position:fixed;padding-top:240px;padding-bottom:0;margin-bottom:0;width:100%"></div>
	
	<?php } ?>
	<div class="container" style="position:relative">
		<div class="row" style="position:absolute;bottom:0;width:100%">
			<div>
				<div class="col-sm-2 nomargin relative">
					<?php if(isset($parish_access) && in_array($this->session->userdata('userID'), $parish_access) ) { ?>
					<form id="photoUpload" action="<?php echo base_url('user/uploads/photo/commissions'); ?>" method="post" enctype="multipart/form-data">
						<div data-provides="fileupload" class="btn btn-file fileupload fileupload-new userImage" style="padding:0">
							<div class="fileupload-new" style="overflow:hidden">
								<div class="col-xs-6 col-xs-offset-3 col-sm-12 col-sm-offset-0 text-center" style="padding:0">
									<div class="rounded full-round image-parent" style="border:6px solid #eee;overflow:hidden">
										<img id="userfile_preview" src="<?php echo imageUrlCheck('uploads/commissions/'.$page['c_img']); ?>" class="img-rounded img-bordered" style="width:200px: height:200px;" alt="" />
										<input type="hidden"  value ="<?php echo $page['id'] ?>" name="parish_id" >
										<input onchange="readPhoto(this, 'userfile_preview');" type="file" name="userfile" accept="image/*" />
									</div>
								</div>
							</div>
						</div>
					</form>
					
					<?php } else { ?>
					
					<div class="userImage">
						<div class="col-xs-6 col-xs-offset-3 col-sm-12 col-sm-offset-0 text-center" style="padding:0">
							<div class="rounded full-round image-parent" style="border:6px solid #eee;overflow:hidden">
								<?php echo '<img src="' . imageUrlCheck('uploads/commissions/'.$page['c_img']) . '" class="image-rounded img-bordered" style="width:200px;height:200px;object-fit:cover;" alt="" />'; ?>
							</div>
						</div>
					</div>
					
					<?php } ?>
				</div>
				<div class="col-sm-10 nomargin">
					<?php 
						echo '
							<div class="row">
								<div class="col-sm-6 text-center-xs">
									<h3>
										<a class="text-shadow" href="' . base_url($page['slug']) . '"><b>' . $page['c_name'] . '</b></a>
										<br />
										
									</h3>
								</div>
								
							</div>
						';
					?>
				</div>
			</div>
		</div>
	</div>
	<div style="border-bottom:1px solid #ddd">
		<div class="container">
			<div class="row">
				<div class="col-sm-10 col-sm-offset-2" style="position:relative">
					
					<ul class="btn-group btn-group-justified nav nav-tabs">
						<li class="active"><a class="ajaxloads btn btn-default btn-lg "  data-toggle="tab" href="#article" style="border-right:none"><span class="hidden-xs"> &nbsp; Article</span> </a></li>	
							<li><a class="ajaxloads btn btn-default btn-lg "  data-toggle="tab" href="#gallery" style="border-right:none"><span class="hidden-xs"> &nbsp; Gallery</span> </a></li>
							<li><a class="ajaxloads btn btn-default btn-lg "  data-toggle="tab" href="#about" style="border-right:none"><span class="hidden-xs"> &nbsp; Members</span> </a></li>
							<li><a class="ajaxloads btn btn-default btn-lg "  data-toggle="tab" href="#activite" style="border-right:none"><span class="hidden-xs"> &nbsp; Activities</span> </a></li>
							
							<li><a class="ajaxloads btn btn-default btn-lg "  data-toggle="tab" href="#Contact" style="border-right:none"><span class="hidden-xs"> &nbsp;  History</span> </a></li>
							<li><a class="ajaxloads btn btn-default btn-lg "  data-toggle="tab" href="#Contact" style="border-right:none"><span class="hidden-xs"> &nbsp;  Contact</span> </a></li>
					</ul>
					
				</div>
			</div>
		</div>
	</div>
	<div id="profileView" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal_table">
			<div class="modal-content modal_cell">
				<div class="modal-content">
					<div class="container">
						<div class="row">
							<div class="col-sm-6 col-sm-offset-3">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
									<h3 id="myModalLabel"><i class="fa fa-user"></i> &nbsp; <?php echo $page['cname']; ?></h3>
								</div>
								<div class="modal-body">
									<div class="form-horizontal">
										<div class="form-group">
											<div class="col-xs-10 col-xs-offset-1">
												<h4><i class="fa fa-info-circle"></i> <?php echo phrase('account_details'); ?></h4>
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-xs-1 col-xs-offset-1 text-left"><i class="fa fa-quote-left"></i></label>
											<div class="col-xs-9">
												<?php echo $page['cname']; ?>
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-xs-1 col-xs-offset-1 text-left"><i class="fa fa-map-marker"></i></label>
											<div class="col-xs-9">
												<?php echo $page['cname']; ?>
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-xs-1 col-xs-offset-1 text-left"><i class="fa fa-mobile"></i></label>
											<div class="col-xs-9">
												<?php echo $page['cname']; ?>
											</div>
										</div>
										
									</div>
								</div>
								<div class="modal-footer">
									<div class="form-group">
										<div class="col-xs-4 text-left">
											<button type="button" data-dismiss="modal" class="btn btn-default"><i class="fa fa-times"></i> <?php echo phrase('close'); ?></button>
										</div>
										<div class="col-xs-8">
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<?php if($page['id'] == $this->session->userdata('userID')) { ?>
		
	<div id="profileEdit" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal_table" style="max-width:600px">
			<div class="modal-content modal_cell">
				<div class="modal-content">
					<div class="container">
						<div class="row">
							<div class="col-sm-6 col-sm-offset-3">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
									<h3 id="myModalLabel"><i class="fa fa-edit"></i> &nbsp; <?php echo phrase('complete_your_account'); ?></h3>
								</div>
								<form action="<?php echo base_url('user/edit_profile'); ?>" method="post" class="form-horizontal submitForm" data-save="<?php echo phrase('update'); ?>" data-saving="<?php echo phrase('updating'); ?>" data-alert="<?php echo phrase('unable_to_update_your_profile'); ?>">
									<div class="modal-body">
										<div class="form-group">
											<label class="control-label col-sm-4 text-right"><?php echo phrase('full_name'); ?></label>
											<div class="col-sm-6">
												<input type="text" class="form-control" name="full_name" value="<?php echo $page['cname']; ?>" />
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-sm-4 text-right"><?php echo phrase('gender'); ?></label>
											<div class="col-sm-6">
												<select name="gender" class="form-control">
													<option value=""><?php echo phrase('select_gender'); ?></option>
													<option value="l"<?php if($page['gender'] == 'l') echo ' selected'; ?>><?php echo phrase('man'); ?></option>
													<option value="p"<?php if($page['gender'] == 'p') echo ' selected'; ?>><?php echo phrase('woman'); ?></option>
												</select>
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-sm-4 text-right"><?php echo phrase('age'); ?></label>
											<div class="col-sm-6">
												<input type="text" class="form-control" name="age" value="<?php echo $page['age']; ?>" />
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-sm-4 text-right"><?php echo phrase('language'); ?></label>
											<div class="col-sm-6">
												<select name="language" class="form-control">
								
													<?php
														$fields = $this->db->list_fields('language');
														foreach($fields as $field)
														{
															if($field == 'phrase_id' || $field == 'phrase') continue;
													?>
													
														<option value="<?php echo $field;?>"<?php if($this->session->userdata('language') == $field) echo ' selected'; ?>><?php echo ucwords($field);?></option>
								
													<?php } ?>
													
												</select>
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-sm-4 text-right"><?php echo phrase('biography'); ?></label>
											<div class="col-sm-6">
												<textarea class="form-control" name="bio"><?php echo $page['bio']; ?></textarea>
											</div>
										</div>
										
										<div class="form-group">
											<div class="col-sm-6 col-sm-offset-4">
												<h4><?php echo phrase('contact_info'); ?></h4>
												<hr/>
											</div>
										</div>
										
										<div class="form-group">
											<label class="control-label col-sm-4 text-right"><?php echo phrase('phone_number'); ?></label>
											<div class="col-sm-6">
												<input type="text" class="form-control" name="mobile" value="<?php echo $page['mobile']; ?>" />
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-sm-4 text-right"><?php echo phrase('address'); ?></label>
											<div class="col-sm-6">
												<textarea class="form-control" name="address"><?php echo $page['address']; ?></textarea>
											</div>
										</div>
										
										<div class="form-group">
											<div class="col-sm-6 col-sm-offset-4">
												<h4><?php echo phrase('account_info'); ?></h4>
												<hr/>
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-sm-4 text-right"><?php echo phrase('email'); ?></label>
											<div class="col-sm-6">
												<input type="text" class="form-control" name="email" value="<?php echo $page['email']; ?>" />
											</div>
										</div>
										<?php if($this->session->userdata('newRegister')) { ?>
										
										<div class="form-group">
											<label class="control-label col-sm-4 text-right"><?php echo phrase('choose_username'); ?></label>
											<div class="col-sm-6">
												<input type="text" class="form-control" name="username" value="<?php echo $page['userName']; ?>" />
											</div>
										</div>
										
										<?php } ?>
										
										<div class="form-group">
											<label class="control-label col-sm-4 text-right"><?php echo phrase('password'); ?></label>
											<div class="col-sm-6">
												<input type="password" class="form-control" name="password" />
											</div>
										</div>
										<div class="form-group">
											<label class="control-label col-sm-4 text-right"><?php echo phrase('retype_password'); ?></label>
											<div class="col-sm-6">
												<input type="password" class="form-control" name="con_password" />
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-12">
												<div class="statusHolder"></div>
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<div class="col-xs-4 text-left">
											<button type="button" data-dismiss="modal" class="btn btn-default"><i class="fa fa-times"></i> <?php echo phrase('close'); ?></button>
										</div>
										<div class="col-xs-8">
											<input type="hidden" name="hash" value="<?php echo sha1($this->session->userdata('userName')); ?>" />
											<button class="btn btn-success submitBtn" type="submit"><i class="fa fa-save"></i> <?php echo phrase('save'); ?></button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script type="text/javascript">

		<?php if($this->session->userdata('newRegister')) { ?>
		$(window).load(function(){
			$('#profileEdit').modal('show');
		});
		<?php } else { ?>
		$(document).on('click', '.editProfile', function(){
			$('#profileEdit').modal('show');
		});
		<?php } ?>
		
	</script>

	<?php } ?>