
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
	
	
	<div class="container">
	
		<div class="row">
	<div class="bg-info">
		<div class="container-fluid first-child">
			<div class="row">
				<div class="col-sm-7  hidden-xs">
				   <span class="Page-title">User <i class="fa fa-angle-double-right"></i> Gallerys <i class="fa fa-angle-double-right"></i></span>
				</div>
				<div class="col-sm-2">
					<div class="col-12-xs">
						<a href="<?php echo base_url('user/snapshots/add'); ?>" class="btn btn-md btn-block btn-primary newPost"><i class="fa fa-plus"></i> &nbsp; Add Image </a>
					</div>
				</div>
			</div>
		</div>
	</div>
				
			<div class="col-md-12 sticky">
				<div class="row grid">

					<?php
						$n = 1;
						$snapshots = getPosts('snapshots', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID')), null, $limit, $offset);
						if($snapshots)
						{
							foreach($snapshots as $c)
							{
								$btn =($c['home_slider'] == 1)?"success":"default";
								echo '
									<div class="col-sm-3 col-xs-6 grid-item" id="snapshot' . $c['snapshotID'] . '">
										<div class="image-placeholder">
											<a href="' . base_url('snapshots/' . $c['snapshotSlug']) . '" class="ajax"><img width="100%" style="height: 150px;object-fit: cover;"  class="img-responsive" src="' . base_url('uploads/snapshots/thumbs/' . imageCheck('snapshots', $c['snapshotFile'], 1)) . '" alt="' . truncate($c['snapshotContent'], 50) . '" /></a>
											<div class="col-sm-12" style="border-top:1px solid #ddd;padding-top:10px">
												<div class="btn-group btn-group-justified">
													<a class="btn btn-'.$btn.' btn-sm " href="javascript:change_slider_status('.$c['snapshotID'].')" id="slider_'.$c['snapshotID'].'"><i class="btn-icon-only fa fa-home"></i>Slider</a>
													<a class="btn btn-default btn-sm newPost" href="' . base_url('user/snapshots/edit/' . $c['snapshotSlug']) . '"><i class="btn-icon-only fa fa-edit"></i> ' . phrase('edit') . '</a>
													<a class="btn btn-default btn-sm" href="javascript:void(0)" onclick="confirm_modal(\'' . base_url('user/snapshots/remove/' . $c['snapshotSlug']) . '\', \'snapshot' . $c['snapshotID'] . '\')"><i class="btn-icon-only fa fa-times"></i> ' . phrase('remove') . '</a>
												</div>
											</div>
										</div>
									</div>
								';
							}
						}
					?>
					
				</div>
				
				<hr/>
				<div class="row">
					<div class="col-sm-12 text-center">
					
						<?php echo generatePagination('snapshots', null, ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID')), 'user', $limit, $offset); ?>
						
					</div>
				</div>
			</div>
		</div>
	</div>

<script>
	function change_slider_status(id)
	{
		$('#slider_'+id).removeClass('btn-success');
		$('#slider_'+id).removeClass('btn-default');
		
		 $.ajax({
            url:'<?php echo base_url('user/snapshots/change_status') ?>',
            type: "POST",
            data: {"is_ajax": true, 'snapshotID': id},
            success: function (response) {
            	var data = $.parseJSON(response);
    $('#slider_'+id).addClass(data['class']);
		            
            }
        });
	}
</script>