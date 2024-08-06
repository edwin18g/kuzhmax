<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Posts extends CI_Controller
{
	public $settings = array();
	
	function __construct()
	{
		parent::__construct();
		
		$this->load->model('Posts_model', 'model');
		
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
	
	function index()
	{
		
		if(!$this->session->userdata('loggedIn')) return error(403, ($this->input->is_ajax_request() ? 'ajax' : null));
		
		$data['meta']		= array(
			'title' 		=> phrase('posts'),
			'descriptions'	=> phrase('whatever_you_writing_for_is_a_reportations'),
			'keywords'		=> 'post, dwitri, blogs, article, social, blogging',
			'image'			=> guessImage('posts'),
			'author'		=> $this->settings['siteTitle']
		);
		if($this->input->is_ajax_request())
		{
			$this->output->set_content_type('application/json');
			$this->output->set_output(
				json_encode(
					array(
						'meta'		=> $data['meta'],
						'html'		=> $this->load->view('posts/posts', $data, true)
					)
				)
			);
		}
		else
		{
			$this->template->set_partial('navigation', 'dashboard_navigation');
			$this->template->build('posts/posts', $data);
		}
	}
	
	function add()
	{
		if(!$this->session->userdata('loggedIn')) return error(403, ($this->input->is_ajax_request() ? 'ajax' : null));
		if($this->input->post('hash'))
		{
			$this->form_validation->set_rules('postTitle', phrase('post_title'), 'trim|xss_clean|required|is_unique[posts.postTitle]|min_length[10]|max_length[260]');
			$this->form_validation->set_rules('content', phrase('content'), 'trim|xss_clean|required|min_length[10]');
		//	$this->form_validation->set_rules('categoryID[]', phrase('category_id'), 'trim|xss_clean|required');
			$this->form_validation->set_rules('tags', phrase('tags'), 'trim|xss_clean|max_length[160]|callback_alphaCheck');
			
		
			if($this->form_validation->run() == FALSE)
			{
				echo json_encode(array('status' => 204, 'messages' => array(validation_errors('<span><i class="fa fa-ban"></i> &nbsp; ', '</span><br />'))));
			}
			else
			{
				
				 $image_name = $this->upload_checker();
				$headline = 'N';
				$fields = array(
					'contributor'		=> $this->session->userdata('userID'),
					'postTitle'			=> $this->input->post('postTitle'),
					'categoryID'		=> $this->input->post('categoryID'),
					'postSlug'			=> format_uri($this->input->post('postTitle')),
					'postContent'		=> html_entity_decode($this->input->post('content')),
					'postExcerpt'		=> html_entity_decode($this->input->post('content')),
					'tags'				=> str_replace(' ', '', $this->input->post('tags')),
					'postHeadline'		=> $headline,
					'language'			=> $this->session->userdata('language'),
					'timestamp'			=> time()
				);
				
				if($image_name)
				{
					$fields['p_image']  = $image_name;
				}
				if($this->model->createPost($fields))
				{
					$this->session->set_flashdata('success', phrase('article_was_submitted_successfully'));
					echo json_encode(array("status" => 200, "redirect" => base_url('posts/' . format_uri($this->input->post('postTitle')))));
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
			$data['post'] 			= $this->model->getPost($this->uri->segment(4));
			$data['categories']		= $this->model->getCategories();
			$data['meta']			= array(
				'title' 			=> phrase('add_article'),
				'descriptions'		=> phrase('whatever_you_writing_for_is_a_reportations'),
				'keywords'			=> 'post, dwitri, blogs, article, social, blogging',
				'image'				=> guessImage('posts'),
				'author'		=> $this->settings['siteTitle']
			);
			
				if($image_name)
				{
					
					$fields['p_image']  = $image_name;
				}
				
			if($this->input->is_ajax_request())
			{
				if(null != $this->input->post('modal'))
				{
					$data['modal']	= true;
					$this->load->view('posts/posts_add', $data);
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
				$this->template->build('posts/posts_add', $data);
			}
	  	}
	}
	
	function edit()
	{
		if(!$this->session->userdata('loggedIn')) return error(403, ($this->input->is_ajax_request() ? 'ajax' : null));
		if($this->input->post('hash'))
		{
			$this->form_validation->set_rules('postTitle', phrase('post_title'), 'trim|xss_clean|required|min_length[2]|max_length[260]');
			$this->form_validation->set_rules('content', phrase('content'), 'trim|xss_clean|required|min_length[10]');
		//	$this->form_validation->set_rules('categoryID[]', phrase('category_id'), 'trim|xss_clean|required');
			$this->form_validation->set_rules('tags', phrase('tags'), 'trim|xss_clean|max_length[5]|callback_alphaCheck');
			
			if($this->form_validation->run() == FALSE)
			{
				echo json_encode(array('status' => 204, 'messages' => array(validation_errors('<span><i class="fa fa-ban"></i> &nbsp; ', '</span><br />'))));
			}
			else
			{
			
			
					$headline = 'N';
				$image_name = $this->upload_checker();
				$fields = array(
					'postTitle'			=> $this->input->post('postTitle'),
					'categoryID'		=> $this->input->post('categoryID'),
					'postSlug'			=> str_replace(' ','-', $this->input->post('postTitle')),
					'postContent'		=> html_entity_decode($this->input->post('content')),
					'postExcerpt'		=> html_entity_decode($this->input->post('content')),
					'tags'				=> str_replace(' ', '', $this->input->post('tags')),
					'postHeadline'		=> $headline,
					'language'			=> $this->session->userdata('language'),
					'timestamp'			=> time()
				);
			  if($image_name)
			  {
			  	$fields['p_image'] = $image_name;
			  }
				if($this->model->updatePost_id($fields, $this->uri->segment(4)))
				{
					$this->session->set_flashdata('success', phrase('article_was_updated_successfully'));
					echo json_encode(array("status" => 200, "redirect" => base_url('user/posts')));
				}
				else
				{
					echo json_encode(array('status' => 500, 'messages' => phrase('unable_to_update_article')));
				}
			}
		}
		else
		{
			
			$data['current'] 		= $this->uri->segment(2);
			$data['post'] 			= $this->model->getPost_by_id($this->uri->segment(4));
			$data['categories']		= $this->model->getCategories();
			
			$data['meta']			= array(
				'title' 			=> phrase('edit_article'),
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
					$this->load->view('posts/posts_edit', $data);
				}
				else
				{
					$this->output->set_content_type('application/json');
					$this->output->set_output(
						json_encode(
							array(
								'meta'		=> $data['meta'],
								'html'		=> $this->load->view('posts/posts_edit', $data, true)
							)
						)
					);
				}
			}
			else
			{
					$this->template->set_partial('navigation', 'dashboard_navigation');
				$this->template->build('posts/posts_edit', $data);
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
			if($this->model->removePost($this->uri->segment(4)))
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
	
		function upload_checker()
	{
		$config['upload_path'] 		= 'uploads/posts';
		$config['allowed_types'] 	= 'jpg|jpeg|gif|png';
		$config['max_size']      	= 1024*5; //2MB
		$config['encrypt_name']	 	= TRUE;
		
		$this->upload->initialize($config); 
		
		if(!$this->upload->do_upload())
		{
			$this->form_validation->set_message('upload_checker', str_replace(array('<p>', '</p>'),'', $this->upload->display_errors())); 
			return false;
		} 
		else
		{
			$this->upload_data['userfile'] = $this->upload->data();
			
			if($this->upload_data['userfile']['image_type'] != 'gif' && $this->upload_data['userfile']['image_width'] >= 800)
			{
				//upload successful generate a thumbnail
				$config['image_library'] 	= 'gd2';
				$config['source_image'] 	= 'uploads/posts/' . $this->upload_data['userfile']['file_name'];
				$config['create_thumb'] 	= FALSE;
				$config['width']     		= 800;

				$this->load->library('image_lib', $config);
				$this->image_lib->initialize($config);

				if($this->image_lib->resize())
				{
					$this->image_lib->clear();
					generateThumbnail('posts', $this->upload_data['userfile']['file_name']);
					return $this->upload_data['userfile']['file_name'];
				}
				else
				{
					return false;
				}
			}
			else
			{
				generateThumbnail('posts', $this->upload_data['userfile']['file_name']);
				return $this->upload_data['userfile']['file_name'];
			}
		}
	}
	
	
	
	public function redactor_doc()
	{
		
		
		$config['upload_path'] 		= 'uploads/posts/docs';
	$config['allowed_types'] = "gif|jpg|jpeg|png|iso|dmg|zip|rar|doc|docx|xls|xlsx|ppt|pptx|csv|ods|odt|odp|pdf|rtf|sxc|sxi|txt|exe|avi|mpeg|mp3|mp4|3gp";
		$config['encrypt_name']	 	= TRUE;
		
		$this->upload->initialize($config); 
		
		if(!$this->upload->do_upload())
		{
			echo 'error';
			
			die;
		} 
		else
		{
			$this->upload_data['userfile'] = $this->upload->data();
			
			echo '<iframe id="iframeID" name="iframeID" width="100%" height="100%" style="border: none;min-height:400px" src="https://docs.google.com/viewerng/viewer?url='.site_url('uploads/posts/docs/'.$this->upload_data['userfile']['file_name']).'&amp;embedded=true"></iframe>';
		die;
		}
	}
}
