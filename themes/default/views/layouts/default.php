<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');?><!DOCTYPE html>
<html lang="en-US" class="no-js" prefix="og: http://ogp.me/ns#">
	<head>
		
		<!--<script data-ad-client="ca-pub-8907395171625597" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>-->
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title><?php echo truncate($meta['title'], 160); ?> | <?php echo $this->settings['siteTitle']; ?></title>
		<meta name="description" content="<?php echo truncate($meta['descriptions'], 260); ?>" />
		<meta name="keywords" content="<?php echo truncate($meta['keywords'], 160); ?>" />
		<meta name="author" content="<?php echo (isset($meta['author']) ? $meta['author'] : $this->settings['siteTitle']); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		
		<meta property="og:title" content="<?php echo truncate($meta['title'], 160); ?> | <?php echo $this->settings['siteTitle']; ?>" />
		<meta property="og:type" content="article"/>
		<meta property="og:url" content="<?php echo current_url(); ?>"/>
		<meta property="og:site_name" content="dwitri.com" />
		<meta property="article:author" content="<?php echo (isset($meta['author']) ? $meta['author'] : 'https://www.facebook.com/DWITRIcom'); ?>" />
		<meta property="og:description" content="<?php echo truncate($meta['descriptions'], 260); ?>" />
		<meta property="og:image" content="<?php echo truncate($meta['image'], 160); ?>" />
		<meta property="fb:app_id" content="423905061028802"/>
		
		<!-- <link href="<?php echo base_url('themes/default/css/font-awesome/css/font-awesome.min.css?123'); ?>" rel="stylesheet"> -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css?123" />
		<link href="<?php echo base_url('themes/default/css/bootstrap.min.css?v=10.289'); ?>" rel="stylesheet">
		<link href="<?php echo base_url('themes/default/css/animate.css?123'); ?>" rel="stylesheet">
		<link href="<?php echo base_url('themes/default/css/emoji.css?1234'); ?>" rel="stylesheet">
		<link href="<?php echo base_url('themes/default/css/styles.css?v=9.5'); ?>" rel="stylesheet">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.33.1/sweetalert2.min.css" />
		<link href="<?php echo base_url('themes/default/fonts/raleway/Raleway.css?1234'); ?>" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Mukta+Malar" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Mukta+Malar&display=swap" rel="stylesheet">
		<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<script src="<?php echo base_url('themes/default/js/jquery.js?1234'); ?>"></script>
		<script src="<?php echo base_url('themes/default/js/bootstrap.min.js?123'); ?>"></script>
		<link rel="shortcut icon" type="image/x-icon" href="<?php echo base_url('themes/default/images/favicon.ico?123'); ?>">
	</head>
	<body class="fixed">
	
		<!-- /.navbar -->
	<nav class="navbar navbar-custom navbar-fixed-top navbar-inverse text-uppercase hidden-xs hidden-sm">
		
			<div class="container-fluid">
			
				<div class="collapse navbar-collapse" role="navigation">
				
					<ul class="nav navbar-nav top-header">
								<li>
					<a class="navbar-brand ajaxloads" style="    display: flex;
    justify-content: center;
    align-items: center;" href="<?php echo base_url(); ?>"> <img src="<?php echo base_url('themes/default/images/logo.png?1234'); ?>" alt="logo" /></a>
				</li>
							<li>	<a href="javascript:void(0)" style="color:#000;line-height:60px" class="aside-bar">
							<span class="btn" style="padding:0 0"><i class="fa fa-bars fa-2x"></i></span>
						</a></li> 
						<li<?php echo ($this->uri->segment(1) == '' ? ' class="active"' : ''); ?>>
							<a href="<?php echo base_url(); ?>" > Home</a>
						</li>
						<li<?php echo ($this->uri->segment(1) == 'administration' ? ' class="active"' : ''); ?>>
							<a href="<?php echo base_url('administration'); ?>" > Administration</a>
						</li>
							<li<?php echo ($this->uri->segment(1) == 'priest' ? ' class="active"' : ''); ?>>
							<a href="<?php echo base_url('priest'); ?>" >Priests</a>
						</li>
							<li<?php echo ($this->uri->segment(1) == 'parish' ? ' class="active"' : ''); ?>>
							<a href="<?php echo base_url('parish'); ?>" > Parish</a>
						</li>
							<li<?php echo ($this->uri->segment(1) == 'commission' ? ' class="active"' : ''); ?>>
							<a href="<?php echo base_url('commission'); ?>" > Commissions </a>
						</li>
				</ul>
					<ul class="nav navbar-nav navbar-right">

						<?php if($this->session->userdata('loggedIn')) { ?>
		
						<li>
							<a href="#posts" data-toggle="modal" data-push="tooltip" data-placement="bottom" data-title="<?php echo phrase('send_something'); ?>"><span class="btn btn-warning"><i class="fa fa-plus"></i></span></a>
						</li>
						
						<?php /* Messages Placeholder
						<li class="dropdown">
							<a href="#" class="dropdown-toggle load-notifications" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-close="false"> &nbsp;  <span class="countAlert<?php echo (countAlert($this->session->userdata('userID')) > 0 ? ' badge bg-red' : ''); ?>"><i class="fa fa-envelope hidden-xs"></i><span class="visible-xs"> <?php echo phrase('notifications'); ?></span><b id="countAlerts"><?php echo (countAlert($this->session->userdata('userID')) > 0 ? countAlert($this->session->userdata('userID')) : ''); ?></b></span></a>
							<div class="dropdown-menu notifications">
								<div class="notifications-area"></div>
								<div class="notifications-footer">
									<a href="#"><?php echo phrase('view_all_notifications'); ?></a>
								</div>
							</div>
						</li>
						*/ ?>
						
						<li class="dropdown<?php echo ($this->uri->segment(1) == 'user' ? ' active' : ''); ?>">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="<?php echo base_url('uploads/users/thumbs/' . imageCheck('users', getUserPhoto($this->session->userdata('userID')), 1)); ?>" width="20" height="20" alt="..." class="rounded" /> <?php echo truncate($this->session->userdata('full_name'), 4); ?> <span class="caret"></span></a>
							<ul class="dropdown-menu">
								<?php if($this->session->userdata('user_level') == 1) { ?>
								<li>
									<a href="<?php echo base_url('user/dashboard'); ?>" class="ajaxloads"><i class="fa fa-dashboard"></i> <?php echo phrase('dashboard'); ?></a>
								</li>
								<?php } ?>
								<li>
									<a href="<?php echo base_url(getUsernameByID($this->session->userdata('userID'))); ?>" class="ajaxloads"><i class="fa fa-desktop"></i> <?php echo phrase('timeline'); ?></a>
								</li>
								<li>
									<a href="<?php echo base_url('user/posts'); ?>" class="ajaxloads"><i class="fa fa-newspaper-o"></i> <?php echo phrase('articles'); ?></a>
								</li>
								<li>
									<a href="<?php echo base_url('user/snapshots'); ?>" class="ajaxloads"><i class="fa fa-image"></i> <?php echo phrase('snapshots'); ?></a>
								</li>
						
								
								<li>
									<a href="<?php echo base_url('user/edit_profile'); ?>" class="ajaxloads"><i class="fa fa-cogs"></i> <?php echo phrase('edit_profile'); ?></a>
								</li>
								<li role="separator" class="divider"></li>
								<li>
									<a href="<?php echo base_url('user/logout'); ?>" class="ajaxloads"><b><i class="fa fa-ban"></i> <?php echo phrase('logout'); ?></b></a>
								</li>
							</ul>
						</li>
						<?php } else { ?>
						<li style="border:none"<?php echo ($this->uri->segment(1) == 'user' ? ' class="active"' : ''); ?>>
							<a data-toggle="modal" href="<?php echo base_url('user/login')?>"><span class="btn btn-success"><i class="fa fa-lock"></i> <?php echo phrase('login'); ?></b></span></a>
						</li>
						<?php } ?>
					</ul>
				</div>
			</div><!-- /.container -->
		</nav>
	<aside class="menu-left navmenu navmenu-default navmenu-fixed-left side-bar ">
		

		
			
			<?php if($this->session->userdata('user_level') == 1):?>
			
				<ul class="list-group navmenu-nav">
					<li>
					<a class="navbar-brand ajaxloads" href="<?php echo base_url(); ?>"> <img src="<?php echo base_url('themes/default/images/logo.png?1234'); ?>" alt="logo" /></a>
						</li>
						<li>
							<a href="<?php echo base_url('user/dashboard'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == '' || $this->uri->segment(2) == 'dashboard') echo ' active'; ?>">
								
								<i class="fa fa-dashboard"></i> <span class="togle-nav">&nbsp; <?php echo phrase('dashboard'); ?></span></a>
							</li><li>
							<a href="<?php echo base_url('user/posts'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'posts') echo ' active'; ?>"><i class="fa fa-newspaper-o"></i> 
							
							<span class="togle-nav">
							&nbsp; <?php echo phrase('posts'); ?> &nbsp; <?php echo (countPosts('posts', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) > 0 ? '<span class="badge">' . countPosts('posts', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) . '</span>' : '') ?>
							</span>
							</a>
							</li>
								
								<li>
									<a href="<?php echo base_url('user/tv'); ?>" class="ajaxloads"><i class="fa fa-desktop"></i> Web TV</a>
								</li>
					
							<li>
							<a href="<?php echo base_url('user/snapshots'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'snapshots') echo ' active'; ?>"><i class="fa fa-image"></i> 
							<span class="togle-nav">
							&nbsp; <?php echo phrase('snapshots'); ?> &nbsp; <?php echo (countPosts('snapshots', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) > 0 ? '<span class="badge">' . countPosts('snapshots', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) . '</span>' : '') ?></span></a>
			
						</li>
							
							<!--<a href="< ?php echo base_url('user/tv'); ?>" class="ajaxloads list-group-item< ?php if($this->uri->segment(2) == 'tv') echo ' active'; ?>"><i class="fa fa-desktop"></i> &nbsp; <?php echo phrase('tv_channels'); ?> &nbsp; < ?php echo (countPosts('tv', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) > 0 ? '<span class="badge">' . countPosts('tv', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) . '</span>' : '') ?></a>-->
							
							<?php if($this->session->userdata('user_level') == 1) : ?>
							<li>
							<a href="<?php echo base_url('user/circular'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'circular') echo ' active'; ?>"><i class="fa fa-image"></i> <span class="togle-nav">Circular</span></a>
									</li>
									<li>
									<a href="<?php echo base_url('user/commissions'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'commissions') echo ' active'; ?>"><i class="fa fa-language"></i> <span class="togle-nav">&nbsp; Commissions</span></a>
					</li><li>
								<a href="<?php echo base_url('user/openletters'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'openletters') echo ' active'; ?>"><i class="fa fa-paperclip"></i> <span class="togle-nav">&nbsp; <?php echo phrase('open_letters'); ?> &nbsp; <?php echo (countPosts('openletters', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) > 0 ? '<span class="badge">' . countPosts('openletters', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) . '</span>' : '') ?></span></a>
								</li><li>
								<a href="<?php echo base_url('user/administration'); ?>" class="ajaxloads list-group-item <?php if($this->uri->segment(2) == 'administration') echo ' active'; ?>"><i class="fa fa-file-o"></i><span class="togle-nav"> Administrations<?php /*echo phrase('manage_pages'); */ ?></span></a>
								</li><li>
								<a href="<?php echo base_url('user/pages'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'pages') echo ' active'; ?>"><i class="fa fa-files-o"></i> <span class="togle-nav">&nbsp; <?php echo phrase('manage_pages'); ?></span></a>
							</li><li>
								<a href="<?php echo base_url('user/categories'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'categories') echo ' active'; ?>"><i class="fa fa-sitemap"></i> <span class="togle-nav">&nbsp; <?php echo phrase('post_categories'); ?> &nbsp; <?php echo (countPosts('categories', null) > 0 ? '<span class="badge">' . countPosts('categories', null) . '</span>' : '') ?></span></a>
							</li><li>
								<a href="<?php echo base_url('user/users'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'users') echo ' active'; ?>"><i class="fa fa-users"></i> <span class="togle-nav">&nbsp; Priests <!--< ?php echo phrase('users'); ?>--> &nbsp; <?php echo (countPosts('users', null) > 0 ? '<span class="badge">' . countPosts('users', null) . '</span>' : '') ?></span></a>
							</li><li>
								<a href="<?php echo base_url('user/settings'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'settings') echo ' active'; ?>"><i class="fa fa-cogs"></i> <span class="togle-nav">&nbsp; <?php echo phrase('global_settings'); ?></span></a>
							</li><li>
								<a href="<?php echo base_url('user/translate'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'translate') echo ' active'; ?>"><i class="fa fa-language"></i> <span class="togle-nav">&nbsp; <?php echo phrase('translate'); ?></span></a>
					
							</li>
							<?php endif; ?>
							<li>
							<a href="<?php echo base_url('user/edit_profile'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'edit_profile') echo ' active'; ?>"><i class="fa fa-cogs"></i> <span class="togle-nav">&nbsp; <?php echo phrase('edit_profile'); ?></span></a>
							</li><li>
							<a href="<?php echo base_url('user/logout'); ?>" class="ajaxloads list-group-item"><i class="fa fa-sign-out"></i> <span class="togle-nav">&nbsp; <?php echo phrase('logout'); ?></span></a>
							</li>
						</ul>
						
			<?php else:?>
				<ul class="navmenu-nav">
			  
			<li>
					<a class="navbar-brand ajaxloads" href="<?php echo base_url(); ?>"> <img src="<?php echo base_url('themes/default/images/logo.png?1234'); ?>" alt="logo" /></a>
				</li>
				<li>
					<form class="form-horizontal" action="<?php echo base_url('search'); ?>" method="post">
						<div class="input-group">
							<input type="text" class="form-control" name="query" placeholder="<?php echo phrase('type_keywords'); ?>" />
							<span class="input-group-btn">
								<button type="submit" class="btn btn-secondary nomargin"><i class="fa fa-search"></i></button>
							</span>
						</div>
					</form>
				</li>
				
				<li>
					<a href="<?php echo base_url(); ?>" class="ajaxloads"><i class="fa fa-home"></i> <?php echo phrase('home'); ?></a>
				</li>
						
				<?php if($this->session->userdata('loggedIn')) { ?>
				
				<li>
					<a href="<?php echo base_url(getUsernameByID($this->session->userdata('userID'))); ?>" class="ajaxloads"><i class="fa fa-clock-o"></i>  <?php echo phrase('timeline'); ?></a>
				</li>
				
				<?php } ?>
				
				<li>
					<a href="<?php echo base_url('posts'); ?>" class="ajaxloads"><i class="fa fa-newspaper-o"></i> <?php echo phrase('posts'); ?></a>
				</li>
				<li>
					<a href="<?php echo base_url('snapshots'); ?>" class="ajaxloads"><i class="fa fa-image"></i> <?php echo phrase('snapshot'); ?></a>
				</li>
				<li>
					<a href="<?php echo base_url('openletters'); ?>" class="ajaxloads"><i class="fa fa-paperclip"></i> <?php echo phrase('openletters'); ?></a>
				</li>
				<!--<li>-->
				<!--	<a href="< ?php echo base_url('tv'); ?>" class="ajaxloads"><i class="fa fa-desktop"></i> < ?php echo phrase('tv_channels'); ?></a>-->
				<!--</li>-->
				<li>
					<a href="<?php echo base_url('administration'); ?>" class="ajaxloads"><i class="fa fa-desktop"></i> Administration<?php //echo phrase('tv_channels'); ?></a>
				</li>
				<li>
					<a href="<?php echo base_url('priest'); ?>" class="ajaxloads"><i class="fa fa-desktop"></i> Priests<?php //echo phrase('tv_channels'); ?></a>
				</li>
				<li>
					<a href="<?php echo base_url('parish'); ?>" class="ajaxloads"><i class="fa fa-desktop"></i> Parishes<?php //echo phrase('tv_channels'); ?></a>
				</li>
				<li>
					<a href="<?php echo base_url(); ?>" class="ajaxloads"><i class="fa fa-desktop"></i> Organizations<?php //echo phrase('tv_channels'); ?></a>
				</li>
				<li>
					<a href="<?php echo base_url('pages/history'); ?>" class="ajaxloads"><i class="fa fa-desktop"></i> History<?php //echo phrase('tv_channels'); ?></a>
				</li>
				<li>
					<a href="<?php echo base_url('pages/contact'); ?>" class="ajaxloads"><i class="fa fa-desktop"></i> Contact Us<?php //echo phrase('tv_channels'); ?></a>
				</li>
				<li>
					<a data-toggle="modal" href="#language"><i class="fa fa-language"></i> <?php echo phrase('language'); ?></a>
				</li>
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-list"></i> <?php echo phrase('other'); ?> <span class="more"><i class="fa fa-chevron-down"></i></span></a>
					<ul class="dropdown-menu navmenu-nav">
						<?php echo generatePageNav(true); ?>
						<!-- <li>
							<a href="<?php echo base_url('pages/contact'); ?>" class="ajaxloads"><i class="fa fa-phone"></i> <?php echo phrase('feedback'); ?></a>
						</li> -->
					</ul>
				</li>
			</ul>
			
			
			<?php endif;?>
						
		</aside>


		<div class="content-wrapper" id="">
	
		<?php echo $template['body']; ?>
		
		</div>
		<div class="clearfix"></div>
		<div class="footer  hidden-lg hidden-md">
			<div class="suha-footer-nav h-100">
        <ul class="h-100 d-flex align-items-center justify-content-between">
          <li class="active"><a href="/"><i class="fa fa-home"></i>Home</a></li>
          <li><a href="/parish"><i class="fa fa-book"></i>Parish</a></li>
          <li><a href="/priest"><i class="fa fa-user"></i>Priests</a></li>
          <li><a href="/posts"><i class="fa fa-envelope"></i>Posts</a></li>
          <li><a href="/snapshots"><i class="fa fa-image"></i>Gallery</a></li>
        </ul>
      </div>
		</div>
		<div class="navbar navbar-custom header-mobile navbar-fixed-top visible-xs visible-sm ">
			<div class="container">
				<div class="row">
					<div class="col-xs-2 nomargin nopadding">
						<a href="javascript:void(0)" style="color:#000;line-height:60px" class="aside-bar" >
							<span class="btn" style="padding:0 0"><i class="fa fa-bars fa-2x"></i></span>
						</a>
					</div>
					<div class="col-xs-8 nomargin nopadding text-center pushTitle" style="color:#000;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:60px">
						<?php echo truncate($meta['title'], 160); ?>
					</div>
					<div class="col-xs-2 nomargin nopadding text-right">
						<?php if($this->session->userdata('loggedIn')){ ?>
							<a href="javascript:void(0)" style="color:#000;line-height:60px" data-toggle="offcanvas" data-target=".menu-right" data-canvas="body" data-placement="right">
								<span class="btn" style="padding:0 0">
									<span class="countAlert<?php echo (countAlert($this->session->userdata('userID')) > 0 ? ' badge' : ''); ?>"><?php echo (countAlert($this->session->userdata('userID')) < 0 ? countAlert($this->session->userdata('userID')) : ''); ?><b class="countAlerts"><?php echo (countAlert($this->session->userdata('userID')) > 0 ? countAlert($this->session->userdata('userID')) : ''); ?></b></span> 
									<img src="<?php echo base_url('uploads/users/thumbs/' . imageCheck('users', getUserPhoto($this->session->userdata('userID')), 1)); ?>" width="28" height="28" alt="..." class="rounded bordered" />
								</span>
							</a>
						<?php }else{ ?>
							<a href="<?php echo base_url('user/login')?>" data-toggle="modal" style="color:#000;line-height:60px">
								<span class="btn" style="border:1px solid #fff"><i class="fa fa-lock"></i></span>
							</a>
						<?php } ?>
					</div>
				</div>
			</div>
		</div>
		<div class="nav-bg-overlay" style="display: none;
    width: 100%;
    height: 100%;
    background: #180a0a30;
    z-index: 1000;
    position: fixed;
    top: 0;"></div>
		
		<?php if($this->session->userdata('loggedIn')) { ?>
		<div class="menu-right navmenu navmenu-default navmenu-fixed-right" style="display:none;">
			<div style="line-height:60px;font-weight:bold;text-transform:uppercase;padding:0 15px">
				<a href="<?php echo base_url(getUsernameByID($this->session->userdata('userID'))); ?>" class="ajaxloads" style="color:#fff"><?php echo truncate($this->session->userdata('full_name'), 22); ?></a>
				<a href="<?php echo base_url('user/edit_profile'); ?>" class="ajaxloads pull-right" style="line-height:60px;color:#fff"><i class="fa fa-cog"></i></a>
			</div>
			<ul class="navmenu-nav">
				<li>
					<a href="<?php echo base_url('user/notifications'); ?>" class="ajaxloads"><i class="fa fa-bell"></i> <?php echo phrase('notifications'); ?>
					<span class="countAlert more<?php echo (countAlert($this->session->userdata('userID')) > 0 ? ' badge' : ''); ?>"><?php echo (countAlert($this->session->userdata('userID')) < 0 ? countAlert($this->session->userdata('userID')) : ''); ?><b class="countAlerts"><?php echo (countAlert($this->session->userdata('userID')) > 0 ? countAlert($this->session->userdata('userID')) : ''); ?></b></span> 
				</li>
				<li>
					<a href="<?php echo base_url('user/posts'); ?>" class="ajaxloads"><i class="fa fa-newspaper-o"></i> <?php echo phrase('articles'); ?><span class="badge more"><?php echo countPosts('posts', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))); ?></span></a>
				</li>
				<li>
					<a href="<?php echo base_url('user/snapshots'); ?>" class="ajaxloads"><i class="fa fa-image"></i> <?php echo phrase('snapshots'); ?><span class="badge more"><?php echo countPosts('snapshots', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))); ?></span></a>
				</li>
				
				<!--<li>-->
				<!--	<a href="< ?php echo base_url('user/tv'); ?>" class="ajaxloads"><i class="fa fa-desktop"></i> <?php echo phrase('tv_channels'); ?><span class="badge more">< ?php echo countPosts('tv', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))); ?></span></a>-->
				<!--</li>-->
				<?php if($this->session->userdata('user_level') == 1) { ?>
				<li>
					<a href="<?php echo base_url('user/openletters'); ?>" class="ajaxloads"><i class="fa fa-paperclip"></i> <?php echo phrase('open_letters'); ?><span class="badge more"><?php echo countPosts('openletters', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))); ?></span></a>
				</li>
				<li>
					<a href="<?php echo base_url('user/categories'); ?>" class="ajaxloads"><i class="fa fa-sitemap"></i> <?php echo phrase('manage_category'); ?></a>
				</li>
				<li>
					<a href="<?php echo base_url('user/administration'); ?>" class="ajaxloads"><i class="fa fa-users"></i> Administration Management<?php /*echo phrase('manage_user');*/ ?></a>
				</li>
				<li>
					<a href="<?php echo base_url('user/users'); ?>" class="ajaxloads"><i class="fa fa-users"></i> Manage Priests</a>
				</li>
				<li>
					<a href="<?php echo base_url('user/translate'); ?>" class="ajaxloads"><i class="fa fa-language"></i> <?php echo phrase('translate'); ?></a>
				</li>
				<li>
					<a href="<?php echo base_url('user/settings'); ?>" class="ajaxloads"><i class="fa fa-cog"></i> <?php echo phrase('global_settings'); ?></a>
				</li>
				<?php } ?>
				<li>
					<a href="<?php echo base_url('user/logout'); ?>" class="ajaxloads"><b><i class="fa fa-ban"></i> <?php echo phrase('logout'); ?></b></a>
				</li>
			</ul>
		</div>
		<?php } ?>
			<div class="modal fade" id="commission_custom">
			<div class="modal-dialog modal_table" style="max-width:400px">
				<div class="modal-content modal_cell">
					
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3 id="myModalLabel"><i class="fa fa-info-circle"></i> <?php echo phrase('notification');?></h3>
					</div>
					
					<div class="modal-body">
					<div class="form-group">
    <label for="pwd">custom field Name:</label>
    <input type="text" class="form-control" id="custom_field_name">
  </div>
   
					</div>
					
					<div class="modal-footer">
						<div class="row">
							<div class="col-xs-6 text-left">
								<a href="javascript:void(0)" class="btn btn-success" id="create_custom" onclick="create_input(modal=false)"  data-id=""><i class="fa fa-check" id="delete-icon"></i> <?php echo phrase('continue');?></a>
							</div>
							<div class="col-xs-6">
								<button type="button" class="btn btn-default" data-dismiss="modal"><?php echo phrase('cancel');?></button>
							</div>
						</div>
					</div>
						
				</div>
			</div>
		</div>
		
		<?php if(!$this->session->userdata('loggedIn')) { ?>
				
		<div id="login" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal_table">
				<div class="modal-content modal_cell">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3 id="myModalLabel"><i class="fa fa-lock"></i> <?php echo phrase('dashboard_access'); ?></h3>
					</div>
					<div class="modal-body" style="padding-top:0;padding-bottom:0">
						<div class="row">
							<div class="col-sm-11 nomargin">
								<form action="<?php echo base_url('user/login'); ?>" method="post" class="submitForm" data-save="<?php echo phrase('sign_in'); ?>" data-saving="<?php echo phrase('signing_in'); ?>" data-alert="<?php echo phrase('unable_to_signing_in'); ?>">
									<div class="input-group col-sm-12">
										<span class="input-group-addon"><i class="fa fa-at"></i></span>
										<input type="text" class="form-control input-lg" name="username" value="<?php echo set_value('email'); ?>" placeholder="<?php echo phrase('username_or_email'); ?>" />
									</div>
									<div class="input-group col-sm-12">
										<span class="input-group-addon"><i class="fa fa-qrcode"></i></span>
										<input type="password" class="form-control input-lg" name="password" value="<?php echo set_value('password'); ?>" placeholder="<?php echo phrase('type_your_password'); ?>" />
									</div>
									<div class="statusHolder"></div>
									<input type="hidden" name="hash" value="<?php echo sha1(time()); ?>" />
									<button class="btn btn-primary btn-lg btn-block submitBtn" type="submit"><i class="fa fa-key"></i> <?php echo phrase('login'); ?></button>
								</form>
							</div>
							<!--<div class="col-sm-5 nomargin loginBorder text-center">-->
							<!--	<br /><br />-->
								<!--<a class="btn btn-primary btn-lg btn-block" href="<?php echo instantLoginURL(); ?>"><i class="fa fa-facebook"></i> &nbsp; <?php echo phrase('instant_login'); ?></a>-->
								<!--<a class="ajaxloads btn btn-success btn-lg btn-block" href="<?php echo base_url('user/register'); ?>"><i class="fa fa-user-plus"></i> &nbsp; <?php echo phrase('register'); ?></a>-->
							<!--	<br /><br /><br />-->
							<!--</div>-->
						</div>
					</div>
					<div class="modal-footer">
						<div class="col-sm-12 text-center"><?php echo phrase('login_description'); ?></div>
					</div>
				</div>
			</div>
		</div>
		
		<?php } else { ?>
		
		<!-- (Normal Modal)-->
		<div class="modal fade" id="modal_delete">
			<div class="modal-dialog modal_table" style="max-width:400px">
				<div class="modal-content modal_cell">
					
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3 id="myModalLabel"><i class="fa fa-info-circle"></i> <?php echo phrase('notification');?></h3>
					</div>
					
					<div class="modal-body">
						<?php echo phrase('are_you_sure_want_to_continue'); ?>
					</div>
					
					<div class="modal-footer">
						<div class="row">
							<div class="col-xs-6 text-left">
								<a href="#" class="btn btn-danger" id="delete_link" data-id=""><i class="fa fa-check" id="delete-icon"></i> <?php echo phrase('continue');?></a>
							</div>
							<div class="col-xs-6">
								<button type="button" class="btn btn-default" data-dismiss="modal"><?php echo phrase('cancel');?></button>
							</div>
						</div>
					</div>
						
				</div>
			</div>
		</div>
				
		<div id="posts" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal_table" style="max-width:320px">
				<div class="modal-content modal_cell">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3 id="myModalLabel"><i class="fa fa-plus"></i> &nbsp; <?php echo phrase('post_something'); ?></h3>
					</div>
					<div class="modal-body">
						<a href="<?php echo base_url('user/posts/add'); ?>" class="btn btn-primary btn-block btn-lg newPost"><i class="fa fa-newspaper-o"></i> &nbsp; Write Post</a>
						<a href="<?php echo base_url('user/snapshots/add'); ?>" class="btn btn-info btn-block btn-lg newPost"><i class="fa fa-image"></i> &nbsp; Upload Gallery</a>
						<!--<a href="<?php echo base_url('user/openletters/add'); ?>" class="btn btn-warning btn-block btn-lg newPost"><i class="fa fa-paperclip"></i> &nbsp; <?php echo phrase('submit_open_letter'); ?></a>-->
						<!--<a href="<?php echo base_url('user/tv/add'); ?>" class="btn btn-danger btn-block btn-lg newPost"><i class="fa fa-desktop"></i> &nbsp; <?php echo phrase('submit_tv_channel'); ?></a>-->
					</div>
					<div class="modal-footer text-center">
						<?php echo phrase('choose_what_is_in_your_mind_right_now'); ?>
					</div>
				</div>
			</div>
		</div>
		
		<?php } ?>
			
		<!-- (Ajax Modal Large)-->
		<div id="modal_ajax" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal_table" style="max-width:1200px">
				<div class="modal-content modal_cell">
					<div class="modal-body rounded nopadding h-600px">
					
					</div>
				</div>
			</div>
		</div>
			
		<!-- (Ajax Modal Small)-->
		<div id="modal_ajax_sm" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal_table" style="max-width:380px">
				<div class="modal-content modal_cell">
					<div class="modal-body rounded repostForm" style="min-height:200px;max-width:380px">
					
					</div>
				</div>
			</div>
		</div>
			
		<!-- (Alert Modal)-->
		<div id="modal_alert" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal_table" style="max-width:480px">
				<div class="modal-content modal_cell rounded">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3 id="myModalLabel"><i class="fa fa-ban"></i> &nbsp; <?php echo phrase('oops'); ?></h3>
					</div>
					<div class="modal-body text-center text-danger" style="padding-top:30px;padding-bottom:30px;font-weight:bold;max-width:480px">
					
					</div>
					<div class="modal-footer text-center-xs">
						<button class="btn btn-default" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i> <?php echo phrase('close'); ?></button>
					</div>
				</div>
			</div>
		</div>
			
		<!-- (Success Modal)-->
		<div id="modal_success" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal_table" style="max-width:480px">
				<div class="modal-content modal_cell rounded">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3 id="myModalLabel"><i class="fa fa-check-circle"></i> &nbsp; <?php echo phrase('action_success'); ?></h3>
					</div>
					<div class="modal-body text-center text-success" style="padding-top:30px;padding-bottom:30px;font-weight:bold;max-width:480px">
					
					</div>
					<div class="modal-footer text-center-xs">
						<button class="btn btn-default" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i> <?php echo phrase('close'); ?></button>
					</div>
				</div>
			</div>
		</div>
			
		<!-- (Ajax Modal Dynamic)-->
		<div id="modal_ajax_dn" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal_table" style="width:auto">
				<div class="modal-content modal_cell">
					
				</div>
			</div>
		</div>
				
		<div id="language" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal_table" style="max-width:480px">
				<div class="modal-content modal_cell">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3 id="myModalLabel"><i class="fa fa-language"></i> &nbsp; <?php echo phrase('default_language'); ?></h3>
					</div>
					<div class="modal-body">
						<div class="col-sm-12">
							<div class="row">
								
								<?php
									$fields = $this->db->list_fields('language');
									foreach($fields as $field)
									{
										if($field == 'phrase_id' || $field == 'phrase') continue;
										
										if($this->session->userdata('language') == $field)
										{
											echo '<div class="col-sm-4 col-xs-6 text-muted"><b><i class="fa fa-circle-o"></i> ' . ucwords($field) . '</b></div>';
										}
										else
										{
											echo '<div class="col-sm-4 col-xs-6 text-muted"><a href="' . base_url('user/language/' . $field) . '"><i class="fa fa-circle-o"></i> ' . ucwords($field) . '</a></div>';
										}
									}
								?>
								
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="modal-footer text-center">
						<?php echo phrase('choose_available_translation_above_to_set_your_language'); ?>
					</div>
				</div>
			</div>
		</div>
				
		<div id="search" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal_table">
				<div class="modal-content modal_cell">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3 id="myModalLabel"><i class="fa fa-search"></i> &nbsp; <?php echo phrase('search_article_or_hashtag'); ?></h3>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-sm-12">
								<form class="form-horizontal submitForm" action="<?php echo base_url('search'); ?>" method="post" data-save="<?php echo phrase('search'); ?>" data-saving="<?php echo phrase('searching'); ?>" data-alert="<?php echo phrase('unable_to_submit_inquiry'); ?>">
									<div class="input-group">
										<input type="text" class="form-control input-lg" name="query" placeholder="<?php echo phrase('type_keywords'); ?>" />
										<span class="input-group-btn">
											<input type="hidden" name="hash" value="<?php echo sha1(time()); ?>" />
											<button type="submit" class="btn btn-lg btn-success nomargin submitBtn"><i class="fa fa-search"></i> <?php echo phrase('search'); ?></button>
										</span>
									</div>
									<div class="form-group">
										<div class="col-sm-12 statusHolder">
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="modal-footer text-center">
						<b><?php echo phrase('latest_quiries'); ?>:</b>
						<br />
						<?php echo widget_hashTags(false, 20); ?>
					</div>
				</div>
			</div>
		</div>
		<div id="modal_confirm" class="modal fade">
			<div class="modal-dialog modal_table" style="max-width:400px">
				<div class="modal-content modal_cell">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3 id="myModalLabel"><i class="fa fa-question-circle"></i> <?php echo phrase('leave_page_confirm');?></h3>
					</div>
					<div class="modal-body">
						<?php echo phrase('you_have_not_submitted_your_changes'); ?>. <?php echo phrase('do_you_want_to_leave_page_without_changes'); ?>
					</div>
					<div class="modal-footer">
						<div class="row">
							<div class="col-xs-6 nomargin text-left">
								<a href="javascript:void(0)" class="btn btn-default" id="confirm_link"><i class="fa fa-check-circle"></i> <?php echo phrase('leave_page');?></a>
							</div>
							<div class="col-xs-6 nomargin">
								<button type="button" class="btn btn-info" data-dismiss="modal"><i class="fa fa-close"></i> <?php echo phrase('stay_here');?></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div id="fb-root"></div>
	
		<?php if($this->session->flashdata('success')) { ?>
		<div id="successAlert" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal_table" style="max-width:500px">
				<div class="modal-content modal_cell">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
						<h3 id="myModalLabel"><i class="fa fa-check-circle"></i> <?php echo phrase('success');?></h3>
					</div>
					<div class="modal-body text-center">
						<h4 class="text-success">
							<?php echo $this->session->flashdata('success'); ?></b>
						</h4>
					</div>
					<div class="modal-footer text-center-xs">
						<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-close"></i> <?php echo phrase('close');?></button>
					</div>
				</div>
			</div>
		</div>
		
		
	
		<script type="text/javascript">
			$(window).load(function(){
				$('#successAlert').modal('show');
			});
		</script>
		<?php } ?>
		
			<div id="converter" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Bamini Typing pad</h4>
      </div>
      <div class="modal-body">
       <textarea class="default" onkeyup="convert_bamini_2_unicode();"  name="source" id="source" rows="30" spellcheck="false" ></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
		
		<script type="text/javascript">
			var base_url	= '<?php echo base_url(); ?>',
				theme_url	= '<?php echo base_url('themes/default/'); ?>',
				siteName	= '<?php echo $this->settings['siteTitle']; ?>',
				loggedIn	= <?php echo ($this->session->userdata('loggedIn') ? 'true' : 'false'); ?>,
				fail_alert	= '<?php echo phrase('unable_to_proccess_your_request'); ?>',
				dc_alert	= '<?php echo phrase('your_internet_was_disconnected'); ?>',
				empty_alert	= '<?php echo phrase('please_enter_some_text_to_submit'); ?>'
		</script>
		
		<script src="<?php echo base_url('themes/default/js/scrollbar.js?123'); ?>"></script>
		<script src="<?php echo base_url('themes/default/js/masonry.js?123'); ?>"></script>
		<script src="<?php echo base_url('themes/default/js/sticky.js?123'); ?>"></script>
		<script src="<?php echo base_url('themes/default/js/easing.js?223'); ?>"></script>
		<script src="<?php echo base_url('themes/default/js/global.js?123.1.4d'); ?>"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.33.1/sweetalert2.all.min.js"></script>
		
		<script type="text/javascript">
			$(window).load(function()
			{
				if ($(window).width() > 720)
				{
					if($('.grid').length )
					{
						$('.grid').masonry({
							itemSelector: '.grid-item'
						});
					}
				}
				<?php /*
				$('.adsHolder').each(function(index)
				{
					var width = $(this).width();
					if (width > 160 && width < 200)
					{
						$(this).html('<ins class="adsbygoogle" style="display:inline-block;width:250px;height:250px" data-ad-client="ca-pub-9491964298052525" data-ad-slot="3863008691"></ins>');
					}
					if (width > 259 && width < 309)
					{
						$(this).html('<ins class="adsbygoogle" style="display:inline-block;width:250px;height:250px" data-ad-client="ca-pub-9491964298052525" data-ad-slot="4876703899"></ins>');
					}
					if (width > 309 && width < 464)
					{
						$(this).html('<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9491964298052525" data-ad-slot="7132166290"></ins>');
					}
					if (width > 464 && width < 720)
					{
						$(this).html('<ins class="adsbygoogle" style="display:inline-block;width:468px;height:60px" data-ad-client="ca-pub-9491964298052525" data-ad-slot="2562365896"></ins>');
					}
					(adsbygoogle = window.adsbygoogle || []).push({});
				});
				*/ ?>
			});
			$(document).ready(function()
			{
				$('.menu-left').on('shown.bs.offcanvas', function (){
					$(this).css('display','block');
					$('.menu-right').css('display', 'none');
				});
				$('.menu-right').on('shown.bs.offcanvas', function (){
					$(this).css('display','block');
					$('.menu-left').css('display', 'none');
				});
				
				$('.aside-bar').click(function(){
					
					
					if($('aside').hasClass('transform0'))
					{
						$('aside').removeClass('transform0');
							$('.nav-bg-overlay').hide();
					}
					else
					{
							$('aside').addClass('transform0');
								$('.nav-bg-overlay').show();
					}
				});
				
				$('.nav-bg-overlay').click(function(){
					
							$('aside').removeClass('transform0');
							$(this).hide();
				});
				
			});
		
		</script>
	</body>
</html>