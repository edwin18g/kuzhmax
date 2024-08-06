
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
	
	<div class="bg-info">
		<div class="container-fluid first-child">
			<div class="row">
				<div class="col-sm-7  hidden-xs">
					<span class="Page-title">User <i class="fa fa-angle-double-right"></i> Administrations <i class="fa fa-angle-double-right"></i></span>
				</div>
				<div class="col-sm-2">
					<div class="col-12-xs">
						<a href="<?php echo base_url('user/administration/add'); ?>" class="btn btn-md btn-block btn-primary newAdministration"><i class="fa fa-plus"></i> &nbsp; Add Administraion</a>
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
				<table class="table table-hover">
					<tr>
						<th>
							<?php echo phrase('title'); ?>
						</th>
						<th class="">
							Role
						</th>
						
						<th class="text-right col-xs-4">
							<?php echo phrase('action'); ?>
						</th>
					</tr>
					
					<?php
						if($administration)
						{
							foreach($administration as $c)
							{
								echo '
									<tr id="post' . $c['id'] . '">
										<td>
											<a href="' . base_url( $c['userName']) . '" target="_blank">' . $c['full_name'] . '</a>
										</td>
										<td class="">
											' . $a_type[$c['a_type']]. '
										</td>
										
										<td class="text-right col-xs-4">
											<div class="btn-group">
										<a class="btn btn-default btn-sm" href="'.base_url('user/administration/edit/' . $c['id']) .'"  data-push="tooltip" data-placement="top" title="edit"><i class="btn-icon-only fa fa-pencil"> </i></a>			
												<a class="btn btn-default btn-sm" href="javascript:void(0)" onclick="confirm_modal(\'' . base_url('user/administration/remove/' . $c['id']) . '\', \'post' . $c['id'] . '\')" data-push="tooltip" data-placement="top" title="' . phrase('remove') . '"><i class="btn-icon-only fa fa-times"> </i></a>
											</div>
										</td>
									</tr>
								';
							}
						}
					?>
					
				</table>
				
				<hr/>
				<div class="row">
					<div class="col-sm-12 text-center">
					
						<?php echo generatePagination('posts', null, ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID')), 'user', $limit, $offset); ?>
						
					</div>
				</div>
			</div>
		</div>
	</div>