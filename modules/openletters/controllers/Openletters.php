<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Openletters extends CI_Controller
{
	public $settings = array();
	
	function __construct()
	{
		parent::__construct();
		/* CACHE CONTROL*/
		$this->output->set_header('Last-Modified: ' . gmdate("D, d M Y H:i:s") . ' GMT');
		$this->output->set_header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
		$this->output->set_header('Pragma: no-cache');
		$this->output->set_header("Expires: Mon, 26 Jul 2010 05:00:00 GMT");
		$this->settings = globalSettings();
		$this->load->model('Openletters_model');
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
		
	
		$data 								= array();
	
	
				$this->template->build('openletters', $data);
	
	}
	
	function view ()
	{
		// echo  $this->uri->segment(2);die;
		$data = array('slug'=>$this->uri->segment(2));
		
		
		$circular = $this->Openletters_model->single_circular($data);
		if(!empty($circular)) 
		{
				$data['circular']  = $circular;
			
		}
	
		
			$this->template->build('openletters/details', $data);
	
	
	
}
}
