<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Parishs_model extends CI_Model
{

	function __construct()
	{
		parent::__construct();
	}
	
	function getParish($slug = null)
	{
		$query = $this->db->where('id', $slug)->get('parish');
		if($query->num_rows() > 0)
		{
			return $query->row_array();
		}
		else
		{
			return false;
		}
	}
	
		function listparish($param )
	{
		
		
		
		$status 		= $param['status']?$param['status']:null;
		$limit  		= $param['limit']?$param['limit']:10;
		$keyword 		= $param['keyword']?$param['keyword']:false;
		$slug   		= $param['slug']?$param['slug']:0;
		
		if($status != null)
		{
			$this->db->where('status', $status);
		}
		//$CI->db->limit($limit, $offset);
		if($keyword)
		{
				$this->db->like('cname',$keyword);
				$this->db->or_like('substation',$keyword);
			
		}
		
		if($slug != 0)
		{
		$this->db->where('type',$slug );	
		}
		
		//$this->db->where('level', '0');
		// $this->db->order_by('age', 'desc');
		
		$query = $this->db->get('parish');
		
		if($query->num_rows() > 0)
		{
			$return = $query->result_array();
		
			return $return;
		}
		else
		{
				// echo $this->db->last_query();die;
			return false;
		}
	}
	
	function updateUser($fields = array(), $slug = null)
	{
		if($this->db->where('userName', $slug)->limit(1)->update('users', $fields))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	function removeUser($slug = null)
	{
		if($this->session->userdata('user_level') == 1)
		{
			$query = $this->db->where('userID', $slug)->limit(1)->get('users');
			if($query->num_rows() > 0)
			{
				if($this->db->limit(1)->delete('users', array('userID' => $slug)))
				{
					return true;
				}
				else
				{
					return false;
				}
			}
			else
			{
				return false;
			}
		}
		else
		{
			return false;
		}
	}
}