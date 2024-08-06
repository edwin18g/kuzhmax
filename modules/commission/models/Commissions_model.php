<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Commissions_model extends CI_Model {

	public $priest_type = array(0=>'All',
								1=>'Diocesan Priests',
								2=>'Priests on Contract',
								3=>'Religious Priests',
								4=>'Religious Men',
								5=>'Other Diocesan Priests');
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