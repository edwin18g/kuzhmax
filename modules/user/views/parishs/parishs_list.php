
<?php foreach($list as $parish){?>
<div class="col-sm-3 col-xs-6">
							
							
					<div class="col-sm-12 card-item">
					
         		<div class="card ">
         				<div class="dropdown" style="
    text-align: center;
">
  <button class="btn btn-link dropdown-toggle" type="button" data-toggle="dropdown">Option
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="<?=base_url('user/parishs/pages/'.$parish['id'])?>">Pages</a></li>
    <li><a href="<?=base_url('user/parishs/setting/'.$parish['id'])?>">Setting</a></li>
    <li><a href="#">delete</a></li>
  </ul>
</div>
            		<img class="card-img-parish" src="<?=base_url('uploads/parish/'.imageCheck('parish', $parish['cimg']))?>" alt="Card image cap">
            		<div class="card-body">
               		<h5 class="card-title card-warp"><?=$parish['cname']?></h5>
               	
               	
            		</div>
         		</div>
      		</div>
      		
								
							</div>
							
							
	<?php } ?>			