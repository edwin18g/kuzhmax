<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Openletters_model extends CI_Model {

	function __construct()
	{
		parent::__construct();
	}
		
		function listCommissions($status = null, $limit = 10, $offset = 0,$keyword ,$slug )
	{
		
		
		if($status != null)
		{
			$this->db->where('status', $status);
		}
		//$CI->db->limit($limit, $offset);
		if($keyword)
		{
			$this->db->like('full_name',$keyword);
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
		
	function single_circular($param)
	{
		$this->db->select('
		*
		');
		$this->db->where('n_slug', $param['slug']);
	
		$query = $this->db->get('newsletter');
		if ($query->num_rows() > 0) {
			return $query->row_array();
		}
		else
		{
			return array();
		}
	}
}