<?php defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Model
{

	function __construct()
	{
		parent::__construct();
	}
	
	function getOwnProfile()
	{
		$query = $this->db->limit(1)->get_where('users', array('userID' => $this->session->userdata('userID')));
		if ($query->num_rows() > 0) {
			return $query->result_array();
		}
		else
		{
			return false;
		}
	}
	
	function get_home_sliders()
	{
		$this->db->where('home_slider', 1);
		$this->db->order_by('timestamp', 'DESC');
		//$this->db->limit($limit);
		return $this->db->get('snapshots')->result_array();
		
	}
	function getUser($slug = null)
	{
		$query = $this->db->where('userName', $slug)->limit(1)->get('users');
		if($query->num_rows() > 0)
		{
			if($slug != $this->session->userdata('userName'))
			{
				$this->db->where('userName', $slug);
				$this->db->limit(1);
				$this->db->set('visits_count', 'visits_count+1', FALSE);
				$this->db->update('users');
			}
			
			return $query->result_array();
		}
		else
		{
			return false;
		}
	}
	
	function getUserCustom($id)
	{
		if(isset($id))
		{
				$query = $this->db->where('id', $id)->limit(1)->get('users_customfield');
				if($query->num_rows() > 0)
		{
		
			
			return $query->row_array();
		}
		else
		{
			return false;
		}
		}
	}
	
	function getPostFeatures($param)
	{
		$query = $this->db->limit($param['limit'])->order_by('timestamp','DESC')->get('posts');
		if($query->num_rows() > 0)
		{
		
			
			return $query->result_array();
		}
		else
		{
			return false;
		}
	}
	function getCommissions($slug = null)
	{
		$query = $this->db->where('slug', $slug)->limit(1)->get('commissions');
		if($query->num_rows() > 0)
		{
		
			
			return $query->result_array();
		}
		else
		{
			return false;
		}
	}

	function getParish($slug = null)
	{
		$query = $this->db->where('slug', $slug)->limit(1)->get('parish');
		if($query->num_rows() > 0)
		{
			return $query->result_array();
		}
		else
		{
			return false;
		}
	}
	
		function getParishs($data = array())
	{
		$limit 				= ($data['limit'])?$data['limit']:false;
		$order_by     = ($data['order_by'])?$data['order_by']:false;
		
		if($limit)
		{
			$this->db->limit($limit);
		}
		if($order_by)
		{
			$this->db->order_by($order_by['column'], $order_by['value']);
		}
		$query = $this->db->get('parish');
		if($query->num_rows() > 0)
		{
			return $query->result_array();
		}
		else
		{
			return false;
		}
	}
	
	
		function getTvFeatures($data = array())
	{
		$limit 				= ($data['limit'])?$data['limit']:false;
		$order_by     = ($data['order_by'])?$data['order_by']:false;
		
		if($limit)
		{
			$this->db->limit($limit);
		}
		if($order_by)
		{
			$this->db->order_by($order_by['column'], $order_by['value']);
		}
		$query = $this->db->get('tv');
		if($query->num_rows() > 0)
		{
			return $query->result_array();
		}
		else
		{
			return false;
		}
	}
		function getCommRand($data = array())
	{
		$limit 				= ($data['limit'])?$data['limit']:false;
		$order_by     = ($data['order_by'])?$data['order_by']:false;
		
		if($limit)
		{
			$this->db->limit($limit);
		}
		if($order_by)
		{
			$this->db->order_by($order_by['column'], $order_by['value']);
		}
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
	
	function getUserFollowers($slug = null, $limit = 10, $offset = 0)
	{
		$query = $this->db->where('is_following', $this->getUserID($slug))->limit($limit, $offset)->limit($limit, $offset)->get('followers');
		if($query->num_rows() > 0)
		{
			return $query->result_array();
		}
		else
		{
			return array();
		}
	}
	
	function getUserFollowing($slug = null, $limit = 10, $offset = 0)
	{
		$query = $this->db->where(array('userID' => $this->getUserID($slug)))->limit($limit, $offset)->limit($limit, $offset)->get('followers');
		if($query->num_rows() > 0)
		{
			return $query->result_array();
		}
		else
		{
			return array();
		}
	}
	
	function getUserFriends($slug = null, $limit = 10, $offset = 0)
	{
		$userID		= $this->getUserID($slug);
		$query 		= $this->db->where('(fromID = ' . $userID . ' OR toID = ' . $userID . ') AND status = 1')->limit($limit, $offset)->get('friendships');
		if($query->num_rows() > 0)
		{
			return $query->result_array();
		}
		else
		{
			return array();
		}
	}
	
	function getUserTitle($slug = '')
	{
		$this->db->select('full_name');
		$this->db->where('userName', $slug);
		$this->db->limit(1);
		$query = $this->db->get('users');
		if ($query->num_rows() > 0)
		{
            $results = $query->result_array();
        	foreach ($results as $u)
			{
				return $u['full_name'];
			}
		}
		else
		{
			return false;
		}
	}
	
	function getUserExcerpt($slug = '')
	{
		$this->db->select('bio');
		$this->db->where('userName', $slug);
		$this->db->limit(1);
		$query = $this->db->get('users');
		if ($query->num_rows() > 0)
		{
            $results = $query->result_array();
        	foreach ($results as $u)
			{
				return truncate($u['bio'], 160);
			}
		}
		else
		{
			return false;
		}
	}
	
	function getUserTags($slug = '')
	{
		$this->db->select('userName, full_name, bio');
		$this->db->where('userName', $slug);
		$this->db->limit(1);
		$query = $this->db->get('users');
		if ($query->num_rows() > 0)
		{
            $results = $query->result_array();
        	foreach ($results as $u)
			{
				return format_tag($u['userName'] . ' ' . $u['full_name'] . ' ' . $u['bio']);
			}
		}
		else
		{
			return false;
		}
	}
	
	function getUserID($slug = '')
	{
		$this->db->select('userID');
		$this->db->where('userName', $slug);
		$this->db->limit(1);
		$query = $this->db->get('users');
		if ($query->num_rows() > 0)
		{
			return $query->row()->userID;
		}
		else
		{
			return false;
		}
	}
	
	function setLanguage()
	{
		$checker = $this->db->where(array('userName' => $this->session->userdata('userName'), 'userID' => $this->session->userdata('userID')))->limit(1)->get('users');
		if($checker->num_rows() > 0)
		{
			$this->db->where(array('userName' => $this->session->userdata('userName'), 'userID' => $this->session->userdata('userID')))->limit(1)->update('users', array('language' => $this->session->userdata('language')));
			return true;
		}
	}
	
	function stats($type = null, $start_date = null, $end_date = null)
	{
		if($type == 'visitors')
		{
			$this->db->select_sum('amount');
		}
		else
		{
			if($this->session->userdata('user_level') != 1)
			{
				$this->db->select('SUM(visits_count) as amount')->where('contributor', $this->session->userdata('userID'));
			}
			else
			{
				$this->db->select('SUM(visits_count) as amount');
			}
		}
			
		$this->db->where('timestamp >=', $start_date);
		$this->db->where('timestamp <=', $end_date);
		$query = $this->db->get($type);
		
		return $query->result();
	}
}