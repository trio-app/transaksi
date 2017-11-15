<?php

defined('BASEPATH') OR exit ('No direct script access allowed');

class RpDate extends MX_Controller{

	public function index(){
		$this->load->view('V_rpdate');
	}
	public function read(){
		$this->load->model('R_rpdate');
		$start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_pDate->load_deafult($start,$limit,$filter));

	}
	
}