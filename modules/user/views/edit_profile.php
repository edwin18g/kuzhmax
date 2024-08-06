
	<?php foreach($profile as $row) { ?>
	
	<div class="bg-info">
		<div class="container-fluid first-child">
			<div class="row">
				<div class="col-sm-7  hidden-xs">
					
						<span class="Page-title">User <i class="fa fa-angle-double-right"></i> <?php echo phrase('edit_profile'); ?> <i class="fa fa-angle-double-right"></i></span>
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
				<form action="<?php echo base_url('user/edit_profile'); ?>" enctype="multipart/form-data" method="post" class="form-horizontal submitForm" data-save="<?php echo phrase('update'); ?>" data-saving="<?php echo phrase('updating'); ?>" data-alert="<?php echo phrase('unable_to_update_profile'); ?>">
					<div class="form-group">
						<div class="col-sm-8 col-sm-offset-4">
							<h4><i class="fa fa-user"></i> <?php echo phrase('basic_info'); ?></h4>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4"><?php echo phrase('full_name'); ?></label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="full_name" value="<?php echo set_value('full_name', $row['full_name']); ?>" />
							<?php echo form_error('full_name', '<div class="alert alert-danger">', '</div>'); ?>
						</div>
					</div>
					
					<?php if($this->session->userdata('newRegister')) { ?>
					
					<div class="form-group">
						<label class="control-label col-sm-4"><?php echo phrase('choose_username'); ?></label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="username" value="<?php echo set_value('username', $page['userName']); ?>" />
							<?php echo form_error('username', '<div class="alert alert-danger">', '</div>'); ?>
						</div>
					</div>
					
					<?php } ?>
						<div class="form-group">
						<label class="control-label col-sm-4">Father Name </label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="pr_father_name" value="<?php echo set_value('pr_father_name', $row['pr_father_name']); ?>" />
						
						</div>
					</div>
						<div class="form-group">
						<label class="control-label col-sm-4">Mother Name </label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="pr_mother_name" value="<?php echo set_value('pr_mother_name', $row['pr_mother_name']); ?>" />
						
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4">Date of Birth </label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="pr_birth_date" value="<?php echo set_value('pr_birth_date', $row['pr_birth_date']); ?>" />
						
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4">Birth  Place</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="pr_birth_place" value="<?php echo set_value('pr_birth_place', $row['pr_birth_place']); ?>" />
						
						</div>
					</div>
						<div class="form-group">
						<label class="control-label col-sm-4">
						Seminary</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="pr_seminary" value="<?php echo set_value('pr_seminary', $row['pr_seminary']); ?>" />
						
						</div>
					</div>
						<div class="form-group">
						<label class="control-label col-sm-4">
						Ordination Date</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="pr_ordination_date" value="<?php echo set_value('pr_ordination_date', $row['pr_ordination_date']); ?>" />
						
						</div>
					</div>
						<div class="form-group">
						<label class="control-label col-sm-4">
						 Place of Ordination</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="pr_place_ordination" value="<?php echo set_value('pr_place_ordination', $row['pr_place_ordination']); ?>" />
						
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4">
						 Ordination By</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="pr_ordination_by" value="<?php echo set_value('pr_ordination_by', $row['pr_ordination_by']); ?>" />
						
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4">
						 Parish</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="pr_parish" value="<?php echo set_value('pr_parish', $row['pr_parish']); ?>" />
						
						</div>
					</div>
					<div class="form-group hidden">
						<label class="control-label col-sm-4"><?php echo phrase('gender'); ?></label>
						<div class="col-sm-8">
							<select name="gender" class="form-control">
								<option value=""><?php echo phrase('select_gender'); ?></option>
								<option value="l" selected><?php echo phrase('man'); ?></option>
								
							</select>
							<?php echo form_error('gender', '<div class="alert alert-danger">', '</div>'); ?>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4"><?php echo phrase('age'); ?></label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="age" value="<?php echo set_value('age', $row['age']); ?>" />
							<?php echo form_error('age', '<div class="alert alert-danger">', '</div>'); ?>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4"><?php echo phrase('language'); ?></label>
						<div class="col-sm-8">
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
							<?php echo form_error('language', '<div class="alert alert-danger">', '</div>'); ?>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4"><?php echo phrase('biography'); ?></label>
						<div class="col-sm-8">
							<textarea class="form-control" name="bio"><?php echo set_value('bio', $row['bio']); ?></textarea>
							<?php echo form_error('bio', '<div class="alert alert-danger">', '</div>'); ?>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-8 col-sm-offset-4">
							<br />
							<h4><i class="fa fa-phone"></i> <?php echo phrase('contact_info'); ?></h4>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4"><?php echo phrase('phone_number'); ?></label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="mobile" value="<?php echo set_value('mobile', $row['mobile']); ?>" />
							<?php echo form_error('mobile', '<div class="alert alert-danger">', '</div>'); ?>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4"><?php echo phrase('address'); ?></label>
						<div class="col-sm-8">
							<textarea class="form-control" name="address"><?php echo set_value('address', $row['address']); ?></textarea>
							<?php echo form_error('address', '<div class="alert alert-danger">', '</div>'); ?>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-8 col-sm-offset-4">
							<br />
							<h4><i class="fa fa-info-circle"></i> <?php echo phrase('account_info'); ?></h4>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4"><?php echo phrase('email'); ?></label>
						<div class="col-sm-8">
							<input type="text" class="form-control" name="email" value="<?php echo set_value('email', $row['email']); ?>" />
							<?php echo form_error('email', '<div class="alert alert-danger">', '</div>'); ?>
						</div>
					</div>
					
					<div class="form-group">
						<label class="control-label col-sm-4"><?php echo phrase('password'); ?></label>
						<div class="col-sm-8">
							<input type="password" class="form-control" name="password" />
							<?php echo form_error('password', '<div class="alert alert-danger">', '</div>'); ?>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-4"><?php echo phrase('retype_password'); ?></label>
						<div class="col-sm-8">
							<input type="password" class="form-control" name="con_password" />
							<?php echo form_error('con_password', '<div class="alert alert-danger">', '</div>'); ?>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-12 statusHolder">
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-12 text-right">
							<input type="hidden" name="hash" value="<?php echo sha1($this->session->userdata('userName')); ?>" />
							<button type="submit" class="btn btn-primary btn-lg submitBtn"><i class="fa fa-check-circle"></i> <?php echo phrase('update_profile'); ?></button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	
	<?php } ?>