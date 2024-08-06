
	<?php /*<div class="jumbotron hidden">
		<div class="container first-child">
			<div class="row">
				<div class="col-md-2 hidden-xs hidden-sm">
					<div>
						<h4><i class="fa fa-certificate"></i> &nbsp;<?php echo phrase('contributors'); ?></h4>
					
						<?php echo widget_topContributors(7); ?>
						
					</div>
				</div>
				<div class="col-md-7 nomargin-xs">
					<div class="row-xs">
						<?php
							if(getHeadlineNews('all', 5) !== null)
							{
								echo getHeadlineNews('all', 5);
							}
						?>
					</div>
				</div>
				<div class="col-md-3">
					<h4><i class="fa fa-comments-o"></i> &nbsp;<?php echo phrase('most_commented'); ?></h4>
					<?php echo widget_mostCommentNews(5, 0); ?>
				</div>
			</div>
		</div>
	</div> */ ?>
	<div class="container">
		<div class="row visible-xs visible-sm">
			<div class="col-md-2">
				<a href="<?php echo base_url('posts'); ?>" class="ajaxloads btn btn-primary btn-block"><i class="fa fa-newspaper-o"></i> <?php echo phrase('read_another_articles'); ?></a>
			</div>
			<hr />
		</div>
		<div class="row">
			<div class="col-md-2 hidden-xs hidden-sm sticky ">
				<h4><i class="fa fa-tags"></i> &nbsp;<?php //echo phrase('trending_hashtags'); ?></h4>
				<ul style="list-style:none;padding-left:0;margin:0">
				<li><h4><a href="#">Priests</a></h4></li>
				<li><h4><a href="#">Parishes</a></h4></li>
				<li><h4><a href="#">Organizations</a></h4></li>
				<li><h4><a href="#">History</a></h4></li>
				<li><h4><a href="#">Gallery</a></h4></li>
				<li><h4><a href="#">Contact Us</a></h4></li>
				</ul>
				<?php //echo widget_hashTags(true, 10); ?>
			</div>
			<div class="col-md-7 sticky">
				<?php if(getNewSnapshotHome(5) !== null): ?>
					<!-- <h4><i class="fa fa-image"></i> &nbsp;<?php echo phrase('new_from_snapshots'); ?></h4> -->
					<div class="row-xs">
						<?php echo getNewSnapshotHome(5); ?>
					</div>
					<div class="row visible-xs visible-sm">
						<div class="col-md-2">
							<br />
							<a href="<?php echo base_url('snapshots'); ?>" class="ajaxloads btn btn-primary btn-block"><i class="fa fa-newspaper-o"></i> <?php echo phrase('view_another_snapshots'); ?></a>
						</div>
					</div>
				
				<?php endif; ?>
				
				<div class="separator">
					<span class="text-muted"><?php echo phrase('more_than'); ?> 1000 <?php echo phrase('people_became_reporter'); ?></span>
				</div>
				
				<div class="row">
					<div class="col-sm-5 sticky">
						<div class="image-placeholder">
							<div class="col-sm-12">
								<h4><i class="fa fa-users"></i> &nbsp;<?php echo phrase('last_users'); ?></h4>
									
								<?php echo widget_lastUsers(10, 0); ?>
								
								<br />
								<a href="<?php echo base_url('users'); ?>" class="ajaxloads btn btn-default btn-block"><i class="fa fa-search"></i> <?php echo phrase('search_user'); ?></a>
							</div>
						</div>
					</div>
					<div class="col-sm-7 sticky hidden">
						<div class="image-placeholder">
							<div class="col-sm-12">
								<h4><i class="fa fa-retweet"></i> &nbsp;<?php echo phrase('updates_stream'); ?></h4>
										
								<?php echo widget_updateStream(6, 0); ?>
								
								<br /><br />
								<h4><i class="fa fa-paperclip"></i> &nbsp;<?php echo phrase('new_from_open_letters'); ?></h4>
									
								<?php echo widget_newOpenletters(10, 0); ?>
								
								<br />
								<a href="<?php echo base_url('openletters'); ?>" class="ajaxloads btn btn-default btn-block"><i class="fa fa-list"></i> <?php echo phrase('read_another_openletter'); ?></a>
							</div>
						</div>
					</div>
				</div>
				
				<?php // echo widget_randomAds(); ?>
				
				<div class="image-placeholder hidden">
					<div class="col-sm-12">
						<h4><i class="fa fa-eye"></i> &nbsp;<?php echo phrase('people_are_watching'); ?></h4>
				
						<?php echo widget_activeTV(4, 0, null, 'col-xs-6 col-sm-3'); ?>
						
						<br />
						<a href="<?php echo base_url('tv'); ?>" class="ajaxloads btn btn-default btn-block"><i class="fa fa-list"></i> <?php echo phrase('watch_another_tv'); ?></a>
					</div>
				</div>
			</div>
			<div class="col-md-3 hidden-xs hidden-sm sticky hidden">
				
				<h4><i class="fa fa-eye"></i> &nbsp;<?php echo phrase('most_views'); ?></h4>
				<?php echo widget_mostViewNews(); ?>
				<hr />
				<h4><i class="fa fa-clock-o"></i> &nbsp;<?php echo phrase('latest_articles'); ?></h4>
				<?php echo widget_sidebarNews(); ?>
			
				<?php // echo widget_randomAds(); ?>
				
			</div>
		</div>
	</div>
