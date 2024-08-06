
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
					
			<span class="Page-title">User <i class="fa fa-angle-double-right"></i> Pages <i class="fa fa-angle-double-right"></i></span>
				</div>
				<div class="col-sm-3">
					<div class="col-12-xs">
						<a href="<?php echo base_url('user/pages/add'); ?>" class="btn btn-md btn-block btn-primary newPost"><i class="fa fa-plus"></i> &nbsp; <?php echo phrase('new_page'); ?></a>
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
						<th class="hidden-xs">
							<?php echo phrase('date_created'); ?>
						</th>
						<th class="hidden-xs">
							<?php echo phrase('visits_count'); ?>
						</th>
						<th class="text-right col-xs-4">
							<?php echo phrase('action'); ?>
						</th>
					</tr>
					
					<?php
						$pages = getPosts('pages', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID')), null, $limit, $offset);
						if($pages)
						{
							foreach($pages as $c)
							{
								echo '
									<tr id="pages' . $c['pageID'] . '">
										<td>
											<a href="' . base_url('pages/' . $c['pageSlug']) . '" target="_blank">' . truncate($c['pageTitle'], 50) . '</a>
										</td>
										<td class="hidden-xs">
											' . date('d M Y', $c['timestamp']) . '
										</td>
										<td class="hidden-xs">
											' . $c['visits_count'] . '
										</td>
										<td class="text-right col-xs-4">
											<div class="btn-group">
												<a class="btn btn-default btn-sm newPost" href="' . base_url('user/pages/edit/' . $c['pageSlug']) . '" data-push="tooltip" data-placement="top" title="' . phrase('edit_page') . '"><i class="btn-icon-only fa fa-edit"> </i></a>
												<a class="btn btn-default btn-sm" href="javascript:void(0)" onclick="confirm_modal(\'' . base_url('user/pages/remove/' . $c['pageID']) . '\', \'page' . $c['pageID'] . '\')" data-push="tooltip" data-placement="top" title="' . phrase('remove') . '"><i class="btn-icon-only fa fa-times"> </i></a>
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
					
						<?php echo generatePagination('pages', null, ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID')), 'user', $limit, $offset); ?>
						
					</div>
				</div>
			</div>
		</div>
	</div>