
	<?php
		$totSegments = $this->uri->total_segments();
		$uriSegments = $this->uri->segment($totSegments);
		if(!is_numeric($uriSegments)){
			$offset = 0;
		} else if(is_numeric($uriSegments)){
			$offset = $this->uri->segment($totSegments);
		}
		if(is_numeric($this->uri->segment(2)) && strlen($this->uri->segment(2)) == 10)
		{
			$timestamp	= $this->uri->segment(2);
		}
		else
		{
			$timestamp	= null;
		}
		$limit = 20;
		
		foreach($profile as $page):
			?>
				<div class="container-fluid" style="padding:0px">
					<?php 
		include 'user_navigation.php';
	?>
	</div>
	<style>
		.main {
    background: #FFF;
    position: relative;
    z-index: 3;
}
.main-raised {
   margin-top: -60px;
    border-radius: 6px;
    box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
}

.row-flex {
	display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.ml-auto, .mx-auto {
    margin-left: auto!important;
}
.mr-auto, .mx-auto {
    margin-right: auto!important;
}
.profile-page .profile {
    text-align: center;
}
.profile-page .profile img {
    max-width: 160px;
    width: 100%;
    margin: 0 auto;
    -webkit-transform: translate3d(0,-50%,0);
    -moz-transform: translate3d(0,-50%,0);
    -o-transform: translate3d(0,-50%,0);
    -ms-transform: translate3d(0,-50%,0);
    transform: translate3d(0,-50%,0);
}
.rounded-circle {
    border-radius: 50%!important;
}
.img-fluid, .img-thumbnail {
   height: 250px;
    width: 250px;
    object-fit: contain;
}
.img-raised {
    box-shadow: 0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2);
}
img {
    vertical-align: middle;
    border-style: none;
}
.profile .name {
  
    text-align: center;
}
.title {
    margin-top: 30px;
    margin-bottom: 25px !important;
    min-height: 32px;
    color: #3C4858;
    font-weight: 700;
    font-family: "Roboto Slab","Times New Roman",serif;
}
.profile .avatar {
	    display: flex;
    justify-content: space-around;
}
}
.profile-page .profile-tabs {
    margin-top: 4.284rem;
}
.profile-tabs .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}

.profile-tabs .nav-pills, .profile-tabs .nav-tabs {
    border: 0;
    border-radius: 3px;
    padding: 0 15px;
}
.profile-tab .nav .nav-item {
    position: relative;
}
.justify-content-center {
    -webkit-box-pack: center!important;
    -ms-flex-pack: center!important;
    justify-content: center!important;
}

.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover {
    color: #fff !important;
    background-color: #9f59b0;
    border-radius: 3px;
    -webkit-border-radius: 3px;
     background-color: #9c27b0;
    box-shadow: 0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);
}
.nav-pills.nav-pills-icons .nav-item .nav-link {
    border-radius: 4px;
}
.nav-pills .nav-item .nav-link {
       line-height: 24px;
    font-size: 17px;
    font-weight: 700;
    min-width: 100px;
    color: #555;
    transition: all .3s;
    border-radius: 30px;
    padding: 10px 15px;
    text-align: center;
}
.nav-pills .nav-item i {
    display: block;
    font-size: 30px;
    padding: 15px 0;
}
.list-group li {text-align: left;}

.profile input[type=file] {
    display: block;
    opacity: 0;
    background: gainsboro;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 0;
}
	</style>
	<div class="container main main-raised">
		<div class="" style="position:relative">
		<div class="row" style=   " position: relative;
    width: 100%;
    display: flex;
    bottom: 150px;
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: column;margin:0px;">

				<div class="">
					<?php if($page['userID'] == $this->session->userdata('userID')) { ?>

							<div class="row row-flex">
							
	                <div class="col-md-6 ml-auto mr-auto">
        	           <div class="profile">
	                        <div class="avatar">
	                        			<form id="photoUpload" action="<?php echo base_url('user/uploads/photo'); ?>" method="post" enctype="multipart/form-data">
	                        		<?php echo '<img id="userfile_preview" src="' . base_url('uploads/users/' . imageCheck('users', getUserPhoto($page['userID']))) . '" class="img-raised rounded-circle img-fluid"  alt="" />'; ?>
	                           	<input onchange="readPhoto(this, 'userfile_preview');" type="file" name="userfile" accept="image/*" />
	                        </form>
	                        </div>
	                        <div class="name">
	                            <h3 class="title"><?php echo $page['full_name']?></h3>
								<h6><?php echo ($page['pr_parish'] != null)?$page['pr_parish']:'-' ; ?></h6>
								<a href="#pablo" class="btn btn-just-icon btn-link btn-dribbble"><i class="fa fa-dribbble"></i></a>
                                <a href="#pablo" class="btn btn-just-icon btn-link btn-twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#pablo" class="btn btn-just-icon btn-link btn-pinterest"><i class="fa fa-pinterest"></i></a>
	                        </div>
	                    </div>
    	            </div>
    	           
                </div>
					<?php } else { ?>
					<div class="row row-flex">
	                <div class="col-md-6 ml-auto mr-auto">
        	           <div class="profile">
	                        <div class="avatar">
	                        		<?php echo '<img src="' . base_url('uploads/users/' . imageCheck('users', getUserPhoto($page['userID']))) . '" class="img-raised rounded-circle img-fluid"  alt="" />'; ?>
	                           
	                        </div>
	                        <div class="name">
	                            <h3 class="title"><?php echo $page['full_name']?></h3>
								<h6><?php echo ($page['pr_parish'] != null)?$page['pr_parish']:'-' ; ?></h6>
								<a href="#pablo" class="btn btn-just-icon btn-link btn-dribbble"><i class="fa fa-dribbble"></i></a>
                                <a href="#pablo" class="btn btn-just-icon btn-link btn-twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#pablo" class="btn btn-just-icon btn-link btn-pinterest"><i class="fa fa-pinterest"></i></a>
	                        </div>
	                    </div>
    	            </div>
                </div>
								
					<?php } ?>
				</div>
			<div class="col-md-12 ml-auto mr-auto">
                        <div class="profile-tabs">
                          <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                            <li class="nav-item active">
                                <a class="nav-link active " href="#aboutme" role="tab" data-toggle="tab" aria-selected="true">
                                 <i class="fa fa-user"></i>
                                  About me
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#post" role="tab" data-toggle="tab" aria-selected="false">
                                  <i class="fa fa-dashboard"></i>
                                    My Post
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#gallery" role="tab" data-toggle="tab" aria-selected="false">
                                 <i class="fa fa-image"></i>
                                    My Gallery
                                </a>
                            </li>
                          </ul>
                        </div>
    	    	</div>
    	    		<div class="col-md-12 tab-content tab-space">
            <div class="tab-pane text-center gallery active " id="aboutme">
  				<div class="row">
  					<div class="col-md-6">
  							<ul class ="list-group">
					<li class="list-group-item"> <span class="Ul-left"><i class="fa fa-angle-double-right"></i> <?php echo ' '.phrase('father_name'); ?>   </span><span class="Ul-right"><?php echo ($page['pr_father_name'] != null)?$page['pr_father_name']:'-' ; ?></span></li>
					<li class="list-group-item"><span class="Ul-left"><i class="fa fa-angle-double-right"></i><?php echo ' '.phrase('mother_name'); ?>   </span><span class="Ul-right"><?php echo ($page['pr_mother_name'] != null)?$page['pr_mother_name']:'-' ; ?></span></li>
					<li class="list-group-item"><span class="Ul-left"><i class="fa fa-angle-double-right"></i><?php echo ' '.phrase('birth_date'); ?>   </span><span class="Ul-right"><?php echo ($page['pr_birth_date'] != null)?$page['pr_birth_date']:'-' ; ?></span></li>
					<li class="list-group-item"><span class="Ul-left"><i class="fa fa-angle-double-right"></i><?php echo ' '.phrase('birth_place'); ?>   </span><span class="Ul-right"><?php echo ($page['pr_birth_place'] != null)?$page['pr_birth_place']:'-' ; ?></span></li>
					<li class="list-group-item"><span class="Ul-left"><i class="fa fa-angle-double-right"></i><?php echo ' '.phrase('seminary'); ?>   </span><span class="Ul-right"><?php echo ($page['pr_seminary'] != null)?$page['pr_seminary']:'-' ; ?></span></li>
					<li class="list-group-item"><span class="Ul-left"><i class="fa fa-angle-double-right"></i><?php echo ' '.phrase('ordination_date'); ?>   </span><span class="Ul-right"><?php echo ($page['pr_ordination_date'] != null)?$page['pr_ordination_date']:'-' ; ?></span></li>
					<li class="list-group-item"><span class="Ul-left"><i class="fa fa-angle-double-right"></i><?php echo ' '.phrase('place_ordination'); ?>   </span><span class="Ul-right"><?php echo ($page['pr_place_ordination'] != null)?$page['pr_place_ordination']:'-' ; ?></span></li>
					<li class="list-group-item"><span class="Ul-left"><i class="fa fa-angle-double-right"></i><?php echo ' '.phrase('ordination_by'); ?>   </span><span class="Ul-right"><?php echo ($page['pr_ordination_by'] != null)?$page['pr_ordination_by']:'-' ; ?></span></li>
					<li class="list-group-item"><span class="Ul-left"><i class="fa fa-angle-double-right"></i><?php echo ' '.phrase('parish'); ?>   </span><span class="Ul-right"><?php echo ($page['pr_parish'] != null)?$page['pr_parish']:'-' ; ?></span></li>
					<?php if($customfield):?>
						<li class="list-group-item"><span class="Ul-left"><i class="fa fa-angle-double-right"></i><?php echo ' '.$customfield['custom_name']; ?>   </span><span class="Ul-right"><?php echo ($customfield['custom_value'] != null)?$customfield['custom_value']:'-' ; ?></span></li>
					<?php endif; ?>
				</ul>
  					</div>
  						<div class="col-md-6">
  					
				<ul class ="list-group">
					<li class="list-group-item"> <span class="Ul-left" ><i class="fa fa-angle-double-right"></i> Address   </span><br><span class="Ul-right"><?php echo ($page['address'] != null)?$page['address']:'-' ; ?></span></li>
					<li class="list-group-item"><span class="Ul-left" ><i class="fa fa-angle-double-right"></i>Email  </span><br><span class="Ul-right"><?php echo ($page['email'] != null)?$page['email']:'-' ; ?></span></li>
					<li class="list-group-item"><span class="Ul-left"><i class="fa fa-angle-double-right"></i>Mobile   </span><br><span class="Ul-right"><?php echo ($page['mobile'] != null)?$page['mobile']:'-' ; ?></span></li>
					
				</ul>	
  					</div>
  					
				<div class="clearfix"></div>
			
  				</div>
  			</div>
            <div class="tab-pane text-center gallery" id="post">
      			<div class="row " style="    display: flex;
    justify-content: center;">
      					<div class="col-md-7">
			
				<?php
					if($page['userID'] == $this->session->userdata('userID')):
				?>
				<div class="row">
					<div class="col-sm-12 nomargin">
						<form action="<?php echo base_url('user/updates'); ?>" method="post" class="form-horizontal image-placeholder rounded bordered" id="addUpdateForm">
							<div class="col-sm-12">
								<div class="control-group">
									<textarea id="updateInput" class="form-control" placeholder="<?php echo phrase('whats_on_your_mind'); ?>" name="content"></textarea>
								</div>
								<div class="control-group row statusHolder">
									<div class="col-xs-4">
										<div class="btn-group">
											<a href="<?php echo base_url('user/snapshots/add'); ?>" data-push="tooltip" data-placement="top" data-title="<?php echo phrase('upload_a_snapshot'); ?>" class="btn btn-default newPost"><i class="fa fa-image"></i></a>
											<a href="<?php echo base_url('user/posts/add'); ?>" data-push="tooltip" data-placement="top" data-title="<?php echo phrase('write_new_article'); ?>" class="btn btn-default newPost"><i class="fa fa-newspaper-o"></i></a>
										</div>
									</div>
									<div class="col-xs-8 text-right">
										<div class="btn-group">
											<select name="visibility" class="btn form-control bordered" style="width:inherit;display:inline">
												<option value="0"><?php echo phrase('public'); ?></option>
												<option value="1"><?php echo phrase('followers'); ?></option>
												<!-- <option value="2">< ?php echo phrase('friends'); ?></option> -->
											</select>
											<button class="btn btn-primary" type="submit"><i id="update-icon" class="fa fa-edit"></i> <?php echo phrase('post'); ?></button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<br />
				<div id="fetch_new_update"></div>
					
				<?php endif; ?>
				
				<?php
					$n				= 1;
					$timeline		= getTimelines($page['userID'], $limit, $offset, $timestamp);
					//print_r($timeline); exit();
					if(sizeof($timeline) > 0)
					{
						foreach($timeline as $row)
						{
							if($n == 7)
							{
								echo '
									<div class="image-placeholder">
									
										' . widget_randomAds() . '
										
									</div>
								';
							}
							
							if($row['is_comment'] != 'YES' && $row['is_like'] != 'YES' && $row['is_repost'] != 'YES')
							{
								if($row['is_update'] == 'YES')
								{
									echo parsingStatusByID($row['update_contributor'], 'submitting', $row['updateID']);
								}
								elseif($row['is_post'] == 'YES')
								{
									echo parsingPostByID($row['post_contributor'], 'submitting', $row['postID']);
								}
								elseif($row['is_snapshot'] == 'YES')
								{
									echo parsingImageByID($row['snapshot_contributor'], 'submitting', $row['snapshotID']);
								}
								elseif($row['is_openletter'] == 'YES')
								{
									echo parsingOpenletterByID($row['openletter_contributor'], 'submitting', $row['letterID']);
								}
								elseif($row['is_tv'] == 'YES')
								{
									echo parsingChannelByID($row['tv_contributor'], 'submitting', $row['tvID']);
								}
							}
							else
							{
								if($row['is_comment'] == 'YES')
								{
									if($row['commentType'] == 0)
									{
										echo parsingStatusByID($row['commenterID'], 'commenting', $row['item_commented'], $row['commentID'], $row['comment_time']);
									}
									elseif($row['commentType'] == 1)
									{
										echo parsingPostByID($row['commenterID'], 'commenting', $row['item_commented'], $row['commentID'], $row['comment_time']);
									}
									elseif($row['commentType'] == 2)
									{
										echo parsingImageByID($row['commenterID'], 'commenting', $row['item_commented'], $row['commentID'], $row['comment_time']);
									}
									elseif($row['commentType'] == 3)
									{
										echo parsingOpenletterByID($row['commenterID'], 'commenting', $row['item_commented'], $row['commentID'], $row['comment_time']);
									}
									elseif($row['commentType'] == 4)
									{
										echo parsingChannelByID($row['commenterID'], 'commenting', $row['item_commented'], $row['commentID'], $row['comment_time']);
									}
								}
								elseif($row['is_like'] == 'YES')
								{
									if($row['likeType'] == 0)
									{
										echo parsingStatusByID($row['likerID'], 'liking', $row['item_liked'], $row['likeID'], $row['like_time']);
									}
									elseif($row['likeType'] == 1)
									{
										echo parsingPostByID($row['likerID'], 'liking', $row['item_liked'], $row['likeID'], $row['like_time']);
									}
									elseif($row['likeType'] == 2)
									{
										echo parsingImageByID($row['likerID'], 'liking', $row['item_liked'], $row['likeID'], $row['like_time']);
									}
									elseif($row['likeType'] == 3)
									{
										echo parsingOpenletterByID($row['likerID'], 'liking', $row['item_liked'], $row['likeID'], $row['like_time']);
									}
									elseif($row['likeType'] == 4)
									{
										echo parsingChannelByID($row['likerID'], 'liking', $row['item_liked'], $row['likeID'], $row['like_time']);
									}
								}
								elseif($row['is_repost'] == 'YES')
								{
									if($row['repostType'] == 0)
									{
										echo parsingStatusByID($row['reposterID'], 'reposting', $row['item_reposted'], $row['repostID'], $row['repost_time']);
									}
									elseif($row['repostType'] == 1)
									{
										echo parsingPostByID($row['reposterID'], 'reposting', $row['item_reposted'], $row['repostID'], $row['repost_time']);
									}
									elseif($row['repostType'] == 2)
									{
										echo parsingImageByID($row['reposterID'], 'reposting', $row['item_reposted'], $row['repostID'], $row['repost_time']);
									}
									elseif($row['repostType'] == 3)
									{
										echo parsingIOpenletterByID($row['reposterID'], 'reposting', $row['item_reposted'], $row['repostID'], $row['repost_time']);
									}
									elseif($row['repostType'] == 4)
									{
										echo parsingChannelByID($row['reposterID'], 'reposting', $row['item_reposted'], $row['repostID'], $row['repost_time']);
									}
								}
								elseif(isset($row['is_folowing']))
								{
									echo $row['userID'] . ' is following ' . $row['is_following'];
								}
								elseif(isset($row['is_friendship']))
								{
									echo $row['fromID'] . ' is became friend width ' . $row['toID'];
								}
							}
							$n++;
						}
					}
					else
					{
						echo '<div class="col-sm-12 text-center" style="padding:60px 0"><div class="alert alert-danger"><h4>' . $page['full_name'] . ' ' . phrase('does_not_have_any_update') . ($timestamp ? ' ' . phrase('in') . ' ' . date('F', $timestamp) : '') . '</h4></div></div>';
					}
				?>
					
				<div class="row">
					<div class="col-sm-12 text-center">
					
						<?php echo timelinePaging($page['userID'], $limit, $offset, $timestamp); ?>
						
					</div>
				</div>
			</div>
      						</div>
  			</div>
            <div class="tab-pane text-center gallery" id="gallery">
      			<div class="row">
      			    		</div>
          </div>
            </div>
		
		</div>
		
	
	</div>
	
	<?php endforeach; ?>