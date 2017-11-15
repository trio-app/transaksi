<?php 
date_default_timezone_set("Asia/Jakarta");
defined('BASEPATH')OR exit('NO direct script access allowed');

class TTterimaout extends CI_Controller {
	public function __construct(){
		parent::__construct() ;
	}

	public function index(){
		$this->load->view('V_tterimaout');
	}

	public function create(){

	}
	
	public function update(){

	}

	public function delete(){

	}

	public function getGrd(){

	}
	
}
