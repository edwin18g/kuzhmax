
<style>
	.header-card{
		    display: flex;
    justify-content: space-between;
	}
</style>
	
	<br />

	<hr />
	<div class="container">
		<div class="row">
				<?php foreach($post as $page): ?>
			<!--<div class="col-md-1 sticky hidden-xs hidden-sm">-->
			<!--	<div class="pw-server-widget rounded" data-id="wid-puio7d2l"></div>-->
			<!--</div>-->
		
			<div class="col-md-6 col-md-offset-3 nopadding-xs sticky">
				<div class="post-singlepage">
				<div class="col-md-12 text-center">
		
				
			<div class="col-md-12">
		
				<div class="header-card">
					<div>
						<h3 class="nomargin"><?php echo $page['postTitle']; ?></h3>
						<p class="meta">
					<i class="fa fa-info-circle"></i> &nbsp; <?php echo time_since($page['timestamp']); ?>, <?php echo $page['visits_count'] . ' ' . phrase('readers'); ?>
				</p>
					</div>
						
					<div class="text-center-xs pull-right">
					<div class="dropdown">
    <button type="button" data-toggle="dropdown" class="btn btn-link dropdown-toggle" aria-expanded="true"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
   <ul class="dropdown-menu">
    <li>	<a href="javascript:void(0)" class="btn btn-link btn-sm" style="margin-top:0"><b><i class="fa fa-share"></i> <?php echo phrase('share'); ?></b></a></li>
   <?php if($page['contributor'] == $this->session->userdata('userID') || $this->session->userdata('user_level') == 1) { ?>
							<li><a href="<?php echo base_url('user/posts/edit/' . $page['postID']); ?>" class="btn btn-link btn-sm " style="margin-top:0"><b><i class="fa fa-edit"></i> <?php echo phrase('edit'); ?></b></a></li>
						<?php } ?>
   
    <li><a href="javascript:void(0)" class="btn btn-link btn-sm" style="margin-top:0"><b><i class="fa fa-ban"></i> <?php echo phrase('report'); ?></b></a></li>
  </ul>
<div class="btn-group btn-group-sm-justified">
					
						
						
					</div>
</div>
					
				</div>
				</div>
				
				
			
			</div>
			
			</div>
				
				<div class="blog_article image-placeholder-sm">
					<div class="col-sm-12">
						<div class="text-justify">
						
							<?php echo special_parse($page['postContent']); ?>
							
							<?php // echo widget_randomAds(); ?>
						
						</div>
						<p>
						<?php
							if($page['tags'] != '')
							{
								$tags = explode(',', $page['tags']);
								foreach($tags as $tag)
								{
									echo '<a href="' . base_url('search/' . $tag) . '" class="ajaxloads"><span class="badge"><i class="fa fa-tag"></i> ' . $tag . '</span></a> ';
								}
							}
							else
							{
								foreach(json_decode($page['categoryID']) as $key => $val)
								{
									echo '<a href="' . base_url('category/' . getCategorySlugByID($val)) . '" class="ajaxloads"><span class="badge"><i class="fa fa-tag"></i> ' . getCategoryByID($val) . '</span></a> ';
								}
							}
						?>
						</p>
					</div>
					<div class="clearfix"></div>
					<?php if(getUserBio($page['contributor'])): ?>
					<hr />
					<div class="col-sm-12">
						<div class="row">
							<div class="col-xs-2">
								<a href="<?php echo base_url(getUsernameByID($page['contributor'])); ?>" class="ajaxloads hoverCard"><img src="<?php echo base_url('uploads/users/thumbs/' . imageCheck('users', getUserPhoto($page['contributor']), 1)); ?>" alt="" class="rounded img-responsive" /></a>
							</div>
							<div class="col-xs-10">
								<b><i><?php echo getUserBio($page['contributor']); ?></i></b>
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
					<hr />
					<?php endif; ?>
					
					
					<div class="clearfix"></div>
				</div>
				</div>
			</div>
				<?php endforeach; ?>
		
		</div>
	</div>

	

	
