<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Priests extends CI_Controller
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
		$this->load->model('Priests_model');
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
		$data['p_type']     	= $this->Priests_model->priest_type;
		$keyword              = ($this->input->post('keyword') != null)?$this->input->post('keyword'):false;
		$type     						= ($this->input->post('slug'))?$this->input->post('slug'):0;
		
	
		
	
		
		if($this->input->post('slug'))
		{
			if($type != '0')
			{
				if($type == '/' || $type == 'all' )
				{
					$type = 0;
				}
				elseif($type == 'diocesan-priests')
				{
			 $type = 1;
				}
				elseif($type == 'priests-on-contract')
				{
					$type = 2;
				}
				elseif($type == 'religious-priests')
				{
					$type = 3;
				}
				elseif($type == 'other-diocesan-priests')
				{
					$type = 5;
				}
			}
			
				$data['search']  			= $this->Priests_model->listpriests(null, $limit, $offset,$keyword,$type);
			$htmlData = '';
				foreach($data['search'] as $row)
				{
		
			$htmlData .='<div class="col-sm-4 col-xs-6 ">
							
				 				<a href="'.base_url($row['userName']).'" class="">
				 	<div class="col-sm-12 card-item">
         		<div class="card ">
             		<img class="card-img-profile" src="'. base_url('uploads/users/thumbs/' . imageCheck('users', getUserPhoto($row['userID']), 1)).'" alt="Card image cap">
             		<div class="card-body">
               		<h5 class="card-title card-warp">'.$row['full_name'].'</h5>
               	
               	
             		</div>
         		</div>
       		</div>
       		</a>
								
						</div>';
						
						}
			echo $htmlData; 
			die;
		}
		
		if($this->input->post('hash'))
		{
			$this->form_validation->set_rules('query', phrase('keywords'), 'trim|required|xss_clean|max_length[20]|alpha');
			
			if($this->form_validation->run() == FALSE)
			{
				echo json_encode(array('status' => 204, 'messages' => array(validation_errors('<span><i class="fa fa-ban"></i> &nbsp; ', '</span><br />'))));
			}
			else
			{
				echo json_encode(array("status" => 200, "redirect" => base_url('users/' . urlencode(str_replace(' ', '-', $this->input->post('query'))))));
			}
		}
		else
		{
			$query = str_replace('-', ' ', $this->uri->segment(2));
			
			if($query != null)
			{
				$data['keywords']	= $query;
				$data['meta']		= array(
					'title' 		=> phrase('searching') . ' "' . $query . '"',
					'descriptions'	=> phrase('searching') . ' "' . $query . '"',
					'keywords'		=> format_tag($query),
					'image'			=> guessImage('users', $slug),
					'author'		=> $this->settings['siteTitle']
				);
			}
			else
			{
				$data['keywords']	= null;
				$data['meta']		= array(
					'title' 		=> phrase('search_user'),
					'descriptions'	=> phrase('search_user'),
					'keywords'		=> 'dwitri, users, article, posts, tags, snapshots',
					'image'			=> guessImage(),
					'author'		=> $this->settings['siteTitle']
				);
			}
			
			//echo "<pre>";print_r($data);die;
			if($this->input->is_ajax_request())
			{
				$this->output->set_content_type('application/json');
				$this->output->set_output(
					json_encode(
						array(
							'meta'		=> $data['meta'],
							'html'		=> $this->load->view('priests', $data, true)
						)
					)
				);
			}
			else
			{
				$this->template->build('priests', $data);
			}
		}
	}
}
