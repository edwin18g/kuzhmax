<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Openletters_model extends CI_Model {

	function __construct()
	{
		parent::__construct();
	//	$this->a_type = array(1=>'Bishop',2=>'Diocesan Service Team',3=>'College of Consulters');
		
	}


	function save_circular($data = array())

	{
		if(!empty($data['id']))
		{
			$this->db->where('id', $data['id']);
			if($this->db->update('newsletter', $data))
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
			if($this->db->insert('newsletter', $data))
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
	
	function get_circular($param =array())
	{
		$this->db->select('newsletter.*');
		if($param['search'])
		{
			$this->db->like('n_title',$param['search']);
		}
		$query = $this->db->get('newsletter');
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
	
	function removeadmininstraion($itemID)
	{
		
		$this->db->where('id', $itemID);
		if($this->db->limit(1)->delete('newsletter'))
		{
			return true;
		}
		else
		{
			return false;
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