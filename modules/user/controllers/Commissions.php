<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Commissions extends CI_Controller
{
	public $settings = array();
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('User_model', 'model');
			$this->load->model('Commissions_model', 'commission');
		/* CACHE CONTROL*/
		$this->output->set_header('Last-Modified: ' . gmdate("D, d M Y H:i:s") . ' GMT');
		$this->output->set_header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
		$this->output->set_header('Pragma: no-cache');
		$this->output->set_header("Expires: Mon, 26 Jul 2010 05:00:00 GMT");
		$this->settings = globalSettings();
		
	}
	
	public function _remap($method = null)
	{
		if(method_exists($this, $method))
		{
			call_user_func(array($this, $method));
			return false;
		}
		else
		{
			$this->index($method);
		}
	}
	
	function index()
	{
		if(!$this->session->userdata('loggedIn') && $this->session->userdata('user_level') != 1) return error(403, ($this->input->is_ajax_request() ? 'ajax' : null));
		
		$data['meta']		= array(
			'title' 		=> phrase('users'),
			'descriptions'	=> phrase('whatever_you_writing_for_is_a_reportations'),
			'keywords'		=> 'post, dwitri, blogs, article, social, blogging',
			'image'			=> guessImage('users'),
			'author'		=> $this->settings['siteTitle']
		);
		$data['commissions']	 = $this->commission->getCommissions();
		//echo "<pre>";print_r($data['commissions']);
		
		if($this->input->post('slug'))
		{
			if(	$data['commissions'])
						{
							foreach(	$data['commissions'] as $c)
							{
								$jsfun = "readPhotos(this, 'userfile_preview','".$c['id']."');";
								$profile = '<form id="photoUpload-'.$c['id'].'" class="profileupload" action="'.base_url('user/uploads/photo/commissions/'.$c['id']).'" method="post" enctype="multipart/form-data"><div style=" position:relative; display:block">
										<img id="userfile_preview-'.$c['id'].'" src="'.imageUrlCheck('uploads/commissions/'.$c['c_img']) .'" class="img-rounded img-bordered" style="height: 60px;
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
									<div id="user' . $c['id'] . '" class="flex-row">
									<span>'.$profile.'</span>
										<span>
											<a href="' . base_url($c['c_name']) . '" target="_blank">' . truncate($c['c_name'], 50) . '</a>
										</span>
									
										
									
										<span class="text-right col-xs-4">
											<div class="btn-group">
											
												<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Option
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li>	<a class="btn btn-default btn-sm " href="' . base_url('user/commissions/edit/' . $c['id']) . '" data-push="tooltip" data-placement="top" title="' . phrase('edit_user') . '"><i class="btn-icon-only fa fa-ellipsis-v"> </i></a></li>
    <li><a class="btn btn-default btn-sm" href="javascript:void(0)" onclick="confirm_modal(\'' . base_url('user/commissions/remove/' . $c['id']) . '\', \'user' . $c['userID'] . '\')" data-push="tooltip" data-placement="top" title="' . phrase('remove') . '"><i class="btn-icon-only fa fa-times"> </i></a></li>
  
  </ul>
</div>
												
											</div>
										</span>
									</div>
								';
							}
						}
						die;
		}
		else
		{
		$this->template->set_partial('navigation', 'dashboard_navigation');
			$this->template->build('commission/commissions', $data);
		}
	}
	
	function user_filter_select()
	{
		
		if($this->input->post('keyword'))
		{
			$param = array('keyword'=>$this->input->post('keyword'));
				$data	 = $this->commission->get_users($param);
			 $htmlR  = '';
				if(!empty($data))
				{
					foreach($data as $key => $val)
					{
						$htmlR .= '<li onclick ="selectFilterId('.$val['userID'].', \''.$val['full_name'].'\')"><a href="#"><img style ="width:42px" id="userfile_preview-'.$val['userID'].'" src="'.imageUrlCheck('uploads/users/'.$val['photo']) .'" class="img-rounded img-bordered"/>'.$val['full_name'].'</a></li>';			
					}
				}
				else
				{
					$htmlR .= '<li><a href="#">No User</a></li>';		
				}
			 echo $htmlR;
			 die;
		}
		
	}
	
	function add()
	{
		ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
	//	echo "<pre>";print_r($this->input->post());die;
		if(!$this->session->userdata('loggedIn')) return error(403, ($this->input->is_ajax_request() ? 'ajax' : null));
		if($this->input->post('hash'))
		{
			//$this->form_validation->set_rules('user_id', phrase('cc_name'), 'trim|xss_clean|required|is_unique[posts.postTitle]|min_length[10]|max_length[260]');
			//$this->form_validation->set_rules('a_role', phrase('content'), 'trim|xss_clean|required|min_length[160]');
			//$this->form_validation->set_rules('a_type', phrase('category_id'), 'trim|xss_clean|required');
			//if($this->form_validation->run() == true)
			// {
			// 	echo json_encode(array('status' => 204, 'messages' => array(validation_errors('<span><i class="fa fa-ban"></i> &nbsp; ', '</span><br />'))));
			// }
			// else
			{
				
				$headline = 'Y';
				$fields = array(
					'c_name'		=> $this->input->post('cc_name'),
					'slug'			=> $this->input->post('cc_url'),
					'access_user'		=> $this->input->post('cc_admin'),
						'address'		=> $this->input->post('cc_address'),
						'telephone'		=> $this->input->post('cc_phone')
					
				);
				if($this->commission->saveCommission($fields))
				{
					$this->session->set_flashdata('success','New commission created successfully');
					redirect( base_url('user/commissions'));
					echo json_encode(array("status" => 200, "redirect" => base_url('user/commissions')));
				}
				else
				{
					echo json_encode(array('status' => 500, 'messages' => phrase('unable_to_save_article')));
				}
			}
		}
		else
		{
			$data['current'] 		= $this->uri->segment(2);
			//$data['post'] 			= $this->model->getPost($this->uri->segment(4));
			$data['a_type'] 		= $this->model->a_type;
			$data['meta']			= array(
				'title' 			=> phrase('add_article'),
				'descriptions'		=> phrase('whatever_you_writing_for_is_a_reportations'),
				'keywords'			=> 'post, dwitri, blogs, article, social, blogging',
				'image'				=> guessImage('posts'),
				'author'		=> $this->settings['siteTitle']
			);
			if($this->input->is_ajax_request())
			{
				if(null != $this->input->post('modal'))
				{
					$data['modal']	= true;
					$this->load->view('administration/posts_add', $data);
				}
				else
				{
					$this->output->set_content_type('application/json');
					$this->output->set_output(
						json_encode(
							array(
								'meta'		=> $data['meta'],
								'html'		=> $this->load->view('posts/posts_add', $data, true)
							)
						)
					);
				}
			}
			else
			{
				$this->template->build('administration/posts_add', $data);
			}
	  	}
	}
	function edit()
	{
		
		if(!$this->session->userdata('loggedIn') && $this->session->userdata('user_level') != 1) return error(403, ($this->input->is_ajax_request() ? 'ajax' : null));
		
		if(null != $this->input->post('hash'))
		{
			$this->form_validation->set_rules('full_name', phrase('full_name'), 'trim|required|xss_clean');
			$this->form_validation->set_rules('gender', phrase('gender'), 'trim|required|xss_clean');
			$this->form_validation->set_rules('age', phrase('age'), 'trim|required|xss_clean|numeric');
			$this->form_validation->set_rules('mobile', phrase('mobile'), 'trim|required|xss_clean|numeric');
			$this->form_validation->set_rules('address', phrase('address'), 'trim|required|xss_clean');
			$this->form_validation->set_rules('language', phrase('language'), 'trim|xss_clean');
			$this->form_validation->set_rules('bio', phrase('address'), 'trim|xss_clean');
			$this->form_validation->set_rules('email', phrase('email_address'), 'trim|required');
			$this->form_validation->set_rules('username', phrase('username'), 'trim|required|alpha_dash');
			
			if(null != $this->input->post('password'))
			{
				$this->form_validation->set_rules('password', phrase('password'), 'trim|required|min_length[4]|max_length[32]');
				$this->form_validation->set_rules('con_password', phrase('confirmation_password'),'trim|required|matches[password]');
			}
			
			if($this->form_validation->run() == FALSE)
			{
				echo json_encode(array('status' => 204, 'messages' => array(validation_errors('<span><i class="fa fa-ban"></i> &nbsp; ', '</span><br />'))));
			}
			else
			{
				$fields = array(
					'userName'			=> $this->input->post('username'),
					'full_name'			=> $this->input->post('full_name'),
					'gender'			=> $this->input->post('gender'),
					'age'				=> $this->input->post('age'),
					'mobile'			=> $this->input->post('mobile'),
					'address'			=> $this->input->post('address'),
					'email'				=> $this->input->post('email'),
					'language'			=> $this->input->post('language'),
					'bio'				=> $this->input->post('bio'),
						'pr_father_name'				=> $this->input->post('pr_father_name'),
					'pr_mother_name'				=> $this->input->post('pr_mother_name'),
						'pr_birth_date'				=> $this->input->post('pr_birth_date'),
							'pr_birth_place'				=> $this->input->post('pr_birth_place'),
								'pr_seminary'				=> $this->input->post('pr_seminary'),

	'pr_ordination_date'				=> $this->input->post('pr_ordination_date'),
		'pr_place_ordination'				=> $this->input->post('pr_place_ordination'),
		'pr_ordination_by'				=> $this->input->post('pr_ordination_by'),
		'pr_parish'				=> $this->input->post('pr_parish'),
		'level'    => $this->input->post('level'),
		'pr_type' => $this->input->post('pr_type')
				);
				if(null != $this->input->post('con_password'))
				{
					$fields['password']	= sha1($this->input->post('con_password') . SALT);
				}
		
				if($this->model->updateUser($fields, $this->uri->segment(4)))
				{
					$this->session->set_flashdata('success', phrase('user_profile_was_updated_successfully'));
					echo json_encode(array("status" => 200, "redirect" => base_url('user/users')));
				}
				else
				{
					echo json_encode(array('status' => 500, 'messages' => phrase('unable_to_update_user_profile')));
				}
			}
		}
		else
		{
			
			$data['commission']		= $this->commission->getCommissionsbyId($this->uri->segment(4));
			$data['commission'] 	= $data['commission'][0];
			//echo "<pre>";print_r($data['commission']);die;
			$data['meta']		= array(
				'title' 		=> phrase('edit_user'),
				'descriptions'	=> phrase('whatever_you_writing_for_is_a_reportations'),
				'keywords'		=> 'post, dwitri, blogs, article, social, blogging',
				'image'			=> guessImage('users'),
				'author'		=> $this->settings['siteTitle']
			);
			if($this->input->is_ajax_request())
			{
				if(null != $this->input->post('modal'))
				{
					$data['modal']	= true;
					$this->load->view('commission/users_edit', $data);
				}
				else
				{
					$this->output->set_content_type('application/json');
					$this->output->set_output(
						json_encode(
							array(
								'meta'		=> $data['meta'],
								'html'		=> $this->load->view('commission/users_edit', $data, true)
							)
						)
					);
				}
			}
			else
			{
				$this->template->set_partial('navigation', 'dashboard_navigation');
				$this->template->build('commission/users_edit', $data);
			}
		}
	}
	function article(){
		echo "D";
		die;
	}
	
	function remove()
	{
			error_reporting(-1);
		ini_set('display_errors', 1);
		if(!$this->input->is_ajax_request()) return error(404, ($this->input->is_ajax_request() ? 'ajax' : null));
		
		if(!$this->session->userdata('loggedIn') && $this->session->userdata('user_level') != 1)
		{
			echo json_encode(array('status' => 403));
		}
		else
		{
			if($this->commission->removeUser($this->uri->segment(4)))
			{
				echo json_encode(array('status' => 200));
			}
			else
			{
				echo json_encode(array('status' => 500));
			}
		}
	}
}