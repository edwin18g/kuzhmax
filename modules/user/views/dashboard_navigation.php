				<div class="row adminSideBar hidden-xs" style="position: fixed;
    overflow: auto;">
					<div class="col-sm-12">
						<div class="list-group">
						
							<a href="<?php echo base_url('user/dashboard'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == '' || $this->uri->segment(2) == 'dashboard') echo ' active'; ?>">
								
								<i class="fa fa-dashboard"></i> <span class="togle-nav">&nbsp; <?php echo phrase('dashboard'); ?></span></a>
							
							<a href="<?php echo base_url('user/posts'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'posts') echo ' active'; ?>"><i class="fa fa-newspaper-o"></i> 
							
							<span class="togle-nav">
							&nbsp; <?php echo phrase('posts'); ?> &nbsp; <?php echo (countPosts('posts', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) > 0 ? '<span class="badge">' . countPosts('posts', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) . '</span>' : '') ?>
							</span>
							</a>
							
							<a href="<?php echo base_url('user/snapshots'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'snapshots') echo ' active'; ?>"><i class="fa fa-image"></i> 
							<span class="togle-nav">
							&nbsp; <?php echo phrase('snapshots'); ?> &nbsp; <?php echo (countPosts('snapshots', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) > 0 ? '<span class="badge">' . countPosts('snapshots', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) . '</span>' : '') ?></span></a>
			
						
							
							<!--<a href="< ?php echo base_url('user/tv'); ?>" class="ajaxloads list-group-item< ?php if($this->uri->segment(2) == 'tv') echo ' active'; ?>"><i class="fa fa-desktop"></i> &nbsp; <?php echo phrase('tv_channels'); ?> &nbsp; < ?php echo (countPosts('tv', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) > 0 ? '<span class="badge">' . countPosts('tv', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) . '</span>' : '') ?></a>-->
							
							<?php if($this->session->userdata('user_level') == 1) : ?>
							<a href="<?php echo base_url('user/circular'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'circular') echo ' active'; ?>"><i class="fa fa-image"></i> <span class="togle-nav">Circular</span></a>
									<a href="<?php echo base_url('user/commissions'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'commissions') echo ' active'; ?>"><i class="fa fa-language"></i> <span class="togle-nav">&nbsp; Commissions</span></a>
					
								<a href="<?php echo base_url('user/openletters'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'openletters') echo ' active'; ?>"><i class="fa fa-paperclip"></i> <span class="togle-nav">&nbsp; <?php echo phrase('open_letters'); ?> &nbsp; <?php echo (countPosts('openletters', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) > 0 ? '<span class="badge">' . countPosts('openletters', ($this->session->userdata('user_level') == 1 ? null : $this->session->userdata('userID'))) . '</span>' : '') ?></span></a>
								<a href="<?php echo base_url('user/administration'); ?>" class="ajaxloads list-group-item <?php if($this->uri->segment(2) == 'administration') echo ' active'; ?>"><i class="fa fa-file-o"></i><span class="togle-nav"> Administrations<?php /*echo phrase('manage_pages'); */ ?></span></a>
								
								<a href="<?php echo base_url('user/pages'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'pages') echo ' active'; ?>"><i class="fa fa-files-o"></i> <span class="togle-nav">&nbsp; <?php echo phrase('manage_pages'); ?></span></a>
							
								<a href="<?php echo base_url('user/categories'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'categories') echo ' active'; ?>"><i class="fa fa-sitemap"></i> <span class="togle-nav">&nbsp; <?php echo phrase('post_categories'); ?> &nbsp; <?php echo (countPosts('categories', null) > 0 ? '<span class="badge">' . countPosts('categories', null) . '</span>' : '') ?></span></a>
							
								<a href="<?php echo base_url('user/users'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'users') echo ' active'; ?>"><i class="fa fa-users"></i> <span class="togle-nav">&nbsp; Priests <!--< ?php echo phrase('users'); ?>--> &nbsp; <?php echo (countPosts('users', null) > 0 ? '<span class="badge">' . countPosts('users', null) . '</span>' : '') ?></span></a>
							
								<a href="<?php echo base_url('user/settings'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'settings') echo ' active'; ?>"><i class="fa fa-cogs"></i> <span class="togle-nav">&nbsp; <?php echo phrase('global_settings'); ?></span></a>
							
								<a href="<?php echo base_url('user/translate'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'translate') echo ' active'; ?>"><i class="fa fa-language"></i> <span class="togle-nav">&nbsp; <?php echo phrase('translate'); ?></span></a>
					
							
							<?php endif; ?>
							<a href="<?php echo base_url('user/edit_profile'); ?>" class="ajaxloads list-group-item<?php if($this->uri->segment(2) == 'edit_profile') echo ' active'; ?>"><i class="fa fa-cogs"></i> <span class="togle-nav">&nbsp; <?php echo phrase('edit_profile'); ?></span></a>
							
							<a href="<?php echo base_url('user/logout'); ?>" class="ajaxloads list-group-item"><i class="fa fa-sign-out"></i> <span class="togle-nav">&nbsp; <?php echo phrase('logout'); ?></span></a>
							
						</div>
					
					</div>
				</div>