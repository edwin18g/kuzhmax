	<?php /*echo ($this->input->is_ajax_request() ? $this->load->view('dashboard_navigation') : $template['partials']['navigation']);*/ ?>
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
	
	<style>
		.flex-row {display: flex;
    align-items: center;
    padding: 10px;
    background: #fff;
    justify-content: space-between;}
    .column-title {
    	width: 72%;
    }
    .column-date {
    	width: 11%;
    }
    .min-height {
    	height: 450px;
    }
	</style>
	<div class="container">
		<div class="row">
		
			<div class="col-md-7 col-md-offset-2">
				<div class="bg-info">
		<div class="container-fluid first-child">
			<div class="row">
				<div class="col-sm-7  hidden-xs">
				   <span class="Page-title">User <i class="fa fa-angle-double-right"></i> Posts <i class="fa fa-angle-double-right"></i></span>
				</div>
			
			</div>
		</div>
	</div>
				<div class="table table-hover min-height">
		
					
					<?php
						$posts = getPosts('posts', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID')), null, $limit, $offset);
						if($posts)
						{
							foreach($posts as $c)
							{
								echo '
									<div id="post' . $c['postID'] . '" class="flex-row">
										<span class="column-title">
											<a href="' . base_url('posts/' . $c['postSlug']) . '" target="_blank">' .$c['postTitle'] . '</a>
										</span>
										<span class="hidden-xs column-date">
											' . date('d M Y', $c['timestamp']) . '
										</span>
									
										<span class="text-right col-xs-4">
											<div class="btn-group">
												<a class="btn btn-default btn-sm " href="' . base_url('user/posts/edit/' . $c['postID']) . '" data-push="tooltip" data-placement="top" title="' . phrase('edit_post') . '"><i class="btn-icon-only fa fa-edit"> </i></a>
												<a class="btn btn-default btn-sm" href="javascript:void(0)" onclick="confirm_modal(\'' . base_url('user/posts/remove/' . $c['postID']) . '\', \'post' . $c['postID'] . '\')" data-push="tooltip" data-placement="top" title="' . phrase('remove') . '"><i class="btn-icon-only fa fa-times"> </i></a>
											</div>
										</span>
									</div>
								';
							}
						}
					?>
					
				</div>
				
				<hr/>
				<div class="row">
					<div class="col-sm-12 text-center">
					
						<?php echo generatePagination('posts', null, ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID')), 'user', $limit, $offset); ?>
						
					</div>
				</div>
			</div>
			<div class="col-sm-3">
					<div class="col-12-xs">
						<a href="<?php echo base_url('user/posts/add'); ?>" class="btn btn-md btn-block btn-primary "><i class="fa fa-plus"></i> &nbsp; <?php echo phrase('write_article'); ?></a>
					</div>
			</div>
		</div>
	</div>