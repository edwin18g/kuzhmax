
	<style>
		.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}
.mb-4, .my-4 {
    margin-bottom: 1.5rem!important;
}
.justify-content-center {
    -ms-flex-pack: center!important;
    justify-content: center!important;
}
.pagination {
    display: -ms-flexbox;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: .25rem;
    list-style: none;
}
.card-img-top {
    width: 100%;
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
}
.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
}
.card-footer:last-child {
    border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
}

.card-footer {
    padding: .75rem 1.25rem;
    background-color: rgba(0,0,0,.03);
    border-top: 1px solid rgba(0,0,0,.125);
}
.text-muted {
    color: #6c757d!important;
}
	</style>
	
	
	<div class="bg-info">
		<div class="container first-child">
			<div class="row">
				<div class="col-md-9 hidden-xs">
					<h2><i class="fa fa-newspaper-o"></i> &nbsp; <?php echo phrase('posts'); ?></h2>
				</div>
			
			</div>
		</div>
	</div>
	
	<div class="container">
		<div class="row">
			<div class="col-md-2 hidden-xs hidden-sm sticky">
			
				<?php echo widget_sidebarCategory(); ?>
			</div>
			<div class="col-md-7 nomargin ">
				
				<div class="grid row">
				
				<?php 
				
				foreach($posts as $post): ?>
				
				
				<div class="card mb-4">
          <img class="card-img-top" src="<?=getFeaturedImage($post['postID'], 1) ?>" alt="Card image cap">
          <div class="card-body">
            <h2 class="card-title"><?=$post['postTitle']?></h2>
            <p class="card-text"><?=$post['postContent']?></p>
            <a href="#" class="btn btn-primary">Read More →</a>
          </div>
          <div class="card-footer text-muted">
            Posted on <?=time_since($post['timestamp'])?> by 
          
          </div>
        </div>
				
				
				
				<?php endforeach;?>
				
				</div>
			</div>
		
		</div>
	</div>











