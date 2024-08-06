
	<style>
		.img-blck img{
		    width: 100%;
    height: 200px;
    object-fit: cover;}	</style>
	<div class="page-name-block" >
	  
		<div class="page-content-block ">
			<span class="Page-title">Administration <i class="fa fa-angle-double-right"></i></span> 
		
		<input type="text" class="form-control serach-btn width-auto"  onkeyup="searchkey(this.value)" name="query" placeholder="<?php echo 'Find Administration'//echo phrase('search_user'); ?>"<?php echo ($keywords != null ? ' value="' . $keywords . '"' : 'test'); ?> />
			
  
 
  		<?php foreach($p_type as $key=>$pType): $pTypeurl = slugify($pType); ?>
  		
  	<a class="btn btn-link dropdown-toggle filter-content" href="#<?php echo $pTypeurl?>" data-id="<?php echo $key?>"><?php echo $pType ?></a>
  		
  		
									
										<?php endforeach;?>
										
   
  	
 
	
				
		</div>
	</div>
	<br /><br /><br />
	<br />
	<div class="container">
		<div class="row">
			<div class="col-md-12 ">
				<?php if($keywords): ?>
				<br />
				<div class="alert alert-<?php echo ($count > 0 ? 'info' : 'danger'); ?>"><?php echo phrase('showing'); ?> <b><?php echo $offset . ' - ' . ($count > $limit && $limit+$offset < $count ? $limit+$offset : $count) . ' ' . phrase('from') . ' ' . ($count > 0 ? $count : 0); ?></b> <?php echo phrase('results_for_keywords'); ?> <b>"<?php echo $keywords; ?>"</b></div>
				<?php endif; ?>
				
				<?php
					$n	= 1; ?>
					
				<div class="row ">
				<?php 	foreach($administration as $key =>$role): ?>
					<?php 

					$parent_block   = "col-md-12";
					$image_block    = "col-md-5";
					$caption_block  = "col-md-7";
					if($role['user'][0]['a_type'] == 1  )
					{
					$parent_block = "col-md-3 col-md-offset-4 text-center";	
				
					$image_block    = "col-md-12 img-blck";
					$caption_block  = "col-md-12";
					}?>
					<div class="<?=$parent_block?>"><h2><?=$role['type_name']?></h2>
						<?php foreach($role['user'] as $rkey =>$c): 
						
							$size =($c['a_type'] == 1)?"12":(($c['a_type'] == 2)?"4":"3"); ?>
							
							<div class="col-sm-<?=$size?> ">
								
							<?php	$hex		= '#' . random_hex();?>
				
					<div class="first image-placeholder relative card">
									<div class="<?=	$image_block?>">
										<a href="<?=base_url($c['userName']) ?>" class="ajaxloads hoverCard">
											<img src="<?=base_url('uploads/users/thumbs/' . imageCheck('users', getUserPhoto($c['userID']), 1)) ?>" class="img-rounded bordered img-responsive" alt="" />
										</a>
									</div>
									<div class="<?=	$image_block?> relative">
									
										<a href="<?=base_url($c['userName'])?>" class="ajaxloads hoverCard">
											<b><?=$c['full_name'] ?></b> 
										</a>
										<br />
										<small><?= $c['a_role'] ?></small>
									</div>
								
							
						
					
					</div>
				
							</div>
						
						<?php endforeach;?>
						
						</div><br>
						
					<?php endforeach;?>
					</div>
				
				
				<div class="row">
					<div class="col-sm-12 text-center">
					
						<?php
						if($keywords)
						{
							echo generatePagination('userSearch', $keywords, null, $keywords, $limit, $offset);
						}
						?>
						
					</div>
				</div>
			</div>
		</div>
	</div>