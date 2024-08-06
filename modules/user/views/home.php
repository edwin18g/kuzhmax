
<style>

.carousel-caption p {
    font-size: 23px!important;
}
.container-fluid {
    padding-right: 0px;
    padding-left: 0px;
}
	
</style>
<div class="container-fluid">
	<?php if(!empty($home_slider) ):	$s = 0;		?>
		<div id="snapshot" class="carousel slide rounded-sm bg-dark" data-ride="carousel">
			<!--<ol class="carousel-indicators">-->
			<!--	< ?php foreach($home_slider as $c):?>-->
			<!--		<li data-target="#snapshot" data-slide-to="< ?php echo $s?>" < ?php  echo ($s == 0 ? ' class="active"' : '') ?>></li>-->
			<!--	< ?php $s++; endforeach;	$s = 0;?>-->
			<!--</ol>-->
			<div class="carousel-inner" role="listbox">
				<?php foreach($home_slider as $c):?>
					<div class="item  <?php echo  ($s == 0 ? ' active' : '') ?>">
						<div style="background:url(<?php echo  base_url('uploads/snapshots/' . imageCheck('snapshots', $c['snapshotFile'], 1)) ?>) center center no-repeat;background-size:cover;-moz-background-size:cover;" class="rounded-sm height-set"></div>
						<div class="carousel-caption">
							<h3 class="text-shadow"> &nbsp; </h3>
							<div class="clearfix"></div>
							<p class="text-shadow"><?php echo ($c['snapshotContent'] != '' ? truncate($c['snapshotContent'], 80) : '')?></p>
							<div class="clearfix"></div>
							<br />
						</div>
					</div>
				<?php 	$s++; endforeach;?>
			
		
				</div>
			</div>
	<?php endif;?>
</div>

		<!--<img src="< ?php echo site_url('uploads/backcurve.svg'); ?>" style="position: absolute;-->
  <!--  bottom: 0px;-->
  <!--  width: 100%;">-->




<div class="container">
    <div class="row">
   
				
			<div class="clearfix"></div>
		<div class="col-md-12 hidden-xs">
			<div class="whitebg ">
				<div class="tabbable" id="btabs">
					<div class="col-md-4">
						<div style="">
							<ul class="nav home-submenu ">
						<li class="active">
							<a href="#panelbishop" data-toggle="tab">Bishop</a>
						</li>
						<li>
							<a href="#panelbcal" data-toggle="tab">Calendar</a>
						</li>
						<li>
							<a href="<?=site_url('circular')?>" >Circular</a>
						</li>
						<li>
							<a href="<?=site_url('openletters')?>" >News Letters</a>
						</li>
					</ul>
							
						</div>
						
					</div>
					
					<div class="col-md-8 tab-content" >
						<div class="tab-pane active block-bishop" id="panelbishop" >
							<div class="media" style="padding:20px">
  <div class="media-left">
    <img src="http://kuzhithuraidiocese.in/uploads/bishop-jerome-dhas.jpg" class="media-object" style="    width: 250px;
    /* padding: 23px; */
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #612958;
    height: 250px;">
  </div>
  <div class="media-body" style="    vertical-align: middle;">
    <h4 class="media-heading">The Most Rev. Msgr. V. Jeromedhas</h4>
   	<p class="text-justify">The Most Rev. Msgr. V. Jeromedhas, SDB was born on October 21, 1951 at Paduvoor, Diocese of Kottar. After his primary education in the ICM Primary School, Velliavilai, he joined St. Aloysius' Minor Seminary, Kottar diocese on sunday 24th May 1964, and did his high school studies at Carmel High School,......</p>
    <div class="col-md-12 text-center">
     	<a href="<?=base_url('bishop')?>" class="btn btn-default btn-block">View More </a>
     </div>
  </div>
</div>
						
						</div>
						<div class="tab-pane" id="panelbcal" style="box-shadow: -20px 0px 15px 0px #96508b3d;background: #fff;

    padding: 20px;    background-image: linear-gradient(to right, rgb(255, 255, 255), rgb(241, 241, 241));
"><a href="newsletter/News letter - August 2018.pdf" target="“_blank”">
							<iframe src="https://www.google.com/calendar/embed?showPrint=0&amp;height=500&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=rcdiocesekuzhithurai%40gmail.com&amp;color=%231B887A&amp;ctz=Asia%2FCalcutta" width="100%" height="200" scrolling="yes" class="iframe-class" frameborder="0"></iframe><br>
							</a><center><a href="newsletter/News letter - August 2018.pdf" target="“_blank”"></a><a href="calendar.php">Click here to Enlarge Calendar</a></center>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-12 nomargin-xs nopadding-xs" style="background: #ffffffad;
    padding: 20px;
    margin-left: 2px;
    width: calc(100% - 4px);
    border-radius: 5px;">
					
			<h2 class="header-block">&nbsp;Latest Article</h2>
				
			<div class="aritcle" style="white-space: nowrap;
    overflow-x: auto;
    display: flex;">
			
					<?php
					function trim_text($input, $length, $ellipses = true, $strip_html = true) {
    //strip tags, if desired
    if ($strip_html) {
        $input = strip_tags($input);
    }
  
    //no need to trim, already shorter than trim length
    if (strlen($input) <= $length) {
        return $input;
    }
  
    //find last space within length
    $last_space = strrpos(substr($input, 0, $length), ' ');
    $trimmed_text = substr($input, 0, $last_space);
  
    //add ellipses (...)
    if ($ellipses) {
        $trimmed_text .= '...';
    }
  
    return $trimmed_text;
}
						if($feature_posts)
						{
							foreach($feature_posts as $k=>$posts){
								
								?>
							
								<a href="<?=base_url('posts/'.$posts['postSlug'])?>" class="" style="width:250px;margin:5px">
					<div class="card-item" >
         		<div class="card ">
            		<img class="card-img-top" src="<?php echo ($posts['p_image'])?site_url('uploads/posts/'.$posts['p_image']):site_url('uploads/posts/thumbs/placeholder.jpg')?>" alt="Card image cap">
            		<div class="card-body">
               		<h5 class="card-title card-warp"><?= $posts['postTitle']?></h5>
               		
               		<div class="content-post-more">
               			<?php echo  trim_text($posts['postContent'], 500, $ellipses = true, $strip_html = true);//truncate($posts['postContent'], 260);?>  
               		</div>
        <span class="content-viewMore">... View More</span>
               	
            		</div>
         		</div>
      		</div>
      		</a>
								<?php 
							}
							
							
						}
					?>
				</div>
		</div>
			<?php
						if(getNewsAndEvents('all', 5) !== null)
						{ ?>
						
						
		<div class="col-md-2 nomargin-xs nopadding-xs news-scroll news-events-block" >
			<div class="dropdown open">
    <button type="button" data-toggle="dropdown" class="btn dropdown-toggle" aria-expanded="true">News &amp; Events<span class="caret"></span></button>
   
<div class="dropdown-menu" style="       margin-top: 9px;
    background: #f9f9f9;
    /* color: #fff; */
    font-weight: 800;
    text-align: center;
    /* text-shadow: 1px 4px 7px #000; */
    padding: 9px;
    right: 0px;
    /* box-shadow: 1px 1px 20px 8px #0000006e; */
    border-radius: 18px;
    /* width: 169%; */
" ><?php
			
							echo getNewsAndEvents('all', 5);
				
					?></div>
</div>
			
			
		
			
				
			</div><?php 		} ?>
			
		
			<div class="clearfix"></div>
			<div class="col-md-12" style="background: #ffffffad;
    padding: 20px;
    margin-left: 2px;
    width: calc(100% - 4px);
    border-radius: 5px;">
				<div class="whitebg mleft parish-block-card">
	                <h2 class="header-block">&nbsp; Parish</h2>
				<div id="parishblock" style="white-space: nowrap;
    overflow-x: auto;
    display: flex;">
					
					<?php if($randoam_parish):foreach($randoam_parish as $praish_ky=>$parish):?>
						<a href="<?=base_url($parish['slug'])?>" class="" style="width:250px;margin:5px">
					<div class=" card-item">
         		<div class="card ">
            		<img class="card-img-top" src="<?php echo base_url('uploads/parish/' . imageCheck('parish', $parish['cimg'])); ?>" alt="Card image cap">
            		<div class="card-body">
               		<h5 class="card-title card-warp"><?= $parish['cname']?></h5>
               	
               	
            		</div>
         		</div>
      		</div>
      		</a>
      		<?php endforeach; else: ?>
      		<?php endif;?>
      		
      	
      	</div>
      	<div class="clearfix"></div>
      
     <div class="col-md-12 text-center">
     	<a href="<?=base_url('parish')?>" class="btn btn-default btn-block">View More Parish</a>
     	
     </div>
      
      
				</div>
			
			</div>
			
				<div class="clearfix"></div>

			
		
			
		
		</div>
	</div>

 <script>
// 	$(window).scroll(function (event) {
//     var scroll = $(window).scrollTop();
//     if(scroll > 200)
//     {
//     	$('.news-scroll').hide();
//     }
//     else
//     {
//     	$('.news-scroll').show();
//     }
//     // Do something
// });
// </script>