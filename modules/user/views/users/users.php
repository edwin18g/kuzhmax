
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
	
	<div class="bg-info">
		<div class="container-fluid first-child">
			<div class="row">
				<div class="col-sm-5  hidden-xs">
						<span class="Page-title">User <i class="fa fa-angle-double-right"></i> Priests <i class="fa fa-angle-double-right"></i></span>
				</div>
				<div class="col-sm-3">
					<form class="form-horizontal" action="<?php echo base_url('users'); ?>" method="post">
						<div class="input-group">
							<input type="text" class="form-control input-md" name="query" placeholder="Search priest" />
							<span class="input-group-btn">
								<button type="submit" class="btn btn-md btn-success nomargin"><i class="fa fa-search"></i></button>
							</span>
						</div>
					</form>
				</div>
				<div class="col-sm-2"><a class="ajaxloads btn btn-success btn-md btn-block" href="<?php echo base_url('user/register'); ?>"><i class="fa fa-user-plus"></i> &nbsp; <?php echo phrase('register'); ?></a></div>
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-2 hidden-xs hidden-sm sticky" style="background: #fff;margin: 0px;position: static;">
			
				<?php echo ($this->input->is_ajax_request() ? $this->load->view('dashboard_navigation') : $template['partials']['navigation']); ?>
				
			</div>
			<div class="col-md-7 sticky">
				<table class="table table-hover">
					<tr>
						<th>Profile</th>
						<th>
							<?php echo phrase('username'); ?>
						</th>
						<th class="hidden-xs">
							<?php echo phrase('full_name'); ?>
						</th>
						<th class="hidden-xs">
						priest Type
						</th>
						<th class="hidden-xs">
							<?php echo phrase('level'); ?>
						</th>
						<th class="text-right col-xs-4">
							<?php echo phrase('action'); ?>
						</th>
					</tr>
					
					<?php
						$n = 1;
						$p_type = array(0 =>'Not Assign',1=>'Diocesan Priests',2=>'Priests on Contract',3=>'Religious Priests',4=>'Religious Men');
						$users = listUsers(null, $limit, $offset);
						if($users)
						{
							foreach($users as $c)
							{
								$jsfun = "readPhotos(this, 'userfile_preview','".$c['userID']."');";
								$profile = '<form id="photoUpload-'.$c['userID'].'" class="profileupload" action="'.base_url('user/uploads/photo/users/'.$c['userID']).'" method="post" enctype="multipart/form-data"><div style=" position:relative; display:block">
										<img id="userfile_preview-'.$c['userID'].'" src="'.base_url('uploads/users/' . imageCheck('users', getUserPhoto($c['userID']))).'" class="img-rounded img-bordered" style="height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 50%;]]" alt="" />
										<input onchange="'.$jsfun.'" type="file" name="userfile" style="    width: 60px;
    height: 60px;
    position: absolute;
    top: 0px;
    background: aqua;
    opacity: 0;
    cursor: pointer;" accept="image/*" /></div></form>
									';
						
								
								
								echo '
									<tr id="user' . $c['userID'] . '">
									<td>'.$profile.'</td>
										<td>
											<a href="' . base_url($c['userName']) . '" target="_blank">' . truncate($c['userName'], 50) . '</a>
										</td>
										<td class="hidden-xs">
											<a href="' . base_url($c['userName']) . '" target="_blank">' . truncate($c['full_name'], 50) . '</a>
										</td>
										<td class="hidden-xs">
											' . $p_type[$c['pr_type']] . '
										</td>
										<td class="hidden-xs">
											' . ($c['level'] == 1 ? '<b class="text-primary">' . phrase('administrator') . '</b>' : ($c['level'] == 2 ? '<b class="text-success">' . phrase('moderator') . '</b>' : 'priest')) . '
										</td>
										<td class="text-right col-xs-4">
											<div class="btn-group">
												<a class="btn btn-default btn-sm newPost" href="' . base_url('user/users/edit/' . $c['userName']) . '" data-push="tooltip" data-placement="top" title="' . phrase('edit_user') . '"><i class="btn-icon-only fa fa-edit"> </i></a>
												<a class="btn btn-default btn-sm" href="javascript:void(0)" onclick="confirm_modal(\'' . base_url('user/users/remove/' . $c['userID']) . '\', \'user' . $c['userID'] . '\')" data-push="tooltip" data-placement="top" title="' . phrase('remove') . '"><i class="btn-icon-only fa fa-times"> </i></a>
											</div>
										</td>
									</tr>
								';
							}
						}
					?>
					
				</table>
				
				<hr/>
				<div class="row">
					<div class="col-sm-12 text-center">
					
						<?php echo generatePagination('users', null, null, 'user', $limit, $offset); ?>
						
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<script>
		
		function readPhotos(event, subName, id) {
  if (event.files && event.files[0]) {
    $("#modal_ajax_sm .modal-body").addClass("preloader");
    $("#modal_ajax_sm").modal({
      backdrop : "static",
      keyboard : false
    });
    /** @type {!FileReader} */
    var fileReader = new FileReader;
    /**
     * @param {!Event} fileLoadedEvent
     * @return {undefined}
     */
    fileReader.onload = function(fileLoadedEvent) {
      $("#userfile_preview-"+id).attr("src", fileLoadedEvent.target.result);
    };
    fileReader.readAsDataURL(event.files[0]);
    var form = $('#photoUpload-'+id)[0];
var data = new FormData(form);
      
      $.ajax({
        type : "POST",
        url : $('#photoUpload-'+id).attr("action"),
        enctype: 'multipart/form-data',
        data :data,
        contentType : false,
        cache : false,
        processData : false,
        success : function(data) {
          try {
            var op = $.parseJSON(data);
            if (403 == op.status) {
              $(".modal").modal("hide");
              $("#login").modal();
            } else {
              if (200 == op.status) {
                $("*").modal("hide");
                $("#modal_success .modal-body").removeClass("preloader").html(op.messages);
                $("#modal_success").modal();
              } else {
                $("#modal_alert .modal-body").removeClass("preloader").html(op.messages);
              }
            }
          } catch (a) {
            $("#modal_alert .modal-body").removeClass("preloader").html(data);
          }
        }
      }).fail(function() {
        $("#modal_alert .modal-body").html(fail_alert);
        $("#modal_alert").appendTo("body").modal();
      });
    
  }
}

    
	</script>