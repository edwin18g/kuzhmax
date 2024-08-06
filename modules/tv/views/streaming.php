
	<?php foreach($post as $page): ?>
	<!-- Flowplayer library -->
	
	
	<?php if(!isset($modal)){ ?>

		<div class="jumbotron bg-dark text-center first-child">
			<div class="">
				<div class="row">
					<div class=" nomargin-xs nopadding-xs ocdc2475">
						
				
		
						
						
					<iframe id="video_tage" width="100%" height="539" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					
					</div>
					
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-sm-12 nomargin-xs nopadding-xs sticky">
							<div class="image-placeholder-sm">
								<div class="col-sm-12">
									<div class="row">
										<div class="col-xs-2">
											<img src="<?php echo base_url('uploads/users/thumbs/' . imageCheck('users', getUserPhoto($page['contributor']), 1)); ?>" width="40" height="40" alt="" class="rounded" />
										</div>
										<div class="col-xs-10">
											<a href="<?php echo base_url(getUsernameByID($page['contributor'])); ?>" class="ajaxloads hoverCard"><b><?php echo getFullNameByID($page['contributor']); ?></b> <small class="text-muted">@<?php echo getUsernameByID($page['contributor']); ?></small></a>
											<br />
											<small class="text-muted">
											<i class="fa fa-newspaper-o"></i> <?php echo (countPosts('posts', $page['contributor']) + countPosts('snapshots', $page['contributor'])); ?>
											/ <i class="fa fa-users"></i> <?php echo getUserFollowers('followers', $page['contributor']); ?>
											/ <i class="fa fa-clock-o"></i> <?php echo time_since($page['timestamp']); ?>
											/ <i class="fa fa-eye"></i> <?php echo $page['visits_count']; ?></small>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
									
											<?php
												echo special_parse($page['tvContent']);
											?>
											
										</div>
									</div>
									<div class="row" id="appendComment">
										<div class="col-sm-12">
											<div class="btn-group btn-group-justified">
												<a href="javascript:void(0)" class="btn btn-default"><i class="fa fa-comments"></i> <span class="comments-count-tv<?php echo $page['tvID']; ?>"><?php echo countComments('tv', $page['tvID']); ?></span> <span class="hidden-xs"><?php echo phrase('comments'); ?></span></a>
												<a class="like like-tv<?php echo $page['tvID']; ?> btn btn-default<?php echo (is_userLike('tv', $page['tvID']) ? ' active' : ''); ?>" href="<?php echo base_url('user/like/tv/' . $page['tvID']); ?>" data-id="tv<?php echo $page['tvID']; ?>"><i class="like-icon fa fa-thumbs-up"></i> <span class="likes-count"><?php echo countLikes('tv', $page['tvID']); ?></span> <span class="hidden-xs"><?php echo phrase('likes'); ?></span></a>
												<a href="<?php echo base_url('user/repost/tv/' . $page['tvID']); ?>" class="btn btn-default repost" data-id="<?php echo $page['tvID']; ?>"><i class="fa fa-retweet"></i> <span id="reposts-count<?php echo $page['tvID']; ?>"><?php echo countReposts('tv', $page['tvID']); ?></span> <span class="hidden-xs"><?php echo phrase('reposts'); ?></span></a>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
												
											<?php
												echo getComments('tv', $page['tvID']);
											?>
												
										</div>
									</div>
								</div>
							</div>
						</div>
				
						</div>
					</div>
				</div>
			</div>
		</div>
	<?php }?>
	
	<?php if($this->session->flashdata('success')) { ?>
	<div id="postShare" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal_table" style="max-width:500px">
			<div class="modal-dialog modal_cell">
				<div class="modal-content">
					<div class="modal-body rounded text-center">
						<a href="javascript:void(0)" class="btn btn-icon-only pull-right" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></a>
						<h4>
							<b><?php echo phrase('sharing_is_caring'); ?></b>
						</h4>
						<p>
							<?php echo phrase('sharing_is_caring_channel_desc'); ?>
						</p>
						<div class="pw-server-widget rounded" data-id="wid-puio7d2l"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript">
		$(window).load(function(){
			$('#postShare').modal('show');
			
			
		
   
			
			
		});
	</script>
	<?php } ?>
	
	
		<script type="text/javascript"> 
	
	
	
		function getId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);

        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }
    
    var  videourl = '<?php echo $page['tvURL']?>';
	 var viid =  getId(videourl);
    document.getElementById('video_tage').src = 'https://www.youtube.com/embed/'+viid;//'https://www.youtube.com/embed/'+viid;
	</script>
	<?php endforeach; ?>
