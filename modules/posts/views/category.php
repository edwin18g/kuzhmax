
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
	
	<div class="page-name-block"> 
		<div class="page-content-block ">
			<span class="Page-title">Posts <i class="fa fa-angle-double-right"></i></span> 
				<span class="Page-title"><?php echo $meta['title']; ?> <i class="fa fa-angle-double-right"></i></span> 
			
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-2 hidden-xs hidden-sm sticky">
				<h4><i class="fa fa-sitemap"></i> &nbsp; <?php echo phrase('categories'); ?></h4>
				
				<?php echo widget_sidebarCategory(); ?>
					
			</div>
			<div class="col-md-7 nomargin nomargin-xs sticky">
			
				<?php if(getHeadlineNews($category, 5) != null): ?>
				
				<h4 class="hidden-xs"><i class="fa fa-thumb-tack"></i> &nbsp; <?php echo phrase('editor_choices'); ?></h4>
				<div class="row">
					<div class="col-sm-12 nomargin-xs nopadding-xs">
					
						<?php echo getHeadlineNews(getCategoryIDBySlug($this->uri->segment(2)), 5); ?>
							
					</div>
				</div>
				
				<?php endif; ?>
				
				<div class="grid row">
				
				<?php 
					$posts 	= getCategoryNews($category, $limit, $offset);
					$n		= 1;
					foreach($posts as $c)
					{
						$post_tag	= '';
						$hex		= '#' . random_hex();
						if($c['tags'] != '')
						{
							$tags = explode(',', $c['tags']);
							foreach($tags as $tag)
							{
								$post_tag = '<a href="' . base_url('search/' . $tag) . '" class="ajaxloads"><span class="badge"><i class="fa fa-tag"></i> ' . truncate($tag, 12) . '</span></a>';
							}
						}
						else
						{
							foreach(json_decode($c['categoryID']) as $key => $val)
							{
								$post_tag = '<a href="' . base_url('posts/' . getCategorySlugByID($val)) . '" class="ajaxloads"><span class="badge"><i class="fa fa-tag"></i> ' . truncate(getCategoryByID($val), 12) . '</span></a> ';
							}
						}
						if($n == 7)
						{
							echo '
								<div class="col-sm-6 grid-item">
									<div class="image-placeholder">
									
										' . widget_randomAds() . '
										
									</div>
								</div>
							';
						}
						echo '
							<div class="col-sm-6 grid-item">
								<div class="first image-placeholder relative">
									<div class="col-sm-12 nomargin nogap_ltr rounded-top">
										<div class="row article_cover" style="background:' . $hex . ' url(' . getFeaturedImage($c['postID'], 1) . ') center center no-repeat;background-size:cover;-webkit-background-size:cover">
											<div class="col-sm-12 nomargin absolute text-shadow" style="width:100%">
												<div class="col-xs-2">
													<a href="' . base_url(getUsernameByID($c['contributor'])) . '" class="ajaxloads hoverCard">
														<img src="' . base_url('uploads/users/thumbs/' . imageCheck('users', getUserPhoto($c['contributor']), 1)) . '" style="height:40px;width:40px" class="img-rounded img-bordered" alt="" />
													</a>
												</div>
												<div class="col-xs-10 relative">
													<h2 class="pull-right">#' . $c['visits_count'] . '</h2>
													<a href="' . base_url(getUsernameByID($c['contributor'])) . '" class="ajaxloads hoverCard">
														<b>' . getFullnameByID($c['contributor']) . '</b> 
													</a>
													<br />
													<small>@' . getUsernameByID($c['contributor']) . ' - ' . time_since($c['timestamp']) . '</small>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-12">
										<a href="' . base_url('posts/' . $c['postSlug']) . '" class="ajaxloads">
											<h4 class="nomargin"><b>'.truncate($c['postTitle'], 30) . '</b></h4>
										</a>
										<p class="meta">
											'.truncate($c['postExcerpt'], 60).'
											<br />
											<b><i class="fa fa-clock-o"></i>'.time_since($c['timestamp']) . ' <span class="pull-right">' . $post_tag . '</span></b>
										</p>
									</div>
								</div>
							</div>
						';
						
						$n++;
					}
				?>
				
				</div>
				<div class="row">
					<div class="col-sm-12 text-center">
					
						<?php echo generatePagination('posts', $category, null, null, $limit, $offset); ?>
						
					</div>
				</div>
			</div>
		
		</div>
	</div>