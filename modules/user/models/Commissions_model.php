<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Commissions_model extends CI_Model
{

	function __construct()
	{
		parent::__construct();
	}
	
	function get_users($param)
	{
		$this->db->like('full_name',$param['keyword']);
			$query = $this->db->get('users');
			if($query->num_rows() > 0)
		{
			return $query->result_array();
		}
		else
		{
			return false;
		}
	}
	
	function saveCommission($data)
	{
	//	echo"<pre>"; print_r($data);die;
		if(!empty($data['id']))
		{
			$this->db->where('id', $data['id']);
			if($this->db->update('commissions', $data))
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
			if($this->db->insert('commissions', $data))
			{
				//echo $this->db->last_query();die;
				return true;
			}
			else
			{
			//echo $this->db->last_query();die;
				return false;
			}
		}
		
	}
	function getCommissions($slug = null)
	{

		$query = $this->db->get('commissions');
		if($query->num_rows() > 0)
		{
			return $query->result_array();
		}
		else
		{
			return false;
		}
	}
	function getCommissionsbyId($slug = null)
	{
		$this->db->where('id',$slug);

		$query = $this->db->get('commissions');
		if($query->num_rows() > 0)
		{
			return $query->result_array();
		}
		else
		{
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
			$query = $this->db->where('id', $slug)->limit(1)->get('commissions');
			if($query->num_rows() > 0)
			{
				if($this->db->limit(1)->delete('commissions', array('id' => $slug)))
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