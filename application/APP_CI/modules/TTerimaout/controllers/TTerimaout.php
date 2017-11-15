<?php
date_default_timezone_get("Asia/Jakarta");
defined('BASEPATH') OR exit ('No direct script access allowed');

class TTerimaout extends MX_Controller{

	public function construct(){
		parent::__construct();
	}

	public function index(){
			$this->load->view('V_terimaout');
	}
	
}