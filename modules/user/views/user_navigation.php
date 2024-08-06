
	<div class="jumbotron" style="background:url(<?php echo base_url('uploads/users/covers/placeholder.jpg'); ?>) center center no-repeat;background-size:cover;-webkit-background-size:cover;background-position:fixed;padding-top:370px;padding-bottom:0;margin-bottom:0;width:100%">
	</div>

	

	

	<?php if($page['userID'] == $this->session->userdata('userID')) { ?>
		
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
												<input type="text" class="form-control" name="full_name" value="<?php echo $page['full_name']; ?>" />
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