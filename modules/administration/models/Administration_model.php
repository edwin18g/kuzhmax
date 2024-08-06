<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Administration_model extends CI_Model {

	function __construct()
	{
		parent::__construct();
		$this->a_type = array(1=>'Bishop',2=>'Diocesan Service Team',3=>'College of Consulters');
	}

	function getAdministration()
	{
		$this->db->select('administration.*,users.*');
		$this->db->join('users', 'administration.a_user_id = users.userID', 'left');
		$this->db->order_by('administration.a_type', 'ASC');
		$query = $this->db->get('administration');
		return $query->result_array();

	}
	
	function saveAdministration($data = array())

	{
		if(!empty($data['id']))
		{
			$this->db->where('id', $data['id']);
			if($this->db->update('administration', $data))
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
			if($this->db->insert('administration', $data))
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		
	}
	function getUsers($param =array())
	{
		$this->db->select('users.*');
		if($param['search'])
		{
			$this->db->like('full_name',$param['search']);
		}
		$query = $this->db->get('users');
		return $query->result_array();

	}
		
	function getPostSearch($keywords = null, $limit = 10, $offset = 0)
	{
		$this->db->select('
			postID,
			postTitle,
			postExcerpt,
			postSlug,
			timestamp
		');
		$this->db->like('postTitle', $keywords);
		$this->db->or_like('postContent', $keywords);
		$this->db->or_like('tags', $keywords);
		$this->db->limit($limit, $offset);
		$query = $this->db->get('posts');
		if ($query->num_rows() > 0) {
			return $query->result_array();
		}
		else
		{
			return array();
		}
	}
		
	function getSnapshotSearch($keywords = null, $limit = 10, $offset = 0)
	{
		$this->db->select('
			snapshotID,
			snapshotContent,
			snapshotSlug,
			snapshotFile,
			timestamp
		');
		$this->db->like('snapshotContent', $keywords);
		$this->db->limit($limit, $offset);
		$query = $this->db->get('snapshots');
		if ($query->num_rows() > 0) {
			return $query->result_array();
		}
		else
		{
			return array();
		}
	}
}