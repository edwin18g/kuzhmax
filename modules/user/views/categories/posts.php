
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
		<div class="containe-fluidr first-child">
			<div class="row">
				<div class="col-sm-7 col-sm-offset-1 hidden-xs">
					
					<span class="Page-title">User <i class="fa fa-angle-double-right"></i> <?php echo phrase('post_categories'); ?> <i class="fa fa-angle-double-right"></i></span>
				</div>
				<div class="col-sm-2">
					<div class="col-12-xs">
						<a href="<?php echo base_url('user/categories/add'); ?>" class="btn btn-md btn-block btn-primary newPost"><i class="fa fa-plus"></i> &nbsp; <?php echo phrase('new_category'); ?></a>
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
							<?php echo phrase('category_title'); ?>
						</th>
						<th class="hidden-xs">
							<?php echo phrase('descriptions'); ?>
						</th>
						<th class="hidden-xs">
							<?php echo phrase('posts_total'); ?>
						</th>
						<th class="hidden-xs">
							<?php echo phrase('date_created'); ?>
						</th>
						<th class="text-right col-xs-4">
							<?php echo phrase('action'); ?>
						</th>
					</tr>
					
					<?php
						$n = 1;
						$categories = getPosts('categories', null, null, $limit, $offset);
						if($categories)
						{
							foreach($categories as $c)
							{
								echo '
									<tr class="category' . $c['categoryID'] . '">
										<td>
											<a href="' . base_url('posts/' . $c['categorySlug']) . '" target="_blank">' . truncate($c['categoryTitle'], 50) . '</a>
										</td>
										<td class="hidden-xs">
											' . truncate($c['categoryDescription'], 80) . '
										</td>
										<td class="hidden-xs">
											' . $this->db->like('categoryID', '"' . $c['categoryID'] . '"')->get('posts')->num_rows() . '
										</td>
										<td class="hidden-xs">
											' . date('d M Y', $c['timestamp']) . '
										</td>
										<td class="text-right col-xs-4">
											<div class="btn-group">
												<a class="btn btn-default btn-sm newPost" href="' . base_url('user/categories/edit/' . $c['categorySlug']) . '" data-push="tooltip" data-placement="top" title="' . phrase('edit_post') . '"><i class="btn-icon-only fa fa-edit"> </i></a>
												<a class="btn btn-default btn-sm" href="javascript:void(0)" onclick="confirm_modal(\'' . base_url('user/categories/remove/' . $c['categoryID']) . '\', \'category' . $c['categoryID'] . '\', \'category' . $c['categoryID'] . '\')" data-push="tooltip" data-placement="top" title="' . phrase('remove') . '"><i class="btn-icon-only fa fa-times"> </i></a>
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
					
						<?php echo generatePagination('categories', null, ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID')), 'user', $limit, $offset); ?>
						
					</div>
				</div>
			</div>
		</div>
	</div>