<?php defined('BASEPATH') OR exit('No direct script access allowed');

    header('Access-Control-Allow-Origin: *');
     header('Access-Control-Allow-Headers: Content-Type,Authorization');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type,Authorization');
    exit;
}

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
	
	function index($slug = null, $limit = 10, $offset = 0)
	{
	
		$slug   = ($slug != null)?urldecode($slug):null;
		
		if($slug)
		{
$posts					= $this->model->getPost($slug);			
		}
		else
		{

	
		$id  = (isset($_GET['id']))?$_GET['id']:false;
		
		$param = array();
		
		$param['id'] = $id;
		
		$posts					= $this->model->getPosts($param);
		}
		
		
		
		if($posts)
		{
			$data['post']		= $posts;
			$data['meta']		= array(
				'title' 		=> $this->model->getPostTitle($slug),
				'descriptions'	=> $this->model->getPostExcerpt($slug),
				'keywords'		=> $this->model->getPostTags($slug),
				'image'			=> guessImage('posts', $slug),
				'author'		=> $this->model->getPostContributor($slug)
			);
			if($this->input->is_ajax_request())
			{
				$this->output->set_content_type('application/json');
				$this->output->set_output(
					json_encode(
						array(
							'meta'		=> $data['meta'],
							'html'		=> $this->load->view('article', $data, true)
						)
					)
				);
			}
			else
			{
				$this->template->build('article', $data);
			}
		}
		elseif(categoryCheck($slug))
		{
			$data['category']	= categoryCheck($slug);
			$data['meta']		= array(
				'title' 		=> $this->model->getCategoryTitle($slug),
				'descriptions'	=> $this->model->getCategoryExcerpt($slug),
				'keywords'		=> $this->model->getCategoryTags($slug),
				'image'			=> guessImage('posts', $slug),
				'author'		=> $this->settings['siteTitle']
			);
			if($this->input->is_ajax_request())
			{
				$this->output->set_content_type('application/json');
				$this->output->set_output(
					json_encode(
						array(
							'meta'		=> $data['meta'],
							'html'		=> $this->load->view('category', $data, true)
						)
					)
				);
			}
			else
			{
				$this->template->build('category', $data);
			}
		}
		else
		{
			$data['posts'] = $this->model->getPosts();
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
							'html'		=> $this->load->view('posts', $data, true)
						)
					)
				);
			}
			else
			{
				$this->template->build('posts', $data);
			}
		}
	}
	
	function api()
	{
		
		$id  = (isset($_GET['id']))?$_GET['id']:false;
		
		$param = array();
		
		$param['id'] = $id;
		
		$posts					= $this->model->getPosts($param);
		$this->output->set_content_type('application/json');
				$this->output->set_output(
					json_encode(
						array(
							
							'post'		=> $posts
						)
					)
				);
	}
	
	
}
