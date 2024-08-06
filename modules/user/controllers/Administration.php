<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Administration extends CI_Controller
{
	public $settings = array();
	
	function __construct()
	{
		parent::__construct();

		
		$this->load->model('Administration_model','model');
		
		/* CACHE CONTROL*/
		$this->output->set_header('Last-Modified: ' . gmdate("D, d M Y H:i:s") . ' GMT');
		$this->output->set_header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
		$this->output->set_header('Pragma: no-cache');
		$this->output->set_header("Expires: Mon, 26 Jul 2010 05:00:00 GMT");
		
		$this->settings = globalSettings();
		
		if(!$this->session->userdata('online'))
		{
			$ip		= getenv('remote_addr');
			$this->session->set_userdata('online', TRUE);
			insertVisitor();
		}
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

	function get_user()
	{
		$users		= $this->model->getUsers(array('search'=>''));
		$this->output->set_content_type('application/json');
			$this->output->set_output(
				json_encode(
					array(
						'response'		=> $users
					)
				)
			);

	}
	
	function index()
	{
		//echo "die"; die;
		if(!$this->session->userdata('loggedIn')) return error(403, ($this->input->is_ajax_request() ? 'ajax' : null));
		
		$data['meta']		= array(
			'title' 		=> phrase('administration'),
			'descriptions'	=> phrase('whatever_you_writing_for_is_a_reportations'),
			'keywords'		=> 'post, dwitri, blogs, article, social, blogging',
			'image'			=> guessImage('posts'),
			'author'		=> $this->settings['siteTitle']
		);
		$administration		= $this->model->getAdministration();
		$data['administration'] = $administration;
		$data['a_type'] 		= $this->model->a_type;
		
		if($this->input->is_ajax_request())
		{
			$this->output->set_content_type('application/json');
			$this->output->set_output(
				json_encode(
					array(
						'meta'		=> $data['meta'],
						'html'		=> $this->load->view('administration/administration', $data, true)
					)
				)
			);
		}
		else
		{
			$this->template->set_partial('navigation', 'dashboard_navigation');
			$this->template->build('administration/administration', $data);
		}
	}
	
	function add()
	{
		if(!$this->session->userdata('loggedIn')) return error(403, ($this->input->is_ajax_request() ? 'ajax' : null));
		if($this->input->post('hash'))
		{
			//$this->form_validation->set_rules('user_id', phrase('post_title'), 'trim|xss_clean|required|is_unique[posts.postTitle]|min_length[10]|max_length[260]');
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
					'a_role'		=> $this->input->post('a_role'),
					'a_type'			=> $this->input->post('a_type'),
					'a_user_id'		=> $this->input->post('user_id')
					
				);
				if($this->model->saveAdministration($fields))
				{
					$this->session->set_flashdata('success', phrase('article_was_submitted_successfully'));
					echo json_encode(array("status" => 200, "redirect" => base_url('user/administration')));
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
		$id = $this->uri->segment(4);
			$data['a_type'] 		= $this->model->a_type;
		if(!$this->session->userdata('loggedIn')) return error(403, ($this->input->is_ajax_request() ? 'ajax' : null));
		if($this->input->post('hash'))
		{
			
			$this->form_validation->set_rules('user_id', phrase('post_title'), 'trim|xss_clean|required');
			$this->form_validation->set_rules('a_type', phrase('content'), 'trim|xss_clean|required');
			$this->form_validation->set_rules('a_role', phrase('category_id'), 'trim|xss_clean|required');
		
			
			if($this->form_validation->run() == FALSE)
			{
				echo json_encode(array('status' => 204, 'messages' => array(validation_errors('<span><i class="fa fa-ban"></i> &nbsp; ', '</span><br />'))));
			}
			else
			{
			
			$fields = array(
				'id' =>$id,
					'a_role'		=> $this->input->post('a_role'),
					'a_type'			=> $this->input->post('a_type'),
					'a_user_id'		=> $this->input->post('user_id')
					
				);
				if($this->model->saveAdministration($fields))
				{
					$this->session->set_flashdata('success', phrase('article_was_updated_successfully'));
					echo json_encode(array("status" => 200, "redirect" => base_url('user/administration')));
				}
				else
				{
					echo json_encode(array('status' => 500, 'messages' => phrase('unable_to_update_article')));
				}
			}
		}
		else
		{
			if(isset($id))
			{
				$data['administration'] = $this->model->get_administraion_by_id(array('id'=>$id));
				//echo "<pre>"; print_r($data['administration']);die;
				
					if($this->input->is_ajax_request())
			{
				if(null != $this->input->post('modal'))
				{
					$data['modal']	= true;
					$this->load->view('administration/posts_edit', $data);
				}
				else
				{
					$this->output->set_content_type('application/json');
					$this->output->set_output(
						json_encode(
							array(
								'meta'		=> $data['meta'],
								'html'		=> $this->load->view('administration/posts_edit', $data, true)
							)
						)
					);
				}
			}
			else
			{
				$this->template->build('administration/posts_edit', $data);
			}
	  	}
				
			}
			
		
		
	}
	
	function remove()
	{
		if(!$this->input->is_ajax_request()) return error(404, ($this->input->is_ajax_request() ? 'ajax' : null));
		
		if(!$this->session->userdata('loggedIn'))
		{
			echo json_encode(array('status' => 403));
		}
		else
		{
			if($this->model->removeadmininstraion($this->uri->segment(4)))
			{
				echo json_encode(array('status' => 200));

			}
			else
			{
				echo json_encode(array('status' => 500));
			}
		}
	}
	
	function alphaCheck($str = null) 
	{
		if($str != null)
		{
			if(!preg_match('/^[a-z, \-]+$/i',$str))
			{
				$this->form_validation->set_message('alphaCheck', phrase('tags_contain_unsupported_characters')); 
				return false;
			}
		}
		else
		{
			return true;
		}
	}
}
