
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
		<div class="container first-child">
			<div class="row">
				<div class="col-md-9 hidden-xs">
					<h2><i class="fa fa-image"></i> &nbsp; <?php echo phrase('snapshots'); ?></h2>
				</div>
				<div class="col-md-3 hidden">
					<?php if(!$this->session->userdata('loggedIn')) { ?>
						<a href="#login" class="btn btn-lg btn-block btn-primary" data-toggle="modal"><i class="fa fa-upload"></i> &nbsp; <?php echo phrase('upload_snapshot'); ?></a>
					<?php } else { ?>
						<a href="<?php echo base_url('user/snapshots/add'); ?>" class="btn btn-lg btn-block btn-primary newPost"><i class="fa fa-upload"></i> &nbsp; <?php echo phrase('upload_snapshot'); ?></a>
					<?php } ?>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-12 sticky">
			
				<?php
					$posts 	= getPosts('snapshots', null, null, $limit, $offset);
					$n		= 1;
					if(!empty($posts)){
					foreach($posts as $c)
					{
						if($n == 7)
						{
							echo '
								<div class="row">
									<div class="col-sm-3 text-right sticky hidden-xs">
									</div>
									<div class="col-sm-9 sticky">
									
										' . widget_randomAds() . '
										
									</div>
								</div>
							';
						}
						
						echo '
							<div class="col-sm-3">
								
								<div class="col-sm-12 sticky">
									<div class="first image-placeholder">
										<a href="' . base_url('snapshots/' . $c['snapshotSlug']).'" class="ajax relative" style="display:block">
											' . (strtolower(substr($c['snapshotFile'], -3)) == 'gif' ? '<span class="gif_play"></span>' : '') . '
											<img width="100%" class="img-responsive rounded-top"  style="height: 100px;object-fit: cover;margin:0;" src="' . base_url('uploads/snapshots/thumbs/' . imageCheck('snapshots', $c['snapshotFile'], 1)) . '" alt="' . truncate($c['snapshotContent'], 30) . '"/>
										</a>
										<div class="col-sm-12">
											<p>
												<span class="badge pull-right">@' . time_since($c['timestamp']) . '</span>
												' . special_parse(truncate($c['snapshotContent'], 15)) . '
											</p>
											<div class="btn-group btn-group-justified">
												<a href="' . base_url('snapshots/' . $c['snapshotSlug']).'" class="btn btn-default ajax"><i class="fa fa-comments"></i> <span class="comments-count-snapshots' . $c['snapshotID'] . '">' . countComments('snapshots', $c['snapshotID']) . '</span> <span class="hidden-xs">' . phrase('comments') . '</span></a>
												<a class="like like-snapshots' . $c['snapshotID'] . ' btn btn-default' . (is_userLike('snapshots', $c['snapshotID']) ? ' active' : '') . '" href="' . base_url('user/like/snapshots/' . $c['snapshotID']) . '" data-id="snapshots' . $c['snapshotID'] . '"><i class="like-icon fa fa-thumbs-up"></i> <span class="likes-count">' . countLikes('snapshots', $c['snapshotID']) . '</span> <span class="hidden-xs">' . phrase('likes') . '</span></a>
												<a href="' . base_url('user/repost/snapshots/' . $c['snapshotID']) . '" class="btn btn-default repost" data-id="' . $c['snapshotID'] . '"><i class="fa fa-retweet"></i> <span id="reposts-count' . $c['snapshotID'] . '">' . countReposts('snapshots', $c['snapshotID']) . '</span> <span class="hidden-xs">' . phrase('reposts') . '</span></a>
											</div>
											<br />
											
										</div>
									</div>
								</div>
							</div>
						';
						
						$n++;
					}}
				?>
				
				<div class="row">
					<div class="col-sm-9 col-sm-offset-3 text-center">
					
						<?php echo generatePagination('snapshots', null, null, null, $limit, $offset); ?>
						
					</div>
				</div>
					
			</div>
			
			
		</div>
	</div>